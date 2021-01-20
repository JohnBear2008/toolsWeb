var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;

module.exports = function (sender) {
    yjBizService.post({
        params: ["RP", "lib", "sms"],
        query: sender.req.body,
        success: function (data) {
            sender.success(data);
        },
        error: sender.error
    });
}