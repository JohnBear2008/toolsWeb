const getRegion = 'SELECT mername FROM `region`'
const getRegionSelector = 'SELECT mername AS option,pinyin as token FROM `region`'
const getCustomers = 'SELECT * FROM `rp_customers`'

//维修出货单主表单sql
const sqlResponseBills='select * from rp_recordbills ta  left join rp_responsebills tb on ta.responseBillId=tb.responseBillId left join rp_requestbills tc on ta.requestBillId=tc.requestBillId'

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
            let titles = ''
            let values = ''

            for (const n in i.params.data) {
                if (i.params.data.hasOwnProperty(n)) {
                    //Object.keys(i)[0] 用于获取对象第一个属性名称
                    // console.log('n'+JSON.stringify(Object.keys(i.params.data[n])[0]));
                    titles = titles + Object.keys(i.params.data[n])[0] + ',';
                    //Object.values(i)[0] 用于获取对象第一个属性值
                    console.log('v:' + Object.values(i.params.data[n])[0]);
                    values = values + '"' + Object.values(i.params.data[n])[0] + '",';
                }
            }

            titles = titles.substr(0, titles.length - 1);
            values = values.substr(0, values.length - 1);

            //DBID 为空则去掉titles,values DBID信息防止参数错误
            if (i.params.data[0]['DBID'] === '') {
                titles = titles.substr(titles.indexOf(',') + 1, titles.length);
                values = values.substr(values.indexOf(',') + 1, values.length);
            }

            titles = '(' + titles + ')';
            values = '(' + values + ')';

            excuteSql = 'replace into `' + i.params.tableId + '` ' + titles + ' values ' + values;

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

            break;
    }

    console.log('excuteSql:' + excuteSql);

    return excuteSql;
}

module.exports = {
    createSql
}