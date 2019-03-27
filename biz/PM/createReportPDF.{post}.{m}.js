require("../../client/js/Date.js");
 

module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
//    console.log("get:"+JSON.stringify(sender.req.query));
    
    
    var fs = require('fs');
    var pdf = require('html-pdf');
    var html = sender.req.query.htmlContent;
    var BTID = sender.req.query.BTID;
//    var options = { format: 'Letter' };
    var options = { format: 'html' };
  
    var reportName=BTID+"_IPQC";
  
    pdf.create(html, options).toFile('./uploaded/'+reportName+'.pdf', function(err, res) {
	  if (err) return console.log(err);
//	  console.log(res); // { filename: '/app/businesscard.pdf' }

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