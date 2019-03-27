module.exports = function(sender) {
	
	 var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	    
//	     console.log("get:"+JSON.stringify(sender.req.query));
	     
//	     var mailData=sender.req.query;
	     var pbhBPID=sender.req.query.pbhBPID;
	     var emailResult=sender.req.query.emailResult;
	     
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
		    			 path:'./uploaded/upload_'+emailFiles[i].fileKey
		    	 }
		    	 attachmentfiles.push(j);
		    	 
		     }
		     
		   

		     
		
		
		
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
	        to: emailADRS, // list of receivers
	        cc:emailCopyADRS,
	        subject:emailTitle, // Subject line
//	        text: 'Hello nodemailer', // plain text body
	        html:'<div style="white-space:pre">'+emailContent+'</div>',
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