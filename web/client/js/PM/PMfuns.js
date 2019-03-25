

//定义语言包--------------------------

var languageCN={
        "url": "dataTables.german.lang",
        "sProcessing":   "处理中...",
        "sLengthMenu":   "显示 _MENU_ 项结果",
        "sZeroRecords":  "没有匹配结果",
        "sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix":  "",
        "sSearch":       "搜索:",
        "sUrl":          "",
        "sEmptyTable":     "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands":  ",",
        "oPaginate": {
            "sFirst":    "首页",
            "sPrevious": "上页",
            "sNext":     "下页",
            "sLast":     "末页"
        },
        "oAria": {
            "sSortAscending":  ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
       }


//定义表格加载数据函数----------

function showDBData(DataPara,columnsData){
	
 //alert(JSON.stringify(DataPara));
	$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getDBInfo',
	        data:{DBTable:DataPara.DBTable},
	        dataSrc: ''
	    },
	    columns: columnsData,
	    aaSorting: [0, 'desc'],//默认排序
//	    serverSide: false,//分页，取数据等等的都放到服务端去. true为后台分页，每次点击分页时会请求后台数据，false为前台分页
//   		dom: 'Bfrtip',
//    	buttons: [ {
//        	extend: 'excelHtml5',
//        	text:'导出数据',
//        	   customize: function( xlsx ) {
//            	var sheet = xlsx.xl.worksheets['sheet1.xml'];
//            	$('row c[r^="C"]', sheet).attr( 's', '2' );
//        	}
//    	} ],

	    "language": languageCN
	    
	});

}



//AJAX新增数据库数据函数-----------
function addDBData(DBData) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/addDBData',
        data: DBData,
        success: function(data) {
  //         alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               alert("新增数据成功!");
              window.location.reload();
           }
       },
       error:function(err){
       	alert("失败数据:"+JSON.stringify(err));
       }
    });
}

//AJAX更新数据库数据函数
function updDBData(DBData,showText) {
    $.ajax({
        method: 'post',
        url: '/app/PM/updDBData',
        data: DBData,
        success: function(data, textStatus) {
 //                alert("成功数据:"+JSON.stringify(data));
            if (data.changedRows != 0) {
                alert(showText+"更新数据成功!");
               window.location.reload();
            } else {
                alert(showText+"未有数据更新!");
                window.location.reload();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
    });
}




//AJAX删除数据库数据函数
function delDBData(IDData) {
    $.ajax({
        method: 'post',
        url: '/app/PM/delDBData',
        data: IDData,
        success: function(data, textStatus) {
            //  alert("成功数据:"+JSON.stringify(data));
            if (data.affectedRows != 0) {
                alert("删除数据成功!");
                window.location.reload();
            } else {
                alert("删除数据失败!");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
    });
}

//AJAX保存数据至数据库数据函数-----------
function saveDBData(DBData,showText) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/saveDBData',
        data: DBData,
        success: function(data) {
  //         alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               alert(showText+"数据保存成功!");
              window.location.reload();
           }
       },
       error:function(err){
    	   alert(showText+"数据保存失败!");
    	   window.location.reload();
       }
    });
}

//AJAX获取select数据函数
function getSelectDBData(selectPara,selectorID,InitValue) {
	
//	console.log("InitValue:"+InitValue);
	
	$(selectorID).empty();//用select组件不用先清空
	  
	  $.ajax({
          method:'get',
          data:selectPara,
          url:"/app/PM/getSelectDBData",
          success:function(data){
        	  
        	  //alert("return1111:"+JSON.stringify(data));
        	  
        	  
        		$(selectorID).selectpicker({
        			noneSelectedText :"未选择"//默认显示内容
        		});
        		
        		if(InitValue==undefined){
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i][selectPara.selectTitle]+'</option>'));
                 	  }
           		 $(selectorID).selectpicker('val','');

        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i][selectPara.selectTitle]+'</option>'));
                     	  if(data[i][selectPara.selectTitle]==InitValue){
                     		  $(selectorID).selectpicker('val',data[i].DBID);//留空不设置默认选项
                     	  }
                     }
        		}

              $(selectorID).selectpicker('refresh');

              
          },
          error:function(){}
      })
}

