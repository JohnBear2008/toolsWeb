function LayRForm() { 
      $("#classSupp").html("制造商" );
      $("#classSupp").val("制造商"); 
      // $("#tankerName").css('visibility', 'hidden');
      // $("#tankerName").removeClass("can-drop");
      //  $("#tankerName").addClass("can-mini");  //占一小空间但可回复
      $("#tankerName").css('display', 'none');   //不占空间但无法回复！
}

function showEFForm() { 
      // $("#mainbeef-label").css('visibility', 'visible');
      // $("#mainbeef-label").html("属性EF"); 
      $("#beef").css('visibility', 'visible');
      $("#beef").removeClass("can-mini"); $("#beef").addClass("can-drop");
}

function hideEFForm() { 
      // $("#mainbeef-label").css('visibility', 'hidden');
      // $("#mainbeef-label").html(""); 
      $("#beef").val("00"); 
      // $("#beef").css('visibility', 'hidden');
      // $("#beef").removeClass("can-drop"); $("#beef").addClass("can-mini");
}