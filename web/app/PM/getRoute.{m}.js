var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function (sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType = (sender.req.query.reportType);
    // console.log("路由  "+reportType); 
    let url = [];
    switch (reportType) {
        case "TaskIdv_t":
            url = ["PM", "qryTaskIdv_t"];
            break;
        case "TaskIdv":
            url = ["PM", "qryTaskIdv"];
            break;
        case "RateDpt":
            url = ["PM", "qryRateDpt"];
            break;
        case "RateIdv":
            url = ["PM", "qryRateIdv"];
            break;
        case "RateIdv_t":
            url = ["PM", "qryRateIdv_t"];
            break;
        case "RateDpt":
            url = ["PM", "qryRateDpt"];
            break;
        default:
            console.log(" 不良率找不到路由");
            // url = ["PM", "qryRateDpt"]; 
            break;
    }
  
    yjBizService.get({
        params: url,
        query: sender.req.query,
        success: function (data) {
            sender.success(data);
        },
        error: sender.error
    });
};