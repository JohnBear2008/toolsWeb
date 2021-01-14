
/**
 *上传附件功能 可混肴
 * https://www.sojson.com/jsobfuscator.html
 *
 * @param {*} obj
 */
var  RawName='';
var  KeyName='';
var  RawInput='';
var  PicKind='';
const uploadFiles = (files) => {
    let formData = new FormData();

    for (let n = 0; n < files.length; n++) {
        formData.append(n, files[n]);
    }

    // //添加目录放置到指定文件夹
    formData.append("desDir", "rp");

    console.log('data:' + formData);
    formData.forEach((value, key) => console.log('formData:' + key + ':' + value));
    $.ajax({
        data: formData,
        type: "POST",
        url: "/system.files.upload/",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        xhr: function () { //获取ajaxSettings中的xhr对象，为它的upload属性绑定progress事件的处理函数
            let myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) { //检查upload属性是否存在
                //绑定progress事件的回调函数
                myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
            }
            return myXhr; //xhr对象返回给jQuery使用
        },
        success: function (data, evt) {
            console.log("file data:" + JSON.stringify(data));
            console.log("file evt:" + JSON.stringify(evt));
 
            let filesLink = getSuccessFilesUrl(data);
            $('#files').html(filesLink); 
            let dataARR = data.files;
            console.log("你族:" ,   JSON.stringify(dataARR));
            RawInput = $('#RawInput').val();
            PicKind = $('#PicKind').val();
            console.log("你爸:" ,   RawName , "七:" ,   KeyName, "佛 :" ,   RawInput, " 枼 :" ,   PicKind); 
            var reportType = 'Bellup';
            var taskData = { "reportType": reportType, "RawName" : RawName , "RawInput" :  RawInput, "PicKind" :  PicKind , "KeyName": KeyName };
            $.ajax({
                method: 'POST',
                data: taskData,
                url: "/app/TMErp/getRoute",
                success: function (data) {
                    const json2 = JSON.stringify(data);
                    console.log("恒火", json2);
                },
                error: function () {
                }
            })
        },
        error: function () {
            alert("上传失败");
        }
    });
}

/**
 *选择文件函数
 *
 */
const fileSelected = () => {
    let files = $('#fileToUpload')[0].files;
    uploadFiles(files)
}

/**
 *获取已上传文件的可下载链接,用于前端展示
 *
 * @param {*} obj={fields,files}
 */
const getSuccessFilesUrl = (obj) => {

    let filesLink = ''
    let files = obj.files

    for (const n in files) {
        console.log('files n:' + JSON.stringify(files[n][0]));
        let file = files[n][0];
        RawName =  file.fileRawName;
        KeyName =  file.key;
        if (file.status === 'success') {
            if (obj.fields.desDir) {
                filesLink = filesLink + '<a  href=' + "/system.files.download/" + obj.fields.desDir + "%2F" + file.key + ' download=' +
                    file.fileRawName + '>' + '<span>' + file.fileRawName + '</span></a>' + ' ; ';
            } else {
                filesLink = filesLink + '<a  href=' + "/system.files.download/" + file.key + ' download=' +
                    file.fileRawName + '>' + '<span>' + file.fileRawName + '</span></a>' + ' ; ';
            }
        }
    }
    console.log('filesLink:' + filesLink);
    return filesLink;
}

/**
 *根据url 获取,file类型存储至数据库的json格式
 *
 * @param {*} 
 */
const getFilesJson = () => {
    let jsonArr = []
    $('#files').find('a').each(function () {
        let key = this.href
        let name = this.download
        key = key.split('/system.files.download/')[1];
        jsonArr.push({
            name: name,
            key: key
        })
    })
    let dbJson = JSON.stringify(jsonArr)
    return dbJson
}

/**
 *将数据库中的fileJSON 转换成前端url展示
 *
 * @param {*} json
 */
const getFilesUrl = (json) => {
    let fileArr = JSON.parse(json);
    // alert(fileArr.length)
    let filesLink = ''
    if (fileArr.length > 0) {
        for (const n of fileArr) {
            filesLink = filesLink + '<a  href=' + "/system.files.download/" + n.key + ' download=' +
                n.name + '>' + '<span>' + n.name + '</span></a>' + ' ; ';
        }
    }
    return filesLink;
}

/**
 *删除已上传文件
 *
 * @param {*} filesLink
 */
const deleteFiles = () => {
    //		alert(JSON.stringify(g_uploaded.files));
    $('#files').find('a').each(function () {
        let key = this.href
        key = key.split('/system.files.download/')[1];

        // // key = key.replace(/%2F/g, '/')//替换/字符
        // console.log("")
        // console.log(key)
        // var xhr = new XMLHttpRequest();
        // xhr.open("delete", "/system.files/"+key ); //修改成自己的接口
        // xhr.send();
        yjClient.ajax({
            method: "delete",
            url: "/system.files/" + key,
            success: function (data) {
                console.log("delete ok!", data)
            }
        })
    })
    $('#files').html('')
    // for (var name in g_uploaded.files) {
    //     var xhr = new XMLHttpRequest();
    //     alert(JSON.stringify(g_uploaded.files[0][0].key));
    //     xhr.open("delete", "/system.files/test/" +
    //         g_uploaded.files[name][0].key); //修改成自己的接口
    //     xhr.send();
    // }
}

//进度条控制
const progressHandlingFunction = (e) => {
    let curr = e.loaded;
    let total = e.total;
    let process = curr / total * 100;

    if (process > 0 && process < 100) {
        $("#progressbarDiv").show();
        $("#progressbar")[0].style.width = process + "%";
    } else {
        $("#progressbarDiv").hide();
    }
}