function searchTravel(mode) {
      CapMode = 'B'; Formkind = '出差单';
      CapDate = '0';
      var qrybillno = $('#mainbillno').val();
      const emdata = [
      ]
      let dataArr = [];
      var reportType = 'CherryFee';
      var arrange = 'Trip';
      var DateB = $("#taskMakeDateB").val();
      var DateE = $("#taskMakeDateE").val();
      var taskData = '';
      if (mode == '0') {
          taskData = {
              "reportType": reportType, "arrange": arrange,
              "CurWorkId": sessionAID, "CurName": sessionName,
          };
      } else if (mode == '1') {  //nouse
          taskData = {
              "reportType": reportType, "arrange": arrange,
              "CurWorkId": sessionAID, "CurName": '',
          };
      } else if (mode == '2') {
          taskData = {
              "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE,
              "CurWorkId": sessionAID, "CurName": sessionName,
          };
      }
      console.log("金玉", JSON.stringify(taskData));
      $.ajax({
          method: 'post',
          data: taskData,
          url: "/app/TMFinc/getRoute",
          success: function (data) {
              dataArr = data;
              const json2 = JSON.stringify(dataArr);
              const bjob = JSON.parse(json2);
              // console.log("端装", json2, "机动", data.length);
              for (var i = 0; i < dataArr.length; i++) {
                  var dataTTT = dataArr[i];
                  emdata.push(dataTTT);
              }
              var table = layui.table;
              centerTable = table;
              table = $.extend(table, { config: { checkName: 'checked' } });
              table.render({
                  elem: '#test'
                  , data: emdata
                  , toolbar: '#toolbarDemo'
                  // , defaultToolbar: ['filter', 'exports', 'print', {
                  //     title: '提示'
                  //     , layEvent: 'LAYTABLE_TIPS'
                  //     , icon: 'layui-icon-tips'
                  // }]
                  , width: 1480
                  , title: '数据表'
                  , cols: [[
                      { type: 'checkbox', fixed: 'left' }
                      , { field: 'BillNo', title: '系统号', width: 140, sort: true }
                      , { field: 'ApplicNo', title: '申请单号', width: 90, sort: true }
                      , { field: 'Subject', title: '科目', width: 0, hide: true }
                      , { field: 'BusiMan', title: '出差人', width: 100, sort: true }
                      , { field: 'BusiArea', title: '地区', width: 80 }
                      , { field: 'LeaveDate', title: '出发时间', width: 120, sort: true }
                      , { field: 'DeptName', title: '部门', width: 80 }
                      , { field: 'StaffName', title: '提交人', width: 80, sort: true }
                      , { field: 'IsOver', title: '超支', width: 60 }
                      , { field: 'Overspend', title: '超支额', width: 70 }
                      , { field: 'EntryDate', title: '日期', width: 110 }
                      , { field: 'Explanation', title: '备注', width: 70 }
                      , { field: 'CurName', title: '审批人', width: 100, sort: true }
                      , { field: 'CurJob', title: '职位', width: 0, hide: true }
                      , { field: 'TotalValue', title: '总金额', width: 110 }
                      , { field: 'CurPhone', title: '釘釘', width: 0, hide: true }
                      , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200 }
                  ]]
                  , page: true
              });
              table.on('toolbar(test)', function (obj) {
                  objCenter = obj;
                  var checkStatus = table.checkStatus(obj.config.id);
                  switch (obj.event) {
                      case 'viewSumary':
                          var dataARR = (checkStatus.data);
                          // console.log("z智阭", JSON.stringify(checkStatus));
                          console.log("西阭", (dataARR[0].CurPhone));
                          CapBillNo = dataARR[0].BillNo;
                          CapTotalValue = dataARR[0].TotalValue;
                          CapSubject = dataARR[0].Subject;
                          CapCurJob = dataARR[0].CurJob;
                          CapPhone = dataARR[0].CurPhone;
                          shuffleB(dataARR[0].BillNo);
                          // <DIV STYLE="page-break-before:always">
                          $('#kisswindow').modal('show');
                          $("#matchRec").html("出差申请审批:");
                          break;
                      case 'massReject':
                          break;
                      case 'isAll':
                          layer.msg(checkStatus.isAll ? '全选' : '未全选');
                          break;
                      case 'LAYTABLE_TIPS':
                          layer.alert('这是工具栏右侧自定义的一个图标按钮');
                  };
              });
              table.on('tool(test)', function (obj) {
                  var data = obj.data;
                  var Parts_BillNo = data.BillNo;
                  CapTotalValue = data.TotalValue;
                  CapSubject = data.Subject;
                  CapCurJob = data.CurJob;
                  CapPhone = data.CurPhone;
                  if (obj.event === 'analysis') {
                      shuffleB(Parts_BillNo);
                      CapBillNo = Parts_BillNo;
                      // <DIV STYLE="page-break-before:always">
                      $('#kisswindow').modal('show');
                  } else if (obj.event === 'approval') {
                      layer.confirm('进行审批同意吗，请确认操作是否无误？', {
                          btn: ['是', '否']
                      }, function () {
                          var reportType = 'agreeFee';
                          var taskData = {
                              "reportType": reportType, "BillNo": Parts_BillNo, "Formkind": Formkind, "Subject": CapSubject,
                               "TotalValue": CapTotalValue, "CurWorkId": sessionAID, "CurName": sessionName, "CurJob": CapCurJob,
                               "CurPhone": CapPhone,
                          }
                          layer.alert("同意此笔审批号" + Parts_BillNo);
                          $.ajax({
                              method: 'post',
                              data: taskData,
                              url: "/app/TMFinc/getRoute",
                              success: function (result) {
                                  var DateB = $("#taskMakeDateB").val();
                                  var DateE = $("#taskMakeDateE").val();
                                  var paramType = CapMode;
                                  var paramClearA = encodeURI(encodeURI(Parts_BillNo));
                                  layer.confirm("申请文号" + result.BillNo + "已" + (result.message), {
                                                        btn: ['知道了']
                                  }, function () {
                                      layer.msg('操作成功', { icon: 1 });
                                      window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                  });
                              },
                              error: function () {
                              }
                          })
                      }, function () {
                          layer.msg('无操作', { icon: 1 });
                      });
                  } else if (obj.event === 'reject') {
                      layer.confirm('进行审批驳回吗，请确认操作是否无误？', {
                          btn: ['是', '否']
                      }, function () {
                        var arrange = 'ReturnBill';
                        var reportType = 'rejectFee';
                          var taskData = {
                              "reportType": reportType,  "arrange": arrange, "BillNo": Parts_BillNo, "Subject": CapSubject,  "TotalValue": CapTotalValue,
                               "CurWorkId": sessionAID, "CurName": sessionName,  "CurJob": CapCurJob,
                               "CurPhone": CapPhone,
                          }
                          layer.alert("驳回此笔审批号" + Parts_BillNo);
                          $.ajax({
                              method: 'post',
                              data: taskData,
                              url: "/app/TMFinc/getRoute",
                              success: function (result) {
                                  var DateB = $("#taskMakeDateB").val();
                                  var DateE = $("#taskMakeDateE").val();
                                  var paramType = CapMode;
                                  var paramClearA = encodeURI(encodeURI(result.BillNo));
                                  layer.confirm("驳回申请文号" + Parts_BillNo + "已" + (result.message), {
                                      btn: ['知道了']
                                  }, function () {
                                      layer.msg('操作成功', { icon: 1 });
                                      window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                  });
                              },
                              error: function () {
                              }
                          })
                      }, function () {
                          layer.msg('无操作', { icon: 1 });
                      });
                  } else if (obj.event === 'repeat') {
  
                  }
              });
          },
          error: function () {
          }
      })
  }