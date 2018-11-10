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

	    "language": {
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
	});
	
	
	
}




//AJAX新增数据库数据函数-----------
function addDBData(DBData) {
	
    $.ajax({
        method: 'post',
        url: '/app/PM/addDBData',
        data: DBData,
        success: function(data, textStatus) {
            // alert("成功数据:" + JSON.stringify(data));
            if (data.affectedRows != 0) {
                alert("新增数据成功!");
                window.location.reload();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('新增失败！失败原因：相同内容的数据已存在，请以更新的方式更新此数据！');
        }
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
	
//	$(selectorID).empty();//用select组件不用先清空
	  
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