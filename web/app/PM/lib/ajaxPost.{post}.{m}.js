var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var path = require("path");
module.exports = function (sender) {
    yjBizService.post({
        params: ["PM", "lib", "ajaxPost"],
        // query : sender.req.body,//header错误
        data: sender.req.body,
        success: function (data) {
            sender.success(data);
        },
        error: sender.error
    });
}