//xlsDS.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var BusiPart = '';
var exltype = '';
// const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary', cellStyles: true };
function enterBBR( Advstr) {
    BusiPart =  Advstr.BusiPartName;
    let ary1 = [];
    var Option = 'Excel';
    var reportType = 'SevenNight';
    var arrange = 'Night';
    var taskData = { "reportType": reportType, "arrange": arrange, "Option": Option, "Advstr": Advstr };
    yjClient.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMSale/getRoute",
        success: function (data) {
            France((data),exltype );
            console.log("dddd",data);
        },
        error: function (err) {
            alert("异常" + JSON.stringify(err));
        }
    });
}
function France(kdataA, type ) {
    let now = new Date();
    var datetime = new Date(now).Format("yyyy/MM/dd");
    var fnameF1 = '月度收款目标与达成';
    var fnameF2 = BusiPart; 
  
    let kiss = [];
    var tit ={ "Set1":'',"Set2":'宁波弘讯科技股份有限公司' ,"Set3":'',"Set4":'',"Set5":'',"Set6":'',"Set7":'',"Set8":'' ,"Set9":'',
     "Set10": '' , "Set11": '' , "Set12":'' , "Set13":'' ,   "Set14":'' , "Set15":'' ,"Set16":''  ,"Set17":''  
    }
    kiss.push(tit);
    // var Ttitle ={ "Set1":'业务员',"Set2":'客戶ID' ,"Set3":'客戶全稱',"Set4":'单据号',"Set5":'日期',"Set6":'种类',"Set7":'应收金额',"Set8":'收款金额' ,"Set9":'剩余金额' }
  
    // let Ttitle = ['第几笔', '客戶全稱', '负责人', '截止'+smartAry[0]+'应收款', ''+smartAry[1]+'开票', ''+smartAry[2]+'开票', ''+smartAry[3]+'开票',
    // ''+smartAry[4]+'月目标', ''+smartAry[5]+'月目标', ''+smartAry[6]+'月目标', '季度目标和', ''+smartAry[4]+'月实际收款',
    // ''+smartAry[5]+'月实际收款', ''+smartAry[6]+'月实际收款', '季度实际和',''+smartAry[4]+'目标达成',''+smartAry[5]+'目标达成',''+smartAry[6]+'目标达成'];

    let Ttitle = {
    "Set1":'第几笔', "Set2":'客戶全稱',"Set3": '负责人', "Set4": '截止'+smartAry[0]+'应收款', "Set5": ''+smartAry[1]+'开票',"Set6": ''+smartAry[2]+'开票', 
    "Set7":  ''+smartAry[3]+'开票', "Set8":''+smartAry[6]+'月目标', "Set9":'季度目标和' ,"Set10": ''+smartAry[4]+'月实际收款', 
    "Set11": ''+smartAry[4]+'月实际收款', "Set12":''+smartAry[5]+'月实际收款', 
    "Set13": ''+smartAry[5]+'月实际收款', "Set14":''+smartAry[6]+'月实际收款', "Set15":'季度实际和',"Set16":''+smartAry[4]+'目标达成',
    "Set17": ''+smartAry[5]+'目标达成' , "Set18":''+smartAry[6]+'目标达成'
    }; 
    kiss.push(Ttitle);
    let PropList = [];
    var SN = '';
    var BizPa = '';
    var PersN = '';
    var Bill0 = '';
    var Bill6 = '';
    var Bill7 = '';
    var Bill8 = '';
    var Goal7 = '';
    var Goal8 = '';
    var Goal9 = '';
    var GoalQ = '';
    var PayC6 = '';
    var PayC7 = '';
    var PayC8 = '';
    var PayCQ = '';
    var Achv7 = '';
    var Achv8 = '';
    var Achv9 = ''; 
    var TotGoal7 = 0;
    var TotGoal8 = 0;
    var TotGoal9 = 0;
    var TotGoalQ = 0;
    var TotPayC6 = 0;
    var TotPayC7 = 0;
    var TotPayC8 = 0;
    var TotPayCQ = 0;
    var TotAchv7 = 0;
    var TotAchv8 = 0;
    var TotAchv9 = 0; 
    var count = kdataA.length+1;
    var nowcn = 0;
    for (var ki = 0 + nowcn; ki <= count; ki++) {
        for (var i = 0; i < kdataA.length; i++) {
            console.log("宁职院", ki, "梅花", kdataA[i].Set2);
            var SeqNo = kdataA[i].Set1; 
            SeqNo = parseInt(SeqNo) - 1;
            if (SeqNo == ki) {
                 
                BizPa = kdataA[i].Set2,
                PersN = kdataA[i].Set3,
                Bill0 = kdataA[i].Set4,
                Bill6 = kdataA[i].Set5,
                Bill7 = kdataA[i].Set6,
                Bill8 = kdataA[i].Set7,
                Goal7 = kdataA[i].Set8, TotGoal7 +=Goal7;
                Goal8 = kdataA[i].Set9, TotGoal8 +=Goal8;
                Goal9 = kdataA[i].Set10, TotGoal9 +=Goal9;
                GoalQ = kdataA[i].Set11, TotGoalQ +=GoalQ;
                PayC6 = kdataA[i].Set12, TotPayC6 +=PayC6;
                PayC7 = kdataA[i].Set13, TotPayC7 +=PayC7;
                PayC8 = kdataA[i].Set14, TotPayC8 +=PayC8;
                PayCQ = kdataA[i].Set15, TotPayCQ +=PayCQ;
                Achv7 = kdataA[i].Set16, TotAchv7 +=Achv7;
                Achv8 = kdataA[i].Set17, TotAchv8 +=Achv8;
                Achv9 = kdataA[i].Set18, TotAchv9 +=Achv9;

              
                let speebook = null;
                // speebook.push(ki+1);
                // speebook.push(BizPa);
                // speebook.push(PersN);
                // speebook.push(Bill0);
                // speebook.push(Bill6);
                // speebook.push(Bill7);
                // speebook.push(Bill8);

                // speebook.push(Goal7);
                // speebook.push(Goal8);
                // speebook.push(Goal9);
                // speebook.push(GoalQ);

                // speebook.push(PayC6);
                // speebook.push(PayC7);
                // speebook.push(PayC8);
                // speebook.push(PayCQ);

                // speebook.push(Achv7);
                // speebook.push(Achv8);
                // speebook.push(Achv9);
                speebook = {   "Set1":''+(ki+1) , "Set2":BizPa, "Set3":PersN ,"Set4":Bill0 ,
                "Set5": Bill6,"Set6": Bill7, "Set7": Bill8 ,"Set8":Goal7 ,"Set9":Goal8 ,
                "Set10":Goal9, "Set11":GoalQ , "Set12":PayC6 ,"Set13":PayC7 ,
                "Set14":PayC8 , "Set15":PayCQ, "Set16":Achv7 ,"Set17":Achv8 ,"Set18":Achv9 
                }
                kiss.push(speebook);
                nowcn++;
            }
        }
    }
    // for (var i = 0; i < kdataA.length; i++) {
    //     let speebook = null;
    //      speebook = { "Set1":kdataA[i].Set1,"Set2":kdataA[i].Set2, "Set3":kdataA[i].Set3 ,"Set4":kdataA[i].Set4 ,
    //      "Set5":kdataA[i].Set5,"Set6":kdataA[i].Set6, "Set7":kdataA[i].Set7 ,"Set8":kdataA[i].Set8 ,"Set9":kdataA[i].Set9  }
    //     kiss.push(speebook);
    // }
    let json = kiss;
    var tmpdata = json[0];
    json.unshift({});
    var keyMap = []; //获取keys
     
    for (var k in tmpdata) {
        keyMap.push(k);
        json[0][k] = k;
    }
    var tmpdata = [];//用来保存转换好的json 
    json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
        v: v.v
    });
 
    // 标题行
     
    var outputPos = Object.keys(tmpdata);
    //classB
    // var json2 = kdataB;
    // var wbmat = json2[0];
    // json2.unshift({});
    // var keyMap = []; //获取keys
    // for (var k in wbmat) {
    //     keyMap.push(k);
    //     json2[0][k] = k;
    // }
    // var wbmat = [];//用来保存转换好的json2 
    // json2.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
    //     v: v[k],
    //     position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    // }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => wbmat[v.position] = {
    //     v: v.v
    // });
    // var outputPos2 = Object.keys(wbmat);
 
    tmpdata['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
   
   var colsize = 17;
    // 标题行
    let caparr = [ "A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const rows = [ {hpx: 40 }, {hpx: 60}, {hpx: 80}, {hpx: 100}];
    const cols = [ { wch: 10 }, { wch: 40 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, 
        { wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 }];  
    const marg =  {left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3};
    // wbmat['!rows'] = rows; //noeff
    tmpdata["A1"].v= "" ;     tmpdata["B1"].v= "" ;     tmpdata["C1"].v= "" ;     tmpdata["D1"].v= "" ;   
    tmpdata["E1"].v= "" ;     tmpdata["F1"].v= "" ;     tmpdata["G1"].v= "" ;     tmpdata["H1"].v= "" ; 
    tmpdata["I1"].v= "" ;     tmpdata["J1"].v= "" ;     tmpdata["K1"].v= "" ;     tmpdata["L1"].v= "" ; 
    tmpdata["M1"].v= "" ;     tmpdata["N1"].v= "" ;     tmpdata["O1"].v= "" ;     tmpdata["P1"].v= "" ; 
    tmpdata["Q1"].v= "" ;
    tmpdata['!rows'] = [{ hpx: 60 }];
    tmpdata['!cols'] = cols;
    tmpdata['!margins'] = marg;  //noeff    
    const range = [{ s: { c: 1, r: 0 }, e: { c: 3, r: 0 } } ];  
    tmpdata['!merges'] = range;
    // tmpdata['!merges'].push({ s: { c: 2, r: (kdataA.length + 11) }, e: { c: 3, r: (kdataA.length + 11) } });
    const titlerow = {alignment: { horizontal: "center", vertical: "center" }, font: { sz: 18, bold: true, color: { rgb: "3A5FCD" } }, fill: { fgColor: { rgb: "CAE1FF" } } ,border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   } };
    const subtilrow = { font: { sz: 20, bold: true, color: { rgb: "696969" } }, fill: { fgColor: { rgb: "F0FFFF" } },border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   } };
    const oddrow  = { alignment: { horizontal: "center", vertical: "center" },font: { sz: 16, bold: false, color: { rgb: "696969" } }, fill: { fgColor: { rgb: "CAE1FF" } },border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   }  };
    const evenrow = { alignment: { horizontal: "center", vertical: "center" },font: { sz: 16, bold: false } ,border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   }   };  
    
    tmpdata["A1"].s = titlerow;    tmpdata["B1"].s = titlerow;    tmpdata["C1"].s = titlerow;    tmpdata["D1"].s = titlerow;
    tmpdata["E1"].s = titlerow;    tmpdata["F1"].s = titlerow;    tmpdata["G1"].s = titlerow;    tmpdata["H1"].s = titlerow;
    tmpdata["I1"].s = titlerow;    tmpdata["J1"].s = titlerow;    tmpdata["K1"].s = titlerow;    tmpdata["L1"].s = titlerow;
    tmpdata["M1"].s = titlerow;    tmpdata["N1"].s = titlerow;    tmpdata["O1"].s = titlerow;    tmpdata["P1"].s = titlerow;
    tmpdata["Q1"].s = titlerow;  
    for (var i = 2; i <= (kdataA.length +3  ) ; i++) {
        for (var ki = 0; ki < colsize; ki++) {
            if (i % 2 == 0) {
                tmpdata[caparr[ki]+ i].s = oddrow;
            }else{
                tmpdata[caparr[ki]+ i].s = oddrow;
            }
        }
    }
    var tmpWA = {
        SheetNames: ['Sheet1' ], //保存的表标题
        Sheets: {
            'Sheet1': Object.assign({},
                tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
            // 'Sheet2': Object.assign({},
            //     wbmat, //内容
            //     {
            //         '!ref': outputPos2[0] + ':' + outputPos2[outputPos2.length - 1] //设置填充区域
            //     })
        }
    };
    var tmpDown = new Blob([s2ab(XLSX.write(tmpWA,
        { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
    ))], {
        type: ""
    });
    var swift = Math.random(100) * 100;
    swift = swift.toFixed(0);
    if (swift.length < 2) {
        swift = '0' + swift;
    }
    saveAs(tmpDown,  fnameF1 + fnameF2  + `-` + swift + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
}
 
function saveAs(obj, fileName) {
    var tmpa = document.createElement("a");
    tmpa.download = fileName || "下载";
    tmpa.href = URL.createObjectURL(obj);
    tmpa.click();
    setTimeout(function () {
        URL.revokeObjectURL(obj);
    }, 100);
}
function getCharCol(n) {
    let temCol = '',
        s = '',
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}
function s2ab(s) {
    if (typeof ArrayBuffer !== 'undefined') {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}