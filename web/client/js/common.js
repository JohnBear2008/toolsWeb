/*===========================================================================+
|   prototype expend                                                         |
+===========================================================================*/

/*===========================================================================+
|   prototype overload                                                       |
+===========================================================================*/



/*===========================================================================+
|   function                                                                 |
+===========================================================================*/
/**
 * @Author    Muc
 * @DateTime  2018-09-27
 * @Describle [Detects the current browser is supported or not]
 * @return    {[type]}             [description]
 */
function fnPromptMsg() {
    var body = document.getElementsByTagName("body")[0];

    if (typeof FileReader == 'undefined' || typeof body.style.WebkitAnimation == "undefined" || typeof(Promise) !== "function"){
        alert("当前浏览器不支持高级特性，建议使用如下浏览器的最新版本： \n · 猎豹浏览器 \n · 360浏览器");
    }

}

// Chenly 2018-10-11 console Log Array Content
function fnIterConsole(aray) {
    if (typeof aray) {
        for (var i = 0, len = aray.length; i < len; ++i) {
            console.log(aray[i]);
        }
    }

}