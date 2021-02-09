//xlsExportProd.js

var DateFinB = '';
var DateFinE = '';
function enterSensor(param1, param2, finB, finE) {
    console.log("传来的开始日:" + DateFinB);
    console.log("传来的到期日:" + DateFinE);
    DateFinB = finB;
    DateFinE = finE;
    let aryH1 = [];
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let ary4 = [];
    let ary5 = [];
    let ary6 = [];
    let ary7 = [];
    let ary8 = [];
    let ary9 = [];
    let aryA = [];
    let aryB = [];
    let aryC = [];
    let aryD = [];
    let aryE = [];
    let aryF = [];
    let aryG = [];
    let aryH = [];
    let aryJ = [];
    let aryK = [];
    let aryM = [];
    let aryN = [];
    let aryP = [];
    let aryQ = [];

    var pyear = param1;
    var pType = param2;
    // let DateRange =getDefaultWeek();
    var weekbeg = DateFinB;
    var weekend = DateFinE;
    //labuse  时间是有作用的 

    if ( weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0 ) {
    }else{
        // weekbeg = '2020-01-01';
        console.log("预设本周:" + weekbeg);
    }
    if ( weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0 ) {
    }else{
        // weekend = '2020-12-31';
        console.log("预设本周结束:" + weekend);
    }
  

    if (pyear != "" && pyear != "null" && pyear != undefined && pyear.length > 0) {
    } else {
        pyear = '2019';
    }
    if (pType != "" && pType != "null" && pType != undefined && pType.length > 0) {
    } else {
        pType = 'E';
    }
    var pclass1 = pType + '1';
    var pclass2 = pType + '2';
    var pclass3 = pType + '3';
    var pclass4 = pType + '4';
    var pclass5 = pType + '5';
    var pclass6 = pType + '6';
    var pclass7 = pType + '7';
    var pclass8 = pType + '8';
    var pclass9 = pType + '9';
    var pclassA = pType + 'A';
    var pclassB = pType + 'B';
    var pclassC = pType + 'C';
    var pclassD = pType + 'D';
    var pclassE = pType + 'E';
    var pclassF = pType + 'F';
    var pclassG = pType + 'G';
    var pclassH = pType + 'H';
    var pclassJ = pType + 'J';
    var pclassK = pType + 'K';
    var pclassM = pType + 'M';
    var pclassN = pType + 'N';
    var pclassP = pType + 'P';
    var pclassQ = pType + 'Q';

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
    var task2 = { "reportType": reportType, "PartsClass": pclass2 };
    let ax2H = $.ajax({
        method: 'post',
        data: task2,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH2 = data;
            // console.log("生2肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task3 = { "reportType": reportType, "PartsClass": pclass3 };
    let ax3H = $.ajax({
        method: 'post',
        data: task3,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH3 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task4 = { "reportType": reportType, "PartsClass": pclass4 };
    let ax4H = $.ajax({
        method: 'post',
        data: task4,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH4 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task5 = { "reportType": reportType, "PartsClass": pclass5 };
    let ax5H = $.ajax({
        method: 'post',
        data: task5,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH5 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task6 = { "reportType": reportType, "PartsClass": pclass6 };
    let ax6H = $.ajax({
        method: 'post',
        data: task6,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH6 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task7 = { "reportType": reportType, "PartsClass": pclass7 };
    let ax7H = $.ajax({
        method: 'post',
        data: task7,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH7 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task8 = { "reportType": reportType, "PartsClass": pclass8 };
    let ax8H = $.ajax({
        method: 'post',
        data: task8,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH8 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var task9 = { "reportType": reportType, "PartsClass": pclass9 };
    let ax9H = $.ajax({
        method: 'post',
        data: task9,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryH9 = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskA = { "reportType": reportType, "PartsClass": pclassA };
    let axAH = $.ajax({
        method: 'post',
        data: taskA,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHA = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskB = { "reportType": reportType, "PartsClass": pclassB };
    let axBH = $.ajax({
        method: 'post',
        data: taskB,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHB = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskC = { "reportType": reportType, "PartsClass": pclassC };
    let axCH = $.ajax({
        method: 'post',
        data: taskC,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHC = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskD = { "reportType": reportType, "PartsClass": pclassD };
    let axDH = $.ajax({
        method: 'post',
        data: taskD,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHD = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskE = { "reportType": reportType, "PartsClass": pclassE };
    let axEH = $.ajax({
        method: 'post',
        data: taskE,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHE = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskF = { "reportType": reportType, "PartsClass": pclassF };
    let axFH = $.ajax({
        method: 'post',
        data: taskF,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHF = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskG = { "reportType": reportType, "PartsClass": pclassG };
    let axGH = $.ajax({
        method: 'post',
        data: taskG,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHG = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskH = { "reportType": reportType, "PartsClass": pclassH };
    let axHH = $.ajax({
        method: 'post',
        data: taskH,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHH = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskJ = { "reportType": reportType, "PartsClass": pclassJ };
    let axJH = $.ajax({
        method: 'post',
        data: taskJ,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHJ = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskK = { "reportType": reportType, "PartsClass": pclassK };
    let axKH = $.ajax({
        method: 'post',
        data: taskK,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHK = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskM = { "reportType": reportType, "PartsClass": pclassM };
    let axMH = $.ajax({
        method: 'post',
        data: taskM,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHM = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskN = { "reportType": reportType, "PartsClass": pclassN };
    let axNH = $.ajax({
        method: 'post',
        data: taskN,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHN = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskP = { "reportType": reportType, "PartsClass": pclassP };
    let axPH = $.ajax({
        method: 'post',
        data: taskP,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHP = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var taskQ = { "reportType": reportType, "PartsClass": pclassQ };
    let axQH = $.ajax({
        method: 'post',
        data: taskQ,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            aryHQ = data;
            //console.log("生肖 ",(data.Value1));
        },
        error: function () {
        }
    });
    var limit = '5000';
    var capacity = ' ';
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("开始日", weekbeg);
        capacity += " AND Parts_Apply_Date >= " + "'" + weekbeg + "' ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("结束日", weekend);
        capacity += " AND Parts_Apply_Date <= " + "'" + weekend + "' ";
    }
    console.log("十烟", capacity);
    var SQL1 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass1, "capacity": capacity };
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
    var SQL2 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass2, "capacity": capacity };
    let ajax2 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL2,
        success: function (data) {
            ary2 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL3 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass3, "capacity": capacity };
    let ajax3 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL3,
        success: function (data) {
            ary3 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL4 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass4, "capacity": capacity };
    let ajax4 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL4,
        success: function (data) {
            ary4 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL5 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass5, "capacity": capacity };
    let ajax5 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL5,
        success: function (data) {
            ary5 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL6 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass6, "capacity": capacity };
    let ajax6 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL6,
        success: function (data) {
            ary6 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL7 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass7, "capacity": capacity };
    let ajax7 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL7,
        success: function (data) {
            ary7 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL8 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass8, "capacity": capacity };
    let ajax8 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL8,
        success: function (data) {
            ary8 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQL9 = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclass9, "capacity": capacity };
    let ajax9 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL9,
        success: function (data) {
            ary9 = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLA = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassA, "capacity": capacity };
    let ajaxA = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLA,
        success: function (data) {
            aryA = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLB = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassB, "capacity": capacity };
    let ajaxB = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLB,
        success: function (data) {
            aryB = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLC = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassC, "capacity": capacity };
    let ajaxC = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLC,
        success: function (data) {
            aryC = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLD = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassD, "capacity": capacity };
    let ajaxD = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLD,
        success: function (data) {
            aryD = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLE = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassE, "capacity": capacity };
    let ajaxE = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLE,
        success: function (data) {
            aryE = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLF = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassF, "capacity": capacity };
    let ajaxF = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLF,
        success: function (data) {
            aryF = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLG = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassG, "capacity": capacity };
    let ajaxG = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLG,
        success: function (data) {
            aryG = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLH = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassH, "capacity": capacity };
    let ajaxH = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLH,
        success: function (data) {
            aryH = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLJ = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassJ, "capacity": capacity };
    let ajaxJ = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLJ,
        success: function (data) {
            aryJ = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLK = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassK, "capacity": capacity };
    let ajaxK = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLK,
        success: function (data) {
            aryK = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLM = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassM, "capacity": capacity };
    let ajaxM = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLM,
        success: function (data) {
            aryM = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLN = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassN, "capacity": capacity };
    let ajaxN = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLN,
        success: function (data) {
            aryN = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLP = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassP, "capacity": capacity };
    let ajaxP = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLP,
        success: function (data) {
            aryP = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    var SQLQ = { "SQL": "SQLExpFilter", "pyear": pyear, "pclass": pclassQ, "capacity": capacity };
    let ajaxQ = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQLQ,
        success: function (data) {
            aryQ = data;
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });

    $.when(ax1H, ax2H, ax3H, ax4H, ax5H, ax6H, ax7H, ax8H, ax9H, axAH, axBH, axCH, axDH, axEH, axFH, axGH, axHH, axJH, axKH, axMH, axNH, axPH, axQH,
        ajax1, ajax2, ajax3, ajax4, ajax5, ajax6, ajax7, ajax8, ajax9, ajaxA, ajaxB, ajaxC, ajaxD, ajaxE, ajaxF, ajaxG, ajaxH, ajaxJ, ajaxK, ajaxM, ajaxN, ajaxP, ajaxQ).done(function () {
            //   console.log(" 抗几肺炎  " + JSON.stringify(ajax1));
            var temp = JSON.stringify(ajax1);
            if (temp != "" && temp != "null" && temp != undefined && temp.length > 0) {
                console.log(" 抗几冠毒  " +  temp.length );
                let Resptext  = ajax1.responseText;
                // console.log(" 抗几天国 "[]" " + JSON.stringify(Resptext ));
                if (Resptext != "" && Resptext != "null" && Resptext != undefined && Resptext.length > 0) {
                    if (Resptext == "[]" ){
                        alert('查无资料.....');
                    }
                }else{
                    alert('查无资料');
                }
            }else{
                
            }
            PageStat(aryH1, aryH2, aryH3, aryH4, aryH5, aryH6, aryH7, aryH8, aryH9, aryHA, aryHB, aryHC, aryHD, aryHE, aryHF, aryHG, aryHH, aryHJ, aryHK, aryHM, aryHN, aryHP, aryHQ, (ary1), (ary2), (ary3), (ary4), (ary5), (ary6), (ary7), (ary8), (ary9), (aryA), aryB, aryC, aryD, aryE, aryF, aryG, aryH, aryJ, aryK, aryM, aryN, aryP, aryQ);
        });
}
function PageStat(aryH1, aryH2, aryH3, aryH4, aryH5, aryH6, aryH7, aryH8, aryH9, aryHA, aryHB, aryHC, aryHD, aryHE, aryHF, aryHG, aryHH, aryHJ, aryHK, aryHM, aryHN, aryHP, aryHQ, sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9, sampleA, sampleB, sampleC, sampleD, sampleE, sampleF, sampleG, sampleH, sampleJ, sampleK, sampleM, sampleN, sampleP, sampleQ) {
    //sheet1   
    var sheet1 = XLSX.utils.json_to_sheet(sample1, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH1.Value1, aryH1.Value2, aryH1.Value3, aryH1.Value4, aryH1.Value5,
            aryH1.Value6, aryH1.Value7, aryH1.Value8, aryH1.Value9, aryH1.Value10,
            aryH1.Value11, aryH1.Value12, aryH1.Value13, aryH1.Value14, aryH1.Value15,
            aryH1.Value16, aryH1.Value17, aryH1.Value18, aryH1.Value19, aryH1.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet1['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample1.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
    //2
    var sheet2 = XLSX.utils.json_to_sheet(sample2, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet2, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH2.Value2, aryH2.Value2, aryH2.Value3, aryH2.Value4, aryH2.Value5,
            aryH2.Value6, aryH2.Value7, aryH2.Value8, aryH2.Value9, aryH2.Value20,
            aryH2.Value22, aryH2.Value22, aryH2.Value23, aryH2.Value24, aryH2.Value25,
            aryH2.Value26, aryH2.Value27, aryH2.Value28, aryH2.Value29, aryH2.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet2['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet2['!ref']);
    sheet2['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample2.length + 2; i++) {
        sheet2['!rows'].push({ hpx: 25 });
    }
    //3
    var sheet3 = XLSX.utils.json_to_sheet(sample3, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet3, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH3.Value1, aryH3.Value2, aryH3.Value3, aryH3.Value4, aryH3.Value5,
            aryH3.Value6, aryH3.Value7, aryH3.Value8, aryH3.Value9, aryH3.Value10,
            aryH3.Value11, aryH3.Value12, aryH3.Value13, aryH3.Value14, aryH3.Value15,
            aryH3.Value16, aryH3.Value17, aryH3.Value18, aryH3.Value19, aryH3.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet3['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet3['!ref']);
    sheet3['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample3.length + 2; i++) {
        sheet3['!rows'].push({ hpx: 25 });
    }
    var sheet4 = XLSX.utils.json_to_sheet(sample4, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet4, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH4.Value1, aryH4.Value2, aryH4.Value3, aryH4.Value4, aryH4.Value5,
            aryH4.Value6, aryH4.Value7, aryH4.Value8, aryH4.Value9, aryH4.Value10,
            aryH4.Value11, aryH4.Value12, aryH4.Value13, aryH4.Value14, aryH4.Value15,
            aryH4.Value16, aryH4.Value17, aryH4.Value18, aryH4.Value19, aryH4.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet4['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet4['!ref']);
    sheet4['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample4.length + 2; i++) {
        sheet4['!rows'].push({ hpx: 25 });
    }
    var sheet5 = XLSX.utils.json_to_sheet(sample5, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet5, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH5.Value1, aryH5.Value2, aryH5.Value3, aryH5.Value4, aryH5.Value5,
            aryH5.Value6, aryH5.Value7, aryH5.Value8, aryH5.Value9, aryH5.Value10,
            aryH5.Value11, aryH5.Value12, aryH5.Value13, aryH5.Value14, aryH5.Value15,
            aryH5.Value16, aryH5.Value17, aryH5.Value18, aryH5.Value19, aryH5.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet5['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet5['!ref']);
    sheet5['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample5.length + 2; i++) {
        sheet5['!rows'].push({ hpx: 25 });
    }
    //6
    var sheet6 = XLSX.utils.json_to_sheet(sample6, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet6, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH6.Value1, aryH6.Value2, aryH6.Value3, aryH6.Value4, aryH6.Value5,
            aryH6.Value6, aryH6.Value7, aryH6.Value8, aryH6.Value9, aryH6.Value10,
            aryH6.Value11, aryH6.Value12, aryH6.Value13, aryH6.Value14, aryH6.Value15,
            aryH6.Value16, aryH6.Value17, aryH6.Value18, aryH6.Value19, aryH6.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet6['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet6['!ref']);
    sheet6['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample6.length + 2; i++) {
        sheet6['!rows'].push({ hpx: 25 });
    }
    var sheet7 = XLSX.utils.json_to_sheet(sample7, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet7, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH7.Value1, aryH7.Value2, aryH7.Value3, aryH7.Value4, aryH7.Value5,
            aryH7.Value6, aryH7.Value7, aryH7.Value8, aryH7.Value9, aryH7.Value10,
            aryH7.Value11, aryH7.Value12, aryH7.Value13, aryH7.Value14, aryH7.Value15,
            aryH7.Value16, aryH7.Value17, aryH7.Value18, aryH7.Value19, aryH7.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet7['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet7['!ref']);
    sheet7['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample7.length + 2; i++) {
        sheet7['!rows'].push({ hpx: 25 });
    }

    var sheet8 = XLSX.utils.json_to_sheet(sample8, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet8, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH8.Value1, aryH8.Value2, aryH8.Value3, aryH8.Value4, aryH8.Value5,
            aryH8.Value6, aryH8.Value7, aryH8.Value8, aryH8.Value9, aryH8.Value10,
            aryH8.Value11, aryH8.Value12, aryH8.Value13, aryH8.Value14, aryH8.Value15,
            aryH8.Value16, aryH8.Value17, aryH8.Value18, aryH8.Value19, aryH8.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet8['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet8['!ref']);
    sheet8['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample8.length + 2; i++) {
        sheet8['!rows'].push({ hpx: 25 });
    }

    var sheet9 = XLSX.utils.json_to_sheet(sample9, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet9, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryH9.Value1, aryH9.Value2, aryH9.Value3, aryH9.Value4, aryH9.Value5,
            aryH9.Value6, aryH9.Value7, aryH9.Value8, aryH9.Value9, aryH9.Value10,
            aryH9.Value11, aryH9.Value12, aryH9.Value13, aryH9.Value14, aryH9.Value15,
            aryH9.Value16, aryH9.Value17, aryH9.Value18, aryH9.Value19, aryH9.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheet9['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet9['!ref']);
    sheet9['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sample8.length + 2; i++) {
        sheet9['!rows'].push({ hpx: 25 });
    }

    var sheetA = XLSX.utils.json_to_sheet(sampleA, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetA, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHA.Value1, aryHA.Value2, aryHA.Value3, aryHA.Value4, aryHA.Value5,
            aryHA.Value6, aryHA.Value7, aryHA.Value8, aryHA.Value9, aryHA.Value10,
            aryHA.Value11, aryHA.Value12, aryHA.Value13, aryHA.Value14, aryHA.Value15,
            aryHA.Value16, aryHA.Value17, aryHA.Value18, aryHA.Value19, aryHA.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetA['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheetA['!ref']);
    sheetA['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleA.length + 2; i++) {
        sheetA['!rows'].push({ hpx: 25 });
    }
    var sheetB = XLSX.utils.json_to_sheet(sampleB, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetB, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHB.Value1, aryHB.Value2, aryHB.Value3, aryHB.Value4, aryHB.Value5,
            aryHB.Value6, aryHB.Value7, aryHB.Value8, aryHB.Value9, aryHB.Value10,
            aryHB.Value11, aryHB.Value12, aryHB.Value13, aryHB.Value14, aryHB.Value15,
            aryHB.Value16, aryHB.Value17, aryHB.Value18, aryHB.Value19, aryHB.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetB['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetB['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleB.length + 2; i++) {
        sheetB['!rows'].push({ hpx: 25 });
    }
    var sheetC = XLSX.utils.json_to_sheet(sampleC, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetC, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHC.Value1, aryHC.Value2, aryHC.Value3, aryHC.Value4, aryHC.Value5,
            aryHC.Value6, aryHC.Value7, aryHC.Value8, aryHC.Value9, aryHC.Value10,
            aryHC.Value11, aryHC.Value12, aryHC.Value13, aryHC.Value14, aryHC.Value15,
            aryHC.Value16, aryHC.Value17, aryHC.Value18, aryHC.Value19, aryHC.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetC['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetC['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleC.length + 2; i++) {
        sheetC['!rows'].push({ hpx: 25 });
    }
    var sheetD = XLSX.utils.json_to_sheet(sampleD, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetD, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHD.Value1, aryHD.Value2, aryHD.Value3, aryHD.Value4, aryHD.Value5,
            aryHD.Value6, aryHD.Value7, aryHD.Value8, aryHD.Value9, aryHD.Value10,
            aryHD.Value11, aryHD.Value12, aryHD.Value13, aryHD.Value14, aryHD.Value15,
            aryHD.Value16, aryHD.Value17, aryHD.Value18, aryHD.Value19, aryHD.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetD['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetD['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleD.length + 2; i++) {
        sheetD['!rows'].push({ hpx: 25 });
    }
    var sheetE = XLSX.utils.json_to_sheet(sampleE, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetE, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHE.Value1, aryHE.Value2, aryHE.Value3, aryHE.Value4, aryHE.Value5,
            aryHE.Value6, aryHE.Value7, aryHE.Value8, aryHE.Value9, aryHE.Value10,
            aryHE.Value11, aryHE.Value12, aryHE.Value13, aryHE.Value14, aryHE.Value15,
            aryHE.Value16, aryHE.Value17, aryHE.Value18, aryHE.Value19, aryHE.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetE['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetE['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleE.length + 2; i++) {
        sheetE['!rows'].push({ hpx: 25 });
    }
    var sheetF = XLSX.utils.json_to_sheet(sampleF, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetF, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHF.Value1, aryHF.Value2, aryHF.Value3, aryHF.Value4, aryHF.Value5,
            aryHF.Value6, aryHF.Value7, aryHF.Value8, aryHF.Value9, aryHF.Value10,
            aryHF.Value11, aryHF.Value12, aryHF.Value13, aryHF.Value14, aryHF.Value15,
            aryHF.Value16, aryHF.Value17, aryHF.Value18, aryHF.Value19, aryHF.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetF['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetF['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleF.length + 2; i++) {
        sheetF['!rows'].push({ hpx: 25 });
    }
    var sheetG = XLSX.utils.json_to_sheet(sampleG, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetG, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHG.Value1, aryHG.Value2, aryHG.Value3, aryHG.Value4, aryHG.Value5,
            aryHG.Value6, aryHG.Value7, aryHG.Value8, aryHG.Value9, aryHG.Value10,
            aryHG.Value11, aryHG.Value12, aryHG.Value13, aryHG.Value14, aryHG.Value15,
            aryHG.Value16, aryHG.Value17, aryHG.Value18, aryHG.Value19, aryHG.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetG['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetG['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleG.length + 2; i++) {
        sheetG['!rows'].push({ hpx: 25 });
    }
    var sheetH = XLSX.utils.json_to_sheet(sampleH, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetH, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHH.Value1, aryHH.Value2, aryHH.Value3, aryHH.Value4, aryHH.Value5,
            aryHH.Value6, aryHH.Value7, aryHH.Value8, aryHH.Value9, aryHH.Value10,
            aryHH.Value11, aryHH.Value12, aryHH.Value13, aryHH.Value14, aryHH.Value15,
            aryHH.Value16, aryHH.Value17, aryHH.Value18, aryHH.Value19, aryHH.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetH['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetH['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleH.length + 2; i++) {
        sheetH['!rows'].push({ hpx: 25 });
    }
    var sheetJ = XLSX.utils.json_to_sheet(sampleJ, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetJ, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHJ.Value1, aryHJ.Value2, aryHJ.Value3, aryHJ.Value4, aryHJ.Value5,
            aryHJ.Value6, aryHJ.Value7, aryHJ.Value8, aryHJ.Value9, aryHJ.Value10,
            aryHJ.Value11, aryHJ.Value12, aryHJ.Value13, aryHJ.Value14, aryHJ.Value15,
            aryHJ.Value16, aryHJ.Value17, aryHJ.Value18, aryHJ.Value19, aryHJ.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetJ['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetJ['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleJ.length + 2; i++) {
        sheetJ['!rows'].push({ hpx: 25 });
    }
    var sheetK = XLSX.utils.json_to_sheet(sampleK, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetK, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHK.Value1, aryHK.Value2, aryHK.Value3, aryHK.Value4, aryHK.Value5,
            aryHK.Value6, aryHK.Value7, aryHK.Value8, aryHK.Value9, aryHK.Value10,
            aryHK.Value11, aryHK.Value12, aryHK.Value13, aryHK.Value14, aryHK.Value15,
            aryHK.Value16, aryHK.Value17, aryHK.Value18, aryHK.Value19, aryHK.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetK['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetK['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleK.length + 2; i++) {
        sheetK['!rows'].push({ hpx: 25 });
    }
    //M
    var sheetM = XLSX.utils.json_to_sheet(sampleM, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetM, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHM.Value1, aryHM.Value2, aryHM.Value3, aryHM.Value4, aryHM.Value5,
            aryHM.Value6, aryHM.Value7, aryHM.Value8, aryHM.Value9, aryHM.Value10,
            aryHM.Value11, aryHM.Value12, aryHM.Value13, aryHM.Value14, aryHM.Value15,
            aryHM.Value16, aryHM.Value17, aryHM.Value18, aryHM.Value19, aryHM.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetM['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetM['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleM.length + 2; i++) {
        sheetM['!rows'].push({ hpx: 25 });
    }


    var sheetN = XLSX.utils.json_to_sheet(sampleN, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetN, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHN.Value1, aryHN.Value2, aryHN.Value3, aryHN.Value4, aryHN.Value5,
            aryHN.Value6, aryHN.Value7, aryHN.Value8, aryHN.Value9, aryHN.Value10,
            aryHN.Value11, aryHN.Value12, aryHN.Value13, aryHN.Value14, aryHN.Value15,
            aryHN.Value16, aryHN.Value17, aryHN.Value18, aryHN.Value19, aryHN.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetN['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetN['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleN.length + 2; i++) {
        sheetN['!rows'].push({ hpx: 25 });
    }


    var sheetP = XLSX.utils.json_to_sheet(sampleP, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetP, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHP.Value1, aryHP.Value2, aryHP.Value3, aryHP.Value4, aryHP.Value5,
            aryHP.Value6, aryHP.Value7, aryHP.Value8, aryHP.Value9, aryHP.Value10,
            aryHP.Value11, aryHP.Value12, aryHP.Value13, aryHP.Value14, aryHP.Value15,
            aryHP.Value16, aryHP.Value17, aryHP.Value18, aryHP.Value19, aryHP.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetP['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetP['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleP.length + 2; i++) {
        sheetP['!rows'].push({ hpx: 25 });
    }



    var sheetQ = XLSX.utils.json_to_sheet(sampleQ, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheetQ, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            aryHQ.Value1, aryHQ.Value2, aryHQ.Value3, aryHQ.Value4, aryHQ.Value5,
            aryHQ.Value6, aryHQ.Value7, aryHQ.Value8, aryHQ.Value9, aryHQ.Value10,
            aryHQ.Value11, aryHQ.Value12, aryHQ.Value13, aryHQ.Value14, aryHQ.Value15,
            aryHQ.Value16, aryHQ.Value17, aryHQ.Value18, aryHQ.Value19, aryHQ.Value20
        ]
    ], {
        origin: 'A1'
    });
    sheetQ['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    sheetQ['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < sampleQ.length + 2; i++) {
        sheetQ['!rows'].push({ hpx: 25 });
    }
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();
    if (sample1.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet1, sample1[1].Parts_Class);
    }
    if (sample2.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet2, sample2[1].Parts_Class);
    }
    if (sample3.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet3, sample3[1].Parts_Class);
    }
    if (sample4.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet4, sample4[1].Parts_Class);
    }
    if (sample5.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet5, sample5[1].Parts_Class);
    }
    if (sample6.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet6, sample6[1].Parts_Class);
    }
    if (sample7.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet7, sample7[1].Parts_Class);
    }
    if (sample8.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet8, sample8[1].Parts_Class);
    }
    if (sample9.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheet9, sample9[1].Parts_Class);
    }
    if (sampleA.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetA, sampleA[1].Parts_Class);
    }
    if (sampleB.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetB, sampleB[1].Parts_Class);
    }
    if (sampleC.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetC, sampleC[1].Parts_Class);
    }
    if (sampleD.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetD, sampleD[1].Parts_Class);
    }
    if (sampleE.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetE, sampleE[1].Parts_Class);
    }
    if (sampleF.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetF, sampleF[1].Parts_Class);
    }
    if (sampleG.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetG, sampleG[1].Parts_Class);
    }
    if (sampleH.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetH, sampleH[1].Parts_Class);
    }
    if (sampleJ.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetJ, sampleJ[1].Parts_Class);
    }
    if (sampleK.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetK, sampleK[1].Parts_Class);
    }
    if (sampleM.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetM, sampleM[1].Parts_Class);
    }
    if (sampleN.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetN, sampleN[1].Parts_Class);
    }
    if (sampleP.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetP, sampleP[1].Parts_Class);
    }
    if (sampleQ.length > 1) {
        XLSX.utils.book_append_sheet(wb, sheetQ, sampleQ[1].Parts_Class);
    }
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `集团新编码` + fname + `.xlsx`);
}
function enterSingle(param1, param2, finB, finE) {
    var SQL2A = { "SQL": "SQLShipment" };
    console.log("传来的开始日:" + DateFinB);
    console.log("传来的到期日:" + DateFinE);
    DateFinB = finB;
    DateFinE = finE;
    let ary1 = [];
    let ary1h = [];
    let ary2a = [];
    let ary2b = [];
    let ary3 = [];
    var pyear = param1;
    var pclass = param2;
    let DateRange = getDefaultWeek();
    var weekbeg = DateFinB;
    var weekend = DateFinE;
    //labuse
    weekbeg = '2020-02-01';
    weekend = '2020-02-29';
    if (DateFinB == '' || (DateFinE == '')) {
        weekbeg = DateRange[0].format("yyyy-MM-dd");
        weekend = DateRange[1].format("yyyy-MM-dd");
        console.log("预设本周:" + weekend);
    }
    if (pyear != "" && pyear != "null" && pyear != undefined && pyear.length > 0) {
    } else {
        pyear = '2019';
    }
    if (pclass != "" && pclass != "null" && pclass != undefined && pclass.length > 0) {
    } else {
        pclass = 'B1';
    }
    console.log("pclass:" + pclass);
    console.log("pyear:" + pyear);
    console.log("weekbeg:" + weekbeg);
    console.log("weekend:" + weekend);
    var SQL3 = { "SQL": "SQLPartsExp", "weekbeg": weekbeg, "weekend": weekend, "pyear": pyear, "pclass": pclass };
    let ajax3 = $.ajax({
        url: '/app/TMCode/getSQLDBData',
        data: SQL3,
        success: function (data) {
            ary3 = data;
            //  console.log("字串数据:" + JSON.stringify(data));
        },
        error: function (err) {
            alert("失败数据:" + JSON.stringify(err));
        }
    });
    $.when(ajax3).done(function () {
        // console.log("软体出货延误率--延期单数:" + JSON.stringify(ary2b));
        BornSingle((ary3));
    });
}
function BornSingle(ydata) {
    //sheet3   
    var sheet3 = XLSX.utils.json_to_sheet(ydata, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet3, [
        ['分类', '编码', '品名', '舊编码', '类别', '年份', '原则', '供应商',
            '属性1 ', '属性2 ', '属性3 ', '属性4 ', '属性5 ',
            '属性6 ', '属性7 ', '属性8 ', '属性9 ', '属性10',
            '属性11', '属性12', '属性13', '属性14', '属性15',
            '属性16', '属性17', '属性18', '属性19', '属性20'
        ]
    ], {
        origin: 'A1'
    });
    sheet3['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }
        , { wch: 5 }, { wch: 5 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet3['!ref']);
    sheet3['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet3['!rows'].push({ hpx: 25 });
    }
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, sheet3, "弘讯新编码2020");
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `集团新编码` + fname + `.xlsx`);
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

