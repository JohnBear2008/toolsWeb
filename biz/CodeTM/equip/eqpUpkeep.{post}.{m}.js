module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	var queryRule = sender.req.query.PartsRule;
	var queryClass = sender.req.query.PartsClass;
	var queryPartsChi = sender.req.query.PartsChi;
	var FixLabel = sender.req.query.FixLabel;
	var FixDesc = sender.req.query.FixDesc;
	var FixNewDesc = sender.req.query.FixNewDesc;
	var FixNewCID = sender.req.query.FixNewCID;
	var queryPartsPID = sender.req.query.PartsPID;
	var arrange = sender.req.query.arrange;
	var PartsSort = '1';
	console.log("南結一 :", arrange,"什么风",FixDesc,"南风",FixNewDesc);
	if(queryPartsPID=='1'){
		HandleUnitESub();
	}else{
		if (arrange == 'append') {
			HandleAppend();
		}
		if (arrange == 'remove') {
			HandleRemove();
		}
		if (arrange == 'refresh') {
			HandleRefresh();
		}
	}
	function HandleUnitESub( ) {
		let SQLInsert = "Update `auto_feature` set Unit_C =  ?,Unit_E =  ?   where   Parts_Rule=?  AND Parts_Class=?   ";
		// console.log("池田 :" + SQLInsert);
		console.log("池0田 :", FixNewDesc, "雨曦" , FixNewCID  ,   "池1田 :", queryRule, "池2田 :", queryClass );
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [FixNewCID , FixNewDesc, queryRule  , queryClass],
			success: function (result) {
				var retcode = { "status": "OK", "PartsChi": queryPartsChi };
				sender.success(retcode);
				console.log("夏", retcode);
			},
			error: {},
		});
	}
	function HandleAppend() {
		let SQLmax = "select max(PartsOID)+1 as MAXOID from `auto_nature` where PartsRule=? AND PartsClass=? AND PartsPID =? ";
		yjDBService.exec({
			sql: SQLmax,
			parameters: [ queryRule, queryClass , queryPartsPID ],
			rowsAsArray: true,
			success: function (r) {
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);

				for (var i = 0; i < data.length; i++) {
					var ClassRule = queryClass+queryRule;
					var PartsAttr = data[i].MAXOID;
					var PartsDesc = FixNewDesc;
					var PartsPID = queryPartsPID;
					var PartsOID = data[i].MAXOID;
					HandleAppendSub(ClassRule , PartsAttr, PartsDesc , PartsPID , PartsOID );
				}
			},
		})

	}
	function HandleAppendSub(ClassRule , PartsAttr , PartsDesc, PartsPID  , PartsOID ) {
		let SQLInsert = "INSERT INTO `auto_nature` ( `ClassRule` , `PartsRule`, `PartsClass` , `PartsAttr`,  `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort`  ) VALUES " +
			" (?,?,?,?,?,?,?,?  )  ";
		// console.log("惠濬 :" + SQLInsert);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [ClassRule , queryRule, queryClass, PartsAttr , PartsDesc , PartsPID , PartsOID , PartsSort ],
			success: function (result) {
				var retcode = { "status": "OK", "PartsChi": queryPartsChi };
				sender.success(retcode);
				console.log("晴月", retcode);
			},
			error: {},
		});
	}
	function HandleRemove() {
		let SQLInsert = "delete from `auto_nature` where PartsRule=? AND PartsClass=?  AND PartsPID =? AND  PartsDesc=?";
		// console.log("柳濬 :" + SQLInsert);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [queryRule, queryClass, queryPartsPID , FixDesc],
			success: function (result) {
				var retcode = { "status": "OK", "PartsChi": queryPartsChi };
				sender.success(retcode);
			},
			error: {},
		});
	}
	function HandleRefresh() {
		let SQLInsert = "Update `auto_nature` set PartsDesc =  ?  where   PartsRule=?  AND PartsClass=?  AND PartsPID =?  AND    PartsDesc=?";
		// console.log("池田 :" + SQLInsert);
		console.log("池0田 :", FixNewDesc, "池1田 :", queryRule, "池2田 :", queryClass, "池3田 :", FixDesc);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [FixNewDesc, queryRule, queryClass, queryPartsPID , FixDesc],
			success: function (result) {
				var retcode = { "status": "OK", "PartsChi": queryPartsChi };
				sender.success(retcode);
				console.log("夏", retcode);
			},
			error: {},
		});
	}
}   

// function HandleUnitE() {
	// 	let SQLmax = "select Unit_CID from `auto_unit` where Area='1' AND Level='1' AND Unit_Name =? ";
	// 	yjDBService.exec({
	// 		sql: SQLmax,
	// 		parameters: [ FixNewDesc ],
	// 		rowsAsArray: true,
	// 		success: function (r) {
	// 			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);

	// 			for (var i = 0; i < data.length; i++) {
	// 				var Unit_CID = data[i].Unit_CID; 
	// 				HandleUnitESub(Unit_CID , FixNewDesc, queryRule  , queryClass   );
	// 			}
	// 		},
	// 	})

	// }