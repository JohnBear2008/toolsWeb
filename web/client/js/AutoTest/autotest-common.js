/*jshint esversion: 6 */
var dataTable_CN = {
    "sProcessing": "数据加载中 ...",
    // "sProcessing": "<img src='/images/gif/loading4.gif'>", // mark，显示效果需通过css来处理
    "sLengthMenu": "显示 _MENU_ 项结果",
    "sZeroRecords": "没有匹配结果",
    "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
    "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
    "sInfoPostFix": "",
    "sSearch": "搜索： ",
    "sUrl": "",
    "sEmptyTable": "- 来自服务器的反馈：空的数据表 -",
    "sLoadingRecords": "数据加载中 ...",
    "sInfoThousands": ",",
    "oPaginate": {
        "sFirst": "首页",
        "sPrevious": "<",
        "sNext": ">",
        "sLast": "尾页"
    },
    "oAria": {
        "sSortAscending": ": 以升序排列此列",
        "sSortDescending": ": 以降序排列此列"
    }
};
/*===========================================================================+
|   prototype expend                                                         |
+===========================================================================*/

/*===========================================================================+
|   prototype overload                                                       |
+===========================================================================*/

/*===========================================================================+
|   function      {v}.ejs                                                    |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-11-08
 * @Describle [Describle]
 * @Warning   [checkbox事件绑定，并将check结果存到sessionStorage内]
 * @purpose   [记录checkbox事件绑定]
 */
function fnBindRecTrigger(sRecFlag, recBoxID, on_txt, off_txt) {
    // 获取sessionStore内的“记录”状态
    let sRecStat = sessionStorage.getItem(sRecFlag); // String类型
    /* 自动记录 */
    $(recBoxID).lc_switch(on_txt, off_txt);

    if (sRecStat == "true") {
        $(recBoxID).trigger("click"); // 模拟click
    }
    // triggered each time a field changes status
    $('body').delegate('.lcs_check', 'lcs-statuschange', function() {
        // let status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
    });
    // triggered each time a field is checked
    $('body').delegate('.lcs_check', 'lcs-on', function() {
        if (sRecStat !== 'true')
            sessionStorage.setItem(sRecFlag, "true");
    });
    // triggered each time a is unchecked
    $('body').delegate('.lcs_check', 'lcs-off', function() {
        if (sRecStat !== 'false')
            sessionStorage.setItem(sRecFlag, "false");
    });
}

// Chenly 2018-11-09 因第三方excel插件效率低下，故不再使用
// function fnRemitExcel(tableID, excelName) {
//     $(tableID).tableExport({
//         fileName: excelName,
//         worksheetName: excelName,
//         type: 'excel',
// mark，为了提升汇出效率
// excelstyles: ['border-bottom', 'border-top', 'border-left', 'border-right']
//     });
// }

/**
 * @Author    Muc
 * @DateTime  2018-11-07
 * @Describle [为anchor绑定download属性，用于汇出excel]
 * @Details [download的值通过元素outerHTML获取]
 */
function fnTableDataExport(tableIDArg, anchorIDArg, fileNameArg, fileTypeArg) {
    let crvtType = "";
    if (fileTypeArg === ".xls") {
        crvtType = "application/vnd.ms-excel";
    }
    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
    let html = "<html><head><meta charset='utf-8' /></head><body>" + $(tableIDArg).prop("outerHTML") + "</body></html>",
        tdPreStrP1 = "mso-number-format:'\@';>", // 强制转化为文本格式，防止数值为0的数据精度丢失，例：0.00 错误的 => 0
        tdPreStr = "<td style=" + tdPreStrP1;
    console.log($(tableIDArg).prop("outerHTML"));
    // 所有td带上format-style
    html = html.replace(/<td>/g, tdPreStr);

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    let blob = new Blob([html], { type: crvtType }),
        $anchor = $(anchorIDArg)[0];
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    $anchor.href = URL.createObjectURL(blob);
    // 设置文件名
    $anchor.download = fileNameArg + fileTypeArg;
}

/**
 * @Author    Muc
 * @DateTime  2018-11-07
 * @Describle [为anchor绑定download属性，用于汇出excel]
 * @Details [download的值从strBuff/IndexedDB获取]
 */
