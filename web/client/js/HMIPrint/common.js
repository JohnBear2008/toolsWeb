/*jshint esversion: 6 */
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
        // var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
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
    var crvtType = "";
    if (fileTypeArg === ".xls") {
        crvtType = "application/vnd.ms-excel";
    }
    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
    var html = "<html><head><meta charset='utf-8' /></head><body>" + $(tableIDArg).prop("outerHTML") + "</body></html>";
    let tdPreStrP1 = "mso-number-format:'\@';>"; // 强制转化为文本格式，防止数值为0的数据精度丢失，例：0.00 错误的 => 0
    let tdPreStr = "<td style=" + tdPreStrP1;
    console.log($(tableIDArg).prop("outerHTML"));
    // 所有td带上format-style
    html = html.replace(/<td>/g, tdPreStr);

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    var blob = new Blob([html], { type: crvtType });
    var $anchor = $(anchorIDArg)[0];
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
    var crvtType = "";
    if (fileTypeArg === ".xls") {
        crvtType = "application/vnd.ms-excel";
    }
    let tdPreStrP1 = "mso-number-format:'\@';>"; // 强制转化为文本格式，防止数值为0的数据精度丢失，例：0.00 错误的 => 0
    let tdPreStr = "<td style=" + tdPreStrP1;

    // border是为了让汇出的excel能有框格
    var tableHtml = "<table border='1'><thead><tr>" + trBuffArg + "</tr></thead>" + "<tbody>" + tdBuffArg + "</tbody></table>";
    tableHtml = tableHtml.replace(/<td>/g, tdPreStr); // 所有td带上format-style

    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
    var html = "<html><head><meta charset='utf-8' /></head><body>" + tableHtml + "</body></html>";

    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    var blob = new Blob([html], { type: crvtType });
    var $anchor = $(anchorIDArg)[0];
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    $anchor.href = URL.createObjectURL(blob);
    // 设置文件名
    $anchor.download = fileNameArg + fileTypeArg;
}

/*===========================================================================+
|   function      js                                                         |
+===========================================================================*/
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
        let transaction = db.transaction([storeArg], "readwrite"); // second arg def == read

        let objStore = transaction.objectStore(storeArg);
        let putReq = objStore.put({ id: sIDArg, data: oDataArg });
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
        let transaction = db.transaction([storeArg], "readwrite"); // second arg def == read

        let objStore = transaction.objectStore(storeArg);
        let getReq = objStore.get(sIDArg);
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
    var body = document.getElementsByTagName("body")[0];

    if (typeof FileReader == 'undefined' || typeof body.style.WebkitAnimation == "undefined" || typeof(Promise) !== "function") {
        alert("当前浏览器不支持高级特性，建议使用如下浏览器的最新版本： \n · 猎豹浏览器 \n · 360浏览器 \n · Chrome浏览器");
    } else
        return "Support";

}

// Chenly 2018-10-11 console Log Array Content
function fnIterConsole(aray) {
    if (typeof aray) {
        for (var i = 0, len = aray.length; i < len; ++i) {
            console.log(aray[i]);
        }
    }

}

function fnGetSysInfo(objArg, SysInfoFile) {
    return new Promise(function(resolve, reject) {
        // 旧HMI不带info文件的则跳过
        if (SysInfoFile) {
            var reader = new FileReader();
            reader.readAsText(SysInfoFile);

            reader.onload = function() {
                var aSysInfoSpt = this.result.split("\n"); // Chenly 2018-09-28 将读取到的字符串按换行符转化为数组
                var reNoSpc = /\w/;
                // console.log(aSysInfoSpt);
                for (var nRowx = 0, nRows = aSysInfoSpt.length; nRowx < nRows; ++nRowx) {
                    var rowTmp = aSysInfoSpt[nRowx];
                    if (rowTmp.length > 8) { // system.info文件每行有效内容 至少有8个字符，eg A=B，判断>8，为了防呆（空行）
                        var aTmp = rowTmp.split("="); // 把等号作为key/val的划分
                        var key = aTmp[0];
                        var val = aTmp[1];
                        objArg.aSysInfo[key] = val;
                        // console.log(key, val);
                    }
                }

                resolve("fnGetSysInfo Done #1");
            };
        } else {
            resolve("fnGetSysInfo:could't find info file #2");
        }
    });
}

// Chenly 2018-10-10 提前结束folder遍历的条件，return 0则表示不停止
function fnQuitTrvlFolder(objArg, upFolderArg) {
    // Chenly 2018-10-10 点击了选择文件夹按钮，在弹出的upFolder explorer按了取消
    if (upFolderArg[0] === undefined) {
        return "upFolder Explorer Cancel";
    } else {
        var sFolderPath = upFolderArg[0].webkitRelativePath;

        if (sFolderPath.toLowerCase().search(objArg.sFolderName)) {
            var sAlertStr = "文件夹名不匹配，注：请选择{0}开头的文件夹".format(objArg.sFolderName);
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
    var cost = new Date();
    return Date.parse(cost) + cost.getMilliseconds();
}
