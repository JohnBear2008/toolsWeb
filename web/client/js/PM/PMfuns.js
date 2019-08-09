

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

//前端格式化日期

Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
} 

//前端数组去重复值

Array.prototype.delRepeat = function () {

       var temp = {}, len = this.length;

       for (var i = 0; i < len; i++) {

           var tmp = this[i];

           if (!temp.hasOwnProperty(tmp)) {// hasOwnProperty用来判断一个对象是否有你给出名称的属性或对象

               temp[this[i]] = "yes";

           }

       }

       len = 0;

       var tempArr = [];

       for (var i in temp) {

           tempArr[len++] = i;

       }

       return tempArr;

   }

//定义表格加载数据函数----------

function showDBData(DataPara,columnsData){
	
 //swal(JSON.stringify(DataPara));
	$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getDBInfo',
	        data:{DBTable:DataPara.DBTable},
	        dataSrc: ''
	    },
	    columns: columnsData,
	    aaSorting: [0, 'desc'],//默认排序
//	    autoWidth:true,
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


	    language: languageCN
	    
	});

}

//定义订单表格加载数据函数----------

function showOrdersDBData(DataPara,columnsData){
	
//swal(JSON.stringify(DataPara));
	
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
//	swal("TableData:"+JSON.stringify(TableData));

}



//定义待过滤调节表格加载函数

function showFilterDBData(DataPara,columnsData){
	
//swal(JSON.stringify(DataPara));
	
//	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
	
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

//定义待过滤调节表格加载函数 同步

function showFilterDBDataAsyncNo(DataPara,columnsData){
	
//swal(JSON.stringify(DataPara));
	
//	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
	
	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
	
	$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getFilterDBInfo',
	        data:DataPara,
	        dataSrc: '',
	        async:false
	    },
	    columns: columnsData,
	    aaSorting: [0, 'desc'],//默认排序
	    lengthMenu:[5,10,20],


	    "language": languageCN
	});

}

//定义SQL  datatable表格

/*DataPara={
 * tableID:"#tableA",
 * SQLPara:{SQL:"SQLName",filter:"A=B"},
 * columnsData:[
		{ data: 'DBID' ,"visible": false},
        { data: 'CTRName' },
        { data: 'CTRVal'}

    ]
 * }
 * 
 * 
 * */

function showSQLDataTable(DataPara){

	$(DataPara.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误

	
	$(DataPara.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getSQLDBData',
	        data:DataPara.SQLPara,
//	        async: true,
	        dataSrc: ''
	    },
	    columns: DataPara.columnsData,
	    aaSorting: [0, 'desc'],//默认排序
	    lengthMenu:[10,20,50],
	    "language": languageCN
	});
	
	

}

//函数:datatable 数据重新加载函数
/*
 * let Params={
			tableID:"#billsTrackTable",
			SQLParam:{SQL:"SQLTableBillsDBCenter",filter:"CTRName='海天'"},
			columnsData:[
				{ data: 'DBID' ,"visible": false},
		        { data: 'BPID' },
		        { data: 'version'},
		        { data: 'CTRName'},
		        { data: 'makeDate'},
		        { data: 'WFEndDate'},
		        { data: 'taskNum'},
		        { data: 'taskNumDone'},
		        { data: 'WFEndText'}

			]
	}
 * 
 * 
 * 
 * 
 * */

function datatableReload(Params){	
	
	let table = $(Params.tableID).DataTable();
	
	table.destroy();

	$(Params.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getSQLDBData',
	        data:Params.SQLParam,
	        dataSrc: ''
	    },
	    columns: Params.columnsData,
	    aaSorting: [0, 'desc'],//默认排序
		lengthMenu:[10,30,50],
	    "language": languageCN
	});
	


}


function datatableReloadWithExcel(Params){	
	
	let table = $(Params.tableID).DataTable();
	
	table.destroy();

	$(Params.tableID).DataTable({
	    ajax: {
	        url: '/app/PM/getSQLDBData',
	        data:Params.SQLParam,
	        dataSrc: ''
	    },
	    columns: Params.columnsData,
	    aaSorting: [0, 'desc'],//默认排序
		dom: 'Bfrtip',
		buttons: [{
			extend: 'excelHtml5',
			text:'导出excel',
			customize: function (xlsx) {
				var sheet = xlsx.xl.worksheets['sheet1.xml'];
				$('row c[r^="C"]', sheet).attr('s', '2');
			}
		}],
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
  //         swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
        	   
        	   
        	   swal("Good job!", "新增成功!", "success")
        	   .then((value) => {
        	     window.location.reload();
        	   });

           }
       },
       error:function(err){
    	   
    	   if(err.responseText.indexOf("ER_DUP_ENTRY") != -1){
    		   swal("系统中已存在重复数据,请检查!");
    	   }else{
    		   swal("失败数据:"+JSON.stringify(err));
    	   }
    	   
       	
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
 //                swal("成功数据:"+JSON.stringify(data));
            if (data.changedRows != 0) {
//                swal(showText+"更新数据成功!");
//               window.location.reload();
               
               swal("Good job!", "更新成功!", "success")
        	   .then((value) => {
        	     window.location.reload();
        	   });
               
            } else {
//                swal(showText+"未有数据更新!");
//                window.location.reload();
            	swal("Good job!", "无数据更新!", "warning")
         	   .then((value) => {
         	     window.location.reload();
         	   });
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
            //  swal("成功数据:"+JSON.stringify(data));
            if (data.affectedRows != 0) {
//                swal("删除数据成功!");
//                window.location.reload();
                swal("Good job!", "删除数据成功!", "success")
         	   .then((value) => {
         	     window.location.reload();
         	   });
                
            } else {
//                swal("删除数据失败!");
            	 swal("Good job!", "未有数据删除!", "warning")
           	   .then((value) => {
           	     window.location.reload();
           	   });
            	
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
  //         swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
//               swal(showText+"数据保存成功!");
//              window.location.reload();
              
              swal("Good job!", showText+"数据保存成功!", "success")
        	   .then((value) => {
        	     window.location.reload();
        	   });
              
           }
       },
       error:function(err){
    	   if(err.responseText.indexOf("ER_DUP_ENTRY") != -1){
    		   swal("系统中已存在重复数据,请检查!");
    	   }else{
    		   swal("失败数据:"+JSON.stringify(err));
    	   }
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
        	  
        	  //swal("return1111:"+JSON.stringify(data));
        	  
        	  
        		$(selectorID).selectpicker({
        			noneSelectedText :"未选择"//默认显示内容
        		});
        		
        		 $(selectorID).append($('<option value="">未选择</option>'));
        		
        		if(InitValue==undefined){
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i][selectPara.selectTitle]+'</option>'));
                 	  }
           		 $(selectorID).selectpicker('val','');

        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i][selectPara.selectTitle]+'</option>'));
                     	  if(data[i][selectPara.selectTitle]==InitValue||data[i].DBID==InitValue){
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
        	  
        	//  console.log("data1:"+JSON.stringify(data));
        	
        //	  swal("return1111:"+JSON.stringify(data));
        	  
        	  $(selectorID).selectpicker({
      			noneSelectedText :"未选择"//默认显示内容
      		  });

        	  $(selectorID).append($('<option value="">未选择</option>'));
        		
        		if(InitValue==undefined||InitValue==""){	
//        			console.log("InitValue11:"+InitValue);
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                 	  }
           		 $(selectorID).selectpicker('val','');

        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                     	  if(Fun_getSelectText(data[i].selectTitle)==InitValue||data[i].DBID==InitValue){
                     		  $(selectorID).selectpicker('val',data[i].DBID);//留空不设置默认选项
                     	  }
                     }
        		}
        		


              $(selectorID).selectpicker('refresh');
