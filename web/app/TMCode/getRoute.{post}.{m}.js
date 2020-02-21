//getRouteLab.js
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType =(sender.req.body.reportType );
    // console.log("post方式前端 :"+ (sender.req.body.reportType )); 
    // console.log("post方式前端 :"+JSON.stringify(sender.req.body.reportType )); 
    console.log("路由啥 "+reportType); 
    let url=[];
    switch (reportType){
        case "absoletePcode": 
            url = ["CodeTM", "absoletePcode"]; 
//            console.log("编路由  "+reportType); 
            break;
        case "delNouse": 
            url = ["CodeTM", "delNouse"]; 
            break; 
        case "parseRec": 
            url = ["CodeTM", "parseRec"];  
//            console.log("编码路由  "+reportType); 
            break;     
        case "goldRec": 
        	url = ["CodeTM", "goldRec"];  
//        	console.log("编码路由  "+reportType); 
        	break;     
        case "applyPcode": 
            url = ["CodeTM", "applyPcode"]; 
//            console.log("编码路由  "+reportType); 
            break;    
        case "agreePcode": 
        	url = ["CodeTM", "agreePcode"]; 
       	console.log("编码路由  "+reportType); 
        	break;    
        case "rejectPcode": 
        	url = ["CodeTM", "rejectPcode"]; 
        	console.log("编码路由  "+reportType); 
        	break;    
        default:
            console.log("找不到路由" ); 
            break;
    }
  
        yjBizService.post({
            params : url,
            query : sender.req.body,
            success : function(data){
//                console.log("post方法路由:"+JSON.stringify(data));
                sender.success(data);
            },
            error : {}
        });
 
    
};