/*jshint esversion: 6 */
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var oRowData = sender.req.query,
        UID = oRowData.UID.replace('\r', ""),
        Manufacturer = oRowData.Manufacturer.replace('\r', ""),
        CtrlType = oRowData.CtrlType.replace('\r', ""),
        MachType = oRowData.MachType.replace('\r', ""),
        R0 = oRowData.Reserved0.replace('\r', ""),
        R1 = oRowData.Reserved1.replace('\r', ""),
        R2 = oRowData.Reserved2.replace('\r', ""),
        R3 = oRowData.Reserved3.replace('\r', ""),
        R4 = oRowData.Reserved4.replace('\r', ""),
        DataID = oRowData.DataID.replace('\r', ""),
        CN = oRowData.CN.replace('\r', ""),
        SubCN = oRowData.SubCN.replace('\r', ""),
        Unit = oRowData.Unit.replace('\r', ""),
        Prec = oRowData.Prec.replace('\r', ""),
        Visb = oRowData.Visb.replace('\r', ""),
        Organize = oRowData.Organize.replace('\r', "");

    var aSQLPara = [],
        execSQL = "";


    aSQLPara = [Manufacturer, CtrlType, MachType,
        R0, R1, R2, R3, R4,
        DataID, CN, SubCN, Unit, Prec, Visb, Organize,
        UID
    ];
    execSQL = `
        UPDATE hmiprint_mold_tm55
        SET Manufacturer=?, CtrlType=?, MachType=?,
            Reserved0=?, Reserved1=?, Reserved2=?, Reserved3=?, Reserved4=?,
            DataID=?, CN=?, SubCN=?, Unit=?, Prec=?, Visb=?, Organize=?
        WHERE UID=? `;

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        success: sender.success,
        error: sender.error
    });

};
