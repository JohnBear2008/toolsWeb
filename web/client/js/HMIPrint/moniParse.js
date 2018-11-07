/*jshint esversion: 6 */
/*Note：
 * 对象的属性，假使未按照匈牙利命名规则的，则表示此项属性从DB获取
 **/
function MoniInfoSubObj(nSerial, sDDKey, nSize, Prec, nDispPrec, fValue) {
    this.nSerial = nSerial;
    this.sDDKey = sDDKey; // 对应DB内的DDKey
    this.nSize = nSize;
    this.Prec = 0;
    this.nDispPrec = nDispPrec;
    this.Visb = 0;
    this.fValue = 0;
}

// Chenly 2018-09-29 监测数据信息原型
function MoniObj() {
    this.nHeadSize = 0;
    this.nBlockSize = 0;

    /*
     *     aDataInfo = [
     *          [{MoniInfoSubObj1}, {MoniInfoSubObj2}, ...],
     *          [{MoniInfoSubObj1}, {MoniInfoSubObj2}, ...],
     *          ...
     *      ]
     */
    this.aDataInfo = [];

    // 从system.info中获取
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
}

var g_CdbFile;
var g_IniFile;
var g_SysInfoFile;

var g_nCdbSize;
var nSubInfoSize = 0;

var g_nCdbInfoRow; // Chenly 2018-09-30 监测cdb，详细监测信息的条数

var g_nCdbStart = 0;
var g_nCdbEnd = 0;

var g_aMoniCdb;

var g_oMoni;

/* 无用的信息列表 */
var aUseLess = [
    "C_MEMERY_PAD" // 内存对齐的内容
];

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
    } else
        return "Continue";

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
function fnCreMoniCdbArray() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();

        reader.readAsArrayBuffer(g_CdbFile); // Chenly 2018-09-29 以ArrayBuffer的形式读取
        reader.onload = function() {
            fnBuf2HexCsz(this.result, g_aMoniCdb);

            resolve("fnCreMoniCdbArray Done");
        };
        // console.log(g_aMoniCdb);
    });
}

/**
 * @Author    Muc
 * @DateTime  2018-10-26
 * @Describle [将ini里面的所有有用的信息写入到obj内，例：DDKey, 名字，数据长度，精度，格式化精度，可见性]
 * @Warning   [Warning]
 * @return    {[type]}    [description]
 */
function fnCreMoniObj() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(g_IniFile);

        reader.onload = function() {
            var aDetial;
            var bSubInfoFlag = false; // Chenly 2018-09-28 1 - 开始处理监测SubInfo信息
            var aMoniIniSpt = this.result.split("\n"); // Chenly 2018-09-28 将读取到的字符串按换行符转化为数组
            var reMoniSubInfoSep = /[=, ]+/;
            var aMoniSubInfoSt = [];
            var nSizeSum = 0;
            // Chenly 2018-09-28 遍历iniData生成的数组，获得Header和BlockSize并将数组指针重新指向监测信息后继续遍历过程
            // 注：期间parseInt是为了将代表数字字符变为数字类型保存，便于读取
            for (var i = 0, len = aMoniIniSpt.length; i < len; ++i) {
                if (bSubInfoFlag == false) {
                    if (aMoniIniSpt[i].indexOf("Header") !== -1) {
                        var sHeadSize = aMoniIniSpt[i].match(/\d+/)[0];
                        g_oMoni.nHeadSize = parseInt(sHeadSize, 10);
                    } else if (aMoniIniSpt[i].indexOf("BlockSize") !== -1) {
                        var sBlockSize = aMoniIniSpt[i].match(/\d+/)[0];
                        g_oMoni.nBlockSize = parseInt(sBlockSize, 10);
                    } else if (aMoniIniSpt[i].indexOf(",") !== -1) {
                        i -= 1; // Chenly 2018-09-28 -1是为了将数组指针重新指向监测的SubInfos信息
                        bSubInfoFlag = true;
                    }
                } else { // Chenly 2018-09-28 此处获取监测的SubInfo，每行以数组的形式存入
                    if (aMoniIniSpt[i].match(reMoniSubInfoSep)) {
                        aDetial = aMoniIniSpt[i].split(reMoniSubInfoSep).map(fnStr2DecNum);
                        var oTmp = new MoniInfoSubObj(...aDetial);
                        aMoniSubInfoSt.push(oTmp);
                    } else {
                        break; // Chenly 2018-09-28 防止写入空内容（这里指EOF的‘\0'）
                    }
                }
            }

            // Chenly 2018-10-10 获取ini内 【Parameter】参数的总数据长度
            for (var j = 0, nlen = aMoniSubInfoSt.length; j < nlen; ++j) {
                nSizeSum += aMoniSubInfoSt[j].nSize;
            }

            // Chenly 2018-10-10 blocksize与ini内【Parameter】参数的总数据长度不一致时，补齐空缺的内容
            if (g_oMoni.nBlockSize > aMoniSubInfoSt.length) {
                var nPadBytes = g_oMoni.nBlockSize - nSizeSum;
                var g_oIniLostData = new MoniInfoSubObj(aMoniSubInfoSt.length + 1, "C_MEMERY_PAD", nPadBytes, 0, 0, 0, 0);
                aMoniSubInfoSt.push(g_oIniLostData);
            }

            // Chenly 2018-09-29 有一条详细监测数据就push一笔
            g_nCdbInfoRow = (g_nCdbSize - g_oMoni.nHeadSize) / g_oMoni.nBlockSize;
            for (var nInfoCnt = 0; nInfoCnt < g_nCdbInfoRow; ++nInfoCnt) {
                var aTmp = fnDeepClone(aMoniSubInfoSt); // Chenly 2018-10-08 必须深拷贝，防止引用重复
                g_oMoni.aDataInfo.push(aTmp);
            }

            resolve("fnCreMoniObj Done");
        };
    });

}

