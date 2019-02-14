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

    /*====================+
    |   MachType          |
    |=====================|
    | ABCD| dsp | meaning |
    |---------------------|
    |  A  |  0  |    54   |
    |---------------------|
    |     |  1  |  5528   |
    |     |  2  |  55M3   |
    |     |  3  | 3354-PLC|
    |---------------------|
    |  B  |  0  |   270   |
    |     |  1  |  3354   |
    |---------------------|
    | C、D |     预留       |
    +=====================*/

    aSQLPara = [
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4,
        "STD", "0000", "00000000", '0', '0', '0', '0', '0',
        // UNION ALL
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4
    ];

    /* [execSQL 指定info的数据 union all 数据表内除去与“如上info临时表内DataID相同的数据”（包括info临时表自己）] */
    execSQL =
        /* ===== 获取STD中，info机型缺省的"DataID列数据"对应的数据行内容 ===== */
        " SELECT DataID, CN, SubCN, Unit, Prec, Visb, Organize " +
	" FROM hmiprint_mold_tm55 " +
        //这里限定info机型缺省的"DataID列数据"对应的数据行内容
        " WHERE DataID NOT IN ( " +
        "           SELECT DataID FROM hmiprint_mold_tm55 " +
        // 这里限定属于STD
        "           WHERE Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        "       ) " +
        "   AND Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        /* ===== 联合两个结果 ===== */
        " UNION ALL " +
        /* ===== 获取info机型的数据行 =====*/
        " SELECT DataID, CN, SubCN, Unit, Prec, Visb, Organize " +
	" FROM hmiprint_mold_tm55 " +
        " WHERE Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? ";

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
