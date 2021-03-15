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

        default:
            console.log("无法识别type");
            break;
    }
    //r
    return prefix + '/api/T9/' + apiUrl
}


const getT9Data = async ({
    to,
    type
}) => {
    //c-params
    if (!to && type) {
        console.log('getT9Data 参数定义不全');
        return
    }
    //d-get

    let materialId = 'AA1-A000001-003'
    let res = await $.ajax({
        method: 'get',
        url: getUrl(type),
        data: {
            to,
            materialId
        },
        success: function (data) {
            console.log("getT9DataBySql data:", data);
            return data;
        },
        error: function (error) {
            console.log("getT9DataBySql error:", error);
        }
    });

    return res;

    console.log('getT9Data rs', rs);

}