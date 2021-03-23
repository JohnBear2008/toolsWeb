//selector sql
const getRegionSelector = "SELECT mername AS value,mername AS option,pinyin as token FROM `region`"
const getCustomerSelector =
	"select * from (SELECT customerShortName AS value,customerShortName AS option,customerType, CONCAT_WS(',',customerId,customerShortName,contact,mobilePhone,address)as token FROM `rp_customers` where customerShortName is not null) A"
const getStaffSelector = "select staffName as value,staffName as option,pinyin as token from `rp_staffs`"
const getProductSelector =
	"select productId as value,productId as option,productName as token from `rp_products`"

const getT9ProductSelector =
	"select MaterialSpec as value,MaterialSpec+','+MaterialName as selectOption,MaterialId as token from comMaterialGroup"

const getTestItemSelector = "select testItem as value,testItem as option,testFee as token from `rp_testitems`"
const getOptionSelector =
	"select optionValue as value,optionText as option,optionText as token from `rp_selectoroptions`";
const getPartLocationSelector =
	"select distinct partLocation as value,partLocation as option,partLocation as token from `rp_parts`";
const getPartSelector = "select partId as value,partId as option,partName as token from `rp_partlocations`";

const getFaultSelector = "select concat(faultId,'-',faultName) as value,concat(faultId,'-',faultName) as option, faultId as token from `rp_faultclasses`"
const getWarehouseSelector = "select warehouseId as value,warehouseName as option,warehouseId as token from `rp_warehouseslist`";
//获取仓库产品清单
const getStoreProductSelector = "select * from ( select ta.warehouseId,ta.stockNum,ta.PID as value,ta.PID as option,tb.productName as token from `rp_warehouse` ta left join `rp_products` tb on ta.PID=tb.productId ) A"


const getRegion = "SELECT mername FROM `region`"
const getCustomers = "SELECT * FROM `rp_customers`"
const getProduct = "select * from `rp_products`"
const getT9Prouct = "select * from comMaterialGroup"
const getPartInfo = "select * from ( select ta.productId,ta.partId,ta.partName,ta.num,tb.price,tc.productDescription as partDescription from `rp_partlocations` ta left join `rp_partsfee` tb on ta.partId=tb.partId left join `rp_products` tc on ta.partId=tc.productId) A"
const getStockNum = "select * from (select PID,stockNum,ta.warehouseId,warehouseName from `rp_warehouse` ta left join `rp_warehouseslist` tb on ta.warehouseId=tb.warehouseId) A"

const getPartLocations = "select locations from `rp_partlocations`"

//获取申请单数量
const getReqeustBillsNum = "select count(1) as billsNum from `rp_requestbills`";
//获取记录单数量
const getRecordBillsNum = "select count(1) as billsNum from `rp_recordbills`";
//获取出货单数量
const getResponseBillsNum = "select count(1) as billsNum from `rp_responsebills`";
//获取记录单状态
const getRecordBillStatus = "select DBID,status from `rp_recordbills`"
//获取借货单数量
const getBorrowBillsNum = "select count(1) as billsNum from `rp_borrowbills`  ";
//获取还货单数量
const getReturnBillsNum = "select count(1) as billsNum from `rp_returnbills`";
//获取出库单数量
const getOutBillsNum = "select count(1) as billsNum from `rp_outbills`"
//获取入库单数量
const getInBillsNum = "select count(1) as billsNum from `rp_inbills`"
//获取入库单子表数量
const getInSubBillsNum = "select count(1) as billsNum from `rp_insubbills`"
//获取调拨单数量
const getTransferBillsNum = "select count(1) as billsNum from `rp_transferbills`"
//获取调拨单子表数量
const getTransferSubBillsNum = "select count(1) as billsNum from `rp_transfersubbills`"

//获取报废单数量
const getScrapBillsNum = "select count(1) as billsNum from `rp_scrapbills`"
//获取零件单数量
const getPartBillsNum = "select count(1) as billsNum from `rp_partsbills`"

