/*===========================================================================+
|   prototype expend                                                         |
+===========================================================================*/
// Chenly 2018-10-11 format eg. {0}.format("Inx 0")
String.prototype.format = function(args) {
    var result = this;
    var reg;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0, nLen = arguments.length; i < nLen; i++) {
                if (arguments[i] != undefined) {
                    reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};