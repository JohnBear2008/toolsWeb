//getRouteLab.js
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function (sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType = (sender.req.body.reportType);
    let url = [];
    switch (reportType) {
        case "starWar":
            url = ["ErpTM", "starWar"];
            break;
        case "OrderVisit":
            url = ["SaleTM", "OrderVisit"];
            break;
        case "vsInvoBill":
            url = ["FincTM", "vsInvoBill"];
            break;
        case "visitTranAR":
            url = ["FincTM", "visitTranAR"];
            break;
        case "FincHead":
            url = ["FincTM", "FincHead"];
            break;
        case "FincH":
            url = ["FincTM", "FincH"];
            break;
        case "OrderV":
            url = ["FincTM", "OrderV"];
            break;
		case "ironSubject":
            url = ["BguTM", "ironSubject"];
            break;
		case "applyBudget":
            url = ["BguTM", "applyBudget"];
            break;
		case "BulletQuery":
            url = ["BguTM", "BulletQuery"];
            break;
		case "CherryFee":
            url = ["BguTM", "CherryFee"];
            break;
		case "agreeFee":
            url = ["BguTM", "agreeFee"];
            break;
		case "rejectFee":
            url = ["BguTM", "rejectFee"];
            break;
		case "FeeHead":
            url = ["BguTM", "FeeHead"];
            break;
		case "FeeHisVisit":
            url = ["BguTM", "FeeHisVisit"];
            break;
        default:
            console.log("找不到Finc路由");
            break;
    }

    yjBizService.post({
        params: url,
        query: sender.req.body,
        success: function (data) {
            //                console.log("post方法路由:"+JSON.stringify(data));
            sender.success(data);
        },
        error: {}
    });


};