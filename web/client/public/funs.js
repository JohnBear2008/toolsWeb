//of标准化函数库
//刷新页面,of_refresh()为执行;
var io_refresh=()=>window.location.reload()

//判断是否为空对象	
var io_isEmptyObject=(i,o)=>{

			let t
			for (t in i){
				o=!1
				return o;
			}
			o=!0
			return o
}



//异步美化alert    i={alertMsg:'this is alert Msg'}
var aio_swal=async (i,o)=>{
	return await swal(i.alertMsg,{
		buttons:{
			'OK':"确定"
		}
	}).then(value=>{
		 switch (value) {
		    case 'OK':
		    	o=true
			  return o
			  break
		  }
	})
}


//异步 sweetconfirm 封装,实现美化conform 效果i='这是消息' i={alertMsg:'this is confirm Msg'}
var aio_swcf=async (i,o)=>{
	 return swal(i.confirmMsg, {
		  buttons: {
		    'NO':"否",
		    'YES':"是"
		  }
		})
		.then(value => {
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
}


//发送钉钉消息i={DDMsg:{at:'熊奇龙',msg:'钉钉消息'}}
var aio_sendDDMsg=async (i,o)=>{
	return $.ajax({
        method: 'post',
        url: '/app/public/sendDingTalk',
        data: i.DDMsg,
        success: function(data, textStatus) {
        	o=true
        	return o //return 返回 resolve
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
        	o=false
        	return o  //throw 返回reject
        }
    })	

}



//定义提示消息,选择后发送钉钉消息货不发let i={confirmMsg:'this is confirm Msg',DDMsg:{at:'熊奇龙',msg:'this is DDMsg'}}let o={f:io_refresh}
var aio_chooseSendDDMsg=async (i,o)=>{
//	console.log('i:'+JSON.stringify(i))
//	console.log('o:'+JSON.stringify(o))
	
	let t1_r= await aio_swcf(i,'')
//	console.log('t1_r:'+t1_r)
	if(t1_r){
		let t2_r=await aio_sendDDMsg(i,'')
//		console.log('t2_r:'+JSON.stringify(t2_r))
		let t3_r=io_isEmptyObject(t2_r)
//		console.log('t3_r:'+JSON.stringify(t3_r))
		if(t3_r){
			let t4_r=await aio_swal(i,'')
//			console.log('t4_r:'+JSON.stringify(t4_r))
			if(t4_r){
				o.f()
			}
		}
	}else{
		o.f()
	}
}

//异步 ajax get 方法i={sql:"select * from `test`"}

var aio_ajaxGet=async (i,o)=>{
	o=await $.ajax({
		method: 'get',
	    url: '/app/public/ajaxGet',
	    data: i.sql,
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
var io_ajaxGet=(i,o)=>{
	$.ajax({
        method: 'get',
        url: '/app/public/ajaxGet',
        data: i.sql,
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

var aio_ajaxPost=async (i,o)=>{
	o=await $.ajax({
		method: 'post',
	    url: '/app/public/ajaxPost',
	    data: i.sql,
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
var io_ajaxPost=(i,o)=>{
	$.ajax({
        method: 'post',
        url: '/app/public/ajaxPost',
        data: i.sql,
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


//根据输入参数 制作sql语句i={type:'update',tableName:'ppm_bills_plan_t',data:{colName:'colName',colValue:'colValue'},filter:'BPID="PL001" AND version="0"'}
var io_makeBillSQL=(i,o)=>{
//	console.log('i:'+JSON.stringify(i))
	switch (i.type){
	case 'update':
		let sqlPart=''
		for(let key in i.data){
			sqlPart=sqlPart+key+'=\''+i.data[key]+'\','
		}
		sqlPart=sqlPart.substring(0,sqlPart.length-1)
//		console.log('sqlPart:'+sqlPart)
		o='update `'+i.tableName+'` set '+sqlPart+' where '+i.filter
		console.log('sql:'+o)
		return o
		break
	}
	
}

//更新表数据
var aio_updateBill=async(i,o)=>{
//	console.log('i:'+JSON.stringify(i))
	i.type='update'
	let t1_i=i
	let t2_i={sql:io_makeBillSQL(t1_i,'')}	
//	console.log('t2_i:'+t2_i)
	let t3_i=await aio_ajaxPost(t2_i,'')
//	console.log('t3_i:'+JSON.stringify(t3_i))
	if(t3_i.affectedRows!=0){
			if(i.DDMsg!=undefined){
				aio_chooseSendDDMsg(i,o)
			}else if(i.alertMsg!=undefined){
				let t4=await aio_swal(i)

				if(t4){
					o.f()
				}
			}else{
				o.f()
			}
	}
}

