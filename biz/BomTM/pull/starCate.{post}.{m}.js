module.exports = function (sender) {
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	// var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
	var connectionOptions = yjGlobal.config.db_Connection.rich_T357.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	var arrange = sender.req.query.arrange; 
	var prodID = sender.req.query.prodID; 
	var prodNM = sender.req.query.prodNM; 
	if(arrange=='Basic'){
		BasicCate();
	}else{
		AdvCate(prodID ,prodNM);
	}
	function BasicCate() {
		var SQLqry = " select TOP 50 ProductID ,ProductName ,CreateDate from prdBOMMain ORDER BY CreateDate  ";
		var dataArr = [];	
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].ProductID,
						"ProductName": data[i].ProductName,
					}
					datas.push(temp)
				}
			      console.log("保养统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function AdvCate(prodID ,prodNM) {
	  var filter = "   ItemNo ='0' ";
	  if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
            filter += "  AND   ProductID LIKE " + "'%" + prodID + "%'";
        }
	  if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
            filter += "  AND   ProductName LIKE " + "'%" + prodNM + "%'";
        }
		var SQLqry = " select TOP 100 ProductID ,ProductName ,CreateDate from prdBOMMain where " + filter;
		console.log("品名", SQLqry);
		var dataArr = [];	
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [ ],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].ProductID,
						"ProductName": data[i].ProductName,
					}
					datas.push(temp)
				}
			      console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
};