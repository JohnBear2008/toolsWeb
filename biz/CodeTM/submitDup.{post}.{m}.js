module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var arrange=sender.req.query.arrange;
    let now  = new Date(); 
    var swift = Math.random(100)*100; 
    swift = swift.toFixed(0);
    if(swift.length<2){
        swift='0'+swift;
    }
    var ApplyDate = now.Format("yyyy-MM-dd");
    var BILLDate = now.Format("yyyyMMddHHmm")+swift;
    var CodeDate = now.Format("HHmm")+swift;
    var BILLID=BILLDate+"" ;
    var PartsYearBF = "A"; 
    var PartsRuleBF = "A"; 
    var PartsYear=sender.req.query.PartsYear;
    var PartsRule=sender.req.query.PartsRule;
    var PartsClass=sender.req.query.PartsClass;
    var PartsChi=sender.req.query.PartsChi;
    var Model=sender.req.query.Model;
    var Assembly=sender.req.query.Assembly;
    var PartsUnitE=sender.req.query.UnitE;
    var PhaseStatus=sender.req.query.Phase;
    var UsePriority=sender.req.query.Priority;
    var Reason=sender.req.query.Reason;
    var PartsApplyDate=ApplyDate;
    var PartsLimitDate='';
    var PartsName=sender.req.query.PartsName;
    var Partsstatus = sender.req.query.Partsstatus;
    var Pattern = sender.req.query.Pattern;
    var Source = 'A'; 
    var Staff=sender.req.query.Staff;
    var Property=sender.req.query.Property;
    var PartsOldCode=sender.req.query.PartsOldCode;
    var SupplyID=sender.req.query.SupplyID;
    var SupplyTitle=sender.req.query.SupplyTitle;
    var SMTID=sender.req.query.SMTID;
    var SMTTitle=sender.req.query.SMTTitle;

    var PartsBorn=PartsYearBF+PartsClass+'-'+PartsRuleBF+CodeDate+'-'+SupplyID;
    var PartsCode=sender.req.query.PartsCode;
    
    var Parts_Prop1 =sender.req.query.Parts_Prop1 ; 
    var Parts_Prop2 =sender.req.query.Parts_Prop2 ; 
    var Parts_Prop3 =sender.req.query.Parts_Prop3 ; 
    var Parts_Prop4 =sender.req.query.Parts_Prop4 ; 
    var Parts_Prop5 =sender.req.query.Parts_Prop5 ; 
    var Parts_Prop6 =sender.req.query.Parts_Prop6 ; 
    var Parts_Prop7 =sender.req.query.Parts_Prop7 ; 
    var Parts_Prop8 =sender.req.query.Parts_Prop8 ; 
    var Parts_Prop9 =sender.req.query.Parts_Prop9 ; 
    var Parts_Prop10=sender.req.query.Parts_Prop10; 
    var Parts_Prop11=sender.req.query.Parts_Prop11; 
    var Parts_Prop12=sender.req.query.Parts_Prop12; 
    var Parts_Prop13=sender.req.query.Parts_Prop13; 
    var Parts_Prop14=sender.req.query.Parts_Prop14; 
    var Parts_Prop15=sender.req.query.Parts_Prop15; 
    var Parts_Prop16=sender.req.query.Parts_Prop16; 
    var Parts_Prop17=sender.req.query.Parts_Prop17; 
    var Parts_Prop18=sender.req.query.Parts_Prop18; 
    var Parts_Prop19=sender.req.query.Parts_Prop19; 
    var Parts_Prop20=sender.req.query.Parts_Prop20; 
    var Soft_No=sender.req.query.Soft_No; 
    if (Soft_No != "" && Soft_No != undefined) {
        // console.log('彩夏软号:', Soft_No);
    }else{
        Soft_No = '1234';
        console.log('无夏软号:', Soft_No);
    }
    if(PartsClass=='R1' || PartsClass=='R2'|| PartsClass=='R3' ){
        PartsBorn=PartsYearBF+PartsClass+'-'+PartsRuleBF+CodeDate+'-'+Soft_No;
    }
    //12 11 10 11 =44
    console.log('马的'+ SMTID," 逼紧 ",SMTTitle," 供应 ",SupplyID+SupplyTitle+PartsOldCode+PartsName+'属'+PartsYear +PartsRuleBF+PartsClass+Soft_No );
    console.log('扣'+ PartsBorn);
    var sql="INSERT INTO auto_rec_parts (`BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi` , `Model` , `Assembly` ,`PartsUnitE`, `PhaseStatus` , `UsePriority`,  `Reason` ,`Parts_Apply_Date`," +
            " `Parts_Name`, `Parts_status`, `Pattern` , `Source` , `Staff`, `Property`, `Parts_Code`, `Supply_ID`,  `Supply_Title`, `SMT_ID`,  `SMT_Title` , `Parts_Old_Code` , " +
            " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
            " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  ) " +
            " VALUES (?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,? )";
            if (arrange == 'draft') {
                saveDraft();
            }else{
                saveSubmit();
            }
            function saveDraft() {
                Partsstatus='6';
                yjDBService.exec({
                    sql : sql,
                    parameters : [BILLID, PartsYear, PartsRule, PartsClass, PartsChi , Model, Assembly ,  PartsUnitE , PhaseStatus , UsePriority, Reason ,PartsApplyDate, 
                    PartsName, Partsstatus, Pattern , Source ,Staff, Property, PartsBorn, SupplyID, SupplyTitle , SMTID , SMTTitle ,PartsOldCode,
                    Parts_Prop1,  Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5,Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
                    Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20 ,Soft_No  ],
                    rowsAsArray : true,
                    success : function(result) {
                        // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                        var retcode={"status":"applyOK","billid": BILLID };
                        sender.success(retcode);
                        console.log(result)
                    },
                    // success :sender.success,
                    error : sender.error
                });
            }
            function saveSubmit() {
                yjDBService.exec({
                    sql : sql,
                    parameters : [BILLID, PartsYear, PartsRule, PartsClass, PartsChi , Model, Assembly ,  PartsUnitE , PhaseStatus , UsePriority, Reason ,PartsApplyDate, 
                        PartsName, Partsstatus, Pattern , Source ,Staff, Property, PartsBorn, SupplyID, SupplyTitle , SMTID , SMTTitle ,PartsOldCode,
                        Parts_Prop1,  Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5,Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
                        Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20 ,Soft_No  ],
                        rowsAsArray : true,
                    success : function(result) {
                        // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                        var retcode={"status":"applyOK","billid": BILLID };
                        sender.success(retcode);
                        console.log(result)
                    },
                    // success :sender.success,
                    error : sender.error
                });
            }
}