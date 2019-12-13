//xlsExport.js

function enterShip() {
    var SQL2A ={"SQL":"SQLShipment"};
    
    let ary1=[];
    let ary1h=[];  
    let ary2a=[];
    let ary2b=[];
    let ary3=[]; 
    let DateRange =getWeekRange();
    var weekbeg = DateRange[0].format("yyyy-MM-dd");
    var weekend = DateRange[1].format("yyyy-MM-dd");
    //testdata for page3
    weekbeg='2019-11-20';  
    weekend='2019-11-24';  
    console.log("weekbeg:"+weekbeg);
    console.log("weekend:"+weekend);
    var SQL1 ={"reportType":'RateIdv',"weekbeg":weekbeg,"weekend":weekend};
    var SQL1H ={"reportType":'TaskIdv',"weekbeg":weekbeg,"weekend":weekend};
    var SQL3 = {"SQL":"SQLNotDone","weekbeg":weekbeg,"weekend":weekend};
    var SQL2 = {"reportType":'route',"custom":'7HT' };
    var SQL2A ={"reportType":'RateDpt',"weekbeg":weekbeg,"weekend":weekend};
    var SQL2B ={"SQL":"SQLLateList","weekbeg":weekbeg,"weekend":weekend};
    let ajax1h = $.ajax({
        url: '/app/PM/getRoute',
		data: SQL1H,
		success: function(data) {
            ary1h=(data); 
	   },
        error:function(err){
            alert("失败数据:"+JSON.stringify(err));
        }
    }); 
    let ajax1 = $.ajax({
        url: '/app/PM/getRoute',
		data: SQL1,
		success: function(data) {
            ary1=(data); 
	   },
        error:function(err){
            alert("失败数据:"+JSON.stringify(err));
        }
    }); 

    
    let ajax2a = $.ajax({
        url: '/app/PM/getRoute',
		data: SQL2A, 
		success: function(data) {
            ary2a=(data); 
	   },
        error:function(err){
            alert("失败数据:"+JSON.stringify(err));
        }
    }); 
    let ajax2b = $.ajax({
        url: '/app/PM/getSQLDBData', 
		data: SQL2B, 
		success: function(data) {
            ary2b=(data); 
	   },
        error:function(err){
            alert("失败数据:"+JSON.stringify(err));
        }
    }); 
    let ajax3 = $.ajax({
        url: '/app/PM/getSQLDBData', 
		data: SQL3,
		success: function(data) { 
            ary3=data;
            //  console.log("字串数据:" + JSON.stringify(data));
	   },
        error:function(err){
            alert("失败数据:"+JSON.stringify(err));
        }
    }); 
    $.when(ajax1h, ajax1,  ajax2a, ajax2b, ajax3 ).done(function () {
           ShipStat((ary1h),(ary1),(ary2a),(ary2b),(ary3));
    });	
}
function ShipStat(mdataH, mdata, kdataA, kdataB, ydata) {
	 
    let kiss =[];
    let head =[  '个人出货情况统计（数据源：PM登记&MAIL信息）' ];
    let subhead =[  '类别','','本周总单','','已完成总单','','','待修改总单',''  ];
    let divhead =[  '', '','上周遗留','本周新单','按时完成','延期已完成','客户取消','延期未完成','期限未到' ];
    // let datahead =[  '宁波PPM记录','', '16','20','15','20','15','20','31'  ];
    let spacehead =[  ' ' ];
    kiss.push( head );
    kiss.push( subhead );
    kiss.push( divhead );
 
    let sheet1data=[];
    for (var i=0; i<mdataH.length; i++) {
        sheet1data.push('宁波PPM记录'); 
        sheet1data.push(''); 
        sheet1data.push(mdataH[i].Bill_STAT1); 
        sheet1data.push(mdataH[i].Bill_STAT2);
        sheet1data.push(mdataH[i].Bill_STAT3);  
        sheet1data.push(mdataH[i].Bill_STAT4);
        sheet1data.push(mdataH[i].Bill_STAT5);  
        sheet1data.push(mdataH[i].Bill_STAT6);  
        sheet1data.push(mdataH[i].Bill_STAT7);  
   }
    kiss.push( sheet1data );
    kiss.push( spacehead );

    let title =[  '个人出货情况统计（数据源：PM登记&MAIL信息）' ];
    let subtitle =[  '组别','姓名','本周总单','','已完成总单','','','待修改总单','','延误率' ];
    let divtitle =[  '','','上周遗留','本周新单','按时完成','延期已完成','客户取消','延期未完成','期限未到' ];
    
    kiss.push( title );
    kiss.push( subtitle );
    kiss.push( divtitle );
    console.log("分页1笔数:" +  mdata.length);
    // console.log("分页3笔数:" +  kdata.length);
    for (var i=0; i<mdata.length; i++) {
         let speebook = [];
        //  console.log("分页1数据:" + mdata[i].SHIPTYPE );
         speebook.push(mdata[i].SHIPTYPE);
         speebook.push(mdata[i].Staff);  
         speebook.push(mdata[i].Bill_STAT1); 
         speebook.push(mdata[i].Bill_STAT2);
         speebook.push(mdata[i].Bill_STAT3);  
         speebook.push(mdata[i].Bill_STAT4);  
         speebook.push(mdata[i].Bill_STAT5);  
         speebook.push(mdata[i].Bill_STAT6);  
         speebook.push(mdata[i].Bill_STAT7);  
         speebook.push(mdata[i].Bill_STAT8);  
         kiss.push(speebook); 
    }
    var sheet1 = XLSX.utils.aoa_to_sheet(kiss);   
 
    // var sheet =  XLSX.utils.json_to_sheet(sheetdata);

    sheet1['!cols'] = [{wch: 8}, {wch: 10},  {wch: 10}, {wch: 10},{wch: 10},{wch: 10},{wch: 10},{wch: 10},{wch: 10},{wch: 10}];
    sheet1['!rows'] = [{hpx: 40} ,{hpx: 40} ,{hpx: 40} ,{hpx: 40} ,{hpx: 40} ,{hpx: 40} ,{hpx: 30} ];
    for (var i=0; i<mdata.length+1; i++) {
        sheet1['!rows'].push({hpx: 25});
    }
   
    sheet1["!merges"] = [
        {  //合并第0行 第1列到第8列 个人出货情况 
            s: {
                c: 0,                r: 0
            },
            e: {
                c: 8,                r: 0
            }
        } ,
        {  //合并第1行   本周总单
            s: {
                c: 2,                r: 1
            },
            e: {
                c: 3,                r: 1
            }
        } ,
        {  //合并第1行    已完成总单
            s: {
                c: 4,                r: 1
            },
            e: {
                c: 6,                r: 1
            }
        } ,
        {  //合并第1行   待修改总单  
            s: {
                c: 7,                r: 1
            },
            e: {
                c: 8,                r: 1
            }
        } ,
        {  //合并第3行  宁波 
            s: {
                c: 0,                r: 3
            },
            e: {
                c: 1,                r: 3
            }
        } , 
        {  //合并第5行 第1列到第8列 个人出货情 
            s: {
                c: 0,                r: 5
            },
            e: {
                c: 8,                r: 5
            }
        } , 
        {  //合并第6行    本周总单
            s: {
                c: 2,                r: 6
            },
            e: {
                c: 3,                r: 6
            }
        } , 
        {  //合并第6行      已完成总单
            s: {
                c: 4,                r: 6
            },
            e: {
                c: 6,                r: 6
            }
        } , 
        {  //合并第6行   第9列到第10列  待修改总单
            s: {
                c: 7,                r: 6
            },
            e: {
                c: 8,                r: 6
            }
        }, 
        {  //合并第0列 第6行到第7行   组别 
            s: {
                c: 0,                r: 6
            },
            e: {
                c: 0,                r: 7
            }
        }, 
        {  //合并第1列 第6行到第7行  姓名 
            s: {
                c: 1,                r: 6
            },
            e: {
                c: 1,                r: 7
            }
        } , 
        {  //合并第2列 第6行到第7行 延误率 
            s: {
                c: 9,                r: 6
            },
            e: {
                c: 9,                r: 7
            }
        }
       ]
       //sheet2
       let title2 =[  '软件部出货总况（数据源：PM登记&MAIL信息）' ];
       let finary =[]; 
    finary.push( title2 );
    let sub2title =[  '类别','本周总单','','已完成总单','','','待修改总单','','' ];
    let div2title =[  '','上周遗留','本周新单','按时完成','延期已完成','客户取消','延期未完成','期限未到','其他' ];
    finary.push( sub2title );
    finary.push( div2title );
 
    let sheet2data=[];
    for (var i=0; i<kdataA.length; i++) {
        sheet2data.push(kdataA[i].SHIPTYPE); 
        sheet2data.push(kdataA[i].Bill_STAT1); 
        sheet2data.push(kdataA[i].Bill_STAT2);
        sheet2data.push(kdataA[i].Bill_STAT3);  
        sheet2data.push(kdataA[i].Bill_STAT4);
        sheet2data.push(kdataA[i].Bill_STAT5);  
        sheet2data.push(kdataA[i].Bill_STAT6);  
        sheet2data.push(kdataA[i].Bill_STAT7);  
        sheet2data.push(kdataA[i].Bill_STAT8); 
   }
        finary.push( sheet2data );

    var calc = 2;//宁波PM记录為1 +空白行1 =2 
   
    let space2B =[  ' ' ];
    let title2B =[  '软件出货情况分析' ];
    let sub2Btitle =[ '软体出货延误率（目标值2%）','','','','','完成率','','','' 	];
    let div2Btitle =[ '延期单数/本周总出货数','','','','','已完成总单/本周总单','','','' 	];		
    // let sheet2Bdata = [  '0.0%','','','','', '97.4%' ,'','','' ];
    let sheet2Bdata=[];
    for (var i=0; i<kdataA.length; i++) {
        sheet2Bdata.push(kdataA[i].PERC_LATE); 
        sheet2Bdata.push(''); 
        sheet2Bdata.push(''); 
        sheet2Bdata.push(''); 
        sheet2Bdata.push(''); 
        sheet2Bdata.push(kdataA[i].PERC_DONE);  
        sheet2Bdata.push(''); 
        sheet2Bdata.push(''); 
        sheet2Bdata.push(''); 
   }

    finary.push( space2B );
    finary.push( title2B );
    finary.push( sub2Btitle );
    finary.push( div2Btitle );
    finary.push( sheet2Bdata );

    let space3B =[  ' ' ];
    let title3B =[  '软体出货延误率--延期单数' ];
    let sub3Btitle =[ '单号','完成期限','面板修改人','主机修改人','厂商','修改内容','','','','延期时间','延期原因','面板完成日期','主机完成日期' 	];
    finary.push( space3B );
    finary.push( title3B );
    finary.push( sub3Btitle );

    console.log("web分页2延期表单 "+ kdataB.length ); 
    var latecnt =  kdataB.length ;
    for (var i=0; i<kdataB.length; i++) {
        let speebook = []; 
        speebook.push(kdataB[i].BPID);
        speebook.push(kdataB[i].limitDate); 
        speebook.push(kdataB[i].PGEMaker); 
        speebook.push(kdataB[i].taskStaffs); 
        speebook.push(kdataB[i].CTRName);
        speebook.push(kdataB[i].topic_cut);  
        speebook.push('');  
        speebook.push('');  
        speebook.push('');  
        speebook.push(kdataB[i].applyDate);  
        speebook.push(kdataB[i].auditOpinion);  
        speebook.push(kdataB[i].WFEndDate);  
        speebook.push(kdataB[i].auditDate);  
        finary.push(speebook); 
   }

 
       var sheet2 = XLSX.utils.aoa_to_sheet(finary);
 

       sheet2["A5"].s = { 
        font: { sz: 23, bold: true, },
        alignment: { 
            horizontal: "center", vertical: "center", wrap_text: true 
        } 
        };
 
       sheet2['!cols'] = [{wch: 15}, {wch: 15},  {wch: 15},{wch: 15}, {wch: 15},
                          {wch: 15},{wch: 15},{wch: 15},{wch: 15},{wch: 15},
                          {wch: 15},{wch: 15},{wch: 15},{wch: 15}  ];
       sheet2['!rows'] = [{hpx: 40}, {hpx: 40}, {hpx: 40}, {hpx: 40},{hpx: 40},
                         {hpx: 40}, {hpx: 40}, {hpx: 40} , {hpx: 40} , {hpx: 40},
                         {hpx: 40}, {hpx: 40}, {hpx: 40} , {hpx: 40} , {hpx: 40}];
       sheet2["!merges"] = [
        {  //合并第1行 第1列到第9列 个人出货情
            s: {
                c: 0, r: 0
            },
            e: {
                c: 8, r: 0
            }
        }, 
        {  //合并第2行 第4列到第5列  本周总单
            s: {
                c: 1, r: 1
            },
            e: {
                c: 2, r: 1
            }
        } , 
        {  //合并第2行   第6列到第8列  已完成总单
            s: {
                c: 3, r: 1
            },
            e: {
                c: 5, r: 1
            }
        } , 
        {  //合并第2行   第9列到第10列  待修改总单
            s: {
                c: 6,r: 1
            },
            e: {
                c: 8,r: 1
            }
        } , 
        {  //合并第4行     空白
            s: {
                c: 0,  r: (2+calc)
            },
            e: {
                c: 8, r: (2+calc)
            }
        }  , 
        {  //合并第4行     软件出货情况分析
            s: {
                c: 0,  r: (3+calc)
            },
            e: {
                c: 8, r: (3+calc)
            }
        }   , 
        {  //合并第5行     目标值2%
            s: {
                c: 0,   r: (4+calc)
            },
            e: {
                c: 4,  r: (4+calc)
            }
        }   , 
        {  //  完成率
            s: {
                c: 5, r:(4+calc)
            },
            e: {
                c: 8,   r: (4+calc)
            }
        }    , 
        {  //合并第6行     延期单数/本
            s: {
                c: 0,  r: (5+calc)
            },
            e: {
                c: 4,   r: (5+calc)
            }
        }   , 
        {  // 已完成总单/本
            s: {
                c: 5,  r: (5+calc)
            },
            e: {
                c: 8, r: (5+calc)
            }
        }     , 
        {  //合并第7行    
            s: {
                c: 0,   r: (6+calc)
            },
            e: {
                c: 4,  r: (6+calc)
            }
        }   , 
        {  // 
            s: {
                c: 5,   r: (6+calc)
            },
            e: {
                c: 8,   r: (6+calc)
            }
        }  , 
        {  // 空白3
            s: {
                c: 0,   r: (7+calc)
            },
            e: {
                c: 12,   r: (7+calc)
            }
        }    , 
        {  // 延期单数
            s: {
                c: 0,   r: (8+calc)
            },
            e: {
                c: 12,   r: (8+calc)
            }
        } , 
        {  // 修改内容
            s: {
                c: 5,   r: (9+calc)
            },
            e: {
                c: 8,   r: (9+calc)
            }
        }  
       ]
       for (var i=0; i<kdataB.length+10; i++) {
            sheet2['!rows'].push({hpx: 40});
       }
       for (var i=0; i<kdataB.length; i++) { // 延单表格需要回圈
            sheet2['!merges'].push({
            s: {
                c: 5,   r: (12+i)
            },
            e: {
                c: 8,   r: (12+i)
            }});
       }
      //sheet3   
    var sheet3 = XLSX.utils.json_to_sheet(ydata,{ skipHeader:true });
    XLSX.utils.sheet_add_aoa(sheet3,[
        ['单号','客户','任务人','型态','申请日期','完成期限','备注','']
    ],{
        origin:'A1' // 从A1开始增加内容
    });
    sheet3['!cols'] = [{wch: 20}, {wch: 15},{wch: 15},{wch: 15},{wch: 15}
                      ,{wch: 15},{wch: 60}];
     var range = XLSX.utils.decode_range(sheet3['!ref']); 
     sheet3['!rows'] = [{hpx: 40}];
    for (var i=0; i<ydata.length+2; i++) {
        sheet3['!rows'].push({hpx: 25});
    } 
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1,"个人出货状态" );
    XLSX.utils.book_append_sheet(wb, sheet2,"软体出货统计" );
    XLSX.utils.book_append_sheet(wb, sheet3, "未完成单数"); 
    const workbookBlob = workbook2blob(wb);
    let now = new Date();
    var fname = new Date(now).Format("yyyy-MM-dd");
    openDownloadDialog(workbookBlob, `软体部一周出货统计`+fname+`.xlsx`);
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
    csv.forEach(function(row, i) {
        row = row.split(',');
        if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
        row.forEach(function(col, j) {
            sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
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
    var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
    // 字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}
 
function openDownloadDialog(url, saveName)
{
    if(typeof url == 'object' && url instanceof Blob)
    {
        url = URL.createObjectURL(url); // 创建blob地址
    }

    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if(window.MouseEvent) event = new MouseEvent('click');
    else
    {
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
function getWeekRange() {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayTime = now.getTime() - (now.getDay() - 1) * oneDayLong;
    let sundayTime = now.getTime() + (7 - now.getDay()) * oneDayLong;
    let monday = new Date(mondayTime);
    let sunday = new Date(sundayTime);
    let weekRange = [monday, sunday];

    return weekRange;
}
