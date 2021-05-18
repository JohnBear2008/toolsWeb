//getRoute.js
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function (sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType = (sender.req.body.reportType);
    let url = [];
    switch (reportType) {
        case "analysisMate":
            url = ["BomTM",  "analy", "analysisMate"];
            break;
        case "visitStock":
            url = ["BomTM",  "analy", "visitStock"];
            break;
        case "factorHat":
            url = ["BomTM", "analy", "factorHat"];
            break;
        case "factorPrice":
            url = ["BomTM", "analy", "factorPrice"];
            break;
        case "factorWare":
            url = ["BomTM", "analy", "factorWare"];
            break;
        case "ReverseCab":
            url = ["BomTM", "ReverseCab"];
            break;
        case "cabinJet":
            url = ["BomTM", "cabinJet"];
            break;
        case "cabinT357":
            url = ["BomTM", "cabinT357"];
            break;
        case "wpsBOM":
            url = ["BomTM", "wpsBOM"];
            break;
        case "excelBOM":
            url = ["BomTM", "excelBOM"];
            break;
        case "StarCate":
            url = ["BomTM", "pull","StarCate"];
            break;
        case "StarGate":
            url = ["BomTM", "pull", "StarGate"];
            break;
        default:
            console.log("找不到BOM路由");
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