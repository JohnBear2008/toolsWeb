/*jshint esversion: 6 */
/*Note：
 * 对象的属性，假使未按照匈牙利命名规则的，则表示此项属性从DB获取
 * 对象的所有属性可以在构造函数内找到，假使有缺漏，请补充并带上注释
 **/

// 监测数据信息原型
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

    // 分页显示后，用于excel汇出功能
    this.trBuff = ""; // 用以缓存所有tr元素.html()组成集合
    this.tdBuff = ""; // 用以缓存所有td元素.html()组成集合

    // DataTable插件使用
    this.aTheadElem = ""; // columns属性对应的值
    this.aTbElem = ""; // data属性对应的值
}

function MoniInfoSubObj(nSerial, sDDKey, nSize, Prec, nDispPrec, fValue) {
    this.nSerial = nSerial;
    this.sDDKey = sDDKey; // 对应DB内的DDKey
    this.nSize = nSize;
    this.Prec = 0;
    this.nDispPrec = nDispPrec;
    this.Visb = 0;
    this.fValue = 0;
}

var g_CdbFile,
    g_IniFile,
    g_SysInfoFile, // 机型区分的file标识
    g_nCdbSize, // 用于缓存cdb的大小
    g_nCdbInfoRow, // 监测cdb，详细监测信息的条数
    g_nCdbStart = 0, // 遍历cdb的start_inx
    g_nCdbEnd = 0, // 遍历cdb的end_inx
    g_aMoniCdb, // 最终会被splice清空
    g_oMoni; // 用以构造moni数据

/* 无用的信息列表 */
var aUseLess = [
    "C_MEMERY_PAD" // 内存对齐的内容
];

/*===========================================================================+
|   function      Main                                                       |
+===========================================================================*/
function fnTrvlEvent() {
    fnInitVariate()
        .then(() => {
            return fnTrvlFolder();
        })
        .then(() => {
            return fnEnd();
        }); // init and clear
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

        // 分配ini和cdb文件标识
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

        /* 假使文件夹超过预期大小、cdb或ini文件丢失则直接return */
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

        resolve("fnTrvlFolder Done");
    });
}

function fnEnd() {
    return new Promise((resolve, reject) => {
        $('#upFolder').val(''); // 清空上传文件的标识，防止多次选择错误的文件夹后，提示信息只触发一次的问题现象

        resolve("fnEnd Done");
    });

}

/*===========================================================================+
|   function      Sub                                                        |
+===========================================================================*/
// 解析cdb文件内容
function fnCreMoniCdbArray() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();

        reader.readAsArrayBuffer(g_CdbFile); // 以ArrayBuffer的形式读取
        reader.onload = function() {
            fnBuf2HexCsz(this.result, g_aMoniCdb);

            resolve("fnCreMoniCdbArray Done");
        };
    });
}

/**
 * @Author    Muc
 * @DateTime  2018-10-26
 * @Describle [将ini里面的所有有用的信息写入到obj内，例：DDKey, 名字，数据长度，精度，格式化精度，可见性]
 */
