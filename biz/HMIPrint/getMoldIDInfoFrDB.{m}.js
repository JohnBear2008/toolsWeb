module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var sManufacturer, sMachType, sCtrlType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4;
    var execSQL, aSQLPara;

    var objSysArg = sender.req.query.objSysArg;

    // mark #1
    // if (objSysArg.hasOwnProperty("Manufacturer")) {
    sManufacturer = objSysArg.Manufacturer.replace('\r', ""); // replace：去掉截取的文件内容中多余的换行符
    sMachType = objSysArg.MachType.replace('\r', "");
    sCtrlType = objSysArg.CtrlType.replace('\r', "");
    sReserved0 = objSysArg.Reserved0.replace('\r', "");
    sReserved1 = objSysArg.Reserved1.replace('\r', "");
    sReserved2 = objSysArg.Reserved2.replace('\r', "");
    sReserved3 = objSysArg.Reserved3.replace('\r', "");
    sReserved4 = objSysArg.Reserved4.replace('\r', "");

    /* aSQLPara:
        第一和第三行：指定的HMI的数据，两行数据一致
        第二行：标准的数据
    */
    aSQLPara = [sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4,
        "STD", "0000", "00000000", '0', '0', '0', '0', '0',
        sManufacturer, sCtrlType, sMachType, sReserved0, sReserved1, sReserved2, sReserved3, sReserved4
    ];
    /* [execSQL 指定info的数据 union all 数据表内除去与“如上info临时表内DataID相同的数据”（包括info临时表自己）] */

    execSQL =
        /* 将info的数据行组成的临时表别名为info */
        /* SQL语句最后获取到的DataID用于与前端的交互 */
        " WITH info AS " +
        " ( " +
        "       SELECT DataID FROM hmiprint_mold " +
        "       WHERE Manufacturer=? AND CtrlType=? AND MachType=? " +
        "       AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        " ) " +
        /* 数据表内除去与“如上info临时表内DataID相同的数据”（包括info临时表自己） */
        " SELECT DataID, Component, Block, Unit, Label, CN,Visible FROM hmiprint_mold " +
        "       WHERE DataID NOT IN ( SELECT DataID FROM info ) " +
        // 限定只在标准的数据里找，过滤其他厂家的冗余数据
        "           AND Manufacturer=? AND CtrlType=? AND MachType=? " +
        "           AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? " +
        /* union all info的查询结果 */
        " UNION ALL " +
        " SELECT DataID, Component, Block, Unit, Label, CN,Visible FROM hmiprint_mold " +
        "       WHERE Manufacturer=? AND CtrlType=? AND MachType=? " +
        "       AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=? ";
    // mark #1，上下两种效率仅差0.01s，为代码维护简便，故mark
    /*    } else { // 不带有info文件的HMI程式，按照默认的效果进行显示
            aSQLPara = ["STD", "0000", "00000000", "0", "0", "0", "0", "0"]; // 厂家、控制器、机型、预留0、1、2、3、4
            execSQL = "SELECT CN, Visible FROM hmiprint_mold WHERE Manufacturer=? AND CtrlType=? AND MachType=? " +
                " AND Reserved0=? AND Reserved1=? AND Reserved2=? AND Reserved3=? AND Reserved4=?";
        }*/

    // console.log(aSQLPara);
    // console.log(execSQL);

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr

        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};