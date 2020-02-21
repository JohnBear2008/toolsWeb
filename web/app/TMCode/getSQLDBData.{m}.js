var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
//    var LCID = yjMultiLang.getCurrentLCID();
// console.log("你姓啥");
//    sender.req.query.LCID = LCID;
    yjBizService.get({
        params: ["CodeTM", "getSQLDBData"],
        query: sender.req.query,

        success: function(data) {
            sender.success(data); 
        },
        error: sender.error
    });
};