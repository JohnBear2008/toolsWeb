module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var Advstr = sender.req.query.Advstr;
	var Pattern =Advstr.Pattern;
	var StaffName =Advstr.StaffName;
	var StaffLevel =Advstr.StaffLevel;
	var PowerLabel =Advstr.PowerLabel;
	var GroupSQL = '';
	var DeptSQL = '';
	var Arrange = sender.req.query.Arrange;
	console.log("霖霖Name", StaffName);
	console.log("霖霖Level", StaffLevel);
	console.log("霖霖Power", PowerLabel); 
	console.log("霖霖Pattern", Pattern); 
	if (Pattern == 'Dept') {  //部門
		DeptSQL =  " DeptLabel = '" + PowerLabel + "' "; 
	}
	if (Pattern == 'Group') {  //组别
		GroupSQL =  " GroupLabel = '" + PowerLabel + "' ";
	}
	if (Arrange == 'JobSet') {
		JobSet(StaffName );
	}
	if (Arrange == 'JobReach') {
		JobReach(StaffName ,Pattern);
	}
	function JobReach( StaffName , Pattern ) {
		var SQLqry = " select tba.DeptLabel , tba.GroupLabel from  bgu_staffs tba where StaffName = ? ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [StaffName ],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					if(Pattern =='Group'){
						var temp = {
							"Record_Name": data[i].GroupLabel,
						}
					}if(Pattern =='Dept'){ 
						var temp = {
							"Record_Name": data[i].DeptLabel,
						}
					}else{
						var temp = {
							"Record_Name": data[i].GroupLabel,
						}
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("孝恩:" + dump.substring(0, 100));
				} else {
					console.log("孝恩:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	function JobSet( StaffName) {
		let SQLInsert = "Update `bgu_staffs` set StaffLevel = '" + StaffLevel + "', "+ DeptSQL +" "+ GroupSQL +" " +
		" where  StaffName=? ";
		console.log("改跑車 :" , SQLInsert);
		yjDBService.exec({
			sql: SQLInsert,
			parameters: [StaffName],
			success: function (result) {
				var retcode = { "status": "OK"  };
				sender.success(retcode);
				console.log("窝括台", retcode);
			},
			error: {},
		});
	}

}   