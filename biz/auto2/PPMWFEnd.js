require("../../client/js/Date.js");
require("../../client/js/Array.js");

var schedule = require("node-schedule");
const https = require("https");
var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
var yjDB = global.yjRequire("yujiang.Foil").yjDB;
// const querystring = require('querystring');



/**
 *将查询结果转换为 sql范围
 *
 * @param {*} i
 */
const getSqlRange = (i) => {


	let r1 = i.rows;

	let r2 = '';

	for (const n in r1) {
		if (r1.hasOwnProperty(n)) {
			r2 = r2 + "'" + r1[n] + "',";

		}
	}

	let o = '(' + r2.substring(0, r2.length - 1) + ')';

	// console.log(o)

	return o;


}


/**
 *自动归档功能
 *
 * @param {*} i={sql}
 */
const autoWFEnd = async () => {

	let sql = "SELECT A.BPID FROM (SELECT tbc.BPID,tbd.emailResult,DATEDIFF(CURDATE(),tbd.emailDate) AS stayDayNum FROM " +
		" (SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID)" +
		" tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone>0 " +
		" AND tbb.FQCRequest=tbb.FQCPass   AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100   ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_pbh` tbf," +
		" (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` GROUP BY pbhBPID) tbe WHERE tbf.pbhBPID=tbe.pbhBPID AND " +
		" tbf.PBHVersion=tbe.maxPBHVersion) tbd ON tbc.BPID=tbd.pbhBPID) A WHERE (emailResult=1 OR emailResult=2) AND stayDayNum>=7"


	yjDBService.exec({
		sql: sql,
		parameters: [],
		rowsAsArray: true,
		success: function (result) {
			let sqlRange = getSqlRange(result);

			if (sqlRange !== '()') {
				let sql1 = "update `ppm_bills_plan` p join `ppm_bills_task` t on p.BPID=t.taskBPID  set p.WFStatus=100,t.WFStatus=100 where BPID in " + sqlRange;
				yjDBService.exec({
					sql: sql1,
					parameters: [],
					rowsAsArray: true,
					success: function (r2) {
						console.log(r2);
					},
					error: function (err) {
						throw err
					}
				});

			}



		},
		error: function (err) {
			throw err
		}
	});



}

// autoWFEnd();

// 自动归档任务---------
var j1 = schedule
	.scheduleJob({
			hour: 00,
			minute: 00,
			dayOfWeek: [1]
		},
		function () {

			autoWFEnd()

		});
