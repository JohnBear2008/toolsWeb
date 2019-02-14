/*jshint esversion: 6 */
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var oRowData = sender.req.query,
        Manu = oRowData.Manufacturer.replace('\r', ""),
        Ctrl = oRowData.CtrlType.replace('\r', ""),
        Mach = oRowData.MachType.replace('\r', ""),
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
        Organize = oRowData.Organize.replace('\r', ""),
        Block = oRowData.Block.replace('\r', ""),
        Type = oRowData.Type.replace('\r', "");

    var aSQLPara = [],
        execSQL = "";

    aSQLPara = [Manu, Ctrl, Mach,
        R0, R1, R2, R3, R4,
        DataID, CN, SubCN, Unit, Prec, Visb, Organize,
        Block, Type
    ];
    execSQL = `
        INSERT INTO hmiprint_mold_tm54 (
            Manufacturer, CtrlType, MachType,
            Reserved0, Reserved1, Reserved2, Reserved3, Reserved4,
            DataID, CN, SubCN, Unit, Prec, Visb, Organize, Block, Type
        )
        VALUES (?, ?, ?,
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?,
            ?, ?) `;

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        success: sender.success,
        error: sender.error
    });


};