// //通用获取表单数量sql
// const getBillsNum="select count(1) as billsNum from `tableId`"


// //获取借货单子表状态
// const getBorrowSubBill = "select DBID from `rp_borrowsubbills`"



//维修申请单主表单sql
const sqlRequestBills = "select * , CONCAT_WS(',',address,factoryNos) as searchText from rp_requestbills ";
//维修单sql
const sqlRecordBills = "select * ,concat( requestBillId,'-',rowId ) as repairId,datediff(now(),requestDate) as undoneDays from ( select ta.*,tb.customerId,tb.customerShortName,tb.customerName,tb.customerBelongShort,tb.contact,tb.requestDate from `rp_recordbills` ta left join `rp_requestbills` tb on ta.requestBillId=tb.requestBillId ) tA";
//维修部件清单sql
const sqlChangeparts = "select * from rp_partsBills";

//维修出货单主表单sql
// const sqlResponseBills =
// 	"select * from (select * from (select concat( ta.requestBillId,'-',ta.rowId ) as repairId,ta.recordBillId,ta.productId,ta.productDescription,ta.faultDescription,ta.repairResult,ta.isRework,ta.repairTotalFee,ta.finishDate,ta.status,tb.requestBillId,tb.customerId,tb.customerShortName,tb.requestDate,tc.DBID,tc.responseBillId,tc.customerName,tc.customerBelong,tc.invoiceName,tc.fax,tc.contact,tc.mobilePhone,tc.responseDate,tc.paymentWay,tc.sendWay,tc.expressCompany,tc.expressId,tc.responseStaff,tc.currency,tc.amount,tc.discount,tc.discountAmount,tc.payAmount,tc.payWay,tc.payDate,tc.isFullPay,tc.isSended,tc.maker,tc.makeDate,tc.remark,tc.billSaveTimeStamp from rp_recordbills ta left join rp_requestbills tb on ta.requestBillId = tb.requestBillId left join rp_responsebills tc on ta.responseBillId = tc.responseBillId) td where status ='维修完成' ) tA"
const sqlResponseBills = "select * from `rp_responsebills`"
//维修出货单子表sql
const sqlResponseSubBills = "select * from ( select ta.*,tb.customerId,tb.customerShortName,concat( ta.requestBillId,'-',ta.rowId ) as repairId from `rp_recordbills` ta left join `rp_requestbills` tb on ta.requestBillId=tb.requestBillId ) A"

//部件即时库存sql
const rp_store = "select * from ( select ta.PID,ta.stockNum,ta.dateTimeStamp, date_format(ta.dateTimeStamp,'%Y-%m-%d %H:%i:%s') as dateTimeText,tb.productName,tb.productDescription,tb.unit,tc.warehouseId,tc.warehouseName from `rp_warehouse` ta left join `rp_products` tb on ta.PID=tb.productId left join `rp_warehouseslist` tc on ta.warehouseId=tc.warehouseId) A"
// //库存记录sql
const rp_storeHistory = "select * from ( select ta.PID,ta.preNum,ta.actNum,ta.nowNum,ta.rpBillId,ta.actType,ta.dateTimeStamp,date_format(ta.dateTimeStamp,'%Y-%m-%d %H:%i:%s') as dateTimeText,tb.productName,tc.warehouseName from `rp_warehousehistory` ta left join `rp_products` tb on ta.PID=tb.productId left join `rp_warehouseslist` tc on ta.warehouseId=tc.warehouseId) A"

