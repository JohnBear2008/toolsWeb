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
function view_hmi() {
      var GrandTmp = 0;
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
                  $('#TicTotal_' + i).val(sumTemp);  //bug
                  console.log("野弘", sumTemp, "机车", i);
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
}
function apply_hmi() {
      var SendStatus = '1';
      layer.confirm('此单送出审批吗，请确认操作是否无误？', {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            var hideBillNo = $('#hideBillNo').val();
            var Basstr = {
                  "SendStatus": SendStatus, "hideBillNo": hideBillNo
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
                        if (data.status == 'Fail') {
                              layer.msg("讯息" + data.message);
                        } else if (data.status == 'OK') {
                              layer.confirm("申请文号" + data.BillNo + "已送出" + (data.status), {
                                    btn: ['知道了']
                              }, function () {
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
function save_hmi() {
      view_hmi();
      var SendStatus = '0';
      var hideBillNo = $('#hideBillNo').val();
      var ApplicNo = $('#ApplicNo').val();
      var Version = $('#Version').val();
      var Subject = $('#Subject').val();
      var BusiMan = $('#BusiMan').val();
      var BusiArea = $('#BusiArea').val();
      var DeptName = $('#DeptName').val();
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TotalValue').val();
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
      var Explanation = $('#Explanation').val();
      var Overspend = $('#Overspend').val();
      var IsOver = $('#IsOver').val();
      var HotelName = $('#HotelName').val();
      var HotelTel = $('#HotelTel').val();
      var Overspend = $('#Overspend').val();
      var Advstr = {
            "SendStatus": SendStatus, "ApplicNo": ApplicNo, "Subject": Subject, "Version": Version, "BusiMan": BusiMan, "BusiArea": BusiArea,
            "DeptName": DeptName, "StaffID": StaffID, "StaffName": StaffName, "TotalValue": TotalValue, "LeaveDate": LeaveDate,
            "LeaveHour": LeaveHour, "LeaveMin": LeaveMin, "BackDate": BackDate, "BackHour": BackHour, "BackMin": BackMin,
            "LiveDateA": LiveDateA, "LiveDateB": LiveDateB, "LiveDateC": LiveDateC, "LiveDateD": LiveDateD,
            "LiveDateE": LiveDateE, "LiveDateF": LiveDateF, "Explanation": Explanation, "Overspend": Overspend,
            "IsOver": IsOver, "HotelName": HotelName, "HotelTel": HotelTel, "Overspend": Overspend, "hideBillNo": hideBillNo
      };
      console.log("李秀晶", Advstr);
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
            if (i > 14 && i < 19) {
                  console.log("子瑜", JSON.stringify(StepStr));
            }
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
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "sData": sData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  console.log("可欣", JSON.stringify(data));
                  $("#hideBillNo").val(data.BillNo);
                  if (data.status == 'Fail') {
                        layer.msg("讯息" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" + data.BillNo + "已保存" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              layer.msg('操作成功', { icon: 1 });
                        });
                  }
            },
            error: function () {
            }
      })

}
