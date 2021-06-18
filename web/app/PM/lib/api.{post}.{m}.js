/*
 * @Author: your name
 * @Date: 2021-06-18 13:14:16
 * @LastEditTime: 2021-06-18 13:14:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\web\app\PM\lib\api.{post}.{m}.js
 */
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
module.exports = function (sender) {
    yjBizService.post({
        params: ["PM", "lib", "api"],
        // query : sender.req.body,//header错误
        data: sender.req.body,
        success: function (data) {
            sender.success(data);
        },
        error: sender.error
    });
}