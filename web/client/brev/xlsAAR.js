//xlsAR.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var BusiPart = '';
var exltype = '';
//const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary', cellStyles: true };
function enterAAR(BusiPartName, Advstr) {
    BusiPart = BusiPartName;
    let ary1 = [];
    var Option = 'Excel';
    var reportType = 'SevenDay';
    var arrange = 'DayA';
    var taskData = { "reportType": reportType, "arrange": arrange, "Option": Option, "Advstr": Advstr  };
    yjClient.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMSale/getRoute",
        success: function (data) {
            Germany((data),exltype );
            console.log("dddd",data);
        },
        error: function (err) {
            alert("异常" + JSON.stringify(err));
        }
    });
    
     // let ajax1 = $.ajax({
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
    // $.when(ajax1, ajax1).done(function () {
    //     Germany((ary1),exltype );
    // });
}
function Germany(kdataA, type ) {
    let now = new Date();
    var datetime = new Date(now).Format("yyyy/MM/dd");
    var fnameF1 = '对账单';
    var fnameF2 = BusiPart; 
    console.log(" 金  " + kdataA.length);
    let kiss = [];
    // var tit ={ "Set1":'',"Set2":'' ,"Set3":'',"Set4":''  }
    // kiss.push(tit);
        var tit1 ={  "Set1":"宁波市北仑区大港五路88号 TEL:0574-86829285ext.215 FAX:0574-86829287-0219","Set2":"","Set3":'',"Set4":'' }
    kiss.push(tit1);
        var tit2 ={ "Set1":"","Set2":"应收帐款对帐单","Set3":"","Set4":""}
    kiss.push(tit2);
        var tit3 ={ "Set1":"对账日期","Set2":''+datetime,"Set3":"","Set4":"" }
    kiss.push(tit3);
    var tit4 ={ "Set1":"TO:","Set2":''+BusiPart,"Set3":"","Set4":"" }
    kiss.push(tit4);
    var tit5 ={ "Set1":"期初应收款","Set2":'开票金额' ,"Set3":"付款金额","Set4":"应收帐款余额" }
    kiss.push(tit5);
    
    for (var i = 0; i < kdataA.length; i++) {
        let speebook = null;
         speebook = { "Set1":kdataA[i].Set1,"Set2":kdataA[i].Set2,
         "Set3":kdataA[i].Set3 ,"Set4":kdataA[i].Set4  }
        kiss.push(speebook);
    }
    let dateEBottem = {"Set1":'付款条件',"Set2":'' , "Set3":'',"Set4":''}  ;
    kiss.push(dateEBottem);
    let dateEB11111 = { "Set1": '',"Set2":'' ,"Set3":'',"Set4":''} ;
    kiss.push(dateEB11111);
    let dateEB22222 = { "Set1":'', "Set2":'' ,"Set3":'',"Set4":'' } ;
    kiss.push(dateEB22222);
    let Botomopion = {  "Set1":'核对与回复意见：\n核对人签字：（请盖贵公司财务专用章或公章）',
    "Set2":'' ,"Set3":'',"Set4":'承 办人：\n本公司财务专用章'  } ;
    kiss.push(Botomopion);
    let Botomsign ={  "Set1":'',"Set2":'' ,"Set3":'',"Set4":'' } ;
    kiss.push(Botomsign);
    let Botomsign1 ={  "Set1":'',"Set2":'' ,"Set3":'',"Set4":'' } ;
    kiss.push(Botomsign);

    let json = kiss;
    var tmpdata = json[0];
    json.unshift({});
    var keyMap = []; //获取keys
     
    for (var k in tmpdata) {
        // console.log(" 勇士  " + JSON.stringify(tmpdata)  ); 
        //k 就是 `Parts_Code` , `MPSwift` , `ExpSN` , `ExpMark` , `ExpSrc` , `PropDesc` , `PartsSort` , `PropValue` , `ExpNoSrc` 
        keyMap.push(k);
        json[0][k] = k;
        // json[0][k] = '勇士';
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
    // tmpdata["A1"].v= "hello" ;
    // tmpdata["A2"].v= "";
    // tmpdata["A3"].v= "hello" ;
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
 
    tmpdata['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 12 }, { wch: 10 }, { wch: 20 }];
   
   var colsize = 4;
    // 标题行
    let caparr = [ "A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    const rows = [ {hpx: 40 }, {hpx: 60}, {hpx: 80}, {hpx: 100}];
    const cols = [ { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 10 }, { wch: 12 }, { wch: 10 }, { wch: 20 }];  
    const marg =  {left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3};
    // wbmat['!rows'] = rows; //noeff
    tmpdata["A1"].v= "" ;     tmpdata["B1"].v= "对帐单" ;     tmpdata["C1"].v= "" ;     tmpdata["D1"].v= "" ;   
    tmpdata['!rows'] = [{ hpx: 60 }];
    tmpdata['!cols'] = cols;
    tmpdata['!margins'] = marg;  //noeff    
    const range = [  { s: { c: 0, r: 1 }, e: { c: 3, r: 1 } }
     , { s: { c: 1, r: 2 }, e: { c: 3, r: 2 } } 
     , { s: { c: 1, r: 4 }, e: { c: 3, r: 4 } }];  
    tmpdata['!merges'] = range;
    tmpdata['!merges'].push({ s: { c: 0, r: (kdataA.length + 6) }, e: { c: 3, r: (kdataA.length + 8) } });//付款条件
    tmpdata['!merges'].push({ s: { c: 0, r: (kdataA.length + 9) }, e: { c: 1, r: (kdataA.length + 11) } });
    tmpdata['!merges'].push({ s: { c: 2, r: (kdataA.length + 9) }, e: { c: 2, r: (kdataA.length + 11) } });
    tmpdata['!merges'].push({ s: { c: 3, r: (kdataA.length + 9) }, e: { c: 3, r: (kdataA.length + 11) } });
    const titlerow = {alignment: { horizontal: "center", vertical: "center" }, font: { sz: 18, bold: false, color: { rgb: "3A5FCD" } }, fill: { fgColor: { rgb: "CAE1FF" } }  };
    const subtilrow = { font: { sz: 18, bold: false, color: { rgb: "696969" } }, fill: { fgColor: { rgb: "CAE1FF" } } };
    const redrow = { font: { sz: 20, bold: true, color: { rgb: "B22222" } }, fill: { fgColor: { rgb: "CAE1FF" } } };
    const oddrow  = { alignment: { horizontal: "center", vertical: "center" },font: { sz: 16, bold: false, color: { rgb: "696969" } }, fill: { fgColor: { rgb: "CAE1FF" } },border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   }  };
    const evenrow = { alignment: { horizontal: "center", vertical: "center" },font: { sz: 16, bold: false } ,border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   }   };  
    const botmrow = { alignment: { horizontal: "left", vertical: "left" }, font: { sz: 14, bold: false , color:{ rgb: "8B8989" } }, fill: { fgColor: { rgb: "CAE1FF" } } ,border: {  top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' },right: { style: 'thin' }   }   };  
    
    tmpdata["A1"].s = subtilrow;
    tmpdata["B1"].s = subtilrow;
    tmpdata["C1"].s = subtilrow;
    tmpdata["D1"].s = subtilrow;
    for (var i = 1; i < 6 ; i++) {
        for (var ki = 0; ki < colsize; ki++) {
            if (i % 2 == 0) {
                tmpdata[caparr[ki]+ i].s = subtilrow;
            }else{
                tmpdata[caparr[ki]+ i].s = subtilrow;
            }
        }
    }
    for (var ki = 0; ki < colsize; ki++) {
            tmpdata[caparr[ki]+ 3].s = redrow;
    }
    for (var i = 6; i <= (kdataA.length +7 ) ; i++) {
        for (var ki = 0; ki < colsize; ki++) {
            if (i % 2 == 0) {
                tmpdata[caparr[ki]+ i].s = oddrow;
            }else{
                tmpdata[caparr[ki]+ i].s = oddrow;
            }
        }
    }
    for (var i = (kdataA.length +7 ); i < (kdataA.length +13 ) ; i++) {
        tmpdata['!rows'].push( { hpx: 120 });
        for (var ki = 0; ki < colsize; ki++) {
            if (i % 2 == 0) {
                tmpdata[caparr[ki]+ i].s = botmrow;
            }else{
                tmpdata[caparr[ki]+ i].s = botmrow;
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
    saveAs(tmpDown,  fnameF1 + fnameF2 +`-` + swift + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
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