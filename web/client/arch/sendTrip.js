function inputCheckFee(obj, errItem) {
      var ret = true;
      if (obj != null && obj.length > 0) {

      } else {
            layer.alert(errItem + "為空");
            return false;
      }
      if (obj.length > 20) {
            layer.alert(errItem + "太长")
            return false;
      }

      if (isNaN(parseFloat(obj))) {
            ret = false;
      } else {

      }
      return ret;
}
function LiveRoomExt() {
      var SUmExt = 0;
      var LiveExtA = $('#LiveExtA').val();
      if (LiveExtA != '' && LiveExtA != 'NaN' && LiveExtA != undefined) {
           var SubExtA = parseInt(LiveExtA, 10); 
           SUmExt += SubExtA;           
      }
      var LiveExtB = $('#LiveExtB').val();
      if (LiveExtB != '' && LiveExtB != 'NaN' && LiveExtB != undefined) {
           var SubExtB = parseInt(LiveExtB, 10); 
           SUmExt += SubExtB;           
      }
      var LiveExtC = $('#LiveExtC').val();
      if (LiveExtC != '' && LiveExtC != 'NaN' && LiveExtC != undefined) {
           var SubExtC = parseInt(LiveExtC, 10); 
           SUmExt += SubExtC;           
      }
      var LiveExtD = $('#LiveExtD').val();
      if (LiveExtD != '' && LiveExtD != 'NaN' && LiveExtD != undefined) {
           var SubExtD = parseInt(LiveExtD, 10); 
           SUmExt += SubExtD;           
      }
      var LiveExtE = $('#LiveExtE').val();
      if (LiveExtE != '' && LiveExtE != 'NaN' && LiveExtE != undefined) {
           var SubExtE = parseInt(LiveExtE, 10); 
           SUmExt += SubExtE;           
      }
      $('#LiveSatExt').val(SUmExt); 
      $('#LiveSatExt').html(SUmExt); 
}
function LiveRoomA() {
      $('#LiveExtA').val('1'); 
      $('#LiveExtA').html('1'); 
      LiveRoomExt();           
}
function LiveRoomB() {
      $('#LiveExtB').val('1'); 
      $('#LiveExtB').html('1'); 
      LiveRoomExt();
}
function LiveRoomC() {
      $('#LiveExtC').val('1'); 
      $('#LiveExtC').html('1'); LiveRoomExt() ;
}
function LiveRoomD() {
      $('#LiveExtD').val('1'); 
      $('#LiveExtD').html('1'); LiveRoomExt() ;
}
function LiveRoomE() {
      $('#LiveExtE').val('1'); 
      $('#LiveExtE').html('1'); LiveRoomExt() ;
}
function LiveRoomF() {
      $('#LiveExtF').val('1'); 
      $('#LiveExtF').html('1'); LiveRoomExt() ;
}
function winTrip() {
      var DeptName = '';
      var GroupName = $('#GroupCombo').val();
      let DepList = [];
      if (GroupName != "" && GroupName != undefined) {
            DepList = GroupName.split('-');
            for (var ki = 0; ki < DepList.length; ki++) {
                  DeptName = DepList[0];
                  console.log( "酷斯拉", DeptName);
            }
      }
      var reportType = 'AcquireChain';
      var oppOID = sessionOID;
      var OppName = sessionName;
      var arrange = 'RuleTrip';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "DeptName": DeptName, "GroupName": GroupName , "oppOID": oppOID , "OppName": OppName
      }
      console.log("鷹羽澪",taskData );
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  if( data[0]!=null && data[0]!=undefined){
                        $("#OppName").val(data[0].OppName);
                        $("#MagName").val(data[0].MagName);
                        $("#VipName").val(data[0].VipName);
                  }
            },
            error: function () {
            }
      })
}
function view_dsp() {
      var GrandTmp = 0;
      var GrandInp = 0;
      var columnA = 0;
      var columnB = 0;
      var columnC = 0;
      var columnD = 0;
      var columnE = 0;
      var columnF = 0;
      var SUmOFA = 0;
      var SUmOFB = 0;
      var SUmOFC = 0;
      var SUmOFD = 0;
      var SUmOFE = 0;
      var SUmOFF = 0;
      let InpTax = [];
      let Rate = [];
      for (let i = 0; i <= 13; i++) {
            InpTax[i] = 0;
      }
      for (let i = 0; i <= 13; i++) {
            Rate[i] = 0;
      }
      //机票机场税
            Rate[2] = 0.08256;
      //汽车
            Rate[3] = 0.02912;
      //火车费
            Rate[4] = 0.08256;
       
      var sumTemp = 0;
      for (let i = 0; i <= 13; i++) {
            var TrafficA = $('#TrafficA_' + i).val();
            var TrafficB = $('#TrafficB_' + i).val();
            var TrafficC = $('#TrafficC_' + i).val();
            var TrafficD = $('#TrafficD_' + i).val();
            var TrafficE = $('#TrafficE_' + i).val();
            var TrafficF = $('#TrafficF_' + i).val();
            SUmOFA = 0;
            SUmOFB = 0;
            SUmOFC = 0;
            SUmOFD = 0;
            SUmOFE = 0;
            SUmOFF = 0;
            sumTemp = 0;
            if (TrafficA != '' && TrafficA != 'NaN' && TrafficA != undefined) {
                  SUmOFA = parseInt(TrafficA, 10); 
                  columnA += SUmOFA; GrandTmp += SUmOFA;
                  // console.log("田田",columnA,"之字",i);
            }
            if (TrafficB != '' && TrafficB != 'NaN' && TrafficB != undefined) {
                  SUmOFB = parseInt(TrafficB, 10); 
                  columnB += SUmOFB; GrandTmp += SUmOFB;
            }
            if (TrafficC != '' && TrafficC != 'NaN' && TrafficC != undefined) {
                  SUmOFC = parseInt(TrafficC, 10); 
                  columnC += SUmOFC; GrandTmp += SUmOFC;
            }
            if (TrafficD != '' && TrafficD != 'NaN' && TrafficD != undefined) {
                  SUmOFD = parseInt(TrafficD, 10); 
                  columnD += SUmOFD; GrandTmp += SUmOFD;
            }
            if (TrafficE != '' && TrafficE != 'NaN' && TrafficE != undefined) {
                  SUmOFE = parseInt(TrafficE, 10); 
                  columnE += SUmOFE; GrandTmp += SUmOFE;
            }
            if (TrafficF != '' && TrafficF != 'NaN' && TrafficF != undefined) {
                  SUmOFF = parseInt(TrafficF, 10); 
                  columnF += SUmOFF; GrandTmp += SUmOFF;
            }
            sumTemp = SUmOFA + SUmOFB + SUmOFC + SUmOFD + SUmOFE + SUmOFF;
            if (sumTemp != '' && sumTemp != '0' && sumTemp != 'NaN' && sumTemp != undefined) {
                  $('#TicTotal_' + i).val(sumTemp);   
                  var inpTemp = sumTemp*( Rate[i]);   
                  var inpTax = inpTemp.toFixed(1); 
                  GrandInp += inpTemp;
                  $('#InputVAT_' + i).val(inpTax);   
            }
      }
      if (columnA != '' && columnA != 'NaN' && columnA != undefined) {
            $('#TrafficA_14').val(columnA);
      }
      if (columnB != '' && columnB != 'NaN' && columnB != undefined) {
            $('#TrafficB_14').val(columnB);
      }
      if (columnC != '' && columnC != 'NaN' && columnC != undefined) {
            $('#TrafficC_14').val(columnC);
      }
      if (columnD != '' && columnD != 'NaN' && columnD != undefined) {
            $('#TrafficD_14').val(columnD);
      }
      if (columnE != '' && columnE != 'NaN' && columnE != undefined) {
            $('#TrafficE_14').val(columnE);
      }
      if (columnF != '' && columnF != 'NaN' && columnF != undefined) {
            $('#TrafficF_14').val(columnF);
      }
      $('#TicTotal_14').val(GrandTmp);
      GrandInp = GrandInp.toFixed(1); 
      $('#InputVAT_14').val(GrandInp);
}
function apply_dsp() {
      var DeptName = '';
      var GroupName = $('#GroupName').val();
      var OrigName = $('#hideOrig').val();
      let DepList = [];
      if (GroupName != "" && GroupName != undefined) {
            DepList = GroupName.split('-');
            for (var ki = 0; ki < DepList.length; ki++) {
                  DeptName = DepList[0];
                  console.log( "酷斯拉", DeptName);
            }
      }
      var FlowRole = $('#hideFlowRole').val(); 
      var StaffName = sessionName;
      var SendStatus = '1';
      if(DeptName!=null ||DeptName!=undefined ){

      }else{
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      if(GroupName!=null ||GroupName!=undefined ){

      }else{
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      layer.confirm('此单送出审批吗，请确认操作是否无误？', {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            var hideBillNo = $('#hideBillNo').val();
            var hidePhone = $('#hidePhone').val();
            var Basstr = {
                  "SendStatus": SendStatus, "hideBillNo": hideBillNo , "hidePhone": hidePhone ,
                  "OrigName": OrigName, "DeptName": DeptName, "GroupName": GroupName,  "StaffName": StaffName, "FlowRole": FlowRole  
            };
            var reportType = 'applyTrip';
            var arrange = 'confirm';
            var taskData = {
                  "reportType": reportType, "arrange": arrange, "Basstr": Basstr
            }
            $.ajax({
                  method: 'post',
                  data: taskData,
                  url: "/app/TMFinc/getRoute",
                  success: function (data) {
                        console.log("可新", JSON.stringify(data));
                        $("#hideBillNo").val('');
                        $("#hidePhone").val('');
                        if (data.status == 'Fail') {
                              layer.msg("讯息" + data.message);
                        } else if (data.status == 'OK') {
                              layer.confirm("申请文号" + data.BillNo + "已送出" + (data.status)+"\n讯息" + (data.message), {
                                    btn: ['知道了']
                              }, function () {
                                    window.location.href = '/app/TMFinc/feeTravel';
                                    layer.msg('操作成功', { icon: 1 });
                              });
                        }
                  },
                  error: function () {
                  }
            })
      }, function () {
            layer.msg('无操作', { icon: 1 });
      });

}
function view_overTime() {
      var ResultWord = '住宿標准:';
      var Standard = 0;
      var Ext_Tmp = 0;
      var INP_9Tmp = 0;
      var LiveSatExt = $('#LiveSatExt'  ).val();
      var TicTotal_9 = $('#TicTotal_9' ).val();
      var RoomChoice = $('#RoomChoice' ).val();
      var RoomMoney = 0;
      if (RoomChoice != '' && RoomChoice != 'NaN' && RoomChoice != undefined) {
            if(RoomChoice=='普通员工-单人住宿'){
                  RoomMoney = 200;
            }
            if(RoomChoice=='普通员工-两人同住'){
                  RoomMoney = 240;
            }
            if(RoomChoice=='组长以上-单人住宿'){
                  RoomMoney = 250;
            }
            if(RoomChoice=='组长以上-两人同住'){
                  RoomMoney = 300;
            }
            if(RoomChoice=='副经理以上-单人住宿'){
                  RoomMoney = 320;
            }
            if(RoomChoice=='副经理以上-两人同住'){
                  RoomMoney = 350;
            }
      }
     
      if (LiveSatExt != '' && LiveSatExt != 'NaN' && LiveSatExt != undefined) {
            Ext_Tmp = parseInt(LiveSatExt, 10); 
            Standard = Ext_Tmp*RoomMoney; 
            console.log("標准==：",Standard,"每日==：",RoomMoney ,"天数",Ext_Tmp);
      }
      if (TicTotal_9 != '' && TicTotal_9 != 'NaN' && TicTotal_9 != undefined) {
            INP_9Tmp = parseInt(TicTotal_9, 10);  
            console.log("报了多少：",INP_9Tmp);
      }
      if(INP_9Tmp  > Standard ){
            ResultWord += Standard;
            ResultWord += '元\t住宿超支'+(Standard - INP_9Tmp) +'元';
            console.log("情况1：",Standard ,"",INP_9Tmp);
      }else{
            ResultWord += Standard;
            ResultWord += '元\t住宿未超支\t';
            console.log("情况2：",Standard ,"",INP_9Tmp);
      }
      var MoneyEat1 = 10;
      var MoneyEat2 = 25;
      var MoneyEat3 = 25;
      var EatStand1 = 0;
      var EatStand2 = 0;
      var EatStand3 = 0;
      if (LiveSatExt != '' && LiveSatExt != 'NaN' && LiveSatExt != undefined) {
            Ext_Tmp = parseInt(LiveSatExt, 10); 
            EatStand1 = Ext_Tmp*MoneyEat1; 
            EatStand2 = Ext_Tmp*MoneyEat2; 
            EatStand3 = Ext_Tmp*MoneyEat3; 
            console.log("天数", Ext_Tmp ,"早餐標准==：",EatStand1 ,"中餐標准==：",EatStand2 ,"晚餐標准==：",EatStand3);
      }
      var Morni_Inp = $('#TicTotal_10'  ).val(); 
      var Lanch_Inp = $('#TicTotal_11'  ).val(); 
      var Suppe_Inp = $('#TicTotal_12'  ).val(); 
      if(Morni_Inp  > EatStand1 ){
            ResultWord += '\n早餐补贴';
            ResultWord += EatStand1;
            ResultWord += '元\t早餐超支'+(EatStand1 - Morni_Inp) +'元';
            console.log("早餐1：",EatStand1 ,"",Morni_Inp);
      }else{
            ResultWord += '\n早餐补贴';
            ResultWord += EatStand1;
            ResultWord += '元\t早餐未超支';
            console.log("早餐2：",EatStand1 ,"",Morni_Inp);
      }
      if(Lanch_Inp  > EatStand2 ){
            ResultWord += '\n午餐补贴';
            ResultWord += EatStand2;
            ResultWord += '元\t午餐超支'+(EatStand2 - Lanch_Inp) +'元';
            console.log("午餐1：",EatStand2 ,"",Lanch_Inp);
      }else{
            ResultWord += '\n午餐补贴';
            ResultWord += EatStand2;
            ResultWord += '元\t午餐未超支';
            console.log("午餐2：",EatStand2 ,"",Lanch_Inp);
      }
      if(Suppe_Inp  > EatStand3 ){
            ResultWord += '\n晚餐补贴';
            ResultWord += EatStand3;
            ResultWord += '元\t晚餐超支'+(EatStand3 - Suppe_Inp) +'元';
            console.log("晚餐1：",EatStand3 ,"",Suppe_Inp);
      }else{
            ResultWord += '\n晚餐补贴';
            ResultWord += EatStand3;
            ResultWord += '元\t晚餐未超支';
            console.log("晚餐2：",EatStand3 ,"",Suppe_Inp);
      }
      var DinnerChoice = $('#DinnerChoice' ).val();
      var DinnerMoney = 0;
      var MoneyEat3 = 25;
      var DayEat_Inp = 0;
      Morni_Tmp = parseInt(Morni_Inp, 10);
      Lanch_Tmp = parseInt(Lanch_Inp, 10);
      Suppe_Tmp = parseInt(Suppe_Inp, 10);
      DayEat_Inp = Morni_Tmp + Lanch_Tmp + Suppe_Tmp;
      if (DinnerChoice != '' && DinnerChoice != 'NaN' && DinnerChoice != undefined) {
            if(DinnerChoice=='国内'){
                  DinnerMoney = 100000;
            }
            if(DinnerChoice=='国外-印度'){
                  DinnerMoney = 190;
            }
            if(DinnerChoice=='国外-巴西'){
                  DinnerMoney = 150;
            }
            if(DinnerChoice=='国外-伊朗'){
                  DinnerMoney = 150;
            }
            if(DinnerChoice=='国外-马来西亚'){
                  DinnerMoney = 150;
            }
            if(DinnerChoice=='国外-其他'){
                  DinnerMoney = 100000;
            }
      }
      if(DayEat_Inp  > DinnerMoney ){
            ResultWord += '\n国外补贴';
            ResultWord += DinnerMoney;
            ResultWord += '元\t国外超支'+(DinnerMoney - DayEat_Inp) +'元';
            console.log("国外1：",DinnerMoney ,"",DayEat_Inp);
      }else{
            if(DinnerChoice=='国内'){
                 
            }else{
                  ResultWord += '\n国外补贴';
                  ResultWord += DinnerMoney;
                  ResultWord += '元\t国外未超支';
                  console.log("国外2：",DinnerMoney ,"",DayEat_Inp);
            }
      }
      $('#Overspend').val(ResultWord);
}
function save_dsp() {
      view_dsp();
      view_overTime();
      var SendStatus = '0';
      var hideBillNo = $('#hideBillNo').val();
      var ApplicNo = $('#ApplicNo').val();
      var Version = $('#Version').val();
      var Subject ='差旅费'; 
      var BusiMan = $('#BusiMan').val();
      var CompMan = $('#CompMan').val();
      var BusiArea = $('#BusiArea').val();
      var GroupName = $('#GroupName').val();
      var DeptName = '';
      let DepList = [];
      if (GroupName != "" && GroupName != undefined) {
            DepList = GroupName.split('-');
            for (var ki = 0; ki < DepList.length; ki++) {
                  DeptName = DepList[0];
                  console.log( "酷斯拉", DeptName);
            }
      }
      var RoomChoice  = $('#RoomChoice').val();
      var DinnerChoice = $('#DinnerChoice').val();
      var FlowRole = $('#hideFlowRole').val();  
      var OrigName = $('#hideOrig').val();  
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TicTotal_14').val();
      var LeaveDate = $('#LeaveDate').val();
      var LeaveHour = $('#LeaveHour').val();
      var LeaveMin = $('#LeaveMin').val();
      var BackDate = $('#BackDate').val();
      var BackHour = $('#BackHour').val();
      var BackMin = $('#BackMin').val();
      var LiveDateA = $('#LiveDateA').val();
      var LiveDateB = $('#LiveDateB').val();
      var LiveDateC = $('#LiveDateC').val();
      var LiveDateD = $('#LiveDateD').val();
      var LiveDateE = $('#LiveDateE').val();
      var LiveDateF = $('#LiveDateF').val();
      var LiveExtA = $('#LiveExtA').val();
      var LiveExtB = $('#LiveExtB').val();
      var LiveExtC = $('#LiveExtC').val();
      var LiveExtD = $('#LiveExtD').val();
      var LiveExtE = $('#LiveExtE').val();
      var LiveExtF = $('#LiveExtF').val();
      var Explanation = $('#Explanation').val();
      var Overspend = $('#Overspend').val();
      var OverReason = $('#OverReason').val();
      var OverChoice = $('#OverChoice').val();
      var HotelName = $('#HotelName').val();
      var HotelTel = $('#HotelTel').val();
      var Overspend = $('#Overspend').val();
      var Advstr = {
            "SendStatus": SendStatus, "ApplicNo": ApplicNo, "Subject": Subject, "Version": Version, "BusiMan": BusiMan, "CompMan": CompMan, "BusiArea": BusiArea,
            "OrigName": OrigName, "GroupName": GroupName, "RoomChoice": RoomChoice ,"DinnerChoice": DinnerChoice, "DeptName": DeptName, "StaffID": StaffID, "StaffName": StaffName,
            "FlowRole": FlowRole , "TotalValue": TotalValue, "LeaveDate": LeaveDate,
            "LeaveHour": LeaveHour, "LeaveMin": LeaveMin, "BackDate": BackDate, "BackHour": BackHour, "BackMin": BackMin,
            "LiveDateA": LiveDateA, "LiveDateB": LiveDateB, "LiveDateC": LiveDateC, "LiveDateD": LiveDateD,
            "LiveDateE": LiveDateE, "LiveDateF": LiveDateF, "LiveExtA": LiveExtA, "LiveExtB": LiveExtB, "LiveExtC": LiveExtC,
            "LiveExtD": LiveExtD, "LiveExtE": LiveExtE, "LiveExtF": LiveExtF, "Explanation": Explanation, "Overspend": Overspend,
            "OverChoice": OverChoice, "HotelName": HotelName, "HotelTel": HotelTel, "OverReason": OverReason, "hideBillNo": hideBillNo
      };
      // console.log("李秀晶", Advstr);
      if(DeptName!=null ||DeptName!=undefined ){

      }else{
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      if(GroupName!=null ||GroupName!=undefined ){

      }else{
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      let sData = [];
      for (let i = 0; i <= 19; i++) {
            var SNNo = '' + i;
            var TrafficA = $('#TrafficA_' + i).val();
            var TrafficB = $('#TrafficB_' + i).val();
            var TrafficC = $('#TrafficC_' + i).val();
            var TrafficD = $('#TrafficD_' + i).val();
            var TrafficE = $('#TrafficE_' + i).val();
            var TrafficF = $('#TrafficF_' + i).val();
            var TicTotal = $('#TicTotal_' + i).val();
            var InputVAT = $('#InputVAT_' + i).val();
            var TripDate = $('#TripDate_' + i).val();
            var TripCust = $('#TripCust_' + i).val();
            var TripRept = $('#TripRept_' + i).val();
            var TripNote = $('#TripNote_' + i).val();
            // console.log("愛実", TrafficA);
            var StepStr = {
                  "SNNo": SNNo,
                  "TrafficA": TrafficA,
                  "TrafficB": TrafficB,
                  "TrafficC": TrafficC,
                  "TrafficD": TrafficD,
                  "TrafficE": TrafficE,
                  "TrafficF": TrafficF,
                  "TicTotal": TicTotal,
                  "InputVAT": InputVAT,
                  "TripDate": TripDate,
                  "TripCust": TripCust,
                  "TripRept": TripRept,
                  "TripNote": TripNote,
            };
            // if (i > 14 && i < 19) {
            //       console.log("子瑜", JSON.stringify(StepStr));
            // }
            sData.push(StepStr);
      }

      // if (inputCheckFee(TotalValue, "总金额")) {
      //       layer.alert("总金额" + "Ok!");
      // } else {
      //       layer.alert("总金额" + "不对，请检查!");
      //       return;
      // }
      var reportType = 'applyTrip';
      var arrange = 'saveSend';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "edituse": edituse ,"sData": sData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  console.log("可欣", JSON.stringify(data));
                  $("#hideBillNo").val(data.BillNo);
                  $("#hidePhone").val(data.Phone);
                  if (data.status == 'Fail') {
                        layer.msg("讯息" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" + data.BillNo + "已保存" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              // layer.msg('操作成功', { icon: 1 });
                              apply_dsp();
                        });
                  }
            },
            error: function () {
            }
      })
}
// function DingDing() {
//       var phone = '1505213225'; 
//       var DeptName = '软体部'; 
//       var GroupName = 'MIS'; 
//       var FormKind = '出差单'; 
//       var CurText = '申批'; 
//       var CurName = '张光帷';  
//       var Advstr = { "DeptName": DeptName, "GroupName": GroupName,  "FormKind": FormKind, "CurText": CurText, "CurName": CurName };
//       putDing( Advstr);
// }
