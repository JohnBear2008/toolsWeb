// var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
// var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();

    sender.req.query.LCID = LCID;
    sender.success({ LCID: LCID });
};