//函数 获取指定SQL数据加载至selector中
function Fun_getSQLSelectDBData(selectSQL,selectorID,InitValue) {
	
//	console.log("InitValue:"+InitValue);
	
	$(selectorID).empty();//用select组件不用先清空
	  
	  $.ajax({
          method:'get',
          data:selectSQL,
          url:"/app/PM/getSQLDBData",
          success:function(data){
        	  
        //	  alert("return1111:"+JSON.stringify(data));
        	  
        	  
        		$(selectorID).selectpicker({
        			noneSelectedText :"未选择"//默认显示内容
        		});
        		
        		if(InitValue==undefined||InitValue==""){
        			
//        			console.log("InitValue11:"+InitValue);
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                 	  }
           		 $(selectorID).selectpicker('val','');

        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                     	  if(Fun_getSelectText(data[i].selectTitle)==InitValue){
                     		  $(selectorID).selectpicker('val',data[i].DBID);//留空不设置默认选项
                     	  }
                     }
        		}

              $(selectorID).selectpicker('refresh');

              
          },
          error:function(){}
      })
}



//----文件上传功能代码----------------------------------------------
function fileSelected() {
	

		var files = document.getElementById('fileToUpload').files;
		

		var div = document.getElementById('div_previewImages');
		
		document.getElementById('div_previewImages').innerHTML="已选择文件!";
		
		for ( var i = 0; i < files.length; i++) {
			
			//缩略图预览
//			var img = document.createElement("img");
//			div.appendChild(img);
//			
//			var reader = new FileReader();
//			(function(img) {
//				reader.onload = function(evt) {
//					img.width=50;//定义缩略图宽度
//					img.src = evt.target.result;
//				}
//			})(img);
			

			reader.readAsDataURL(files[i]);
			/* else if (files.value) {
				img.src = files.value; }*/
		}

	
	
	
	
}

function uploadFile() {
	

	var filePath=$('#filePath').attr("href");
	
	var fileName=$('#fileName').html();
//	console.log("fileName:"+fileName);
	
	if(fileName!=undefined&&fileName!=""){
		
		alert("附件已存在,上传新附件请先清空!");
		
	}else{
	
	var fd = new FormData();
	var files = document.getElementById('fileToUpload').files;
	
	if(files.length>1){
		alert("多文件上传请统一打包成唯一压缩包!");
		document.getElementById('div_previewImages').innerHTML="";
		
	}else{
        for ( var i = 0; i < files.length; i++) {
			
//			alert("files[i]:"+JSON.stringify(files[i]));
			fd.append(i, files[i]);
			
		}
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", uploadProgress, false);
		xhr.addEventListener("load", uploadComplete, false);
		xhr.addEventListener("error", uploadFailed, false);
		xhr.addEventListener("abort", uploadCanceled, false);
		xhr.open("POST", "/system.files.upload/");
		xhr.send(fd);
		
	}
	
	}
	
}

function uploadProgress(evt) {
	if (evt.lengthComputable) {
		var percentComplete = Math.round(evt.loaded * 100 / evt.total);
		var span = document.createElement("span");
		span.innerHTML = percentComplete.toString() + '% - ';
	//	document.getElementById('progressNumber').appendChild(span);//优化进度显示模式
		document.getElementById('progressNumber').innerHTML="上传进度:"+percentComplete+'%';
	} else {
		document.getElementById('progressNumber').innerHTML =
			'unable to compute';
	}
}

var g_uploaded = null;

