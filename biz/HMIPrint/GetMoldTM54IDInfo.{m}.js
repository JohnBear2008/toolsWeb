/*jshint esversion: 6 */
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var sManufacturer, sMachType, sCtrlType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4;
    var execSQL, aSQLPara;

    var objSysArg = sender.req.query.objSysArg;

    sManufacturer = objSysArg.Manufacturer.replace('\r', ""); // replace：去掉截取的文件内容中多余的换行符
    sMachType = objSysArg.MachType.replace('\r', "");
    sCtrlType = objSysArg.CtrlType.replace('\r', "");
    sReserved0 = objSysArg.Reserved0.replace('\r', "");
    sReserved1 = objSysArg.Reserved1.replace('\r', "");
    sReserved2 = objSysArg.Reserved2.replace('\r', "");
    sReserved3 = objSysArg.Reserved3.replace('\r', "");
    sReserved4 = objSysArg.Reserved4.replace('\r', "");

    let LCID = parseInt(sender.req.query.LCID); // 必须转化一下
    let sqlSelectPart = "";
    switch (LCID) {
        case 1033:
            sqlSelectPart = " SELECT DataID, Block, Type, EN, ENTips, Unit, Prec, Visb, Organize ";
            break;
        default:
            sqlSelectPart = " SELECT DataID, Block, Type, CN, CNTips, Unit, Prec, Visb, Organize ";
            break;
    }

    aSQLPara = [
        /* 获取STD与info机型区分不一样的数据行 */
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4,
        "STD", "0000", "00000000", '0', '0', '0', '0', '0',
        // UNION ALL
        /* 获取机型区分的数据行 */
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4,
        // ORDER BY FIELD TM54 必须按此排序，特别智障
        'DB_MMICONFIG', 'DB_COM2TEMPSET', 'DB_COM2TEMPSETPERCENT', 'DB_COM2GATE', 'DB_COM2GATEB', 'DB_COM2TEMPDEGREEOFFSET',
        'DB_MOLDSET', 'DB_MOLDSETB', 'DB_MONI_LS', 'DB_MONI_LS_N', 'DB_MONIB_LS', 'DB_MONIB_LS_N', 'DB_MONI_DP', 'DB_MONI_DV', 'DB_MONIB_DP', 'DB_MONIB_DV'
    ];

    /* [execSQL 指定info的数据 union all 数据表内除去与“如上info临时表内DataID相同的数据”（包括info临时表自己）] */
    // SQL 耗时约 50ms
    execSQL =
        sqlSelectPart +
        " FROM hmiprint_mold_tm54 " +
        " WHERE DataID NOT IN ( " +
        "       SELECT DataID FROM hmiprint_mold_tm54 " +
        "      WHERE Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=?) " +
        " AND Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        " UNION ALL " +
        sqlSelectPart +
        " FROM hmiprint_mold_tm54 " +
        " WHERE Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        " ORDER BY FIELD(Block, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?), DataID "; // FIELD顺序首要，DataID次要

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr

        success: function(result) {
            sender.success(result);
        },
        error: sender.error,
    });
};
