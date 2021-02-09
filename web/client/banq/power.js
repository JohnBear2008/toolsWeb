
function chkPower(paramID) {
      var reportType = 'authAccount';
      var arrange = 'PowerType';
      var taskData = { "reportType": reportType, "arrange": arrange, "UserOID": paramID };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMCode/getRoute",
            success: function (data) {
                  console.log("无租", JSON.stringify(data));
                  var hello = data.RoleAID;
//                   Select tbu.*,tbr.RoleAID from usersauthority tbu LEFT JOIN roles tbr ON tbu.ProcessOID = tbr.RoleOID
//   where UserOID = '51'
                  if (hello == 'tmCodeAdm'|| hello == 'CodeGM') {
                        console.log("太美丽", hello);
                        return true;
                  } else {
                        layer.alert("不合法用户!");
                        window.location.href = "/app/TMCode/NoAuthority";
                        return false;
                  }                
            },
            error: function () {
                  layer.alert("不成功");
                  return  false;
            }
      })
}
function chkCivilOID( UserOID, AuditOID ) {
      var reportType = 'authAccount';
      var arrange = 'CivilOID';
      var taskData = { "reportType": reportType, "arrange": arrange, "UserOID": UserOID , "AuditOID": AuditOID };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMCode/getRoute",
            success: function (data) {
                  console.log("无租", JSON.stringify(data));
                  var hello = data.status;
                  if (hello == 'OK' ) {
                        console.log("喷出", hello);
                        return true;
                  } else {
                        console.log("一泄", hello); 
                        return false;
                  }                
            },
            error: function () {
                  layer.alert("不成功");
                  return  false;
            }
      })
}
function CivilName( UserName, AuditName ) {
      var reportType = 'authAccount';
      var arrange = 'CivilName';
      var taskData = { "reportType": reportType, "arrange": arrange, "UserName": UserName , "AuditName": AuditName };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMCode/getRoute",
            success: function (data) {
                  console.log("无租", JSON.stringify(data));
                  var hello = data.status;
                  if (hello == 'OK' ) {
                        console.log("喷出", hello);
                        return true;
                  } else {
                        console.log("一泄", hello); 
                        return false;
                  }                
            },
            error: function () {
                  layer.alert("不成功");
                  return  false;
            }
      })
}
// function chkCivilName( UserName, AuditName, AuditOID ) {
//       var reportType = 'authAccount';
//       var arrange = 'CivilName';
//       var taskData = { "reportType": reportType, "arrange": arrange, "UserName": UserName , "AuditName": AuditName, "AuditOID": AuditOID };
//       $.ajax({
//             method: 'post',
//             data: taskData,
//             url: "/app/TMCode/getRoute",
//             success: function (data) {
//                   console.log("无租", JSON.stringify(data));
//                   var hello = data.status;
//                   if (hello == 'OK' ) {
//                         // layer.alert("可以");
//                         console.log("喷出", hello);
//                         IsAudit = true;
//                         return true;
//                   } else {
//                         // layer.alert("不成功");
//                         console.log("一泄", hello); 
//                         IsAudit = false;
//                         return false;
//                   }                
//             },
//             error: function () {
//                   layer.alert("不成功");
//                   IsAudit = false;
//                   return  false;
//             }
//       })
// }