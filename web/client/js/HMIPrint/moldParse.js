// Chenly 2018-10-17 模具解析功能模块，目前仅 TM55 3354系统；其他均需调整
/*Note：
 * 对象的属性，假使未按照匈牙利命名规则的，则表示此项属性从DB获取
 **/
/*===========================================================================+
|   constant                                                                 |
+===========================================================================*/
var nBytes = {
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


var bEndian = {
    LIT: 0,
    BIG: 1
};

var mIDType = new Map([
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

var mIDLen = new Map([
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

/* 无用的信息列表 */
var aUseLess = [
    "DataID", // 与原obj重复的DataID
    "C_MEMERY_PAD" // 内存对齐的内容
];

// Chenly 2018-10-19 mark，使用这种方式传参会浪费 几ms的时间
// var mMoldOther = new Map([
//     ["materiallength", bEndian.BIG],
//     ["colorlength", bEndian.BIG],
//     ["permoldcntLength", bEndian.LIT],
//     ["medialength", bEndian.BIG],
//     ["verslength", bEndian.LIT],
//     ["idsum", bEndian.LIT]
// ]);

/*===========================================================================+
|   variate                                                                  |
+===========================================================================*/
var g_CdbFile, // default ： LIT-Endian
    g_IniFile, // 记录了一些配置信息，例如模具头的长度等，用于解析cdb
    g_SysInfoFile,

    g_nCdbSize,

    g_oMold, // moldObj原型创建的实例对象

    g_cszHexMoldCdb, // cdbData => cszHex
    aDataID = [];
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
    this.nDataIDSum = 0;
    this.aDataInfo = []; // 存放 DataInfoObj

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
        Manufacturer: "STD",
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
    //         this.aDataInfo.push(subObj);

    //         MoldObj._bInit = true;
    //     };
    // }
}

/*===========================================================================+
|   SubObj                                                                   |
+===========================================================================*/
/* 模具特征（材料/颜色/每模产量/媒介）*/
function IdentifyObj(sMeterial, sColor, nPerMoldCnt, sMedia) {
    this.sMeterial = sMeterial;
    this.sColor = sColor;
    this.nPerMoldCnt = nPerMoldCnt;
    this.sMedia = sMedia;
}

// 访问格式 MoldObj.aDataInfo[nInx].KEY
function TM55DataInfoObj(nDataID, sType, nLen, nStat, dynVal) {
    // 如下信息可从cdb获得
    this.nDataID = nDataID;
    this.sType = sType;
    this.nLen = nLen;
    this.nStat = nStat; // 读写状态
    this.dynVal = dynVal;

    // 如下信息从数据库获得，这里仅做显示参考，从数据库获取的数据均采用帕斯卡命名方式
    // this.Visb = Visb; // 是否可见
    // this.Prec = Prec; // 小数位数， 0表示无精确， 1表示精确到一位小数， 2表示精确到两位小数
    // this.Component = Component; // 归组，其他-0，关模-1，射出-2，托模-3，储料-4，中子-5，座台-6，温度-7，开模-10
    // this.Unit = Unit; //单位，eg. % Bar mm 。。。
    // etc，具体以数据库列名为准（因HMI的db.xls命名不规范）
    // // 中繁英
    // this.CN = CN;
    // this.TW = TW;
    // this.EN = EN;
}


/*===========================================================================+
|   MainFunc                                                                 |
+===========================================================================*/
function fnTrvlEvent() {
    fnInitVariate(); // init and clear
    fnTrvlFolder();
    $('#upFolder').val(''); // 清空上传文件的标识，防止多次选择错误的文件夹后，提示信息只触发一次的问题现象
}

// 处理上传的Folder内的cdb和ini数据，并呈现数据结果
function fnTrvlFolder() {
    var upFolder = document.getElementById('upFolder').files;
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
        .then(function() {
            return fnParseIniFile(g_IniFile, g_oMold);
        })
        .then(function() {
            return fnCdb2Arr(g_CdbFile, g_cszHexMoldCdb); // Ok
        })
        .then(function() {
            return fnSetDataIDInfo(g_oMold, g_cszHexMoldCdb);
        })
        .then(function() {
            console.info(g_oMold);
            return fnShowDataObj(g_oMold); // TODO 用分页，不然画面会卡
        });
}

function fnInitVariate() {
    // Init Obj
    g_oMold = new MoldObj();
    g_oMold.sFolderName = "mold";
    g_cszHexMoldCdb = [];

    // 清空全局的file标识
    g_CdbFile = undefined;
    g_IniFile = undefined;
    g_SysInfoFile = undefined;
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
            objArg.oIniLen.timelength = nBytes.DAY + nBytes.MONTH + nBytes.YEAR + nBytes.DAY_OF_WEEK;

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
function fnSetDataIDInfo(objArg, cszHexArg) {
    return new Promise(function(resolve, reject) {

        fnTrvlCdbArr(objArg, cszHexArg); // 从cdb和数据库中读取信息

        resolve("fnSetDataIDInfo Done");
    });

}

// show Data
function fnShowDataObj(objArg) {
    // console.info(objArg);
    // var $moldTitleTab = $("#moldTitleTab");
    // var $moldDataTab = $("#moldDataTab");

    // $moldTitleTab.text("");
    // $moldDataTab.text("");
    // var eTrTitle = document.createElement('tr');

    // for (var nRow = 0, nGLen = objArg.aDataInfo.length; nRow < nGLen; ++nRow) {
    //     var eTrData = document.createElement('tr');

    //     for (var nSerial = 0, nSLen = objArg.aDataInfo[nRow].length; nSerial < nSLen; ++nSerial) {
    //         var bVisb = objArg.aDataInfo[nRow][nSerial].bVisb;

    //         // 不可见的模具信息内容不做显示
    //         // 建议用table存储数据，便于后续爬虫->excel工作
    //         if (bVisb) {
    //             var eTdTitle = document.createElement('td');
    //             var eTdData = document.createElement('td');

    //             eTdTitle.setAttribute("style", "width:150px");
    //             eTdTitle.setAttribute("align", "center");

    //             eTdData.setAttribute("style", "width:150px");
    //             eTdData.setAttribute("align", "center");

    //             if (nRow === 0) {
    //                 eTdTitle.innerHTML = objArg.aDataInfo[nRow][nSerial].sName;
    //                 eTrTitle.appendChild(eTdTitle);
    //             }

    //             eTdData.innerHTML = g_oMold.aDataInfo[nRow][nSerial].Value;

    //             eTrData.appendChild(eTdData);
    //         }
    //     }

    //     $moldTitleTab.attr("border", "1");
    //     $moldTitleTab.append(eTrTitle);

    //     $moldDataTab.attr("border", "1");
    //     $moldDataTab.append(eTrData);

    // }
}

/*===========================================================================+
|   Other Func                                                               |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-10-17
 * @Describle [extract cdbStream to obj]
 * @return    {[type]}           [description]
 */
function fnTrvlCdbArr(objArg, cszHexArg) {
    // 如下几个PART为 属性赋值过程
    // 过程必须按照如下顺序来，同时将代码分开写便于代码理解与优化执行效率
    // DataID笔数过多且有规律，故所有DataID以for循环的方式赋值

    /* PART 1  set moldName (Big-Endian) */
    objArg.sMoldName = fnSplcCszHex(objArg, "moldlength", cszHexArg, bEndian.BIG);

    /* PART 2 set savetime，format eg. 2018-8-17*/
    // describe：cszHex.reverse => hex String => dec => string
    var sDay = parseInt(cszHexArg.splice(0, nBytes.DAY).reverse().join(""), 16).toString();
    var sMonths = parseInt(cszHexArg.splice(0, nBytes.MONTH).reverse().join(""), 16).toString();
    var sYears = parseInt(cszHexArg.splice(0, nBytes.YEAR).reverse().join(""), 16).toString();
    var sDayOfWeek = parseInt(cszHexArg.splice(0, nBytes.DAY_OF_WEEK).reverse().join(""), 16).toString();
    objArg.sMoldTime = "{0}-{1}-{2}".format(sYears, sMonths, sDay);

    /* PART 3 set sMaterial (Big-Endian) */
    objArg.sMaterial = fnSplcCszHex(objArg, "materiallength", cszHexArg, bEndian.BIG);
    /* PART 4 set color (Big-Endian) */
    objArg.sColor = fnSplcCszHex(objArg, "colorlength", cszHexArg, bEndian.BIG);
    /* PART 5 set perMoldCnt */
    objArg.nPerMoldCnt = fnSplcCszHex(objArg, "permoldcntLength", cszHexArg, bEndian.LIT);
    /* PART 6 set media (Big-Endian) */
    objArg.sMedia = fnSplcCszHex(objArg, "medialength", cszHexArg, bEndian.BIG);
    /* PART 7 set version */
    objArg.sVers = fnSplcCszHex(objArg, "verslength", cszHexArg, bEndian.LIT);
    /* PART 8 set DataIDSum and push DataIDObj */
    objArg.nDataIDSum = fnSplcCszHex(objArg, "idsum", cszHexArg, bEndian.LIT);

    // Chenly 2018-10-31 TODO 后面开始，HT55和TM55的cdb数据结构不一样，需通过 objArg.aSysInfo的内容区别处理


    /* PART 9 push DataIDObj and set DataIDObj.ID/type/len/stat/value */
    var nDataIDSum = objArg.nDataIDSum;

    for (var nInx1 = 0; nInx1 < nDataIDSum; ++nInx1) {
        var nLen = 0;
        var dynVal = 0;
        var sIDType = "";
        var sTmp = "";
        var nTmp = 0;

        // get DataID
        var nDataID = fnSplcCszHex(objArg, nBytes.IDLEN, cszHexArg, bEndian.LIT);

        // get DataID.type
        sTmp = cszHexArg.splice(0, nBytes.IDTYPE).reverse().join("");
        nTmp = parseInt(sTmp, 16);
        sIDType = mIDType.get(nTmp);

        // get DataID.stat
        var nIDStat = fnSplcCszHex(objArg, nBytes.IDSTAT, cszHexArg, bEndian.LIT);

        // DataID.nLen，String类型是特例，第一个Bytes为数据长度len，后面len个Bytes代表数据的值
        if (sIDType === "STRING") {
            nLen = fnSplcCszHex(objArg, nBytes.ONE, cszHexArg, bEndian.LIT);
            dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, bEndian.BIG);
        } else {
            nLen = mIDLen.get(sIDType);
            dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, bEndian.LIT);
        }

        aDataID.push(nDataID);

        objArg.aDataInfo.push(new TM55DataInfoObj(nDataID, sIDType, nLen, nIDStat, dynVal));

    }

    getMoldIDInfoFrDB(objArg.aSysInfo);

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
    $.ajax({
        method: "get",
        url: "/app/HMIPrint/getMoldIDInfoFrDB",
        data: { objSysArg: objSysArg }, // objSysArg: 传递到bizServer的model中的参数

        success: function(data) {
            console.log("getMoldIDInfoFrDB Success!");
            // console.log(data); // 这里get到的结构为 [{Component:Mold, Block:DB_MOLDSET, ...}, {Component:Mold, Block:DB_MOLDSET, ...}, ...]

            /* 将从DB获取的数据赋值给obj */
            for (var nInx in data) {
                // console.log(data[nInx]);
                for (var nDataInx = 0, nlen1 = g_oMold.nDataIDSum; nDataInx < nlen1; ++nDataInx) {
                    if (g_oMold.aDataInfo[nDataInx].nDataID === data[nInx].DataID) {
                        for (var key in data[nInx]) {
                            if (aUseLess.indexOf(key) === -1) // 从biz获取的无用的信息无需写入到obj内
                                g_oMold.aDataInfo[nDataInx][key] = data[nInx][key];
                        }
                    }
                }
            }

        },

        error: function() {},
        complete: function() {}
    });
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
    var aTmp;
    var dynRslt;

    if (typeof(nLenArg) === "string") {
        aTmp = cszHexArg.splice(0, objArg.oIniLen[nLenArg]);
    } else {
        aTmp = cszHexArg.splice(0, nLenArg);
    }

    // BIG-Endian 则对照ASCII码解析
    if (Endian === bEndian.BIG) {
        dynRslt = ""; // init dynRslt
        for (var nInx1 = 0, len1 = aTmp.length; nInx1 < len1; ++nInx1) {
            var nTmp1 = aTmp[nInx1];

            // 空字符无需进行ASCII码转换
            if (nTmp1 == 0)
                continue;
            // 使用构造对象模型，需要判断对象属性是否为undefined

            nTmp1 = parseInt(nTmp1, 16);
            dynRslt += String.fromCharCode(nTmp1);
        }
    } else { // LIT-ENDIAN 则 cszHex.reverse => str => DecNum
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
        key;

    if (obj && typeof obj === 'object') {
        for (key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = fnDeepClone(obj[key]); //如果对象的属性值为object的时候，递归调用deepClone，即再把某个值对象复制一份到新的对象的对应值中
            } else {
                result[key] = obj[key]; //如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
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