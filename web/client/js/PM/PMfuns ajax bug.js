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
        success: function(data, textStatus) {
             alert("成功数据:" + JSON.stringify(data));
            if (data.affectedRows != 0) {
                alert("新增数据成功!");
//                window.location.reload();
            }
        },
        
        error:function(err){
        	alert("失败数据:"+JSON.stringify(err));
        }
//        error: function(err, textStatus, errorThrown) {
//        
//        	alert("失败数据:"+JSON.stringify(err));
////            alert('新增失败！失败原因：相同内容的数据已存在，请以更新的方式更新此数据！');
//        }
    });
}

//AJAX更新数据库数据函数
function updDBData(DBData) {
    $.ajax({
        method: 'post',
        url: '/app/PM/updDBData',
        data: DBData,
        success: function(data, textStatus) {
 //                alert("成功数据:"+JSON.stringify(data));
            if (data.changedRows != 0) {
                alert("更新数据成功!");
                window.location.reload();
            } else {
                alert("未有数据更新!");
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



//AJAX获取select数据函数
function getSelectDBData(selectPara,selectorID) {
	
	$(selectorID).empty();//用select组件不用先清空
	  
	  $.ajax({
          method:'get',
          data:selectPara,
          url:"/app/PM/getSelectDBData",
          success:function(data){
        	  
        	  //alert("return1111:"+JSON.stringify(data));
        	  
        	  
        		$(selectorID).selectpicker({
        			noneSelectedText : '请选择'//默认显示内容
   
        		});
        	  
//          	 $(selectorID).append($('<option value='+""+'>'+"请选择客户"+'</option>'));
              for(i=0;i<data.length;i++)
          	{
              	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i][selectPara.selectTitle]+'</option>'));	
              	   
          	}
              
              $(selectorID).selectpicker('val', '');//留空不设置默认选项
              $(selectorID).selectpicker('refresh');

              
          },
          error:function(){}
      })
}

//----文件上传功能代码----------------------------------------------
function fileSelected() {
	var files = document.getElementById('fileToUpload').files;
	

	var div = document.getElementById('div_previewImages');
	for ( var i = 0; i < files.length; i++) {
		var img = document.createElement("img");
		div.appendChild(img);
		
		var reader = new FileReader();
		(function(img) {
			reader.onload = function(evt) {
				img.width=50;//定义缩略图宽度
				img.src = evt.target.result;
			}
		})(img);
		

		reader.readAsDataURL(files[i]);
		/* else if (files.value) {
			img.src = files.value; }*/
	}
}
function uploadFile() {
	var fd = new FormData();
	var files = document.getElementById('fileToUpload').files;
	
	for ( var i = 0; i < files.length; i++) {
		
		alert("files[i]:"+JSON.stringify(files[i]));
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
function uploadProgress(evt) {
	if (evt.lengthComputable) {
		var percentComplete = Math.round(evt.loaded * 100 / evt.total);
		var span = document.createElement("span");
		span.innerHTML = percentComplete.toString() + '% - ';
	//	document.getElementById('progressNumber').appendChild(span);//优化进度显示模式
		document.getElementById('progressNumber').innerHTML=percentComplete+'%';
	} else {
		document.getElementById('progressNumber').innerHTML =
			'unable to compute';
	}
}

var g_uploaded = null;

function uploadComplete(evt) {
	if (evt.target.status != 200) {
		alert(evt.target.responseText);
		return;
	}
	/* 服务器端返回响应时候触发event事件*/
	//var img=document.getElementById('img_show');
	var div = document.getElementById('div_images');
	alert(evt.target.responseText);
	g_uploaded = JSON.parse(evt.target.responseText);
	//alert(obj[0].key);
	var span = document.createElement("span");
//	span.innerHTML = JSON.stringify(g_uploaded.fields);
	div.appendChild(span);
	div.appendChild(document.createElement("br"));
	for ( var name in g_uploaded.files) {
		var file=g_uploaded.files[name];
		
		alert("g_uploaded.files[name]:"+JSON.stringify(g_uploaded.files[name]));
		
	
		for (var i=0;i<file.length;i++){
			if (file[i].status == "success") {
				
				alert("file[i]:"+JSON.stringify(file[i]));

				
				var span = document.createElement("span");
				var url = "/system.files.download/" + file[i].key;
//				var url = "/system.files.download/" + file[i].fileRawName;
				
				
				span.innerHTML = url;
				div.appendChild(span);
				div.appendChild(document.createElement("br"));
//				var img = document.createElement("img");
//				img.src = url;
//				div.appendChild(img);
				var downloadurl="<a href="+url+" download="+file[i].fileRawName+">"+file[i].fileRawName+"</a>";
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
//alert(JSON.stringify(g_uploaded.files));
	for ( var name in g_uploaded.files) {
		var xhr = new XMLHttpRequest();
		
//		alert(JSON.stringify(g_uploaded.files[0][0].key));

		xhr.open("delete", "/system.files/"
			+ g_uploaded.files[name][0].key);//修改成自己的接口
		xhr.send();
		
	}
	
	
	alert("删除附件成功");
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
            alert("成功数据:" + JSON.stringify(data));
           
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
	        success: function(data, textStatus) {
	            alert("成功数据:" + JSON.stringify(data));
	        },
	        error: function(data,XMLHttpRequest, textStatus, errorThrown) {
	        	alert("失败数据:"+JSON.stringify(data)+XMLHttpRequest+textStatus+errorThrown);   
	        }
	    });

}

//定义日期格式------------
Date.prototype.format=function (){
   var s='';
   s+=this.getFullYear()+'-';          // 获取年份。
   s+=(this.getMonth()+1)+"-";         // 获取月份。
   s+= this.getDate();                 // 获取日。
   return(s);                          // 返回日期。
};


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
	var newDate= new Date(milliseconds).format("yyyy-MM-dd");	
	return newDate;

}


