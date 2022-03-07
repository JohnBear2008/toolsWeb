//xlsDS.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var BusiPart = '';
var exltype = '';
function enterDS( Advstr ,reportType) {
    BusiPart =  Advstr.BusiPartName;
    let ary1 = [];
    var Option = 'Excel';
    // var reportType = 'SevenDawn';
    var arrange = 'Dawn';
    var taskData = { "reportType": reportType, "arrange": arrange, "Option": Option, "Advstr": Advstr  };
    yjClient.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMSale/getRoute",
        success: function (data) {
            Tailand((data),exltype );
            console.log("dddd",data);
        },
        error: function (err) {
            alert("异常" + JSON.stringify(err));
        }
    });
    // let ajax1 = yjClient.ajax({
    //     method: 'post',
    //     data: taskData,
    //     url: "/app/TMSale/getRoute",
    //     success: function (data) {
    //         ary1 = data;
    //         console.log("dddd",ary1);
    //     },
    //     error: function (err) {
    //         alert("异常" + JSON.stringify(err));
    //     }
    // });
    // $.when(ajax1).done(function () {
    //     Tailand((ary1),exltype );
    // });
}
function Tailand(kdataA, type ) {
    let now = new Date();
    var datetime = new Date(now).Format("yyyy/MM/dd");
    var fnameF1 = '对账明细表';
    var fnameF2 = BusiPart; 
  
    let kiss = [];
    var tit ={ "Set1":'',"Set2":'宁波弘讯科技股份有限公司' ,"Set3":'',"Set4":'',"Set5":'',"Set6":'',"Set7":'',"Set8":'' ,"Set9":'' }
    kiss.push(tit);
    var tit2 ={ "Set1":'客戶ID',"Set2":'业务员' ,"Set3":'客戶全稱',"Set4":'单据号',"Set5":'日期',"Set6":'种类',"Set7":'应收金额',"Set8":'收款金额' ,"Set9":'剩余金额' }
    kiss.push(tit2);
    
    for (var i = 0; i < kdataA.length; i++) {
        let speebook = null;
         speebook = { "Set1":kdataA[i].Set1,"Set2":kdataA[i].Set2, "Set3":kdataA[i].Set3 ,"Set4":kdataA[i].Set4 ,
         "Set5":kdataA[i].Set5,"Set6":kdataA[i].Set6, "Set7":kdataA[i].Set7 ,"Set8":kdataA[i].Set8 ,"Set9":kdataA[i].Set9  }
        kiss.push(speebook);
    }
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

    var colsizeA = 9;
    // 标题行
    let caparrA = [ "A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    var shift =4;
     
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
   
   var colsize = 9;
    // 标题行
    let caparr = [ "A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const rows = [ {hpx: 40 }, {hpx: 60}, {hpx: 80}, {hpx: 100}];
    const cols = [ { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];  
    const marg =  {left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3};
    // wbmat['!rows'] = rows; //noeff
    tmpdata["A1"].v= "" ;     tmpdata["B1"].v= "对账明细表" ;     tmpdata["C1"].v= "" ;     tmpdata["D1"].v= "" ;   
    tmpdata["E1"].v= "" ;     tmpdata["F1"].v= "" ;     tmpdata["G1"].v= "" ;     tmpdata["H1"].v= "" ;    tmpdata["I1"].v= "" ;  
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
    tmpdata["I1"].s = titlerow;
    for (var i = 2; i <= (kdataA.length +3 ) ; i++) {
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