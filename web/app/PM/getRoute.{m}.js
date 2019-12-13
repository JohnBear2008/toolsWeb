var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType =(sender.req.query.reportType );
    let url=[];
    switch (reportType){
      
        case "TaskIdv":
            url = ["PM", "qryTaskIdv"]; 
            console.log("我是PM-qryTaskIdv");
            break;
        case "RateDpt":
            url = ["PM", "qryRateDpt"]; 
            console.log("我是PM-qryRateDpt");
            break;
        case "RateIdv":
            url = ["PM", "qryRateIdv"]; 
            console.log("我是PM-qryRateIdv");
            break;
        case "RateDpt":
            url = ["PM", "qryRateDpt"],
            console.log("我是PM-qryRateDpt");
            break;
        default:
            console.log(" 不良率找不到路由" );
            // url = ["PM", "qryRateDpt"]; 
            break;
    }

    yjBizService.get({
         params : url,   
        query: sender.req.query,
        success: function(data) {
            sender.success(data);  
        },
        error: sender.error
    });
};