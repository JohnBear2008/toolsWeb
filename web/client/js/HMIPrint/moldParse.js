/*jshint esversion: 6 */
/*===========================================================================+
|    Author   : Muc
|----------------------------------------------------------------------------+
|    Describe : 模具解析界面关联的js
|    Warning
|       * TM HMI only
|       * 为了维护方便，54和55系统共用此js文件
|----------------------------------------------------------------------------+
|    Question & Answer
|       * Q1: 新增资料tab分组要动到哪些内容？
|            - 变量 : 对应view文件里的  g_mTabs 、 g_aTabOrder
|            - 外挂文件 : molddbform.js（里面的option）
|       * Q2: 写的代码太屎了？
|             - 请协助改进并通知，共同学习，共同进步 :)
|       * Q3: 为什么有些if语句内不加关系符判断 ? if (1 === True) {...}
|             - 在确保绝对正确的前提下，这样写为了简化代码
|----------------------------------------------------------------------------+
|    Obj      : 对象的所有属性可以在构造函数内找到，若有缺漏，请帮忙补充并带上注释
|----------------------------------------------------------------------------+
|    Promise  :
|       * 一般变量
|            - 匈牙利命名规则 （能通过SQL获取的数据或者与该数据对象属性同名的统一大驼峰命名）
|            - 明确数据类型的变量必须初始化
|            - 声明类型时必须用let
|       * 全局变量
|           - 使用前必须在 fnInitVariate 内手动清空，以防ajax异步处理或者遇到未知错误导致数据残留
|       * DOM元素变量
|           - 小写加下划线
|       * 等号关系运算符
|           - 明确数据类型，必须用 ===
|       * 数据表
|           - 将所有NULL变为 ''
|----------------------------------------------------------------------------+
|    Coding   : utf-8
+===========================================================================*/
// bytes占位
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
    // STRING : 8

    // 其他
    ONE: 1
};

// 用作字节序
const ENDIAN = {
    LIT: 0,
    BIG: 1
};

