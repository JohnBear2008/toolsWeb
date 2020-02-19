const getRegionSelector = 'SELECT mername AS value,mername AS option,pinyin as token FROM `region`'
const getCustomerSelector =
	'SELECT customerShortName AS value,customerShortName AS option,CONCAT(customerId,mobilePhone)as token FROM `rp_customers`'
const getStaffSelector = 'select staffName as value,staffName as option,staffId as token from `rp_staffs`'
const getProductSelector =
	'select productId as value,productId as option,productDescription as token from `rp_products`'
const getTestItemSelector = 'select testItem as value,testItem as option,testFee as token from `rp_testitems`'
const getOptionSelector =
	'select optionValue as value,optionText as option,optionText as token from `rp_selectoroptions`';
const getPartLocationSelector =
	'select distinct partLocation as value,partLocation as option,partLocation as token from `rp_parts`';
const getPartSelector = 'select partId as value,partId as option,partDescription as token from `rp_parts`';

const getRegion = 'SELECT mername FROM `region`'
const getCustomers = 'SELECT * FROM `rp_customers`'
const getProduct = 'select * from `rp_products`'
const getPart = 'select * from `rp_parts`'
const getStockNum = 'select stockNum from `rp_partswarehouse`'

//获取申请单数量
const getReqeustBillsNum = 'select count(1) as billsNum from `rp_requestbills`';
//获取记录单数量
const getRecordBillsNum = 'select count(1) as billsNum from `rp_recordbills`';
//获取出货单数量
const getResponseBillsNum = 'select count(1) as billsNum from `rp_responsebills`';



//维修申请单主表单sql
const sqlRequestBills = 'select * from rp_requestbills ';
//维修单sql
const sqlRecordBills = 'select * from ( select ta.*,tb.customerShortName,tb.makeDate as requestDate from `rp_recordbills` ta left join `rp_requestbills` tb on ta.requestBillId=tb.requestBillId ) tA';
//维修部件清单sql
const sqlChangeparts = 'select * from rp_partsBills';
//维修出货单主表单sql
const sqlResponseBills =
	'select * from (select ta.DBID,ta.recordBillId,ta.productId,ta.productDescription,ta.faultDescription,ta.repairResult,ta.isRework,ta.repairTotalFee,tb.requestBillId,tb.customerId,tb.customerShortName,tb.mobilePhone,tb.contact,tb.requestDate,tc.responseBillId,tc.expressId,tc.amount,tc.isSended,tc.isFullPay,tc.maker,tc.makeDate from rp_recordbills ta left join rp_requestbills tb on ta.requestBillId=tb.requestBillId left join rp_responsebills tc on ta.responseBillId=tc.responseBillId ) tA '





/**
 *更具传入参数创建执行sql语句
 *
 * @param {*} i={sql,params}
 */
