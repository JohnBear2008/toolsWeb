var g_CdbFile; // Chenly 2018-10-11 记录了警报的数据值
var g_IniFIle; // Chenly 2018-10-11 记录了警报的解析含义
var g_StrIDFile; // Chenly 2018-10-11 记录了具体的警报字串的StrID;

var g_sErrFolder = "err";

var g_nCdbSize;
var nSubInfoSize = 0;

var g_nCdbInfoRow; // Chenly 2018-09-30 监测cdb，详细监测信息的条数

var g_nCdbStart = 0;
var g_nCdbEnd = 0;

var g_aAlarmCdb;
var g_aTmp;

var g_oAlarmData;
var g_sDspSys = ""; // Chenly 2018-10-10 版本区分

var fKeyWord = {
    cdb: ".cdb",
    ini: ".ini",
    _str: "_str"
};

var nBytes = {
    ALARM_TIME: 12,
    DAY: 1,
    MONTH: 1,
    YEAR: 2,
    DAY_OF_WEEK: 4,
    HOUR_S: 1,
    MIN_S: 1,
    SEC_S: 2
};

var g_aStrID = [];

String.prototype.format = function(args) {
    var result = this;
    var reg;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0, nLen = arguments.length; i < nLen; i++) {
                if (arguments[i] != undefined) {
                    reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

function AlarmInfoSubObj(nSerial, sName, nSize, nPrecision, nDispPrecision, bVisible) {
    this.nSerial = nSerial;
    this.sName = sName;
    this.nSize = nSize;
    this.nPrecision = nPrecision;
    this.nDispPrecision = nDispPrecision;
    this.bVisible = bVisible;
}

// Chenly 2018-09-29 监测数据信息原型
function AlarmDataObj() {
    this.nHeadSize = 0;
    this.nBlockSize = 0;

    this.aInfo = [];
    /*
     *     aInfo = [
     *          [{AlarmInfoSubObj1}, {AlarmInfoSubObj2}, ...],
     *          [{AlarmInfoSubObj1}, {AlarmInfoSubObj2}, ...],
     *          ...
     *      ]
     */

}

/**
 * @Author    Muc
 * @DateTime  2018-09-27
 * @Describle [提示信息，用于判断当前脚本是否能正确的工作在当前浏览器上]
 * @return    {[type]}             [description]
 */
function fnPromptMsg() {
    // Chenly 2018-09-27 判断浏览器是否支持FileReader接口
    if (typeof FileReader == 'undefined') {
        result.innerHTML = "<p>你的浏览器不支持FileReader接口，请升级或更换浏览器版本！</p>";
        //使选择控件不可操作
        file.setAttribute("disabled", "disabled");
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

// Chenly 2018-09-29 解析cdb文件内容
function fnCreCdbArray() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();

        reader.readAsArrayBuffer(g_CdbFile); // Chenly 2018-09-29 以ArrayBuffer的形式读取
        reader.onload = function() {
            fnBuf2HexCsz(this.result, g_aAlarmCdb);
        };

        resolve("fnCreCdbArray Done");
    });
}

function fnCreStrIDArray() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();

        reader.readAsText(g_StrIDFile);
        reader.onload = function() {
            var aStrIDSpt = this.result.split("\n"); // Chenly 2018-09-28 将读取到的字符串按换行符转化为数组
            var reSubInfoSep = /[=, ]+/;
            var aSubInfoSt = [];
            for (var i = 0, len = aStrIDSpt.length; i < len; ++i) {
                if (aStrIDSpt[i].match(reSubInfoSep)) {
                    var StrID = aStrIDSpt[i].split(reSubInfoSep)[1];
                    g_aStrID.push(StrID);
                }
            }
            resolve("fnCreStrIDArray Done");
        };

    });
}

