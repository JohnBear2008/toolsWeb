function chkAR(Advstr) {
      let dataArr = [];
      var reportChannel = 'RemindSale';
      var arrange = 'ARmind';
      var taskData = { "reportType": reportChannel, "arrange": arrange , "Advstr": Advstr  };
      $.ajax({
              method: 'post',
              data: taskData,
              url: "/app/TMSale/getRoute",
              success: function (data) {
                  dataArr = data;
                  var FormStat ='';
                  if(dataArr.length>0){
                        for (var i = 0; i < dataArr.length; i++) {
                              // FormStat  += dataArr[i].Formkind+""+dataArr[i].cnt+ "\t\n" ;
                              FormStat  += dataArr[i] + "\t\n" ;
                        }
                        var message = '您有即将到期的客户应收帐：' +FormStat ;
                        ReRemide("警告", message).then(function () {
                              console.log('确认');
                        }, function () {
                              console.log("取消");
                        })
                  }
              },
              error: function () {
              }
      })     
}

function ReRemide(title, content) {
      var confirmPromise = new Promise(function (resolve, reject) {
            $('#confirmModal .modal-title').text(title);
            $('#confirmModal .modal-body p').text(content);
            // $('.console-show p').text('页面点击"取消"');
            $('#confirmModal').modal('show');
            $('#confirmModal .sureBtn').off('click').click(resolve);
            $('#confirmModal .cancelBtn').off('click').click(reject);
    })
      return confirmPromise;
};
