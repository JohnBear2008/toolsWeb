//xlsExportProd.js

var DateFinB = '';
var DateFinE = '';
function enterBridge(param1, param2, finB, finE) {
    console.log("传来的开始日:" + DateFinB);
    console.log("传来的到期日:" + DateFinE);
    DateFinB = finB;
    DateFinE = finE;
    let aryH1 = [];
    let ary1 = [];

    var pyear = param1;
    var pType = param2;
    // let DateRange =getDefaultWeek();
    var weekbeg = DateFinB;
    var weekend = DateFinE;
    //labuse  时间是有作用的 

    if (DateFinB == '' || (DateFinE == '')) {
        //   weekbeg = DateRange[0].format("yyyy-MM-dd");
        //   weekend = DateRange[1].format("yyyy-MM-dd");
        weekbeg = '1900-02-01';
        weekend = '2200-02-29';
        console.log("预设本周:" + weekend);
    }
    if (pyear != "" && pyear != "null" && pyear != undefined && pyear.length > 0) {
    } else {
        pyear = '2019';
    }
    if (pType != "" && pType != "null" && pType != undefined && pType.length > 0) {
    } else {
        pType = 'ED';
    }
    var pclass1 = pType  ;
    console.log("pType:" + pType);
    console.log("pyear:" + pyear);
    console.log("weekbeg:" + weekbeg);
    console.log("weekend:" + weekend);
    var reportType = 'xlsPropHead';
    var task1 = { "reportType": reportType, "PartsClass": pclass1 };
    let ax1H = $.ajax({
        method: 'post',
        data: task1,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH1 = data;
            // console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    
    var limit = '5000';
    var capacity = ' ';
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("开始日", weekbeg);
        capacity += " AND Parts_Date >= " + "'" + weekbeg + "' ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("结束日", weekend);
        capacity += " AND Parts_Date <= " + "'" + weekend + "' ";
    }
    console.log("十烟", capacity);
    var SQL1 = { "SQL": "SQLExpEng",  "pclass": pclass1, "capacity": capacity };
    let ajax1 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL1,
        success: function (data) {
            ary1 = data;
            // console.log(" 抗几病毒  " + JSON.stringify(ary1));
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
 
    $.when(ax1H ,  ajax1  ).done(function () {
            //   console.log(" 抗几肺炎  " + JSON.stringify(ajax1));
            PageBridge(aryH1,  ary1 );
        });
}
function PageBridge(aryH1 , sample1 ) {
    //sheet1   
    var sheet1 = XLSX.utils.json_to_sheet(sample1, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [
        ['代码', '属性代码', '序号',  '標识号',	'属性来源',	'属性',	'物料属性',	'属性值'  ]
    ], {
        origin: 'A1'
    });
    sheet1['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 10 }
        , { wch: 10 }, { wch: 10 }, { wch: 25 } ];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample1.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();
    if (sample1.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet1, "物料属性3");
    }
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `T9物料基础数据` + fname + `.xlsx`);
}

function workbook2blob(workbook) {
    // 生成excel的配置项
    var wopts = {
        // 要生成的文件类型
        bookType: "xlsx",
        bookSST: false,
        type: "binary"
    };
    var wbout = XLSX.write(workbook, wopts);
    // 将字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }
    var blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    });
    return blob;
}
function csv2sheet(csv) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function (row, i) {
        row = row.split(',');
        if (i == 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
        row.forEach(function (col, j) {
            sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
        });
    });
    return sheet;
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    // 字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}

function openDownloadDialog(url, saveName) {
    if (typeof url == 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
    }

    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}


// 传入csv，执行后就会弹出下载框
function exportExcel(csv) {
    var sheet = csv2sheet(csv);
    var blob = sheet2blob(sheet);
    openDownloadDialog(blob, '导出.xlsx');
}

function getDefaultWeek() {
    var now = new Date();
    var lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    var lastMonth = lastMonthDate.getMonth();
    var nowMonth = now.getMonth();
    var nowYear = now.getYear(); nowYear += (nowYear < 2000) ? 1900 : 0;

    let monday = new Date(nowYear, lastMonth, 26);;
    let sunday = new Date(nowYear, nowMonth, 25);

    let weekRange = [monday, sunday];

    return weekRange;
}

