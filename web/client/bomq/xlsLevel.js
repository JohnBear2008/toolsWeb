//xlsExport.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var parCat = '';

function enterLevel(paramC, paramP, paramU ,param1, param2) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    var reportType = 'excelBOM';
    var taskData = { "reportType": reportType, "Category": Category, "Pattern": Pattern , "OutSour": OutSour };
    let ajax1 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMErp/getRoute",
        success: function (data) {
            ary1 = data;
        },
        error: function (err) {
            alert("5555" + JSON.stringify(err));
        }
    });
    Pattern = '3';
    let ary3 = [];
    var reportType = 'excelBOM';
    var taskData = { "reportType": reportType, "Category": Category, "Pattern": Pattern , "OutSour": OutSour };
    let ajax3 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMErp/getRoute",
        success: function (data) {
            ary3 = data;
        },
        error: function (err) {
            alert("555" + JSON.stringify(err));
        }
    });
    $.when(ajax1, ajax3).done(function () {
        ShipStat((ary1), (ary3));
    });
}
function ShipStat(ydata, zdata) {
    let toyota = [];
    let Ttitle = ['1阶', '2阶', '3阶', '4阶', '5阶', '6阶', '7阶', '8阶', '9阶', '10阶' , '编码', '用量', '损耗', '类别', '描述', '阶层'];
    toyota.push(Ttitle);
    for (var i = 0; i < ydata.length; i++) {
        let speebook = [];
        speebook.push(ydata[i].Value1);
        speebook.push(ydata[i].Value2);
        speebook.push(ydata[i].Value3);
        speebook.push(ydata[i].Value4);
        speebook.push(ydata[i].Value5);
        speebook.push(ydata[i].Value6);
        speebook.push(ydata[i].Value7);
        speebook.push(ydata[i].Value8);
        speebook.push(ydata[i].Value9);
        speebook.push(ydata[i].Value10);
        speebook.push(ydata[i].ShowCode);
        speebook.push(ydata[i].Dosage);
        speebook.push(ydata[i].Damage);
        speebook.push(ydata[i].PartsChi);
        speebook.push(ydata[i].Description);
        speebook.push(ydata[i].Rank);
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    sheet1['!cols'] = [{ wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }
        , { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 20 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 30 } ];
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
    let camry = [];
    camry.push(Ttitle);
    for (var i = 0; i < zdata.length; i++) {
        let speebook = [];
        speebook.push(zdata[i].Value1);
        speebook.push(zdata[i].Value2);
        speebook.push(zdata[i].Value3);
        speebook.push(zdata[i].Value4);
        speebook.push(zdata[i].Value5);
        speebook.push(zdata[i].Value6);
        speebook.push(zdata[i].Value7);
        speebook.push(zdata[i].Value8);
        speebook.push(zdata[i].Value9);
        speebook.push(zdata[i].Value10);
        speebook.push(zdata[i].ShowCode);
        speebook.push(zdata[i].Dosage);
        speebook.push(zdata[i].Damage);
        speebook.push(zdata[i].PartsChi);
        speebook.push(zdata[i].Description);
        speebook.push(zdata[i].Rank);
        camry.push(speebook);
    }
    var sheet3 = XLSX.utils.json_to_sheet(camry, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet3, [], {
        origin: 'A1'  
    });
    sheet3['!cols'] = [{ wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }
        , { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 20 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 } , { wch: 30 }];
    var range3 = XLSX.utils.decode_range(sheet3['!ref']);
    sheet3['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < zdata.length + 2; i++) {
        sheet3['!rows'].push({ hpx: 25 });
        if (zdata[i] != undefined && zdata[i] != null) {
            if (zdata[i].Rank == 'A') {
                sheet3['!merges'] = [
                    {
                        s: {
                            c: 0, r: (i + 1)
                        },
                        e: {
                            c: 2, r: (i + 1)
                        }
                    }
                ]
            } else if (zdata[i].Rank == 'B') {
                sheet3['!merges'].push({
                    s: {
                        c: 1, r: (i + 1)
                    },
                    e: {
                        c: 3, r: (i + 1)
                    }
                })
            } else if (zdata[i].Rank == 'C') {
                sheet3['!merges'].push({
                    s: {
                        c: 2, r: (i + 1)
                    },
                    e: {
                        c: 4, r: (i + 1)
                    }
                })
            } else if (zdata[i].Rank == 'D') {
                sheet3['!merges'].push({
                    s: {
                        c: 3, r: (i + 1)
                    },
                    e: {
                        c: 5, r: (i + 1)
                    }
                })
            } else if (zdata[i].Rank == 'E') {
                sheet3['!merges'].push({
                    s: {
                        c: 4, r: (i + 1)
                    },
                    e: {
                        c: 7, r: (i + 1)
                    }
                })
            } else if (zdata[i].Rank == 'F') {
                sheet3['!merges'].push({
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
    XLSX.utils.book_append_sheet(wb, sheet1, "旧编码BOm结构");
    XLSX.utils.book_append_sheet(wb, sheet3, "新编码BOm结构");
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `BOM ` + Category + `-` + fname + `.xlsx`);
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
