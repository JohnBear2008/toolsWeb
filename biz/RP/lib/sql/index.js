//selector sql
const getRegionSelector = "SELECT mername AS value,mername AS option,pinyin as token FROM `region`"
const getCustomerSelector =
	"SELECT customerShortName AS value,customerShortName AS option, CONCAT_WS(',',customerId,customerShortName,contact,mobilePhone,address)as token FROM `rp_customers`"
const getStaffSelector = "select staffName as value,staffName as option,pinyin as token from `rp_staffs`"
const getProductSelector =
	"select productId as value,productId as option,productDescription as token from `rp_products`"
const getTestItemSelector = "select testItem as value,testItem as option,testFee as token from `rp_testitems`"
const getOptionSelector =
	"select optionValue as value,optionText as option,optionText as token from `rp_selectoroptions`";
const getPartLocationSelector =
	"select distinct partLocation as value,partLocation as option,partLocation as token from `rp_parts`";
const getPartSelector = "select partId as value,partId as option,partName as token from `rp_partlocations`";

const getFaultSelector = "select faultName as value,faultName as option, faultId as token from `rp_faultclasses`"



const getRegion = "SELECT mername FROM `region`"
const getCustomers = "SELECT * FROM `rp_customers`"
const getProduct = "select * from `rp_products`"
const getPartInfo = "select * from ( select ta.productId,ta.partId,ta.partName,ta.num,tb.price,tc.productDescription as partDescription from `rp_partlocations` ta left join `rp_partsfee` tb on ta.partId=tb.partId left join `rp_products` tc on ta.partId=tc.productId) A"
const getStockNum = "select partId,stockNum from `rp_partswarehouse`"

const getPartLocations = "select locations from `rp_partlocations`"

//获取申请单数量
const getReqeustBillsNum = "select count(1) as billsNum from `rp_requestbills`";
//获取记录单数量
const getRecordBillsNum = "select count(1) as billsNum from `rp_recordbills`";
//获取出货单数量
const getResponseBillsNum = "select count(1) as billsNum from `rp_responsebills`";
//获取记录单状态
const getRecordBillStatus = "select DBID,status from `rp_recordbills`"



//维修申请单主表单sql
const sqlRequestBills = "select * , CONCAT_WS(',',address,factoryNos) as searchText from rp_requestbills ";
//维修单sql
const sqlRecordBills = "select * ,concat( requestBillId,'-',rowId ) as repairId,datediff(now(),requestDate) as undoneDays from ( select ta.*,tb.customerShortName,tb.makeDate as requestDate from `rp_recordbills` ta left join `rp_requestbills` tb on ta.requestBillId=tb.requestBillId ) tA";
//维修部件清单sql
const sqlChangeparts = "select * from rp_partsBills";
//维修出货单主表单sql
const sqlResponseBills =
	"select * from (select ta.recordBillId,ta.productId,ta.productDescription,ta.faultDescription,ta.repairResult,ta.isRework,ta.repairTotalFee,ta.finishDate,ta.status,tb.requestBillId,tb.customerId,tb.customerShortName,tb.requestDate,tc.DBID,tc.responseBillId,tc.customerName,tc.customerBelong,tc.invoiceName,tc.fax,tc.contact,tc.mobilePhone,tc.responseDate,tc.paymentWay,tc.sendWay,tc.expressCompany,tc.expressId,tc.responseStaff,tc.currency,tc.amount,tc.discount,tc.discountAmount,tc.payAmount,tc.payWay,tc.payDate,tc.isFullPay,tc.isSended,tc.maker,tc.makeDate,tc.remark,tc.billSaveTimeStamp from rp_recordbills ta left join rp_requestbills tb on ta.requestBillId = tb.requestBillId left join rp_responsebills tc on ta.responseBillId = tc.responseBillId) tA "
//部件即时库存sql
const rp_partStore = "select ta.partId,ta.stockNum,tb.partDescription,tb.partBelong,tb.partLocation from `rp_partswarehouse` ta left join `rp_parts` tb on ta.partId=tb.partId"
//库存记录sql
const rp_partStoreHistory = "select ta.partId,ta.preNum,ta.actNum,ta.nowNum,ta.rpBillId,ta.actType,ta.dateTimeStamp from `rp_partswarehousehistory` ta left join `rp_parts` tb on ta.partId=tb.partId"

//历史单据主表sql
const sqlHistoryBills =
	"select * from (select ta.DBID,ta.recordBillId,ta.productId,ta.productDescription,ta.faultDescription,ta.repairResult,ta.isRework,ta.repairTotalFee,ta.status,tb.requestBillId,tb.customerId,tb.customerShortName,tb.requestDate,tc.responseBillId,tc.customerName,tc.customerBelong,tc.invoiceName,tc.fax,tc.contact,tc.mobilePhone,tc.responseDate,tc.paymentWay,tc.sendWay,tc.expressCompany,tc.expressId,tc.responseStaff,tc.currency,tc.amount,tc.discount,tc.discountAmount,tc.payAmount,tc.payWay,tc.payDate,tc.isFullPay,tc.isSended,tc.maker,tc.makeDate,tc.remark,tc.billSaveTimeStamp from rp_recordbills ta left join rp_requestbills tb on ta.requestBillId = tb.requestBillId left join rp_responsebills tc on ta.responseBillId = tc.responseBillId) tA "

//维修申请单作为子表sql
const sqlSubRecordBills = "select * from `rp_recordbills`"

//部件清单作为子表sql
const sqlSubPartBills = "select * from `rp_partsbills`"

//出货单作为子表sql
const sqlSubResponseBills = "select * from `rp_responsebills`"

//查找指定表名中所有数据
const sqlTableSelect = "select * from `tableId`";

/**
 *更具传入参数创建执行sql语句
 *
 * @param {*} i={sql,params}
 */
const createSql = (i) => {
	console.log(i.sql);
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

			excuteSql = "insert into `" + i.params.tableId + "` " + insertTitles + " values " + insertValues;
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

			break;

		case "updateNum":
			console.log("3333:" + JSON.stringify(i.params));

			let tableId = i.params.tableId;

			let numTitles = i.params.numTitles;
			let data = i.params.data
			let filterTitle = Object.keys(data[0])[0];
			console.log("filterTitle:" + filterTitle);


			let caseModels = "";
			let range = "";

			for (const n of numTitles) {
				let caseModel = n + "= case " + filterTitle;
				let when = ""
				for (const m of data) {
					let whenSub = " when '" + m[filterTitle] + "' then ifnull(" + n + ",0)+ " + m[n];
					when = when + whenSub;
					range = range + "'" + m[filterTitle] + "',"
				}
				when = when + " end ";
				caseModel = caseModel + when + ",";

				caseModels = caseModels + caseModel;
			}

			caseModels = caseModels.substring(0, caseModels.length - 1);
			range = range.substring(0, range.length - 1);
			let filter = filterTitle + " in (" + range + ")";


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