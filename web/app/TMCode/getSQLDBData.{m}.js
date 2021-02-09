var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
//    var LCID = yjMultiLang.getCurrentLCID();
//    sender.req.query.LCID = LCID;
// console.log("花勇闯160每箱，青岛纯生200");
    yjBizService.get({
        params: ["CodeTM", "getSQLDBData"],
        query: sender.req.query,

        success: function(data) {
            sender.success(data); 
        },
        error: sender.error
    });
};