function uploadComplete(evt) {
	if (evt.target.status != 200) {
//		alert(evt.target.responseText);
		return;
	}
	/* 服务器端返回响应时候触发event事件*/
	//var img=document.getElementById('img_show');
	var div = document.getElementById('divFilesUploaded');
//	alert(evt.target.responseText);
	g_uploaded = JSON.parse(evt.target.responseText);
	//alert(obj[0].key);
	var span = document.createElement("span");
//	span.innerHTML = JSON.stringify(g_uploaded.fields);
	div.appendChild(span);
//	div.appendChild(document.createElement("br"));
	for ( var name in g_uploaded.files) {
		var file=g_uploaded.files[name];
		
//		alert("g_uploaded.files[name]:"+JSON.stringify(g_uploaded.files[name]));
		
	
		for (var i=0;i<file.length;i++){
			if (file[i].status == "success") {
				
//				alert("file[i]:"+JSON.stringify(file[i]));

				
				var span = document.createElement("span");
				var url = "/system.files.download/" + file[i].key;
//				var url = "/system.files.download/" + file[i].fileRawName;
				
				
				span.innerHTML = url;

				div.appendChild(span);
				div.appendChild(document.createElement("br"));
//				var img = document.createElement("img");
//				img.src = url;
//				div.appendChild(img);
				var downloadurl="<a id='filePath' href="+url+" download="+file[i].fileRawName+">"+"<span id='fileName'>"+file[i].fileRawName+"</span></a>";
				span.innerHTML =downloadurl;
				div.appendChild(document.createElement("br"));
			} else {
				alert(file[i].errorMessage);
			}
		}
	}
}

function uploadFailed(evt) {
	alert("There was an error attempting to upload the file.");
}

function uploadCanceled(evt) {
	alert("The upload has been canceled by the user or the browser dropped the connection.");
}

function deleteFile() {
	
//	var filePath=$('#filePath').attr("href");
//	alert(filePath);
	
	var files=[];
	
	$('#divFilesUploaded a').each(function(){
		var fileKey=$(this).attr('href').substring(30);
		var fileName=$(this).attr('download');
		
		var fileInfo={
				"fileName":fileName,
				"fileKey":fileKey
		}
		
		files.push(fileInfo);
	});
	
	if(files.length>0){
		
		var xhr = new XMLHttpRequest();
		
		for(var i=0;i<files.length;i++){
			var fileKey=files[i].fileKey;
			var filePath="upload_"+fileKey;
			xhr.open("delete", "/system.files/"+ filePath);
			xhr.send();
		}
		
		document.getElementById('div_previewImages').innerHTML="";
		document.getElementById('progressNumber').innerHTML="";
		document.getElementById('divFilesUploaded').innerHTML="";
		alert("清空附件成功!");
		
	}else{
		alert("无附件,无需清空!");
	}
	
	
	
//	if(filePath!=undefined){
//		var fileKey=$('#filePath').attr("href").substring(23);
////		alert(fileKey);
//		var xhr = new XMLHttpRequest();
//		xhr.open("delete", "/system.files/"+ fileKey);
//		xhr.send();
//		
//		alert("删除附件成功");
//		
//		document.getElementById('div_previewImages').innerHTML="";
//		document.getElementById('progressNumber').innerHTML="";
//		document.getElementById('divFilesUploaded').innerHTML="";
////		document.getElementById('fileName').innerHTML="";
//		
//	}else{
//		alert("无附件,无需清空!");
//	}

	
//	if(fileKey){
//		
//	}
//	

//	
	
	
// 原删除程序-----------
////alert(JSON.stringify(g_uploaded.files));
//	for ( var name in g_uploaded.files) {
////		var xhr = new XMLHttpRequest();
//		
////		alert(JSON.stringify(g_uploaded.files[0][0].key));
//
//		xhr.open("delete", "/system.files/"
//			+ g_uploaded.files[name][0].key);//修改成自己的接口
//		xhr.send();
//		
//	}
//	
//	document.getElementById('div_previewImages').innerHTML="";
//	document.getElementById('progressNumber').innerHTML="";
//	document.getElementById('divFilesUploaded').innerHTML="";
	
	
}
//---------------------------------------

//定义订单表格加载数据函数----------