//历史单据主表sql
const sqlHistoryBills =
	"select * from (select ta.DBID,ta.recordBillId,ta.productId,ta.productDescription,ta.faultDescription,ta.repairResult,ta.isRework,ta.repairTotalFee,ta.status,tb.requestBillId,tb.customerId,tb.customerShortName,tb.requestDate,tc.responseBillId,tc.customerName,tc.customerBelong,tc.invoiceName,tc.fax,tc.contact,tc.mobilePhone,tc.responseDate,tc.paymentWay,tc.sendWay,tc.expressCompany,tc.expressId,tc.responseStaff,tc.currency,tc.amount,tc.discount,tc.discountAmount,tc.payAmount,tc.payWay,tc.payDate,tc.isFullPay,tc.isSended,tc.maker,tc.makeDate,tc.remark,tc.billSaveTimeStamp from rp_recordbills ta left join rp_requestbills tb on ta.requestBillId = tb.requestBillId left join rp_responsebills tc on ta.responseBillId = tc.responseBillId) tA "

//维修申请单作为子表sql
const sqlSubRecordBills = "select * from `rp_recordbills`"

//部件清单作为子表sql
const sqlSubPartBills = "select * from `rp_partsbills`"

//出货单作为子表sql
const sqlSubResponseBills = "select * from `rp_responsebills`"

//借货单主表sql
const sqlBorrowBills = "select *, CONCAT_WS(',',address,warehouseName) as searchText from `rp_borrowbills`"
//借货单子表sql
const sqlBorrowSubBills = "select *,ifnull(returnNum,0) as returnNum,(num-ifnull(returnNum,0)) as unReturnNum from `rp_borrowsubbills`"

//还货单主表sql
// const sqlReturnBills = "select * from (select ta.DBID,ta.borrowBillId,ta.returnBillId,ta.productId,ta.productName,ta.num,ta.unit,(ta.num-ta.returnNum) as unreturnNum,ta.returnStatus,tb.customerId,tb.customerShortName,tb.customerName,tb.customerBelongShort,tb.borrowDate,tb.fax as searchText,tc.billFrom,tc.returnDate,tc.operator,tc.remark,tc.status,tc.maker,tc.makeDate,tc.auditor,tc.auditDate,tc.billSaveTimeStamp from `rp_borrowsubbills` ta left join  `rp_borrowbills` tb on ta.borrowBillId=tb.borrowBillId left join `rp_returnbills` tc on ta.returnBillId=tc.returnBillId) A"
const sqlReturnBills = "select *,customerName as searchText from `rp_returnbills`"

//还货单 子表sql
const sqlReturnSubBills = "select * from `rp_returnsubbills`"

const sqlReturnRequestSubBills = "select * from ( select ta.productId,ta.returnBillId,ta.num,tb.productName,tb.productDescription,tb.systemType,tb.productClass from `rp_returnsubbills` ta left join `rp_products` tb on ta.productId=tb.productId) A"

const sqlPartRequestBills = "select * from (select ta.DBID,ta.recordBillId,ta.repairPartId as productId,ta.partName as productName,ta.repairPartNum as num,ta.billSaveTimeStamp as requestDate,ta.repairPartStatus,ta.remark,tb.repairStaff from `rp_partsbills` ta left join `rp_recordbills` tb on ta.recordBillId= tb.recordBillId ) A"

//未还货单主表sql
const sqlUnreturnBills = "select * from ( select ta.productId,ta.productName,ta.unit,(ta.num-ta.returnNum) as unreturnNum,ta.remark,ta.status,ta.productDescription as searchText,tb.borrowBillId,tb.customerId,tb.customerShortName,tb.customerName,tb.contact,tb.mobilePhone,tb.operator,tb.borrowDate,tc.returnBillId,tc.returnStatus from `rp_borrowsubbills` ta left join  (select borrowBillId,customerId,customerShortName,customerName,contact,mobilePhone,operator,borrowDate from `rp_borrowbills`) tb on ta.borrowBillId=tb.borrowBillId left join ( select returnBillId,borrowBillId,status as returnStatus from  `rp_returnsubbills` ) tc on tb.borrowBillId =tc.borrowBillId ) A"

