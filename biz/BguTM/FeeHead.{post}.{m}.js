module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;

  var queryClass = sender.req.query.PartsClass;

  var arrange = sender.req.query.arrange;

   
  HandleStock( );
   
  
  function HandleStock( ) {
    var obj = {};
    var columnsData = [];
    columnsData = [
      { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "6%" },
      { data: 'BudgetItem', "visible": true, "width": "12%" },
      { data: 'ListNo', "visible": true, "width": "6%" },
      { data: 'RequestDate', "width": "5%" },
      { data: 'ProjectNo', "visible": true, "width": "6%" },
      { data: 'ApplicNo', "visible": true, "width": "6%" },
      { data: 'DeptName', "visible": true, "width": "6%" },
      { data: 'StaffID', "visible": true, "width": "6%" },
      { data: 'TotalValue', "visible": true, "width": "6%" },
      // { data: 'Currency', "visible": true, "width": "6%" },
      // { data: 'Payment', "visible": true, "width": "6%" },
      { data: 'EntryDate', "visible": true, "width": "6%" },
      { data: 'CurName', "visible": true, "width": "6%" },
      { data: 'StatusText', "visible": true, "width": "6%" },
      { data: 'Explanation', "visible": true, "width": "20%" },
    ];
    sender.success(columnsData);
    console.log("码赛", columnsData);
  }
   

}    