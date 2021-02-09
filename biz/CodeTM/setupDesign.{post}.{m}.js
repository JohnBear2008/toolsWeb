module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	var PartsClass = sender.req.query.PartsClass;
	var DesignSpec = sender.req.query.DesignSpec;
	var Arrange = sender.req.query.Arrange;

	if (Arrange == 'Cargo') {
		HandleCargo(PartsClass, DesignSpec);
	}
	if (Arrange == 'Spec') {
		HandleDesign(PartsClass, DesignSpec);
	}

	function HandleCargo(pclass, shuffle) {
		let SQLInsert = "Update `auto_feature` set Design_Name = '" + shuffle + "' where  Parts_Class=? ";
		console.log("改霓虹登 :" + SQLInsert);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [pclass],
			success: function (result) {
				var retcode = { "status": "OK", "pclass": pclass };
				sender.success(retcode);
				console.log("思汗", retcode);
			},
			error: {},
		});
	}
	function HandleDesign(pclass, shuffle) {
		let SQLInsert = "Update `auto_feature` set Design_Spec = '" + shuffle + "' where  Parts_Class=? ";
		console.log("改跑馬登 :" + SQLInsert);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [pclass],
			success: function (result) {
				var retcode = { "status": "OK", "pclass": pclass };
				sender.success(retcode);
				console.log("成吉", retcode);
			},
			error: {},
		});
	}

}   