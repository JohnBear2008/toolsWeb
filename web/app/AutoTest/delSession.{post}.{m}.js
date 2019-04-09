var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var path = require("path");

module.exports = function(sender) {
    yjBizService.post({
        params: ["AutoTest", "delSession"], // Chenly 2018-10-15 关联：biz下的文件夹 与 文件.{m}.ejs
        query: sender.req.body,

        success: function(data) {
            sender.success(data); // Chenly 2018-10-15 如上biz文件内容执行成功则返回数据
        },
        error: sender.error
    });

};
