//xlsLevel.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var parCat = '';

function enterLevel(Category, Pattern, OutSour, showTime, prodID, prodNM) {
    // var Pattern = '1';
    if(OutSour !=undefined && OutSour !=null){

    }else{
        OutSour = '0';
    }
    let ary1 = [];
    var reportType = 'excelBOM';
    var taskData = { "reportType": reportType, "showTime": showTime, "Category": Category, "Pattern": Pattern, "OutSour": OutSour , "ProductID": prodID, "ProductName": prodNM};
    let ajax1 = $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMBom/getRoute",
        success: function (data) {
            ary1 = data;
            // console.log("dddd",ary1);
        },
        error: function (err) {
            alert("异常" + JSON.stringify(err));
        }
    });
    Pattern = '3';
    // let ary3 = [];
    // var reportType = 'wpsBOM';
    // var taskData = { "reportType": reportType, "Category": Category, "Pattern": Pattern, "OutSour": OutSour , "ProductID": prodID, "ProductName": prodNM};
    // let ajax3 = $.ajax({
    //     method: 'post',
    //     data: taskData,
    //     url: "/app/TMBom/getRoute",
    //     success: function (data) {
    //         ary3 = data;
    //     },
    //     error: function (err) {
    //         alert("555" + JSON.stringify(err));
    //     }
    // });
    $.when(ajax1, ajax1).done(function () {
        ShipStat((ary1), (ary1));
    });
}
function ShipStat(ydata, zdata) {
    var fnameF1 ='';
    var fnameF2 ='';
		var hidata = localStorage.getItem("seedtree");
		hidata = JSON.parse(hidata);
		if (hidata != undefined && hidata != null) {
			FieldA = ((hidata.A == null || hidata.A == undefined) ? (FieldA) : hidata.A);
			FieldB = ((hidata.B == null || hidata.B == undefined) ? (FieldB) : hidata.B);
			FieldC = ((hidata.C == null || hidata.C == undefined) ? (FieldC) : hidata.C);
			FieldD = ((hidata.D == null || hidata.D == undefined) ? (FieldD) : hidata.D);
			FieldE = ((hidata.E == null || hidata.E == undefined) ? (FieldE) : hidata.E);
			FieldF = ((hidata.F == null || hidata.F == undefined) ? (FieldF) : hidata.F);
			FieldG = ((hidata.G == null || hidata.G == undefined) ? (FieldG) : hidata.G);
			FieldH = ((hidata.H == null || hidata.H == undefined) ? (FieldH) : hidata.H);
            FieldI = ((hidata.I == null || hidata.I == undefined) ? (FieldI) : hidata.I);
			FieldJ = ((hidata.J == null || hidata.J == undefined) ? (FieldJ) : hidata.J);
			FieldK = ((hidata.K == null || hidata.K == undefined) ? (FieldK) : hidata.K);
            FieldL = ((hidata.L == null || hidata.L == undefined) ? (FieldL) : hidata.L);
			// console.log("有料",FieldH);
			// console.log("回报",FieldG);
			// console.log("海海",FieldK);
		}
    let toyota = [ ];
    // let Ttitle = [ '树ID', '父阶ID',  '品名', '新编码', '用量', '损耗', '类别',  '规格' , '旧编码',  '旧品名' , '库存', 'A仓' , '个数' , '单价' , '成本' ,];
    let Ttitle = [ '树ID', '父阶ID',  '品名', '新编码'];
    if (!FieldA) {
        Ttitle.push('用量');  
    }
    if (!FieldB) {
        Ttitle.push('损耗');  
    }
    if (!FieldC) {
        Ttitle.push('类别');  
    }
    if (!FieldD) {
        Ttitle.push('规格');  
    }
    if (!FieldE) {
        Ttitle.push('旧编码');  
    }
    if (!FieldF) {
        Ttitle.push('旧品名');  
    }
    if (!FieldG) {
        Ttitle.push('库存');  
    }
    if (!FieldH) {
        Ttitle.push('A仓');  
    }
    if (!FieldI) {
        Ttitle.push('个数');  
    }
    if (!FieldJ) {
        Ttitle.push('单价');  
    }
    if (!FieldK) {
        Ttitle.push('成本');  
    }
    if (!FieldL) {
        Ttitle.push('最终点'); 
    }
    toyota.push(Ttitle);
    let PropList = [];
    var enname = '';
    var id = '';
    var field = '';
    var encode = '';
    var stock = '';
    var waste = '';
    var belong = '';
    var descrip = '';
    var oldmat = '';
    var oldspc = '';
    var totqty = '';
    var cabinA = '';
    var sibling = '';    var isend = '';
    var priceTOT = '';  var finprice = '';
    var costTOT = '';  var fincost = '';
  
    var kingValue = ydata[0];    
    if (kingValue != "" && kingValue != undefined) {
        PropList = kingValue.split('##');
        fnameF1 = PropList[3];
        fnameF2 = PropList[8];
          console.log("人生的一半",fnameF1+fnameF2);
    }
    var EmpValue = ydata[i];    
    for (var i = 0; i < ydata.length; i++) {
        let speebook = [];
        var EmpValue = ydata[i];
        if (EmpValue != "" && EmpValue != undefined) {
            PropList = EmpValue.split('##');
          
            id = PropList[0];
            field = PropList[1];
            enname = PropList[2];
            encode = PropList[3];
            stock = PropList[4];
            waste = PropList[5];
            belong = PropList[6];
            descrip = PropList[7];
            oldmat = PropList[8];
            oldspc = PropList[9];
            totqty = PropList[10];
            cabinA = PropList[11];
            sibling = PropList[12];
            priceTOT = PropList[13];
            fincost  = PropList[14];
            isend = PropList[15];
            if(id == '22'  ){
                // console.log("腐朽", EmpValue ,"寒冰",isend);
            }
            if(id == '33'  ){
                // console.log("永不", EmpValue ,"烈火",isend);
            }
            if(priceTOT != undefined && priceTOT != ''){
                priceTOT = parseFloat(priceTOT);
                finprice = priceTOT.toFixed(2);
            }
            // var costTOT = sibling*priceTOT;
            // if(costTOT != undefined && costTOT != ''){
            //     costTOT = parseFloat(costTOT);
            //     costTOT = costTOT.toFixed(2);
            //     fincost =''+costTOT ;
            // }else{
            //     fincost= '0';
            // }
        }
        if(i<2){
            console.log("清净", fincost);
        }
        speebook.push(id);
        speebook.push(field);
        speebook.push(enname);
        speebook.push(encode);
        if (!FieldA) {
            speebook.push(stock );
        }
        if (!FieldB) {
            speebook.push(waste );
        }
        if (!FieldC) {
            speebook.push(belong);
        }
        if (!FieldD) {
            speebook.push(descrip);
        }
        if (!FieldE) {
            speebook.push(oldmat);
        }
        if (!FieldF) {
            speebook.push(oldspc);
        }
        if (!FieldG) {
            speebook.push(totqty);
        }
        if (!FieldH) {
            speebook.push(cabinA); 
        }
        if (!FieldI) {
            speebook.push(sibling);    
        }
        if (!FieldJ) {
            speebook.push(finprice);    
        }
        if (!FieldK) {
            speebook.push(fincost);     
        }
        if (!FieldL) {
            speebook.push(isend);   
        }
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'
    });
    // sheet1['!cols'] = [{ wch: 5 }, { wch: 10 },  { wch: 10 },  { wch: 5 }, { wch: 5 }, { wch: 30 }, { wch: 20 }, 
    // { wch: 30 }, { wch: 45 } , { wch: 5 }, { wch: 5 },  { wch: 10 }, { wch: 10 } , { wch: 10 }];
    
    sheet1['!cols'] = [{ wch: 5 }];
    sheet1['!cols'].push({ wch: 5 });
    sheet1['!cols'].push({ wch: 20 });
    sheet1['!cols'].push({ wch: 20 });
    if (!FieldA) {
        console.log("用量", FieldA);
        sheet1['!cols'].push({ wch: 5 });
    }
    if (!FieldB) {
        console.log("损耗", FieldB);
        sheet1['!cols'].push({ wch: 5 });
    }
    if (!FieldC) {
        console.log("类 别", FieldC);
        sheet1['!cols'].push({ wch: 15 });
    }
    if (!FieldD) {
        console.log("规  格", FieldD);
        sheet1['!cols'].push({ wch: 80 });
    }
    if (!FieldE) {
        console.log(" 旧代码 ", FieldE);
        sheet1['!cols'].push({ wch: 20 });
    }
    if (!FieldF) {
        console.log("旧品名", FieldF);
        sheet1['!cols'].push({ wch: 30 });
    }
    if (!FieldG) {
        console.log("库存", FieldG);
        sheet1['!cols'].push({ wch: 10 });
    }
    if (!FieldH) {
        console.log("A仓", FieldH);
        sheet1['!cols'].push({ wch: 10 });
    }
    if (!FieldI) {
        console.log("个数", FieldI);
        sheet1['!cols'].push({ wch: 10 });
    }
    if (!FieldJ) {
        console.log("单价", FieldJ);
        sheet1['!cols'].push({ wch: 10 });
    }
    if (!FieldK) {
        console.log("成本", FieldK);
        sheet1['!cols'].push({ wch: 10 });
    }
    if (!FieldL) {
        console.log("最终", FieldK);
        sheet1['!cols'].push({ wch: 10 });
    }
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
        var EmpValue = zdata[i];
        if (EmpValue != "" && EmpValue != undefined) {
            PropList = EmpValue.split('##');
            id = PropList[0];
            field = PropList[1];
            enname = PropList[2];
            encode = PropList[3];
            oldmat = PropList[4];
            oldspc = PropList[5];
            stock = PropList[6];
            waste = PropList[7];
            belong = PropList[8];
            totqty = PropList[9];
            cabinA = PropList[10];
            child = PropList[11];
        }
        // console.log("清净", encode);
        speebook.push(id);
        speebook.push(field);
        speebook.push(enname);
        speebook.push(encode);
        speebook.push(oldmat);
        speebook.push(oldspc);
        speebook.push(stock);
        speebook.push(waste);
        speebook.push(belong);
        speebook.push(totqty);
        speebook.push(cabinA);    
        speebook.push(child);
        camry.push(speebook);
    }
    var sheet3 = XLSX.utils.json_to_sheet(camry, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet3, [], {
        origin: 'A1'
    });
    sheet3['!cols'] = [{ wch: 10 },  { wch: 10 }, { wch: 40 }, { wch: 40 }, { wch: 40 }, { wch: 5 }, { wch: 5 } , { wch: 10 }, { wch: 10 },
        { wch: 10 }, { wch: 10 }];
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
    // 代码+'|'+旧代码
    XLSX.utils.book_append_sheet(wb, sheet1, "新编码BOm结构");
    // XLSX.utils.book_append_sheet(wb, sheet3, "新编码BOm结构");
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var datetime = new Date(now).Format("yyyyMMdd");
    var swift = Math.random(100) * 100;
    swift = swift.toFixed(0);
    if (swift.length < 2) {
        swift = '0' + swift;
    }
    openDownloadDialog(workbookBlob, fnameF1 + `-`+ fnameF2  + `-` +swift+`.xlsx`);
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
    // speebook.push(ydata[i].Value1);
        // speebook.push(ydata[i].Value2);
        // speebook.push(ydata[i].Value3);
        // speebook.push(ydata[i].Value4);
        // speebook.push(ydata[i].Value5);
        // speebook.push(ydata[i].Value6);
        // speebook.push(ydata[i].Value7);
        // speebook.push(ydata[i].Value8);
        // speebook.push(ydata[i].Value9);
        // speebook.push(ydata[i].Value10);
        // speebook.push(ydata[i].ShowCode);
        // speebook.push(ydata[i].Dosage);
        // speebook.push(ydata[i].Damage);
        // speebook.push(ydata[i].PartsChi);
        // speebook.push(ydata[i].Description);
        // speebook.push(ydata[i].Rank);