//              swal($(selectorID).find("option:selected").text())
          },
          error:function(){}
      })
}


//函数 获取指定SQL数据加载至selector中
function Fun_getSQLFullSelectDBData(selectSQL,selectorID,InitValue) {
	
//	console.log("InitValue:"+InitValue);
	

	
	$(selectorID).empty();//用select组件不用先清空
	  
	  $.ajax({
          method:'get',
          data:selectSQL,
          url:"/app/PM/getSQLDBData",
          success:function(data){
        	  
        //	  console.log("data:"+JSON.stringify(data));
        	  
        	  $(selectorID).append($('<option value="">未选择</option>'));

        		if(InitValue==undefined||InitValue==""){	
//        			console.log("InitValue11:"+InitValue);
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+Fun_getValSelectText(data[i].selectTitle)+'</option>'));
                 	  }
           		 $(selectorID).selectpicker('val','');

        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+Fun_getValSelectText(data[i].selectTitle)+'</option>'));
                     	  if(Fun_getValSelectText(data[i].selectTitle)==InitValue||data[i].DBID==InitValue){
                     		  $(selectorID).selectpicker('val',data[i].DBID);//留空不设置默认选项
                     	  }
                     }
        		}
        		
        		
        		$(selectorID).selectpicker({
        			noneSelectedText :"未选择"//默认显示内容
        		});

              $(selectorID).selectpicker('refresh');
              
//              swal($(selectorID).find("option:selected").text() );

          },
          error:function(){}
      })
}

//函数 普通格式获取指定SQL数据加载至selector中
function getSQLSelectDBData(selectSQL,selectorID,InitValue) {
	
//	console.log("InitValue:"+InitValue);

	$(selectorID).empty();//用select组件不用先清空
	  
	  $.ajax({
          method:'get',
          data:selectSQL,
          url:"/app/PM/getSQLDBData",
          success:function(data){
        	  
        	  $(selectorID).append($('<option value="">未选择</option>'));

        		if(InitValue==undefined||InitValue==""){	
//        			console.log("InitValue11:"+InitValue);
           		
           		 for(i=0;i<data.length;i++){
                 	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                 	  }


        		}else{
        			
        			 for(i=0;i<data.length;i++){
                     	  $(selectorID).append($('<option value='+data[i].DBID+'>'+data[i].selectTitle+'</option>'));
                     	  if(Fun_getSelectText(data[i].selectTitle)==InitValue||data[i].DBID==InitValue){
                     		  
                     		 $(selectorID).val(data[i].DBID);

                     	  }
                     }
        		}

          },
          error:function(){}
      })
}


