/*jshint esversion: 6 */
// Chenly 2018-10-17 模具解析功能模块，仅做TM支持，HT坚决不要web版
/*Note：
 * 对象的属性，假使未按照匈牙利命名规则的，则表示此项属性从DB获取；匈牙利前缀dyn表示动态数据类型
 * 对象的所有属性可以在构造函数内找到，假使有缺漏，请帮忙补充并带上注释
 * 无info文件则默认为 TM54系统
 **/
/*===========================================================================+
|   constant                                                                 |
+===========================================================================*/
const BYTES = {
    // DataID
    DATAID_SUM: 4,
    IDLEN: 4,
    IDTYPE: 1,
    IDSTAT: 1,

    // cdb中Time信息的数据长度
    DAY: 1,
    MONTH: 1,
    YEAR: 2,
    DAY_OF_WEEK: 2,

    // cdb中DataID.Type 与 len的映射表
    BYTE: 1,
    CHAR: 1,

    BOOL: 2,
    WORD: 2,
    WORD_BYTEBIG: 2,
    SHORT: 2,

    DWORD: 4,
    INT: 4,
    FLOAT: 4,
    TIME: 4,
    DATE: 4,
    DWORD_BYTEBIG: 4,
    DWORD_BYTEWORDBIG: 4,

    DOUBLE: 8,
    // STRING         : 8

    // 其他
    ONE: 1
};

const ENDIAN = {
    LIT: 0,
    BIG: 1
};

const mIDType = new Map([
    [1, "BOOL"],
    [2, "BYTE"],
    [3, "WORD"],
    [4, "DWORD"],
    [5, "CHAR"],
    [6, "SHORT"],
    [7, "INT"],
    [8, "FLOAT"],
    [9, "DOUBLE"],
    [10, "STRING"],
    [11, "TIME"],
    [12, "DATA"],
    [13, "DWORD_BYTEBIG"],
    [14, "DWORD_BYTEWORDBIG"],
    [15, "WORD_BYTEBIG"]
]);

const mIDLen = new Map([
    ["BOOL", 2],
    ["BYTE", 1],
    ["WORD", 2],
    ["DWORD", 4],
    ["CHAR", 1],
    ["SHORT", 2],
    ["INT", 4],
    ["FLOAT", 4],
    ["DOUBLE", 8],
    // ["STRING"         , 8],
    ["TIME", 4],
    ["DATA", 4],
    ["DWORD_BYTEBIG", 4],
    ["DWORD_BYTEWORDBIG", 4],
    ["WORD_BYTEBIG", 2]
]);

/* 用来翻译水平标签页上的文字，表示资料分组，例：吹气，模具、储料 */
const mTABORDER = new Map([
    ["Mold", "模座"],
    ["Inject", "射出"],
    ["Gate", "阀门"],
    ["Chrg", "储料", ],
    ["Eject", "托模"],
    ["AirBlast", "吹气"],
    ["Core", "中子"],
    ["Nozzl", "座台"],
    ["Temper", "温度"],
    ["Product", "生产"],
    ["Moni", "监测"],
    ["Alarm", "警报"],
    ["Other", "其他"],
]);

var m

/* 无用的信息列表 */
const aUseLess = [
    "DataID", // 与原obj重复的DataID
    "C_MEMERY_PAD" // 内存对齐的内容
];

const g_ORDERLIST = ["Mold",
    "Inject",
    "Gate",
    "Chrg",
    "Eject",
    "AirBlast",
    "Core",
    "Nozzl",
    "Temper",
    "Product",
    "Moni",
    "Alarm",
    "Other"
];

/*===========================================================================+
|   g_variate                                                                |
+===========================================================================*/
/* cdb & ini & info */
var g_CdbFile, // default ： LIT-Endian
    g_IniFile, // 记录了一些配置信息，例如模具头的长度等，用于解析cdb
    g_SysInfoFile,

    g_nCdbSize,

    g_oMold, // moldObj原型创建的实例对象

    g_cszHexMoldCdb = [], // cdbData => cszHex
    g_aIDInfoTmp = []; // 临时缓存HMI资料的信息

