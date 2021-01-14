module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var arrange = sender.req.query.arrange;
   if(arrange =='Lookup'){
     HandleStock( );
   }
   
  
  function HandleStock( ) {
    var obj = {};
    var dataARR = [];
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
      { data: 'SendText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
    ];
    dataARR[0]=columnsData;
    var contentSum = "";
					var content = '<tr>'
						+ '<th></th>'
						+ '<th>系统编号</th>'
						+ '<th>预算项目</th>'
						+ '<th>品名/说明</th>'
						+ '<th>表单种类</th>'
						+ '<th>计划案号</th>'
						+ '<th>申请单编号</th>'
						+ '<th>使用部门</th>'
						+ '<th>申请人</th>'
						+ '<th>总金额</th>'
						+ '<th>打单日期</th>'
						+ '<th>现在审批人</th>'
						+ '<th>审批</th>'
						+ '<th>状态</th>'
						+ '<th>申请说明</th>'
						+ '</tr>';
					contentSum += content;
    dataARR[1]=contentSum;
    sender.success(dataARR);
    // console.log("夏海", dataARR);
  }
  function oldHandleStock( ) {
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

}    