//----文件上传功能代码----------------------------------------------
function fileSelected() {

		var files = document.getElementById('fileToUpload').files;
		var div = document.getElementById('div_previewImages');
		
		var selectedFileNames="";
		
		for ( var i = 0; i < files.length; i++) {
			
			console.log("filename:"+files[i].name);
			
			let fileNameStr = files[i].name.replace(/\s*/g,"");//去除文件名中所有空格
			
			console.log("fileNameStr:"+fileNameStr);
			
			selectedFileNames=selectedFileNames+fileNameStr+";";
			
			//缩略图预览
//			var img = document.createElement("img");
//			div.appendChild(img);
//			
			var reader = new FileReader();
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
		
		document.getElementById('div_previewImages').innerHTML="已选择文件:"+selectedFileNames;

		uploadFile();
}


//----文件上传功能代码----------------------------------------------
function taskFileSelected() {


		var files = document.getElementById('fileToUpload').files;
		var div = document.getElementById('div_previewImages');
		
		var selectedFileNames="";
		
		for ( var i = 0; i < files.length; i++) {
			
			console.log("filename:"+files[i].name);
			
			let fileNameStr = files[i].name.replace(/\s*/g,"");//去除文件名中所有空格
			
			console.log("fileNameStr:"+fileNameStr);
			
			selectedFileNames=selectedFileNames+fileNameStr+";";
			
			//缩略图预览
//			var img = document.createElement("img");
//			div.appendChild(img);
//			
			var reader = new FileReader();
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
		
		document.getElementById('div_previewImages').innerHTML="已选择文件:"+selectedFileNames;
		
		
		taskUploadFile();
		
}

//----文件上传功能代码----------------------------------------------
function T_taskFileSelected() {


		var files = document.getElementById('fileToUpload').files;
		var div = document.getElementById('div_previewImages');
		
		var selectedFileNames="";
		
		for ( var i = 0; i < files.length; i++) {
			
			console.log("filename:"+files[i].name);
			
			let fileNameStr = files[i].name.replace(/\s*/g,"");//去除文件名中所有空格
			
			console.log("fileNameStr:"+fileNameStr);
			
			selectedFileNames=selectedFileNames+fileNameStr+";";
			

			var reader = new FileReader();


			reader.readAsDataURL(files[i]);
			/* else if (files.value) {
				img.src = files.value; }*/
		}
		
		document.getElementById('div_previewImages').innerHTML="已选择文件:"+selectedFileNames;
		T_taskUploadFile();
		
}

//上传文件
function uploadFile() {
	

	var filePath=$('#filePath').attr("href");
	
	var fileName=$('#fileName').html();
//	console.log("fileName:"+fileName);
	
//	if(fileName!=undefined&&fileName!=""){
//		
//		swal("附件已存在,上传新附件请先清空!");
//		
//	}else{
	
	var fd = new FormData();
	var files = document.getElementById('fileToUpload').files;
	
//	if(files.length>1){
//		swal("多文件上传请统一打包成唯一压缩包!");
//		document.getElementById('div_previewImages').innerHTML="";
//		
//	}else{
        for ( var i = 0; i < files.length; i++) {
			
//			swal("files[i]:"+JSON.stringify(files[i]));
			fd.append(i, files[i]);
			
		}
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", uploadProgress, false);
		xhr.addEventListener("load", uploadComplete, false);
		xhr.addEventListener("error", uploadFailed, false);
		xhr.addEventListener("abort", uploadCanceled, false);
		xhr.open("POST", "/system.files.upload/");
		xhr.send(fd);
		
//	}
	
//	}
	
}
//任务上传文件
function taskUploadFile() {
	

	var filePath=$('#filePath').attr("href");
	
	var fileName=$('#fileName').html();
//	console.log("fileName:"+fileName);
	
//	if(fileName!=undefined&&fileName!=""){
//		
//		swal("附件已存在,上传新附件请先清空!");
//		
//	}else{
	
	var fd = new FormData();
	var files = document.getElementById('fileToUpload').files;
	
//	if(files.length>1){
//		swal("多文件上传请统一打包成唯一压缩包!");
//		document.getElementById('div_previewImages').innerHTML="";
//		
//	}else{
        for ( var i = 0; i < files.length; i++) {
			
//			swal("files[i]:"+JSON.stringify(files[i]));
			fd.append(i, files[i]);
			
		}
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", uploadProgress, false);
		xhr.addEventListener("load", taskUploadComplete, false);
		xhr.addEventListener("error", uploadFailed, false);
		xhr.addEventListener("abort", uploadCanceled, false);
		xhr.open("POST", "/system.files.upload/");
		xhr.send(fd);
		
//	}
	
//	}
	
}

//任务上传文件
function T_taskUploadFile() {
	

	var filePath=$('#filePath').attr("href");
	
	var fileName=$('#fileName').html();
//	console.log("fileName:"+fileName);
	
//	if(fileName!=undefined&&fileName!=""){
//		
//		swal("附件已存在,上传新附件请先清空!");
//		
//	}else{
	
	var fd = new FormData();
	var files = document.getElementById('fileToUpload').files;
	
//	if(files.length>1){
//		swal("多文件上传请统一打包成唯一压缩包!");
//		document.getElementById('div_previewImages').innerHTML="";
//		
//	}else{
        for ( var i = 0; i < files.length; i++) {
			
//			swal("files[i]:"+JSON.stringify(files[i]));
			fd.append(i, files[i]);
			
		}
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", uploadProgress, false);
		xhr.addEventListener("load", T_taskUploadComplete, false);
		xhr.addEventListener("error", uploadFailed, false);
		xhr.addEventListener("abort", uploadCanceled, false);
		xhr.open("POST", "/system.files.upload/");
		xhr.send(fd);
		
//	}
	
//	}
	
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
//		swal(evt.target.responseText);
		return;
	}
	/* 服务器端返回响应时候触发event事件*/
	//var img=document.getElementById('img_show');
	var div = document.getElementById('divFilesUploaded');
//	swal(evt.target.responseText);
	g_uploaded = JSON.parse(evt.target.responseText);
	//swal(obj[0].key);
	var span = document.createElement("span");
//	span.innerHTML = JSON.stringify(g_uploaded.fields);
	div.appendChild(span);
//	div.appendChild(document.createElement("br"));
	for ( var name in g_uploaded.files) {
		var file=g_uploaded.files[name];
		
//		swal("g_uploaded.files[name]:"+JSON.stringify(g_uploaded.files[name]));
		
	
		for (var i=0;i<file.length;i++){
			if (file[i].status == "success") {
				
//				swal("file[i]:"+JSON.stringify(file[i]));	
				var span = document.createElement("span");
				var url = "/system.files.download/" + file[i].key;
//				var url = "/system.files.download/" + file[i].fileRawName;
				
				
				span.innerHTML = url;

				div.appendChild(span);
//				div.appendChild(document.createElement("br"));
//				var img = document.createElement("img");
//				img.src = url;
//				div.appendChild(img);
				let fileRawNameStr=file[i].fileRawName.replace(/\s*/g,"");//去除文件名中所有空格
				
				var downloadurl="<a id='filePath' href="+url+" download="+fileRawNameStr+">"+"<span id='fileName'>"+fileRawNameStr+"</span></a>";
				span.innerHTML =downloadurl;
				div.appendChild(document.createElement("br"));
			} else {
				swal(file[i].errorMessage);
			}
		}
	}
}
//任务文件上传完毕
function taskUploadComplete(evt) {
	if (evt.target.status != 200) {
//		swal(evt.target.responseText);
		return;
	}
	/* 服务器端返回响应时候触发event事件*/
	//var img=document.getElementById('img_show');
	var div = document.getElementById('divFilesUploaded');
	g_uploaded = JSON.parse(evt.target.responseText);
	var span = document.createElement("span");
	div.appendChild(span);
	
	//let BTType=$("#BTID").text().substring(12,13);//自动识别版本号功能,获取BTID做任务类型判断
	
	let BTType=$('#taskSortType').text();
	
	for ( var name in g_uploaded.files) {
		var file=g_uploaded.files[name];
		for (var i=0;i<file.length;i++){
			if (file[i].status == "success") {
				var span = document.createElement("span");
				var url = "/system.files.download/" + file[i].key;
				span.innerHTML = url;
				div.appendChild(span);
				let fileRawNameStr=file[i].fileRawName.replace(/\s*/g,"");//去除文件名中所有空格
				var downloadurl="<a id='filePath' href="+url+" download="+fileRawNameStr+">"+"<span id='fileName'>"+fileRawNameStr+"</span></a>";
				span.innerHTML =downloadurl;
				div.appendChild(document.createElement("br"));
				
				//自动识别版本号功能
				
				let fileVersion=$("#fileVersion").val();
				
				switch(BTType){
				case 'D':
					
//					console.log("BTType:"+BTType);
					if(fileVersion==""){
						$("#fileVersion").val(fileRawNameStr);
					}else{
						$("#fileVersion").val(fileVersion+" "+fileRawNameStr);
					}
					break;
				case 'H':
					if(fileRawNameStr.indexOf("_update")!=-1){
						
						if(fileVersion==""){
							$("#fileVersion").val(fileRawNameStr.substring(0,fileRawNameStr.length-4));
						}else{
							$("#fileVersion").val(fileVersion+" "+fileRawNameStr.substring(0,fileRawNameStr.length-4));
						}
					}

					break;
				}


				
				
			} else {
				swal(file[i].errorMessage);
			}
		}
	}
	
	//--增加版本号自动填写功能--------------
	
//	let BTID=$("#BTID").text();

	
	
	
	
	
	
}

//任务文件上传完毕
function T_taskUploadComplete(evt) {
	if (evt.target.status != 200) {
//		swal(evt.target.responseText);
		return;
	}
	/* 服务器端返回响应时候触发event事件*/
	//var img=document.getElementById('img_show');
	var div = document.getElementById('divFilesUploaded');
	g_uploaded = JSON.parse(evt.target.responseText);
	var span = document.createElement("span");
	div.appendChild(span);
	
	//let BTType=$("#BTID").text().substring(12,13);//自动识别版本号功能,获取BTID做任务类型判断
	
	let BTType=$('#taskSortType').text();
	
	for ( var name in g_uploaded.files) {
		var file=g_uploaded.files[name];
		for (var i=0;i<file.length;i++){
			if (file[i].status == "success") {
				var span = document.createElement("span");
				var url = "/system.files.download/" + file[i].key;
				span.innerHTML = url;
				div.appendChild(span);
				let fileRawNameStr=file[i].fileRawName.replace(/\s*/g,"");//去除文件名中所有空格
				var downloadurl="<a id='filePath' href="+url+" download="+fileRawNameStr+">"+"<span id='fileName'>"+fileRawNameStr+"</span></a>";
				span.innerHTML =downloadurl;
				div.appendChild(document.createElement("br"));
				
				//自动识别版本号功能
				
				let fileVersion=$("#fileVersion").val();
				if(fileVersion==""){
					$("#fileVersion").val(fileRawNameStr);
				}else{
					$("#fileVersion").val(fileVersion+" "+fileRawNameStr);
				}
				
				
			} else {
				swal(file[i].errorMessage);
			}
		}
	}
	
	//--增加版本号自动填写功能--------------
	
//	let BTID=$("#BTID").text();

	
	
	
	
	
	
}

function uploadFailed(evt) {
	swal("There was an error attempting to upload the file.");
}

function uploadCanceled(evt) {
	swal("The upload has been canceled by the user or the browser dropped the connection.");
}

function deleteFile() {
	
//	var filePath=$('#filePath').attr("href");
//	swal(filePath);
	
	var files=[];
	
	$('#divFilesUploaded a').each(function(){
		var fileKey=$(this).attr('href').substring(23);
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
			var filePath=fileKey;
			xhr.open("delete", "/system.files/"+ filePath);
			xhr.send();
		}
		
		document.getElementById('div_previewImages').innerHTML="";
		document.getElementById('progressNumber').innerHTML="";
		document.getElementById('divFilesUploaded').innerHTML="";
		
		// 清空input file文件原生js
	    var fileInput = document.getElementById("fileToUpload");
	     // for IE, Opera, Safari, Chrome
	     if (fileInput.outerHTML) {
	    	 fileInput.outerHTML = fileInput.outerHTML;
	     } else { // FF(包括3.5)
	    	 fileInput.value = "";
	     }
	     
		swal("清空附件成功!");
		
		
		
	}else{
		swal("无附件,无需清空!");
	}
	

}


function taskDeleteFile() {
	
//	var filePath=$('#filePath').attr("href");
//	swal(filePath);
	
	var files=[];
	
	$('#divFilesUploaded a').each(function(){
		var fileKey=$(this).attr('href').substring(23);
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
			var filePath=fileKey;
			xhr.open("delete", "/system.files/"+ filePath);
			xhr.send();
		}
		
		document.getElementById('div_previewImages').innerHTML="";
		document.getElementById('progressNumber').innerHTML="";
		document.getElementById('divFilesUploaded').innerHTML="";
		
		// 清空input file文件原生js
	    var fileInput = document.getElementById("fileToUpload");
	     // for IE, Opera, Safari, Chrome
	     if (fileInput.outerHTML) {
	    	 fileInput.outerHTML = fileInput.outerHTML;
	     } else { // FF(包括3.5)
	    	 fileInput.value = "";
	     }
	     
	     $("#fileVersion").val("");
	     
		swal("清空附件成功!");
		
		
		
	}else{
		swal("无附件,无需清空!");
	}
	

}
//---------------------------------------



//函数 获取数据库信息 带过滤器

function Fun_getFilterDBData(DataPara,DivID){
	
//swal(JSON.stringify(DataPara));
	
	$.ajax({
	      type: "get",      //data 传送数据类型。post 传递
	      dataType: 'json',  // 返回数据的数据类型json
	      url: '/app/PM/getFilterDBInfo',  // yii 控制器/方法
	      cache: false,      
	      data: DataPara,  //传送的数据
	      error:function(){
	         swal("数据传输错误");
	      },
	      success: function (data) {
//	    	  swal("成功返回数据:"+JSON.stringify(data));
	    	  
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
              swal("发送成功:"+JSON.stringify(textStatus));


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        	
        	 swal("发送失败:"+JSON.stringify(textStatus));
        }
    });
}


//发送钉钉消息-----------
function sendDingMsg(DDMsg) {
	
	if(confirm("是否发送钉钉提醒消息?")){
		
		$.ajax({
	        method: 'post',
	        url: '/app/PM/sendDingTalk',
	        data: DDMsg,
	        success: function(data, textStatus) {
	 //           console.log("成功数据:" + JSON.stringify(data));
	           
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	            
	        }
	    });
		
	}

}

//函数 获取绑定数据----------------------
function F_getBindDBData(choData){
	//swal("choData:"+JSON.stringify(choData));
	
	 $.ajax({
	        method: 'get',
	        url: '/app/PM/getBindDBData',
	        data: choData,
	        success: function(data) {
	            swal("成功数据:" + JSON.stringify(data));
	        },
	        error: function(err) {
	        	swal("失败数据:"+JSON.stringify(err));   
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
	
	//swal(JSON.stringify(DataPara));
		
		$(tableInfo.tableID).DataTable().destroy();//销毁原数据表格,防止加载错误
		
		$(tableInfo.tableID).DataTable({
		    ajax: {
		        url: '/app/PM/getSQLDBData',
		        data:SQL,
		        dataSrc: ''
		    },
		    columns: tableInfo.columnsData,
//		    bAutoWidth: true,//自动宽度，默认的属性为true。
//		    'ordering'  :false,//禁止排序,按数据库返回数据排序
		    aaSorting: [0, 'desc'],//默认排序,按第一列时间戳排序
			lengthMenu:[10,30,50],
			dom: 'Bfrtip',
        buttons: [ {
            extend: 'excelHtml5',
            customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];
 
                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
        } ],
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
//            swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               swal("附件添加绑定成功!");
//               window.location.reload();
           }
       },
       error:function(err){
       	swal("失败数据:"+JSON.stringify(err));
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
//            swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
               swal("更新附件绑定成功!");
//             window.location.reload();
           }
       },
       error:function(err){
       	swal("失败数据:"+JSON.stringify(err));
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

//函数 截取值 selector选择内容  去除-/
function Fun_getValSelectText(obj){
//	var str2 = str.replace(/a/g, 'o');
//	.replace(/-/g,"/")
//    var index=obj.lastIndexOf("\-");
    obj=obj.replace(/-\//g,"");
//  console.log(obj);
    return obj;
}

//函数 截取selector选择内容-前
function Fun_getSelectTextPre(obj){

    var index=obj.indexOf("\-");
//    var index=obj.lastIndexOf("\-");
    obj=obj.substring(0,index);
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
//            swal("成功数据:" + JSON.stringify(data));
//           if (data.affectedRows != 0) {
//
////               window.location.reload();
//           }
//       },
//       error:function(err){
//       	swal("失败数据:"+JSON.stringify(err));
//       }
//    });
//}

//函数-增加数据并发送钉钉消息
function Fun_addDBDataDD(DBData,DDMsg) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/addDBData',
        data: DBData,
        success: function(data) {
//         swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
        	   
        	   
        	   if(DDMsg!=""){
            	   sendDingMsg(DDMsg);
               }
        	   
        	   
        	   swal("Good job!", "新增成功!", "success")
        	   .then((value) => {
//        	     swal(`The returned value is: ${value}`);
        	     
        	     window.location.reload();
        	   });

             
           }
       },
       error:function(err){
       	swal("失败数据:"+JSON.stringify(err));
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
//            swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
//        	   swal(showText+"更新数据成功!");
               if(DDMsg!=""){
            	   sendDingMsg(DDMsg);
               }
//              window.location.reload();
              
              
           swal("Good job!", showText+"更新成功!", "success")
       	   .then((value) => {
//       	     swal(`The returned value is: ${value}`);
       	     
       	     window.location.reload();
       	   });

              
           }else{
        	   swal(showText+"未有数据更新!");
        	   window.location.reload();
           }
       },
       error:function(err){
       	swal("失败数据:"+JSON.stringify(err));
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
            			  var downloadurl="<a id='filePath' href="+'/system.files.download/'+dataReturn[0].fileKey+" download="+dataReturn[0].fileName+">"+"<span id='fileName'>"+dataReturn[0].fileName+"</span></a>";
            			  $("#fileDBID").html(dataReturn[0].DBID);
            		  }else{
            			  var downloadurl="<a href="+'/system.files.download/'+dataReturn[0].fileKey+" download="+dataReturn[0].fileName+">"+"<span>"+dataReturn[0].fileName+"</span></a>";
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
////            swal("成功数据:" + JSON.stringify(data));
//           if (data.affectedRows != 0) {
//               swal("新增数据成功!");
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
//       	swal("失败数据:"+JSON.stringify(err));
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
        	 
        	 let dataR= NulltoEmpty(data);
       	  
       	  if(dataR.length!=0){
       		  var trth="<tr>"
       		  for(var i=0;i<dataR.length;i++){
       			trth=trth+"<th style='min-width:85px'>"+dataR[i].titleName+"</th>";
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
        	 
        	let dataR= NulltoEmpty(data);

       	  if(dataR.length!=0){

       		  for(var i=0;i<dataR.length;i++){
       			  
       			 var trtd="<tr>";

       		  for(var j=0;j<SQLParam.titles.length;j++){

//      			  console.log("SQLParam.titles[j]:"+SQLParam.titles[j]);
       			  
       			  if(SQLParam.titles[j]=="files"||SQLParam.titles[j]=="taskFiles"){
       				  

       				  
       				  if(dataR[i][SQLParam.titles[j]]!=""){
       					var files=JSON.parse(dataR[i][SQLParam.titles[j]]);
       					
//       					console.log("files:"+files);
       					  
       				  }

       				 
       				 if(files!=null){
       					 
       					 var fileLink="";
       					 if(files.length>0){
       						 for(var k=0;k<files.length;k++){
//       							 console.log("files[k].fileName:"+files[k].fileName);
       							 
       							fileLink=fileLink+"<a  href="+'/system.files.download/'+files[k].fileKey+" download="+files[k].fileName+">"+"<span>"+files[k].fileName+"</span></a>"+" ; ";
       						 }
       						fileLink=fileLink.substr(0, fileLink.length-3); 
       					 }
       					 
       					trtd=trtd+"<td>"+fileLink+"</td>";
       				 }else{
       					trtd=trtd+"<td></td>";
       				 }

       			  }else{
       				trtd=trtd+"<td>"+dataR[i][SQLParam.titles[j]]+"</td>";
       			  }

       		  }
       			  trtd=trtd+"</tr>";
       			 $(tableID+" tbody").append(trtd);   
       			 
       			files=null;
       		  }

       	  }

 
         },
         error:function(){}
     });

}

//函数:生成跟踪表格函数带查看DBID

/*
 * tableID="#tableTrackPLD"

 * SQLParam={"tableName":"ppm_bills_plan","titles":["BPID","CTRName"],"BID":"BPID","VER":"version","filter":"BPID='P12132131'"};
 * BID:为分组单号,VER:为版本标识
 * */


function Fun_fillTrackTableWithDBID(tableID,SQLParam){

	
	 $(tableID +" thead").html("");
	 $(tableID +" tbody").html("");

	
	 $.ajax({
         method:'get',
         data:SQLParam,
         url:"/app/PM/getTableTitles",
         success:function(data){
        	 
        	 let dataR= NulltoEmpty(data);
       	  
       	  if(dataR.length!=0){
       		  var trth="<tr>"
       		  for(var i=0;i<dataR.length;i++){
       			trth=trth+"<th style='min-width:85px'>"+dataR[i].titleName+"</th>";
       		  }
       		trth=trth+"<th>查看</th></tr>";
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
        	 
        	let dataR= NulltoEmpty(data);

       	  if(dataR.length!=0){

       		  for(var i=0;i<dataR.length;i++){
       			  
       			 var trtd="<tr>";

       		  for(var j=0;j<SQLParam.titles.length;j++){

//      			  console.log("SQLParam.titles[j]:"+SQLParam.titles[j]);
       			  
       			  if(SQLParam.titles[j]=="files"||SQLParam.titles[j]=="taskFiles"){
       				  

       				  
       				  if(dataR[i][SQLParam.titles[j]]!=""){
       					var files=JSON.parse(dataR[i][SQLParam.titles[j]]);
       					
//       					console.log("files:"+files);
       					  
       				  }

       				 
       				 if(files!=null){
       					 
       					 var fileLink="";
       					 if(files.length>0){
       						 for(var k=0;k<files.length;k++){
//       							 console.log("files[k].fileName:"+files[k].fileName);
       							 
       							fileLink=fileLink+"<a  href="+'/system.files.download/'+files[k].fileKey+" download="+files[k].fileName+">"+"<span>"+files[k].fileName+"</span></a>"+" ; ";
       						 }
       						fileLink=fileLink.substr(0, fileLink.length-3); 
       					 }
       					 
       					trtd=trtd+"<td>"+fileLink+"</td>";
       				 }else{
       					trtd=trtd+"<td></td>";
       				 }

       			  }else{
       				  if(SQLParam.titles[j]=="DBID"){
       					trtd=trtd+"<td style='display:none'>"+dataR[i][SQLParam.titles[j]]+"</td>";
       				  }else{
       					trtd=trtd+"<td>"+dataR[i][SQLParam.titles[j]]+"</td>";
       				  }
       				  
       				
       			  }

       		  }
       		  
//       		  console.log("1111:"+dataR[i].DBID);
       			  trtd=trtd+"<td><a href='javascript:getDBIDInfo(\""+SQLParam.tableName+"\","+dataR[i].DBID+")'>查看</a></td></tr>";
       			 $(tableID+" tbody").append(trtd);   
       			 
       			files=null;
       		  }
       	  }
         },
         error:function(){}
     });

}

//函数--在表格末尾加速查看按钮,扩展查看详情
//根据获得的DBID 详情加载
function getDBIDInfo(tableName,DBID){
	

	
//	$.ajax({
//        method:'get',
//        data:selectPara,
//        url:"/app/PM/getSelectDBData",
//        success:function(data){
// 
//        },
//        error:function(){}
//    })

	$('#winDetail').window('open');
	
	switch(tableName){
	case 'ppm_bills_plan':
		
		let SQLParamPLD={
			"tableName":"ppm_bills_plan",
			"titles":[
				"DBID",
				"BPID",
				"version",
				"CTRName",
				"topic",
				"detail",
				"PGEMaker",
				"OGNSystemVersion",
				"MHEName",
				"files",
				"modelD",
				"modelH",
				"applyDate",
				"limitDate",
				"maker",
				"makeDate",
				"auditOpinion"
				],
			"filter":"DBID='"+DBID+"'"
			};
		
		console.log("SQLParamPLD:"+JSON.stringify(SQLParamPLD));
		
		showDBIDInfo("#tableDetail",SQLParamPLD);
		
		break;
		
        case 'ppm_bills_plan_t':
		let SQLParamPLD_T={
			"tableName":"ppm_bills_plan_t",
			"titles":[
				"DBID",
				"BPID",
				"BPIDfrom",
				"BTIDfrom",
				"version",
				"CTRName",
				"topic",
				"detail",
				"PGEMaker",
				"OGNSystemVersion",
				"MHEName",
				"files",
				"modelD",
				"modelH",
				"applyDate",
				"limitDate",
				"maker",
				"makeDate",
				"auditOpinion"
				],
			"filter":"DBID='"+DBID+"'"
			};
	
		showDBIDInfo("#tableDetail",SQLParamPLD_T);
		
		break;
	case 'ppm_bills_blueprint':
		let SQLParamBPT={
			"tableName":"ppm_bills_blueprint",
			"titles":[
				"DBID",
				"BPTID",
				"BPTVersion",
				"CTRName",
				"BPTDescribe",
				"PGEMaker",
				"auditor",
				"auditDate",
				"files",
				"modelD",
				"modelH",
				"BPTAuditOpinion",
				"limitDate",
				"maker",
				"makeDate"
				],
				"filter":"DBID='"+DBID+"'"
			};
		showDBIDInfo("#tableDetail",SQLParamBPT);
		
		break;
	case 'ppm_bills_blueprint_t':
		let SQLParamBPT_T={
			"tableName":"ppm_bills_blueprint_t",
			"titles":[
				"DBID",
				"BPTID",
				"BPTVersion",
				"CTRName",
				"BPTDescribe",
				"PGEMaker",
				"auditor",
				"auditDate",
				"files",
				"modelD",
				"modelH",
				"BPTAuditOpinion",
				"limitDate",
				"maker",
				"makeDate"
				],
				"filter":"DBID='"+DBID+"'"
			};
		showDBIDInfo("#tableDetail",SQLParamBPT_T);
		
		break;
	case 'ppm_bills_task':
		let SQLParamTask={
			"tableName":"ppm_bills_task",
			"titles":[
				"DBID",
				"BTID",
				"BTVersion",
				"taskCTRName",
				"taskStaff",
				"taskDBE",
				"taskLimitDate",
				"taskRemark",
				"taskMaker",
				"taskMakeDate",
				"BTAcceptDate",
				"modifyContent",
				"functionsDBE",
				"IPQCAuditResultText",
				"IPQCMaker",
				"IPQCMakeDate",
				"BTStatusText",
				"taskFiles",
				"IPQCTestResult"
				
				],
				"filter":"DBID='"+DBID+"'"
			};
		
		showDBIDInfo("#tableDetail",SQLParamTask);
		
		break;
	case 'ppm_bills_task_t':
		let SQLParamTask_T={
			"tableName":"ppm_bills_task_t",
			"titles":[
				"DBID",
				"BTID",
				"BTVersion",
				"taskCTRName",
				"taskStaff",
				"taskDBE",
				"taskLimitDate",
				"taskRemark",
				"taskMaker",
				"taskMakeDate",
				"BTAcceptDate",
				"modifyContent",
				"functionsDBE",
				"IPQCAuditResultText",
				"IPQCMaker",
				"IPQCMakeDate",
				"BTStatusText",
				"taskFiles",
				"IPQCTestResult"
				
				],
				"filter":"DBID='"+DBID+"'"
			};
		
		showDBIDInfo("#tableDetail",SQLParamTask_T);
		
		break;
	case 'ppm_bills_fqc':
		let SQLParamFQC={
			"tableName":"ppm_bills_fqc",
			"titles":[
				"DBID",
				"FQCVersion",
				"FQCRecord",
				"FQCRemark",
				"FQCMaker",
				"FQCMakeDate",
				"FQCAuditor",
				"FQCAuditDate",
				"FQCResultText",
				"FQCTestResult"
				],
				"filter":"DBID='"+DBID+"'"
			};
		showDBIDInfo("#tableDetail",SQLParamFQC);
		
		break;
	case 'ppm_bills_fqc_t':
		let SQLParamFQC_T={
			"tableName":"ppm_bills_fqc_t",
			"titles":[
				"DBID",
				"FQCVersion",
				"FQCRecord",
				"FQCRemark",
				"FQCMaker",
				"FQCMakeDate",
				"FQCAuditor",
				"FQCAuditDate",
				"FQCResultText",
				"FQCTestResult"
				],
				"filter":"DBID='"+DBID+"'"
			};
		showDBIDInfo("#tableDetail",SQLParamFQC_T);
		
		break;
	case 'ppm_bills_pbh':
		let SQLParamPBH={
			"tableName":"ppm_bills_pbh",
			"titles":[
				"DBID",
				"PBHVersion",
				"PBHRemark",
				"PBHMaker",
				"PBHMakeDate",
				"PBHAuditor",
				"PBHAuditDate",
				"emailADRS",
				"files"

				],
				"filter":"DBID='"+DBID+"'"
			};
		
		showDBIDInfo("#tableDetail",SQLParamPBH);
		
		break;
	case 'ppm_bills_pbh_t':
		let SQLParamPBH_T={
			"tableName":"ppm_bills_pbh_t",
			"titles":[
				"DBID",
				"PBHVersion",
				"PBHRemark",
				"PBHMaker",
				"PBHMakeDate",
				"PBHAuditor",
				"PBHAuditDate",
				"emailADRS",
				"files"
				],
				"filter":"DBID='"+DBID+"'"
			};
		
		showDBIDInfo("#tableDetail",SQLParamPBH_T);
		
		break;
	
	}
	 	 
	 
}


//根据获得的DBID 详情加载
function showDBIDInfo(tableID,SQLParam){
	
	$(tableID).html("");
	
	console.log("SQLParam:"+JSON.stringify(SQLParam));
	 
	for(let i=0;i<SQLParam.titles.length+1;i++){
		$(tableID).append("<tr></tr>");   
	}
	
	
	$.ajax({
         method:'get',
         data:SQLParam,
         url:"/app/PM/getTableTitles",
         async:false,
         success:function(data){
        	 
        	 let dataR= NulltoEmpty(data);
        	 
        //	 swal(JSON.stringify(dataR));
        	 
        	 $(tableID+" tr:eq(0)").append("<th>DBID</th>");   
       	  
       	  if(dataR.length!=0){
       		  let trth=""
       		  for(var i=0;i<dataR.length;i++){
       			trth="<th style='width:85px'>"+dataR[i].titleName+"</th>";
       		    $(tableID+" tr:eq("+(i+1)+")").append(trth);   
       		  }
       	  }

         },
         error:function(){}
     });
     
     $.ajax({
         method:'get',
         data:SQLParam,
         url:"/app/PM/getTableDatas",
         success:function(data){
        	 
        	 let dataR= NulltoEmpty(data);
 //      	 swal(JSON.stringify(dataR));

       	  if(dataR.length!=0){  
       		  let trtd="";
       		  var TestResultJSON="";
       		  var tasksTableSQL="";
       		  

       		  for(let j=0;j<SQLParam.titles.length;j++){
       			  
       			  switch(SQLParam.titles[j]){
       			  case "files":
       			  case "taskFiles":
       				  
       				if(dataR[0][SQLParam.titles[j]]!=""){
       					var files=JSON.parse(dataR[0][SQLParam.titles[j]]);
       					
//       					console.log("files:"+files);
       					  
       				  }
       				 if(files!=null){
       					 var fileLink="";
       					 if(files.length>0){
       						 for(var k=0;k<files.length;k++){
//       							 console.log("files[k].fileName:"+files[k].fileName);
       							fileLink=fileLink+"<a  href="+'/system.files.download/'+files[k].fileKey+" download="+files[k].fileName+">"+"<span>"+files[k].fileName+"</span></a>"+" ; ";
       						 }
       						fileLink=fileLink.substr(0, fileLink.length-3); 
       					 }
       					trtd="<td>"+fileLink+"</td>";
       				 }else{
       					trtd="<td></td>";
       				 }
       			
       				  break;
       				  
       			 case "IPQCTestResult":
          			  trtd="<td><table id='TableTestContents' class='table table-bordered'>" +
          			  		"<thead>" +
          			  		"<tr>" +
          			  		"<th width='70px'>模块</th>" +
          			  		"<th>测试内容</th>" +
          			  		"<th width='80px'>测试结果</th>" +
          			  		"<th width='200px'>备注</th>" +
          			  		"</tr>" +
          			  		"</thead><tbody></tbody></table></td>";
          			  
          			  TestResultJSON=dataR[0][SQLParam.titles[j]];
          			  tasksTableSQL={"SQL":"SQLTableTestContents","filter":"billType='IPQC'"};
          				  
          			  break;
       				  
       			  case "FQCTestResult":
       				trtd="<td><table id='TableTestContents' class='table table-bordered'>" +
  			  		"<thead>" +
  			  		"<tr>" +
  			  		"<th width='70px'>模块</th>" +
  			  		"<th>测试内容</th>" +
  			  		"<th width='80px'>测试结果</th>" +
  			  		"<th width='200px'>备注</th>" +
  			  		"</tr>" +
  			  		"</thead><tbody></tbody></table></td>";
       			  TestResultJSON=dataR[0][SQLParam.titles[j]];
       			  tasksTableSQL={"SQL":"SQLTableTestContents","filter":"billType='FQC'"};
       				  
       				  break;
       				  
       				  
       			  case "DBID":
       				trtd="<td>"+dataR[0]["DBID"]+"</td>";
       				  break;
       				  
       			  default:
       				  trtd="<td>"+dataR[0][SQLParam.titles[j]]+"</td>";
       				  break;

       			  }

       			$(tableID+" tr:eq("+j+")").append(trtd);   

       		  }
       		  
       		  
       		//加载测试内容
//       		  console.log("TestResultJSON:"+TestResultJSON);
       		  
       		  if(tasksTableSQL!=""){
       			  
       			if(TestResultJSON==""){
           			Fun_showSQLTestContentsTableLite(tasksTableSQL,"#TableTestContents",null);
      			  }else{
      				  
      				let TestResult=JSON.parse(TestResultJSON);

      				Fun_showSQLTestContentsTableLite(tasksTableSQL,"#TableTestContents",TestResult);
      			  }
       			  
       		  }
       		 files=null;
       	  }

         },
         error:function(){}
     });
     


	 
}


//函数-根据自定义SQL获取数据加载内容


function Fun_showSQLTestContentsTable(SQL,tableID,TestResult,auditCheck){
	
	//swal(JSON.stringify(DataPara));
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
        	 
        	 $('#testContentsVer').text(data[0].billVersion);
        	 
//        	 console.log("TestResult:"+TestResult);
        	 if(TestResult!=null){
        		 
        		 for(var i=0;i<TestResult.length;i++){
//          		  swal(TestResult[i].testResult);
          		  $("input:radio[name='testResultRadio"+i+"'][value="+TestResult[i].testResult+"]").prop("checked",true); 
          		  $("#testRemark"+i).val(TestResult[i].testRemark);
                }
        		 
        		 if(auditCheck==1||auditCheck==2){
//        			 $('input').attr("disabled",true);
        			 $(tableID+" :input").attr("disabled",true);
        		 }
        		 
        	 }
        	 
        	 
        	 
        	 mergeTableCols(tableID);



   		 
//   		 $(tableID+" tbody").rowspan(0);
//   		 $(tableID).rowspan(1);
//   		 $(tableID).rowspan(2);
        	 


         },
         error:function(){}
     })

}





//function Fun_showSQLTestContentsTable(SQL,tableID,TestResult,auditCheck){
//	
//	//swal(JSON.stringify(DataPara));
//	 $(tableID+" tbody").html("");
//	
//	 $.ajax({
//         method:'get',
//         data:SQL,
//         url:"/app/PM/getSQLDBData",
//         success:function(data){
////        	 console.log("back data:"+JSON.stringify(data));
//        	 for(var i=0;i<data.length;i++){
//        		 var tr="<tr>" +
//        		        "<td style='display:none' id='testContentDBID"+i+"'>"+data[i].DBID+"</td>" +
//        		        "<td>"+data[i].modelType+"</td>" +
//        		 		"<td>"+data[i].content+"</td>" +
//        		 		"<td><input type='radio' name='testResultRadio"+i+"'  value='1' checked><span>正确</span> <input type='radio' name='testResultRadio"+i+"' value='2'> <span>不正确</span></td>"+
//        		 		"<td><input id='testRemark"+i+"' type='text' value='' style='width:100%'></td>"+
//        		 		"</tr>";
//        		 
//        		 $(tableID+" tbody").append(tr);
//        		 
//        	 }
//        	 
////        	 console.log("TestResult:"+TestResult);
//        	 if(TestResult!=null){
//        		 
//        		 for(var i=0;i<TestResult.length;i++){
////          		  swal(TestResult[i].testResult);
//          		  $("input:radio[name='testResultRadio"+i+"'][value="+TestResult[i].testResult+"]").prop("checked",true); 
//          		  $("#testRemark"+i).val(TestResult[i].testRemark);
//                }
//        		 
//        		 if(auditCheck==1||auditCheck==2){
////        			 $('input').attr("disabled",true);
//        			 $(tableID+" :input").attr("disabled",true);
//        		 }
//        		 
//        	 }
//        	 
//        	 
//        	 
//        	 mergeTableCols(tableID);
//
//
//
//   		 
////   		 $(tableID+" tbody").rowspan(0);
////   		 $(tableID).rowspan(1);
////   		 $(tableID).rowspan(2);
//        	 
//
//
//         },
//         error:function(){}
//     })
//
//}

//函数-根据自定义SQL获取数据加载内容


function Fun_showSQLTestContentsTableLite(SQL,tableID,TestResult){
	
	//swal(JSON.stringify(DataPara));
	 $(tableID+" tbody").html("");
	
	 $.ajax({
         method:'get',
         data:SQL,
         url:"/app/PM/getSQLDBData",
         success:function(data){
//        	 console.log("back data:"+JSON.stringify(data));
//        	 console.log("TestResult11111:"+TestResult);
        	 if(TestResult!=null){
        		 
        		 for(let i=0;i<TestResult.length;i++){
//          		  swal(TestResult[i].testResult);
        			 
        			 for(let j=0;j<data.length;j++){
        				 
        				 if(TestResult[i].testContentDBID==data[j].DBID){
        					 
        					 var tr="<tr>" +
             		        "<td style='display:none' id='testContentDBID"+j+"'>"+data[j].DBID+"</td>" +
             		        "<td>"+data[j].modelType+"</td>" +
             		 		"<td>"+data[j].content+"</td>" +
             		 		"<td><span id='spanTestResult"+j+"'></span></td>"+
             		 		"<td><span id='spanTestRemark"+j+"'></span></td>"+
             		 		"</tr>";
             		 
             		        $(tableID+" tbody").append(tr);
             		        
             		       if(TestResult[i].testResult==1){
              				 $("#spanTestResult"+j).text("正确");
              			 }else{
              				 $("#spanTestResult"+j).text("不正确");
              			 }
                		 
                		     $("#spanTestRemark"+j).text(TestResult[i].testRemark);
            				 
            			 }
                		 
                		 
                		
                		 
                	 }
        			 
        			
        			 
        			 
        			 
                } 
        		 
        	 }
        	 
        	 
        	 
        	 mergeTableCols(tableID);



   		 
//   		 $(tableID+" tbody").rowspan(0);
//   		 $(tableID).rowspan(1);
//   		 $(tableID).rowspan(2);
        	 


         },
         error:function(){}
     })

}


//函数-根据自定义SQL获取数据加载内容


function Fun_previewSQLTestContents(SQL,tableID){
	
	//swal(JSON.stringify(DataPara));
	 $(tableID+" tbody").html("");
	
	 $.ajax({
         method:'get',
         data:SQL,
         url:"/app/PM/getSQLDBData",
         success:function(data){
//        	 console.log("back data:"+JSON.stringify(data));
        	 
        	 if(data.length>0){
        		 
        		 $('#spanTaskSortType').text(data[0].taskSortType);
        		 $('#spanTaskType').text(data[0].taskType);
        		 $('#spanBillVersion').text(data[0].billVersion);
        		 $('#spanBillType').text(data[0].billType);
        		 
        		 
        		 
        		 for(var i=0;i<data.length;i++){
            		 var tr="<tr>" +
            		        "<td style='display:none' id='testContentDBID"+i+"'>"+data[i].DBID+"</td>" +
            		        "<td>"+data[i].modelType+"</td>" +
            		 		"<td>"+data[i].content+"</td>" +
            		 		"<td>"+data[i].billType+"</td>" +
            		 		"<td>"+data[i].billVersion+"</td>" +
            		 		"</tr>";
            		 
            		 $(tableID+" tbody").append(tr);
            		 
            	 }

            	 mergeTableCols(tableID);
        	 }else{
        		 $('#spanTaskSortType').text("");
        		 $('#spanTaskType').text("");
        		 $('#spanBillVersion').text("");
        		 $('#spanBillType').text("");
        	 }

         },
         error:function(){}
     })

}


//合并表格相同列函数
//
function mergeTableCols(tableID){
	
	var tbodyLength=$(tableID+" tbody").find("tr").length;
//	console.log("tbodyLength:"+tbodyLength);

	 let rowSpanNum=1;
	 
	for(let i=1;i<tbodyLength;i++){

		 let trTitle=$(tableID+" tbody tr:eq("+i+") td:eq(1)").html();
		 
		 let trTitlePre=$(tableID+" tbody tr:eq("+(i-1)+") td:eq(1)").html();
		 
//		 let rowSpanNum=$(tableID+" tbody tr:eq("+(i-1)+") td:eq(1)").attr("rowSpan");
		 
		 if(trTitle==trTitlePre){
//			 console.log("相同");
			 
			 $(tableID+" tbody tr:eq("+i+") td:eq(1)").hide();
			 
			 rowSpanNum=rowSpanNum+1;


			 
			 $(tableID+" tbody tr:eq("+(i-rowSpanNum+1)+") td:eq(1)").attr("rowSpan",rowSpanNum);
			 
		 }else{
			 rowSpanNum=1;
		 }
	
	}

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
	 if($!=null&&$!=""){
		 var s= $.match(_).toString();//先转换为字符串 不然会报 .replace is not a function错误
		 s=s.replace(/\n/g,",");
	     return s;
	 }
}

//将获得的数据中null转换为空
function NulltoEmpty(data) {
	
//	console.log("1213123:"+typeof(data))
	
	if(data instanceof Array){
		 if(data.length!=0){
			 for(let i=0;i<data.length;i++)
			 for(let j in data[i]){
		    	  if(data[i][j]==null){
		    		  data[i][j]="";
		    	  }
		      }
		      return data;
		 }else{
			 return data;
		 }
	}else{
		
		 for(let k in data){
	    	  if(data[k]==null){
	    		  data[k]="";
	    	  }
	      }
	      return data;
	}
	 
	
	     
}


//函数 检查权限函数
function checkAuthority(selectSQL,AuthorityID){
	
	let checkResult=false;
	
	 $.ajax({
         method:'get',
         data:selectSQL,
         url:"/app/PM/getSQLDBData",
         async:false, //必须同步
         success:function(data){
        	 
        	 console.log("authority:"+JSON.stringify(data[0]["roleAuthorities"]));
        	 if(data[0]["roleAuthorities"]!=null){
        		 let authorityArray=JSON.parse(data[0]["roleAuthorities"]);
            	 
            	 if(authorityArray.length>0){
            		 for(let i=0;i<authorityArray.length;i++){
            			 console.log(authorityArray[i].val);
            			 
            			 if(AuthorityID==authorityArray[i].val){
            				 checkResult=true;
            				 break;//跳出循环提高效率

            			 }
            		 }
            	 }
        		 
        	 }
        	 
        	 
         },
         error:function(){}
     })
     
     if(checkResult==false){
    	 swal("监测到当前账号无该操作权限,请联系管理员授权!");
     }

     return checkResult;
	
}


//函数使得表格列宽可拖动改变
function tableChangeColWidth(tableID){
	var tTD;
        var table = document.getElementById(tableID);
//        console.log(table.rows[0].cells)
        for (i = 0; i < table.rows[0].cells.length; i++) {
            table.rows[0].cells[i].onmousedown = function() {
                tTD = this;
                if (event.offsetX > tTD.offsetWidth - 10) {
                    tTD.mouseDown = true;
                    tTD.oldX = event.x;
                    tTD.oldWidth = tTD.offsetWidth;
                }
            };
            table.rows[0].cells[i].onmouseup = function() {
                if (tTD == undefined) tTD = this;
                tTD.mouseDown = false;
                tTD.style.cursor = 'default';
            };
            table.rows[0].cells[i].onmousemove = function() {
                if (event.offsetX > this.offsetWidth - 10)
                    this.style.cursor = 'col-resize';
                else
                    this.style.cursor = 'default';
                if (tTD == undefined) tTD = this;
                if (tTD.mouseDown != null && tTD.mouseDown == true) {
                    tTD.style.cursor = 'default';
                    if (tTD.oldWidth + (event.x - tTD.oldX) > 0)
                        tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
                    tTD.style.width = tTD.width;
                    tTD.style.cursor = 'col-resize';
                    table = tTD;
                    while (table.tagName != tableID) table = table.parentElement;
                    for (j = 0; j < table.rows.length; j++) {
                        table.rows[j].cells[tTD.cellIndex].width = tTD.width;
                    }
                }
            };
        }

	}



//--以下为标准程序格式函数测试---------------------------------------------------------

//函数-根据自定义SQL 生成测试内容模版修改


//函数-控制显示隐藏函数ips={hideElements:['element1'],showElements:['element1']}

//funtest

function funtest(){
	console.log("funtest done!");
}

var refresh= function(){
	window.location.reload();
}


function controlElementShowHide(ips,ops){
	
	//①检查参数②执行程序
	
	if(ips.hasOwnProperty('hideElements')){
		if(ips.hideElements.length!=0){
			for(let i=0;i<ips.hideElements.length;i++){
				$('#'+ips.hideElements[i]).hide();
			}
		}
	}else{
		console.log("controlElementShowHide 无隐藏元素!");
	}

	
	if(ips.hasOwnProperty('showElements')){
		if(ips.showElements.length!=0){
			for(let j=0;j<ips.showElements.length;j++){
				$('#'+ips.showElements[j]).show();
			}
		}
	}else{
		console.log("controlElementShowHide 无显示元素!");
	}

	console.log('controlElementShowHide执行成功! 返回参数:'+ops);
	
	return ops;
}



//函数 获取data ips={SQL:"SQLID"}
function getAjaxDataSync(ips,ops,funs){
	
	if(ips.hasOwnProperty('SQL')){
		 $.ajax({
	         method:'get',
	         data:ips,
	         url:"/app/PM/getSQLDBData",
	         async:false,
	         success:function(data){
//	        	 console.log("Ajax data:"+JSON.stringify(data));
	        	 ops=data;
	         },
	         error:function(){}
	     })
	}
	
//	console.log("ops:"+JSON.stringify(ops));
	return ops;
}

//创建测试内容可编辑表格ips={tableID:'tableID',data:data}

function delTr(trID){
    $(trID).parent().parent().remove();
}



function fillTestContentsModifyTable(ips,ops,funs){
	
	$('#'+ips.tableID+" tbody").html("");

	if(ips.data.length!=0){
		for(let i=0;i<ips.data.length;i++){

			let tr="<tr>"+
	        "<td><input type='text' value='"+ips.data[i].modelType+"' style='width:100%'></td>" +
	 		"<td><input type='text' value='"+ips.data[i].content+"' style='width:100%'></td>" +
	 		"<td>"+ips.data[i].billType+"</td>" +
	 		"<td>"+parseInt(ips.data[i].billVersion+1)+"</td>" +
	 		"<td><button onclick='delTr(this)'>删除</button></td>" +
	 		"</tr>";
			
			$('#'+ips.tableID).append(tr);
		}
	}else{
		$('#'+ips.tableID).append(trAddBlank);
	}

	
	funs;
	return ops;
}


//函数-添加附件信息数据库ips={tableName:'ppm_table',tableTitles:['1','2'],tableDatas:[[1,2],[2,2]]}

function IOF_insertDBData(ips,ops,fun) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/IOF_insertDBData',
        data: ips,
        success: function(data) {
//            swal("成功数据:" + JSON.stringify(data));
           if (data.affectedRows != 0) {
        	   swal("新增成功!");
           }
      
//           ops=data;
//           return ops;
       },
       error:function(err){
       	swal("失败数据:"+JSON.stringify(err));
       },
       complete:function(){
    	   fun();
       }
    });
}


