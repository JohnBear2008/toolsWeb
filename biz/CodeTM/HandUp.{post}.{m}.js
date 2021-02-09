require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  

    var fs = require("fs");
    var path = require("path");
    var request = require("request");
    var http = require('http');
    const https = require("https");
    console.log("给你预约好了 美人鱼  "); 
    const Excel = require('exceljs');

	//cell style
	var fills = {
	    solid: {type: "pattern", pattern:"solid", fgColor:{argb:"FFFFAAAA"}}
	};
	
	//create a workbook
	var workbook = new Excel.Workbook();
	
	//add header
	var ws1 = workbook.addWorksheet("测试一");
	ws1.addRow(["地址","地面"]);
	ws1.addRow(["总人口", "不可计数"]);
	ws1.addRow(["类型", "动物", "非动物"]);
	ws1.addRow(["统计日期", "1111-11-11 11:11:11"]);
	ws1.addRow();
	
	//A6:E6
	ws1.addRow(["你", "在", "说些", "神马", "呢？"]);
	ws1.getCell("A6").fill = fills.solid;
	ws1.getCell("B6").fill = fills.solid;
	ws1.getCell("C6").fill = fills.solid;
	ws1.getCell("D6").fill = fills.solid;
	ws1.getCell("E6").fill = fills.solid;
	
	//7 - 13(A7:A13) - 7
	ws1.addRow(["什么跟神马", 10, 1, "凡人修仙传", 7]);
	ws1.addRow(["","","","一号遗迹", 2]);
	ws1.addRow(["","","","神楽遗迹", 0]);
	ws1.addRow(["","","","青龙一号", 0]);
	ws1.addRow(["","","","锻体期", 0]);
	ws1.addRow(["","","","合体期", 0]);
	ws1.addRow(["","","","没资质", 1]);
	
	
	ws1.mergeCells("A7:A13")
	ws1.mergeCells("B7:B13")
	ws1.mergeCells("C7:C13")
	
	//a6-e13 a b c d e
	//ws1.getCell('A7').alignment = { vertical: 'middle', horizontal: 'center' };
	
	rowCenter(ws1, 6, 13);　
	colWidth(ws1, [1,2,3,4,5], 20);
	
	var ws2 = workbook.addWorksheet("测试二");
	
	
	var ws3 = workbook.addWorksheet("测试三");
	
	//设置　start-end　行单元格水平垂直居中/添加边框
	function rowCenter(arg_ws, arg_start, arg_end) {
	    for(i = arg_start; i <= arg_end; i++) {
	        arg_ws.findRow(i).alignment = { vertical: 'middle', horizontal: 'center' };
	        //循环 row 中的　cell，给每个 cell添加边框
	        arg_ws.findRow(i).eachCell(function (cell, index) {
	            cell.border = {
	                top: {style:'thin'},
	                left: {style:'thin'},
	                bottom: {style:'thin'},
	                right: {style:'thin'}
	            };
	        })
	
	    }
	}
	
	//设置　start-end 列的宽度
	function colWidth(arg_ws, arg_cols, arg_width) {
	    for(i in arg_cols) {
	        arg_ws.getColumn(arg_cols[i]).width = arg_width;
	    }
	}
	
	//
	workbook.xlsx.writeFile('.\\client\\images\\test3.xlsx')
	    .then(function(){
	        console.log('生成 xlsx');
	        var fs = require("fs");
	        var path = require("path");
	        var request = require("request");
	        //下载
	        var fileName = "test3.xlsx";
	        fs.createReadStream("client/images/" + fileName).pipe(fs.createWriteStream("web/"+ fileName));  
	     
	        var exec = require('child_process').exec;
	        exec('explorer.exe /select,"D:\\work888\\TOOLSWEB\\toolsWeb\\web\\test3.xlsx"');	
	        sender.success({status:"生成test3.xlsx"});
	});

    
    
//    var filePath = path.join(__dirname, fileName); 
//  var file = fs.createWriteStream("web/"+ fileName); 
//
//  var request = http.get("http://127.0.0.1:2019/images/"+ fileName, function (response) { 
//       response.pipe(file); 
//  }); 
 
//    try {
//     await saveFileWithStream("web/"+ fileName, "Buffer"); // 这里的fileData是Buffer类型
//    } catch (err) {
//     console.log(err.stack);
//    }
	 
//    static saveFile(filePath, fileData) {
//    	 return new Promise((resolve, reject) => {
//    	  // 块方式写入文件
//    	  const wstream = fs.createWriteStream(filePath);
//    	 
//    	  wstream.on('open', () => {
//    	   const blockSize = 128;
//    	   const nbBlocks = Math.ceil(fileData.length / (blockSize));
//    	   for (let i = 0; i < nbBlocks; i += 1) {
//    	    const currentBlock = fileData.slice(
//    	     blockSize * i,
//    	     Math.min(blockSize * (i + 1), fileData.length),
//    	    );
//    	    wstream.write(currentBlock);
//    	   }
//    	 
//    	   wstream.end();
//    	  });
//    	  wstream.on('error', (err) => { reject(err); });
//    	  wstream.on('finish', () => { resolve(true); });
//    	 });
//  }
     
 

   console.log("get:"+JSON.stringify(sender.req.query)); 
   var obj = sender.req.query;
  	
 
//    var param1=sender.req.query.custom;  
//    console.log("客户参数:"+param1); 
//    var DBTable=sender.req.query.DBTable;  
//    var sqlGetTableData = "SELECT * FROM "+DBTable;
//    sqlGetTableData = "SELECT * FROM ms_agent where FID=?  ";
//    
//    yjDBService.exec({
//        sql: sqlGetTableData,
//        parameters: [param1],
//        rowsAsArray: false, 
//        success: function(result) {
//            sender.success(result);
//        },
//        error: sender.error
//    });
};