function showOrdersDBData(DataPara,columnsData){
	
//alert(JSON.stringify(DataPara));
	
	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
	
	
	var dataTable=$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getOrdersDBInfo',
	        data:DataPara,
	        dataSrc: ''
	    },
	    columns: columnsData,
	    aaSorting: [0, 'desc'],//默认排序
	    lengthMenu:[10,20,50,100],


	    "language": languageCN
	});
	
	
//	var TableData=dataTable.$("input").serialize();
//	
//	alert("TableData:"+JSON.stringify(TableData));

}



//定义待过滤调节表格加载函数

function showFilterDBData(DataPara,columnsData){
	
//alert(JSON.stringify(DataPara));
	
	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
	
	
	$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getFilterDBInfo',
	        data:DataPara,
	        dataSrc: ''
	    },
	    columns: columnsData,
	    aaSorting: [0, 'desc'],//默认排序
	    lengthMenu:[5,10,20],


	    "language": languageCN
	});

}

//函数 获取数据库信息 带过滤器

function Fun_getFilterDBData(DataPara,DivID){
	
//alert(JSON.stringify(DataPara));
	
	$.ajax({
	      type: "get",      //data 传送数据类型。post 传递
	      dataType: 'json',  // 返回数据的数据类型json
	      url: '/app/PM/getFilterDBInfo',  // yii 控制器/方法
	      cache: false,      
	      data: DataPara,  //传送的数据
	      error:function(){
	         alert("数据传输错误");
	      },
	      success: function (data) {
//	    	  alert("成功返回数据:"+JSON.stringify(data));
	    	  
//	    	  console.log("成功返回数据:"+JSON.stringify(data[0]));
	    	  
	    	  for(var key in DivID){
//	    		  console.log(key +":"+ DivID[key]);
	    		  
	    		  for(var dkey in data[0]){
	    			  
	    			  if(key==dkey){
	    				  $(DivID[key]).html(data[0][dkey]);
	    			  }
	    		  }

	    	  }
	    	  
	    	  
	    	  
//	    	  $(DivID).html(JSON.stringify(data));
	    	  
//	         if(window.console){
//	            console.log(data);
//	         }
	         
//	         return data;
	      }
	})   

}



//发送邮件函数-----------------------

function ajaxMail(data) {
    $.ajax({
        method: 'post',
        url: '/app/PM/sendMail',
        data: data,
        success: function(data, textStatus) {
              alert("发送成功:"+JSON.stringify(textStatus));


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        	
        	 alert("发送失败:"+JSON.stringify(textStatus));
        }
    });
}


//发送钉钉消息-----------
function sendDingMsg(Msg) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/sendDingTalk',
        data: Msg,
        success: function(data, textStatus) {
 //           console.log("成功数据:" + JSON.stringify(data));
           
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            
        }
    });
}

//函数 获取绑定数据----------------------
function F_getBindDBData(choData){
	//alert("choData:"+JSON.stringify(choData));
	
	 $.ajax({
	        method: 'get',
	        url: '/app/PM/getBindDBData',
	        data: choData,
	        success: function(data) {
	            alert("成功数据:" + JSON.stringify(data));
	        },
	        error: function(err) {
	        	alert("失败数据:"+JSON.stringify(err));   
	        }
	    });

}

//定义日期格式------------
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


//获取格式化当前日期-----------
function Fun_curentTime()
    { 
        var now = new Date();
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日   
        var clock = year + "-";
         if(month < 10)
            clock += "0";
        clock += month + "-";
        if(day < 10)
           clock += "0";
        clock += day + "";
        return clock; 
    }

Ndate=Fun_curentTime();

//函数-获取当前日期指定天数日期

function Fun_getEndDate(date, days) {	
	var oldDate=new Date(date);
	var milliseconds=oldDate.getTime()+1000*60*60*24*days;
	var newDate= new Date(milliseconds).Format("yyyy-MM-dd");
	return newDate;

}

//函数-根据自定义SQL获取数据加载表格


