 
function getBillpull() {
      var youoption = document.createElement("option");
      youoption.id = "Pattern";
      youoption.name = "Pattern";
      youoption.text = "新品审批";
      youoption.value = "1";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "报废记录";
      youoption.value = "2";
      $("#Pattern").append(youoption);
}