/* element */
var g_aDataTable = [], // 存放DataTable实例，主要用于GC
    g_aTableSheet = [];

/*===========================================================================+
|   Object                                                                   |
+===========================================================================*/
/* 模具对象原型 */
function MoldObj() {
    // 如下信息需从cdb获得
    this.sMoldName = "";
    this.sMoldTime = "";
    this.sMaterial = "";
    this.sColor = "";
    this.nPerMoldCnt = 0;
    this.sMedia = ""; // 媒介，暂无实际大作用
    this.sVers = "";
    this.nDataIDNum = 0;

    /**
     * [oIDInfo 资料信息]
        oIDInfo = {
                AirBlast : [{DataID:1024, CN:公模吹气动作位置, Unit:mm ...}, {object}, {object}],
                Mold: ...,
                ...
        }
     */
    this.oIDInfo = {};
    // this.aIDInfo2 = [];
    // 如下信息从moldset.ini中获取并补充缺省的内容，用于存放moldset.ini中各种资料数据长度的信息及没有提及的资料数据长度信息
    this.oIniLen = {
        permoldcntLength: 2, // 单模产量
        medialength: 2,
        verslength: 4,
        idsum: 4,
        // 如下内容需从moldset.ini获取到，这里写出来仅做原型参照
        moldlength: 0,
        timelength: 6,
        materialLength: 6, // 非0表示54和55系统的统一数值
        colorlength: 6,
        com2tempset: 0,
        mmiconfig: 0,
        moldhdr: 0,
        moldset: 0,
        moldsetb: 0,
        moldsetlength: 0,
        monitor: 0
    };

    this.aSysInfo = {
        Manufacturer: "STD", // 默认调用 海天54系统的DB，TM54不做考虑
        CtrlType: "0000",
        MachType: "00000000",
        Reserved0: "0",
        Reserved1: "0",
        Reserved2: "0",
        Reserved3: "0",
        Reserved4: "0"
    };

    this.RelativePath = "unknow"; // 获取当前文件的相对路径，基于安全策略，无法获取绝对路径

    // Chenly 2018-10-16 test
    // if (typeof MoldObj._bInit === "undefined") {
    //     /* 设置DataInfo的内容 */
    //     MoldObj.prototype.fnPushObj = function(subObj) {
    //         this.oIDInfo.push(subObj);

    //         MoldObj._bInit = true;
    //     };
    // }
}

/*===========================================================================+
|   Sub Object                                                               |
+===========================================================================*/
/* 模具特征（材料/颜色/每模产量/媒介）*/
function IdentifyObj(sMeterial, sColor, nPerMoldCnt, sMedia) {
    this.sMeterial = sMeterial;
    this.sColor = sColor;
    this.nPerMoldCnt = nPerMoldCnt;
    this.sMedia = sMedia;
}

// 访问格式 MoldObj.oIDInfo[nInx].key
function TM55DataInfoObj(DataID, sType, nLen, nStat, dynVal) {
    // 如下信息可从cdb获得
    this.DataID = DataID;
    this.sType = sType;
    this.nLen = nLen;
    this.nStat = nStat; // 读写状态
    this.dynVal = dynVal;

    // 如下信息从数据库获得，这里仅做显示参考，从数据库获取的数据均采用帕斯卡命名方式
    // this.Visb = Visb; // 是否可见
    // this.Prec = Prec; // 小数位数， 0表示无精确， 1表示精确到一位小数， 2表示精确到两位小数
    // this.Organize = Organize; // 归组，其他-0，关模-1，射出-2，托模-3，储料-4，中子-5，座台-6，温度-7，开模-10
    // this.Unit = Unit; //单位，eg. % Bar mm 。。。 etc，具体以数据库列名为准（因HMI的db.xls命名不规范）
    // this.CN = CN;
    // this.TW = TW;
    // this.EN = EN;
}

