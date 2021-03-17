require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");

	let now = new Date();
	var EntryDate = now.Format("yyyyMMdd");
	var BudYear = now.Format("yyyy");
	var BillNo = sender.req.query.BillNo;
	var TotalValue = sender.req.query.TotalValue;
	var queryApplicNo = sender.req.query.ApplicNo;
	var qryCurWorkId = sender.req.query.CurWorkId;
	var qryCurName = sender.req.query.CurName;
	var qryCurJob = sender.req.query.CurJob;
	var qryCurPhone = sender.req.query.CurPhone;
	var Formkind = sender.req.query.Formkind;
	console.log("同意人", qryCurName , "釘釘 ", qryCurPhone, "文", BillNo, "金额", TotalValue, "表单", Formkind,  "作", qryCurJob);
	var IsBothOver = 'N';  //项目&副总皆超过为 Y
	var IsVipOver = 'N';  //副总超过为 Y
	var IsOver = 'N';  //项目超过为 Y
	var CurStatus = '';
	var CurText = '';
	var CurLevel = '';
	var TermiLevel = '';
	var nextLevel = '';
	var nextWorkId = '';
	var nextName = '';
	var fixdate = '';
	var fixlv = '';
	var tundate = '';
	var tunlv = '';
	var VipName = '';
	var VipWorkId = '';
	var VipStaffId = '';
	var RequestDate = '';
	var TotalValue = 0;
	var FlowDeptName = '';
	var FlowGroupName = '';
	var FlowCeoWorkId = '';
	var FlowCeoName = '';
	var FlowBodWorkId = '';
	var FlowBodName = '';
	var CurJob = qryCurJob;
	var Flowphone = '';
	QueryParts();
	function QueryParts() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		let SQLExecute = "  SELECT  * from bgu_rule trul  where  trul.billNo= ?   ";
		let paramelist = [BillNo];
		let dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				// BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, fixdate, fixlv
				var nowtjob = '';
				let Track = [];
				var AppFlag = 0;
				for (var i = 0; i < data.length; i++) {
					Track = data[i].Track;
					var TrackUU = JSON.parse(Track);
					// console.log("别问我谁  ", Track);  qryCurName
					
					FlowDeptName = data[i].DeptLabel;
					FlowGroupName = data[i].GroupLabel;
					CurLevel = data[i].CurLevel;
					TermiLevel = data[i].TermiLevel;
					CurWorkId = data[i].CurWorkId;
					CurJob = data[i].CurJob;
					VipName = data[i].VipName;
					VipWorkId = data[i].VipWorkId;
					CurName = data[i].CurName;
					RequestDate = data[i].EntryDate; RequestDate = nulReplaceDate(RequestDate);
					nextLevel = parseInt(CurLevel) + 1;
					var repeatName ='';
					var OppName = data[i].OppName;
					var MagName = data[i].MagName;
					var PurName = data[i].PurName;
					var PexName = data[i].PexName;
					var CfoName = data[i].CfoName;
					var PsdName = data[i].PsdName;
					var CeoName = data[i].CeoName;
					var BodName = data[i].BodName;
					 console.log("你血管里流淌着的",OppName,MagName,VipName,PurName,PexName,CfoName,PsdName,CeoName,BodName);

					if (CurLevel == TermiLevel) {
						AppFlag = 1;
					}
					if (nextLevel == 2) {
						nowtjob = TrackUU[0].Level1;  //dpt
						nextjob = TrackUU[0].Level2;  //vip
						console.log("-----------------推2推推  ", nextjob);
						repeatName += OppName;
						repeatName += MagName;
					}
					if (nextLevel == 3) {
						nowtjob = TrackUU[0].Level2;  //dpt
						nextjob = TrackUU[0].Level3;  //vip
						console.log("---------------推3推推  ", nextjob);
						repeatName += OppName;repeatName += MagName;repeatName += VipName;
					}
					if (nextLevel == 4) {
						nowtjob = TrackUU[0].Level3;
						nextjob = TrackUU[0].Level4;
						console.log("---------------推4推推  ", nextjob);
						repeatName += OppName;repeatName += MagName;repeatName += VipName;repeatName += PurName;
					}
					if (nextLevel == 5) {
						nowtjob = TrackUU[0].Level4;
						nextjob = TrackUU[0].Level5;
						console.log("---------------推5推  ", nextjob);
						repeatName += OppName;repeatName += MagName;repeatName += VipName;repeatName += PurName;
						repeatName += PexName;
					}
					if (nextLevel == 6) {
						nowtjob = TrackUU[0].Level5;
						nextjob = TrackUU[0].Level6;
						console.log("---------------推6推  ", nextjob);
						repeatName += OppName;repeatName += MagName;repeatName += VipName;repeatName += PurName;
						repeatName += PexName;repeatName += CfoName;
					}
					if (nextLevel == 7) {
						nowtjob = TrackUU[0].Level6;
						nextjob = TrackUU[0].Level7;
						console.log("---------------推7推  ", nextjob);
					}
					if (nextLevel == 8) {
						nowtjob = TrackUU[0].Level7;
						nextjob = TrackUU[0].Level8;
						console.log("---------------推8推  ", nextjob);
					}
					if (nextLevel == 9) {
						nowtjob = TrackUU[0].Level8;
						nextjob = TrackUU[0].Level9;
						console.log("---------------推10推  ", nextjob);
					}
					
					var Twins = '0';
				
					if (nowtjob == 'dpt') {
						fixdate = "  MagDate ='" + EntryDate + "',  ";
						fixlv = "  Level2 ='Y' ";
					}
					if (nowtjob == 'vip') {
						fixdate = "  VipDate ='" + EntryDate + "' , ";
						fixlv = "  Level3 ='Y' ";
					}
					if (nowtjob == 'pur') {
						fixdate = "  PurDate ='" + EntryDate + "' , ";
						fixlv = "  Level4 ='Y' ";
					}
					if (nowtjob == 'pex') {
						fixdate = "  PexDate ='" + EntryDate + "' , ";
						fixlv = "  Level5 ='Y' ";
					}
					if (nowtjob == 'cfo') {
						fixdate = "  CfoDate ='" + EntryDate + "' , ";
						fixlv = "  Level6 ='Y' ";
					}
					if (nowtjob == 'psd') {
						fixdate = "  PsdDate ='" + EntryDate + "' ,  ";
						fixlv = "  Level7 ='Y' ";
					}
					if (nowtjob == 'ceo') {
						fixdate = "  CeoDate ='" + EntryDate + "' , ";
						fixlv = "  Level8 ='Y' ";
					}
					if (nowtjob == 'bod') {
						fixdate = "  BodDate ='" + EntryDate + "' , ";
						fixlv = "  Level9 ='Y' ";
					}
					if (nextjob == 'vip') {
						nextWorkId = data[i].VipWorkId;
						nextName = data[i].VipName;
					}
					if (nextjob == 'pur') {
						nextWorkId = data[i].PurWorkId;
						nextName = data[i].PurName;
					}
					if (nextjob == 'pex') {
						nextWorkId = data[i].PexWorkId;
						nextName = data[i].PexName;
					}
					if (nextjob == 'cfo') {
						nextWorkId = data[i].CfoWorkId;
						nextName = data[i].CfoName;
					}
					if (nextjob == 'psd') {
						nextWorkId = data[i].PsdWorkId;
						nextName = data[i].PsdName;
					}
					if (nextjob == 'ceo') {
						nextWorkId = data[i].CeoWorkId;
						nextName = data[i].CeoName;
					}
					if (nextjob == 'bod') {
						nextWorkId = data[i].BodWorkId;
						nextName = data[i].BodName;
					}
					if (qryCurName == nextName) {
						Twins = '1';
						console.log("双胞胎  ", nextWorkId, nextName);
					}
					if (  repeatName.indexOf(nextName) >-1 && nextName!= null && nextName!= '' ) {
						if(nextjob=='ceo' || nextjob=='bod' || nextjob=='psd'  ){
							Twins = '0';
						}else{
							Twins = '1';
						}
						console.log("放马过来  ",repeatName,"悲哀", nextName); 
					}
				}
				if (AppFlag == 1) {
					CurStatus = 'Q';
					CurText = '核准';
					console.log("生米煮熟  ", AppFlag);
					if (Formkind == '采购单') {
						console.log(" 我要采购单  ", CurJob );
						if (CurJob == 'ceo') {
							console.log("~~~CEO 只改状态 ");
							HandleRule(Twin, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
						} else {
							console.log(" 不学无术的悲哀 ", fixdate);
							qryPurch(BillNo);
						}
					} else {
						HandleRule(Twins, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
					}
				} else {
					CurStatus = 'P';
					CurText = '审批';
					console.log("翻盘进行....", AppFlag);
					HandleRule(Twins, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
				}
				// console.log("妲己nextLevel", nextLevel);
				// console.log("妲己nextName", nextName);
				// console.log("妲己nextWorkId", nextWorkId);
			},
			error: sender.error
		});
	}
	//得 TotalValue BudgetItem DeptName
	function qryPurch(BillNo) {
		let SQLExecute = "  SELECT  * from bgu_purchmain tba  where  tba.billNo= ?   ";
		let paramelist = [BillNo];
		let dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				var Subject = '';
				var BudgetCID = '';
				var BudgetItem = '';
				for (var i = 0; i < data.length; i++) {
					Subject = data[i].Subject;
					BudgetCID = data[i].BudgetCID;
					BudgetItem = data[i].BudgetItem;
					TotalValue = data[i].TotalValue; TotalValue = nulReplace0(TotalValue);
					TotalValue = parseInt(TotalValue, 10);
					DeptName = data[i].DeptName;
					GroupName = data[i].GroupName;
					console.log("瀑布圖", BudgetCID, TotalValue, DeptName);
				}
				qryQuota(BillNo, Subject, BudYear, BudgetCID, BudgetItem, DeptName, TotalValue);
			},
			error: sender.error
		});
	}
	//得 AllowMoney Accumulate
	function qryQuota(BillNo, Subject, BudYear, BudgetCID, BudgetItem, DeptName, TotalValue) {
		// console.log("栗惠美", BudgetCID, BudYear, DeptName);
		let SQLExecute = "  SELECT  * from bgu_quota tba  where  tba.BudgetCID= ?  and  tba.BudYear= ?  and  tba.DeptName= ?    ";
		let paramelist = [BudgetCID, BudYear, DeptName];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				var AllowMoney = 0;
				var Accumulate = 0;
				var SNNO = '';
				var qryIsOver = '';
				for (var i = 0; i < data.length; i++) {
					AllowMoney = data[i].AllowMoney;
					AllowMoney = nulReplace0(AllowMoney);
					AllowMoney = parseInt(AllowMoney, 10);
					Accumulate = data[i].Accumulate;
					Accumulate = nulReplace0(Accumulate);
					Accumulate = parseInt(Accumulate, 10);
					SNNO = data[i].SNNO;
					qryIsOver = data[i].IsOver;
					console.log("误差宽度", AllowMoney, Accumulate, qryIsOver);
				}
				let now = new Date();
				var labDate = now.Format("yyyyMMdd");
				RequestDate = labDate;
				if (qryIsOver == 'N') {
					console.log("项目没超过");
					HandleQuota(BudgetCID, TotalValue, BudYear, SNNO, AllowMoney, Accumulate, DeptName);
					HandleDtlQuota(Subject, BudgetCID, BudgetItem, BudYear, RequestDate, BillNo, SNNO, DeptName, TotalValue);
				} else {
					console.log("秒杀了");
					qryCredit(0, TotalValue);
				}
			},
			error: sender.error
		});
	}
	//计算 Accumulate UseMoney 由 TotalValue  AllowMoney
	function HandleQuota(BudgetCID, TotalValue, BudYear, SNNO, AllowMoney, Accumulate, DeptName) {
		AllowMoney = nulReplace0(AllowMoney);
		AllowMoney = parseInt(AllowMoney, 10);
		TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
		Accumulate = nulReplace0(Accumulate);
		Accumulate = parseInt(Accumulate, 10) + TotalValue;
		SNNO = nulReplace0(SNNO); SNNO = parseInt(SNNO, 10) + 1;
		IsOver = 'N';
		console.log();
		var bufferTot = 0;
		var diffMoney = 0;
		if (Accumulate > AllowMoney) {
			IsOver = 'Y';
			bufferTot = Accumulate;
			diffMoney = bufferTot - AllowMoney;
			Accumulate = AllowMoney;
			var Surplus = 0;
		} else {
			var Surplus = AllowMoney - Accumulate;
		}
		console.log("公孙离TotalValue", TotalValue, "AllowMoney", AllowMoney, "公孙离 Accumulate", Accumulate);

		if (IsOver == 'N') {
			HandleRule("0" ,BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
		} else {
			console.log("捕刀了", bufferTot, diffMoney);
			qryCredit(bufferTot, diffMoney);
		}
		var SQLUPt = "Update `bgu_quota` set Accumulate =? , IsOver =?, Surplus =? , SNNO  =?   " +
			" where  BudgetCID= ? and BudYear =? and DeptName =? ";
		let paramList = [Accumulate, IsOver, Surplus, SNNO, BudgetCID, BudYear, DeptName];
		yjDBService.exec({
			sql: SQLUPt,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				// console.log("唯朕独尊:", result);
			},
			error: sender.error
		});
	}
	function HandleDtlQuota(Subject, BudgetCID, BudgetItem, BudYear, RequestDate, BillNo, SNNO, DeptName, TotalValue) {
		console.log("殿昌 ", Subject, BudgetCID, BudgetItem, BudYear, RequestDate, BillNo, SNNO, DeptName, TotalValue);
		var SQLInsert = "INSERT INTO `bgu_quotadetail` " +
			"(`Subject`, `BudgetCID` , `BudgetItem` , `BudYear` , `RequestDate`,`BillNo`, `SNNO` , `DeptName` , `TotalValue`   ) " +
			"  VALUES (?,?,?,?,?,?,?,?,?   )";
		let paramList = [Subject, BudgetCID, BudgetItem, BudYear, RequestDate, BillNo, SNNO, DeptName, TotalValue];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				// console.log("目汇:", result);
			},
			error: sender.error
		});
	}
	function HandleRule(Twins, BillNo, CurStatus, CurText, CurLevel, CurWorkId, CurName, CurJob, fixdate, fixlv, tundate, tunlv) {
		if(CurName != null && CurName!=undefined && CurName!=''){

		}else{
			CurName =qryCurName;
		}
		if(CurWorkId != null && CurWorkId!=undefined && CurWorkId!=''){

		}else{
			CurWorkId =qryCurPhone;
		}
		let SQL = "Update `bgu_rule` set  CurStatus = ? , CurText = ? ,  CurLevel = ? , CurWorkId = ? , CurName = ? , CurJob = ? ," +
			" " + tundate + " " + tunlv + "   " + fixdate + "  " + fixlv + " where  BillNo=?  ";
		//  console.log("后羿:", tundate ,"后羿",tunlv); 
		//  console.log("宫本武藏:", fixdate ,fixlv); 
		 console.log("武则天:", CurStatus, CurText, CurLevel, CurWorkId, CurName, CurJob, BillNo); 
		Flowphone = CurWorkId;
		yjDBService.exec({
			sql: SQL,
			parameters: [CurStatus, CurText, CurLevel, CurWorkId, CurName, CurJob, BillNo],
			rowsAsArray: true,
			success: function (result) {
				console.log("写规则:", CurName, CurJob);
				if (CurStatus == 'Q') {
					NoticeNotOver();
				} else {
					NoticePending();
				}
				if (Twins == '1') {
					HandleTwins(CurLevel);
				}
			},
			error: sender.error
		});
	}
	function HandleTwins(CurIdleLevel) {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		let SQLExecute = "  SELECT  * from bgu_rule trul  where  trul.billNo= ?   ";
		let paramelist = [BillNo];
		let dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				// BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, fixdate, fixlv
				var nowtjob = '';
				let Track = [];
				var idleAppFlag = 0;
				for (var i = 0; i < data.length; i++) {
					Track = data[i].Track;
					var TrackUU = JSON.parse(Track);
					// console.log("别问我谁  ", Track);  qryCurName
					FlowDeptName = data[i].DeptLabel;
					FlowGroupName = data[i].GroupLabel;
					// CurLevel = data[i].CurLevel;
					TermiLevel = data[i].TermiLevel;
					CurWorkId = data[i].CurWorkId;
					CurJob = data[i].CurJob;
					VipName = data[i].VipName;
					VipWorkId = data[i].VipWorkId;
					CurName = data[i].CurName;
					RequestDate = data[i].EntryDate; RequestDate = nulReplaceDate(RequestDate);
					var nextIdleLev = (CurIdleLevel) + 1;
					console.log("武则地4=",nextIdleLev);
					if (CurIdleLevel == TermiLevel) {
						idleAppFlag = 1;
					}
					if (nextIdleLev == 2) {
						nowtjob = TrackUU[0].Level1;  //dpt
						nextjob = TrackUU[0].Level2;  //vip
						console.log("-----------------油2油油  ", nextjob);
					}
					if (nextIdleLev == 3) {
						nowtjob = TrackUU[0].Level2;  //dpt
						nextjob = TrackUU[0].Level3;  //vip
						console.log("---------------油3油油  ", nextjob);
					}
					if (nextIdleLev == 4) {
						nowtjob = TrackUU[0].Level3;
						nextjob = TrackUU[0].Level4;
						console.log("---------------油4油油  ", nextjob);
					}
					if (nextIdleLev == 5) {
						nowtjob = TrackUU[0].Level4;
						nextjob = TrackUU[0].Level5;
						console.log("---------------油5油  ", nextjob);
					}
					if (nextIdleLev == 6) {
						nowtjob = TrackUU[0].Level5;
						nextjob = TrackUU[0].Level6;
						console.log("---------------油6油  ", nextjob);
					}
					if (nextIdleLev == 7) {
						nowtjob = TrackUU[0].Level6;
						nextjob = TrackUU[0].Level7;
						console.log("---------------油7油BUG  ", nextjob);
					}
					if (nextIdleLev == 8) {
						nowtjob = TrackUU[0].Level7;
						nextjob = TrackUU[0].Level8;
						console.log("---------------油8油  ", nextjob);
					}
					if (nextIdleLev == 9) {
						nowtjob = TrackUU[0].Level8;
						nextjob = TrackUU[0].Level9;
						console.log("---------------油10油  ", nextjob);
					}
					var tundate = '';
					var tunlv = '';
					// var Twins = '0';
					var PurName = data[i].PurName;
					var PexName = data[i].PexName;
					var CfoName = data[i].CfoName;
					var PsdName = data[i].PsdName;
					var CeoName = data[i].CeoName;
					var BodName = data[i].BodName;
					if (nowtjob == 'dpt') {
						fixdate = "  MagDate ='" + EntryDate + "',  ";
						fixlv = "  Level2 ='Y' ";
					}
					if (nowtjob == 'vip') {
						fixdate = "  VipDate ='" + EntryDate + "' , ";
						fixlv = "  Level3 ='Y' ";
					}
					if (nowtjob == 'pur') {
						fixdate = "  PurDate ='" + EntryDate + "' , ";
						fixlv = "  Level4 ='Y' ";
					}
					if (nowtjob == 'pex') {
						fixdate = "  PexDate ='" + EntryDate + "' , ";
						fixlv = "  Level5 ='Y' ";
					}
					if (nowtjob == 'cfo') {
						fixdate = "  CfoDate ='" + EntryDate + "' , ";
						fixlv = "  Level6 ='Y' ";
					}
					if (nowtjob == 'psd') {
						fixdate = "  PsdDate ='" + EntryDate + "' ,  ";
						fixlv = "  Level7 ='Y' ";
					}
					if (nowtjob == 'ceo') {
						fixdate = "  CeoDate ='" + EntryDate + "' , ";
						fixlv = "  Level8 ='Y' ";
					}
					if (nowtjob == 'bod') {
						fixdate = "  BodDate ='" + EntryDate + "' , ";
						fixlv = "  Level9 ='Y' ";
					}
					if (nextjob == 'vip') {
						nextWorkId = data[i].VipWorkId;
						nextName = data[i].VipName;
					}
					if (nextjob == 'pur') {
						nextWorkId = data[i].PurWorkId;
						nextName = data[i].PurName;
					}
					if (nextjob == 'pex') {
						nextWorkId = data[i].PexWorkId;
						nextName = data[i].PexName;
					}
					if (nextjob == 'cfo') {
						nextWorkId = data[i].CfoWorkId;
						nextName = data[i].CfoName;
					}
					if (nextjob == 'psd') {
						nextWorkId = data[i].PsdWorkId;
						nextName = data[i].PsdName;
					}
					if (nextjob == 'ceo') {
						nextWorkId = data[i].CeoWorkId;
						nextName = data[i].CeoName;
					}
					if (nextjob == 'bod') {
						nextWorkId = data[i].BodWorkId;
						nextName = data[i].BodName;
					}
					if (qryCurName == nextName) {
						// Twins = '1';
						console.log("三胞胎  ", nextWorkId, nextName);
					}
				}
				// console.log("妲己nextLevel", nextLevel);
				// console.log("妲己nextName", nextName);
				// console.log("妲己nextWorkId", nextWorkId);
				if (idleAppFlag == 1) {
					CurStatus = 'Q';
					CurText = '核准';
					console.log("馬奋煮熟  ", idleAppFlag);
					if (Formkind == '采购单') {
						console.log(" 我要采购单  ", CurJob);
						if (CurJob == 'ceo') {
							console.log("双生 Ceo  ");
							// HandleRule(Twin, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
						} else {
							console.log("双生  Psd ", CurJob);
							console.log("~~~不学无术 ", fixdate);
							// qryPurch(BillNo);
						}
					} else {
						// HandleRule(Twins, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
					}
				} else {
					CurStatus = 'P';
					CurText = '审批';
					console.log("双生  一般人 ", CurJob); 
					// HandleRule(Twins, BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
				}
				let SQL = "Update `bgu_rule` set  CurStatus = ? , CurText = ? ,  CurLevel = ? , CurWorkId = ? , CurName = ? , CurJob = ? ," +
					" " + tundate + " " + tunlv + "   " + fixdate + "  " + fixlv + " where  BillNo=?  ";
				console.log("孙尚香:", CurStatus, CurText, nextIdleLev, nextWorkId, nextName, nextjob, BillNo);
				Flowphone = CurWorkId;
				yjDBService.exec({
					sql: SQL,
					parameters: [CurStatus, CurText, nextIdleLev, nextWorkId, nextName, nextjob, BillNo],
					rowsAsArray: true,
					success: function (result) {
						console.log("流鼻:", CurName, CurJob);
						// if (CurStatus == 'Q') {
						// 	NoticeNotOver();
						// } else {
						// 	NoticePending();
						// }
					},
					error: sender.error
				});
			},
			error: sender.error
		});
	}
	function qryCredit(bufferTot, diffMoney) {
		let SQLExecute = "  SELECT  * from bgu_credit tba  where  tba.StaffName= ?  and  tba.BudYear= ?      ";
		// console.log("查信用", VipName, BudYear, diffMoney);
		let paramelist = [VipName, BudYear];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				var UpperLimit = 0;
				var Accumulate = 0;
				var Surplus = 0;
				var SNNO = 0;
				for (var i = 0; i < data.length; i++) {
					VipStaffId = data[i].StaffId; 
					UpperLimit = data[i].UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
					Accumulate = data[i].Accumulate; Accumulate = nulReplace0(Accumulate);
					Accumulate += diffMoney;
					SNNO = data[i].SNNO; SNNO = nulReplace0(SNNO); SNNO = parseInt(SNNO, 10);
					SNNO = SNNO + 1;
					if (Accumulate > UpperLimit) {
						IsVipOver = 'Y';
						Surplus = 0;
					} else {
						Surplus = UpperLimit - Accumulate;
					}
					console.log("信用良好", VipName, BudYear, Accumulate);
				}
				console.log("现在是：", CurJob);
				if (CurJob == 'bod') {
					UpdateCredit(Accumulate, Surplus, IsVipOver, SNNO, VipName, BudYear);
					UpdateCreditDetail(VipStaffId, VipName, BudYear, RequestDate, BillNo, SNNO, diffMoney);
					if (IsVipOver == 'Y') {
						NoticeOver();
					} else {
						NoticeNotOver();
					}
					console.log("老板审批过了………………", IsVipOver);
					console.log("何以缘起", tundate);
					console.log("何以缘起", fixdate);

					HandleRule("0",BillNo, CurStatus, CurText, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv, tundate, tunlv);
				} else if (CurJob == 'psd') {
					if (IsVipOver == 'Y') {
						 
					} else {  //余总没超过写预算
						UpdateCredit(Accumulate, Surplus, IsVipOver, SNNO, VipName, BudYear);
						UpdateCreditDetail(VipStaffId, VipName, BudYear, RequestDate, BillNo, SNNO, diffMoney);
					}
					MakeupRule(BillNo, nextLevel, nextWorkId, nextName, nextjob, fixdate, fixlv);
				}
			},
			error: sender.error
		});
	}
	function UpdateCredit(Accumulate, Surplus, IsVipOver, SNNO, VipName, BudYear) {
		// console.log("秋昭贞--------------", Accumulate, Surplus, IsVipOver, SNNO, VipName, BudYear);
		var SQLUPt = "Update `bgu_credit` set Accumulate =? , Surplus =? , IsOver =?,  SNNO  =?   " +
			" where  StaffName = ? and  BudYear =?  ";
		let paramList = [Accumulate, Surplus, IsVipOver, SNNO, VipName, BudYear];
		yjDBService.exec({
			sql: SQLUPt,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
			},
			error: sender.error
		});
	}
	function UpdateCreditDetail(VipStaffId, VipName, BudYear, RequestDate, BillNo, SNNO, diffMoney) {
		// console.log("苞娜 ", VipWorkId, VipName, BudYear, RequestDate, BillNo, SNNO, diffMoney);
		// SNNO ,diffMoney 
		var SQLInsert = "INSERT INTO `bgu_creditdetail` " +
			"( `StaffId` , `StaffName` ,  `BudYear` , `RequestDate` ,`BillNo` , `SNNO` , `TotalValue`   ) " +
			"  VALUES (?,?,?,?,?,?,?  )";
		let paramList = [VipStaffId, VipName, BudYear, RequestDate, BillNo, SNNO, diffMoney];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {

			},
			error: sender.error
		});
	}
	function MakeupRule(BillNo, CurLevel, CurWorkId, CurName, CurJob, fixdate, fixlv) {
		let SQL = "Update `bgu_rule` set  CurStatus = ? , CurText = ? ,  CurLevel = ? , CurWorkId = ? , CurName = ? , CurJob = ? ," +
			" " + fixdate + "  " + fixlv + "  where  BillNo=?  ";
 //审批同意改為CurWorkId, CurName 自己 
		if(CurName != null && CurName!=undefined && CurName!=''){

		}else{
			CurName =qryCurName;
		}
		if(CurWorkId != null && CurWorkId!=undefined && CurWorkId!=''){

		}else{
			CurWorkId =qryCurPhone;
		}
		console.log("柳下濬 ", CurStatus, CurText, CurLevel, "眼", CurWorkId, "眼", CurName, "柳", CurJob, BillNo);
		Flowphone = CurWorkId;
		yjDBService.exec({
			sql: SQL,
			parameters: [CurStatus, CurText, CurLevel, CurWorkId, CurName, CurJob, BillNo],
			rowsAsArray: true,
			success: function (result) {
				if (IsVipOver == 'Y') {
					CurStatus = 'P';
					CurText = '审批';
					console.log("虞姬 ");
					seeAudit(BillNo, CurLevel, CurStatus, CurText);
					NoticeOver();
				} else {
					if (CurStatus == 'Q') {
						CurStatus = 'Q';
						CurText = '核准';
						NoticeNotOver();
					} else {
						NoticePending();
					}
				}
			},
			error: sender.error
		});
	}
	function seeAudit(BillNo, CurLevel, CurStatus, CurText) {
		console.log(" 市直", DeptName, GroupName);
		let SQL4 =
			" select tceo.Mobiles as CeoWorkId, tceo.staffName as CeoName, tbod.Mobiles as BodWorkId, tbod.staffName as BodName from  bgu_staffs tba " +
			" LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tceo.staffLevel='8' " +
			" LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tbod.staffLevel='9' " +
			"  where tba.DeptLabel=? and tba.StaffLevel='1'  ";
		yjDBService.exec({
			sql: SQL4,
			parameters: [DeptName],
			rowsAsArray: true,
			success: function (r) {
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					FlowCeoWorkId = data[i].CeoWorkId;
					FlowCeoName = data[i].CeoName;
					FlowBodWorkId = data[i].BodWorkId;
					FlowBodName = data[i].BodName;
				}
				AddAudit(BillNo, CurLevel, TermiLevel, FlowCeoWorkId, FlowCeoName, FlowBodWorkId, FlowBodName);
			},
			error: sender.error
		});
	}
	function AddAudit(BillNo, CurLevel, TermiLevel, FlowCeoWorkId, FlowCeoName, FlowBodWorkId, FlowBodName) {
		console.log(" 任多荣 ", CurLevel, FlowCeoWorkId, FlowCeoName, FlowCeoWorkId, FlowCeoName, FlowBodWorkId, FlowBodName, BillNo);
		var CurStatus = 'P';
		var CurText = '审批';
		var TermiLevel = parseInt(TermiLevel) + 2;
		let SQL = "Update `bgu_rule` set CurStatus = ? , CurText = ? , CurLevel = ? , TermiLevel = ? , CurWorkId = ? , CurName = ? ," +
			" CeoWorkId = ? ,  CeoName = ? ,  BodWorkId = ? ,  BodName = ?   where  BillNo=?  ";
		yjDBService.exec({
			sql: SQL,
			parameters: [CurStatus, CurText, CurLevel, TermiLevel, FlowCeoWorkId, FlowCeoName, FlowCeoWorkId, FlowCeoName, FlowBodWorkId, FlowBodName, BillNo],
			rowsAsArray: true,
			success: function (result) {
				console.log("露娜", nextLevel, FlowCeoWorkId, FlowCeoName, BillNo);
			},
			error: sender.error
		});
	}
	function NoticePending() {
		var mobiles = [];
		mobiles.push(Flowphone);
		var Msg = "送审" + "\n文号: " + BillNo + "\n部門: " + FlowDeptName + "\n课组: " + FlowGroupName + "\n姓名: " + qryCurName + "\n ";
		// console.log("町町发送 ", Msg, "TEL:", Flowphone);
		var yjDing = require("./yjDing");
		let pw = yjDing["HelloMsg"].talk(Msg, mobiles);

		var retcode = { "Status": "OK", "message": "此关审批完成", "BillNo": BillNo };
		sender.success(retcode);
		console.log("同意完成-继续", retcode);
	}
	function NoticeNotOver() {
		var mobiles = [];
		mobiles.push(Flowphone);
		var Msg = "送审" + "\n文号: " + BillNo + "\n部門: " + FlowDeptName + "\n课组: " + FlowGroupName + "\n姓名: " + qryCurName + "\n ";
		// console.log("町町发送 ", Msg, "TEL:", Flowphone);
		var yjDing = require("./yjDing");
		let pw = yjDing["HelloMsg"].talk(Msg, mobiles);

		var retcode = { "Status": "OK", "message": "核准完成，额度未超过", "BillNo": BillNo };
		sender.success(retcode);
		console.log("同意完成-不超", retcode);
	}
	function NoticeOver() {
		var mobiles = [];
		mobiles.push(Flowphone);
		var Msg = "送审" + "\n文号: " + BillNo + "\n部門: " + FlowDeptName + "\n课组: " + FlowGroupName + "\n姓名: " + qryCurName + "\n ";
		// console.log("町町发送 ", Msg, "TEL:", Flowphone);
		var yjDing = require("./yjDing");
		let pw = yjDing["HelloMsg"].talk(Msg, mobiles);

		var retcode = { "Status": "OK", "message": "核准完成! 请注意，额度已超过", "BillNo": BillNo };
		sender.success(retcode);
		console.log("~同意完成-超 ", retcode);
	}
	function nulReplaceDate(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined || passTxt == '') ? (null) : passTxt;
		return ret;
	}
	function nulReplace0(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
		return ret;
	}
}