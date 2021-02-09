//xlsExport.js
var DateMakB = '';
var DateMakE = '';
var DateFinB = '';
var DateFinE = '';
var pclass = '';
var Dept = 'T0001';
function comeMete(paramC, paramP, paramU ,DateFinB, DateFinE) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    let ary2 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = ' A.`Parts_Code` ASC ';
    var myear='';
    var mrule='';
    var mpcode= paramP;
    let DateRange =getOneMonth();
    var weekbeg = DateFinB;
    var weekend = DateFinE; //建议默认为上月26~本月25，但需可选
    if (DateFinB =='' || (DateFinE =='')){
          weekbeg = DateRange[0].format("yyyy-MM-dd");
          weekend = DateRange[1].format("yyyy-MM-dd");
          console.log("本月少女:" +weekend);
    }
    console.log("weekbeg:"+weekbeg);
    console.log("weekend:"+weekend);
    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  A.Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    A.Parts_Rule =" + "'" + mrule + "'  ";
    }
    if (mpcode != "" && mpcode != "null" && mpcode != undefined && mpcode.length > 0) {
        console.log("编码", mpcode);
        filter += " AND    A.Parts_Code =" + "'" + mclass + "'";
    }
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("日期从", weekbeg);
        filter += " AND  A.Parts_Apply_Date >=  '" + weekbeg + "'  ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("日期到", weekend);
        filter += " AND  A.Parts_Apply_Date <= '" + weekend + "' ";
    }
   
    console.log("美新",filter);
    var reportType = 'asiaProd';
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
    //sheet2
    var filter2 = ' 1=1 ';
    var orderBy2 = ' Parts_Code  , cast(ExpSN as int)  ASC  ';
    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter2 += " AND  Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter2 += " AND    Parts_Rule =" + "'" + mrule + "'  ";
    }
    if (mpcode != "" && mpcode != "null" && mpcode != undefined && mpcode.length > 0) {
        console.log("编码", mpcode);
        filter2 += " AND  Parts_Code =" + "'" + mpcode + "'";
    }
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("日期从", weekbeg);
        filter2 += " AND  Parts_Date >=  '" + weekbeg + "'  ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("日期到", weekend);
        filter2 += " AND  Parts_Date <= '" + weekend + "' ";
    }

    console.log("小松",filter2);
    var reportType2 = 'asiaProp';
    var taskData2 = { "reportType": reportType2, "filter": filter2,  "limit": limit, "orderBy": orderBy2 };
    let ajax2 = $.ajax({
        method: 'post',
        data: taskData2,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            ary2 = data;
        },
        error: function (err) {
            alert("5555" + JSON.stringify(err));
        }
    });
    
    $.when(ajax1,ajax2).done(function () {
        ShipMete((ary1),(ary2));
    });
}
function ShipMete(ydata,zdata) {
    let toyota = [];
    // 代码	旧代码	旧规格	物料自动编码 代码	旧代码	旧规格	物料自动编码

    // 代码	旧代码	旧规格	物料自动编码	物料类别	物料规格	物料名称	物料规格	物料类型	物料类别	基本计量单位	物料关键字段类别	物料编码版本	供应商	组合品
    let Ttitle = [ '代码' ,   '旧代码' , '旧规格'  ,    '物料类别' ,  '物料规格' ,  '物料名称'  ,
      '物料规格' , '物料类型' , '物料类别', '基本计量单位' , '物料关键字段类别' , '物料编码版本' , '供应商', '物料型号' , '组合品' ];
    toyota.push(Ttitle);
    for (var i = 0; i < ydata.length; i++) {
        pclass = ydata[i].Parts_Chi;
        let speebook = [];
        speebook.push(ydata[i].Parts_Code);
        speebook.push(ydata[i].Parts_Old_Code);
        speebook.push(ydata[i].Parts_Old_Name);
        // speebook.push(ydata[i].UniqueCode);
        speebook.push(ydata[i].Parts_Class);
        speebook.push(ydata[i].Design_Spec);
        speebook.push(ydata[i].Parts_Name);
        speebook.push(ydata[i].Property);
        speebook.push(Dept);
        speebook.push(ydata[i].Parts_Class);
        speebook.push(ydata[i].Unit_C); 
        speebook.push(ydata[i].Parts_Class+ydata[i].Parts_Rule); 
        speebook.push(ydata[i].Parts_Rule); 
        speebook.push(ydata[i].Supply_ID); 
        speebook.push(ydata[i].Model); 
        speebook.push(ydata[i].AssemblyTxt); 
        // speebook.push('0'); 
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    sheet1['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 5 } , { wch: 25 } ,
          { wch: 25 } , { wch: 80 } , { wch: 10 }  , { wch: 10 }  , { wch: 10 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
    //sheet2
    let camry = [];
    // 代码	属性代码	 标识号 	排序	描述(参考)	属性值(参考)
    let Ttitle2 = [ '代码' , '属性代码'  , '标识号', '属性来源' ,  '属性' , '物料属性键' ,  '属性值' ,  '无来源属性值'  ];
    camry.push(Ttitle2);
    for (var i = 0; i < zdata.length; i++) {
        let speebook = [];
        speebook.push(zdata[i].Parts_Code);
        speebook.push(zdata[i].MPSwift);
        speebook.push(zdata[i].ExpSN);
        speebook.push('1');
        speebook.push(zdata[i].PropDesc);
        speebook.push(zdata[i].PartsSort); 
        speebook.push(zdata[i].PropValue); 
        speebook.push(''); 
        // speebook.push(zdata[i].ExpMark);
        // speebook.push(zdata[i].ExpSrc);
        // speebook.push(zdata[i].ExpNoSr); 
        camry.push(speebook);
    }
    var sheet2 = XLSX.utils.json_to_sheet(camry, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet2, [], {
        origin: 'A1'  
    });
    sheet2['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 20 } ,{ wch: 20 }, { wch: 20 }, { wch: 20 } , { wch: 20 }, { wch: 20 }, { wch: 20 } ];
    var range = XLSX.utils.decode_range(sheet2['!ref']);
    sheet2['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < zdata.length + 2; i++) {
        sheet2['!rows'].push({ hpx: 25 });
    }
     
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "物料导入0" );
    XLSX.utils.book_append_sheet(wb, sheet2, "物料导入1"); 
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var swift = Math.random(100)*100; 
    swift = swift.toFixed(0);
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `物料基础数据` + Category + `-` + fname + swift + `.xlsx`);
}
function comeShow(paramC, paramP, paramU ,DateFinB, DateFinE) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    let ary2 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = ' A.`Parts_Code` ASC ';
    var myear='';
    var mrule='';
    var mpcode= paramP;
    let DateRange =getOneMonth();
    var weekbeg = DateFinB;
    var weekend = DateFinE; //建议默认为上月26~本月25，但需可选
    if (DateFinB =='' || (DateFinE =='')){
          weekbeg = DateRange[0].format("yyyy-MM-dd");
          weekend = DateRange[1].format("yyyy-MM-dd");
          console.log("本月少女:" +weekend);
    }
    console.log("weekbeg:"+weekbeg);
    console.log("weekend:"+weekend);
    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  A.Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    A.Parts_Rule =" + "'" + mrule + "'  ";
    }
    if (mpcode != "" && mpcode != "null" && mpcode != undefined && mpcode.length > 0) {
        console.log("编码", mpcode);
        filter += " AND    A.Parts_Code =" + "'" + mclass + "'";
    }
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("日期从", weekbeg);
        filter += " AND  A.Parts_Apply_Date >=  '" + weekbeg + "'  ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("日期到", weekend);
        filter += " AND  A.Parts_Apply_Date <= '" + weekend + "' ";
    }
   
    console.log("美新",filter);
    var reportType = 'asiaShow';
    var Deptunit = 'T0001';
    var Produce = '制造料';
    var taskData = { "reportType": reportType, "Deptunit": Deptunit, "Produce": Produce, "filter": filter,  "limit": limit, "orderBy": orderBy };
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
        ShipShow((ary1));
    });
}
function ShipShow(ydata) {
    let toyota = [];
    // 物料类型	物料类型名称	物料自动编码	版本号	物料关键字段类别	E值	F值

    // 物料类型	物料类型名称	物料自动编码	版本号	物料关键字段类别	E值	F值	备注	状态	内部标识号	创建人	创建人名称	最后修改人	
    // 最后修改人名称	核准人	核准人名称	创建时间	最后修改时间	核准时间	被用状态	打印次数	Email次数	输出次数
    	// 流程状态	变更状态	抛转状态	信息权限组	信息权限组名称	审核状态	附件	批注
    let Ttitle = [ '物料类型' ,   '物料类型名称' , '物料自动编码'  ,  '版本号' ,  '物料关键字段类别' ,  'E值' ,  'F值'  ,
      '备注' , '状态' , '内部标识号', '创建人' , '创建人名称' , '最后修改人' , '最后修改人名称', '核准人' ,'核准人名称','创建时间',
      '最后修改时间', '核准时间', '打印次数', 'Email次数', '输出次数' ,'流程状态','变更状态','抛转状态','信息权限组','信息权限组名称',
      '审核状态','附件','批注'];
    toyota.push(Ttitle);
    for (var i = 0; i < ydata.length; i++) {
        let speebook = [];
        // "Deptunit": Deptunit,
        // "Produce": Produce, 
        // "UniqueCode":  UniqueCode,
        // "Parts_Rule":  data[i].Parts_Rule,
        // "UniqueRule":  UniqueRule,
        // "E_value":  '0',
        // "F_value":  '0',
        // "Parts_Code":  data[i].Parts_Code,
        // "Parts_Apply_Date": data[i].Parts_Apply_Date,

        speebook.push(ydata[i].Deptunit);
        speebook.push(ydata[i].Produce);
        speebook.push(ydata[i].UniqueCode);
        speebook.push(ydata[i].Parts_Rule);
        speebook.push(ydata[i].UniqueRule);
        speebook.push(ydata[i].E_value);
        speebook.push(ydata[i].F_value); 
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    sheet1['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 25 }, { wch: 20 }, { wch: 20 } , { wch: 10 } ,
          { wch: 10 } , { wch: 10 } , { wch: 10 }  , { wch: 10 }  , { wch: 10 }, { wch: 10 }, { wch: 10 }];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "物料自动编码0" );
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var swift = Math.random(100)*100; 
    swift = swift.toFixed(0);
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `弘讯自动编码` + Category + `-` + fname + swift + `.xlsx`);
}
function comeProd(paramC, paramP, paramU ,DateFinB, DateFinE) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = '';
    var myear='';
    var mrule='';
    var mpcode= paramP;
    let DateRange =getOneMonth();
    var weekbeg = DateFinB;
    var weekend = DateFinE; //建议默认为上月26~本月25，但需可选
    if (DateFinB =='' || (DateFinE =='')){
          weekbeg = DateRange[0].format("yyyy-MM-dd");
          weekend = DateRange[1].format("yyyy-MM-dd");
          console.log("本月少女:" +weekend);
    }
    
    console.log("weekbeg:"+weekbeg);
    console.log("weekend:"+weekend);
    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  A.Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    A.Parts_Rule =" + "'" + mrule + "'  ";
    }
    if (mpcode != "" && mpcode != "null" && mpcode != undefined && mpcode.length > 0) {
        console.log("编码", mpcode);
        filter += " AND    A.Parts_Code =" + "'" + mclass + "'";
    }
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("日期从", weekbeg);
        filter += " AND  A.Parts_Apply_Date >=  '" + weekbeg + "'  ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("日期到", weekend);
        filter += " AND  A.Parts_Apply_Date <= '" + weekend + "' ";
    }
   
    console.log("美新",filter);
    var reportType = 'asiaProd';
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
        ShipProd((ary1));
    });
} 
function ShipProd(ydata) {
    let toyota = [];
    let Ttitle = [ '新编码' , '料号名称'  ,  '旧代码' , '旧规格'  , '属性' ];
    toyota.push(Ttitle);
    for (var i = 0; i < ydata.length; i++) {
        pclass = ydata[i].Parts_Chi;
        let speebook = [];
        speebook.push(ydata[i].Parts_Code);
        speebook.push(ydata[i].Parts_Name);
        speebook.push(ydata[i].Parts_Old_Code);
        speebook.push(ydata[i].Parts_Old_Name);
        speebook.push(ydata[i].Property);
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    sheet1['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 80 } ];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "物料"); 
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `弘讯物料规格` + Category + `-` + fname + `.xlsx`);
}
function comeProp(paramC, paramP, paramU ,DateFinB, DateFinE) {
    Category = paramC;
    var Pattern = '1';
    var OutSour = paramU;
    let ary1 = [];
    var limit = '25000';
    var filter = ' 1=1 ';
    var orderBy = '';
    var myear='';
    var mrule='';
    var mpcode= paramP;
    let DateRange =getOneMonth();
    var weekbeg = DateFinB;
    var weekend = DateFinE; //建议默认为上月26~本月25，但需可选
    if (DateFinB =='' || (DateFinE =='')){
          weekbeg = DateRange[0].format("yyyy-MM-dd");
          weekend = DateRange[1].format("yyyy-MM-dd");
          console.log("本月少女:" +weekend);
    }
    console.log("weekbeg:"+weekbeg);
    console.log("weekend:"+weekend);
    if (myear != "" && myear != "null" && myear != undefined && myear.length > 0) {
        console.log("年份", myear);
        filter += " AND  Parts_Year =" + "'" + myear + "'";
    }
    if (mrule != "" && mrule != "null" && mrule != undefined && mrule.length > 0) {
        console.log("原则", mrule);
        filter += " AND    Parts_Rule =" + "'" + mrule + "'  ";
    }
    if (mpcode != "" && mpcode != "null" && mpcode != undefined && mpcode.length > 0) {
        console.log("编码", mpcode);
        filter += " AND  Parts_Code =" + "'" + mpcode + "'";
    }
    if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
        console.log("日期从", weekbeg);
        filter += " AND  Parts_Date >=  '" + weekbeg + "'  ";
    }
    if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
        console.log("日期到", weekend);
        filter += " AND  Parts_Date <= '" + weekend + "' ";
    }
    console.log("小松",filter);
    var reportType = 'asiaProp';
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
        ShipProp((ary1));
    });
}
function ShipProp(ydata) {
    let toyota = [];
    let Ttitle = [ '旧规格' , '正航码'  , '顺序', '备注', '来源' , '描述' , '排序' , '属性值' , '无'];
    toyota.push(Ttitle);
    for (var i = 0; i < ydata.length; i++) {
        let speebook = [];
        speebook.push(ydata[i].Parts_Code);
        speebook.push(ydata[i].MPSwift);
        speebook.push(ydata[i].ExpSN);
        speebook.push(ydata[i].ExpMark);
        speebook.push(ydata[i].ExpSrc);
        speebook.push(ydata[i].PropDesc);
        speebook.push(ydata[i].PartsSort); 
        speebook.push(ydata[i].PropValue); 
        speebook.push(ydata[i].ExpNoSr); 
        toyota.push(speebook);
    }
    var sheet1 = XLSX.utils.json_to_sheet(toyota, { skipHeader: true });
    XLSX.utils.sheet_add_aoa(sheet1, [], {
        origin: 'A1'  
    });
    sheet1['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 20 } ,{ wch: 20 }, { wch: 20 }, { wch: 20 } , { wch: 20 }, { wch: 20 }, { wch: 20 } ];
    var range = XLSX.utils.decode_range(sheet1['!ref']);
    sheet1['!rows'] = [{ hpx: 40 }];
    for (var i = 0; i < ydata.length + 2; i++) {
        sheet1['!rows'].push({ hpx: 25 });
    }
     
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "物料" ); 
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `物料属性导出 ` + Category + `-` + fname + `.xlsx`);
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
function getOneMonth() {
    var now = new Date();
    var lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    var lastMonth = lastMonthDate.getMonth();
    var nowMonth = now.getMonth();
    var nowYear = now.getYear(); nowYear += (nowYear < 2000) ? 1900 : 0;

    let monday = new Date(nowYear, lastMonth, 26);
    let sunday = new Date();

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