function fnCreIniObj() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(g_IniFIle);

        reader.onload = function() {
            var aDetial;
            var bSubInfoFlag = false; // Chenly 2018-09-28 1 - 开始处理监测SubInfo信息
            var aIniSpt = this.result.split("\n"); // Chenly 2018-09-28 将读取到的字符串按换行符转化为数组
            var reSubInfoSep = /[=, ]+/;
            var aSubInfoSt = [];

            // Chenly 2018-10-11 警报Folder有个 error_strID.ini文件，代表了具体警报的字串，故在数组循环赋值前进行补充，使其放在首位
            var oTmp2 = new AlarmInfoSubObj(aSubInfoSt.length, "sAlarmStr", 0, 0, 0, 1);
            oTmp2.sRealDisp = "";
            aSubInfoSt.push(oTmp2);

            // Chenly 2018-09-28 遍历iniData生成的数组，获得Header和BlockSize并将数组指针重新指向监测信息后继续遍历过程
            // 注：期间parseInt是为了将代表数字字符变为数字类型保存，便于读取
            for (var i = 0, len = aIniSpt.length; i < len; ++i) {
                if (bSubInfoFlag == false) {
                    if (aIniSpt[i].match("Header")) {
                        var sHeadSize = aIniSpt[i].match(/\d+/)[0];
                        g_oAlarmData.nHeadSize = parseInt(sHeadSize, 10);
                    } else if (aIniSpt[i].match("BlockSize")) {
                        var sBlockSize = aIniSpt[i].match(/\d+/)[0];
                        g_oAlarmData.nBlockSize = parseInt(sBlockSize, 10);
                    } else if (aIniSpt[i].match(",")) {
                        i -= 1; // Chenly 2018-09-28 -1是为了将数组指针重新指向监测的SubInfos信息
                        bSubInfoFlag = true;
                    }
                } else { // Chenly 2018-09-28 此处获取监测的SubInfo，每行以数组的形式存入
                    if (aIniSpt[i].match(reSubInfoSep)) {
                        aDetial = aIniSpt[i].split(reSubInfoSep).map(fnStr2DecNum);
                        var oTmp = new AlarmInfoSubObj(...aDetial);
                        aSubInfoSt.push(oTmp);
                    } else {
                        break; // Chenly 2018-09-28 防止写入空内容（这里指EOF的‘\0'）
                    }
                }
            }

            // Chenly 2018-09-29 有一条详细监测数据就push一笔
            g_nCdbInfoRow = (g_nCdbSize - g_oAlarmData.nHeadSize) / g_oAlarmData.nBlockSize;
            for (var nInfoCnt = 0; nInfoCnt < g_nCdbInfoRow; ++nInfoCnt) {
                var aTmp = fnDeepClone(aSubInfoSt); // Chenly 2018-10-08 必须深拷贝，防止引用重复
                g_oAlarmData.aInfo.push(aTmp);
            }
            resolve("fnCreIniObj Done");
        };
    });

}

/**
 * @Author    Muc
 * @DateTime  2018-09-30
 * @Describle [设置g_oAlarmData.aInfo subInfo的值]
 * @details
 * @return    {[type]}    [description]
 */
function fnSetAlarmDataObjVal() {
    return new Promise(function(resolve, reject) {
        g_nCdbStart = g_oAlarmData.nHeadSize;
        // Chenly 2018-09-30 提取cdb中的监测信息的值并写入到Obj内
        for (var i = 0, nInfoLen = g_oAlarmData.aInfo.length; i < nInfoLen; ++i) {
            for (var j = 0, nSubInfoLen = g_oAlarmData.aInfo[i].length; j < nSubInfoLen; ++j) {
                nSubInfoSize = g_oAlarmData.aInfo[i][j].nSize;

                // Chenly 2018-09-30 仅 警报的StrID长度为0，故此处特殊处理
                if (nSubInfoSize) {
                    var nValTmp = fnTrvlCdbFile(g_aAlarmCdb, g_nCdbStart, g_nCdbEnd, nSubInfoSize);
                    if (nValTmp) {
                        g_oAlarmData.aInfo[i][j].Value = nValTmp;
                    }
                } else {
                    // Chenly 2018-10-11 将error_stdid.ini中的内容按序写入
                    if (g_oAlarmData.aInfo[i][j].Value === undefined) {
                        g_oAlarmData.aInfo[i][j].Value = g_aStrID[i];
                    }
                }
            }

        }

        resolve("fnSetAlarmDataObjVal Done");
    });

}

