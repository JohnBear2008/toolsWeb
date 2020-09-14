//selector sql
const getOptionSelector =
	"select optionValue as value,optionText as option,optionText as token from `ppm_selectoroptions`";

const getCTRNameSelector = "select FTYName as value,concat(FTYID,'-',FTYName) as option,DBID  as token from `ppm_customers`"
const getMHENameSelector = "select MHEName as value,concat_ws('-',MHEType,MHEName) as option,DBID as token from ppm_machines "
const getSytemSelector = "select val as value,val as option,DBID as token from ppm_systems";
const getStaffSelector = "select staffName as value,staffName as option,DBID as token from `ppm_staffs`"

//获取负责人
const getBindAuditor = "select StaffName as auditor from `ppm_customerbinds`"

//任务单面板 获取任务审核记录
const getTaskCodeAuditData = "select * from (select t1.BTID,t1.BTVersion,t1.codeAdr,t1.codeAuditor,t1.codeAuditResult,t1.codeSaveDate,t2.DBID,t2.codeType,t2.result,t2.remark,t2.saveDate from `ppm_bills_task` t1 left join `ppm_bills_codeaudit` t2 on t1.BTID=t2.BTID and t1.BTVersion=t2.BTVersion) ta"


//需求单sql
const sqlRequestBills = "select * from `ppm_bills_request`"


//获取任务审核记录
const getCodeAuditRecord = " select * from `ppm_bills_codeaudit`"

//任务审核记录
const getTaskAuditRecord = "select * from ( select t1.DBID,t2.BTID,t2.BTVersion,t2.rowId,t2.codeType,t2.codeAuditor,t2.result,t2.remark,t2.saveDate from `ppm_bills_task` t1 left join `ppm_bills_codeaudit` t2 on t1.BTID=t2.BTID and t1.BTVersion=t2.BTVersion ) ta "

//获取默认代码检查人
const getCodeAuditor = "select * from `ppm_codeauditrule`"

//计划单数量
const getPLDNum = "SELECT COUNT(1) AS PLDNum FROM `ppm_bills_plan` WHERE TO_DAYS(makeDate) = TO_DAYS(NOW()) AND version=0"

/**
 *更具传入参数创建执行sql语句
 *
 * @param {*} i={sql,params}
 */
