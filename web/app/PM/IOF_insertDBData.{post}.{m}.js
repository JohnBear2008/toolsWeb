var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var path=require("path");
module.exports = function(sender) {
    yjBizService.post({
        params : ["PM","IOF_insertDBData"],
        query : sender.req.body,
        success : function(data){
        	console.log("post方法前端success结果:"+JSON.stringify(data));
            sender.success(data);
        },
        error : {}
    });
}