// TM55 资料数据类型map，例：cdb中关于数据类型的bytes位 1 表示该数据是 BOOL类型
const m55IDType = new Map([
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

// 数据类型对应的数据长度map
const mIDLen = new Map([
    ["BOOL", 2],
    ["BYTE", 1],
    ["H_BYTE", 1],
    ["WORD", 2],
    ["H_WORD", 2],
    ["DWORD", 4],
    ["H_DWORD", 4],
    ["CHAR", 1],
    ["SHORT", 2],
    ["INT", 4],
    ["FLOAT", 4],
    ["DOUBLE", 8],
    // ["STRING", 8],
    ["TIME", 4],
    ["DATA", 4],
    ["DWORD_BYTEBIG", 4],
    ["DWORD_BYTEWORDBIG", 4],
    ["WORD_BYTEBIG", 2]
]);

/* 无用的信息列表 */
const aUseLess = [
    "DataID", // 与原obj重复的DataID
    "C_MEMERY_PAD" // 内存对齐的内容
];

/*===========================================================================+
|   g_variate                                                                |
+===========================================================================*/
/* cdb & ini & info */
var g_CdbFile, // default ： LIT-Endian
    g_IniFile, // 记录了一些配置信息，例如模具头的长度等，用于解析cdb
    g_SysInfoFile,

    // g_nCdbSize = 0, // mark，暂时用不到

    g_oMold, // moldObj原型创建的实例对象

    g_cszHexMoldCdb = [], // cdbData => cszHex
    g_aIDInfoTmp = []; // 临时缓存HMI资料的信息

/* element */
var g_aDataTable = [], // 存放DataTable实例，主要用于GC
    g_aTableSheet = [];

/*===========================================================================+
|   Object                                                                   |
+===========================================================================*/
/* 模具对象原型 TM54和TM55通用 */
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
    /* system.info文件的信息，用于机型区分 */
    this.aSysInfo = {
        Manufacturer: "STD",
        CtrlType: "0000",
        MachType: "00000000",
        Reserved0: "0",
        Reserved1: "0",
        Reserved2: "0",
        Reserved3: "0",
        Reserved4: "0"
    };
    /* 获取当前文件的相对路径，基于安全策略，无法获取绝对路径 */
    this.RelativePath = "unknow";

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
/**
 * @Describle [55系统的构造函数]
 * @warning   [访问格式 MoldObj.oIDInfo[nInx].key]
 * @Author    Muc
 * @DateTime  2018-12-12
 */
function TM3354DataInfoObj(DataID, Type, nLen, nStat, dynVal) {
    // 如下信息可从cdb获得
    this.DataID = DataID;
    this.Type = Type; // 此处为与TM54同步，故采用大驼峰式命名
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

/**
 * @Describle [54系统的构造函数]
 * @warning   [访问格式 MoldObj.oIDInfo[nInx].key]
 * @Author    Muc
 * @DateTime  2018-12-12
 */
function TM270DataInfoObj(CN, dynVal, Unit, SubCN, Visb /* , DataID ,Type, Organize*/ ) {
    this.CN = CN;
    this.dynVal = dynVal;
    this.Unit = Unit;
    this.SubCN = SubCN;
    this.Visb = Visb;
    // this.DataID = DataID;
    // this.Type = Type;
    // this.Organize = Organize;
}
/*===========================================================================+
|   MainFunc                                                                 |
+===========================================================================*/
function fnTrvlEvent() {
    fnInitVariate()
        .then((resolve) => {
            let upFolder = document.getElementById("upFolder").files,
                nFileSizes = 0, // 文件大小
                sOperStat = fnQuitTrvlFolder(g_oMold, upFolder); // 用于判断是否继续 // common.js
            if (sOperStat !== "Continue") {
                return -1;
            }

            // 获取当前文件的相对路径，基于安全策略，无法获取绝对路径
            g_oMold.RelativePath = upFolder[0].webkitRelativePath;

            /* --- 遍历上传的文件夹内容，并分配文件标识 --- */
            for (let i = 0, len = upFolder.length; i < len; ++i) {
                nFileSizes += Math.round(upFolder[i].size / 1024 / 1024); // 文件大小以MB为单位
                if (upFolder[i].name.match(".cdb")) {
                    g_CdbFile = upFolder[i];
                    // g_nCdbSize = upFolder[i].size;
                } else if (upFolder[i].name.indexOf(".ini") !== -1) {
                    g_IniFile = upFolder[i];
                } else if (upFolder[i].name.indexOf(".info") !== -1) {
                    g_SysInfoFile = upFolder[i];
                }
            }

            /* --- 如下条件满足，则直接结束解析工作 --- */
            // 1、 文件夹大小 > 预期
            // 2、 cdb或ini文件丢失
            if (nFileSizes > 3) {
                alert('所选文件夹的大小 > 2MB，请确认所选文件夹是否有误');
                return -1;
            } else if (!g_CdbFile) {
                alert('所选文件夹内的cdb文件丢失，无法进行接下来的解析工作！');
                return -1;
            } else if (!g_IniFile) {
                alert('所选文件夹内的ini文件丢失，无法进行接下来的解析工作！');
                return -1;
            }

            fnGetSysInfo(g_oMold, g_SysInfoFile) // common.js
                .then((resolve) => {
                    return fnParseIniFile(g_IniFile, g_oMold);
                })
                .then((resolve) => {
                    return fnCdb2Arr(g_CdbFile, g_cszHexMoldCdb); // Ok
                })
                .then((resolve) => {
                    return fnSetObjInfoAndShow(g_oMold, g_cszHexMoldCdb);
                })
                .then((resolve) => {
                    return fnEnd();
                })
                .catch((err) => {
                    alert("感谢使用HMIPrint工具！我们在解析您的文件夹时遇到了一个未知问题！烦请拍照或截图并及时联系开发者 -- #1 Muc", err);
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

/*===========================================================================+
|   Set Object Func                                                          |
+===========================================================================*/
/**
 * @Describle [解析文件夹内的ini文件内容，并写入到构造的obj内]
 * @Author    Muc
 * @DateTime  2018-12-12
 */
function fnParseIniFile(iniArg, objArg) {
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        reader.readAsText(iniArg);

        reader.onload = function() {
            let aRslt = this.result.split("\n"), // str => Arr
                reUseLess = /\[/,
                sEOF = "";

            for (let i = 0, len = aRslt.length; i < len; ++i) {
                // 开头标识与结尾空字符不做处理
                if (aRslt[i].match(reUseLess) || aRslt[i] === sEOF)
                    continue;

                let aIniDetail = aRslt[i].split("="), // 拆分ini 中 等号两边的内容并 => {key, value}
                    k = aIniDetail[0].toLowerCase(), // 全部变成小写，免得对象属性的大小写混乱
                    v = aIniDetail[1];

                v = parseInt(v);

                objArg.oIniLen[k] = v;
            }

            /* 补充原有moldset.ini文件内未描述到的数据长度 */
            // 模具保存时间： 日+月+年+周几
            objArg.oIniLen.timelength = BYTES.DAY + BYTES.MONTH + BYTES.YEAR + BYTES.DAY_OF_WEEK;

            resolve("fnParseIniFile Done");
        };
    });
}

// cdb file convert to Array
function fnCdb2Arr(cdbArg, cszHexArg) {
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();

        reader.readAsArrayBuffer(cdbArg); // 以ArrayBuffer的形式读取
        reader.onload = function() {
            fnArrBuf2HexArr(this.result, cszHexArg);
            resolve("fnCdb2Arr Done");
        };
    });
}

/**
 * @Describle [TM55 按照模具对象分组排列HMI的资料信息]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[json]}    dataArg [ajax获取的数据]
 */
function fnSet55ObjIDInfo(objArg, dataArg) {
    let pIDInfo = objArg.oIDInfo,
        aOrgTmp = [], // 资料的组织，例：射出组织
        DataIDNum = objArg.nDataIDNum;
    /* --- 遍历"ajax获取的数据"和"构造的obj对象数据"，并做相应的匹配与赋值 --- */
    for (let i = 0, n = dataArg.length; i < n; ++i) {
        for (let j = 0; j < DataIDNum; ++j) { // 遍历由cdb和ini生成的资料信息
            if (g_aIDInfoTmp[j].DataID === dataArg[i].DataID) { // 只对匹配到的资料信息进行处理
                /*-- 给资料的值上精度 精度为0则不做处理 --*/
                let prec = dataArg[i].Prec,
                    val = g_aIDInfoTmp[j].dynVal;

                if (prec > 0) {
                    val /= Math.pow(10, prec);
                    g_aIDInfoTmp[j].dynVal = val.toFixed(prec); // 保留精度对应的小数位，针对原工具的优化
                } else if (prec < 0) {
                    g_aIDInfoTmp[j].dynVal *= (-prec); // 精度为负N则表示值需要扩大10*N倍，针对原工具的补充
                }

                /* --- k 代表资料信息的key，eg. DataID、Unit、CN、Prec、Visb、etc --- */
                for (let k in dataArg[i]) {
                    let v = dataArg[i][k]; // key对应的值，eg： DataID.val === 1024

                    // 临时缓存有效/不重复的数据，是对所有资料进行归组的依据
                    if (k !== "DataID") {
                        /* 为g_oMoni对象创建分组的类型，eg v === Inject === 射出分组 */
                        if (k === "Organize" && aOrgTmp.indexOf(v) === -1) {
                            aOrgTmp.push(v);
                            pIDInfo[v] = [];
                        } else
                            g_aIDInfoTmp[j][k] = v;
                    }

                }

                /* --- 将所有DataID信息转移到各自匹配的分组内，便于后续数据呈现 --- */
                let sOrganize = g_aIDInfoTmp[j].Organize;
                if (pIDInfo.hasOwnProperty(sOrganize)) {
                    let oIDInfo = g_aIDInfoTmp[j]; // 浅拷贝即可
                    if (oIDInfo.Visb) { // 只需要可见的数据，不可见的数据不需要push进去 // Muc 2018-12-29 TODO
                        pIDInfo[sOrganize].push(oIDInfo);
                    }
                }

            }
        }
    }
}

/**
 * @Describle [TM54 按照模具对象分组排列HMI的资料信息]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[object]}    objArg[ajax获取的数据]
 * @param     {[object]}    dataArg [ajax获取的数据]
 * @param     {[arrary]}    aCdb [用于继续解析TM54先前构造的cdb数组]
 */
function fnSet54ObjIDInfo(objArg, dataArg, aCdb) {
    for (let i = 0, n = dataArg.length; i < n; ++i) {
        // let Visb = dataArg[i].Visb;
        let CN = dataArg[i].CN,
            dynVal = 0,
            Unit = dataArg[i].Unit,
            SubCN = dataArg[i].SubCN,
            // DataID = dataArg[i].DataID,
            Type = dataArg[i].Type,
            Organize = dataArg[i].Organize,
            Visb = dataArg[i].Visb,
            nSizeLen = mIDLen.get(Type),
            Prec = dataArg[i].Prec;

        dynVal = fnSplcCszHex(objArg, nSizeLen, aCdb, ENDIAN.LIT);
        if (Prec > 0) {
            dynVal /= Math.pow(10, Prec);
            dynVal = dynVal.toFixed(Prec); // 保留精度对应的小数位，针对原工具的优化
        } else if (Prec < 0) { // 精度<0的数据，不做精度处理，节省开销，
            dynVal *= (-Prec); // 精度为负N则表示值需要扩大10*N倍，针对原工具的补充
        }

        /* 动态生成分组信息 */
        if (!objArg.oIDInfo.hasOwnProperty(Organize)) {
            objArg.oIDInfo[Organize] = [];
        }
        objArg.oIDInfo[Organize].push(new TM270DataInfoObj(CN, dynVal, Unit, SubCN, Visb /*,  DataID , Type, Organize*/ ));
    }

}

/*===========================================================================+
|   Show Func                                                               |
+===========================================================================*/
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
    fnShowTabs(objArg, "#DataUl", "#tab_content");
}

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
    let DSP55 = 2; // dsp55的标识信息，固定为2
    /* --- PART 1  get moldName (Big-Endian) --- */
    objArg.sMoldName = fnSplcCszHex(objArg, "moldlength", cszHexArg, ENDIAN.BIG);

    /* --- PART 2 get savetime，format eg. 2018-8-17 --- */
    // code：cszHex.reverse => hex String => dec => string
    let sDay = parseInt(cszHexArg.splice(0, BYTES.DAY).reverse().join(""), 16).toString(),
        sMonths = parseInt(cszHexArg.splice(0, BYTES.MONTH).reverse().join(""), 16).toString(),
        sYears = parseInt(cszHexArg.splice(0, BYTES.YEAR).reverse().join(""), 16).toString(),
        sDayOfWeek = parseInt(cszHexArg.splice(0, BYTES.DAY_OF_WEEK).reverse().join(""), 16).toString();
    objArg.sMoldTime = "{0}-{1}-{2}".format(sYears, sMonths, sDay);
    /* --- PART 3 get sMaterial (Big-Endian) --- */
    objArg.sMaterial = fnSplcCszHex(objArg, "materiallength", cszHexArg, ENDIAN.BIG);
    /* --- PART 4 get color (Big-Endian) --- */
    objArg.sColor = fnSplcCszHex(objArg, "colorlength", cszHexArg, ENDIAN.BIG);
    /* --- PART 5 get perMoldCnt --- */
    objArg.nPerMoldCnt = fnSplcCszHex(objArg, "permoldcntLength", cszHexArg, ENDIAN.LIT);
    /* --- PART 6 get media (Big-Endian) --- */
    objArg.sMedia = fnSplcCszHex(objArg, "medialength", cszHexArg, ENDIAN.BIG);
    /* --- PART 7 get version --- */
    // 可通过这version的这4个Bytes来判断主机系统
    // 55系统：值固定为2
    // 54系统：代表开模段数和关模段数，所以不可能等于2
    let sVersTmp = fnSliceCszHex(objArg, "verslength", cszHexArg, ENDIAN.LIT);
    /* --- 55dsp --- */

    // let t1 = time2stamp();
    if (sVersTmp === DSP55) { // TODO　3354分54和55两种，两种的数据结构一致，需该判断条件
        objArg.sVers = "55"; // TODO

        fnSplcCszHex(objArg, "verslength", cszHexArg, ENDIAN.LIT); // splice 版本信息
        /* PART 8 get DataIDSum and push DataIDObj */
        objArg.nDataIDNum = fnSplcCszHex(objArg, "idsum", cszHexArg, ENDIAN.LIT);
        /* PART 9 push DataIDObj and get DataIDObj.ID/type/len/stat/value */
        for (let nCnt = 0; nCnt < objArg.nDataIDNum; ++nCnt) {
            let nSizeLen = 0, // 数据长度
                dynVal = 0,
                sIDType = "",
                sTmp = "",
                nTmp = 0,
                DataID = fnSplcCszHex(objArg, BYTES.IDLEN, cszHexArg, ENDIAN.LIT);

            // get DataID.type
            sTmp = cszHexArg.splice(0, BYTES.IDTYPE).reverse().join("");
            nTmp = parseInt(sTmp, 16);
            sIDType = m55IDType.get(nTmp);

            // get DataID.stat
            let nIDStat = fnSplcCszHex(objArg, BYTES.IDSTAT, cszHexArg, ENDIAN.LIT);

            // DataID.nSizeLen，String类型是特例，第一个Bytes为数据长度len，后面len个Bytes代表数据的值
            if (sIDType === "STRING") {
                nSizeLen = fnSplcCszHex(objArg, BYTES.ONE, cszHexArg, ENDIAN.LIT);
                dynVal = fnSplcCszHex(objArg, nSizeLen, cszHexArg, ENDIAN.BIG);
            } else {
                nSizeLen = mIDLen.get(sIDType);
                dynVal = fnSplcCszHex(objArg, nSizeLen, cszHexArg, ENDIAN.LIT);
            }
            g_aIDInfoTmp.push(new TM3354DataInfoObj(DataID, sIDType, nSizeLen, nIDStat, dynVal));
        }
    }
    /* --- 54dsp --- */
    else {
        objArg.sVers = "54";
    }
    // let t2 = time2stamp();
    // console.log("耗时：" + (t2 - t1) + " 毫秒");

    getDBAndShow(objArg.aSysInfo, objArg.sVers); // TODO 传入的区分信息要改，目前是两种 “TM54系统”  “TM55系统”，两个数据库不一样

}

/**
 * @Author    Muc
 * @DateTime  2018-10-30
 * @Describle [传入系统版本信息，获取相应的DB数据]
 * @param     {[type]}    objSysArg [构造的函数对象的版本信息，传递到bizServer的model中]
 * @param     {[type]}    sVers     [不同dsp系统]
 * @return    {[type]}              [Null]
 */
function getDBAndShow(objSysArg, sVers) { // TODO 改数据库选择条件
    $("#PMsg").text("正在获取/解析数据文件，请稍后 . . .");
    let sURL = "";

    if (sVers === "55") { // TODO 改数据库选择条件
        sURL = "/app/HMIPrint/getMoldIDInfoFrDB";
    } else
        sURL = "/app/HMIPrint/getMoldIDInfoFr54DB";

    $.ajax({
        method: "get",
        url: sURL,
        data: { objSysArg: objSysArg },
        /**
         * @param     data
         * TM54       [{DataID: 100061, Block: "DB_MMICONFIG", Type: "H_BYTE", CN: "关模段数", SubCN: "", …}, ...]
         * TM55       类似如上，但是无Block和Type
         */
        success: function(data) {
            /* --- get MoldObj and show Tabs & DataTable --- */
            fnGetObjAndShow(g_oMold, data, g_cszHexMoldCdb);

            /* --- export xls event bind --- */
            let aTableID = [], // 各个DataTable的ID
                aWkSheet = [], // 各个DataTable的Tab标签页中文翻译
                sWbName = g_oMold.sFolderName;
            g_mTabs.forEach((v, k) => {
                k = "dt" + k;
                if ($("#" + k).length > 0) {
                    // 当对应的table存在时，再处理
                    aTableID.push(k);
                    aWkSheet.push(v);
                }
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

/**
 * @Describle [获取最终的Obj对象内的数据，呈现数据]
 * @Warning   [分54和55]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[object]}    dataArg [ajax get到的json数据]
 * @param     {[object]}    aCdb [仅TM54使用，即先前构造的aCdb数组内容]
 */
function fnGetObjAndShow(obj, ajaxResult, aCdb = []) {
    if (obj.sVers === "55") { // TODO 判断条件改为TM54-3354或55-3354
        fnSet55ObjIDInfo(obj, ajaxResult); // 注:先前cdb文件的内容就解析完了，所以不需要再传入aCdb内容
    } else { // TODO 判断条件改为 TM54-270
        fnSet54ObjIDInfo(obj, ajaxResult, aCdb);
    }

    fnShowMoldHdr(obj, "#moldhdr");
    fnShowTabs(obj, "#DataUl", "#tab_content");
}

/**
 * @Describle [显示模具头信息]
 * @Details   [包括：模具名、保存时间、材料、颜色、产量]
 * @Warning   [模具头信息元素要摆放在tab水平导航标签前]
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
    主机系统 : {10}
    </p>
    </blockquote>`
        .format(
            objArg.sMoldName, nbsp8,
            objArg.sMaterial, nbsp8,
            objArg.sColor, nbsp8,
            objArg.nPerMoldCnt, nbsp8,
            objArg.sMoldTime, nbsp8,
            objArg.sVers
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
function fnShowTabs(objArg, ulArg, contArg) {
    let pIDInfo = objArg.oIDInfo,
        /* === 如下开始显示数据 === */
        $ul = $(ulArg), // 水平标签导航
        $content = $(contArg), // 表格内容
        el_lis = "",
        el_dts = "",
        // 用作createTable函数的实参
        aTheadElem = [
            { data: 'CN', title: "名称" },
            { data: 'dynVal', title: "数值" },
            { data: 'Unit', title: "单位" },
            { data: 'SubCN', title: "补充说明" },
            // { data: 'DataID', title: "资料地址" }, // mark，不需要
            // { data: 'Type', title: "数据类型" },
        ];

    let sTbClass = "table table-bordered table-hover dataTable no-footer",
        // sb玩意，css乱写，现在写了width也无法窗口自适应，所以这段mark掉的代码是没有效果的
        // let sTbSubJoin = 'cellspacing="0" width="100%"';
        sTbSubJoin = 'cellspacing="0"';
    /* --- 按制定顺序呈现tab标签及其关联的表格内容 --- */
    for (let nInx = 0, nLen = g_aTabOrder.length; nInx < nLen; ++nInx) {
        let Organize = g_aTabOrder[nInx];
        if (pIDInfo.hasOwnProperty(Organize)) {
            let aCurOrgData = pIDInfo[Organize], // 当前资料分组内所有资料
                nEachOrgLen = aCurOrgData.length, // 每个资料分组内的资料个数
                aVisbOrgData = [], //
                oThead = { "data": Organize },
                sTabName = g_mTabs.get(Organize);
            /* 此分组有对应的映射值（中文翻译），且此分组至少存在一笔可见资料时，才做显示 */
            if (sTabName && nEachOrgLen) {
                for (let i = 0; i < nEachOrgLen; ++i) {
                    /* 遍历当前分组内的资料信息 */
                    if (aCurOrgData[i]) {
                        // 只有可见的资料才做显示处理
                        if (aCurOrgData[i].Visb) {
                            // 值为0xFFFF或0xFFFFFFFF的数据，将其值变为空
                            let val = aCurOrgData[i].dynVal.toString().replace(".", "");
                            if (val == 0xFFFF || val == 0xFFFFFFFF) {
                                aCurOrgData[i].dynVal = "---";
                            }

                            aVisbOrgData.push(aCurOrgData[i]);

                        } // 将可见资料push到各自归属的资料分组内
                    }
                }
                if (aVisbOrgData.length) { // 可见资料分组有资料才做标签页显示
                    /* 创建水平标签页的title */
                    let elTmp = "",
                        elTmp2 = "";
                    /* 创建各标签页内的table元素及样式 */
                    if (sTabName === "模座") { // 模具为默认 class = "active"表示当前显示的数据
                        elTmp = '<li role="presentation" class="active"><a href="#{0}" role="tab" data-toggle="tab">{1}</a></li>'.format(Organize, sTabName);
                        elTmp2 = '<div role="tabpanel" class="tab-pane fade in active" id="{0}"><table id={1} class="{2}" {3}><td>test</td></table></div>'.format(Organize, "dt" + Organize, sTbClass, sTbSubJoin);
                    } else {
                        elTmp = '<li role="presentation"><a href="#{0}" role="tab" data-toggle="tab">{1}</a></li>'.format(Organize, sTabName);
                        elTmp2 = '<div role="tabpanel" class="tab-pane fade" id="{0}"><table id={1} class="{2}" {3}><td>test</td></table></div>'.format(Organize, "dt" + Organize, sTbClass, sTbSubJoin);
                    }

                    // 请按序append，写在外面的话代码效率高但是难读懂
                    $ul.append(elTmp);
                    $content.append(elTmp2);

                    let aTbElem = aVisbOrgData,
                        dt_id = "dt" + Organize;

                    let dt = createTable(dt_id, aTbElem, aTheadElem),
                        /* 解决切换tab，DataTable 的表头的width变为0px的问题 */
                        el_target = 'a[data-toggle="tab"][href="#{0}"]'.format(Organize);
                    $(el_target).on('shown.bs.tab', (e) => { // 这里function jshint会有个warning，但不用管
                        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
                    });

                    g_aDataTable.push(dt);
                }

            }
        }
    }
}

/*===========================================================================+
|   reused Func                                                              |
+===========================================================================*/
function fnSliceCszHex(objArg, nLenArg, cszHexArg, Endian) {
    let aTmp,
        dynRslt,
        nTmp;

    if (typeof(nLenArg) === "string") {
        aTmp = cszHexArg.slice(0, objArg.oIniLen[nLenArg]);
    } else {
        aTmp = cszHexArg.slice(0, nLenArg);
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

    // 字符串代表 Obj.oIniLen属性
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

            nTmp = parseInt(nTmp, 16);
            dynRslt += String.fromCharCode(nTmp); // 通过ASCII码表获取对应的字符串
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
    let result = typeof obj.splice === 'function' ? [] : {},
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
    let sTmp = csz.join("");

    return parseInt(sTmp, 16);
}

/**
 * @Describle [convert arrary buffer to hex array]
 * @Author    Muc
 * @DateTime  2018-12-28
 */
function fnArrBuf2HexArr(aBuf, aHex) {
    let bufView = new Uint8Array(aBuf);
    for (let i = 0, len = bufView.length; i < len; ++i) {
        aHex.push(fnByte2HexStr(bufView[i]));
    }
}

/**
 * @Describle [convert byteArg to hex string]
 * @Author    Muc
 * @DateTime  2018-12-28
 */
function fnByte2HexStr(byteArg) {
    let s1 = "",
        v = byteArg.toString(16);
    if (v.length === 1) {
        v = "0" + v;
    }
    s1 += v;

    return s1;
}

/*===========================================================================+
|   Instantiation Object Func                                                |
+===========================================================================*/
function createTable(tableID, data, columns) {
    tableID = "#" + tableID;
    return $(tableID).DataTable({
        /* ========== 数据相关 ========== */
        "aLengthMenu": [
            [-1, 200, 50],
            ["所有", 200, 50]
        ],
        /* 使用对象数组，一定要配置columns，告诉 DataTables 每列对应的属性 */
        /* data = [
                {col0.key:val, col1.key:val, col2.key:val ...}, // 一行数据
                {col0.key:val, col1.key:val, col2.key:val ...},
                {col0.key:val, col1.key:val, col2.key:val ...},
                ... ]
                */
        data: data,
        /* columns = [
                {data:'col0Name'},
                {data:'col1Name'},
                {data:'col2Name'},
                ... ]
                */
        columns: columns,
        /* === 显示相关 === */
        // Muc 2018-12-04 垂直滚动条
        "scrollY": "550px",
        "scrollCollapse": "true",

        // stateSave: true, // 保存最后一次分页信息、排序信息等，默认保存2小时
        "bAutoWidth": false, // 关闭自动列宽，可提高性能，同时防止自动列宽后的紧缩风格
        "destroy": true,
        "sPaginationType": "full_numbers", // 首页尾页详细
        "bDeferRender": true, // 延迟渲染数据
        "bProcessing": true,
        // 默认的排序方式，升序排列，DataID（在第五列）
        // "aaSorting": [
        //     [4, "asc"]
        // ],
        "ordering": false, // 禁用排序 # 开什么干什么？？禁用掉
        "oLanguage": dataTable_CN, // sb玩意写本地url路径无效，这个变量定义在common.js里

        /* === 数据处理相关 ===  */

        /* === 新方法 === */

    });
}