function fnTableBuffExport(trBuffArg, tdBuffArg, anchorIDArg, fileNameArg, fileTypeArg) {
    let crvtType = "";
    // 汇出xls，则使用xls的格式化标识
    if (fileTypeArg === ".xls") {
        crvtType = "application/vnd.ms-excel";
    }
    let tdPreStrP1 = "mso-number-format:'\@';>", // 强制转化为文本格式，防止数值为0的数据精度丢失，例：0.00 错误的 => 0
        tdPreStr = "<td style=" + tdPreStrP1;

    // border是为了让汇出的excel能有框格
    let tableHtml = "<table border='1'><thead><tr>" + trBuffArg + "</tr></thead>" + "<tbody>" + tdBuffArg + "</tbody></table>";
    tableHtml = tableHtml.replace(/<td>/g, tdPreStr); // 所有td带上format-style

    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
    let html = "<html><head><meta charset='utf-8' /></head><body>" + tableHtml + "</body></html>";

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    let blob = new Blob([html], { type: crvtType }),
        $anchor = $(anchorIDArg)[0];
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    $anchor.href = URL.createObjectURL(blob);
    // 设置文件名
    $anchor.download = fileNameArg + fileTypeArg;
}

/**
 * @Describle [导出excel S2版本]
 * @Details   [包含：多个sheet]
 * @annotate  [S2 随便取的，这里只是为了区分其他的导出excel功能]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[type]}    aTableID  [tableID 数组集合]
 * @param     {[type]}    aWkSheet [atableID 对应的sheet名]
 * @param     {[type]}    sWbName  [汇出的excel名字，wb代表workbook，此处参照python命名]
 * @param     {[type]}    appname [格式，这里用excel]
 */
function fnExpBtnBind(linkID, aTableID, aWkSheet, sWbName, appname) {
    let uri = 'data:application/vnd.ms-excel;base64,',
        tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">' +
        '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>' +
        '<Styles>' +
        '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>' +
        '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>' +
        '</Styles>' +
        '{worksheets}</Workbook>',
        tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>',
        tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>',
        base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))); },
        format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }); };

    let ctx = "",
        workbookXML = "",
        worksheetsXML = "",
        rowsXML = "";

    for (let i = 0; i < aTableID.length; i++) {
        if (!aTableID[i].nodeType) aTableID[i] = document.getElementById(aTableID[i]);

        // 控制要导出的行数
        for (let j = 0; j < aTableID[i].rows.length; j++) {
            rowsXML += '<Row>';

            for (let k = 0; k < aTableID[i].rows[j].cells.length; k++) {
                let dataType = aTableID[i].rows[j].cells[k].getAttribute("data-type"),
                    dataStyle = aTableID[i].rows[j].cells[k].getAttribute("data-style"),
                    dataValue = aTableID[i].rows[j].cells[k].getAttribute("data-value"),
                    dataFormula = aTableID[i].rows[j].cells[k].getAttribute("data-formula");

                dataValue = (dataValue) ? dataValue : aTableID[i].rows[j].cells[k].innerHTML;
                dataFormula = (dataFormula) ? dataFormula : (appname == 'Calc' && dataType == 'DateTime') ? dataValue : null;
                ctx = {
                    attributeStyleID: (dataStyle == 'Currency' || dataStyle == 'Date') ? ' ss:StyleID="' + dataStyle + '"' : '',
                    nameType: (dataType == 'Number' || dataType == 'DateTime' || dataType == 'Boolean' || dataType == 'Error') ? dataType : 'String',
                    data: (dataFormula) ? '' : dataValue,
                    attributeFormula: (dataFormula) ? ' ss:Formula="' + dataFormula + '"' : ''
                };
                rowsXML += format(tmplCellXML, ctx);
            }
            rowsXML += '</Row>';
        }
        ctx = { rows: rowsXML, nameWS: aWkSheet[i] || 'Sheet' + i };
        worksheetsXML += format(tmplWorksheetXML, ctx);
        rowsXML = "";
    }

    ctx = { created: (new Date()).getTime(), worksheets: worksheetsXML };
    workbookXML = format(tmplWorkbookXML, ctx);
    // console.log(workbookXML);

    let link = document.getElementById(linkID);
    link.href = uri + base64(workbookXML);
    link.download = sWbName || 'Workbook.xls';
    link.target = '_blank';
}

/**
 * @Author    Muc
 * @DateTime  2018-11-08
 * @Describle [Describle]
 * @Warning   [将成功解析后的obj存储到IndexedDB，以防obj被销毁无法找回]
 * @purpose   [1、保存上次解析数据  2、汇出excel拓展]
 */
