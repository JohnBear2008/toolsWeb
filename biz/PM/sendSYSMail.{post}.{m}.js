module.exports = function(sender) {
	
	 var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	    
//	     console.log("get:"+JSON.stringify(sender.req.query));
	     
//	     var mailData=sender.req.query;
	     var pbhBPID=sender.req.query.pbhBPID;
	     var emailResult=sender.req.query.emailResult;
	     var emailDSPInfo=sender.req.query.emailDSPInfo
	     var emailHMIInfo=sender.req.query.emailHMIInfo
	     
	     
	     var emailContentHello=sender.req.query.emailContentHello
	     var emailContentModel=sender.req.query.emailContentModel.replace(/\n|\r\n/g,'<br/>')
	     
	     console.log("emailContentModel:"+emailContentModel)
	     
	     var SQLUpdate=" update `ppm_bills_pbh` set emailResult =? where pbhBPID=?";
	     
	     
	     if(emailResult=="1"){
	    	 

		     var emailADRS=sender.req.query.emailADRS;
		     var emailCopyADRS=sender.req.query.emailCopyADRS;
		     var emailTitle=sender.req.query.emailTitle;
		     var emailFiles=JSON.parse(sender.req.query.emailFiles);
		     var emailContent=sender.req.query.emailContent;
		     
		     
		     var attachmentfiles=[];
		     for(var i=0;i<emailFiles.length;i++){
		    	 var j={
		    			 filename:emailFiles[i].fileName,
		    			 path:'./uploaded/'+emailFiles[i].fileKey
		    	 }
		    	 attachmentfiles.push(j);
		    	 
		     }
		     

		
	const nodemailer = require('nodemailer');

	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	nodemailer.createTestAccount((err, account) => {
	    // create reusable transporter object using the default SMTP transport
	    let transporter = nodemailer.createTransport({
	        host: 'mail.techmation.com.cn',
	        port: 25,
	        secure: false, // true for 465, false for other ports
	        auth: {
	            user: 'servicetech', // generated ethereal user
	            pass: 'rw563346' // generated ethereal password
	        }
	    });

	    // setup email data with unicode symbols
	    let mailOptions = {
	        from: 'servicetech@techmation.com.cn', // sender address
	        to: emailADRS, // list of receivers
	        cc:emailCopyADRS,
	        subject:emailTitle, // Subject line
//	        text: 'Hello nodemailer', // plain text body
	        
//	        html:emailContentModel,
	        
//	        html:'<div style="white-space:pre">'+emailContent+'</div>',
	        html:'<div style="white-space:pre;">'+emailContentHello+'</div>'+
	            '<table width="60%" table border="1" cellspacing="0">'+
	            '<tr>'+
	              '<td colspan="2">'+
	              '<p  align="center">出货附件档案说明</p>'+
	              '<p  align="right">表单编号：TMC011 版次：1 </p>'+
	              '</td>'+
	            '</tr>'+
	           
	            '<tr>'+
	              '<td width="100">需求单编号：</td>'+
	              '<td><div>'+pbhBPID+'</div></td>'+
	            '</tr>'+
	            '<tr>'+
	              '<td>主机：</td>'+
	              '<td><div>'+emailDSPInfo+'</div></td>'+
	            '</tr>'+
	            '<tr>'+
	              '<td>面板：</td>'+
	              '<td><div>'+emailHMIInfo+'</div></td>'+
	            '</tr>'+
	           
	            '<tr>'+
	              '<td colspan="2">'+
	              
	              '<div>'+emailContentModel+

	              '</div>'+
	              
	              '</td>'+
	            '</tr>'+
	          '</table>',
	        attachments:attachmentfiles
	    };

	    // send mail with defined transport object
	    transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	            sender.error;
	        }
//	        console.log('Message sent: %s', info.messageId);

	            yjDBService.exec({
	                sql: SQLUpdate,
	                parameters: [emailResult,pbhBPID],
	                success: sender.success,
	                error: sender.error
	            });

	        
	        sender.success("mailsend");
	        // Preview only available when sending through an Ethereal account
//	        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	    });
	});

	    	 
	     }else if(emailResult=="2"){
	    	 
	    	 yjDBService.exec({
	                sql: SQLUpdate,
	                parameters: [emailResult,pbhBPID],
	                success: sender.success,
	                error: sender.error
	            });
	    	 
	    	 
	     }


};