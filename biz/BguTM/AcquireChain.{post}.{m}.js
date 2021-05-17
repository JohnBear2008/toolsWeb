require("../../client/js/Date.js");
module.exports = function (sender) {
	//ironSubject
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	var flowOppWorkId = sender.req.query.oppOID;
	var flowOppName = sender.req.query.OppName;
	var FlowGroup = sender.req.query.GroupName;
	var FlowDept = sender.req.query.DeptName;
	var FlowUnit = sender.req.query.UnitName;
	var FlowSubtotal = sender.req.query.Subtotal;
	var FlowBuy = sender.req.query.FlowBuy;//A 系统 B0 采购 B1 资讯 B2行政
	// console.log("忘却野心", FlowBuy, "的战场", flowOppName );
	var FlowVip = '';
	var qryDept = '';  //nouse
	var qryGroup = ''; //nouse
	var flagLimit = 'N';
	var BudgetType = '';
	var now = new Date();
	var BudYear = now.Format("yyyy");
	var BudMonth = now.Format("MM");
	// seePhase();
	if (arrange == 'RuleTrip') {
		acqFlowDept();
	}
	if (arrange == 'RulePurch') {
		acqFlowDept();
	}
	function acqFlowDept() { //找副总
		let SQL4 =
			" select StaffName from bgu_credit where DeptName = ?  ";
		yjDBService.exec({
			sql: SQL4,
			parameters: [FlowUnit],
			rowsAsArray: true,
			success: function (r) {
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					FlowVip = data[i].StaffName;
				}
				if (arrange == 'RuleTrip') {
					acqRuleTrip();
				}
				if (arrange == 'RulePurch') {
					var flowBudgetItem = sender.req.query.BudgetItem;
					var flowBudgetCID = sender.req.query.BudgetCID;
					if (flowBudgetItem != undefined && flowBudgetItem != null) {
						acqRulePurch(flowBudgetCID, flowBudgetItem);
					}
				}

			},
			error: sender.error
		});
	}
	function acqRuleTrip() {
		// select tba.staffID ,tba.staffName ,tdpt.staffID , tdpt.staffName ,tvip.staffID , tvip.staffName
		// ,tpur.staffID , tpur.staffName,tpex.staffID , tpex.staffName,tcfo.staffID , tcfo.staffName
		// ,tpsd.staffID , tpsd.staffName,tceo.staffID , tceo.staffName ,tbod.staffID , tbod.staffName 
		// from  bgu_staffs tba  
		// LEFT JOIN bgu_staffs tdpt on 'MIS'  =tdpt.groupLabel and tdpt.staffLevel='2'
		// LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3'
		// LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpur.staffLevel='4'
		// LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpex.staffLevel='5' 
		// LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tcfo.staffLevel='6'
		// LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpsd.staffLevel='7'
		// LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tceo.staffLevel='8'
		// LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tbod.staffLevel='9'
		// where  tba.DeptLabel='软体部' and tba.StaffLevel='1' 
		let SQL3 =
			" select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
			//     " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
			//     " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
			" from  bgu_staffs tba  " +
			" LEFT JOIN bgu_staffs tdpt on ?  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
			" LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
			//     " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
			//     " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
			//     " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
			//     " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
			//     " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
			//     " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
			" where  tba.DeptLabel =? and tba.StaffLevel='1'  ";
		var OppWorkId = flowOppWorkId;
		var OppName = flowOppName;
		var MagWorkId = '';
		var MagName = '';
		var VipWorkId = '';
		var VipName = '';
		var PurWorkId = '';
		var PurName = '';
		var PexWorkId = '';
		var PexName = '';
		var CfoWorkId = '';
		var CfoName = '';
		var PsdWorkId = '';
		var PsdName = '';
		var CeoWorkId = '';
		var CeoName = '';
		var BodWorkId = '';
		var BodName = '';
		console.log(" 出差带出组 ", FlowGroup, " 部  ", FlowDept);
		yjDBService.exec({
			sql: SQL3,
			parameters: [FlowGroup, FlowDept],
			rowsAsArray: true,
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				if (data.length == 0) {
					var retcode = { "status": "Fail", "message": "查找不成功，没有资料" };
					sender.success(retcode);
					console.log("茄不对@@@@", retcode);
				}
				for (var i = 0; i < data.length; i++) {
					MagWorkId = data[i].MagWorkId;
					MagName = data[i].MagName;
					VipWorkId = data[i].VipWorkId;
					VipName = data[i].VipName;
					// PurWorkId = data[i].PurWorkId;
					// PurName = data[i].PurName;
					// PexWorkId = data[i].PexWorkId;
					// PexName = data[i].PexName;
					// CfoWorkId = data[i].CfoWorkId;
					// CfoName = data[i].CfoName;
					// PsdWorkId = data[i].PsdWorkId;
					// PsdName = data[i].PsdName;
					// CeoWorkId = data[i].CeoWorkId;
					// CeoName = data[i].CeoName;
					// BodWorkId = data[i].BodWorkId;
					// BodName = data[i].BodName;
					var temp = {
						"OppWorkId": OppWorkId,
						"OppName": OppName,
						"MagWorkId": MagWorkId,
						"MagName": MagName,
						"VipWorkId": VipWorkId,
						"VipName": VipName,
					}
					datas.push(temp);
					// var dump = JSON.stringify(datas);
					// if (dump.length > 100) {
					// 	console.log("姑瑛:" + dump.substring(0, 100));
					// } else {
					// 	console.log("姑瑛:" + JSON.stringify(datas));
					// }
					if (i == 0) {
						sender.success(datas);
					}
				}
			},
			error: sender.error
		});
	}
	function acqRulePurch(flowBudgetCID, flowBudgetItem) {
		var TotalValue = '0';
		var UpperLimit = '';
		var TermiLevel = '';
		var CurWorkId = '';
		var CurName = '';
		var OppWorkId = '';
		var OppName = '';
		var MagWorkId = '';
		var MagName = '';
		var VipWorkId = '';
		var VipName = '';
		var PurWorkId = '';
		var PurName = '';
		var PexWorkId = '';
		var PexName = '';
		var CfoWorkId = '';
		var CfoName = '';
		var PsdWorkId = '';
		var PsdName = '';
		var CeoWorkId = '';
		var CeoName = '';
		var BodWorkId = '';
		var BodName = '';
		var Track = '';
		BudgetType = flowBudgetCID.substring(0, 1);
		seePhase();
		console.log(">>>科目AB：", BudgetType, "血型", flowBudgetCID);
		async.parallel([FunLimit, FunOrig, FunSubject, FunCredit],
			function (err, result) {
				if (err) {

				} else {
					var datas = [];
					for (var i = 0; i < 1; i++) {
						if (result[0][i] == null || result[0][i] == undefined) {
							UpperLimit = '0';
						} else {
							UpperLimit = result[0][i].UpperLimit;
							if (flagLimit == 'Y') {  //超过预算
								if (BudgetType == 'A') {
									TermiLevel = '6';
								}
								if (BudgetType == 'B') {
									TermiLevel = '8';
								}
								console.log(">>>超过预算", UpperLimit, "崔崔", BudgetType);
							} else {
								if (BudgetType == 'A') {
									TermiLevel = '4';
								}
								if (BudgetType == 'B') {
									TermiLevel = '6';
								}
								// console.log("<<<未达预算", UpperLimit, "崔崔", BudgetType);
							}
						}
						if (result[1][i] == null || result[1][i] == undefined) {
						} else {
							OppWorkId = result[1][i].OppWorkId;
							OppName = result[1][i].OppName;
							MagWorkId = result[1][i].MagWorkId;
							MagName = result[1][i].MagName;
							VipWorkId = result[1][i].VipWorkId;
							VipName = result[1][i].VipName;
							if (BudgetType == 'B') {
								PurWorkId = result[1][i].PurWorkId;
								PurName = result[1][i].PurName;
								PexWorkId = result[1][i].PexWorkId;
								PexName = result[1][i].PexName;
							}
							CfoWorkId = result[1][i].CfoWorkId;
							CfoName = result[1][i].CfoName;
							PsdWorkId = result[1][i].PsdWorkId;
							PsdName = result[1][i].PsdName;
							if (flagLimit == 'Y') {
								CeoWorkId = result[1][i].CeoWorkId;
								CeoName = result[1][i].CeoName;
								BodWorkId = result[1][i].BodWorkId;
								BodName = result[1][i].BodName;
							} else {

							}
							CurWorkId = MagWorkId;
							CurName = MagName;
						}
					}
					Surplus = result[3][0].Surplus;
					CreditA = result[3][0].CreditA;
					CreditB = result[3][0].CreditB;
					CreditC = result[3][0].CreditC;
					CreditD = result[3][0].CreditD;
					BossOver = result[3][0].BossOver;
					// "CreditA": '预算内额度已超过：',  
					// "CreditB": '预算5000已用5000：',  
					// "CreditC": '预算外额度未超过：',  
					// "CreditD": '额度3500已用2500',  
					var temp = {
						"OppWorkId": OppWorkId,
						"OppName": OppName,
						"MagWorkId": MagWorkId,
						"MagName": MagName,
						"VipWorkId": VipWorkId,
						"VipName": VipName,
						"PurWorkId": PurWorkId,
						"PurName": PurName,
						"PexWorkId": PexWorkId,
						"PexName": PexName,
						"CfoWorkId": CfoWorkId,
						"CfoName": CfoName,
						"PsdWorkId": PsdWorkId,
						"PsdName": PsdName,
						"CeoWorkId": CeoWorkId,
						"CeoName": CeoName,
						"BodWorkId": BodWorkId,
						"BodName": BodName,
						"Surplus": Surplus,
						"CreditA": CreditA,
						"CreditB": CreditB,
						"CreditC": CreditC,
						"CreditD": CreditD,
						"BossOver": BossOver,
					}
					datas.push(temp);
					//   var dump = JSON.stringify(datas);
					//   if (dump.length > 1000) {
					// 	  console.log("子懿:" + dump.substring(0, 1000));
					//   } else {
					// 	  console.log("子懿:" + JSON.stringify(datas));
					//   }
					sender.success(datas);
				}
			});
		function FunLimit(cb) {
			var datas = [];
			var temp = {
				"UpperLimit": '500000',
			}
			datas.push(temp)

			cb(null, datas);

			//     var StaffName = '';
			//     let SQL2 = "select tvip.StaffID , tvip.StaffName ,tquo.UpperLimit from  bgu_staffs tba " +
			// 	  "LEFT JOIN bgu_staffs tvip on tba.DeptLabel =tvip.DeptLabel and tvip.staffLevel='3' " +
			// 	  "LEFT JOIN bgu_credit tquo on tvip.StaffName = tquo.StaffName  " +
			// 	  "where tba.StaffName = ? ";
			//     yjDBService.exec({
			// 	  sql: SQL2,
			// 	  parameters: [StaffName],
			// 	  rowsAsArray: true,
			// 	  success: function (r) {
			// 		var datas = [];
			// 		var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			// 		for (var i = 0; i < data.length; i++) {
			// 		    UpperLimit = data[i].UpperLimit;
			// 		    var temp = {
			// 			  "UpperLimit": UpperLimit,
			// 		    }
			// 		    datas.push(temp)
			// 		}
			// 		cb(null, datas);
			// 	  },
			// 	  error: sender.error
			//     });
		}
		function FunOrig(cb) {
			var StaffRole = "";
			if (flowBudgetCID != null && flowBudgetCID != undefined) {
				var BudgetBID = flowBudgetCID.substring(1, 2); BudgetBID = nulReplaceWord(BudgetBID, "0");
			}
			if (BudgetBID == "1") {
				StaffRole = "资讯承办人";
			} else if (BudgetBID == "2") {
				StaffRole = "行政承办人";
			} else {
				StaffRole = "采购承办人";
			}
			seePhase();
			console.log("承办人:", StaffRole, flowBudgetCID);
			let SQL3 =
				" select  tba.DBID, tba.Mobiles as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles as MagWorkId, tdpt.StaffName as MagName, " +
				" tvip.Mobiles as VipWorkId, tvip.StaffName as VipName, dhvip.Mobiles as VipDHWorkId, dhvip.StaffName as VipDHName, " +
				" pur.Mobiles as PurWorkId, pur.StaffName as PurName,  dhpur.Mobiles as PurDHWorkId, dhpur.StaffName as PurDHName, " +
				" pex.Mobiles as PexWorkId, pex.StaffName as PexName, dhpex.Mobiles as PexDHWorkId, dhpex.StaffName as PexDHName, " +
				" tcfo.Mobiles as CfoWorkId, tcfo.StaffName as CfoName, dhcfo.Mobiles as CfoDHWorkId, dhcfo.StaffName as CfoDHName, " +
				"  tpsd.Mobiles as PsdWorkId, tpsd.StaffName as PsdName,tceo.Mobiles as CeoWorkId, tceo.StaffName as CeoName, " +
				"  tbod.Mobiles as BodWorkId,  tbod.StaffName as BodName from  bgu_staffs tba    " +
				"  LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')  and tdpt.staffLevel='2'     " +
				" LEFT JOIN bgu_staffs dhvip on dhvip.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')   and dhvip.staffLevel='3'   " +      
				"  LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%')  and tvip.staffLevel='3'    " +
				"  LEFT JOIN bgu_staffs pur on pur.DeptLabel like CONCAT('%', tba.DeptLabel, '%')  and pur.staffLevel='4'  and pur.StaffRole='" + StaffRole + "'    " +
				"  LEFT JOIN bgu_staffs dhpur on dhpur.staffLevel='4'  and dhpur.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')  and dhpur.StaffRole= '" + StaffRole + "'   " +
				"  LEFT JOIN bgu_staffs dhpex on dhpex.staffLevel='5'  and dhpex.GroupLabel like CONCAT('%', '" + FlowGroup + "' , '%')   " +
				"  LEFT JOIN bgu_staffs pex on pex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and pex.staffLevel='5'   " +
				"  LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6'    " +
				" LEFT JOIN bgu_staffs dhcfo on dhcfo.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%') and dhcfo.staffLevel='6'  " +     
				"  LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7'   " +
				"  LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8'   " +
				"  LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel,'%') and tbod.staffLevel='9'   " +
				"  where  tba.DeptLabel ='" + FlowDept + "' and tba.StaffLevel='1'  and tba.StaffName ='" + flowOppName + "'   ";

				// select  pur.DBID,  dhpur.DBID,  tba.Mobiles as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles as MagWorkId, tdpt.StaffName as MagName,    
				// tvip.Mobiles as VipWorkId, tvip.StaffName as VipName, dhvip.Mobiles as VipDHWorkId, dhvip.StaffName as VipDHName,
				// pur.Mobiles as PurWorkId, pur.StaffName as PurName, dhpur.Mobiles as PurDHWorkId, dhpur.StaffName as PurDHName, 
				// pex.Mobiles as PexWorkId, pex.StaffName as PexName, dhpex.Mobiles as PexDHWorkId, dhpex.StaffName as PexDHName,
				// tcfo.Mobiles as CfoWorkId, tcfo.StaffName as CfoName, dhcfo.Mobiles as CfoDHWorkId, dhcfo.StaffName as CfoDHName,   
				// tpsd.Mobiles as PsdWorkId, tpsd.StaffName as PsdName, tceo.Mobiles as CeoWorkId, tceo.StaffName as CeoName,    
				// tbod.Mobiles as BodWorkId, tbod.StaffName as BodName from  bgu_staffs tba       
				//  LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '证券部及董事会-董事会组', '%')  and tdpt.staffLevel='2'        
				//  LEFT JOIN bgu_staffs dhvip on dhvip.GroupLabel like CONCAT('%', '证券部及董事会-董事会组', '%')   and dhvip.staffLevel='3'       
				//  LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%')  and tvip.staffLevel='3'       
				//  LEFT JOIN bgu_staffs pur on pur.DeptLabel like CONCAT('%', tba.DeptLabel, '%')  and pur.staffLevel='4' 
				//    and pur.StaffRole='采购承办人'       
				//  LEFT JOIN bgu_staffs dhpur on dhpur.staffLevel='4'  and dhpur.GroupLabel like CONCAT('%', '证券部及董事会-董事会组', '%') 
				//    and dhpur.StaffRole= '采购承办人'      
				//  LEFT JOIN bgu_staffs pex on pex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and pex.staffLevel='5'      
				//  LEFT JOIN bgu_staffs dhpex on dhpex.staffLevel='5'  and dhpex.GroupLabel like CONCAT('%', '证券部及董事会-董事会组' , '%')      
				//  LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6'       
				//  LEFT JOIN bgu_staffs dhcfo on dhcfo.GroupLabel like CONCAT('%', '证券部及董事会-董事会组', '%') and dhcfo.staffLevel='6'       
				//  LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7'      
				//  LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8'      
				//  LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel,'%') and tbod.staffLevel='9'      
				//  where  tba.DeptLabel = '证券部及董事会' and tba.StaffLevel='1' and tba.StaffName = '王光漫'

			    console.log("阿咯哈-----", SQL3 );
			// var OppWorkId = flowOppWorkId;
			var OppWorkId = '';
			var OppName = flowOppName;
			var MagWorkId = '';
			var MagName = '';
			var VipWorkId = '';
			var VipName = '';
			var VipOrgWorkId = '';
			var VipOrgName = '';
			var VipDHWorkId = '';
			var VipDHName = '';
			var PurWorkId = '';
			var PurName = '';
			var PurDHWorkId = '';
			var PurDHName = '';
			var PurOrgWorkId = '';
			var PurOrgName = '';
			var PexWorkId = '';
			var PexName = '';
			var PexDHWorkId = '';
			var PexDHName = '';
			var PexOrgWorkId = '';
			var PexOrgName = '';
			var CfoDHWorkId = '';
			var CfoDHName = '';
			var CfoWorkId = '';
			var CfoName = '';
			var CfoOrgWorkId = '';
			var CfoOrgName = '';
			var PsdWorkId = '';
			var PsdName = '';
			var CeoWorkId = '';
			var CeoName = '';
			var BodWorkId = '';
			var BodName = '';
			console.log("组别-----", FlowGroup );
			console.log("部門-----", FlowDept );
			console.log("申请人-----", flowOppName);
			yjDBService.exec({
				sql: SQL3,
				parameters: [FlowDept],
				//   parameters: [FlowGroup , FlowDept], 
				rowsAsArray: true,
				success: function (r) {
					var datas = [];
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					if (data.length == 0) {
						var retcode = { "status": "Fail", "message": "送审不成功，没有使用者" };
						sender.success(retcode);
						console.log("北山@@", retcode);
					}
					for (var i = 0; i < data.length; i++) {
						OppWorkId = data[i].OppWorkId;
						MagWorkId = data[i].MagWorkId;
						MagName = data[i].MagName;
						VipOrgWorkId = data[i].VipWorkId;
						VipOrgName = data[i].VipName;
						VipDHWorkId = data[i].VipDHWorkId;
						VipDHName = data[i].VipDHName;

						PurDHWorkId = data[i].PurDHWorkId;
						PurDHName = data[i].PurDHName;
						PurOrgWorkId = data[i].PurWorkId;
						PurOrgName = data[i].PurName;

						PexDHWorkId = data[i].PexDHWorkId;
						PexDHName = data[i].PexDHName;
						PexOrgWorkId = data[i].PexWorkId;
						PexOrgName = data[i].PexName;

						CfoOrgWorkId = data[i].CfoWorkId;
						CfoOrgName = data[i].CfoName;
						CfoDHWorkId = data[i].CfoDHWorkId;
						CfoDHName = data[i].CfoDHName;
						PsdWorkId = data[i].PsdWorkId;
						PsdName = data[i].PsdName;
						CeoWorkId = data[i].CeoWorkId;
						CeoName = data[i].CeoName;
						BodWorkId = data[i].BodWorkId;
						BodName = data[i].BodName;
						if (VipDHName != undefined && VipDHName != '') {
							VipName = VipDHName;
							VipWorkId = VipDHWorkId;
						} else {
							VipName = VipOrgName;
							VipWorkId = VipOrgWorkId;
						}
						if (PurDHName != undefined && PurDHName != '') {
							PurName = PurDHName;
							PurWorkId = PurDHWorkId;
						} else {
							PurName = PurOrgName;
							PurWorkId = PurOrgWorkId;
						}
						if (PexDHName != undefined && PexDHName != '') {
							PexName = PexDHName;
							PexWorkId = PexDHWorkId;
						} else {
							PexName = PexOrgName;
							PexWorkId = PexOrgWorkId;
						}
						if (CfoDHName != undefined && CfoDHName != '') {
							CfoName = CfoDHName;
							CfoWorkId = CfoDHWorkId;
						} else {
							CfoName = CfoOrgName;
							CfoWorkId = CfoOrgWorkId;
						}
						var temp = {
							"OppWorkId": OppWorkId,
							"OppName": OppName,
							"MagWorkId": MagWorkId,
							"MagName": MagName,
							"VipWorkId": VipWorkId,
							"VipName": VipName,
							"PurWorkId": PurWorkId,
							"PurName": PurName,
							"PexWorkId": PexWorkId,
							"PexName": PexName,
							"CfoWorkId": CfoWorkId,
							"CfoName": CfoName,
							"PsdWorkId": PsdWorkId,
							"PsdName": PsdName,
							"CeoWorkId": CeoWorkId,
							"CeoName": CeoName,
							"BodWorkId": BodWorkId,
							"BodName": BodName,
						}
						datas.push(temp)
						// console.log("受力:" + JSON.stringify(temp));
					}
					cb(null, datas);
				},
				error: sender.error
			});
		}
		function FunSubject(cb) {
			//     console.log("A或B:", BudgetType);
			var Track = '';
			let SQL4 =
				" select Track from  bgu_rule_def where RuleType =?  ";
			yjDBService.exec({
				sql: SQL4,
				parameters: [BudgetType],
				rowsAsArray: true,
				success: function (r) {
					var datas = [];
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						Track = data[i].Track;
						var temp = {
							"Track": Track,
						}
						// console.log("看延:" + JSON.stringify(temp));
						datas.push(temp);
					}
					cb(null, datas);
				},
				error: sender.error
			});
		}
		function FunCredit(cb) {
			let SQL2 =
				" select 'A' as Rank, AllowMoney as AllowValue, Accumulate , Surplus ,IsOver from bgu_quota where BudYear =? and BudgetItem = ? and DeptName = ?  " +
				" Union " +
				" select 'B' as Rank, UpperLimit  as AllowValue, Accumulate , Surplus ,IsOver from bgu_buffer where  BffType = 'A' and BudYear =? and BudMonth = ?   ";
			var itemAllow = '0';
			var itemAccu = '0';
			var itemSurp = '0';
			var itemIsOver = '';
			var vvipAllow = '0';
			var vvipAccu = '0';
			var vvipSurp = '0';
			var vvipIsOver = '';
			console.log("周瑜", BudYear, "-", flowBudgetItem, "-", FlowUnit, "-", BudYear, BudMonth);
			FlowSubtotal = nulReplace0(FlowSubtotal);
			FlowSubtotal = parseInt(FlowSubtotal, 10);
			// console.log("盖世英雄", FlowSubtotal);
			yjDBService.exec({
				sql: SQL2,
				parameters: [BudYear, flowBudgetItem, FlowUnit, BudYear, BudMonth],
				rowsAsArray: true,
				success: function (r) {
					var datas = [];
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						if (data[i] != null && data[i] != undefined) {
							var Rank = data[i].Rank;
							if (Rank == 'A') {
								itemAllow = data[i].AllowValue; itemAllow = nulReplace0(itemAllow);
								itemAccu = data[i].Accumulate; itemAccu = nulReplace0(itemAccu);
								itemSurp = data[i].Surplus; itemSurp = nulReplace0(itemSurp);
								itemIsOver = data[i].IsOver;
							}
							if (Rank == 'B') {
								vvipAllow = data[i].AllowValue; vvipAllow = nulReplace0(vvipAllow);
								vvipAccu = data[i].Accumulate; vvipAccu = nulReplace0(vvipAccu);
								vvipSurp = data[i].Surplus; vvipSurp = nulReplace0(vvipSurp);
								vvipIsOver = data[i].IsOver;
							}
						} else {

						}
					}
					itemMsg = '预算内额度未超过：';
					vvipMsg = '预算外额度未超过：';
					itemSurp = parseInt(itemSurp, 10);
					if (itemIsOver == 'Y') {
						itemMsg = '预算内额度已超过：';
						console.log("AA故犹见不净", itemMsg);
					}
					if (vvipIsOver == 'Y') {
						vvipMsg = '预算外额度已超过：';
						console.log("BB故犹见不净", vvipMsg  );
					}
					if (itemSurp == '0' && vvipIsOver == 'Y') {
						flagLimit = 'Y';
					}
					if ((FlowSubtotal > itemSurp) && vvipIsOver == 'Y') {
						flagLimit = 'Y';    //0 4884
						console.log("暴雪也无法掩埋", itemSurp, FlowSubtotal);
					} else {
						// console.log("暴雪" ,FlowSubtotal,"也能",itemSurp );
					}
					var temp = {
						"Surplus": itemSurp, "CreditA": itemMsg, "CreditB": '预算' + itemAllow + '已用' + itemAccu,
						"CreditC": vvipMsg, "CreditD": '预算' + vvipAllow + '已用' + vvipAccu,
						"BossOver": flagLimit,
					}
					datas.push(temp);
					console.log("是否超预算:", itemIsOver, vvipIsOver, itemSurp, "妲己", flagLimit);
					//     var dump = JSON.stringify(datas);
					//     if (dump.length > 500) {
					//       console.log("廉颇:" + dump.substring(0, 500));
					//     } else {
					//       console.log("廉颇:" + JSON.stringify(datas));
					//     }
					cb(null, datas);
				},
				error: sender.error
			});
		}
	}
	function nulReplaceWord(passTxt, WordTxt) {
		var ret = '';
		WordTxt = (WordTxt == null || WordTxt == undefined) ? ('') : WordTxt;
		ret = (passTxt == null || passTxt == undefined) ? (WordTxt) : passTxt;
		return ret;
	}
	function nulReplace0(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
		return ret;
	}
	function seePhase() {
		if (FlowBuy == '系统') {

		} else if (FlowBuy == '采购承办人') {
			BudgetType = 'B'; StaffRole = "采购承办人";
		} else if (FlowBuy == '资讯承办人') {
			BudgetType = 'B'; StaffRole = "资讯承办人";
		} else if (FlowBuy == '行政承办人') {
			BudgetType = 'B'; StaffRole = "行政承办人";
		} else if (FlowBuy == '不加采购') {
			BudgetType = 'A';
		} else {

		}
	}
};
// select wpex.DBID ,tba.StaffID as OppWorkId,tba.StaffName as OppName ,
// tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId,
// tvip.StaffName as VipName ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,
// tpex.StaffID as PexWorkId, tpex.StaffName as PexName,
// wpex.StaffID as PexDfuWorkId, wpex.StaffName as PexDfuName,tcfo.StaffID as CfoWorkId, 
// tcfo.StaffName as CfoName ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,
// tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId,
// tbod.StaffName as BodName  from  bgu_staffs tba  
// LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '工程部-MIS课', '%')  and tdpt.staffLevel='2' 
// LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' 
// LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' 
// and tpur.StaffRole='资讯承办人'  
// LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%',  tba.DeptLabel, '%') and tpex.staffLevel='5' 
// and tpex.GroupLabel like CONCAT('%', '工程部-MIS课' , '%') 
// LEFT JOIN bgu_staffs wpex on wpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and wpex.staffLevel='5' 
// LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' 
// LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7'
// LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' 
// LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9'  
// where  tba.DeptLabel ='工程部' and tba.StaffLevel='1' and tba.StaffName ='张亮'