const createSql = (i) => {
	console.log(i.sql);
	let excuteSql = '';
	switch (i.sql) {
		case 'select':
			console.log("i:" + JSON.stringify(i));
			excuteSql = 'select * from `' + i.params.tableId + '`'
			if (i.params.filter) {
				excuteSql = excuteSql + ' where ' + i.params.filter
			}

			if (i.params.orderBy) {
				excuteSql = excuteSql + ' order by ' + i.params.orderBy
			}
			break;
		case 'replace':
			console.log('11111111:' + JSON.stringify(i.params));
			let titles = ''
			let paramArr = [];
			for (const p in i.params.data[0]) {
				//Object.keys(i)[0] 用于获取对象第一个属性名称
				// titles = titles + Object.keys(i.params.data[0][p])[0] + ',';
				titles = titles + p + ','
				paramArr.push(p);
			}
			titles = titles.substr(0, titles.length - 1);
			titles = '(' + titles + ')';


			let values = ''

			for (const n of i.params.data) {
				// console.log('n:' + n);
				let valueN = '';
				//按 属性顺序排序取值,为空值设为null避免sql语句报错
				for (let p of paramArr) {
					if (!n[p]) {
						valueN = valueN + 'null,';
					} else {
						valueN = valueN + '"' + n[p] + '",';
					}
				}


				valueN = valueN.substr(0, valueN.length - 1);
				valueN = '(' + valueN + ')';
				values = values + valueN + ','
			}

			values = values.substr(0, values.length - 1);
			// //DBID 为空则去掉titles,values DBID信息防止参数错误
			// if (i.params.data[0]['DBID'] === '') {
			//     titles = titles.substr(titles.indexOf(',') + 1, titles.length);
			//     values = values.substr(values.indexOf(',') + 1, values.length);
			// }

			excuteSql = 'replace into `' + i.params.tableId + '` ' + titles + ' values ' + values;
			console.log("excuteSql:" + excuteSql);
			break;
		case 'delete':
			let deleteDBIDS = '';
			if (i.params.data.length > 0) {
				for (const n in i.params.data) {
					if (i.params.data.hasOwnProperty(n)) {
						deleteDBIDS = deleteDBIDS + i.params.data[n] + ',';
					}
				}
			}
			deleteDBIDS = deleteDBIDS.substr(0, deleteDBIDS.length - 1);
			deleteDBIDS = '(' + deleteDBIDS + ')';
			console.log("deleteDBIDS:" + deleteDBIDS);
			excuteSql = 'delete from `' + i.params.tableId + '` where DBID in ' + deleteDBIDS;
			break;

		case 'update':
			let updateDBIDS = '';
			let updateStatement = '';
			if (i.params.data.length > 0) {
				for (const n of i.params.data) {
					updateDBIDS = updateDBIDS + n['DBID'] + ',';
				}

				let fieldsObj = i.params.data[0];

				for (const p in fieldsObj) {
					if (fieldsObj[p]) {
						updateStatement = updateStatement + p + ' = "' + fieldsObj[p] + '",';
					} else {
						updateStatement = updateStatement + p + ' = null,';
					}
				}

				// for (const n in i.params.data) {
				// 	if (i.params.data.hasOwnProperty(n)) {
				// 		updateDBIDS = updateDBIDS + i.params.data[n] + ',';
				// 	}
				// }
			}
			updateStatement = updateStatement.substr(0, updateStatement.length - 1);

			updateDBIDS = updateDBIDS.substr(0, updateDBIDS.length - 1);
			updateDBIDS = '(' + updateDBIDS + ')';
			console.log("updateDBIDS:" + updateDBIDS);

			excuteSql = 'update `' + i.params.tableId + '` set ' + updateStatement + ' where DBID in ' + updateDBIDS;

			break;

		case 'updateNum':
			console.log('3333:' + JSON.stringify(i.params));

			let tableId = i.params.tableId;

			let numTitles = i.params.numTitles;
			let data = i.params.data
			let filterTitle = Object.keys(data[0])[0];
			console.log('filterTitle:' + filterTitle);


			let caseModels = '';
			let range = '';

			for (const n of numTitles) {
				let caseModel = n + '= case ' + filterTitle;
				let when = ''
				for (const m of data) {
					let whenSub = ' when "' + m[filterTitle] + '" then ifnull(' + n + ',0)+ ' + m[n];
					when = when + whenSub;
					range = range + '"' + m[filterTitle] + '",'
				}
				when = when + ' end ';
				caseModel = caseModel + when + ',';

				caseModels = caseModels + caseModel;
			}

			caseModels = caseModels.substring(0, caseModels.length - 1);
			range = range.substring(0, range.length - 1);
			let filter = filterTitle + ' in (' + range + ')';


			excuteSql = 'update ' + tableId + ' set ' + caseModels + ' where ' + filter;

			// let caseModel = "stockNum = CASE partId WHEN '1ACC_HUNTER_JX_C' THEN ifnull(stockNum, 0) + 1 END"

			break;

		default:
			excuteSql = eval(i.sql);
			if (i.params) {
				if (i.params.filter) {
					excuteSql = excuteSql + " where " + i.params.filter
				}
				if (i.params.orderBy) {
					excuteSql = excuteSql + ' order by ' + i.params.orderBy
				}
				console.log('default excuteSql:' + excuteSql);
			}
			break;
	}

	console.log('excuteSql last:' + excuteSql);
	return excuteSql;
}

module.exports = {
	createSql
}