
const prefix = 'http://127.0.0.1:3000';

const getUrl = (type) => {
    //c
    if (!type) {
        console.log("getUrl 参数不全");
    }
    //d
    let apiUrl = "";
    switch (type) {
        case 'material':
            apiUrl = 'getMaterial'
            break;
        case 'customer':
            apiUrl = 'getCustomer'
            break;
        case 'person':
            apiUrl = 'getPerson'
            break;
        case 'bom':
            apiUrl = 'getBom'
            break;
        case 'installInfo':
            apiUrl = 'getInstallInfo'
            break;
        case 'storeOut':
            apiUrl = 'getStoreOut'
            break;
        default:
            console.log("无法识别type");
            break;
    }
    //r
    return prefix + '/api/t9/' + apiUrl
}


const getT9Data = async ({
    to,
    type,
    UID,
    filter
}) => {
    //c-params
    if (!to && type) {
        console.log('getT9Data 参数定义不全');
        return
    }
    //d-get

    let res = await $.ajax({
        method: 'get',
        url: getUrl(type),
        data: {
            to,
            UID,
            filter
        },
        success: function (data) {
            return data;
        },
        error: function (error) {
            return error;
        }
    });
    console.log('getT9Data res', res);
    return res;



}

const T9DateFormat = (date) => {
    // console.log('T9DateFormat', date);

    let returnDate = '0000-00-00'
    if (date.toString().length !== 8) {
        console.log('日期格式长度不对!', date, date.toString().length)
        return returnDate
    }

    let year = date.toString().substring(0, 4)
    let month = date.toString().substring(4, 6)
    let day = date.toString().substring(6, 8)
    returnDate = year + '-' + month + '-' + day;
    return returnDate;
}