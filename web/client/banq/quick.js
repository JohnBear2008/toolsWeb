var product =  ["Enum","1","2052","0","枚举资料列表","Encode","iphone6Plus", "mx3", "mx4", "mi3", "mi4", "minote" ,"插件" ,"插件电位器",  "插件精密" ,"插件精密電阻","插件精密金属膜","插件绕线电阻","贴片厚膜电阻"];
var productm = [ "mx3", "mx4", "mi3", "mi4", "minote","mcool", "mcutte" ];
var productb = [ "bmx3", "bmx4", "bmi3", "bmi4", "bminote","bcool", "bcutte" ];
var producta = [ "ax3", "ax4", "ai3", "ai4", "ainote","aool", "autte" ];
var productc = [ "cax3", "cax4", "cai3", "cai4", "cainote","caool", "cautte" ];
var productd = [ "dax3", "dax4", "dai3", "dai4", "dainote","daool", "dautte"]; 
var product0 = [ "" ]; 
var prodfeng = [ "风冷"];
var prodgu11 = [ "固定座","固定電阻"];
var prodstar = [ "星型-明腾"];
var prodnei1 = [ "内齿轮泵"];
var prodlui1 = [ "铝壳"];
var prodiron = [ "铸铁"];
var prodcont = [ "电控箱"];
var prodgui1 = [ "能源柜"];
var proddriv = [ "驱动器","驱动板"];
var prodstad = [ "标准型"];
var prodcapa = [ "贴片瓷片电容","贴片厚膜电阻"];
var prodoutp = [ "輸出板" ,"輸入"];
var prodpush = [ "按鍵板"];
var prodmold = [ "模溫卡"];
var prodwarm = [ "溫控板","溫度測試版"];
var prodresi = [ "壓敏電阻" ,"可變電阻"];
function autoThink() { 
      var productArry = product;
      var showArry = [];
      $("#mainname").keyup(function () {
          showArry.splice(0, showArry.length); //清空数组 
          var searchVal = $(this).val();
          let point =searchVal.substr(0,1);

 
          productArry = getopt(point );
          for (var i = 0; i < productArry.length ; i++) {
              if (productArry[i].match(searchVal)) {
                  showArry.push(productArry[i]);
              }
          }
          var innerhtml = "";
          innerhtml += "<ul style='list-style:none';font-size:13px>";
          for (var j = 0; j < showArry.length; j++) {
              innerhtml += "<li class='attchColor' onclick='getLi(this)' style=' cursor:pointer;'> " + showArry[j] + "</li>";
          }
          innerhtml += "</ul>"; 
          $("#autoLi").html(innerhtml);
          $("#autoLi").css("display", "block"); 
          $("#autoLi").css('visibility', 'visible');
      })
  }
  function hintThink() { 
    var productArry = product;
    var showArry = [];
    $("#mainprop").keyup(function () {
        showArry.splice(0, showArry.length); //清空数组 
        var searchVal = $(this).val();
        let point =searchVal.substr(0,1);


        productArry = getopt(point );
        for (var i = 0; i < productArry.length ; i++) {
            if (productArry[i].match(searchVal)) {
                showArry.push(productArry[i]);
            }
        }
        var innerhtml = "";
        innerhtml += "<ul style='list-style:none';font-size:13px>";
        for (var j = 0; j < showArry.length; j++) {
            innerhtml += "<li class='attchColor' onclick='gethintLi(this)' style=' cursor:pointer;'> " + showArry[j] + "</li>";
        }
        innerhtml += "</ul>"; 
        $("#hintLi").html(innerhtml);
        $("#hintLi").css("display", "block"); 
        $("#hintLi").css('visibility', 'visible');
    })
}
function oldpcThink() { 
    var productArry = product;
    var showArry = [];
    $("#mainpast").keyup(function () {
        showArry.splice(0, showArry.length); //清空数组 
        var searchVal = $(this).val();
        let point =searchVal.substr(0,1);


        productArry = getopt(point );
        for (var i = 0; i < productArry.length ; i++) {
            if (productArry[i].match(searchVal)) {
                showArry.push(productArry[i]);
            }
        }
        var innerhtml = "";
        innerhtml += "<ul style='list-style:none';font-size:13px>";
        for (var j = 0; j < showArry.length; j++) {
            innerhtml += "<li class='attchColor' onclick='getoldLi(this)' style=' cursor:pointer;'> " + showArry[j] + "</li>";
        }
        innerhtml += "</ul>"; 
        $("#oldLi").html(innerhtml);
        $("#oldLi").css("display", "block"); 
        $("#oldLi").css('visibility', 'visible');
    })
}

      $(function () {
        oldpcThink();
        autoThink();
        hintThink();
    })
 
    function getopt(point ) {
        if(point=='风'){
            productArry =prodfeng;
            console.log("风",prodfeng);
        }else
        if(point=='固'){
            productArry =prodgu11;
            console.log("固",prodgu11);
        }else
        if(point=='星'){
            productArry =prodstar;
            console.log("星",prodstar);
        }else
        if(point=='内'){
            productArry =prodnei1;
            console.log("内",prodnei1);
        }else
        if(point=='铝'){
            productArry =prodlui1;
            console.log("铝",prodlui1);
        }else
        if(point=='铸'){
            productArry =prodiron;
            console.log("铸",prodiron);
        }else
        if(point=='电'){
            productArry =prodcont;
            console.log("电",prodcont);
        }else
        if(point=='能'){
            productArry =prodgui1;
            console.log("能",prodgui1);
        }else
        if(point=='驱'){
            productArry =proddriv;
            console.log("驱",proddriv);
        }else
        if(point=='标'){
            productArry =prodstad;
            console.log("标",prodstad);
        }else
        if(point=='贴'){
            productArry =prodcapa;
            console.log("贴",prodcapa);
        }else
        if(point=='輸'){
            productArry =prodoutp;
            console.log("輸",prodoutp);
        }else
        if(point=='按'){
            productArry =prodpush;
            console.log("按",prodpush);
        }else
        if(point=='模'){
            productArry =prodmold;
            console.log("模",prodmold);
        }else
        if(point=='溫'){
            productArry =prodwarm;
            console.log("溫",prodwarm);
        }else
        if(point=='壓'){
            productArry =prodresi;
            console.log("壓",prodresi);
        }else
        if(point=='a'){
            productArry =prodfeng;
            console.log("眼",prodfeng);
        }else
        if(point=='b'){
            productArry =productb;
            console.log("眼m",productb);
        }else
        if(point=='c'){
            productArry =productc;
            console.log("眼c",productc);
        }else
        if(point=='d'){
            productArry =productd;
            console.log("眼d",productd);
        }else
        if(point=='m'){
            productArry =productm;
            console.log("眼m",productm);
        }else
        if(point=='x'){
            productArry =productx;
            console.log("眼x",productx);
        }
        else{
            productArry =product0;
            console.log("有眼",product0);
        }
        return productArry;
    }

    function getoldLi(obj) {
        $("#mainpast").val(obj.innerHTML); 
    }
    function getLi(obj) {
        $("#mainname").val(obj.innerHTML); 
    }
    function gethintLi(obj) {
        $("#mainprop").val(obj.innerHTML); 
    }