// //还货待维修sql
// const sqlUnreturnRequestBills="select * from ( select ta.productId,ta.productName,ta.unit,ta.remark,ta.status,ta.productDescription as searchText,tb.returnBillId,tb.customerId,tb.customerShortName,tb.operator,tb.returnDate from `rp_returnsubbills` ta left join  (select returnBillId,customerId,customerShortName,operator,returnDate from `rp_returnbills`) tb on ta.returnBillId=tb.returnBillId) A"

//出库单sql
const sqlOutBills = "select * from `rp_outbills`"
//出库单子表sql
const sqlOutSubBills = "select * from `rp_outsubbills`"

//入库单sql
const sqlInBills = "select * from `rp_inbills`"
//入库单子表sql
const sqlInSubBills = "select * from `rp_insubbills`"

//调拨单sql
const sqlTransferBills = "select * from `rp_transferbills`"
//调拨单子表sql
const sqlTransferSubBills = "select * from `rp_transfersubbills`"

//报废单sql
const sqlScrapBills = "select * from `rp_scrapbills`"
//报废单子表sql
const sqlScrapSubBills = "select * from `rp_scrapsubbills`"
//报废单 待维修报废sql
const sqlRecordScrapBills = "select * from ( select ta.recordBillId,ta.productId,ta.productName,ta.repairStaff,ta.repairResult,ta.maker,ta.makeDate,ta.remark,ta.scrapStatus,tb.productDescription,tb.unit from `rp_recordbills` ta left join `rp_products` tb on ta.productId = tb.productId ) A"
//报废单 待调拨报废sql
const sqlTransferSubScrapBills = "select * from ( select ta.transferBillId,ta.productId,ta.productName,ta.unit,ta.num,ta.remark,ta.scrapStatus,tb.operator,tb.transferDate from `rp_transfersubbills` ta left join `rp_transferbills` tb on ta.transferBillId=tb.transferBillId ) A"
//报废单 待报废sql
const sqlWaitScrapBills = "select * from ( select ta.billId,ta.productId,ta.productName,ta.unit,ta.num,ta.remark,ta.scrapStatus,tb.billFrom,tb.operator,tb.auditDate from `rp_insubbills` ta left join `rp_inbills` tb on ta.billId=tb.billId ) A"



//查找指定表名中所有数据
const sqlTableSelect = "select * from `tableId`";

//更新借货单状态
const updateBorrowStatus = "update `rp_borrowsubbills` set status = case when num=returnNum then '已还入' else '待归还' end"

//借货单导出sql
const borrowBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.billFrom,ta.borrowBillId,ta.customerId,ta.customerShortName,ta.customerName,ta.customerBelongShort,ta.contact,ta.mobilePhone,ta.workPhone,ta.operator,ta.address,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.productId,tb.productName,tb.productDescription,tb.productClass,tb.systemType,tb.warehouseId,tb.warehouseName,tb.unit,tb.num,tb.returnNum,(tb.num-tb.returnNum) as unReturnNum,tb.status as subStatus,tb.remark AS subRemark FROM `rp_borrowbills` ta LEFT JOIN `rp_borrowsubbills` tb ON ta.borrowBillId = tb.borrowBillId ) A"

//还货单导出sql
const returnBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.billFrom,ta.returnBillId,ta.customerId,ta.customerShortName,ta.customerName,ta.customerBelongShort,ta.contact,ta.mobilePhone,ta.workPhone,ta.operator,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.borrowBillId,tb.productId,tb.productName,tb.productDescription,tb.productClass,tb.systemType,tb.warehouseId,tb.warehouseName,tb.unit,tb.num,tb.status as subStatus,tb.remark AS subRemark FROM `rp_returnbills` ta LEFT JOIN `rp_returnsubbills` tb ON ta.returnBillId = tb.returnBillId ) A"

