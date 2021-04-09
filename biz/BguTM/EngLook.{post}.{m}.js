const prjObj = require("./ysdata");

module.exports = function (sender) {
	//EngLook
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var arrange = sender.req.query.arrange;
	if (arrange == 'findEng') {
		findEng();
	}
	function findEng() {
		let datas=[];
		let r1 = {
			sql:'bgu_subject'
		};
		let Result = prjObj.createSql(r1);
		for (var i = 0; i < Result.length; i++) {
			var PrjLabel = 'P'+Result[i];
			var temp = {
				"PrjLabel": PrjLabel,
			}
			datas.push(temp)
		}
		var dump = JSON.stringify(datas);
		if (dump.length > 100) {
			console.log("前世:" + dump.substring(0, 100));
		} else {
			console.log("前世:" + JSON.stringify(datas));
		}
		sender.success(datas);

	}

};
