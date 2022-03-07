function AIMonth(currentYear ,currentMonth) {
      var s = "";
      var CSMonth = "";
      var CSYear = "";
      if ( currentMonth == 0 ) {
        CSYear = currentYear - 1;
        CSMonth =  12;
      }else if ( currentMonth == 13 ) {
        CSYear = currentYear + 1;
        CSMonth =  1;
      }else if ( currentMonth == 14 ) {
        CSYear = currentYear + 1;
        CSMonth =  2;
      }else if ( currentMonth == 15 ) {
        CSYear = currentYear + 1;
        CSMonth =  3;
      }else if ( currentMonth == 16 ) {
        CSYear = currentYear + 1;
        CSMonth =  4;
      }else if ( currentMonth == 17 ) {
        CSYear = currentYear + 1;
        CSMonth =  5;
      }else if ( currentMonth == 18 ) {
        CSYear = currentYear + 1;
        CSMonth =  6;
      }else if ( currentMonth == -1 ) {
        CSYear = currentYear - 1;
        CSMonth =  11;
      }else if ( currentMonth == -2 ) {
        CSYear = currentYear - 1;
        CSMonth =  10;
      }else if ( currentMonth == -3 ) {
        CSYear = currentYear - 1;
        CSMonth =  9;
      }else if ( currentMonth == -4 ) {
        CSYear = currentYear - 1;
        CSMonth =  8;
      }else if ( currentMonth == -5 ) {
        CSYear = currentYear - 1;
        CSMonth =  7;
      }else {
        CSYear = currentYear  ;
        CSMonth = currentMonth  ;       
      }
      if(CSMonth<10){
        s += CSYear + '0' + CSMonth;
      }else{
        s += CSYear + '' + CSMonth;
      }
  return (s);
}
 
function seeARMake() {
  var youoption = document.createElement("option");
  youoption.id = "PayNotDone";
  youoption.name = "PayNotDone";
  youoption.text = "全部";
  youoption.value = "全部";
  $("#PayNotDone").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "完成";
  youoption.value = "完成";
  $("#PayNotDone").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "未完成";
  youoption.value = "未完成";
  $("#PayNotDone").append(youoption);

  $("#AlertPay").val(''); $("#AlertPay").html(''); 
  var youoption = document.createElement("option");
  youoption.id = "AlertPay";
  youoption.name = "AlertPay";
  youoption.text = "一个月前";
  youoption.value = "1";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "两个月前";
  youoption.value = "2";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "三个月前";
  youoption.value = "3";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "四个月前";
  youoption.value = "4";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "五个月前";
  youoption.value = "5";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "六个月前";
  youoption.value = "6";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "七个月前";
  youoption.value = "7";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "八个月前";
  youoption.value = "8";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "九个月前";
  youoption.value = "9";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "十个月前";
  youoption.value = "10";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "十一个月前";
  youoption.value = "11";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "一年前";
  youoption.value = "12";
  $("#AlertPay").append(youoption);
}
function seeARJust() {
  $("#AlertPay").val(''); $("#AlertPay").html(''); 
  var youoption = document.createElement("option");
  youoption.id = "AlertPay";
  youoption.name = "AlertPay";
  youoption.text = "一年前";
  youoption.value = "1";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "两年前";
  youoption.value = "2";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "三年前";
  youoption.value = "3";
  $("#AlertPay").append(youoption);
  youoption = document.createElement("option");
  youoption.text = "四年前";
  youoption.value = "4";
  $("#AlertPay").append(youoption);
}
function seeNone() {
  $("#AlertPay").val(''); $("#AlertPay").html(''); 
}
function CritBacBusi() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Basic';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("俞连州", JSON.stringify(dataArr));
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductName;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#LifeValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function CritAdvBusi(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Adv';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      $("#LifeValue").val(); $("#LifeValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductName;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#LifeValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}
function CritBacShip() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Basic';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("俞连州", JSON.stringify(dataArr));
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductShort;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductShort;
        $("#LifeValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function CritAdvShip(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Adv';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      $("#LifeValue").val(); $("#LifeValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductShort;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductShort;
        $("#LifeValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}
function CritBacPers() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'BasicPers';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function FincBacPers() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'BasicFinc';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMFinc/getRoute",
    success: function (data) {
      dataArr = data;
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 姓名: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function CritAdvPers(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'AdvPers';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      $("#FishValue").val(); $("#FishValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}