function fnSetData2IndexedDB(dbArg, storeArg, sIDArg, oDataArg) {
    let db,
        DBReq;

    DBReq = indexedDB.open(dbArg); // second opt_arg : vers def == 1
    // 初次创建DB或者版本更新时调用
    DBReq.onupgradeneeded = function(event) {
        db = event.target.result;
        // if store not exist, then create
        if (!db.objectStoreNames.contains(storeArg)) {
            let objectStore = db.createObjectStore(storeArg, { keyPath: "id" }); // 主键为id
        }
    };
    // 数据库打开成功后 rewrite数据
    DBReq.onsuccess = (e) => {
        db = e.target.result;
        let transaction = db.transaction([storeArg], "readwrite"), // second arg def == read
            objStore = transaction.objectStore(storeArg),
            putReq = objStore.put({ id: sIDArg, data: oDataArg });
        putReq.onsuccess = (e) => {};
    };
    // 数据库打开失败
    DBReq.onerror = (e) => {
        alert("检测到IndexedDB被禁用，影响：无法保存上次成功解析的数据");
    };

}
/**
 * @Describle [将构造的数据对象存储到IndexedDB V1.1.0 改良版]
 * @Details   [附带 sessionStorege 存储流程]
 * @Author    Muc
 * @DateTime  2018-12-04
 * @param     {[type]}    obj        [创建的全局数据对象，例：g_oMold]
 * @param     {[type]}    store      [数据仓库（表）, def === "HMIPrint"]
 * @param     {[type]}    pageID     [仓库的key，def === obj.sFolderName]
 * @param     {[type]}    sParseFlag [临时会话，记录解析状态，如果解析过就给true, def === (obj.sFolderName+"ParseStat")]
 * @param     {[type]}    InxDB      [自订的IndexDB名字，def === MucDB]
 */
function fnSaveObj2InxDB(obj, store, pageID, sParseFlag, InxDB = "MucDB") {
    pageID = pageID || obj.sFolderName;
    sParseFlag = sParseFlag || (pageID + "ParseStat");
    sessionStorage.setItem(sParseFlag, "true");

    let db,
        DBReq;

    pageID = pageID || obj.sFolderName;

    DBReq = indexedDB.open(InxDB); // second opt_arg : vers def == 1
    // 初次创建DB或者版本更新时调用
    DBReq.onupgradeneeded = function(event) {
        db = event.target.result;
        // if store not exist, then create
        if (!db.objectStoreNames.contains(store)) {
            let objectStore = db.createObjectStore(store, { keyPath: "id" }); // 主键为id
        }
    };
    // 数据库打开成功后 rewrite数据
    DBReq.onsuccess = (e) => {
        db = e.target.result;
        let transaction = db.transaction([store], "readwrite"), // second arg def == read
            objStore = transaction.objectStore(store),
            putReq = objStore.put({ id: pageID, data: obj });
        putReq.onsuccess = (e) => {};
    };
    // 数据库打开失败
    DBReq.onerror = (e) => {
        alert("检测到IndexedDB被禁用，影响：无法保存上次成功解析的数据");
    };

}

/**
 * @Author    Muc
 * @DateTime  2018-11-08
 * @Describle [从IndexedDB获取记录]
 * @Warning   [必须通过callback获取结果]
 * @purpose   [purpose]
 */
function fnGetDataFrIndexedDB(dbArg, storeArg, sIDArg, callback) {
    let db,
        DBReq,
        data;

    DBReq = indexedDB.open(dbArg); // second opt_arg : vers def == 1
    // 初次创建DB或者版本更新时调用
    DBReq.onupgradeneeded = function(event) {
        db = event.target.result;
        // if store not exist, then create
        if (!db.objectStoreNames.contains(storeArg)) {
            db.createObjectStore(storeArg, { keyPath: "id" }); // 主键为id
        }
    };
    // 数据库打开成功后 rewrite数据
    DBReq.onsuccess = (e) => {
        db = e.target.result;
        let transaction = db.transaction([storeArg], "readwrite"), // second arg def == read
            objStore = transaction.objectStore(storeArg),
            getReq = objStore.get(sIDArg);
        getReq.onsuccess = function(e) {
            // console.log("#1", e.target.result);
            if (e.target.result) {
                data = e.target.result.data;
                callback(data);
            }
        };
    };

}
/**
 * @Author    Muc
 * @DateTime  2018-11-08
 * @Describle [从IndexedDB获取记录 v1.0.1 函数名字改良版 ]
 * @Warning   [必须通过callback获取结果]
 * @purpose   [purpose]
 */
function fnGetObjFrInxDB(dbArg, storeArg, sIDArg, callback) {
    let db,
        DBReq,
        data;

    DBReq = indexedDB.open(dbArg); // second opt_arg : vers def == 1
    // 初次创建DB或者版本更新时调用
    DBReq.onupgradeneeded = function(event) {
        db = event.target.result;
        // if store not exist, then create
        if (!db.objectStoreNames.contains(storeArg)) {
            db.createObjectStore(storeArg, { keyPath: "id" }); // 主键为id
        }
    };
    // 数据库打开成功后 rewrite数据
    DBReq.onsuccess = (e) => {
        db = e.target.result;
        let transaction = db.transaction([storeArg], "readwrite"), // second arg def == read
            objStore = transaction.objectStore(storeArg),
            getReq = objStore.get(sIDArg);
        getReq.onsuccess = function(e) {
            // console.log("#1", e.target.result);
            if (e.target.result) {
                data = e.target.result.data;
                callback(data);
            }
        };
    };

}
/**
 * @Author    Muc
 * @DateTime  2018-09-27
 * @Describle [Detects the current browser is supported or not]
 * @return    {[type]}             [description]
 */