//入库单导出sql
const inBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.billFrom,ta.billId,ta.customerId,ta.customerShortName,ta.customerName,ta.customerBelongShort,ta.contact,ta.mobilePhone,ta.workPhone,ta.operator,ta.address,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.productId,tb.productName,tb.productDescription,tb.productClass,tb.systemType,tb.warehouseId,tb.warehouseName,tb.unit,tb.scrapStatus,tb.num,tb.remark AS subRemark FROM `rp_inbills` ta LEFT JOIN `rp_insubbills` tb ON ta.billId = tb.billId ) A"

//出库单导出sql
const outBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.billFrom,ta.billId,ta.customerId,ta.customerShortName,ta.customerName,ta.customerBelongShort,ta.contact,ta.mobilePhone,ta.workPhone,ta.operator,ta.address,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.productId,tb.productName,tb.productDescription,tb.productClass,tb.systemType,tb.warehouseId,tb.warehouseName,tb.unit,tb.num,tb.remark AS subRemark FROM `rp_outbills` ta LEFT JOIN `rp_outsubbills` tb ON ta.billId = tb.billId ) A"

//调拨单导出sql
const transferBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.transferBillId,ta.transferDate,ta.outWarehouseName,ta.inWarehouseName,ta.operator,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.productId,tb.productName,tb.productDescription,tb.productClass,tb.systemType,tb.unit,tb.num,tb.remark AS subRemark FROM `rp_transferbills` ta LEFT JOIN `rp_transfersubbills` tb ON ta.transferBillId = tb.transferBillId ) A"

//报废单导出sql
const scrapBillsExportSql = "SELECT * FROM ( SELECT ta.DBID,ta.scrapBillId,ta.scrapDate,ta.scrapType,ta.operator,ta.maker,ta.auditor,ta.makeDate,ta.auditDate,ta.`status`,ta.remark,tb.rowId,tb.fromBillId,tb.productId,tb.productName,tb.productDescription,tb.unit,tb.num,tb.remark AS subRemark FROM `rp_scrapbills` ta LEFT JOIN `rp_scrapsubbills` tb ON ta.scrapBillId = tb.scrapBillId ) A"
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
			// console.log('i:' + JSON.stringify(i));
			excuteSql = "select * from `" + i.params.tableId + "`"
			if (i.params.filter) {
				excuteSql = excuteSql + " where " + i.params.filter
			}

			if (i.params.orderBy) {
				excuteSql = excuteSql + " order by " + i.params.orderBy
			}
			break;
		case "insert":
			// console.log("insert:" + JSON.stringify(i.params));
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
			// console.log('excuteSql:' + excuteSql);
			break;
		case "replace":
			// console.log("11111111:" + JSON.stringify(i.params));
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
						replaceValueN = replaceValueN + "'" + n[p].replace(/'/g, '') + "',"; //删除特殊符号
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
			// console.log('deleteDBIDS:' + deleteDBIDS);
			excuteSql = "delete from `" + i.params.tableId + "` where DBID in " + deleteDBIDS;
			break;

		case "update":
			let key = i.params.key;
			let updateKeys = "";
			let updateStatement = "";

			// console.log('isarray1111', Array.isArray(key)) //true

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
				// console.log('updateKeys:' + updateKeys);
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
				// console.log('updateKeys:' + updateKeys);
				excuteSql = "update `" + i.params.tableId + "` set " + updateStatement + " where " + key + " in " + updateKeys;
			}


			break;

		case "updateNum":
			// console.log("3333:" + JSON.stringify(i.params));

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
					// console.log('excuteSql11111', excuteSql);
					excuteSql = excuteSql.replace(/tableId/, i.params.tableId)
				}
				if (i.params.filter) {
					excuteSql = excuteSql + ' where ' + i.params.filter
				}
				if (i.params.orderBy) {
					excuteSql = excuteSql + " order by " + i.params.orderBy
				}
				// console.log("default excuteSql:" + excuteSql);
			}
			break;
	}

	// console.log("excuteSql last:" + excuteSql);
	return excuteSql;
}

module.exports = {
	createSql
}