function Fun_showSQLTable(SQL,tableInfo){
	
	//alert(JSON.stringify(DataPara));
		
		$(tableInfo.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
		
		$(tableInfo.tableID).DataTable({
		    ajax: {
		        url: '/app/PM/getSQLDBData',
		        data:SQL,
		        dataSrc: ''
		    },
		    columns: tableInfo.columnsData,
		    aaSorting: [0, 'desc'],//默认排序
		    lengthMenu:[10,30,50],
		    "language": languageCN
		});

	}






//函数-添加附件信息数据库

function Fun_addFileInfo(DBData) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/addDBData',
        data: DBData,
        success: function(data) {
//            alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               alert("附件添加绑定成功!");
//               window.location.reload();
           }
       },
       error:function(err){
       	alert("失败数据:"+JSON.stringify(err));
       }
    });
}

//函数-更新附件信息数据库

function Fun_updFileInfo(DBData) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/updDBData',
        data: DBData,
        success: function(data) {
//            alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               alert("更新附件绑定成功!");
//             window.location.reload();
           }
       },
       error:function(err){
       	alert("失败数据:"+JSON.stringify(err));
       }
    });
}

//函数 截取selector选择内容
function Fun_getSelectText(obj){

    var index=obj.lastIndexOf("\-");
    obj=obj.substring(index+1,obj.length);
//  console.log(obj);
    return obj;
}


////函数-获取附件信息数据库
//
//function Fun_getfileInfo(fileSQL) {
//	
//    $.ajax({
//        method: 'get',
//        url: '/app/PM/getSQLDBData',
//        data: {SQL:fileSQL},
//        success: function(data) {
//            alert("成功数据:" + JSON.stringify(data));
//           if (data.affectedRows != 0) {
//
////               window.location.reload();
//           }
//       },
//       error:function(err){
//       	alert("失败数据:"+JSON.stringify(err));
//       }
//    });
//}

//函数-增加数据并发送钉钉消息
function Fun_addDBDataDD(DBData,DDMsg,showText) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/addDBData',
        data: DBData,
        success: function(data) {
//            alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               alert(showText+"新增成功!");
               if(DDMsg!=""){
            	   sendDingMsg(DDMsg);
               }
              window.location.reload();
           }
       },
       error:function(err){
       	alert("失败数据:"+JSON.stringify(err));
       }
    });
}

//函数-更新数据并发送钉钉消息
function Fun_updDBDataDD(DBData,DDMsg,showText) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/updDBData',
        data: DBData,
        success: function(data) {
//            alert("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
        	   alert(showText+"更新数据成功!");
               if(DDMsg!=""){
            	   sendDingMsg(DDMsg);
               }
              window.location.reload();
           }else{
        	   alert(showText+"未有数据更新!");
        	   window.location.reload();
           }
       },
       error:function(err){
       	alert("失败数据:"+JSON.stringify(err));
       }
    });
}


//函数:加载附件信息
function Fun_getBillFile(Para,DivID,feedBack){
/*
 * para格式
 * 
 * Para={"billName":*,"billID":*,"billVersion":*}
 * 
 * DivID="#divFilesUploaded";
 * 
 * feedBack=true or false;
 * 
 * 
 * */	
	
	
	
	//清空默认div内容,防止残留
	 $("#div_previewImages").html("");
	 $("#progressNumber").html("");
	 $("#divFilesUploaded").html("");

	  $(DivID).html("");
	  
	  
	  $.ajax({
          method:'get',
          data:Para,
          url:"/app/PM/getBillFileInfo",
          success:function(dataReturn){
        	  
  //      	  console.log("dataReturn:"+JSON.stringify(dataReturn));
        	  
        	  if(dataReturn.length!=0){
        		  
        		  if(dataReturn[0].fileKey!=null){
 //           		  console.log("不为空"+dataReturn[0].fileKey);
            		  
            		  if(feedBack==true){
            			  var downloadurl="<a id='filePath' href="+'/system.files.download/upload_'+dataReturn[0].fileKey+" download="+dataReturn[0].fileName+">"+"<span id='fileName'>"+dataReturn[0].fileName+"</span></a>";
            			  $("#fileDBID").html(dataReturn[0].DBID);
            		  }else{
            			  var downloadurl="<a href="+'/system.files.download/upload_'+dataReturn[0].fileKey+" download="+dataReturn[0].fileName+">"+"<span>"+dataReturn[0].fileName+"</span></a>";
            		  }
            		
            		  $(DivID).html(downloadurl);
            		  
            		  }
        		  
        	  }
        	  
        	  
        	  
        	  
          },
          error:function(){}
      })

}


