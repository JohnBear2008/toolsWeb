/**
 *Array.js
 *导入方式：var Array = require("./Array"); var Array = new Array();
 */

 Array.prototype.delRepeat = function () {

        var temp = {}, len = this.length;

        for (var i = 0; i < len; i++) {

            var tmp = this[i];

            if (!temp.hasOwnProperty(tmp)) {//hasOwnProperty用来判断一个对象是否有你给出名称的属性或对象

                temp[this[i]] = "yes";

            }

        }

        len = 0;

        var tempArr = [];

        for (var i in temp) {

            tempArr[len++] = i;

        }

        return tempArr;

    }