// Chenly 2018-10-10 提前结束folder遍历的条件，return 0则表示不停止
function fnQuitTrvl(folder) {
    // Chenly 2018-10-10 点击了选择文件夹按钮，在弹出的folder explorer按了取消
    if (folder[0] === undefined)
        return "Folder Explorer Cancel";
    else {
        var sFolderPath = folder[0].webkitRelativePath;
        if (sFolderPath.toLowerCase().search(g_sErrFolder)) {
            alert("文件夹名不匹配，注：请选择以{0}作为开头的文件夹".format(g_sErrFolder));
            return "Select Wrong Folder";
        }
        return "Continue";
    }

}

// Chenly 2018-09-29 处理上传的Folder内的cdb和ini数据，并呈现数据结果
function fnTrvlAlarmFolder() {
    var upFolder = document.getElementById('upFolder').files;

    var sTrvlStatus = fnQuitTrvl(upFolder);
    if (sTrvlStatus !== "Continue") {
        return -1;
    }

    var sFolderPath = upFolder[0].webkitRelativePath;
    var reDspVers = /_\w+55/;

    if (reDspVers.test(sFolderPath)) {
        g_sDspSys = sFolderPath.match(reDspVers);
    }

    // Chenly 2018-09-27 分配ini和cdb文件变量
    for (var i = 0, len = upFolder.length; i < len; ++i) {
        if (upFolder[i].name.match(fKeyWord.cdb)) {
            g_CdbFile = upFolder[i];
            g_nCdbSize = upFolder[i].size;
        } else if (upFolder[i].name.match(fKeyWord._str)) {
            upFolder[i].name.match(fKeyWord._str);
            g_StrIDFile = upFolder[i];;

        } else if (
            upFolder[i].name.match(fKeyWord.ini)) {
            g_IniFIle = upFolder[i];
        }
    }

    fnClearData() // Chenly 2018-10-09 强制按序处理，解决异步带来的各种问题
        .then(function() {
            return fnCreCdbArray();
        })
        .then(function() {
            return fnCreStrIDArray();
        })
        .then(function() {
            return fnCreIniObj();
        })
        .then(function() {
            return fnSetAlarmDataObjVal();
        })
        .then(function() {
            return fnShowAlarmData();
        });
}

function fnClearData() {
    return new Promise(function(resolve, reject) {
        // Chenly 2018-10-10 清空并重新创建对象/数组内容，防止在内存未释放的前提下重复读取数据，最后导致数据异常的现象
        g_oAlarmData = new AlarmDataObj();
        g_aAlarmCdb = [];
        g_aTmp = [];

        resolve("fnClearData Done");
    });
}

// Chenly 2018-10-08 呈现数据和当前文件名
function fnShowAlarmData() {

    var DDKey = [];

    // Chenly 2018-10-15 show前先清空，防止重复读取造成显示异常
    $("#alarmData tbody").empty();

    //      for (var i = 0; i < g_oAlarmData.aInfo[0].length; i++) {
    //          if (g_oAlarmData.aInfo[0][i].bVisible == 1) {
    //              DDKey.push(g_oAlarmData.aInfo[0][i].sName);
    //          }
    //      }

    //      CNtranslator(DDKey);

    for (var nRow = 0; nRow < g_oAlarmData.aInfo.length; nRow++) {
        var tdData = "";
        for (var nInx = 0; nInx < g_oAlarmData.aInfo[nRow].length; nInx++) {
            if (g_oAlarmData.aInfo[nRow][nInx].bVisible == 1) {
                tdData += "<td>" + g_oAlarmData.aInfo[nRow][nInx].Value + "</td>";
            }
        }
        $("#alarmData tbody").append("<tr>" + tdData + "</tr>");

    }


    //-----陈立毅原代码-----------------------------------


    console.info(g_oAlarmData);
    var $alarmTitleTab = $("#alarmTitleTab");
    var $alarmDataTab = $("#alarmDataTab");

    $alarmTitleTab.text("");
    $alarmDataTab.text("");
    var eTrTitle = document.createElement('tr');

    for (var nRow = 0, nGLen = g_oAlarmData.aInfo.length; nRow < nGLen; ++nRow) {
        var eTrData = document.createElement('tr');

        for (var nSerial = 0, nSLen = g_oAlarmData.aInfo[nRow].length; nSerial < nSLen; ++nSerial) {
            var bVisible = g_oAlarmData.aInfo[nRow][nSerial].bVisible;

            // Chenly 2018-10-09 不可见的监测信息内容不做显示
            // 建议用table存储数据，便于后续爬虫->excel工作
            if (bVisible) {
                var eTdTitle = document.createElement('td');
                var eTdData = document.createElement('td');

                // Chenly 2018-10-09 TODO 需自动调整td宽度，不能固定
                eTdTitle.setAttribute("style", "width:150px");
                eTdTitle.setAttribute("align", "center");

                eTdData.setAttribute("style", "width:150px");
                eTdData.setAttribute("align", "center");

                // Chenly 2018-10-09 呈现title
                if (nRow === 0) // Chenly 2018-10-09 每组的title内容一致，故遍历一遍即可呈现
                {
                    eTdTitle.innerHTML = g_oAlarmData.aInfo[nRow][nSerial].sName;
                    eTrTitle.appendChild(eTdTitle);
                }

                eTdData.innerHTML = g_oAlarmData.aInfo[nRow][nSerial].Value;

                eTrData.appendChild(eTdData);
            }
        }

        $alarmTitleTab.attr("border", "1");
        $alarmTitleTab.append(eTrTitle);

        $alarmDataTab.attr("border", "1");
        $alarmDataTab.append(eTrData);

    }

}

