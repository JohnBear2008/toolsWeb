/*
 * @Author: your name
 * @Date: 2021-03-02 10:16:51
 * @LastEditTime: 2021-04-08 16:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\web\client\rpLib\t9PublicFuns.js
 */
const prefix = 'https://172.16.3.49:8000';

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


        default:
            console.log("无法识别type");
            break;
    }
    //r
    return prefix + '/api/T9/' + apiUrl
}


const getT9Data = async ({
    to,
    type,
    UID
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
            UID
        },
        success: function (data) {
            return data;
        },
        error: function (error) {
            return error;
        }
    });

    return res;

    console.log('getT9Data rs', rs);

}