////AJAX+ 新增数据库数据函数- 添加回调返回结果功能更 ---------
//function CB_addDBData(DBData,callback) {
//	
//	
//	
//    $.ajax({
//        method: 'post',
//        url: '/app/PM/addDBData',
//        data: DBData,
//        success: function(data) {
////            alert("成功数据:" + JSON.stringify(data));
//           if (data.affectedRows != 0) {
//               alert("新增数据成功!");
//               
//               callback(data){
//            	   return data
//               }
////               window.location.reload();
//               
//               
//           }
//       },
//       error:function(err){
//       	alert("失败数据:"+JSON.stringify(err));
//       }
//    });
//    
//    
//    return data;
//}
//
//
//var getdata=CB_addDBData();

//函数 获取checkbox值
function getCheckBoxValue(CBName){
	var test = $("input[name='"+CBName+"']:checked");
	var checkBoxValue = ""; 
	test.each(function(){
		checkBoxValue += $(this).val()+",";
	})
	checkBoxValue = checkBoxValue.substring(0,checkBoxValue.length-1);
//	console.log("checkBoxValue:"+checkBoxValue);
	return checkBoxValue;
}
//函数 设定根据值设定checkbox选中状态
function setCheckBoxValue(CBName,CBVals){

	var checkBox = CBVals;
	
	if(CBVals!=null){
		var checkBoxArray = checkBox.split(",");
		for(var i=0;i<checkBoxArray.length;i++){
			$("input[name='"+CBName+"']").each(function(){
				if($(this).val()==checkBoxArray[i]){
					
//					console.log("thisval:"+$(this).val());
//					console.log("checkBoxArray:"+checkBoxArray[i]);
//					console.log("this:"+JSON.stringify(this));
					
					$(this).prop('checked', true);
				}
			})
		}
		
	}

}

//函数:生成跟踪表格函数

/*
 * tableID="#tableTrackPLD"

 * SQLParam={"tableName":"ppm_bills_plan","titles":["BPID","CTRName"],"BID":"BPID","VER":"version","filter":"BPID='P12132131'"};
 * BID:为分组单号,VER:为版本标识
 * */


function Fun_fillTrackTable(tableID,SQLParam){

	
	 $(tableID +" thead").html("");
	 $(tableID +" tbody").html("");
	
	 $.ajax({
         method:'get',
         data:SQLParam,
         url:"/app/PM/getTableTitles",
         success:function(data){
       	  
       	  if(data.length!=0){
       		  var trth="<tr>"
       		  for(var i=0;i<data.length;i++){
       			trth=trth+"<th>"+data[i].titleName+"</th>";
       		  }
       		trth=trth+"</tr>";
       	  }

       	  $(tableID+" thead").append(trth);   
         },
         error:function(){}
     });
     
     $.ajax({
         method:'get',
         data:SQLParam,
         url:"/app/PM/getTableDatas",
         success:function(data){

       	  if(data.length!=0){

       		  for(var i=0;i<data.length;i++){
       			  
       			 var trtd="<tr>";

       		  for(var j=0;j<SQLParam.titles.length;j++){

    //  			  console.log("SQLParam.titles[j]:"+SQLParam.titles[j]);
       			  
       			  if(SQLParam.titles[j]=="files"||SQLParam.titles[j]=="taskFiles"){
       				  
       				  
       				  var files=JSON.parse(data[i][SQLParam.titles[j]]);
       				  
       				 console.log("files:"+files);
       				 
       				 if(files!=null){
       					 
       					 var fileLink="";
       					 if(files.length>0){
       						 for(var k=0;k<files.length;k++){
       							 console.log("files[k].fileName:"+files[k].fileName);
       							 
       							fileLink=fileLink+"<a  href="+'/system.files.download/upload_'+files[k].fileKey+" download="+files[k].fileName+">"+"<span>"+files[k].fileName+"</span></a>"+" ; ";
       						 }
       						fileLink=fileLink.substr(0, fileLink.length-3); 
       					 }
       					 
       					trtd=trtd+"<td>"+fileLink+"</td>";
       				 }else{
       					trtd=trtd+"<td></td>";
       				 }

       			  }else{
       				trtd=trtd+"<td>"+data[i][SQLParam.titles[j]]+"</td>";
       			  }

       		  }
       			  trtd=trtd+"</tr>";
       			 $(tableID+" tbody").append(trtd);   
       		  }

       	  }

 
         },
         error:function(){}
     });

}


