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

    return expressParams;
    // getOrderHandle(url, param);
}

async function getOrderHandle(i) {

    let ajaxJson = await $.ajax({
        method: 'post',
        url: i.url,
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
    let expressTrackJson = await getOrderHandle(expressParams);
    return expressTrackJson;

}




// csv转sheet对象
function csv2sheet(csv) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function (row, i) {
        row = row.split(',');
        if (i == 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
        row.forEach(function (col, j) {
            sheet[String.fromCharCode(65 + j) + (i + 1)] = {
                v: col
            };
        });
    });
    return sheet;
}

// 读取本地excel文件
function readWorkbookFromLocalFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
        if (callback) callback(workbook);
    };
    reader.readAsBinaryString(file);
}

function readWorkbook(workbook) {
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
    var json = XLSX.utils.sheet_to_json(worksheet);
    // console.log('csv', csv);
    return json

    // document.getElementById('result').innerHTML = csv2table(csv);
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
    sheetName = sheetName || 'sheet1';
    var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
    };
    var wbout = XLSX.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    });
    // 字符串转ArrayBuffer
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    return blob;
}


/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(url, saveName) {
    if (typeof url == 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}

// // 传入csv，执行后就会弹出下载框
// function exportExcel(csv) {
// 	var sheet = csv2sheet(csv);
// 	var blob = sheet2blob(sheet);
// 	openDownloadDialog(blob, '导出.xlsx');
// }