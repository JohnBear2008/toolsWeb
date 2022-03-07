//xlsDS.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var BusiPart = '';
var exltype = '';
// const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary', cellStyles: true };
function enterCCR( Advstr) {
    BusiPart =  Advstr.BusiPartName;
    let ary1 = [];
    var Option = 'Excel';
    var reportType = 'SevenNoon';
    var arrange = 'Noon';
    var taskData = { "reportType": reportType, "arrange": arrange, "Option": Option, "Advstr": Advstr };
    yjClient.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMSale/getRoute",
        success: function (data) {
            Italy((data),exltype );
            console.log("dddd",data);
        },
        error: function (err) {
            alert("异常" + JSON.stringify(err));
        }
    });
}
function Italy(kdataA, type ) {
    let now = new Date();
    var datetime = new Date(now).Format("yyyy/MM/dd");
    var fnameF1 = '账龄统计';
    var fnameF2 = BusiPart; 
  
    let kiss = [];
    var tit ={ "Set1":'',"Set2":'宁波弘讯科技股份有限公司' ,"Set3":'',"Set4":'',"Set5":'',"Set6":'',"Set7":'',"Set8":'' ,"Set9":'',
     "Set10": '' , "Set11": '' , "Set12":'' , "Set13":'' ,   "Set14":'' , "Set15":'' ,"Set16":'' 
    }
    kiss.push(tit);
    // var Ttitle ={ "Set1":'业务员',"Set2":'客戶ID' ,"Set3":'客戶全稱',"Set4":'单据号',"Set5":'日期',"Set6":'种类',"Set7":'应收金额',"Set8":'收款金额' ,"Set9":'剩余金额' }
  
    // let Ttitle = {"Set1":'第几笔', "Set2":'客戶全稱',"Set3": '负责人', "Set4": '帐期', "Set5": '截止'+smartAry[0]+'应收款',"Set6": ''+smartAry[0]+'开票', 
    // "Set7":''+smartAry[1]+'开票', "Set8":''+smartAry[2]+'开票',"Set8": ''+smartAry[3]+'开票', "Set9":''+smartAry[4]+'开票',"Set10": ''+smartAry[5]+'开票',
    // "Set11": ''+smartAry[6]+'开票', "Set12":''+smartAry[7]+'开票', "Set13":''+smartAry[8]+'开票', 
    // "Set14":''+smartAry[9]+'开票', "Set15":''+smartAry[10]+'开票',"Set16":''+smartAry[11]+'开票'};
    let Ttitle = {"Set1":'第几笔', "Set2":'客戶全稱',"Set3": '负责人', "Set4": '帐期', "Set5": '截止'+smartAry[0]+'应收款',"Set6": ''+smartAry[0]+'开票', 
    "Set7":''+smartAry[1]+'开票', "Set8":''+smartAry[2]+'开票',"Set8": ''+smartAry[3]+'开票', "Set9":''+smartAry[4]+'开票'
    ,"Set10": ''+smartAry[5]+'开票',
    "Set11": ''+smartAry[6]+'开票', "Set12":''+smartAry[7]+'开票', "Set13":''+smartAry[8]+'开票', 
    "Set14":''+smartAry[9]+'开票', "Set15":''+smartAry[10]+'开票',"Set16":''+smartAry[11]+'开票'
    }; 
    kiss.push(Ttitle);
    let PropList = [];
    var SN = '';
    var BizPa = '';
    var PersN = '';
    var Ages = '';
    var BillQ = '';
    var Bill7 = '';
    var Bill6 = '';
    var Bill5 = '';
    var Bill4 = '';
    var Bill3 = '';
    var Bill2 = '';
    var Bill1 = '';
    var Bill0 = '';
    var Grad11 = '';
    var Grad10 = '';
    var Grad09 = '';
    var Grad08 = '';
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
                // BizPa = kdataA[i].Set2 ,
                // PersN = kdataA[i].Set3 ,
                // BillQ = kdataA[i].Set4 ,
                // Ages  = kdataA[i].Ages ,
                // Bill7 = kdataA[i].Set5 ,
                // Bill6 = kdataA[i].Set6 ,
                // Bill5 = kdataA[i].Set7 ,
                // Bill4 = kdataA[i].Set8 ,
                // Bill3 = kdataA[i].Set9 ,
                // Bill2 = kdataA[i].Set10 ,
                // Bill1 = kdataA[i].Set11,
                // Bill0 = kdataA[i].Set12, 
                // Grad11 = kdataA[i].Set13, 
                // Grad10 = kdataA[i].Set14, 
                // Grad09 = kdataA[i].Set15, 
                // Grad08 = kdataA[i].Set16, 
 
                // speebook.push(BizPa);
                // speebook.push(PersN);
                // speebook.push(BillQ);
                // speebook.push(Ages);
                // speebook.push(Bill7);
                // speebook.push(Bill6);
                // speebook.push(Bill5);
                // speebook.push(Bill4);
                // speebook.push(Bill3);
                // speebook.push(Bill2);
                // speebook.push(Bill1);
                // speebook.push(Bill0);
                // speebook.push(Grad11);
                // speebook.push(Grad10);
                // speebook.push(Grad09);
                // speebook.push(Grad08);
            
                let speebook = null;
                speebook = {   "Set1":''+SeqNo , "Set2":kdataA[i].Set2, "Set3":kdataA[i].Set3 ,"Set4":kdataA[i].Ages ,
                "Set5":kdataA[i].Set5,"Set6":kdataA[i].Set6, "Set7":kdataA[i].Set7 ,"Set8":kdataA[i].Set8 ,"Set9":kdataA[i].Set9 ,
                "Set10":kdataA[i].Set10, "Set11":kdataA[i].Set11, "Set12":kdataA[i].Set12 ,"Set13":kdataA[i].Set13 ,
                "Set14":kdataA[i].Set14, "Set15":kdataA[i].Set15, "Set16":kdataA[i].Set16
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
   
   var colsize = 16;
    // 标题行
    let caparr = [ "A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const rows = [ {hpx: 40 }, {hpx: 60}, {hpx: 80}, {hpx: 100}];
    const cols = [ { wch: 10 }, { wch: 40 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, 
        { wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 },{ wch: 20 }];  
    const marg =  {left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3};
    // wbmat['!rows'] = rows; //noeff
    tmpdata["A1"].v= "" ;     tmpdata["B1"].v= "" ;     tmpdata["C1"].v= "" ;     tmpdata["D1"].v= "" ;   
    tmpdata["E1"].v= "" ;     tmpdata["F1"].v= "" ;     tmpdata["G1"].v= "" ;     tmpdata["H1"].v= "" ; 
    tmpdata["I1"].v= "" ;     tmpdata["J1"].v= "" ;     tmpdata["K1"].v= "" ;     tmpdata["L1"].v= "" ; 
    tmpdata["M1"].v= "" ;     tmpdata["N1"].v= "" ;     tmpdata["O1"].v= "" ;     tmpdata["P1"].v= "" ; 
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
    saveAs(tmpDown,  fnameF1 + fnameF2  +`-` + swift + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
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