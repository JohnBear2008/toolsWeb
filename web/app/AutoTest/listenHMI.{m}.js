/*jshint esversion: 6 */
var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

var Client = require("ssh2").Client;

/**
 * @Describle [top命令，返回的每行文件信息格式]
 * @Paras     [暂时用不上的信息就mark了，节省内存]
 * @Author    Muc
 * @DateTime  2019-02-18
 */
function TopInfoObj(pid, ppid, user, stat, vsz, vsz_ratio, cpu_ratio, cmd) {
    // this.pid = pid;
    // this.ppid = ppid;
    // this.user = user;
    // this.stat = stat;
    // this.vsz = vsz;
    this.vsz_ratio = vsz_ratio;
    this.cpu_ratio = cpu_ratio;
    this.cmd = cmd;
}

/**
 * @Describle [匹配top命令返回值的前2行的有用信息内容]
 * @Author    Muc
 * @DateTime  2019-02-18
 * @param     {[object]}    oChanged      [用于存储的数据对象]
 * @param     {[object]}    key      [键值]
 * @param     {[string]}    topx_data [top命令的返回值（一行）]
 */
function fmtTopRowOneData(oChanged, key, topx_data) {
    let match_rst = topx_data.match(/\d+[%MK]\s\w+/g), // 匹配top命令，前两行的 使用率和使用量， 例： 32% usr，表示usr使用量为32%
        oTmp = {}, // 用于缓存top每行的数据
        oTmpValue = {};

    for (let part of match_rst) {
        let tmp = part.split(/\s+/);
        explain = tmp[1];
        explain_data = tmp[0];
        oTmpValue[explain] = explain_data;
    }
    oTmp[key] = oTmpValue;

    if (key === "mem") {
        let used = parseInt(oTmp.mem.used), // 使用parseInt方法将其中的代表数字的连续字符串转化为整形
            free = parseInt(oTmp.mem.free),
            total = used + free;
        oChanged.mem = {};
        oChanged.mem.use_rate = parseInt((used / total * 100)); // 内存使用(百分数)
    }
    /*else if (key === "cpu") {
           oChanged.cpu = {};
           oChanged.cpu.use_rate = 100 - parseInt(oTmp.cpu.idle.replace("%", "")); // 总百分数100 - 闲置百分比(idle)
       }*/
}

function fmtTopOtherRowData() {}
module.exports = function(sender) {
    var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
    var LCID = yjMultiLang.getCurrentLCID();
    sender.req.query.LCID = LCID;

    // 建立一个connect
    var conn = new Client(),
        sh_top = 'top -n 1\n'; // 单次信息

    // 获取session信息
    var session = sender.req.query.session,
        hmi_host = session.hmi_host,
        hmi_usr = session.hmi_usr,
        hmi_pwd = session.hmi_pwd;

    conn.on('ready', function() {
        conn.exec(sh_top, function(err, stream) {
            if (err) {
                throw err;
            }
            stream.on('close', function() {
                conn.end(); // 断开链接
            }).on('data', function(data) {
                data = data.toString();

                let data_arr = data.split("\n"),
                    topInfo = {}; // 存储格式化后的top命令的返回值，最终返回给前端

                const MEM_INFO_INX = 0; // inx = 0  : memory信息
                // const CPU_INFO_INX = 1; // inx = 1  : cpu信息

                /* Muc 2019-02-15 遍历top命令的返回值，并按行格式化内容
                 * ！ 第一行 ： 代表memory的信息
                 * ！ 第二行 ： 所有cpu的实用信息，但是这里指考虑mmi进程的使用率就行了，其他的，类似通过ssh所产生的额外cpu损耗无需考虑
                 * ！ 第四行开始 : 其他文件的信息，如mmi进程
                 */
                for (let inx = 0; inx < data_arr.length; ++inx) {
                    if (inx === MEM_INFO_INX) {
                        fmtTopRowOneData(topInfo, 'mem', data_arr[inx]);
                    }
                    /* else if (inx === CPU_INFO_INX) {
                                            fmtTopRowOneData(topInfo, 'cpu', data_arr[inx]); // 这个cpu占用率不等于mmi的占用率，故无参考价值
                                        }*/
                    else {
                        // 给返回给前端的数据，打上时间戳
                        let now = new Date().getFullYear().toString().substring(2) + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString() + " " + new Date().toLocaleTimeString();

                        Object.assign(topInfo, { time: now });
                        // 找到mmi后，就可以退出循环了。因为剩余的信息无用
                        if (data_arr[inx].indexOf("./mmi") !== -1) {
                            let aTmp = data_arr[inx].split(/\s+/);
                            let nCpuInx = aTmp.length - 2; // 数组内，倒数第二个元素为实际mmi的cpu占用率
                            let cpu_rate = parseInt(aTmp[nCpuInx].replace("%", ""));
                            // 写入mmi存活状态，写入mmi的cpu占用率
                            let oAdd = {
                                mmi: { 'isAlive': true },
                                cpu: { 'use_rate': cpu_rate }
                            };
                            Object.assign(topInfo, oAdd);

                            break;
                        }
                        // 如果遍历了所有top信息都没有找到mmi，则表示mmi挂掉了
                        let oAdd = { mmi: { 'isAlive': false } };
                        Object.assign(topInfo, oAdd);
                    }
                }
                sender.success(topInfo);
            }).stderr.on('data', function(data) {});
        });
    }).connect({
        host: hmi_host,
        port: 22, // SSH 通道默认端口
        username: hmi_usr,
        password: hmi_pwd
    });
};
