//xlsExport.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var DateFinE = '';

// function enterFinc(makB, makE, finB, finE) {
//     DateMakB = makB;
//     DateMakE = makE;
//     DateFinB = finB;
//     DateFinE = finE;
//     FunPls();
// }
function enterFinc(Advstr) {
    // var SQL2A = { "SQL": "SQLShipment" }; 
    // let LastDateRange = getDefaulLastWeek();
    // var lastbeg = DateMakB;
    // var lastend = DateMakE;
    // if (DateMakB == '' || (DateMakE == '')) {
    //     lastbeg = LastDateRange[0].format("yyyy-MM-dd");
    //     lastend = LastDateRange[1].format("yyyy-MM-dd");
    //     console.log("预设上周:" + lastend);
    // }
    // let DateRange = getDefaultWeek();
    // var weekbeg = DateFinB;
    // var weekend = DateFinE; //建议默认为上月26~本月25，但需可选
    // if (DateFinB == '' || (DateFinE == '')) {
    //     weekbeg = DateRange[0].format("yyyy-MM-dd");
    //     weekend = DateRange[1].format("yyyy-MM-dd");
    //     console.log("预设本周:" + weekend);
    // }
    // console.log("lastbeg:" + lastbeg);
    // console.log("lastend:" + lastend);
    // console.log("weekbeg:" + weekbeg);
    // console.log("weekend:" + weekend);
    // let now = new Date();
    // var duedate = now.Format("yyyy-MM-dd");
    // let yester = getPrevDay(weekbeg);
    // let nexter = getNextDay(weekend);
    // let adjend = '';
    // if (duedate > DateFinE) {  //改良的条件
    //     adjend = nexter;
    // } else {
    //     adjend = weekend;
    // }
    // adjend = weekend;
    let ary3 = [];
    // var taskData = { "reportType": reportChannel, "arrange": arrange, "PartsClass": pclass, "PartsCode": pcode, "DBTable": "auto_parts" };
    var limit = '50';
    var filter = ' 1=1 ';
    var orderBy = '';
    var reportType = 'vsInvoBill';
    var taskData = { "reportType": reportType, "filter": filter, "Advstr": Advstr, "limit": limit, "orderBy": orderBy };
    let ajax3 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMfinc/getRoute",
        success: function (data) {
            ary3 = data;
        },
        error: function (err) {
        }
    });
    $.when( ajax3).done(function () {
            // console.log("金昭 :" + JSON.stringify(ary3));
        FunStat( ary3 );
    });
}
function FunStat( mdata ) {

    let kiss = [];
    let title = ['应收转应收'];
    let divtitle = ['单据编号','单据日期','业务人员','业务部门','备注','公司', '创建人','核准人','原单编号', '原单金额','已核金额','标识号', '发票单号' ];

    kiss.push(title);
    kiss.push(divtitle);
    console.log("分页1笔数:" + mdata.length); 
    for (var i = 0; i < mdata.length; i++) {
        let speebook = [];
        speebook.push(mdata[i].BillNo);
        speebook.push(mdata[i].BillDate);
        speebook.push(mdata[i].Personname);
        speebook.push(mdata[i].DeptName);
        speebook.push(mdata[i].Remark);
        speebook.push(mdata[i].OrgName);
        speebook.push(mdata[i].Creatorname); 
        speebook.push(mdata[i].Permitname);
        speebook.push(mdata[i].FromBillNo);
        speebook.push(mdata[i].OAmount); 
        speebook.push(mdata[i].WriteOffOAmount);
        speebook.push(mdata[i].RowCode);
        speebook.push(mdata[i].InvoiceBillNo); 
        kiss.push(speebook);
    }
    var sheet1 = XLSX.utils.aoa_to_sheet(kiss);
 
    sheet1['!cols'] = [{ wch: 15 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 20 },
         { wch: 10 }, { wch: 10 }, { wch: 15 }, { wch: 10 }, { wch: 10 }, { wch: 5 }, { wch: 20 }];
    sheet1['!rows'] = [{ hpx: 40 }, { hpx: 40 }  ];
    for (var i = 0; i < mdata.length + 1; i++) {
        sheet1['!rows'].push({ hpx: 35 });
    }
    sheet1["!merges"] = [
        {  //合并第0行 第1列到第8列 个人出货情况 
            s: {
                c: 0, r: 0
            },
            e: {
                c: 17, r: 0
            }
        },
    ]
    // sheet1["!merges"].push({  //合并第10行到第16行  第1列 
    //     s: {
    //         c: 0, r: 10
    //     },
    //     e: {
    //         c: 0, r: 16
    //     }
    // });


    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "清单+发票号");
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `应收转应收` + DateFinE + `.xlsx`);
}


function workbook2blob(workbook) {
    // 生成excel的配置项
    var wopts = {
        // 要生成的文件类型
        bookType: "xlsx",
        // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
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
function getDefaulLastWeek() {
    var now = new Date();
    var lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    var lastMonth = lastMonthDate.getMonth();

    var prevMonthDate = new Date();
    prevMonthDate.setDate(1);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 2);
    var prevMonth = prevMonthDate.getMonth();

    var nowYear = now.getYear(); nowYear += (nowYear < 2000) ? 1900 : 0;

    let monday = new Date(nowYear, prevMonth, 26);;
    let sunday = new Date(nowYear, lastMonth, 25);
    // console.log("预设遗起",monday,"预设遗止",sunday);
    let weekRange = [monday, sunday];

    return weekRange;
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
function getWeekRange() {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();

    let mondayLastLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (14 * oneDayLong); //上上週的星一 -14
    let sundayLastLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (14 * oneDayLong); //上上週的星日 -14
    let mondayLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (7 * oneDayLong); //上週的星一 -7
    let sundayLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (7 * oneDayLong); //上週的星日 -7 
    let mondayTime = now.getTime() - (now.getDay() - 1) * oneDayLong;//本週的星一
    let sundayTime = now.getTime() + (7 - now.getDay()) * oneDayLong;//本週的星日

    let monday = new Date(mondayLast);
    let sunday = new Date(sundayLast);
    let weekRange = [monday, sunday];

    return weekRange;
}
function getLastWeekRange() {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayLastLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (14 * oneDayLong); //上上週的星一 -14
    let sundayLastLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (14 * oneDayLong); //上上週的星日 -14

    let monday = new Date(mondayLastLast);
    let sunday = new Date(sundayLastLast);
    let weekRange = [monday, sunday];

    return weekRange;
}
function getPrevDay(ThisDay) {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date(ThisDay);
    let mondayTime = now.getTime() - (1) * oneDayLong;
    let monday = new Date(mondayTime);
    var dateFormat = monday.Format("yyyy-MM-dd");
    return dateFormat;
}
function getNextDay(ThisDay) {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date(ThisDay);
    let mondayTime = now.getTime() + (1) * oneDayLong;
    let monday = new Date(mondayTime);
    var dateFormat = monday.Format("yyyy-MM-dd");
    return dateFormat;
}
