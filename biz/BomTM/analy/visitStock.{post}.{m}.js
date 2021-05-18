module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var queryCode = sender.req.query.PartsCode;
  console.log('锦绣queryCode  ' + queryCode);
  HandleParts(queryCode);

  function HandleParts(pcode) {
    let SQL =
      // " select   `PartsRule`, `PartsYear`, `Category`, `OID`, `PID`, `Rank`, `Relation`,  `PartsOldCode`,  " +
      // " `PartsOldName`, `PartsCode`, `PartsName`, `IDX`, `Dosage`,   `Damage`, `Child`, `Description`,   " +
      // " `PartsChi`, `PartsClass`, `Reason`, `SortNumber`   from bom_nlevel   " +
      // "  where  PartsOldCode=?  OR PartsCode=? ";
      " SELECT tlv.PartsOldCode,tlv.PartsOldName, tlv.PartsCode, tlv.PartsName,  tlv.Description, tlv.PartsChi , "+
      " tlv.PartsClass ,tin.Dosage as safeDosage , tin.Damage as safeDamage, tin.Article ,tin.Material,  tin.OrderQty , tin.Transit, "+
      "  tin.Examine ,  tin.UnExam  FROM  `bom_nlevel` tlv "+
      " LEFT  JOIN `bom_inventory` tin on tin.PartsOldCode=tlv.PartsOldCode WHERE   tlv.PartsOldCode=?  OR tlv.PartsCode=?  ";

    yjDBService.exec({
      sql: SQL,
      parameters: [pcode, pcode],
      rowsAsArray: false,
      success: function (result) {
        var obj = {
          "PartsOldCode": ((result[0].PartsOldCode == null || result[0].PartsOldCode == undefined) ? ('') : result[0].PartsOldCode),
          "PartsOldName": ((result[0].PartsOldName == null || result[0].PartsOldName == undefined) ? ('') : result[0].PartsOldName),
          "PartsCode": ((result[0].PartsCode == null || result[0].PartsCode == undefined) ? ('') : result[0].PartsCode),
          "PartsName": ((result[0].PartsName == null || result[0].PartsName == undefined) ? ('') : result[0].PartsName),
          "Dosage": ((result[0].safeDosage == null || result[0].safeDosage == undefined) ? ('') : result[0].safeDosage),
          "Damage": ((result[0].safeDamage == null || result[0].safeDamage == undefined) ? ('') : result[0].safeDamage),
          "Article": ((result[0].Article == null || result[0].Article == undefined) ? ('') : result[0].Article),
          "Material": ((result[0].Material == null || result[0].Material == undefined) ? ('') : result[0].Material),
          "OrderQty": ((result[0].OrderQty == null || result[0].OrderQty == undefined) ? ('') : result[0].OrderQty),
          "Transit": ((result[0].Transit == null || result[0].Transit == undefined) ? ('') : result[0].Transit),
          "Examine": ((result[0].Examine == null || result[0].Examine == undefined) ? ('') : result[0].Examine),
          "UnExam": ((result[0].UnExam == null || result[0].UnExam == undefined) ? ('') : result[0].UnExam),
          "Description": ((result[0].Description == null || result[0].Description == undefined) ? ('') : result[0].Description),
          "PartsChi": ((result[0].PartsChi == null || result[0].PartsChi == undefined) ? ('') : result[0].PartsChi),
          "PartsClass": ((result[0].PartsClass == null || result[0].PartsClass == undefined) ? ('') : result[0].PartsClass),
        };
        sender.success(obj);
        console.log("朝杨公主", obj);
      },
      error: sender.error
    });
  }


}    