//发送钉钉消息-----------
function IOF_sendDingMsg(ips,ops,funs) {
	if(confirm('是否立即发送系统钉钉提醒消息?')){
		$.ajax({
	        method: 'post',
	        url: '/app/PM/sendDingTalk',
	        data: ips,
	        success: function(data, textStatus) {
	        	funs;
	        	ops=data;
	        	return ops;
	 //           console.log("成功数据:" + JSON.stringify(data));
	           
	        },
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
	            
	        }
	    });
		
	}
}


//ips:{confirmMsg,DDMsg}
function confirmSendDDMsg(ips){
	
	swal(ips.confirmMsg, {
		  buttons: {
		    cancel: "不发送",
		    catch: {
		      text: "发送",
		      value: "send",
		    }
		  },
		})
		.then((value) => {
		  switch (value) {

		    case "defeat":
		      break;
		    case "send":
		    	
		    	$.ajax({
			        method: 'post',
			        url: '/app/PM/sendDingTalk',
			        data: ips.DDMsg,
			        success: function(data, textStatus) {
			 //           console.log("成功数据:" + JSON.stringify(data));
			        	 swal("系统消息!", "系统钉钉消息已发送!", "success");
			        },
			        error: function(XMLHttpRequest, textStatus, errorThrown) {  
			        }
			    });
		      break;
		    default:
		  }
		});
	
}