/**
 * @Author    Muc
 * @DateTime  2018-09-30
 * @Describle [设置g_oMoni.aDataInfo subInfo的原始资料值（无精度处理）]
 * @details
 * @return    {[type]}    [description]
 */
function fnSetObjOriginVal(objArg) {
    return new Promise(function(resolve, reject) {
        var aDataInfo = objArg.aDataInfo;
        g_nCdbStart = objArg.nHeadSize;

        /* 判断数据是否有效 */
        var sHeader = parseInt(g_aMoniCdb.slice(0, g_nCdbStart));

        if (!sHeader) {
            resolve("fnSetObjOriginVal Break");
        }

        // Chenly 2018-09-30 提取cdb中的监测信息的值并写入到Obj内
        for (var i = 0, nInfoLen = aDataInfo.length; i < nInfoLen; ++i) {
            for (var j = 0, nSubInfoLen = aDataInfo[i].length; j < nSubInfoLen; ++j) {
                nSubInfoSize = aDataInfo[i][j].nSize;
                // 无用的信息无需记录值
                var valTmp = fnTrvlMoniCdbData(g_aMoniCdb, g_nCdbStart, g_nCdbEnd, nSubInfoSize);
                if (aUseLess.indexOf(aDataInfo[i][j].sDDKey) === -1)
                    aDataInfo[i][j].fValue = valTmp;
            }

        }

        resolve("fnSetObjOriginVal Done");
    });

}

function fnTrvlEvent() {
    fnInitVariate()
        .then(() => {
            return fnTrvlFolder();
        })
        .then(() => {
            return fnEnd();
        }); // init and clear
}

