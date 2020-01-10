const getRegion = 'SELECT mername FROM `region`'
const getRegionSelector = 'SELECT mername AS option,pinyin as token FROM `region`'
const getCustomerSelector = 'SELECT customerShortName AS option,CONCAT(customerId,mobilePhone)as token FROM `rp_customers`'
const getStaffSelector = 'select staffName as option,staffId as token from `rp_staffs`'
const getCustomers = 'SELECT * FROM `rp_customers`'

//获取申请单数量
const getReqeustBillsNum = 'select count(1) as billsNum from `rp_requestbills`'

//维修申请单主表单sql
const sqlRequestBills = 'select * from rp_requestbills '
//维修单sql
const sqlRecordBills = 'select * from rp_recordbills';

//维修出货单主表单sql
const sqlResponseBills = 'select * from rp_recordbills ta  left join rp_responsebills tb on ta.responseBillId=tb.responseBillId left join rp_requestbills tc on ta.requestBillId=tc.requestBillId'

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
            if (i.params.filter !== undefined && i.params.filter !== '') {
                excuteSql = excuteSql + ' where ' + i.params.filter
            }
            break;
        case 'replace':
            console.log('11111111:' + JSON.stringify(i.params));
            let titles = ''
            for (const p in i.params.data[0]) {
                //Object.keys(i)[0] 用于获取对象第一个属性名称
                // titles = titles + Object.keys(i.params.data[0][p])[0] + ',';
                titles = titles + p + ','
            }
            titles = titles.substr(0, titles.length - 1);
            titles = '(' + titles + ')';


            let values = ''

            for (const n of i.params.data) {

                // console.log('n:' + n);

                let valueN = '';

                for (const p in n) {
                    // console.log('v:' + n[p]);

                    //将空值转换为null避免不匹配保存
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

            let DBIDS = '';

            if (i.params.data.length > 0) {

                for (const n in i.params.data) {
                    if (i.params.data.hasOwnProperty(n)) {
                        DBIDS = DBIDS + i.params.data[n] + ',';
                    }
                }
            }
            DBIDS = DBIDS.substr(0, DBIDS.length - 1);

            DBIDS = '(' + DBIDS + ')';
            console.log("DBIDS:" + DBIDS);
            excuteSql = 'delete from `' + i.params.tableId + '` where DBID in ' + DBIDS;
            break;
        default:
            excuteSql = eval(i.sql);
            if (i.params) {
                if (i.params.filter) {
                    excuteSql = excuteSql + " where " + i.params.filter
                    console.log('default excuteSql:' + excuteSql);
                }
            }
            break;
    }

    console.log('excuteSql:' + excuteSql);

    return excuteSql;
}

module.exports = {
    createSql
}