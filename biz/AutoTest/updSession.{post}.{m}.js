/*jshint esversion: 6 */
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    let execSQL = "",
        aSQLPara = [],
        session = sender.req.query;

    aSQLPara = [session.usr_account, session.hmi_host,
        session.hmi_usr, session.hmi_pwd, session.uid
    ];

    execSQL = `
        UPDATE autotest_session
        SET usr_account=?, hmi_host=?,
            hmi_usr=?,hmi_pwd=?
        WHERE UID=? `;

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