function fnCreMoniObj() {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(g_IniFile);

        reader.onload = function() {
            var aDetial,
                bSubInfoFlag = false, // 1 - 开始处理监测SubInfo信息
                aMoniIniSpt = this.result.split("\n"), // 将读取到的字符串按换行符转化为数组
                reMoniSubInfoSep = /[=, ]+/,
                aMoniSubInfoSt = [],
                nSizeSum = 0;
            // 遍历iniData生成的数组，获得Header和BlockSize并将数组指针重新指向监测信息后继续遍历过程
            // 注：期间parseInt是为了将代表数字字符变为数字类型保存，便于读取
            for (let i = 0, len = aMoniIniSpt.length; i < len; ++i) {
                if (bSubInfoFlag == false) {
                    if (aMoniIniSpt[i].indexOf("Header") !== -1) {
                        let sHeadSize = aMoniIniSpt[i].match(/\d+/)[0];
                        g_oMoni.nHeadSize = parseInt(sHeadSize, 10);
                    } else if (aMoniIniSpt[i].indexOf("BlockSize") !== -1) {
                        let sBlockSize = aMoniIniSpt[i].match(/\d+/)[0];
                        g_oMoni.nBlockSize = parseInt(sBlockSize, 10);
                    } else if (aMoniIniSpt[i].indexOf(",") !== -1) {
                        i -= 1; // -1是为了将数组指针重新指向监测的SubInfos信息
                        bSubInfoFlag = true;
                    }
                } else { // 此处获取监测的SubInfo，每行以数组的形式存入
                    if (aMoniIniSpt[i].match(reMoniSubInfoSep)) {
                        aDetial = aMoniIniSpt[i].split(reMoniSubInfoSep).map(fnStr2DecNum);
                        let oTmp = new MoniInfoSubObj(...aDetial);
                        aMoniSubInfoSt.push(oTmp);
                    } else {
                        break; // 防止写入空内容（这里指EOF的‘\0'）
                    }
                }
            }

            // 获取ini内 【Parameter】参数的总数据长度
            for (let j = 0, nlen = aMoniSubInfoSt.length; j < nlen; ++j) {
                nSizeSum += aMoniSubInfoSt[j].nSize;
            }

            // blocksize与ini内【Parameter】参数的总数据长度不一致时，补齐空缺的内容
            if (g_oMoni.nBlockSize > aMoniSubInfoSt.length) {
                let nPadBytes = g_oMoni.nBlockSize - nSizeSum;
                let g_oIniLostData = new MoniInfoSubObj(aMoniSubInfoSt.length + 1, "C_MEMERY_PAD", nPadBytes, 0, 0, 0, 0);
                aMoniSubInfoSt.push(g_oIniLostData);
            }

            // 有一条详细监测数据就push一笔
            g_nCdbInfoRow = (g_nCdbSize - g_oMoni.nHeadSize) / g_oMoni.nBlockSize;
            for (let nInfoCnt = 0; nInfoCnt < g_nCdbInfoRow; ++nInfoCnt) {
                let aTmp = fnDeepClone(aMoniSubInfoSt); // 必须深拷贝，防止引用重复
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
 */
function fnSetObjOriginVal(objArg) {
    return new Promise(function(resolve, reject) {
        var aDataInfo = objArg.aDataInfo;
        g_nCdbStart = objArg.nHeadSize;

        /* 判断数据是否有效 */
        let sHeader = parseInt(g_aMoniCdb.slice(0, g_nCdbStart));

        if (!sHeader) {
            resolve("fnSetObjOriginVal Break");
        }

        // 提取cdb中的监测信息的值并写入到Obj内
        for (let i = 0, nInfoLen = aDataInfo.length; i < nInfoLen; ++i) {
            for (let j = 0, nSubInfoLen = aDataInfo[i].length; j < nSubInfoLen; ++j) {
                let nSubInfoSize = aDataInfo[i][j].nSize;
                // 无用的信息无需记录值
                let valTmp = fnTrvlMoniCdbData(g_aMoniCdb, g_nCdbStart, g_nCdbEnd, nSubInfoSize);
                if (aUseLess.indexOf(aDataInfo[i][j].sDDKey) === -1)
                    aDataInfo[i][j].fValue = valTmp;
            }
        }

        resolve("fnSetObjOriginVal Done");
    });

}

/*===========================================================================+
|   function      showParsedData                                             |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-11-09
 * @Describle [展示数据]
 */
function fnShowMoniData(objArg) {
    return new Promise(function(resolve, reject) {

        // show前先清空，防止重复读取造成显示异常
        // $("#monidata thead tr").empty();
        // $("#monidata tbody").empty();

        CNtranslator(objArg.aSysInfo);
        resolve("fnShowMoniData Done");
    });
}

/**
 * @Author    Muc
 * @DateTime  2018-11-09
 * @Describle [通过解析成功后的td\tr字符串数据，直接展示先前的数据]
 */
function fnShowPreMoniData(objArg) {
    let trBuff = objArg.trBuff,
        // tdBuff = objArg.tdBuff,
        aTheadElem = objArg.aTheadElem,
        aTbElem = objArg.aTbElem;

    /* cell append */
    $("#dataThTr").html(trBuff);
    let table = crtDBTableObj("#monidata", aTheadElem);
    /* 添加数据并绘制表格 */
    table.clear()
        .rows.add(aTbElem)
        .draw(false);
}

/*===========================================================================+
|   function      ajax                                                       |
+===========================================================================*/
// 从数据库获取CN,Visible等信；为防纰漏，故函数名不再做修改
// 只传必要的数据（g_Obj因数据过大，必须特殊处理，不能直接当作ajax形参传入）
function CNtranslator(objSysArg) {
    $("#PMsg").text("正在获取/解析数据文件，请稍后 . . .");
    // console.time("timer");
    $.ajax({
        method: 'get',
        url: "/app/HMIPrint/CNtranslator", // 发送请求的地址，注：此文件类型为.{m}.js
        data: { objSysArg: objSysArg },

        success: function(data) {
            // console.time("CNtranslator");
            var aDataInfo = g_oMoni.aDataInfo;
            var nRecSum = aDataInfo.length; // 监测记录的条数
            // console.log(nRecSum);
            var nTitSum = aDataInfo[0].length; // 所有标题的数据结构与值完全一致，故判断任意一行即可得知
            var trBuff = "";
            var tdBuff = "";

            var tdPreStr = "<td>";
            // 从biz获取的data,row内的Inx代表的内容
            var nArrInx = {
                DDKey: 0,
                CN: 1,
                Visb: 2,
                Prec: 3
            };

            // 当前HMI至多存储5000笔数据，生成的cdb文件里也只有5000笔，此处为预留
            var nRecOffset = 0;

            for (let nRecx = nRecOffset; nRecx < nRecSum; ++nRecx) {
                tdBuff += "<tr>"; // 每一条完整的监测记录加个换行
                for (let nTitx = 0; nTitx < nTitSum; ++nTitx) {
                    /* 从biz获取的满足条件的data.rows [DDKey,CN,Visb,Preci] */
                    for (let nVisbInfoInx in data.rows) {
                        if ((aDataInfo[nRecx][nTitx].sDDKey == data.rows[nVisbInfoInx][nArrInx.DDKey]) &&
                            (aUseLess.indexOf(aDataInfo[nRecx][nTitx].sDDKey) === -1)) { // 只记录从DB获取的有用的信息

                            /* 设置精度 */
                            if (aDataInfo[nRecx][nTitx].Prec !== data.rows[nVisbInfoInx][nArrInx.Prec]) {
                                aDataInfo[nRecx][nTitx].Prec = data.rows[nVisbInfoInx][nArrInx.Prec];
                            }
                            let nPrecTmp = aDataInfo[nRecx][nTitx].Prec;
                            let fValTmp = aDataInfo[nRecx][nTitx].fValue;
                            // 精度=0的数据，不做精度处理，节省开销，
                            if (nPrecTmp > 0) {
                                fValTmp /= Math.pow(10, nPrecTmp);
                                aDataInfo[nRecx][nTitx].fValue = fValTmp.toFixed(nPrecTmp); // 保留精度对应的小数位，针对原工具的优化
                            } else if (nPrecTmp < 0) { // 精度<0的数据，不做精度处理，节省开销，
                                aDataInfo[nRecx][nTitx].fValue *= (-nPrecTmp); // 精度为负N则表示值需要扩大10*N倍，针对原工具的补充
                            }

                            /* 设置监测信息是否可见 */
                            if (aDataInfo[nRecx][nTitx].Visb !== data.rows[nVisbInfoInx][nArrInx.Visb]) {
                                aDataInfo[nRecx][nTitx].Visb = data.rows[nVisbInfoInx][nArrInx.Visb];
                            }

                            /*Mark，这里可删除不再使用的信息，用以缩小g_variate 所占空间*/
                            // delete aDataInfo[nRecx][nTitx].nSize;
                            // delete aDataInfo[nRecx][nTitx].Prec;
                            // delete aDataInfo[nRecx][nTitx].nDispPrec;

                            /* ========== 显示监测信息的标题文字内容，所有title从第一条记录即可获取完全 ========== */
                            if (nRecx === nRecOffset) {
                                if (aDataInfo[nRecx][nTitx].Visb > 0) {
                                    aDataInfo[nRecx][nTitx].CN = data.rows[nVisbInfoInx][nArrInx.CN];
                                    trBuff += "<th>" + aDataInfo[nRecx][nTitx].CN + "</th>";
                                }

                            }
                        }
                    }
                    /* ========== 显示监测信息的详细数值 PART1 ========== */
                    if (aDataInfo[nRecx][nTitx].Visb > 0) {
                        tdBuff += tdPreStr + aDataInfo[nRecx][nTitx].fValue + "</td>";
                    }

                }
                /* ========== 显示监测信息的详细数值 PART2 ，这里的tr为了换行 ========== */
                tdBuff += "</tr>";
            }

            /* cell append */
            $("#monidata thead tr").html(trBuff); // append = > html
            let aTbElem = [], // 替代DataTable内的data
                oTbData,
                aTheadElem = []; // 替代DataTable内的columns

            for (let nRecx2 = 0; nRecx2 < nRecSum; ++nRecx2) {
                // init obj
                oTbData = {};
                for (let nTitx2 = 0; nTitx2 < nTitSum; ++nTitx2) {
                    if (aDataInfo[nRecx2][nTitx2].Visb) {
                        oTbData[aDataInfo[nRecx2][nTitx2].sDDKey] = aDataInfo[nRecx2][nTitx2].fValue;

                        if (nRecx2 === 0) {
                            // 这里必须为obj，为了给DataTable传入参数
                            let oThead = { data: aDataInfo[nRecx2][nTitx2].sDDKey };
                            aTheadElem.push(oThead);
                        }
                    }
                }
                aTbElem.push(oTbData);
            }

            /* ========== 添加数据并绘制表格 ========== */
            let table = crtDBTableObj("#monidata", aTheadElem);
            table.clear()
                .rows.add(aTbElem)
                .draw(false);

            /* ========== 将成功解析的数据们写入到indexedDB ========== */
            let mucDB = "MucDB",
                store = "HMIPrint",
                pageID = "moni",
                sParseFlag = "MoniParseStat", // 假使当前页面解析过，则为true
                obj = g_oMoni;

            obj.trBuff = trBuff;
            obj.tdBuff = tdBuff;
            obj.aTheadElem = aTheadElem;
            obj.aTbElem = aTbElem;
            sessionStorage.setItem(sParseFlag, "true");
            fnSetData2IndexedDB(mucDB, store, pageID, obj); // 最好每次都记录，为了以后的功能拓展

            /* 为anchor绑定download连接 */
            // fnTableBuffExport(trBuff, tdBuff, "#dlink", pageID, '.xls');
        },
        error: function() {
            alert('远程服务器繁忙，请重新刷新一下页面再试试! #moniParse.js');
        },
        complete: function() {
            /* 清空提示字串内容 */
            $("#PMsg").text("");
        }
    });

}

/*===========================================================================+
|   function      cycle                                                      |
+===========================================================================*/
function fnTrvlMoniCdbData(aCdbData, nStart, nEnd, nSepSize) {
    let aTmp = [];

    nEnd = (nStart + nSepSize) - 1;
    aTmp = aCdbData.slice(nStart, nEnd + 1);
    aTmp.reverse(); // Little-Endian
    g_nCdbStart = nEnd + 1;
    g_nCdbEnd = (g_nCdbStart + nSepSize) - 1;

    return fnCszToHex(aTmp);
}


function fnCszToHex(csz) {
    let sTmp = csz.join("");
    return parseInt(sTmp, 16);
}

function fnBuf2HexCsz(aBuf, aHex) {
    let bufView = new Uint8Array(aBuf); // 8个Bit === 1Byte
    // console.log(bufView);
    for (let i = 0, len = bufView.length; i < len; ++i) {
        aHex.push(fnByte2Str(bufView[i]));
    }
}

// 将一个Byte数据转化为Hex状态的Str
function fnByte2Str(byte) {
    let str = "";

    let tmp = byte.toString(16);
    if (tmp.length == 1) {
        tmp = "0" + tmp;
    }
    str += tmp;
    return str;
}

// str代表的是十进制数字？return 数字 ： return str
function fnStr2DecNum(str) {
    let tmp = parseFloat(str);
    if (!isNaN(tmp))
        return tmp;
    else
        return str;
}

/*===========================================================================+
|   function      other                                                      |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-09-27
 * @Describle [提示信息，用于判断当前脚本是否能正确的工作在当前浏览器上]
 * @return    {[type]}             [description]
 */
function fnPromptMsg() {
    // 判断浏览器是否支持FileReader接口
    if (typeof FileReader == 'undefined') {
        result.innerHTML = "<p>你的浏览器不支持FileReader接口，请使用最新的Chrome浏览器！</p>";
        // 使选择控件不可操作
        file.setAttribute("disabled", "disabled");
    } else
        return "Continue";

}

function fnDeepClone(obj) {
    let result = typeof obj.splice === 'function' ? [] : {},
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

/*===========================================================================+
|   function     return a  created obj                                       |
+===========================================================================*/
function crtDBTableObj(tableID, columns) {
    return $(tableID).DataTable({
        /* ========== 数据显示 ========== */
        "aLengthMenu": [
            [15, 50, 200, 500, -1],
            [15, 50, 200, 500, "All"]
        ],
        dataSrc: "",
        // data: aTbElem,
        //使用对象数组，一定要配置columns，告诉 DataTables 每列对应的属性
        //data 这里是固定不变的，name，position，salary，office 为你数据里对应的属性
        columns: columns,

        /* ========== 显示相关 ========== */
        "bDestroy": true, // 下次载入前销毁
        "filter": false, //搜索框 // 数据呈现这边意义不大，故mark
        // "sPaginationType": "full_numbers", // 首页尾页
        "bDeferRender": true, // 延迟渲染数据
        "bProcessing": true,
        //默认的排序方式，第1列 （开模序号），升序排列
        "aaSorting": [
            [0, "asc"]
        ],

        "oLanguage": {
            "url": "dataTables.german.lang",
            "sProcessing": "正在加载数据中，请稍后 ...",
            // "sProcessing": "<img src='/images/gif/loading4.gif'>", // mark，显示效果需通过css来处理
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        }

        /* ========== 数据处理相关 ==========  */
        /* ========== 新方法 ========== */
    });
}