/*===========================================================================+
|   MainFunc                                                                 |
+===========================================================================*/
function fnTrvlEvent() {
    fnInitVariate()
        .then((resolve) => {
            var upFolder = document.getElementById("upFolder").files;
            var nFileSizes = 0;
            var sOperStat = fnQuitTrvlFolder(g_oMold, upFolder); // common.js
            if (sOperStat !== "Continue") {
                return -1;
            }

            // 获取当前文件的相对路径，基于安全策略，无法获取绝对路径
            g_oMold.RelativePath = upFolder[0].webkitRelativePath;

            // Chenly 2018-09-27 分配ini和cdb文件变量
            for (var i = 0, len = upFolder.length; i < len; ++i) {
                nFileSizes += Math.round(upFolder[i].size / 1024 / 1024);
                if (upFolder[i].name.match(".cdb")) {
                    g_CdbFile = upFolder[i];
                    g_nCdbSize = upFolder[i].size;
                } else if (upFolder[i].name.indexOf(".ini") !== -1) {
                    g_IniFile = upFolder[i];
                } else if (upFolder[i].name.indexOf(".info") !== -1) {
                    g_SysInfoFile = upFolder[i];
                }
            }

            /* 假使文件夹超过预期大小，则直接return */
            /* 假设cdb或ini文件丢失，则直接return */
            if (nFileSizes > 2) {
                alert('所选文件夹的大小 > 2MB，请确认所选文件夹是否有误');
                return -1;
            } else if (!g_CdbFile) {
                alert('所选文件夹内的cdb文件丢失，无法进行接下来的解析工作！');
                return -1;
            } else if (!g_IniFile) {
                alert('所选文件夹内的ini文件丢失，无法进行接下来的解析工作！');
                return -1;
            }

            fnGetSysInfo(g_oMold, g_SysInfoFile)
                .then((resolve) => {
                    // console.log(resolve);
                    return fnVerifyVers(g_SysInfoFile);
                })
                .then((resolve) => {
                    // console.log(resolve);
                    return fnParseIniFile(g_IniFile, g_oMold);
                })
                .then((resolve) => {
                    // console.log(resolve);
                    return fnCdb2Arr(g_CdbFile, g_cszHexMoldCdb); // Ok
                })
                .then((resolve) => {
                    // console.log(resolve);
                    return fnSetObjInfoAndShow(g_oMold, g_cszHexMoldCdb);
                })
                .then((resolve) => {
                    // console.log(resolve);
                    return fnEnd();
                })
                .catch((err) => {
                    alert("恭喜你发现了未知错误，请联系开发者 #1 Muc", err);
                });
        });
}

function fnInitVariate(upFolder) {
    return new Promise((resolve, reject) => {
        // Init Obj
        g_oMold = new MoldObj();
        g_oMold.sFolderName = "mold";
        g_cszHexMoldCdb = [];
        g_aIDInfoTmp = [];
        g_aTableSheet = [];

        g_upFolder = upFolder;

        // 清空全局的file标识
        g_CdbFile = undefined;
        g_IniFile = undefined;
        g_SysInfoFile = undefined;

        /* === 销毁上次解析呈现的所有元素，防止显示异常 === */
        let $moldhdr = $("#moldhdr"),
            $ul = $("#DataUl"), // 水平标签导航
            $content = $("#tab_content"); // 表格内容
        $moldhdr.empty();
        $ul.empty();
        $content.empty();

        /* 销毁DataTable实例，防止显示异常 */
        for (let nInx = 0, nLen = g_aDataTable.length; nInx < nLen; ++nLen) {
            if (g_aDataTable[nInx]) {
                delete g_aDataTable[nInx];
            } else {
                break;
            }
        }

        resolve("fnInitVariate Done");
    });
}

function fnEnd() {
    return new Promise((resolve, reject) => {
        $("#upFolder").val(''); // 清空上传文件的标识，防止多次选择错误的文件夹后，提示信息只触发一次的问题现象

        resolve("fnEnd Done");
    });

}

// 判断HMI程式新旧（有info文件为新，无info的为旧）
function fnVerifyVers(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve("fnVerifyVers Done #OLD");
        } else
            resolve("fnVerifyVers Done #NEW");
    });
}

