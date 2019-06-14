//of标准化函数库
//刷新页面,of_refresh()为执行;
var io_refresh=()=>window.location.reload()



//异步美化alert    
var io_swal=async (i,o,f)=>{
	let r=await swal(i,{
		buttons:{
			'OK':"确定"
		}
	}).then(value=>{return value})
	r?f():''
}


//异步 sweetconfirm 封装,实现美化conform 效果i={msg:'这是消息',f:fun1}
var io_swcf=async (i,o)=>{
	let r=await swal(i.msg, {
		  buttons: {
		    'NO':"否",
		    'YES':"是"
		  }
		})
		.then((value) => {
		  switch (value) {
		    case 'NO':
		    	o=false
		      return o
		      break
		    case 'YES':
		    	o=true
			  return o
			  break
		  }
		})
	
	r?i.f():''

}




//判断是否为空对象	
var io_isEmptyObject=(i,o)=>{
	o==undefined?o='':o=o
			let t
			for (t in i){
				o=!1
				return o;
			}
			o=!0
			return o
}	



//发送钉钉消息i={at:'熊奇龙',msg:'钉钉消息'} 
var io_asyncSendDDMsg=async (i,o)=>{
	return $.ajax({
        method: 'post',
        url: '/app/public/sendDingTalk',
        data: i,
        success: function(data, textStatus) {
        	o='sucess'
        	return o //return 返回 resolve
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        	o='fail'
        	throw o  //throw 返回reject
        }
    })	

}






//定义提示消息,选择后发送钉钉消息货不发i={confirmMsg:'是否发送钉钉',DDMsg:{at:'熊奇龙',msg:'钉钉消息'},refresh:'yes'} o=io_alert,
var io_chooseSendDDMsg=async (i,o)=>{
	
	let swcfValue=await io_getSwcfValue(i.confirmMsg)
	
	if(swcfValue){
		let DDbackValue= await io_asyncSendDDMsg(i.DDMsg)
		if(io_isEmptyObject(DDbackValue)){
			let swalValue=await io_getSwalValue('发送成功')
			
			console.log("swalValue:"+swalValue)
			swalValue?io_refresh():''
		}else{
			let swalValue=await io_getSwalValue('发送失败')
			swalValue?io_refresh():''
		}
	}else{
		io_refresh()
	}
}

//异步 ajax get 方法i={sql:"select * from `test`"}

var io_asyncAjaxGet=async (i,o)=>{
	o=await $.ajax({
		method: 'get',
	    url: '/app/public/ajaxGet',
	    data: i,
	    success: (data, textStatus)=>{
	    	return textStatus  //return 返回 resolve
	    	},
	    error: (XMLHttpRequest, textStatus, errorThrown)=>{
	        	throw textStatus  //throw 返回reject
	        }
	    });
	return o
}


//同步ajax get 方法 i={sql:"select * from `test`"}
var io_syncAjaxGet=(i,o)=>{
	$.ajax({
        method: 'get',
        url: '/app/public/ajaxGet',
        data: i,
        async:false,
        success:(data, textStatus)=>{
        	o=data
        	return data
        },
        error: (XMLHttpRequest, textStatus, errorThrown)=>{
        }
    })
	
	return o
}

//异步 ajax post 方法 i={sql:"insert into `test` value (6,6,6,6,6,6)"}

var io_asyncAjaxPost=async (i,o)=>{
	o=await $.ajax({
		method: 'post',
	    url: '/app/public/ajaxPost',
	    data: i,
	    success: (data, textStatus)=>{
	    	return textStatus  //return 返回 resolve
	    	},
	    error: (XMLHttpRequest, textStatus, errorThrown)=>{
	        	throw textStatus  //throw 返回reject
	        }
	    });
	return o
}

//同步ajax get 方法 i={sql:"select * from `test`"}
var io_syncAjaxPost=(i,o)=>{
	$.ajax({
        method: 'post',
        url: '/app/public/ajaxPost',
        data: i,
        async:false,
        success:(data, textStatus)=>{
        	o=data
        	return data
        },
        error:(XMLHttpRequest, textStatus, errorThrown)=>{
        }
    })
	return o
}
