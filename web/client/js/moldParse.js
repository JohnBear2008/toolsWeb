// Chenly 2018-10-17 模具解析功能模块，目前仅 TM55系统；其他均需调整
/*Note：
 * 一、系统、机型、子类等识别
 *     1、只能通过新建Sys.ini来识别
 *     2、假使通过版本号来识别，代码将变得冗余同时加大维护的复杂度
 **/
/*===========================================================================+
|   constant                                                                 |
+===========================================================================*/
var sKeyWd = {
    CDB: ".cdb",
    INI: ".ini",
    _STR: "_str",
    MOLD: "mold"
};

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

var mMoldOther = new Map([
    ["materiallength", bEndian.BIG],
    ["colorlength", bEndian.BIG],
    ["permoldcntLength", bEndian.LIT],
    ["medialength", bEndian.BIG],
    ["verslength", bEndian.LIT],
    ["idsum", bEndian.LIT]
]);

/*===========================================================================+
|   variate                                                                  |
+===========================================================================*/
var g_CdbFile; // default ： LIT-Endian
var g_IniFile; // 记录了一些配置信息，例如模具头的长度等，用于解析cdb

var g_nCdbSize;
var nSubInfoSize = 0;

var g_nCdbInfoRow; // 模具cdb，详细模具信息的条数

var g_nCdbStart = 0;
var g_nCdbEnd = 0;

var g_cszHexMldCdb; // cdbData => cszHex

var g_oMldData;
// var g_sDspSys = ""; // 版本区分

/*===========================================================================+
|   Object                                                                   |
+===========================================================================*/
/* 模具对象原型 */
function MldDataObj() {
    // 如下信息需从cdb获得
    this.sMoldName = "";
    this.sMoldTime = "";
    this.sMaterial = "";
    this.sColor = "";
    this.nPerMoldCnt = 0;
    this.sMedia = ""; // 媒介，暂无实际大作用
    this.sVers = "";
    this.nDataIDSum = 0;
    this.aDBInfo = []; // 存放 DataInfoObj

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

    // Chenly 2018-10-16 test
    // if (typeof MldDataObj._bInit === "undefined") {
    //     /* 设置DataInfo的内容 */
    //     MldDataObj.prototype.fnPushObj = function(subObj) {
    //         this.aDBInfo.push(subObj);

    //         MldDataObj._bInit = true;
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

// 访问格式 MldDataObj.aDBInfo[nInx].KEY
function TM55DataInfoObj(nDataID, sType, nLen, nStat, dynVal, sBlock, sBelong, sLable, nPrec, nFmtPrec, nVisble, sUnit, sCN, sTW, sEN) {
    // 如下信息可从cdb获得
    this.nDataID = nDataID;
    this.sType = sType;
    this.nLen = nLen;
    this.nStat = nStat; // 读写状态
    this.dynVal = dynVal;
    // 如下信息从数据库获得
    this.nVisble = nVisble; // 是否可见
    this.nPrec = nPrec; // 小数位数， 0表示无精确， 1表示精确到一位小数， 2表示精确到两位小数
    this.nFmtPrec = nFmtPrec; // 格式化精度，eg. 0=> val === val;   1=> val =/ 10;   2=> val = val /=100
    this.sBelong = sBelong; // 归组，其他-0，关模-1，射出-2，托模-3，储料-4，中子-5，座台-6，温度-7，开模-10
    this.sUnit = sUnit; //单位，eg. % Bar mm 。。。

    // 中繁英
    this.sCN = sCN;
    this.sTW = sTW;
    this.sEN = sEN;
}

// function PadDataInfoObj(nDataID, sBlock, sBelong, sLable, nPrec, nFmtPrec, nVisble, sUnit, sCN, sTW, sEN) {
//     this.nDataID = nDataID;
//     this.sBlock = sBlock;
//     this.sBelong = sBelong;
//     this.sLable = sLable;
//     this.nPrec = nPrec;
//     this.nFmtPrec = nFmtPrec;
//     this.nVisble = nVisble;
//     this.sUnit = sUnit;
//     this.sCN = sCN;
//     this.sTW = sTW;
//     this.sEN = sEN;
// }

/* ↓ 54结构 --------------------*/
// /* 模具信息对象原型 */
// function DataInfoObj(nInitDataID) {
//     // 如下信息可从cdb获得
//     this.nInitDataID = nInitDataID;
//     this.aSubInfo = []; // eg. [DataSubInfo， DataSubInfo]
// }

// /* 模具子信息对象原型 */
// function DataSubInfo(nOffSet, nLen, fVal, nVisble, nPrec, nFmtPrec, sBelong, sUnit) {
//     // 如下信息可从cdb获得
//     this.nOffSet = nOffSet;
//     this.nLen = nLen;
//     this.fVal = fVal;

//     // 如下信息从数据库获得
//     this.nVisble = nVisble;
//     this.nPrec = nPrec; // 小数位数， 000,001,002 。。。  eg. 001表示一位小数
//     this.nFmtPrec = nFmtPrec; // 格式化精度，000,001,002。。。 eg. 001代表一位精度
//     this.sBelong = sBelong; // 归组，其他-0，关模-1，射出-2，托模-3，储料-4，中子-5，座台-6，温度-7，开模-10
//     this.sUnit = sUnit; //单位，eg. % Bar mm 。。。
// }
/* ↑ 54结构 -------------------- */


/*===========================================================================+
|   MainFunc                                                                 |
+===========================================================================*/
// 处理上传的Folder内的cdb和ini数据，并呈现数据结果
function fnTrvlMldFolder() {
    var upFolder = document.getElementById('upFolder').files;
    var sOperStat = fnOperStat(upFolder);
    if (sOperStat !== "Continue") {
        return -1;
    }

    // Chenly 2018-10-17 mark，通过文件夹名来判断dsp的系统
    // var sFolderPath = upFolder[0].webkitRelativePath;
    // var reDspVers = /_\w+55/;

    // if (reDspVers.test(sFolderPath)) {
    //     g_sDspSys = sFolderPath.match(reDspVers);
    // }

    // 分配ini和cdb文件变量
    for (var i = 0, len = upFolder.length; i < len; ++i) {
        if (upFolder[i].name.match(sKeyWd.CDB)) {
            g_CdbFile = upFolder[i];
            g_nCdbSize = upFolder[i].size;
        }
        if (upFolder[i].name.match(sKeyWd.INI)) {
            g_IniFile = upFolder[i];
        }
    }

    fnInitCre() // 强制按序处理，解决异步带来的各种问题
        .then(function() {
            return fnIni2DataObj(g_IniFile, g_oMldData); // Ok
        })
        .then(function() {
            return fnCdb2Arr(g_CdbFile, g_cszHexMldCdb); // Ok
        })
        .then(function() {
            return fnSetDataIDInfo(g_oMldData, g_cszHexMldCdb);
        })
        .then(function() {
            console.info(g_oMldData);
            // return fnShowDataObj(g_oMldData); // TODO 用分页，不然画面会卡
        });
}

// 创建新的数据
function fnIni2DataObj(iniArg, objArg) {
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

            resolve("fnIni2DataObj Done");
        };
    });
}

