/*jshint esversion: 6 */
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

var Client = require("ssh2").Client;

module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    sender.req.query.LCID = LCID;

    // 建立一个connect
    var conn = new Client(),
        sh_run_mmi = 'cd /usr/i86 && ./mmi'; // 重启mmi进程

    // 获取session信息
    var session = sender.req.query.session,
        hmi_host = session.hmi_host,
        hmi_usr = session.hmi_usr,
        hmi_pwd = session.hmi_pwd;

    conn.on('ready', function() {
        conn.exec(sh_run_mmi, function(err, stream) {
            if (err) {
                throw err;
            }
            stream.on('close', function() {
                conn.end();
            }).on('data', function(data) {
                let nResult = data.indexOf("./mmi"),
                    result = { result: nResult };

                Object.assign(result, { session: session });
                sender.success(result);
                conn.end(); // TODO 不好的写法，最好写在close地方

            }).stderr.on('data', function(data) {});
        });
    }).connect({
        host: hmi_host,
        port: 22, // SSH 通道默认端口
        username: hmi_usr,
        password: hmi_pwd
    });
};
