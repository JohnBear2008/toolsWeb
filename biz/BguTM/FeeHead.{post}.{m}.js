module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var arrange = sender.req.query.arrange;
  if (arrange == 'A') {
    HandleStock();
  }
  if (arrange == 'B') {
    HandleModeB();
  }
  if (arrange == 'LookOrig') {
    LookOrig();
  }
  if (arrange == 'LookCredit') {
    LookCredit();
  }
  function LookCredit() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'StaffId', "visible": true, "width": "10%" },
      { data: 'StaffName', "visible": true, "width": "10%" },
      { data: 'BudgetYear', "visible": true, "width": "10%" },
      { data: 'UpperLimit', "visible": true, "width": "10%" },
      { data: 'UseAmount', "visible": true, "width": "10%" },
      { data: 'Accumulate', "visible": true, "width": "10%" },
      { data: 'RequestDate', "visible": true, "width": "10%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th>系统ID</th>'
      + '<th>职工ID</th>'
      + '<th>名称</th>'
      + '<th>年度</th>'
      + '<th>额度上限</th>'
      + '<th>已使用</th>'
      + '<th>累计</th>'
      + '<th>需求日期</th>'
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
  function HandleStock() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": true, "width": "6%" },
      { data: 'ProjectNo', "visible": true, "width": "6%" },
      { data: 'ApplicNo', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      { data: 'RequestDate', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": true, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>表单种类</th>'
      + '<th>预算项目</th>'
      + '<th>品名/说明</th>'
      + '<th>计划案号</th>'
      + '<th>申请单编号</th>'
      + '<th>使用部门</th>'
      + '<th>申请人</th>'
      + '<th>总金额</th>'
      + '<th>申请日期</th>'
      + '<th>打单日期</th>'
      + '<th>现在审批人</th>'
      + '<th>审批</th>'
      + '<th>状态</th>'
      + '<th>申请说明</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
    // console.log("夏海", dataARR);
  }
  function oldHandleStock() {
    var obj = {};
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": true, "width": "6%" },
      { data: 'Subject', "width": "5%" },
      { data: 'ProjectNo', "visible": true, "width": "6%" },
      { data: 'ApplicNo', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      // { data: 'Currency', "visible": true, "width": "6%" },
      // { data: 'Payment', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": true, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
    ];
    sender.success(columnsData);
    console.log("码赛", columnsData);
  }
  function HandleModeB() {
    var obj = {};
    var dataARR = [];
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'ApplicNo', "visible": true, "width": "6%" },
      { data: 'Subject', "visible": true, "width": "6%" },
      { data: 'BusiMan', "visible": true, "width": "6%" },
      { data: 'BusiArea', "visible": true, "width": "6%" },
      { data: 'LeaveDate', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffName', "visible": true, "width": "6%" },
      { data: 'IsOver', "visible": true, "width": "6%" },
      { data: 'Overspend', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": true, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'CurText', "visible": true, "width": "6%" },
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "6%" },
    ];
    dataARR[0] = columnsData;
    var contentSum = "";
    var content = '<tr>'
      + '<th></th>'
      + '<th>系统编号</th>'
      + '<th>申请单号</th>'
      + '<th>表单种类</th>'
      + '<th>出差人</th>'
      + '<th>出差地区</th>'
      + '<th>出发时间</th>'
      + '<th>使用部门</th>'
      + '<th>提交人</th>'
      + '<th>是否有超支</th>'
      + '<th>超支金额</th>'
      + '<th>日期</th>'
      + '<th>现在审批人</th>'
      + '<th>审批</th>'
      + '<th>状态</th>'
      + '<th>申请说明</th>'
      + '</tr>';
    contentSum += content;
    dataARR[1] = contentSum;
    sender.success(dataARR);
  }
}    