// 创建新的数据
function fnParseIniFile(iniArg, objArg) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(iniArg);

        reader.onload = function() {
            var aRslt = this.result.split("\n"); // str => Arr
            var reUseLess = /\[/;
            var sEOF = "";

            for (var i = 0, len = aRslt.length; i < len; ++i) {
                // 开头标识与结尾空字符不做处理
                if (aRslt[i].match(reUseLess) || aRslt[i] === sEOF)
                    continue;

                var aIniDetail = aRslt[i].split("="); // 拆分ini 中 等号两边的内容 => arr[0] arr[1]
                var sSign = aIniDetail[0].toLowerCase(); // 全部变成小写，免得对象属性的大小写混乱
                var nNum = aIniDetail[1];

                nNum = parseInt(nNum);

                objArg.oIniLen[sSign] = nNum;
            }

            /* 补充原有moldset.ini文件内未描述到的数据长度 */
            // 模具保存时间： 日+月+年+周几
            objArg.oIniLen.timelength = BYTES.DAY + BYTES.MONTH + BYTES.YEAR + BYTES.DAY_OF_WEEK;

            resolve("fnParseIniFile Done");
        };
    });
}

// cdb => Array
function fnCdb2Arr(cdbArg, cszHexArg) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();

        reader.readAsArrayBuffer(cdbArg); // 以ArrayBuffer的形式读取
        reader.onload = function() {
            fnBuf2HexArr(this.result, cszHexArg);
            resolve("fnCdb2Arr Done");
        };
    });
}

// 设置MoldObj的值
function fnSetObjInfoAndShow(objArg, cszHexArg) {
    return new Promise(function(resolve, reject) {
        fnTrvlCdbArr(objArg, cszHexArg); // 并从cdb和数据库中读取信息
        resolve("fnSetObjInfoAndShow Done");
    });

}

/**
 * @Author    Muc
 * @DateTime  2018-11-09
 * @Describle [通过解析成功后的td\tr字符串数据，直接展示先前的数据]
 */
function fnShowSnap(objArg) {
    fnShowMoldHdr(objArg, "#moldhdr");
    fnShowTabData(objArg, "#DataUl", "#tab_content");
}

/*===========================================================================+
|   Other Func                                                               |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-10-17
 * @Describle [Parse cdb_file and set obj]
 * @return    {[type]}           [description]
 */
