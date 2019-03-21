require("../../client/js/Date.js");
 

module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
    console.log("get:"+JSON.stringify(sender.req.query));
    
    
    var fs = require('fs');
    var pdf = require('html-pdf');
    var html = sender.req.query.htmlContent;
//    var options = { format: 'Letter' };
    var options = { format: 'html' };
  
    var reportName="IPQC"+ (new Date()).Format('yyyyMMddHHmmSS');
  
    pdf.create(html, options).toFile('./PPMReports/'+reportName+'.pdf', function(err, res) {
	  if (err) return console.log(err);
	  console.log(res); // { filename: '/app/businesscard.pdf' }
	  

	  sender.success(res);
	});

//yjDBService.exec({
//    sql: SQLInsert,
//    parameters: [],
//    success:  function(result) {
// //   	console.log("result:"+JSON.stringify(result));
//
//    	sender.success(result)
//    },
//    error: {},
//});
//sender.success({status:1})

};