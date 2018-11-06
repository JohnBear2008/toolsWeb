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
function fnRemitExcel(tableID, excelName) {
    $(tableID).tableExport({
        fileName: excelName,
        worksheetName: excelName,
        type: 'excel',
        excelstyles: ['border-bottom', 'border-top', 'border-left', 'border-right']
    });
}

/*===========================================================================+
|   function      js                                                         |
+===========================================================================*/
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
