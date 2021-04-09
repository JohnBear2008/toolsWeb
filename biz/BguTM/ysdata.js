 
let prjdata = 
["GX-2019-04[高性能驱动]",
"GX-2020-01[多轴联动]",
"GX-2020-02[多点触控]",
"GX-2020-05[多轴共母线]",
"GX-2021-01[220V低压驱动器]",
"GX-2021-02[挤出收卷控制]",
"GX-2021-03[电储料驱动器]"];

const createSql = (i) => {
	console.log('createSql', i.sql);
	let prjResult = prjdata;
	console.log("建筑学 :" + prjResult);
	return prjResult;
}

module.exports = {
	createSql
}