function fnTrvlCdbArr(objArg, cszHexArg) {
    // 如下几个PART为 属性赋值过程
    // 过程必须按照如下顺序来，同时将代码分开写便于代码理解与优化执行效率
    // DataID笔数过多且有规律，故所有DataID以for循环的方式赋值
    /* PART 0  Verify factory and dsp.system */
    let nTM55 = 2;
    /* PART 1  get moldName (Big-Endian) */
    objArg.sMoldName = fnSplcCszHex(objArg, "moldlength", cszHexArg, ENDIAN.BIG);

    /* PART 2 get savetime，format eg. 2018-8-17*/
    // code：cszHex.reverse => hex String => dec => string
    let sDay = parseInt(cszHexArg.splice(0, BYTES.DAY).reverse().join(""), 16).toString(),
        sMonths = parseInt(cszHexArg.splice(0, BYTES.MONTH).reverse().join(""), 16).toString(),
        sYears = parseInt(cszHexArg.splice(0, BYTES.YEAR).reverse().join(""), 16).toString(),
        sDayOfWeek = parseInt(cszHexArg.splice(0, BYTES.DAY_OF_WEEK).reverse().join(""), 16).toString();
    objArg.sMoldTime = "{0}-{1}-{2}".format(sYears, sMonths, sDay);
    /* PART 3 get sMaterial (Big-Endian) */
    objArg.sMaterial = fnSplcCszHex(objArg, "materiallength", cszHexArg, ENDIAN.BIG);
    /* PART 4 get color (Big-Endian) */
    objArg.sColor = fnSplcCszHex(objArg, "colorlength", cszHexArg, ENDIAN.BIG);
    /* PART 5 get perMoldCnt */
    objArg.nPerMoldCnt = fnSplcCszHex(objArg, "permoldcntLength", cszHexArg, ENDIAN.LIT);
    /* PART 6 get media (Big-Endian) */
    objArg.sMedia = fnSplcCszHex(objArg, "medialength", cszHexArg, ENDIAN.BIG);
    /* PART 7 get version*/
    objArg.sVers = fnSplcCszHex(objArg, "verslength", cszHexArg, ENDIAN.LIT);
    if (objArg.sVers === nTM55) { // TM55 解析规则与54不一样，故需做区分处理
        /* PART 8 get DataIDSum and push DataIDObj */
        objArg.nDataIDNum = fnSplcCszHex(objArg, "idsum", cszHexArg, ENDIAN.LIT);
        /* PART 9 push DataIDObj and get DataIDObj.ID/type/len/stat/value */
        let nDataIDNum = objArg.nDataIDNum;
        for (let nCnt = 0; nCnt < nDataIDNum; ++nCnt) {
            let nLen = 0,
                dynVal = 0,
                sIDType = "",
                sTmp = "",
                nTmp = 0,
                DataID = fnSplcCszHex(objArg, BYTES.IDLEN, cszHexArg, ENDIAN.LIT);

            // get DataID.type
            sTmp = cszHexArg.splice(0, BYTES.IDTYPE).reverse().join("");
            nTmp = parseInt(sTmp, 16);
            sIDType = mIDType.get(nTmp);

            // get DataID.stat
            let nIDStat = fnSplcCszHex(objArg, BYTES.IDSTAT, cszHexArg, ENDIAN.LIT);

            // DataID.nLen，String类型是特例，第一个Bytes为数据长度len，后面len个Bytes代表数据的值
            if (sIDType === "STRING") {
                nLen = fnSplcCszHex(objArg, BYTES.ONE, cszHexArg, ENDIAN.LIT);
                dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, ENDIAN.BIG);
            } else {
                nLen = mIDLen.get(sIDType);
                dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, ENDIAN.LIT);
            }
            g_aIDInfoTmp.push(new TM55DataInfoObj(DataID, sIDType, nLen, nIDStat, dynVal));
        }
        getMoldIDInfoFrDB(objArg.aSysInfo);

    } else {
        delete objArg.sVers;
        alert("TM54系统的解析功能正在完善中，尽情期待 ... ");
    }

}

/**
 * @Describle [按照模具对象分组排列HMI的资料信息]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[json]}    dataArg [ajax获取的数据]
 */
function fnSetObjIDInfo(objArg, dataArg) {
    let pIDInfo = objArg.oIDInfo;
    let aOrgTmp = []; // 资料的组织，例：射出组织
    let DataIDNum = objArg.nDataIDNum;
    for (let oInfo in dataArg) {
        for (let nInfox = 0; nInfox < DataIDNum; ++nInfox) { // 遍历由cdb和ini生成的资料信息
            if (g_aIDInfoTmp[nInfox].DataID === dataArg[oInfo].DataID) { // 只对有效的资料信息进行处理

                /*-- 给资料的值上精度 精度为0则不做处理 --*/
                let nPrecTmp = dataArg[oInfo].Prec;
                let fValTmp = g_aIDInfoTmp[nInfox].dynVal;
                if (dataArg[oInfo].Prec > 0) {
                    fValTmp /= Math.pow(10, nPrecTmp);
                    g_aIDInfoTmp[nInfox].dynVal = fValTmp.toFixed(nPrecTmp); // 保留精度对应的小数位，针对原工具的优化
                } else if (nPrecTmp < 0) { // 精度<0的数据，不做精度处理，节省开销，
                    g_aIDInfoTmp[nInfox].dynVal *= (-nPrecTmp); // 精度为负N则表示值需要扩大10*N倍，针对原工具的补充
                }

                /*-- k 代表资料信息的key，eg. DataID、Unit、CN、etc --*/
                for (let k in dataArg[oInfo]) {
                    let v = dataArg[oInfo][k]; // key对应的值，eg： DataID.val === 1024

                    // 临时缓存有效/不重复的数据，是对所有资料进行归组的依据
                    if (k !== "DataID") {
                        g_aIDInfoTmp[nInfox][k] = v;
                    }

                    /* 为g_oMoni对象创建分组的类型，eg v ==== Inject*/
                    if (k === "Organize" && aOrgTmp.indexOf(v) === -1) {
                        aOrgTmp.push(v);
                        pIDInfo[v] = [];
                    }

                }

                /*-- 将所有DataID信息转移到各自匹配的分组内，便于后续数据呈现 --*/
                let sOrganize = g_aIDInfoTmp[nInfox].Organize;
                if (pIDInfo.hasOwnProperty(sOrganize)) {
                    let oIDInfo = g_aIDInfoTmp[nInfox]; // 浅拷贝即可
                    delete oIDInfo.Organize; // 删除无用内容
                    if (oIDInfo.Visb) {
                        pIDInfo[sOrganize].push(oIDInfo);
                    }
                }

            }
        }
    }
}

