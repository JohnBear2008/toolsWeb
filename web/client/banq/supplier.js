function getSMT(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldSupp';
  var DBinfo = 'smtdip';
  $("#beef").html("");
  // console.log("瑄", PartsClass);
  // console.log("懿", JSON.stringify(obj));
  var taskData = { "reportType": reportType, "DBinfo": DBinfo, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("麒", JSON.stringify(data) ); 						
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Supp_Name;
        youoption.id = "beef";
        youoption.name = "beef";
        youoption.value = dataArr[i].Supp_CID;
        if (obj != null) {
          if (youoption.value == obj.smt_id) { youoption.selected = "selected"; }
        }else{
          if (youoption.text == "缺省") { youoption.selected = "selected"; }
        }
        $("#beef").append(youoption);
      }
    },
    error: function () {
    }
  })
}
function getSupply(obj) {
  $("#soup").html("");
  let dataArr = [];
  var reportType = 'goldSupp';
  var DBinfo = 'supplier';
  // console.log("科", JSON.stringify(obj));
  var taskData = { "reportType": reportType, "DBinfo": DBinfo };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      //  console.log("风魔", JSON.stringify(obj) ); 						
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Supp_Name;
        youoption.id = "soup";
        youoption.name = "soup";
        youoption.value = dataArr[i].Supp_CID;
        if (obj != null) {
          if (youoption.value == obj.supply_id) { youoption.selected = "selected"; }
        }else{
          if (youoption.text == "缺省") { youoption.selected = "selected"; }
        }
        $("#soup").append(youoption);
      }

    },
    error: function () {
    }
  })


}
function getSubCategory() {
  let dataArr = [];
  var reportType = 'goldCategory';
  var arrange = 'advMenu';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      //    console.log("红孩兒2", JSON.stringify(dataArr) ); 	 				
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Parts_Class + "-" + dataArr[i].Parts_Chi;
        youoption.id = "mainclass";
        youoption.name = "mainclass";
        youoption.value = dataArr[i].Parts_Class;
        $("#subclass").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function getCategory() {
  let dataArr = [];
  var reportType = 'goldCategory';
  var arrange = 'findMenu';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      //    console.log("红孩兒2", JSON.stringify(dataArr) ); 	 				
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Parts_Class + "-" + dataArr[i].Parts_Chi;
        youoption.id = "mainclass";
        youoption.name = "mainclass";
        youoption.value = dataArr[i].Parts_Class;
        if (youoption.text == "-") { youoption.selected = "selected"; }
        $("#mainclass").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function getNewBlue(PartsClass) {
  let dataArr = [];
  var reportType = 'goldCategory';
  var arrange = 'blueLabel';
  // console.log("懿旨", JSON.stringify(obj));
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("麒美", JSON.stringify(data) ); 						
      for (var i = 0; i < dataArr.length; i++) {
        $("#pclass").html(dataArr[i].Parts_Class + "" + dataArr[i].Parts_Chi);
        $("#mainclass").val(dataArr[i].Parts_Class);
        $("#mainchi").val(dataArr[i].Parts_Chi);
      }
    },
    error: function () {
    }
  })

}
function getPack(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldBasic';
  var arrange = 'Pack';
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("凤凰喷火", JSON.stringify(data));
      // console.log("凤凰喷水", JSON.stringify(obj.PartsUnitE));
      $("#Phase").html(""); $("#Phase").val("");
      $("#Priority").html(""); $("#Priority").val("");
      $("#Assembly").html(""); $("#Assembly").val("");
      for (var i = 0; i < dataArr.length; i++) {
        var Rank = dataArr[i].Rank;
        // if (Rank == 'A') {
        //   if (obj != null) {
        //     if (dataArr[i].Unit_Name == obj.PartsUnitE) {
        //       $("#UnitE").html(obj.PartsUnitE);
        //       $("#UnitE").val(obj.PartsUnitE);
        //     } else {
        //       $("#UnitE").html(dataArr[i].Unit_Name);
        //       $("#UnitE").val(dataArr[i].Unit_Name);
        //     }
        //   } else {
        //     $("#UnitE").html(dataArr[i].Unit_Name);
        //     $("#UnitE").val(dataArr[i].Unit_Name);
        //   }
        // }
        if (Rank == 'B') {
          var youoption = document.createElement("option");
          youoption.text = dataArr[i].Unit_Name;
          youoption.id = "Phase";
          youoption.name = "Phase";
          youoption.value = dataArr[i].Unit_Name;
          if (youoption.text == obj.PhaseStatus) { youoption.selected = "selected"; }
          $("#Phase").append(youoption);
        }
        if (Rank == 'C') {
          var youoption = document.createElement("option");
          youoption.text = dataArr[i].Unit_Name;
          youoption.id = "Priority";
          youoption.name = "Priority";
          youoption.value = dataArr[i].Unit_Name;
          if (youoption.text == obj.UsePriority) { youoption.selected = "selected"; }
          $("#Priority").append(youoption);
        }
        if (Rank == 'D') {
          var youoption = document.createElement("option");
          youoption.text = dataArr[i].Unit_Name;
          youoption.id = "Assembly";
          youoption.name = "Assembly";
          youoption.value = dataArr[i].Unit_Name;
          if (youoption.text == obj.Assembly) { youoption.selected = "selected"; }
          $("#Assembly").append(youoption);
        }
      }
    },
    error: function () {
    }
  })
}
//类别维护的单位下拉
function getUnitE(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldBasic';
  var arrange = 'UnitE';
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("麒麟喷火", JSON.stringify(data));
      console.log("麒麟喷1火", dataArr[0].Unit_Name);
      $("#NewUnitE").html(""); $("#NewUnitE").val("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Unit_Name;
        youoption.id = "UnitE";
        youoption.name = "UnitE";
        youoption.value = dataArr[i].Unit_CID;
        // if (obj != null) {
        //   if (youoption.value == obj.Unit_C) {
        //     youoption.selected = "selected";
        //     $("#NewUnitE").html(dataArr[i].Unit_Name);
        //     $("#NewUnitE").val(dataArr[i].Unit_CID);
        //     console.log("狗东");
        //     $("#FixDesc").html(dataArr[i].Unit_Name);
        //     $("#FixDesc").val(dataArr[i].Unit_CID);
        //   }
        //   $("#unitE-label").html(dataArr[0].Note); $("#unitE-label").val(dataArr[0].Note);
        // }
        $("#NewUnitE").append(youoption);
      }
      $("#unitE-label").css('visibility', 'visible');
      $("#NewUnitE").css('visibility', 'visible');
    },
    error: function () {
    }
  })
}
//nouse
function getPhase(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldBasic';
  var arrange = 'Phase';
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      console.log("水晶喷火", JSON.stringify(data));
      $("#Phase").html(""); $("#Phase").val("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Unit_Name;
        youoption.id = "Phase";
        youoption.name = "Phase";
        youoption.value = dataArr[i].Unit_Name;
        if (youoption.text == obj.PhaseStatus) { youoption.selected = "selected"; }
        $("#Phase").append(youoption);
      }
    },
    error: function () {
    }
  })
}
//nouse
function getPriority(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldBasic';
  var arrange = 'Priority';
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      console.log("琉璃喷火", JSON.stringify(data));
      $("#Priority").html(""); $("#Priority").val("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Unit_Name;
        youoption.id = "Priority";
        youoption.name = "Priority";
        youoption.value = dataArr[i].Unit_Name;
        if (youoption.text == obj.UsePriority) { youoption.selected = "selected"; }
        $("#Priority").append(youoption);
      }
    },
    error: function () {
    }
  })

}
//nouse
function getAssembly(PartsClass, obj) {
  let dataArr = [];
  var reportType = 'goldBasic';
  var arrange = 'Assembly';
  var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMCode/getRoute",
    success: function (data) {
      dataArr = data;
      console.log("忆江南", JSON.stringify(data));
      $("#Assembly").html(""); $("#Assembly").val("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].Unit_Name;
        youoption.id = "Assembly";
        youoption.name = "Assembly";
        youoption.value = dataArr[i].Unit_Name;
        if (youoption.text == obj.Assembly) { youoption.selected = "selected"; }
        $("#Assembly").append(youoption);
      }
    },
    error: function () {
    }
  })

}