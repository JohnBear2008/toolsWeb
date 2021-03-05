var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    sender.req.query.LCID = LCID;
    yjBizService.get({
        params: ["RP", "lib","t9Get"], 
        query: sender.req.query,
        success: function(data) {  
//        	console.log("get方式前端query:"+JSON.stringify(sender.req.query))
//        	console.log("get方式前端success结果:"+JSON.stringify(data))
            sender.success(data); 
        },
        error: sender.error
    });
};