function fnTrvlCdbFile(aCdbData, nStart, nEnd, nSepSize) {
    var aTmp = [];
    var sTmp = "";
    var nTimeInx = 0;

    nEnd = (nStart + nSepSize) - 1;
    aTmp = aCdbData.slice(nStart, nEnd + 1);
    aTmp.reverse(); // Chenly 2018-10-11 cdb为Little-Endian，故必须做反序

    g_nCdbStart = nEnd + 1;
    g_nCdbEnd = (g_nCdbStart + nSepSize) - 1;

    if (aTmp.length !== nBytes.ALARM_TIME) {
        return fnCszToInt(aTmp);
    } else if (aTmp.length === nBytes.ALARM_TIME) {
        return fnTimeBytes2Str(aTmp);
    }

}

function fnTimeBytes2Str(csz) {
    // var sTmp = csz.join("").toString();
    var sTime = "";
    var nOffset = 0;

    // Chenly 2018-10-11  屎一样的代码，后续优化
    // 功能说明 ： 数组=》push为字符串=》高级切片=》转化为数字=》转化为字符串
    var sSec = parseInt(csz.splice(0, nBytes.SEC_S).join(""), 16).toString();
    var sMins = parseInt(csz.splice(0, nBytes.MIN_S).join(""), 16).toString();
    var sHours = parseInt(csz.splice(0, nBytes.HOUR_S).join(""), 16).toString();
    var sDayOfWeek = parseInt(csz.splice(0, nBytes.DAY_OF_WEEK).join(""), 16).toString();
    var sYears = parseInt(csz.splice(0, nBytes.YEAR).join(""), 16).toString();
    var sMonths = parseInt(csz.splice(0, nBytes.MONTH).join(""), 16).toString();
    var sDays = parseInt(csz.splice(0, nBytes.DAY).join(""), 16).toString();

    // eg. 2018-9-10 8:19:36
    sTime = sYears + "-" + sMonths + "-" + sDays + " " + sHours + ":" + sMins + ":" + sSec;
    return sTime;
}

function fnCszToInt(csz) {
    var sTmp = csz.join("");
    return parseInt(sTmp, 16);
}

function fnBuf2HexCsz(aBuf, aHex) {
    var bufView = new Uint8Array(aBuf);
    for (var i = 0, len = bufView.length; i < len; ++i) {
        aHex.push(fnByte2Str(bufView[i]));
    }
}

// Chenly 2018-09-29 将一个Byte数据转化为Hex状态的Str
function fnByte2Str(byte) {
    var str = "";

    var tmp = byte.toString(16);
    if (tmp.length == 1) {
        tmp = "0" + tmp;
    }
    str += tmp;
    return str;
}

// Chenly 2018-09-30 str代表的是十进制数字？return 数字 ： return str
function fnStr2DecNum(str, nPrecision) {
    var tmp = parseInt(str);
    if (!isNaN(tmp))
        return tmp;
    else
        return str;
}