/**
 * @Describle [显示模具头信息]
 * @Details   [包括：模具名、保存时间、材料、颜色、产量]
 * @Warning   [元素要拜访在tab水平导航标签前]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @return    {[type]}    [description]
 */
function fnShowMoldHdr(objArg, idArg) {
    let $moldhdr = $(idArg);
    let sMoldHdr = "";
    let nbsp8 = "&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp";
    sMoldHdr =
        `<blockquote class="layui-elem-quote layui-text">
        <p>
            模具名称 : {0}{1};
            材料 :    {2}{3};
            颜色 :    {4}{5};
            每模产量 : {6}{7};
            保存时间 : {8}{9};
        </p>
        </blockquote>`
        .format(
            objArg.sMoldName, nbsp8,
            objArg.sMaterial, nbsp8,
            objArg.sColor, nbsp8,
            objArg.nPerMoldCnt, nbsp8,
            objArg.sMoldTime, nbsp8
        );

    $moldhdr.append(sMoldHdr);
}

/**
 * @Describle [读取obj内容，呈现数据]
 * @Details   呈现的数据：模具名称、 水平导航标签、 数据DataTable实例、
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[type]}    ulArg   [祖先元素]
 * @param     {[type]}    contArg [父元素]
 */
function fnShowTabData(objArg, ulArg, contArg) {
    let pIDInfo = objArg.oIDInfo;
    /* === 如下开始显示数据 === */
    let $ul = $(ulArg), // 水平标签导航
        $content = $(contArg), // 表格内容
        el_lis = "",
        el_dts = "",
        // 用作createTable函数的实参
        aTheadElem = [
            { data: 'CN', title: "名称" },
            { data: 'dynVal', title: "数值" },
            { data: 'Unit', title: "单位" },
            { data: 'SubCN', title: "补充说明" },
            { data: 'DataID', title: "资料地址" },
            { data: 'sType', title: "数据类型" },
        ];

    let sTbClass = "table table-bordered table-hover dataTable no-footer";
    // wdnmd sb框架css给写死了宽度，现在写了width也无法窗口自适应
    // let sTbSubJoin = 'cellspacing="0" width="100%"';
    let sTbSubJoin = 'cellspacing="0"';

    /* --- 按制定顺序呈现tab标签及其关联的DataTable --- */
    for (let nInx = 0, nLen = g_ORDERLIST.length; nInx < nLen; ++nInx) {
        let organize = g_ORDERLIST[nInx];
        if (pIDInfo.hasOwnProperty(organize)) {
            let oThead = { "data": organize };
            let el_txt = mTABORDER.get(organize);
            if (el_txt) {
                /* 创建水平标签页的title */
                let elTmp = "",
                    elTmp2 = "";
                /* 创建各标签页内的table元素及样式 */
                if (el_txt === "模座") { // 模具为默认 class = "active"表示当前显示的数据
                    elTmp = '<li role="presentation" class="active"><a href="#{0}" role="tab" data-toggle="tab">{1}</a></li>'.format(organize, el_txt);
                    elTmp2 = '<div role="tabpanel" class="tab-pane fade in active" id="{0}"><table id={1} class="{2}" {3}><td>test</td></table></div>'.format(organize, "dt" + organize, sTbClass, sTbSubJoin);
                } else {
                    elTmp = '<li role="presentation"><a href="#{0}" role="tab" data-toggle="tab">{1}</a></li>'.format(organize, el_txt);
                    elTmp2 = '<div role="tabpanel" class="tab-pane fade" id="{0}"><table id={1} class="{2}" {3}><td>test</td></table></div>'.format(organize, "dt" + organize, sTbClass, sTbSubJoin);
                }

                // 请按序append，写在外面的话代码效率高但是难读
                $ul.append(elTmp);
                $content.append(elTmp2);

                let aTbElem = pIDInfo[organize];
                let dt_id = "dt" + organize;

                /* Part1 设置table除表头外的数据 */
                let dt = createTable(dt_id, aTbElem, aTheadElem);

                /* 解决切换tab，DataTable 的表头的width变为0px的问题 */
                let el_target = 'a[data-toggle="tab"][href="#{0}"]'.format(organize);
                $(el_target).on('shown.bs.tab', (e) => { // 这里function会有个warning，但不用管
                    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
                });

                g_aDataTable.push(dt);
            }
        }
    }
}

