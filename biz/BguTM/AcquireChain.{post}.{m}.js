module.exports = function (sender) {
//ironSubject
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");  
	var arrange = sender.req.query.arrange;
	var GroupName = sender.req.query.GroupName;
	var flowOppWorkId = sender.req.query.oppOID; 
	var flowOppName = sender.req.query.OppName; 
	var flowGroup = '';
	var flowDept = ''; 
	var qryDept = '';
	var qryGroup = '';
	// console.log("明天也要",GroupName );
	if (arrange == 'RuleTrip') {
		acqflowDept();
	}
	if (arrange == 'RulePurch') {
		acqflowDept();
	}
	function acqflowDept() {
		let SQL4 =
		    " select GroupName , DeptName from bgu_orig_detail where GroupName = ?  ";
		yjDBService.exec({
		    sql: SQL4,
		    parameters: [GroupName],
		    rowsAsArray: true,
		    success: function (r) {
			  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			  for (var i = 0; i < data.length; i++) {
				// flowDept = data[i].DeptName;
				// flowGroup = data[i].GroupName;
				qryDept = data[i].DeptName;
				let DeptList = [];
				if (qryDept != "" && qryDept != undefined) {
				    DeptList = qryDept.split(',');
				    flowDept = DeptList[0];
				}
				qryGroup = data[i].GroupName;
				let GroupList = [];
				if (qryGroup != "" && qryGroup != undefined) {
				    GroupList = qryGroup.split(',');
				    flowGroup = GroupList[0];
				}
			  }
			  console.log("卷土重来",flowDept,flowGroup);
			if (arrange == 'RuleTrip') {
				acqRuleTrip();
			}
			if (arrange == 'RulePurch') {
				var flowBudgetItem = sender.req.query.BudgetItem; 
				var flowBudgetCID = sender.req.query.BudgetCID; 
				acqRulePurch(flowBudgetCID ,flowBudgetItem);
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
            console.log(" 出差带出组 ", flowGroup, " 部  ", flowDept);
            yjDBService.exec({
                sql: SQL3,
                parameters: [flowGroup , flowDept], 
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    if (data.length == 0) {
                        var retcode = { "status": "Fail", "message": "查找不成功，没有资料"  };
                        sender.success(retcode);
                        console.log("茄不对@@@@", retcode );
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
                        //     "PurWorkId": PurWorkId,
                        //     "PurName": PurName,
                        //     "PexWorkId": PexWorkId,
                        //     "PexName": PexName,
                        //     "CfoWorkId": CfoWorkId,
                        //     "CfoName": CfoName,
                        //     "PsdWorkId": PsdWorkId,
                        //     "PsdName": PsdName,
                        //     "CeoWorkId": CeoWorkId,
                        //     "CeoName": CeoName,
                        //     "BodWorkId": BodWorkId,
                        //     "BodName": BodName,
                        }
				datas.push(temp);
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("姑瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("姑瑛:" + JSON.stringify(datas));
				// }
				if ( i == 0) {
					sender.success(datas);
				}
                    }
                },
                error: sender.error
            });
	}
	function acqRulePurch(flowBudgetCID ,flowBudgetItem) {
		var TotalValue = '0';
		var UpperLimit = '';
		var flagLimit = 'N';
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
		var BudgetType = flowBudgetCID.substring(0, 1);
		console.log(">>>科目AB：", BudgetType, "血型", flowBudgetCID);
		async.parallel([FunLimit, FunOrig, FunSubject],
		    function (err, result) {
			  if (err) {
    
			  } else {
				var datas = [];
				for (var i = 0; i < 1; i++) {
				    if (result[0][i] == null || result[0][i] == undefined) {
					  UpperLimit = '0';
				    } else {
					  UpperLimit = result[0][i].UpperLimit;
					  if (TotalValue > UpperLimit) {  //超过预算
						flagLimit = 'Y';
						if (BudgetType == 'A') {
						    TermiLevel = '6';
						}
						if (BudgetType == 'B') {
						    TermiLevel = '8';
						}
						// console.log(">>>超过预算", UpperLimit, "崔崔", BudgetType);
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
				  datas.push(temp);
				//   var dump = JSON.stringify(datas);
				//   if (dump.length > 100) {
				// 	  console.log("伯通:" + dump.substring(0, 100));
				//   } else {
				// 	  console.log("伯通:" + JSON.stringify(datas));
				//   }
					sender.success(datas);
			  }
		    });
		function FunLimit(cb) {
		    var StaffName = '周筱龙';
		    let SQL2 = "select tvip.StaffID , tvip.StaffName ,tquo.UpperLimit from  bgu_staffs tba " +
			  "LEFT JOIN bgu_staffs tvip on tba.DeptLabel =tvip.DeptLabel and tvip.staffLevel='3' " +
			  "LEFT JOIN bgu_credit tquo on tvip.StaffName = tquo.StaffName  " +
			  "where tba.StaffName = ? ";
		    yjDBService.exec({
			  sql: SQL2,
			  parameters: [StaffName],
			  rowsAsArray: true,
			  success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
				    UpperLimit = data[i].UpperLimit;
				    var temp = {
					  "UpperLimit": UpperLimit,
				    }
				    // console.log("仔延:" + JSON.stringify(temp));
				    datas.push(temp)
				}
				cb(null, datas);
			  },
			  error: sender.error
		    });
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
			console.log("承办人:",StaffRole,flowBudgetCID);
		    let SQL3 =
                " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
                " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
                " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
                " from  bgu_staffs tba  " +
                " LEFT JOIN bgu_staffs tdpt on ?  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
                " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
                " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4'  and tpur.StaffRole='" + StaffRole + "' " +
                " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
                " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
                " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
                " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
                " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
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
		    console.log("人寿-----", flowGroup, flowDept);
		    yjDBService.exec({
			  sql: SQL3,
			  parameters: [flowGroup , flowDept], 
			  rowsAsArray: true,
			  success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				if (data.length == 0) {
				    var retcode = { "status": "Fail", "message": "送审不成功，没有使用者"  };
				    sender.success(retcode);
				    console.log("北山@@", retcode);
				}
				for (var i = 0; i < data.length; i++) {
				    MagWorkId = data[i].MagWorkId;
				    MagName = data[i].MagName;
				    VipWorkId = data[i].VipWorkId;
				    VipName = data[i].VipName;
				    PurWorkId = data[i].PurWorkId;
				    PurName = data[i].PurName;
				    PexWorkId = data[i].PexWorkId;
				    PexName = data[i].PexName;
				    CfoWorkId = data[i].CfoWorkId;
				    CfoName = data[i].CfoName;
				    PsdWorkId = data[i].PsdWorkId;
				    PsdName = data[i].PsdName;
				    CeoWorkId = data[i].CeoWorkId;
				    CeoName = data[i].CeoName;
				    BodWorkId = data[i].BodWorkId;
				    BodName = data[i].BodName;
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
				//     console.log("受珍:" + JSON.stringify(temp));
				}
				cb(null, datas);
			  },
			  error: sender.error
		    });
		}
		function FunSubject(cb) {
		    console.log("A或B:", BudgetType);
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
	  }
	  function nulReplaceWord(passTxt, WordTxt) {
		var ret = '';
		WordTxt = (WordTxt == null || WordTxt == undefined) ? ('') : WordTxt;
		ret = (passTxt == null || passTxt == undefined) ? (WordTxt) : passTxt;
		return ret;
	  }
};
// " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
// " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
// " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
// " from  bgu_staffs tba  " +
// " LEFT JOIN bgu_staffs tdpt on ?  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
// " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
// " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
// " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
// " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
// " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
// " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
// " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
// " where  tba.DeptLabel =? and tba.StaffLevel='1'  ";