module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    // var sql="SELECT Account ,Sum(Loadnum) as SumLoad FROM feebackusage group by Account";
    // var sql="SELECT Subject ,AllowMoney FROM bom_chart where DeptName='软体部' group by Subject ";
    // var dataARR = [];
    // yjDBService.exec({
    //     sql : sql,
    //     parameters : [],
    //     rowsAsArray : true,
    //     success : function(result) {
    //         var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
    //         // console.log("烈",data);
    //         for (var i = 0; i < data.length; i++) {
    //             var Subject = (data[i].Subject.length>3 ) ? (data[i].Subject.substring(0, 3)) : data[i].Subject;
    //             console.log("烈",Subject);
    //             var temp = {
    //                 "Series": ( Subject ),
    //                 "Dollar": data[i].AllowMoney,
    //             }
    //             dataARR.push(temp)
    //         }
    //         console.log("奕星",dataARR);
    //           sender.success(dataARR); 
    //     },
    //     error : sender.error
    // });
    funAsync('2021');
    function funAsync(qryYear) {
        var dataARR = [];
        async.parallel([PopupDetail, PopupCredit],
            function (err, result) {
                if (err) {

                } else {
                    for (var i = 0; i < result[0].length; i++) {
                        var Series = '';
                        var Dollar = '';
                        if (result[0][i] == null || result[0][i] == undefined) {
                        } else {
                            Series = result[0][i].Series;
                            Dollar = result[0][i].Dollar;
                        }
                        var obj2 = {
                            "Series": Series,
                            "Dollar": Dollar,
                        };
                        // dataARR.push(obj2);
                        // console.log("拔罐:" + JSON.stringify(obj2));
                    }
                    dataARR.push(result[0]);
                    for (var i = 0; i < result[1].length; i++) {
                        var name = '';
                        var value = '';
                        if (result[1][i] == null || result[1][i] == undefined) {
                        } else {
                            name = result[1][i].DeptName;
                            value = result[1][i].UpperLimit;
                        }
                        var obj2 = {
                            "name": name,
                            "value": value,
                        };
                        // dataARR.push(obj2);
                        // console.log("抽筋:" + JSON.stringify(obj2));
                    }
                    dataARR.push(result[1]);
                    sender.success(dataARR);
                    var dump = JSON.stringify(dataARR);
                    if (dump.length > 1000) {
                        console.log("鲁班:" + dump.substring(0, 1000));
                    } else {
                        console.log("鲁班:" + JSON.stringify(dataARR));
                    }
                }
            });
        function PopupDetail(cb) {
            let SQL2 = "SELECT Subject ,AllowMoney FROM bom_chart where DeptName='软体部' group by Subject ";
            yjDBService.exec({
                sql: SQL2,
                parameters: [qryYear],
                rowsAsArray: true,
                success: function (result) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
                    for (var i = 0; i < data.length; i++) {
                        var Subject = (data[i].Subject.length > 3) ? (data[i].Subject.substring(0, 3)) : data[i].Subject;
                        // console.log("烈", Subject);
                        var temp = {
                            "Series": (Subject),
                            "Dollar": data[i].AllowMoney,
                        }
                        datas.push(temp)
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function PopupCredit(cb) {
            let SQL2 = "SELECT DeptName ,UpperLimit FROM bgu_credit  ";
            yjDBService.exec({
                sql: SQL2,
                parameters: [qryYear],
                rowsAsArray: true,
                success: function (result) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
                    for (var i = 0; i < data.length; i++) {
                        var DeptName =   data[i].DeptName;
                        // console.log("烈", DeptName);
                        var temp = {
                            "name": (DeptName),
                            "value": data[i].UpperLimit,
                        }
                        datas.push(temp)
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
    }
}