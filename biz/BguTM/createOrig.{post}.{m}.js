require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var arrange = sender.req.query.arrange;
    if (arrange == 'classGroup') {
        classGroup();
    }
    if (arrange == 'classDept') {
        classDept();
    }
    if (arrange == 'eraseMode') {
        eraseMode();
    }
    function eraseMode() {
        var DeptName = sender.req.query.DeptName;
        var GroupName = sender.req.query.GroupName;
        var SQLDelete = "DELETE from `bgu_orig_detail` where GroupName = ?  ";
        console.log("闪:", GroupName);
        yjDBService.exec({
            sql: SQLDelete,
            parameters: [GroupName],
            success: function (result) {
             var retcode={"status": "OK" , "OrigName": GroupName };
             sender.success(retcode);
             eraseDept(DeptName);
         },
         error: sender.error
     });
    }
    function eraseDept(DeptName) {
        var SQLqry = " select tdtl.GroupID , tdtl.GroupName  from  bgu_orig_detail tdtl where DeptName =? ";
        console.log("凑",DeptName);
		yjDBService.exec({
			sql: SQLqry,
			parameters: [DeptName],
			success: function (r) {
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                // console.log("崎纱:", data.length);
                if(data.length ==0){
                    var DeptName = sender.req.query.DeptName; 
                    var SQLDelete = "DELETE from `bgu_orig` where DeptName = ?  ";
                    console.log("SQLDelete:" , SQLDelete );
                    yjDBService.exec({
                        sql: SQLDelete,
                        parameters: [ DeptName ],
                        success: function (result) {
                     },
                     error: sender.error
                 });
                }
			},
			error: {},
		});
    }
    function classGroup() {
        var DeptID = sender.req.query.DeptID;
        var swift = Math.random(100) * 100;
        swift = swift.toFixed(0);
        if (swift.length < 2) {
            swift = '0' + swift;
        }
        let now = new Date();
        var GroupID = now.Format("yyMMdd")+swift;
        var DeptValue = sender.req.query.DeptValue;
        var GroupName = sender.req.query.GroupName;
        var Loacation = '宁波弘讯科技';
        var Status = '1';
        var Descript = '大港';
        let paramList = [DeptID, DeptValue, GroupID ,GroupName, Loacation, Status, Descript];
        if (DeptValue != "" && DeptValue != undefined) {
            var SQLInsert = "INSERT INTO `bgu_orig_Detail` ( `DeptID` ,  `DeptName` ,  `GroupID` ,`GroupName` , `Loacation` , `Status`  , `Descript` ) " +
                "  VALUES ( ?,?,?,?,?,  ?,?  )";
            yjDBService.exec({
                sql: SQLInsert,
                parameters: paramList,
                rowsAsArray: true,
                success: function (result) {
                    var retcode={"status": "OK" ,"OrigName": GroupName };
                    sender.success(retcode);
                },
                error: sender.error
            });
        }
    }
    function classDept() {
        var swift = Math.random(100) * 100;
        swift = swift.toFixed(0);
        if (swift.length < 2) {
            swift = '0' + swift;
        }
        let now = new Date();
        var DeptID = now.Format("yyMMdd")+swift;
        var DeptName = sender.req.query.DeptName;
        var Loacation = '宁波弘讯科技';
        var Status = '1';
        var Descript = '大港';
        let paramList = [DeptID , DeptName, Loacation, Status, Descript];
        if (DeptName != "" && DeptName != undefined) {
            var SQLInsert = "INSERT INTO `bgu_orig` (  `DeptID` , `DeptName` , `Loacation` , `Status`  , `Descript` ) " +
                "  VALUES ( ?,?,?,?,?  )";

            yjDBService.exec({
                sql: SQLInsert,
                parameters: paramList,
                rowsAsArray: true,
                success: function (result) {
                    var retcode={"status": "OK" ,"OrigName" : DeptName };
                    sender.success(retcode);
                },
                error: sender.error
            });
        }
    }
    function nulReplaceTxt(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
        return ret;
    }
}