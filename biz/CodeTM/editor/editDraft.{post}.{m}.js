module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    let now = new Date();
    var ApplyDate = now.Format("yyyy-MM-dd");
    var BILLDate = now.Format("yyyyMMddHHmm");
    var newBILLID = BILLDate + "";
    var BILLID = sender.req.query.BILLID;
    var PartsYear = sender.req.query.PartsYear;
    var PartsRule = sender.req.query.PartsRule;
    var PartsClass = sender.req.query.PartsClass;
    var PartsChi = sender.req.query.PartsChi;
    var Model = sender.req.query.Model;
    var Assembly = sender.req.query.Assembly;
    var PartsApplyDate = ApplyDate;
    var PartsLimitDate = ApplyDate;
    var PartsName = sender.req.query.PartsName;
    var Partsstatus = '0';//修改中未审批 
    var Source = 'A';
    var Staff = sender.req.query.Staff;
    var Property = sender.req.query.Property;
    var PartsOldCode = sender.req.query.PartsOldCode;
    var PartsCode = sender.req.query.Parts_Code;
    var PID = sender.req.query.PID;
    var SupplyID = sender.req.query.SupplyID;
    var SupplyTitle = sender.req.query.SupplyTitle;
    var SMTID = sender.req.query.SMTID;
    var SMTTitle = sender.req.query.SMTTitle;
    var Parts_Prop1 = sender.req.query.Parts_Prop1;
    var Parts_Prop2 = sender.req.query.Parts_Prop2;
    var Parts_Prop3 = sender.req.query.Parts_Prop3;
    var Parts_Prop4 = sender.req.query.Parts_Prop4;
    var Parts_Prop5 = sender.req.query.Parts_Prop5;
    var Parts_Prop6 = sender.req.query.Parts_Prop6;
    var Parts_Prop7 = sender.req.query.Parts_Prop7;
    var Parts_Prop8 = sender.req.query.Parts_Prop8;
    var Parts_Prop9 = sender.req.query.Parts_Prop9;
    var Parts_Prop10 = sender.req.query.Parts_Prop10;
    var Parts_Prop11 = sender.req.query.Parts_Prop11;
    var Parts_Prop12 = sender.req.query.Parts_Prop12;
    var Parts_Prop13 = sender.req.query.Parts_Prop13;
    var Parts_Prop14 = sender.req.query.Parts_Prop14;
    var Parts_Prop15 = sender.req.query.Parts_Prop15;
    var Parts_Prop16 = sender.req.query.Parts_Prop16;
    var Parts_Prop17 = sender.req.query.Parts_Prop17;
    var Parts_Prop18 = sender.req.query.Parts_Prop18;
    var Parts_Prop19 = sender.req.query.Parts_Prop19;
    var Parts_Prop20 = sender.req.query.Parts_Prop20;
    var Soft_No = sender.req.query.Soft_No;
    console.log('庐山：' + PartsClass, '银耳：' + PartsCode," 张玉 ",BILLID," 子柳 ",PID);

    let SQLDelete = "delete from `auto_rec_parts`  where   BILL_ID=?  ";
    console.log("SQLDelete:" + SQLDelete);

    var SQLINSERT = "INSERT INTO auto_rec_parts (`BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`,`Parts_Chi`,`Model`,`Assembly`, `Parts_Apply_Date`, `Parts_Limit_Date`," +
        " `Parts_Name`, `Parts_status`, `Source` ,`Staff`, `Property`, `Parts_Code`, `PID`,`Supply_ID`, `Supply_Title` ,  `SMT_ID`,  `SMT_Title`, `Parts_Old_Code`, " +
        "`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
        " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, `Soft_No`  " +
        " ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?   )";
    yjDBService.exec({
        sql: SQLDelete,
        parameters: [BILLID],
        rowsAsArray: true,
        success: function (result) {
            yjDBService.exec({
                sql: SQLINSERT,
                parameters: [newBILLID, PartsYear, PartsRule, PartsClass, PartsChi, Model, Assembly, PartsApplyDate, PartsLimitDate, PartsName, Partsstatus, Source, Staff, Property, PartsCode, PID, SupplyID, SupplyTitle, SMTID, SMTTitle, PartsOldCode,
                    Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10, Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, Soft_No],
                rowsAsArray: true,
                success: function (result) {
                    // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                    var retcode = { "status": "applyOK", "billid": newBILLID };
                    sender.success(retcode);
                    console.log(result)
                },
            });
        },
        error: sender.error
    });
}