module.exports = function (sender) {

   var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
   var yjDB = global.yjRequire("yujiang.Foil").yjDB;
   // var data = sender.req.body;
   // console.log("999999999999:" + JSON.stringify(data));
   let carData = sender.req.query.carData;
   var carData = sender.req.query.carData;
   var arrange = sender.req.query.arrange;
   var Patch = sender.req.query.Patch;
   var PartsRule = '';
   var PartsClass = '';
   if(arrange=="callBy"){
      clsPool();
   }else{
      clsOcean();
   }
   function clsOcean() {
      var ClassRule = carData[0].类别代码;
      // 类别代码 	属性键	属性值	父标识号	标识号
      let SQLDelete = "delete from `auto_nature_lab`    ";
      console.log("SQLDelete:" + SQLDelete);
      yjDBService.exec({
         sql: SQLDelete,
         parameters: [],
         success: function (result) {
            runOcean();
         },
         error: sender.error
      });
   }
   function clsPool() {
      var ClassRule = carData[0].类别代码;
      // 类别代码 	属性键	属性值	父标识号	标识号
      let SQLDelete = "delete from `auto_nature_lab`  where   ClassRule = ?  ";
      console.log("SQLDelete:" + SQLDelete);
      yjDBService.exec({
         sql: SQLDelete,
         parameters: [ClassRule],
         success: function (result) {
            runPool();
         },
         error: sender.error
      });
   }
 
   function runPool() {
      var PartsAttr = '';
      var PartsDesc = '';
      var PartsPID = '';
      var PartsOID = '';
      var PartsSort = '';
      // console.log("慧的： ", carData.length );
      for (var i = 0; i < carData.length; i++) {
         ClassRule = carData[i].类别代码;
         PartsClass = ClassRule.substr(0, 2);
         PartsRule = ClassRule.substr(2, 1);
         PartsAttr = carData[i].属性键;
         PartsDesc = carData[i].属性值;
         PartsPID = carData[i].父标识号;
         PartsOID = carData[i].标识号;
         PartsSort = '';
         // console.log("月落鸡啼：", i, " 啼：", (ClassRule), "  叫 ", (PartsAttr), " 客床 ", (PartsDesc));
         let SQLInsert = "INSERT INTO `auto_nature_lab` (  `PartsRule` , `PartsClass` , `ClassRule` , `PartsAttr` , `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort` ) VALUES " +
            " (?,?,?,?,?,?,?,?)  ";
         yjDBService.exec({
            sql: SQLInsert,
            parameters: [PartsRule, PartsClass, ClassRule, PartsAttr, PartsDesc, PartsPID, PartsOID, PartsSort],
            success: function (result) {
            },
         });
      }
      
         var retcode = { "status": "OK" };
         sender.success(retcode);
         console.log("慧文", retcode);
   }
   function runOcean() {
      var PartsAttr = '';
      var PartsDesc = '';
      var PartsPID = '';
      var PartsOID = '';
      var PartsSort = '';
      // console.log("慧的： ", carData.length );
      for (var i = 0; i < carData.length; i++) {
         ClassRule = carData[i].类别代码;
         PartsClass = ClassRule.substr(0, 2);
         PartsRule = ClassRule.substr(2, 1);
         PartsAttr = carData[i].属性键;
         PartsDesc = carData[i].属性值;
         PartsPID = carData[i].父标识号;
         PartsOID = carData[i].标识号;
         PartsSort = '';
         // console.log("月落鸡啼：", i, " 啼：", (ClassRule), "  叫 ", (PartsAttr), " 客床 ", (PartsDesc));
         let SQLInsert = "INSERT INTO `auto_nature_lab` (  `PartsRule` , `PartsClass` , `ClassRule` , `PartsAttr` , `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort` ) VALUES " +
            " (?,?,?,?,?,?,?,?)  ";
         yjDBService.exec({
            sql: SQLInsert,
            parameters: [PartsRule, PartsClass, ClassRule, PartsAttr, PartsDesc, PartsPID, PartsOID, PartsSort],
            success: function (result) {
            },
         });
      }
      
         var retcode = { "status": "OK" };
         sender.success(retcode);
         console.log("慧文", retcode);
   }
};