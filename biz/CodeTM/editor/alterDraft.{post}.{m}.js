module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    let now = new Date();
    var ApplyDate = now.Format("yyyy-MM-dd");
    var BILLID = sender.req.query.BILLID;
    console.log(" 耳语 ", BILLID);

    let SQLDelete = "update `auto_rec_parts` set  Parts_Status= '6' where   BILL_ID=?  ";
    console.log("SQLDelete:" + SQLDelete);

    yjDBService.exec({
        sql: SQLDelete,
        parameters: [BILLID],
        rowsAsArray: true,
        success: function (result) {
            var retcode = { "status": "applyOK", "billid": BILLID };
            sender.success(retcode);
            console.log(result);
        },
        error: sender.error
    });
}