/**
 * @Describle [获取最终的Obj对象内的数据，呈现数据]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[json]}    dataArg [ajax get到的json数据]
 */
function fnGetObjAndShow(objArg, dataArg) {
    fnSetObjIDInfo(objArg, dataArg);
    fnShowMoldHdr(objArg, "#moldhdr");
    fnShowTabData(objArg, "#DataUl", "#tab_content");
}

/**
 * @Author    Muc
 * @DateTime  2018-10-30
 * @Describle [传入系统版本信息，获取相应的DB数据]
 * @Warning   [Warning]
 * @param     {[type]}    objSysArg [description]
 * @return    {[type]}              [description]
 */
function getMoldIDInfoFrDB(objSysArg) {
    // var aRslt = [];
    $("#PMsg").text("正在获取/解析数据文件，请稍后 . . .");
    $.ajax({
        method: "get",
        url: "/app/HMIPrint/getMoldIDInfoFrDB",
        data: { objSysArg: objSysArg }, // objSysArg: 传递到bizServer的model中的参数

        success: function(data) {
            // console.log(data); // 这里get到的结构为 [{Organize:Mold, Unit:mm, ...}, {Organize:Mold, Unit:sec, ...}, ...]

            /* --- get MoldObj and show Tab & DataTable --- */
            fnGetObjAndShow(g_oMold, data);

            /* --- export xls event bind --- */
            let aTableID = [], // 各个DataTable的ID
                aWkSheet = [], // 各个DataTable的Tab标签页中文翻译
                sWbName = g_oMold.sFolderName;
            mTABORDER.forEach((v, k) => {
                aTableID.push("dt" + k);
                aWkSheet.push(v);
            });
            fnExpBtnBind("dlink", aTableID, aWkSheet, sWbName, "Excel");

            /* --- save MoldObj to IndexedDB --- */
            fnSaveObj2InxDB(g_oMold, "HMIPrint");
        },
        error: function() {
            alert('远程服务器开小差啦，请重新刷新一下页面再试试! #moldParse.js');
        },
        complete: function() {
            /* 清空提示字串内容 */
            $("#PMsg").text("");
        }
    });
}

/*===========================================================================+
|   reused Func                                                              |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-10-18
 * @Describle [splice cszHexArr and convert to String(Big-endian) / DecNum(lit-endian)]
 * @Warning   [call this function by real order]
 * @param     {[type]}    nLenArg   [special: obj，nLenArg == obj.key;  get splice length]
 * @return    {[type]}              [Parsed data]
 */
