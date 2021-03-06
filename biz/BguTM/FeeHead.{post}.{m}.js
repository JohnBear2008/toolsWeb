module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var arrange = sender.req.query.arrange;
  var pick = sender.req.query.pick;
  if (arrange == 'ClaimSite') {
    if (pick == 'A') {
    	ClaimSiteA();
    }
    if (pick == 'B') {
      ClaimSiteB();
    }
	}
  if (arrange == 'Fee') {
    if (pick == 'A') {
      HandleStockA();
    }
    if (pick == 'B') {
      HandleStockB();
    }
  }
  if (arrange == 'Exp') { //nouse
    if (pick == 'A') {
      HandleFundA();
    }
    if (pick == 'B') {
      HandleFundB();
    }
  }
  if (arrange == 'LookOrig') {
    LookOrig();
  }
  if (arrange == 'LookClaim') {
    if (pick == 'A') {
      LookClaimA();
    }
    if (pick == 'B') {
      LookClaimB();
    }
  }
  if (arrange == 'LookCredit') {
    LookCredit();
  }
  if (arrange == 'LookQuota') {
    LookQuota();
  }
  function LookQuota() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'Subject', "visible": true, "width": "10%" },
      { data: 'BudgetCID', "visible": true, "width": "10%" },
      { data: 'BudgetItem', "visible": true, "width": "10%" },
      { data: 'DeptName', "visible": true, "width": "10%" },
      { data: 'BudYear', "visible": true, "width": "10%" },
      { data: 'IsOver', "visible": true, "width": "10%" },
      { data: 'AllowMoney', "visible": true, "width": "10%" },
      { data: 'Accumulate', "visible": true, "width": "10%" },
      { data: 'Surplus', "visible": true, "width": "10%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th width="150">系统号</th>'
      + '<th width="150">科目</th>'
      + '<th width="150">项目号</th>'
      + '<th width="150">预算项目</th>'
      + '<th width="150">部門</th>'
      + '<th width="150">年度</th>'
      + '<th width="150">超支</th>'
      + '<th width="150">额度上限</th>'
      + '<th width="150">累计</th>'
      + '<th width="150">剩餘</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
  function LookCredit() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    // "BffType": data[i].BffType,
		// 				"BffName": data[i].BffName,
		// 				"BudYear": data[i].BudYear,
		// 				"BudMonth": data[i].BudMonth,
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BffType', "visible": true, "width": "10%" },
      { data: 'BffName', "visible": true, "width": "10%" },
      { data: 'BudYear', "visible": true, "width": "10%" },
      { data: 'BudMonth', "visible": true, "width": "10%" },
      { data: 'IsOver', "visible": true, "width": "10%" },
      { data: 'UpperLimit', "visible": true, "width": "10%" },
      { data: 'Accumulate', "visible": true, "width": "10%" },
      { data: 'Surplus', "visible": true, "width": "10%" },
      { data: 'SNNO', "visible": true, "width": "10%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th width="150"></th>'
      + '<th width="150">种类ID</th>'
      + '<th width="150">种类</th>'
      + '<th width="150">年度</th>'
      + '<th width="150">月份</th>'
      + '<th width="150">超支</th>'
      + '<th width="150">剩餘</th>'
      + '<th width="150">额度上限</th>'
      + '<th width="150">累计</th>'
      + '<th width="150">笔数</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
  function LookClaimA() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    // "DBID": data[i].DBID,
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "15%" },
      { data: 'RequestDate', "visible": true, "width": "15%" },
      { data: 'TotalValue', "visible": true, "width": "15%" },
      { data: 'UpperLimit', "visible": true, "width": "15%" },
      { data: 'Surplus', "visible": true, "width": "15%" },
      { data: 'DivideValue', "visible": true, "width": "15%" },
      { data: 'Invoice', "visible": true, "width": "15%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th>系统ID</th>'
      + '<th>文号ID</th>'
      + '<th>日期</th>'
      + '<th>申请额</th>'
      + '<th>上限额</th>'
      + '<th>剩余</th>'
      + '<th>分批额</th>'
      + '<th>发票</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
  function LookClaimB() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    // "DBID": data[i].DBID,
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "15%" },
      { data: 'RequestDate', "visible": true, "width": "15%" },
      { data: 'TotalValue', "visible": true, "width": "15%" },
      { data: 'UpperLimit', "visible": true, "width": "15%" },
      { data: 'Surplus', "visible": true, "width": "15%" },
      { data: 'DivideValue', "visible": true, "width": "15%" },
      { data: 'Invoice', "visible": true, "width": "15%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th>系统ID</th>'
      + '<th>文号ID</th>'
      + '<th>日期</th>'
      + '<th>申请额</th>'
      + '<th>上限额</th>'
      + '<th>剩余</th>'
      + '<th>分批额</th>'
      + '<th>发票</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
  function LookOrig() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'DeptID', "visible": true, "width": "15%" },
      { data: 'DeptName', "visible": true, "width": "15%" },
      { data: 'GroupName', "visible": true, "width": "15%" },
      { data: 'Loacation', "visible": true, "width": "15%" },
      { data: 'Descript', "visible": true, "width": "15%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th>系统ID</th>'
      + '<th>部門ID</th>'
      + '<th>部門名称</th>'
      + '<th>课组名称</th>'
      + '<th>地区</th>'
      + '<th>描述</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
  function ClaimSiteA() {
    var obj = {};//29
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": false, "width": "6%" },
      { data: 'ProjectNo', "visible": false, "width": "6%" },
      { data: 'ApplicNo', "visible": false, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'UnitName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": false , "width": "6%" },
      { data: 'PexName', "visible": false, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'Currency', "visible": true, "width": "6%" },
      { data: 'Payment', "visible": true, "width": "6%" },
      { data: 'RequestDate', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'SemText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": false, "width": "6%" },
      { data: 'ClaimText', "visible": true, "width": "6%" },
      { data: 'SemStatus', "visible": false, "width": "6%" },
      { data: 'IsOver', "visible": true, "width": "6%" },
      { data: 'Surplus', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th>DBID</th>'
      + '<th>系统编号</th>'
      + '<th>表单种类</th>'
      + '<th>预算科目</th>'
      + '<th>预算项目</th>'
      + '<th>品名/说明</th>'
      + '<th>计划案号</th>'
      + '<th>编号</th>'
      + '<th>提交部门</th>'
      + '<th>使用部门</th>'
      + '<th>申请人</th>'
      + '<th>采购人</th>'
      + '<th>采购主管</th>'
      + '<th>总金额</th>'
      + '<th>币别</th>'
      + '<th>付款</th>'
      + '<th>申请日期</th>'
      + '<th>打单日期</th>'
      + '<th>审批人</th>'
      + '<th>流程</th>'
      + '<th>储存</th>'
      + '<th>报销</th>'
      + '<th>流程</th>'
      + '<th>超支</th>'
      + '<th>剩余</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>副裁</th>' 
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
    // console.log("夏海", dataARR);
  }
  function ClaimSiteB() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'UnitName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": true , "width": "6%" },
      { data: 'PexName', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'SemText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": false, "width": "6%" },
      { data: 'ClaimText', "visible": false, "width": "6%" },
      { data: 'SemStatus', "visible": false, "width": "6%" },
      { data: 'Surplus', "visible": true, "width": "6%" },
      { data: 'IsOver', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>表单种类</th>'
      + '<th>预算科目</th>'
      + '<th>提交部门</th>'
      + '<th>使用部门</th>'
      + '<th>申请人</th>'
      + '<th>采购人</th>'
      + '<th>采购主管</th>'
      + '<th>总金额</th>'
      + '<th>申请日期</th>'
      + '<th>审批人</th>'
      + '<th>流程</th>'
      + '<th>储存</th>'
      + '<th>报销</th>'
      + '<th>财务Y</th>'
      + '<th>剩余</th>'
      + '<th>超支</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>财务</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
    // console.log("夏海", dataARR);
  }
  function HandleStockA() {//24
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": false, "width": "6%" },
      { data: 'ProjectNo', "visible": false, "width": "6%" },
      { data: 'ApplicNo', "visible": false, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'UnitName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": true , "width": "6%" },
      { data: 'PexName', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'ExceedValue', "visible": false, "width": "6%" },
      { data: 'RequestDate', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'ClaimText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
      { data: 'CurJob', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>表单种类</th>'
      + '<th>预算科目</th>'
      + '<th>预算项目</th>'
      + '<th>品名/说明</th>'
      + '<th>计划案号</th>'
      + '<th>申请单编号</th>'
      + '<th>提交部门</th>'
      + '<th>使用部门</th>'
      + '<th>申请人</th>'
      + '<th>采购人</th>'
      + '<th>采购主管</th>'
      + '<th>总金额</th>'
      + '<th>追加额</th>'
      + '<th>申请日期</th>'
      + '<th>打单日期</th>'
      + '<th>审批人</th>'
      + '<th>流程</th>'
      + '<th>储存</th>'
      + '<th>付款</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>财务</th>'
      + '<th>审批职位</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    // console.log("夏海", dataARR);
    sender.success(dataARR);
  }
  function HandleStockB() {//24
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'ApplicNo', "visible": false, "width": "6%" },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BusiMan', "visible": true, "width": "6%" },
      { data: 'BusiArea', "visible": true, "width": "6%" },
      { data: 'LeaveDate', "visible": true, "width": "6%" },
      { data: 'BackDate', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'UnitName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'ExceedValue', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": true },
      { data: 'PexName', "visible": true},
      { data: 'IsOver', "visible": true, "width": "6%" },
      { data: 'Overspend', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "6%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
      { data: 'CurJob', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>申请单号</th>'
      + '<th>表单种类</th>'
      + '<th>会计科目</th>' 
      + '<th>出差人</th>'
      + '<th>出差地区</th>'
      + '<th>出发时间</th>'
      + '<th>返回时间</th>'
      + '<th>提交部门</th>'
      + '<th>使用部门</th>'
      + '<th>提交人</th>'
      + '<th>金额</th>'
      + '<th>追加</th>'
      + '<th>申请人</th>'
      + '<th>申请人</th>'
      + '<th>是否有超支</th>'
      + '<th>超支金额</th>'
      + '<th>日期</th>'
      + '<th>现在审批人</th>'
      + '<th>审批</th>'
      + '<th>状态</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>财务</th>'
      + '<th>审批职务</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    // console.log("明媚如风",dataARR);
    sender.success(dataARR);
  }
  function HandleFundA() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": false, "width": "6%" },
      { data: 'ProjectNo', "visible": true, "width": "6%" },
      { data: 'ApplicNo', "visible": false, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": false },
      { data: 'PexName', "visible": false},
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'RealValue', "visible": true, "width": "6%" },
      { data: 'RequestDate', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>表单种类</th>'
      + '<th>预算科目</th>'
      + '<th>预算项目</th>'
      + '<th>品名/说明</th>'
      + '<th>计划案号</th>'
      + '<th>申请单编号</th>'
      + '<th>使用部门</th>'
      + '<th>申请人</th>'
      + '<th>采购人</th>'
      + '<th>采购主管</th>'
      + '<th>总金额</th>'
      + '<th>结算额</th>'
      + '<th>申请日期</th>'
      + '<th>打单日期</th>'
      + '<th>核准人</th>'
      + '<th>审批</th>'
      + '<th>状态</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>财务</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
    // console.log("夏海", dataARR);
  }
  function HandleFundB() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Formkind', "visible": false  },
      { data: 'ApplicNo', "visible": false, "width": "6%" },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BusiMan', "visible": true, "width": "6%" },
      { data: 'BusiArea', "visible": true, "width": "6%" },
      { data: 'LeaveDate', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'PurName', "visible": false },
      { data: 'PexName', "visible": false},
      { data: 'IsOver', "visible": true, "width": "6%" },
      { data: 'Overspend', "visible": true, "width": "6%" },
      { data: 'RealValue', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": false, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "6%" },
      { data: 'MagName', "visible": false  },
      { data: 'VipName', "visible": false  },
      { data: 'CfoName', "visible": false  },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>申请单号</th>'
      + '<th>表单种类</th>'
      + '<th>预算科目</th>' 
      + '<th>出差人</th>'
      + '<th>出差地区</th>'
      + '<th>出发时间</th>'
      + '<th>使用部门</th>'
      + '<th>提交人</th>'
      + '<th>申请人</th>'
      + '<th>申请人</th>'
      + '<th>是否有超支</th>'
      + '<th>超支金额</th>'
      + '<th>结算金额</th>'
      + '<th>日期</th>'
      + '<th>核准人</th>'
      + '<th>审批</th>'
      + '<th>状态</th>'
      + '<th>申请说明</th>'
      + '<th>部門主管</th>'
      + '<th>副总</th>'
      + '<th>财务</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
}    