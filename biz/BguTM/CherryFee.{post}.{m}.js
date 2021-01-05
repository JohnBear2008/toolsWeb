require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var queryBillNo = sender.req.query.BillNo;
	var queryApplicNo = sender.req.query.ApplicNo;
	var arrange = sender.req.query.arrange;
	var weekbeg = sender.req.query.weekbeg;
	var weekend = sender.req.query.weekend;
	var CurWorkId = sender.req.query.CurWorkId;
	var CurName = sender.req.query.CurName;
	console.log("查询ID", CurWorkId);
	console.log("查询人", CurName);

	if (arrange == 'search') {
	    QueryParts( );
	} else {
	    
	}
    
	function QueryParts(  ) {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		let SQLExecute = "  SELECT tba.*,trul.CurName from  bgu_purchmain tba LEFT JOIN bgu_rule trul on tba.BillNo =trul.BillNo  " +
		" where  trul.CurName= ? and status ='0' " ;
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
		   console.log("...开始日", weekbeg);
		   capacity += " AND tba.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
		    console.log("...结束日", weekend);
		    capacity += " AND tba.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
		    console.log("...文号 <", queryBillNo,">");
		    capacity += " AND tba.BillNo  = " + "'" + queryBillNo + "' ";
		}
		// if (CurName != "" && CurName != "null" && CurName != undefined && CurName.length > 0) {
		// 	console.log("...查询人", CurName);
		// 	capacity += " AND CurName = " + "'" + CurName + "' ";
		//   }
		// if (filter != "" && filter != undefined) {
		//     SQLExecute = SQLExecute + " WHERE " + filter;
		// }
		if (capacity != "" && capacity != undefined) {
		  SQLExecute = SQLExecute + capacity;
		}
		// if (orderBy != "" && orderBy != undefined) {
		//     SQLExecute = SQLExecute + " ORDER BY " + orderBy;
		// }
		// if (limit != "" && limit != undefined) {
		//     SQLExecute = SQLExecute + " LIMIT " + limit;
		// }
	  console.log(" 模特 :" , SQLExecute); 
	  let paramelist = [CurName];
	  let dataArr = [];
	  yjDBService.exec({
	    sql: SQLExecute,
	    parameters: paramelist,
	    rowsAsArray: true,
	    success: function (result) {
		var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
		for (var i = 0; i < data.length; i++) {
		  var obj = {
		    "BillNo": ((data[i].BillNo == null || data[i].BillNo == undefined) ? ('') : data[i].BillNo),
		    "ListNo": ((data[i].ListNo == null || data[i].ListNo == undefined) ? ('') : data[i].ListNo),
		    "RequestDate": ((data[i].RequestDate == null || data[i].RequestDate == undefined) ? ('') : data[i].RequestDate),
		    "ProjectNo": ((data[i].ProjectNo == null || data[i].ProjectNo == undefined) ? ('') : data[i].ProjectNo),
		    "ApplicNo": ((data[i].ApplicNo == null || data[i].ApplicNo == undefined) ? ('') : data[i].ApplicNo),
		    "DeptName": ((data[i].DeptName == null || data[i].DeptName == undefined) ? ('') : data[i].DeptName),
		    "StaffID": ((data[i].StaffID == null || data[i].StaffID == undefined) ? ('') : data[i].StaffID),
		    "StaffName": ((data[i].StaffName == null || data[i].StaffName == undefined) ? ('') : data[i].StaffName),
		    "TotalValue": ((data[i].TotalValue == null || data[i].TotalValue == undefined) ? ('') : data[i].TotalValue),
		    "Currency": ((data[i].Currency == null || data[i].Currency == undefined) ? ('') : data[i].Currency),
		    "Payment": ((data[i].Payment == null || data[i].Payment == undefined) ? ('') : data[i].Payment),
		    "EntryDate": ((data[i].EntryDate == null || data[i].EntryDate == undefined) ? ('') : data[i].EntryDate),
		    "CurName": ((data[i].CurName == null || data[i].CurName == undefined) ? ('') : data[i].CurName),
		  };
		  dataArr.push(obj);
		}
		sender.success(dataArr);
		 console.log("满川晴月",JSON.stringify(dataArr));
	    },
	    error: sender.error
	  });
	}
    }    