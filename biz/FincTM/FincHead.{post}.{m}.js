module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;

  var queryClass = sender.req.query.PartsClass;

  var arrange = sender.req.query.arrange;

  // if (arrange == 'Stock') {
  //   HandleStock(queryClass);
  // } else if (arrange == 'Cost') {
  //   HandleCost(queryClass);
  // } else if (arrange == 'Remain') {
  //   HandleRemain(queryClass);
  // }
  console.log("数览");
  if (arrange == 'Invoice') {
    HandleInvoice(queryClass);
  }  
  // function HandleRemain(pclass) {
  //   var obj = {};
  //   var columnsData = [];
  //   columnsData = [
  //     // { data: 'DBID', "visible": false },
  //     { data: 'BillNo', "visible": true, "width": "10%" },
  //     { data: 'BillDate', "width": "8%" },
  //     { data: 'Personname', "visible": true, "width": "5%" },
  //     { data: 'DeptName', "visible": true, "width": "5%" },
  //     { data: 'Remark', "visible": true, "width": "5%" },
  //     { data: 'OrgName', "visible": true, "width": "16%" },
  //     { data: 'InvoiceSpec', "visible": true, "width": "8%" },
  //     { data: 'Creatorname', "visible": true, "width": "8%" },
  //     { data: 'Permitname', "visible": true, "width": "8%" },
  //     { data: 'FromBillNo', "visible": true, "width": "8%" },
  //     { data: 'OAmount', "visible": true, "width": "8%" },
  //     { data: 'WriteOffOAmount', "visible": true, "width": "8%" },
  //     { data: 'RowCode', "visible": true, "width": "8%" },
  //     { data: 'InvoiceBillNo', "visible": true, "width": "8%" },
  //   ];
  //   sender.success(columnsData);
  //   console.log("叫叫", columnsData);
  // }
  function HandleInvoice(pclass) {
    var obj = {};
    var columnsData = [];
    columnsData = [
      // { data: 'DBID', "visible": false },
      { data: 'BillNo', "visible": true, "width": "10%" },
      { data: 'BillDate', "width": "8%" },
      { data: 'Personname', "visible": true, "width": "5%" },
      { data: 'DeptName', "visible": true, "width": "5%" },
      { data: 'Remark', "visible": true, "width": "5%" },
      { data: 'OrgName', "visible": true, "width": "16%" },
      { data: 'Creatorname', "visible": true, "width": "8%" },
      { data: 'Permitname', "visible": true, "width": "8%" },
      { data: 'FromBillNo', "visible": true, "width": "8%" },
      { data: 'OAmount', "visible": true, "width": "8%" },
      { data: 'WriteOffOAmount', "visible": true, "width": "8%" },
      { data: 'RowCode', "visible": true, "width": "8%" },
      { data: 'InvoiceBillNo', "visible": true, "width": "8%" },
    ];
    sender.success(columnsData);
    // console.log("叫叫", columnsData);
  }

   

}    