//函数-根据自定义SQL获取数据加载Task表格,不显示搜索分页,简易模式


function Fun_showSQLTestContentsTable(SQL,tableID,TestResult,auditCheck){
	
	//alert(JSON.stringify(DataPara));
	 $(tableID+" tbody").html("");
	
	 $.ajax({
         method:'get',
         data:SQL,
         url:"/app/PM/getSQLDBData",
         success:function(data){
//        	 console.log("back data:"+JSON.stringify(data));
        	 for(var i=0;i<data.length;i++){
        		 var tr="<tr>" +
        		        "<td style='display:none' id='testContentDBID"+i+"'>"+data[i].DBID+"</td>" +
        		        "<td>"+data[i].modelType+"</td>" +
        		 		"<td>"+data[i].content+"</td>" +
        		 		"<td><input type='radio' name='testResultRadio"+i+"'  value='1' checked><span>正确</span> <input type='radio' name='testResultRadio"+i+"' value='2'> <span>不正确</span></td>"+
        		 		"<td><input id='testRemark"+i+"' type='text' value='' style='width:100%'></td>"+
        		 		"</tr>";
        		 
        		 $(tableID+" tbody").append(tr);
        		 
        	 }
        	 
        	 if(TestResult!=null){
        		 
        		 for(var i=0;i<TestResult.length;i++){
//          		  alert(TestResult[i].testResult);
          		  $("input:radio[name='testResultRadio"+i+"'][value="+TestResult[i].testResult+"]").prop("checked",true); 
          		  $("#testRemark"+i).val(TestResult[i].testRemark);
                }
        		 
        		 if(auditCheck==1||auditCheck==2){
        			 $('input').attr("disabled",true);
        		 }
        		 
        	 }
        	 
             console.log("tableID:"+tableID.substr(1));


   		 
//   		 $(tableID+" tbody").rowspan(0);
//   		 $(tableID).rowspan(1);
//   		 $(tableID).rowspan(2);
        	 


         },
         error:function(){}
     })

}


// 相同列合并插件//封装的一个JQuery小插件
 jQuery.fn.rowspan = function(colIdx) { 
	        return this.each(function(){
	           var that;
	           $('tr', this).each(function(row) {
	              $('td:eq('+colIdx+')', this).filter(':visible').each(function(col) {
	                 if (that!=null && $(this).html() == $(that).html()) {
	                    rowspan = $(that).attr("rowSpan");
	                    if (rowspan == undefined) {
	                       $(that).attr("rowSpan",1);
	                       rowspan = $(that).attr("rowSpan"); }
	                    rowspan = Number(rowspan)+1;
	                    $(that).attr("rowSpan",rowspan);
	                    $(that).css("vertical-align","middle");
	                    $(this).hide();
	                 } else {
	                    that = this;
	                 }
	              });
	           });
	        });
}


//获取浏览器url传入参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
    }


//识别字段中的所有电子邮件,以","分开

function getEmails($){
	 var _=/[\w\.\+-]+@[\w\.\+-]+/g;
	 var s= $.match(_).toString();//先转换为字符串 不然会报 .replace is not a function错误
	 s=s.replace(/\n/g,",");
     return s;
}