function fnBrowserSupport() {
    let body = document.getElementsByTagName("body")[0];

    if (typeof FileReader == 'undefined' || typeof body.style.WebkitAnimation == "undefined" || typeof(Promise) !== "function") {
        alert("当前浏览器不支持高级特性，建议使用如下浏览器的最新版本： \n · 猎豹浏览器 \n · 360浏览器 \n · Chrome浏览器");
    } else
        return "Support";

}

// Chenly 2018-10-11 console Log Array Content
function fnIterConsole(aray) {
    if (typeof aray) {
        for (let i = 0, len = aray.length; i < len; ++i) {
            console.log(aray[i]);
        }
    }

}

/**
 * @Describle [获取system.info文件的内容]
 * @Details   [Details]
 * @Warning   [Warning]
 * @purpose   [purpose]
 * @Author    Muc
 * @DateTime  2018-12-12
 * @param     {[type]}    objArg      [description]
 * @param     {[type]}    SysInfoFile [description]
 * @return    {[type]}                [description]
 */
function fnGetSysInfo(objArg, SysInfoFile) {
    return new Promise(function(resolve, reject) {
        // 旧HMI不带info文件的则跳过
        if (SysInfoFile) {
            let reader = new FileReader();
            reader.readAsText(SysInfoFile);

            reader.onload = function() {
                let aSysInfoSpt = this.result.split("\n"), // Chenly 2018-09-28 将读取到的字符串按换行符转化为数组
                    reNoSpc = /\w/;
                // console.log(aSysInfoSpt);
                for (let nRowx = 0, nRows = aSysInfoSpt.length; nRowx < nRows; ++nRowx) {
                    let rowTmp = aSysInfoSpt[nRowx];
                    if (rowTmp.length > 8) { // system.info文件每行有效内容 至少有8个字符，eg A=B，判断>8，为了防呆（空行）
                        let aTmp = rowTmp.split("="), // 把等号作为key/val的划分
                            key = aTmp[0],
                            val = aTmp[1];
                        objArg.aSysInfo[key] = val;
                        // console.log(key, val);
                    }
                }

                resolve("fnGetSysInfo Done # found info");
            };
        } else {
            resolve("fnGetSysInfo Done #2 could't find info file");
        }
    });
}


/**
 * @Describle [提前结束folder遍历]
 * @Author    Muc
 * @DateTime  2018-12-28
 * @return    {[string]}                [Continue - 继续解析]
 */
function fnQuitTrvlFolder(objArg, upFolderArg) {
    // Chenly 2018-10-10 点击了选择文件夹按钮，在弹出的upFolder explorer按了取消
    if (upFolderArg[0] === undefined) {
        return "upFolder Explorer Cancel";
    } else {
        let sFolderPath = upFolderArg[0].webkitRelativePath;

        if (sFolderPath.toLowerCase().search(objArg.sFolderName)) {
            let sAlertStr = "文件夹名不匹配，注：请选择{0}开头的文件夹".format(objArg.sFolderName);
            $('#upFolder').val('');
            alert(sAlertStr);
            return "Select Wrong Folder";
        } else {
            return "Continue";
        }
    }
}

/**
 * @Author    Muc
 * @DateTime  2018-10-29
 * @Describle [存储解析成功后的Obj，防止切换页面后数据丢失，]
 * @Warning   [用Obj对应的文件夹名关键字，即FolderName的关键字做为标识。例：MoniObj.sFolderName = moni]
 * @return    {[type]}    [description]
 */
function fnStgParsedObj(objArg) { // TODO 改为indexedDB
    try {
        sessionStorage.setItem(objArg.sFolderName, JSON.stringify(objArg)); //将对象转为json字符串存储
    } catch (oException) {
        if (oException.name == 'QuotaExceededError') {
            alert('超出浏览器本地存储 5MB 限额！');
            //如果历史信息不重要了，可清空后再设置
            sessionStorage.clear();
            // sessionStorage.setItem(key, value);
        }

    }
}

/*===========================================================================+
|   function      IndexedDB                                                  |
+===========================================================================*/


/*===========================================================================+
|   function      other                                                      |
+===========================================================================*/
// 时间转为时间戳（ 毫秒）
// console.log("耗时：" + (t2 - t1) + " 毫秒");
function time2stamp() {
    let cost = new Date();
    return Date.parse(cost) + cost.getMilliseconds();
}