// 创建新的数据
function fnInitCre() {
    return new Promise(function(resolve, reject) {
        // 清空并重新创建对象/数组内容，防止在内存未释放的前提下重复读取数据，最后导致数据异常的现象
        g_oMldData = new MldDataObj();
        g_cszHexMldCdb = [];

        resolve("fnInitCre Done");
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

// 设置MldDataObj的值
function fnSetDataIDInfo(objArg, cszHexArg) {
    return new Promise(function(resolve, reject) {

        fnTrvlCdbArr(objArg, cszHexArg); // 从cdb中读取信息
        // TODO 从数据库中读取信息

        resolve("fnSetDataIDInfo Done");
    });

}

// show Data
function fnShowDataObj(objArg) {
    // console.info(objArg);
    var $mldTitleTab = $("#mldTitleTab");
    var $mldDataTab = $("#mldDataTab");

    $mldTitleTab.text("");
    $mldDataTab.text("");
    var eTrTitle = document.createElement('tr');

    for (var nRow = 0, nGLen = objArg.aDBInfo.length; nRow < nGLen; ++nRow) {
        var eTrData = document.createElement('tr');

        for (var nSerial = 0, nSLen = objArg.aDBInfo[nRow].length; nSerial < nSLen; ++nSerial) {
            var bVisible = objArg.aDBInfo[nRow][nSerial].bVisible;

            // 不可见的模具信息内容不做显示
            // 建议用table存储数据，便于后续爬虫->excel工作
            if (bVisible) {
                var eTdTitle = document.createElement('td');
                var eTdData = document.createElement('td');

                // TODO 需自动调整td宽度，不能固定
                eTdTitle.setAttribute("style", "width:150px");
                eTdTitle.setAttribute("align", "center");

                eTdData.setAttribute("style", "width:150px");
                eTdData.setAttribute("align", "center");

                // 每组的title内容一致，故遍历一遍即可呈现
                if (nRow === 0) {
                    eTdTitle.innerHTML = objArg.aDBInfo[nRow][nSerial].sName;
                    eTrTitle.appendChild(eTdTitle);
                }

                eTdData.innerHTML = g_oMldData.aDBInfo[nRow][nSerial].Value;

                eTrData.appendChild(eTdData);
            }
        }

        $mldTitleTab.attr("border", "1");
        $mldTitleTab.append(eTrTitle);

        $mldDataTab.attr("border", "1");
        $mldDataTab.append(eTrData);

    }
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
    /* PART 1  set moldName (Big-Endian) */
    objArg.sMoldName = fnSplcCszHex(objArg, "moldlength", cszHexArg, bEndian.BIG);

    /* PART 2 set savetime，format eg. 2018-8-17 5 of week*/
    // describe：cszHex.reverse => hex String => dec => string
    var sDay = parseInt(cszHexArg.splice(0, nBytes.DAY).reverse().join(""), 16).toString();
    var sMonths = parseInt(cszHexArg.splice(0, nBytes.MONTH).reverse().join(""), 16).toString();
    var sYears = parseInt(cszHexArg.splice(0, nBytes.YEAR).reverse().join(""), 16).toString();
    var sDayOfWeek = parseInt(cszHexArg.splice(0, nBytes.DAY_OF_WEEK).reverse().join(""), 16).toString();
    objArg.sMoldTime = "{0}-{1}-{2}".format(sYears, sMonths, sDay);

    function FnSplcArgObj() {
        this.sMaterial = { "materiallength": bEndian.BIG };
        this.sColor = { "colorlength": bEndian.BIG };
        this.nPerMoldCnt = { "permoldcntLength": bEndian.LIT };
        this.sMedia = { "medialength": bEndian.BIG };
        this.sVers = { "verslength": bEndian.LIT };
        this.nDataIDSum = { "idsum": bEndian.LIT };
    }

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

        // DataID.nLen
        if (sIDType === "STRING") {
            nLen = fnSplcCszHex(objArg, nBytes.ONE, cszHexArg, bEndian.LIT);
            dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, bEndian.BIG);
        } else {
            nLen = mIDLen.get(sIDType);
            dynVal = fnSplcCszHex(objArg, nLen, cszHexArg, bEndian.LIT);
        }

        // TODO push前把从数据库里读出来的数据也给加进去
        // (sType, nLen, nStat, dynVal,
        // nDataID, sBlock, sBelong, sLable, nPrec, nFmtPrec, nVisble, sUnit, sCN, sTW, sEN) {
        objArg.aDBInfo.push(new TM55DataInfoObj(nDataID, sIDType, nLen, nIDStat, dynVal));
    }

    // Chenly 2018-10-19 TODO 上个循环不能立刻从db内get，但像如下再写个循环效率会低下
/*     for (var nInx2 = 0; nInx2 < nDataIDSum; ++nInx2) {
        var DataID = objArg.aDBInfo[nInx2].nDataID;
        console.log(DataID);
        // setIDInfoFromDB(DataID, function(rs) {

        // });
        // console.log(nTmp2);
    } */
}

function setIDInfoFromDB(DataID, callback) {
    var aRslt = [];
    $.ajax({
        method: "get",
        url: "/app/HMIPrint/getMoldIDInfo",
        data: { DataID: DataID },
        success: function(data) {
            // console.info(data);
            // for (var nInx1 = 0, len1 = data.rows.length; nInx1 < len1; ++nInx1) {
            //     console.info(data.rows);
            // }

            if (data.rows[0]) {
                aRslt = data.rows[0];
                var nInx2 = aRslt.indexOf(DataID); // DataID信息已有，故去掉从数据库读到的DataID

                if (nInx2 > -1) {
                    aRslt.splice(nInx2, 1);
                }
            } else {
                aRslt = [];
            }
            // console.info(aRslt);
            callback(aRslt);
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

function fnOperStat(folder) {
    // 根据文件夹的名字与内容，alert相应的信息
    if (folder.length === 0) {
        alert("该文件夹为空，请选择正确的文件夹");
        return "folder is empty";
    } else if (folder[0] === undefined) {
        return "Folder Explorer Cancel";
    } else {
        var sFolderPath = folder[0].webkitRelativePath;
        if (sFolderPath.toLowerCase().search(sKeyWd.MOLD)) {
            alert("文件夹名不匹配，注：请选择以{0}作为开头的文件夹".format(sKeyWd.MOLD));
            return "Select Wrong Folder";
        }
        return "Continue";
    }

}

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