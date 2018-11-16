module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var sManufacturer, sMachType, sCtrlType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4;
    var execSQL, aSQLPara;

    var objSysArg = sender.req.query.objSysArg;
    // if ("Manufacturer" in objSysArg) { // 带有info文件的HMI程式，有如下信息
    sManufacturer = objSysArg.Manufacturer.replace('\r', ""); // replace：去掉截取的文件内容中多余的换行符
    sMachType = objSysArg.MachType.replace('\r', "");
    sCtrlType = objSysArg.CtrlType.replace('\r', "");
    sReserved0 = objSysArg.Reserved0.replace('\r', "");
    sReserved1 = objSysArg.Reserved1.replace('\r', "");
    sReserved2 = objSysArg.Reserved2.replace('\r', "");
    sReserved3 = objSysArg.Reserved3.replace('\r', "");
    sReserved4 = objSysArg.Reserved4.replace('\r', "");

    aSQLPara = [
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4,
        "STD", "0000", "00000000", '0', '0', '0', '0', '0',
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4
    ];

    /* [execSQL 指定info的数据 union all 数据表内除去与“如上info临时表内DDkey相同的数据”（包括info临时表自己）] */
    execSQL =
        /* ===== 获取STD中，info机型缺省的"DDKey列数据"对应的数据行内容 ===== */
        " SELECT DDKey,CN,Visb,Prec FROM hmiprint_moni " +
        //这里限定info机型缺省的"DDKey列数据"对应的数据行内容
        "   WHERE DDKey NOT IN " +
        "       ( " +
        "           SELECT DDKey FROM hmiprint_moni " +
        // 这里限定属于STD
        "           WHERE Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        "       ) " +
        "   AND Manufacturer=? AND CtrlType=? AND MachType=? AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        /* ===== 联合两个结果 ===== */
        " UNION ALL " +
        /* ===== 获取info机型的数据行 =====*/
        " SELECT DDKey,CN,Visb,Prec FROM hmiprint_moni WHERE Manufacturer=? AND CtrlType=? AND MachType=? " +
        "   AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? ";

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        rowsAsArray: true,

        success: function(result) {
            // console.log("sender result:" + JSON.stringify(result));
            sender.success(result);
        },
        error: sender.error
    });
};