const createSql = (i) => {
	console.log('createSql', i.sql);
	let excuteSql = "";
	switch (i.sql) {
		case "select":
			console.log('i:' + JSON.stringify(i));
			excuteSql = "select * from `" + i.params.tableId + "`"
			if (i.params.filter) {
				excuteSql = excuteSql + " where " + i.params.filter
			}

			if (i.params.orderBy) {
				excuteSql = excuteSql + " order by " + i.params.orderBy
			}
			break;
		case "insert":
			console.log("insert:" + JSON.stringify(i.params));
			let insertTitles = ""
			let insertParamArr = [];
			for (const p in i.params.data[0]) {
				//Object.keys(i)[0] 用于获取对象第一个属性名称
				// titles = titles + Object.keys(i.params.data[0][p])[0] + ",";
				insertTitles = insertTitles + p + ","
				insertParamArr.push(p);
			}
			insertTitles = insertTitles.substr(0, insertTitles.length - 1);
			insertTitles = "(" + insertTitles + ")";

			let insertValues = ""

			for (const n of i.params.data) {
				// console.log("n:" + n);
				let insertValueN = "";
				//按 属性顺序排序取值,为空值设为null避免sql语句报错
				for (let p of insertParamArr) {
					if (!n[p]) {
						insertValueN = insertValueN + "null,";
					} else {
						insertValueN = insertValueN + "'" + n[p] + "',";
					}
				}


				insertValueN = insertValueN.substr(0, insertValueN.length - 1);
				insertValueN = "(" + insertValueN + ")";
				insertValues = insertValues + insertValueN + ","
			}

			insertValues = insertValues.substr(0, insertValues.length - 1);
			// //DBID 为空则去掉titles,values DBID信息防止参数错误
			// if (i.params.data[0]["DBID"] === "") {
			//     titles = titles.substr(titles.indexOf(",") + 1, titles.length);
			//     values = values.substr(values.indexOf(",") + 1, values.length);
			// }

			if (i.params.ignore) {
				excuteSql = "insert ignore into `" + i.params.tableId + "` " + insertTitles + " values " + insertValues;
			} else {
				excuteSql = "insert into `" + i.params.tableId + "` " + insertTitles + " values " + insertValues;
			}
			console.log('excuteSql:' + excuteSql);
			break;
		case "replace":
			console.log("11111111:" + JSON.stringify(i.params));
			let replaceTitles = ""
			let replaceParamArr = [];
			for (const p in i.params.data[0]) {
				//Object.keys(i)[0] 用于获取对象第一个属性名称
				// titles = titles + Object.keys(i.params.data[0][p])[0] + ",";
				replaceTitles = replaceTitles + p + ","
				replaceParamArr.push(p);
			}
			replaceTitles = replaceTitles.substr(0, replaceTitles.length - 1);
			replaceTitles = "(" + replaceTitles + ")";

			let replaceValues = ""

			for (const n of i.params.data) {
				// console.log("n:" + n);
				let replaceValueN = "";
				//按 属性顺序排序取值,为空值设为null避免sql语句报错
				for (let p of replaceParamArr) {
					if (!n[p]) {
						replaceValueN = replaceValueN + "null,";
					} else {
						replaceValueN = replaceValueN + "'" + n[p] + "',";
					}
				}


				replaceValueN = replaceValueN.substr(0, replaceValueN.length - 1);
				replaceValueN = "(" + replaceValueN + ")";
				replaceValues = replaceValues + replaceValueN + ","
			}

			replaceValues = replaceValues.substr(0, replaceValues.length - 1);
			// //DBID 为空则去掉replaceTitles,replaceValues DBID信息防止参数错误
			// if (i.params.data[0]["DBID"] === "") {
			//     replaceTitles = replaceTitles.substr(replaceTitles.indexOf(",") + 1, replaceTitles.length);
			//     replaceValues = replaceValues.substr(replaceValues.indexOf(",") + 1, replaceValues.length);
			// }

			excuteSql = "replace into `" + i.params.tableId + "` " + replaceTitles + " values " + replaceValues;
			console.log('excuteSql:' + excuteSql);
			break;
		case "delete":
			let deleteDBIDS = "";
			if (i.params.data.length > 0) {
				for (const n in i.params.data) {
					if (i.params.data.hasOwnProperty(n)) {
						deleteDBIDS = deleteDBIDS + i.params.data[n] + ",";
					}
				}
			}
			deleteDBIDS = deleteDBIDS.substr(0, deleteDBIDS.length - 1);
			deleteDBIDS = "(" + deleteDBIDS + ")";
			console.log('deleteDBIDS:' + deleteDBIDS);
			excuteSql = "delete from `" + i.params.tableId + "` where DBID in " + deleteDBIDS;
			break;

		case "update":
			let key = i.params.key;
			let updateKeys = "";
			let updateStatement = "";

			console.log('isarray1111', Array.isArray(key)) //true

			//多关键字更新

			if (Array.isArray(key)) {
				let keyValues = ''
				if (i.params.data.length > 0) {

					for (const n of i.params.data) {
						let keyValue = ''
						for (const k of key) {
							keyValue = keyValue + "'" + n[k] + "',";
						}
						keyValue = "(" + keyValue.substring(0, keyValue.length - 1) + ")";
						keyValues = keyValues + keyValue + ','
					}
					keyValues = keyValues.substring(0, keyValues.length - 1)


					let fieldsObj = i.params.data[0];

					for (const p in fieldsObj) {
						if (!key.includes(p)) { //过滤key,防止更新key错误
							if (fieldsObj[p]) {
								updateStatement = updateStatement + p + " = '" + fieldsObj[p] + "',";
							} else {
								updateStatement = updateStatement + p + " = null,";
							}
						}
					}
				}
				updateStatement = updateStatement.substr(0, updateStatement.length - 1);

				updateKeys = "(" + keyValues + ")";
				console.log('updateKeys:' + updateKeys);
				let keys = ""
				for (const n of key) {
					keys = keys + n + ","
				}
				keys = keys.substring(0, keys.length - 1);
				keys = "(" + keys + ")";
				excuteSql = "update `" + i.params.tableId + "` set " + updateStatement + " where " + keys + " in " + updateKeys;

			}

			//单关键字更新
			if (!Array.isArray(key)) {
				if (i.params.data.length > 0) {
					for (const n of i.params.data) {
						updateKeys = updateKeys + "'" + n[key] + "',";
					}

					let fieldsObj = i.params.data[0];

					for (const p in fieldsObj) {
						if (p !== key) { //过滤key,防止更新key错误
							if (fieldsObj[p]) {
								updateStatement = updateStatement + p + " = '" + fieldsObj[p] + "',";
							} else {
								updateStatement = updateStatement + p + " = null,";
							}
						}
					}

					// for (const n in i.params.data) {
					// 	if (i.params.data.hasOwnProperty(n)) {
					// 		updateDBIDS = updateDBIDS + i.params.data[n] + ",";
					// 	}
					// }
				}
				updateStatement = updateStatement.substr(0, updateStatement.length - 1);

				updateKeys = updateKeys.substr(0, updateKeys.length - 1);
				updateKeys = "(" + updateKeys + ")";
				console.log('updateKeys:' + updateKeys);
				excuteSql = "update `" + i.params.tableId + "` set " + updateStatement + " where " + key + " in " + updateKeys;
			}


			break;

		case "updateNum":
			console.log("3333:" + JSON.stringify(i.params));

			let tableId = i.params.tableId;
			let keyTitles = i.params.keyTitles;
			let numTitles = i.params.numTitles;
			let data = i.params.data

			let caseModels = "";
			let range = "";

			for (const n of numTitles) {
				let caseModel = n + "= case ";
				let when = ""
				for (const m of data) {
					let whenFilter = "";
					let rangeFilter = "";
					for (const keyTitle of keyTitles) {
						whenFilter = whenFilter + keyTitle + "='" + m[keyTitle] + "' and ";
						rangeFilter = rangeFilter + "'" + m[keyTitle] + "',";
					}
					whenFilter = whenFilter.substring(0, whenFilter.length - 4);
					rangeFilter = rangeFilter.substring(0, rangeFilter.length - 1);
					rangeFilter = "(" + rangeFilter + ")";

					let whenSub = " when " + whenFilter + " then ifnull(" + n + ",0)+ " + m[n];
					when = when + whenSub;
					range = range + rangeFilter + ",";
				}
				when = when + " end ";
				caseModel = caseModel + when + ",";

				caseModels = caseModels + caseModel;
			}

			caseModels = caseModels.substring(0, caseModels.length - 1);
			range = range.substring(0, range.length - 1);
			let filterTitlesStr = "";
			for (const keyTitle of keyTitles) {
				filterTitlesStr = filterTitlesStr + keyTitle + ",";
			}
			filterTitlesStr = filterTitlesStr.substring(0, filterTitlesStr.length - 1);
			filterTitlesStr = "(" + filterTitlesStr + ")";

			let filter = filterTitlesStr + " in (" + range + ")";

			excuteSql = "update " + tableId + " set " + caseModels + " where " + filter;

			// let caseModel = 'stockNum = CASE partId WHEN "1ACC_HUNTER_JX_C" THEN ifnull(stockNum, 0) + 1 END'

			break;

		default:
			excuteSql = eval(i.sql);
			if (i.params) {

				if (i.params.tableId) {
					excuteSql = excuteSql.replace(/tableId/, i.params.tableId)
				}
				if (i.params.filter) {
					excuteSql = excuteSql + ' where ' + i.params.filter
				}
				if (i.params.orderBy) {
					excuteSql = excuteSql + " order by " + i.params.orderBy
				}
				console.log("default excuteSql:" + excuteSql);
			}
			break;
	}

	console.log("excuteSql last:" + excuteSql);
	return excuteSql;
}

module.exports = {
	createSql
}