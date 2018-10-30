var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();

    sender.req.query.LCID = LCID;
    yjBizService.get({
        params: ["HMIPrint", "getMoniInfo"], // Chenly 2018-10-15 关联：biz下的文件夹 与 文件.{m}.ejs
        query: sender.req.query,

        success: function(data) {
            sender.success(data); // Chenly 2018-10-15 如上biz文件内容执行成功则返回数据
        },
        error: sender.error
    });
};