function fnSplcCszHex(objArg, nLenArg, cszHexArg, Endian) {
    let aTmp,
        dynRslt,
        nTmp;

    if (typeof(nLenArg) === "string") {
        aTmp = cszHexArg.splice(0, objArg.oIniLen[nLenArg]);
    } else {
        aTmp = cszHexArg.splice(0, nLenArg);
    }

    // BIG-Endian 则对照ASCII码解析
    if (Endian === ENDIAN.BIG) {
        dynRslt = ""; // init dynRslt
        for (let nInx = 0, nLen = aTmp.length; nInx < nLen; ++nInx) {
            nTmp = aTmp[nInx];

            // 空字符无需进行ASCII码转换
            if (nTmp == 0)
                continue;
            // 使用构造对象模型，需要判断对象属性是否为undefined

            nTmp = parseInt(nTmp, 16);
            dynRslt += String.fromCharCode(nTmp);
        }
    } else if (Endian === ENDIAN.LIT) { // LIT-ENDIAN 则 cszHex.reverse => str => DecNum
        dynRslt = parseInt(aTmp.reverse().join(""), 16);
    }

    return dynRslt;
}

/**
 * @Author    Muc
 * @DateTime  2018-10-22
 * @Warning   [会丢掉构造函数原型]
 */
function fnDeepClone(obj) {
    var result = typeof obj.splice === 'function' ? [] : {},
        k;

    if (obj && typeof obj === 'object') {
        for (k in obj) {
            if (obj[k] && typeof obj[k] === 'object') {
                result[k] = fnDeepClone(obj[k]); //如果对象的属性值为object的时候，递归调用deepClone，即再把某个值对象复制一份到新的对象的对应值中
            } else {
                result[k] = obj[k]; //如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
            }

        }
        return result;
    }

    return obj;
}

function fnCszHexToInt(csz) {
    var sTmp = csz.join("");

    return parseInt(sTmp, 16);
}

function fnBuf2HexArr(aBuf, aHex) {
    var bufView = new Uint8Array(aBuf);
    for (var i = 0, len = bufView.length; i < len; ++i) {
        aHex.push(fnByte2HexStr(bufView[i]));
    }
}

function fnByte2HexStr(byte) {
    var str = "";

    var tmp = byte.toString(16);
    if (tmp.length === 1) {
        tmp = "0" + tmp;
    }
    str += tmp;

    return str;
}

/*===========================================================================+
|   function     return a  created obj                                       |
+===========================================================================*/
function createTable(tableID, data, columns) {
    tableID = "#" + tableID;
    return $(tableID).DataTable({
        /* ========== 数据相关 ========== */
        "aLengthMenu": [
            [-1, 300, 200, 100, 50, 10],
            ["所有", 300, 200, 100, 50, 10]
        ],
        /* 使用对象数组，一定要配置columns，告诉 DataTables 每列对应的属性 */
        /* data = [
                {col1:val, col2:val, col3:val ...},
                {col1:val, col2:val, col3:val ...},
                ... ]
         */
        data: data,
        /* columns = [
                {data:'col1'},
                {data:'col2'},
                {data:'col3'},
                ... ]
         */
        columns: columns,
        /* === 显示相关 === */
        /* TODO 固定表头，防止数据行滚动时看不到表头 */
        // fixedHeader: {
        //     header: true,
        //     footer: true
        // },

        // Muc 2018-12-04 垂直滚动条
        "scrollY": "550px",
        "scrollCollapse": "true",
        "scrollX": true,

        // stateSave: true, // 保存最后一次分页信息、排序信息等，默认保存2小时
        "bAutoWidth": false, // 关闭自动列宽，可提高性能，同时防止自动列宽后的紧缩风格
        "destroy": true,
        // "bLengthChange": false,
        // "bPaginate": false,
        "sPaginationType": "full_numbers", // 首页尾页详细
        "bDeferRender": true, // 延迟渲染数据
        "bProcessing": true,
        // 默认的排序方式，升序排列，DataID（在第五列）
        "aaSorting": [
            [4, "asc"]
        ],
        "oLanguage": dataTable_CN, // sb框架写本地url路径无效，这个变量定义在common.js里

        /* === 数据处理相关 ===  */


        /* === 新方法 === */


    });
}
