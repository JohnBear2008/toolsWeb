module.exports = function(sender) {
	
	 var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	    
	     console.log("get:"+JSON.stringify(sender.req.query));
	     
//	     var mailData=sender.req.query;
	     
	     var dataRows=sender.req.query.dataRows;
	     var fnum=sender.req.query.fnum;
	     var frate=sender.req.query.frate;
	
	
	
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'TMDGMAIL.tmdg.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'xiongql', // generated ethereal user
            pass: '338168' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'xiongql@tmdg.com', // sender address
        to: 'xiongql@tmdg.com', // list of receivers
        subject: 'Hello nodemailer', // Subject line
        text: 'Hello nodemailer', // plain text body
        html: '<table border="1"><caption>报表示例</caption><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody>'+
        	'<tr><td>订单总数</td>     <td>'+dataRows+'</td></tr>'+
        	'<tr><td>已完成订单数</td>  <td>'+fnum+'</td></tr>'+
        	'<tr><td>完成率</td>      <td>'+frate+'</td></tr>'+
            '</tbody></table>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            sender.error;
        }
        console.log('Message sent: %s', info.messageId);
        
        sender.success("mailsend");
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});



   
    
////   console.log("PM2333 test");
//       
//    var obj=sender.req.query;
//    
//    var tableTitle="";
//    var tableData="";
//    
//    for(var key in obj){ 	
//    	if(key=="DBTable"){
//    		var DBTable=obj[key];
//    	}else{
//    		tableTitle=tableTitle+key+",";
//    		tableData=tableData+"'"+obj[key]+"',";
//    	}
//    }
//    
//    tableTitle=tableTitle.substr(0, tableTitle.length - 1);  
//    tableData=tableData.substr(0, tableData.length - 1);  
//    
//    
//////    console.log("tableTitle:"+tableTitle);
////	console.log("tableData:"+tableData);
//	
//var SQLInsert="insert into "+DBTable+" ("+tableTitle+") values "+"("+tableData+")";
//
//
////var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";
////	console.log("SQLInsert:"+SQLInsert);
//
//    yjDBService.exec({
//        sql: SQLInsert,
//        parameters: [],
//        success: sender.success,
//        error: sender.error
//    });


};