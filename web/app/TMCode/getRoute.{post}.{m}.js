//getRouteLab.js
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function (sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    var reportType = (sender.req.body.reportType);
    // console.log("post方式前端 :"+ (sender.req.body.reportType )); 
    let url = [];
    switch (reportType) {
        case "HandUp":
            url = ["CodeTM", "HandUp"];
            // console.log("编路由  "+reportType); 
            break;
        case "Really":
            url = ["CodeTM", "Really"];
            // console.log("编路由  "+reportType); 
            break;
        case "goldBasic":
            url = ["CodeTM", "golden", "goldBasic"];
            break;
        case "eqpUpkeep":
            url = ["CodeTM", "equip", "eqpUpkeep"];
            break;
        case "asiaShow":
            url = ["CodeTM", "center", "asiaShow"];
            break;
        case "asiaProd":
            url = ["CodeTM", "center", "asiaProd"];
            break;
        case "asiaProp":
            url = ["CodeTM", "center", "asiaProp"];
            break;
        case "mediaTune":
            url = ["CodeTM", "center", "mediaTune"];
            break;
        case "mediaNature":
            url = ["CodeTM", "center", "mediaNature"];
            break;
        case "mediaImp":
            url = ["CodeTM", "center", "mediaImp"];
            break;
        case "mediaSoft":
            url = ["CodeTM", "center", "mediaSoft"];
            break;
        case "mediaFeature":
            url = ["CodeTM", "center", "mediaFeature"];
            break;
        case "mediaEFCode":
            url = ["CodeTM", "center", "mediaEFCode"];
            break;
        case "mediaCCC":
            url = ["CodeTM", "center", "mediaCCC"];
            break;
        case "authAccount":
            url = ["CodeTM", "authAccount"];
            break;
        case "CherryAgree":
            url = ["CodeTM", "mass" , "CherryAgree"];
            break;
        case "CherryReject":
            url = ["CodeTM", "mass" , "CherryReject"];
            break;
        case "CherryQuery":
            url = ["CodeTM", "mass" , "CherryQuery"];
            break;
        case "NeedRule":
            url = ["CodeTM", "NeedRule"];
            break;
        case "xlsDisplay":
            url = ["CodeTM", "xlsDisplay"];
            // console.log("编路由  "+reportType); 
            break;
        case "xlsPropHead":
            url = ["CodeTM", "xlsPropHead"];
            // console.log("编路由  "+reportType); 
            break;
        case "qryParts":
            url = ["CodeTM", "qryParts"];
            // console.log("编路由  "+reportType); 
            break;
        case "callPcode":
            url = ["CodeTM", "callPcode"];
            break;
        case "callDup":
            url = ["CodeTM", "callDup"];
            break;
        case "callDraft":
            url = ["CodeTM", "callDraft"];
            break;
        case "editPcode":
            url = ["CodeTM", "editor", "editPcode"];
            //    console.log("编路由  "+reportType); 
            break;
        case "submitDup":
            url = ["CodeTM", "submitDup"];
            //    console.log("编路由  "+reportType); 
            break;
        case "submitSupp":
            url = ["CodeTM", "submitSupp"];
            //    console.log("编路由  "+reportType); 
            break;
        case "editDraft":
            url = ["CodeTM", "editor", "editDraft"];
            //    console.log("编路由  "+reportType); 
            break;
        case "alterDraft":
            url = ["CodeTM", "editor", "alterDraft"];
            //    console.log("编路由  "+reportType); 
            break;
        case "absoApplyPcode":
            url = ["CodeTM", "absoApplyPcode"];
            //            console.log("编路由  "+reportType); 
            break;
        case "absoOverRule":
            url = ["CodeTM", "absoOverRule"];
            break;
        case "absoletePcode":
            url = ["CodeTM", "absoletePcode"];
            //            console.log("编路由  "+reportType); 
            break;
        case "delNouse":
            url = ["CodeTM", "delNouse"];
            break;
        case "parseRec":
            url = ["CodeTM", "parseRec"];
            //            console.log("编码路由  "+reportType); 
            break;
        case "analysisRec":
            url = ["CodeTM", "analysisRec"];
            //    console.log("编码路由  "+reportType); 
            break;
        case "goldSupp":
            url = ["CodeTM", "goldSupp"];
            // console.log("编码路由  "+reportType); 
            break;
        case "goldCategory":
            url = ["CodeTM", "goldCategory"];
            // console.log("编码路由  "+reportType); 
            break;
        case "goldRec":
            url = ["CodeTM", "goldRec"];
            //        	console.log("编码路由  "+reportType); 
            break;
        case "cargoPreview":
            url = ["CodeTM", "cargoPreview"];
            //        	console.log("编码路由  "+reportType); 
            break;
        case "doubleChk":
            url = ["CodeTM", "doubleChk"];
            //        	console.log("编码路由  "+reportType); 
            break;
        case "applyPcode":
            url = ["CodeTM", "applyPcode"];
            //            console.log("编码路由  "+reportType); 
            break;
        case "agreeUniPcode":
            url = ["CodeTM", "agreeUniPcode"];
            // console.log("编码路由  "+reportType); 
            break;
        case "agreeMass":
            url = ["CodeTM", "agreeMass"];
            // console.log("编码路由  "+reportType); 
            break;
        case "rejectPcode":
            url = ["CodeTM", "rejectPcode"];
            // console.log("编码路由  "+reportType); 
            break;
        case "rejectMass":
            url = ["CodeTM", "rejectMass"];
            console.log("编码路由  " + reportType);
            break;
        case "testWater":
            url = ["CodeTM", "testWater"];
            // console.log("编码路由  "+reportType); 
            break;
        case "seeGrid":
            url = ["CodeTM", "offer" ,"seeGrid"];
            // console.log("编码路由  "+reportType); 
            break;
        case "hushOrz":
            url = ["CodeTM", "offer" ,"hushOrz"];
            // console.log("编码路由  "+reportType); 
            break;
        case "hushAmd":
            url = ["CodeTM", "offer" ,"hushAmd"];
            // console.log("编码路由  "+reportType); 
            break;
        case "paramGrid":
            url = ["CodeTM", "paramGrid"];
            // console.log("编码路由  "+reportType); 
            break;
        case "regroupGrid":
            url = ["CodeTM", "regroupGrid"];
            // console.log("编码路由  "+reportType); 
            break;
        case "setupDesign":
            url = ["CodeTM", "setupDesign"];
            // console.log("编码路由  "+reportType); 
            break;
        case "goldMaster":
            url = ["CodeTM", "goldMaster"];
            // console.log("编码路由  "+reportType); 
            break;
        case "DunDun":
            url = ["CodeTM", "DunDun"];
            // console.log("编码路由  "+reportType); 
            break;
        default:
            console.log("找不到路由");
            break;
    }

    yjBizService.post({
        params: url,
        query: sender.req.body,
        success: function (data) {
            //                console.log("post方法路由:"+JSON.stringify(data));
            sender.success(data);
        },
        error: {}
    });


};