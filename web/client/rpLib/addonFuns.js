function MD5demo(msg) {
    //    var hash =md5('value');
    var hash = md5("123456");
    //    console.log('MD5效果'+hash); 
}

function MD5(msg) {
    var hash = md5(msg);
    // console.log('MD5效果'+hash); 
    return hash;
}

function base64(msg) {
    var base64 = new Base64();
    //加密
    var needEncryPw = msg;
    var encryPw = ""
    if (null != needEncryPw && needEncryPw != "") {
        encryPw = base64.encode(needEncryPw);
        // console.log('base64加密'+encryPw);
        return encryPw;
    }

}

function FastHandle(company, expressId) {
    var input_ShipperShipper = "";
    var input_Logistic = "";
    var url = "http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx";

    let DataSignRaw = "";
    let AppKey = "7611818b-6279-4398-8747-df2ca39e86b4";
    let EBusinessID = "1330422";
    let RequestType = "1002";
    let DataType = "2";
    // let sjson0 = {
    //     'OrderCode': '',
    //     'ShipperCode': 'SF',
    //     'LogisticCode': '118954907573'
    // };

    // var sjson3 = {
    //     "OrderCode": "",
    //     "ShipperCode": "ANE",
    //     "LogisticCode": "210001633605"
    // }

    var sjson2 = {
        "OrderCode": "",
        "ShipperCode": company,
        "LogisticCode": expressId
    };
    let RequestData = '';

    var ReqData = JSON.stringify(sjson2);
    RequestData = (encodeURIComponent(ReqData));
    console.log("公司" + company);
    console.log("单号" + expressId);
    //  var RequestDataOK='%7B%22OrderCode%22%3A%22%22%2C%22ShipperCode%22%3A%22ANE%22%2C%22LogisticCode%22%3A%22210001633605%22%7D';
    DataSignRaw = base64(MD5(JSON.stringify(sjson2) + AppKey));
    let DataSign = encodeURI(encodeURI(DataSignRaw));
    // DataSignOK ='NmUwMWIzOWU1ODg0ZTcwYjhlNTA0MDFmNzU2YzRmZWQ%3D'; 
    // console.log('请求签档'+DataSign);
    let params = {
        RequestData,
        EBusinessID,
        RequestType,
        DataSign,
        DataType
    };
    let expressParams = {
        url: url,
        params: params
    }

    return  expressParams;
    // getOrderHandle(url, param);
}

async function getOrderHandle(i) {

    let ajaxJson = await $.ajax({
        method: 'post',
        url:i.url,
        data: i.params,
        success: function (data) {
            console.log("字串数据:" + JSON.stringify(data));
            let rs = JSON.parse(data);
            return rs
        },
        error: function (err) {
            console("失败数据:" + JSON.stringify(err));
            let re = JSON.parse(err);
            return re
        }
    });
    return ajaxJson;
}






/**
 *获取快递信息
 *
 * @param {*} company 快递公司
 * @param {*} expressId 快递单号
 */
const getExpressTrack = async (company, expressId) => {
    let expressParams = FastHandle(company, expressId);
    let expressTrackJson=await getOrderHandle(expressParams);
    return expressTrackJson;

}