function fnEnd() {
    return new Promise((resolve, reject) => {
        $('#upFolder').val(''); // 清空上传文件的标识，防止多次选择错误的文件夹后，提示信息只触发一次的问题现象

        resolve("fnEnd Done");
    });

}
// 处理上传的Folder内的cdb和ini数据，并呈现数据结果
function fnTrvlFolder() {
    return new Promise((resolve, reject) => {
        var upFolder = document.getElementById('upFolder').files;
        var nFileSizes = 0;
        var sTrvlStatus = fnQuitTrvlFolder(g_oMoni, upFolder);
        if (sTrvlStatus !== "Continue") {
            return -1;
        }

        // 获取当前文件的相对路径，基于安全策略，无法获取绝对路径
        g_oMoni.RelativePath = upFolder[0].webkitRelativePath;

        // 分配ini和cdb文件变量
        for (var i = 0, len = upFolder.length; i < len; ++i) {
            nFileSizes += Math.round(upFolder[i].size / 1024 / 1024);

            if (upFolder[i].name.indexOf(".cdb") !== -1) {
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

        // Chenly 2018-11-06 mark for test
        // var promises = [fnGetSysInfo(g_oMoni, g_SysInfoFile), fnCreMoniCdbArray(), fnCreMoniObj(), fnSetObjOriginVal(g_oMoni), fnShowMoniData(g_oMoni)];
        // Promise.all(promises).catch(err => {
        //     alert('无效的cdb文件');
        // });

        fnGetSysInfo(g_oMoni, g_SysInfoFile)
            .then(() => {
                return fnCreMoniCdbArray();
            })
            .then(() => {
                return fnCreMoniObj();
            })
            .then(() => {
                return fnSetObjOriginVal(g_oMoni);
            })
            .then((Rslt) => {
                if (Rslt.indexOf("Done") !== -1) {
                    return fnShowMoniData(g_oMoni);
                } else {
                    throw '所选文件夹内的文件内容无效，请核查';
                }
            })
            .catch((err) => {
                alert(err);
            });

        // Chenly 2018-11-06 mark for test
        // fnGetSysInfo(g_oMoni, g_SysInfoFile)
        //     .then(function() {
        //         return fnCreMoniCdbArray();
        //     })
        //     .then(function() {
        //         return fnCreMoniObj();
        //     })
        //     .then(function() {
        //         return fnSetObjOriginVal(g_oMoni);
        //     })
        //     .then(function(Rslt) {
        //         // console.log(g_oMoni);
        //         return fnShowMoniData(g_oMoni);
        //     });

        resolve("fnTrvlFolder Done");
    });
}

function fnInitVariate() {
    return new Promise(function(resolve, reject) {
        // Init Obj
        g_oMoni = new MoniObj();
        g_oMoni.sFolderName = "moni";
        g_aMoniCdb = [];

        // 清空全局的file标识
        g_CdbFile = undefined;
        g_IniFile = undefined;
        g_SysInfoFile = undefined;

        resolve("fnInitVariate Done");
    });
}

/**
 * @Author    Muc
 * @DateTime  2018-10-29
 * @Describle [显示先前的数据，防止页面切换导致先前的obj对象数据全部丢失]
 * @Warning   [先前存下来的只有5000笔数据，故此处无需再做offset特殊处理]
 * @return    {[type]}    [description]
 */
function fnPreObjShow(objArg) {
    var aDataInfo = objArg.aDataInfo;
    var nRecSum = aDataInfo.length; // 监测记录的条数
    var nTitSum = aDataInfo[0].length; // 所有标题的数据结构与值完全一致，故判断任意一行即可得知
    var tdBuff = "";
    var trBuff = "";

    for (var nRecx = 0; nRecx < nRecSum; ++nRecx) {
        for (var nTitx = 0; nTitx < nTitSum; ++nTitx) {
            /* 显示监测信息的标题文字内容，判断===0即显示一行即可 */
            if (nRecx === 0) {
                if (objArg.aDataInfo[nRecx][nTitx].Visb > 0) {
                    trBuff += "<th>" + aDataInfo[nRecx][nTitx].CN + "</th>";
                }
            }

            /* 显示监测信息的详细数值 */
            if (aDataInfo[nRecx][nTitx].Visb > 0) {
                tdBuff += "<td>" + aDataInfo[nRecx][nTitx].fValue + "</td>";
            }
        }
        tdBuff = "<tr>" + tdBuff + "</tr>";
    }

    /* cell append */
    $("#monidata thead tr").append(trBuff);
    $("#monidata tbody").append(tdBuff); // Chenly 2018-11-05 移到外面，效率提高80%
}

// Chenly 2018-10-08 从数据库获取CN,Visible等信息
// 只传必要的数据（g_Obj因数据过大，必须特殊处理，不能直接当作ajax形参传入）
function CNtranslator(objSysArg) {
    $("#PMsg").text("正在获取/解析数据文件，请稍后 。。。");
    // console.time("timer");
    $.ajax({
        method: 'get',
        url: "/app/HMIPrint/CNtranslator", // Chenly 2018-10-15 发送请求的地址，注：此文件类型为.{m}.js
        data: { objSysArg: objSysArg },

        success: function(data) {
            // console.time("CNtranslator");
            var aDataInfo = g_oMoni.aDataInfo;
            var nRecSum = aDataInfo.length; // 监测记录的条数
            // console.log(nRecSum);
            var nTitSum = aDataInfo[0].length; // 所有标题的数据结构与值完全一致，故判断任意一行即可得知
            var trBuff = "";
            var tdBuff = "";
            var tdPreStrP1 = "mso-number-format:'\@';>"; // 强制转化为文本格式，防止数值为0的数据精度丢失，例：0.00 错误的 => 0
            // var tdType = <td style="mso-number-format:'\@';">;
            var tdPreStr = "<td style=" + tdPreStrP1;

            // 从biz获取的data,row内的Inx代表的内容
            var nArrInx = {
                DDKey: 0,
                CN: 1,
                Visb: 2,
                Prec: 3
            };


            // 当前HMI至多存储5000笔数据，生成的cdb文件里也只有5000笔，此处为预留
            var nRecOffset = 0;

            for (var nRecx = nRecOffset; nRecx < nRecSum; ++nRecx) {
                tdBuff += "<tr>"; // 每一条完整的监测记录加个换行
                for (var nTitx = 0; nTitx < nTitSum; ++nTitx) {
                    /* 从biz获取的满足条件的data.rows [DDKey,CN,Visb,Preci] */
                    for (var nVisbInfoInx in data.rows) {
                        if ((aDataInfo[nRecx][nTitx].sDDKey == data.rows[nVisbInfoInx][nArrInx.DDKey]) &&
                            (aUseLess.indexOf(aDataInfo[nRecx][nTitx].sDDKey) === -1)) { // 只记录从DB获取的有用的信息

                            /* 设置精度 */
                            if (aDataInfo[nRecx][nTitx].Prec !== data.rows[nVisbInfoInx][nArrInx.Prec]) {
                                aDataInfo[nRecx][nTitx].Prec = data.rows[nVisbInfoInx][nArrInx.Prec];
                            }
                            var nPrecTmp = aDataInfo[nRecx][nTitx].Prec;
                            var fValTmp = aDataInfo[nRecx][nTitx].fValue;
                            // Chenly 2018-09-30 精度=0的数据，不做精度处理，节省开销，
                            if (nPrecTmp > 0) {
                                fValTmp /= Math.pow(10, nPrecTmp);
                                aDataInfo[nRecx][nTitx].fValue = fValTmp.toFixed(nPrecTmp); // 保留精度对应的小数位，针对原工具的优化
                            } else if (nPrecTmp < 0) { // Chenly 2018-09-30 精度<0的数据，不做精度处理，节省开销，
                                aDataInfo[nRecx][nTitx].fValue *= (-nPrecTmp); // 精度为负N则表示值需要扩大10*N倍，针对原工具的补充
                            }


                            /* 设置监测信息是否可见 */
                            if (aDataInfo[nRecx][nTitx].Visb !== data.rows[nVisbInfoInx][nArrInx.Visb]) {
                                aDataInfo[nRecx][nTitx].Visb = data.rows[nVisbInfoInx][nArrInx.Visb];
                            }


                            /* 显示监测信息的标题文字内容，所有title从第一条记录即可获取完全 */
                            if (nRecx === nRecOffset) {
                                if (aDataInfo[nRecx][nTitx].Visb > 0) {
                                    aDataInfo[nRecx][nTitx].CN = data.rows[nVisbInfoInx][nArrInx.CN];
                                    trBuff += "<th>" + aDataInfo[nRecx][nTitx].CN + "</th>";
                                }

                            }
                        }
                    }

                    /* 显示监测信息的详细数值 PART1 */
                    if (aDataInfo[nRecx][nTitx].Visb > 0) {
                        tdBuff += tdPreStr + aDataInfo[nRecx][nTitx].fValue + "</td>";
                    }

                }
                /* 显示监测信息的详细数值 PART2 ，这里的tr为了换行*/
                tdBuff += "</tr>";
            }

            /* cell append */
            $("#monidata thead tr").html(trBuff); // append = > html，效率再提高约25%
            $("#monidata tbody").html(tdBuff); // 将$操作移至外面，效率提高约85%

            // fnStgParsedObj(g_oMoni); // 临时存储，上限为5MB，必须要改为indexeddb
            $("#PMsg").text("");
            // console.timeEnd("CNtranslator");
        },
        error: function() {
            $("#PMsg").text("");
            alert('远程服务器无响应! #moniParse.js');
        },
        complete: function() {
            // console.timeEnd("timer");
        }
    });

}

//------展示数据功能---------------------
function fnShowMoniData(objArg) {
    return new Promise(function(resolve, reject) {

        // Chenly 2018-10-15 show前先清空，防止重复读取造成显示异常
        $("#monidata thead tr").empty();
        $("#monidata tbody").empty();

        // var DDKey = [];
        // for (var i = 0, len = objArg.aDataInfo[0].length; i < len; ++i) {
        //     DDKey.push(objArg.aDataInfo[0][i].sDDKey);
        // }

        CNtranslator(objArg.aSysInfo);
        resolve("fnShowMoniData Done");
    });
}

function fnTrvlMoniCdbData(aCdbData, nStart, nEnd, nSepSize) {
    var aTmp = [];

    nEnd = (nStart + nSepSize) - 1;
    aTmp = aCdbData.slice(nStart, nEnd + 1);
    aTmp.reverse(); // Chenly 2018-10-15 Little-Endian
    g_nCdbStart = nEnd + 1;
    g_nCdbEnd = (g_nCdbStart + nSepSize) - 1;

    return fnCszToHex(aTmp);
}

function fnCszToHex(csz) {
    var sTmp = csz.join("");
    return parseInt(sTmp, 16);
}

// Chenly 2018-09-29 TEST
function fnIterConsole(aray) {
    if (typeof aray) {
        for (var i = 0, len = aray.length; i < len; ++i) {
            console.log(aray[i]);
        }
    }

}

function fnBuf2HexCsz(aBuf, aHex) {
    var bufView = new Uint8Array(aBuf); // 8个Bit === 1Byte
    // console.log(bufView);
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
function fnStr2DecNum(str) {
    var tmp = parseFloat(str);
    if (!isNaN(tmp))
        return tmp;
    else
        return str;
}
