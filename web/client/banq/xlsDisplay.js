//xlsExport.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var pclass = '';
function enterMoon(paramC, paramP, paramU ,param1, param2) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = '';
    var myear='2019';
    var mrule='';
    var mclass= paramP;

    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  A.Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    A.Parts_Rule =" + "'" + mrule + "'";
    }
    if (mclass != "" && mclass != "null" && mclass != undefined && mclass.length > 0) {
        console.log("类别", mclass);
        filter += " AND    A.Parts_Class =" + "'" + mclass + "'";
    }
    var reportType = 'xlsDisplay';
    var taskData = { "reportType": reportType, "filter": filter,  "limit": limit, "orderBy": orderBy };
    let ajax1 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            ary1 = data;
        },
        error: function (err) {
            alert("5555" + JSON.stringify(err));
        }
    });
    
    $.when(ajax1).done(function () {
        ShipStat((ary1));
    });
} 
function enterMirror(paramC, paramP, paramU ,param1, param2) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = '';
    var myear='2019';
    var mrule='';
    var mclass= paramP;

    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  A.Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    A.Parts_Rule =" + "'" + mrule + "'";
    }
    if (mclass != "" && mclass != "null" && mclass != undefined && mclass.length > 0) {
        console.log("类别", mclass);
        filter += " AND    A.Parts_Class =" + "'" + mclass + "'";
    }
    var reportType = 'xlsDisplay';
    var taskData = { "reportType": reportType, "filter": filter,  "limit": limit, "orderBy": orderBy };
    let ajax1 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            ary1 = data;
        },
        error: function (err) {
            alert("5555" + JSON.stringify(err));
        }
    });
    
    $.when(ajax1).done(function () {
        ShipStat((ary1));
    });
}
function ShipStat(ydata) {
    let toyota = [];
    // let Ttitle = ['类别', '类别(中)', '新编码',  '新品名', '旧编码', '旧品名', '属性', '客户', 'SMDid', 'SMD'];
    let Ttitle = [ '旧编码' , '新品名'  ,   '属性' ];
    toyota.push(Ttitle);
    // "Parts_Class": data[i].Parts_Class,
    // "Parts_Chi": data[i].Parts_Chi,
    // "Parts_Code": data[i].Parts_Code,
    // "Parts_Name": data[i].Parts_Name,
    // "Parts_Old_Code": data[i].Parts_Old_Code,
    // "Parts_Old_Name": data[i].Parts_Old_Name,
    // "Property": prop_cut,
    // "Combo_Title": data[i].Combo_Title,
    // "SMT_Title": data[i].SMT_Title,
    // "Supply_Title": data[i].Supply_Title,
    for (var i = 0; i < ydata.length; i++) {
        pclass = ydata[i].Parts_Chi;
        let speebook = [];
        // speebook.push(ydata[i].Parts_Class);
        // speebook.push(ydata[i].Parts_Chi);
        // speebook.push(ydata[i].Parts_Code);
        speebook.push(ydata[i].Parts_Old_Code);
        speebook.push(ydata[i].Parts_Name);
        // speebook.push(ydata[i].Parts_Old_Name);
        speebook.push(ydata[i].Property);
        // speebook.push(ydata[i].Combo_Title);
        // speebook.push(ydata[i].SMT_Title);
        // speebook.push(ydata[i].Supply_Title);
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    // sheet1['!cols'] = [{ wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 20 }
    //     , { wch: 80 }, { wch: 20 }, { wch: 20 }, { wch: 20 } ];
    sheet1['!cols'] = [{ wch: 40 }, { wch: 40 }, { wch: 100 } ];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
        if (ydata[i] != undefined && ydata[i] != null) {
            if (ydata[i].Rank == 'A') {
                sheet1['!merges'] = [
                    {
                        s: {
                            c: 0, r: (i + 1)
                        },
                        e: {
                            c: 2, r: (i + 1)
                        }
                    }
                ]
            } else if (ydata[i].Rank == 'B') {
                sheet1['!merges'].push({
                    s: {
                        c: 1, r: (i + 1)
                    },
                    e: {
                        c: 3, r: (i + 1)
                    }
                })
            } else if (ydata[i].Rank == 'C') {
                sheet1['!merges'].push({
                    s: {
                        c: 2, r: (i + 1)
                    },
                    e: {
                        c: 4, r: (i + 1)
                    }
                })
            } else if (ydata[i].Rank == 'D') {
                sheet1['!merges'].push({
                    s: {
                        c: 3, r: (i + 1)
                    },
                    e: {
                        c: 5, r: (i + 1)
                    }
                })
            } else if (ydata[i].Rank == 'E') {
                sheet1['!merges'].push({
                    s: {
                        c: 4, r: (i + 1)
                    },
                    e: {
                        c: 7, r: (i + 1)
                    }
                })
            } else if (ydata[i].Rank == 'F') {
                sheet1['!merges'].push({
                    s: {
                        c: 5, r: (i + 1)
                    },
                    e: {
                        c: 8, r: (i + 1)
                    }
                })
            }
        }


    }

     
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "物料"+pclass); 
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `新编码导出报告 ` + Category + `-` + fname + `.xlsx`);
}
function workbook2blob(workbook) {
    var wopts = {
        bookType: "xlsx",
        bookSST: false,
        type: "binary"
    };
    var wbout = XLSX.write(workbook, wopts);
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
    var sheet = {};  
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

function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    var wopts = {
        bookType: 'xlsx',  
        bookSST: false, 
        type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
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
        url = URL.createObjectURL(url);  
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; 
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}

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

    let mondayLastLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (14 * oneDayLong); 
    let sundayLastLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (14 * oneDayLong); 
    let mondayLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (7 * oneDayLong);
    let sundayLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (7 * oneDayLong); 
    let mondayTime = now.getTime() - (now.getDay() - 1) * oneDayLong; 
    let sundayTime = now.getTime() + (7 - now.getDay()) * oneDayLong; 

    let monday = new Date(mondayLast);
    let sunday = new Date(sundayLast);
    let weekRange = [monday, sunday];

    return weekRange;
}
function getLastWeekRange() {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayLastLast = now.getTime() - (now.getDay() - 1) * oneDayLong - (14 * oneDayLong); 
    let sundayLastLast = now.getTime() + (7 - now.getDay()) * oneDayLong - (14 * oneDayLong);  

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
