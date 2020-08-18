//of标准化函数库
//刷新页面,of_refresh()为执行;
var io_refresh = () => window.location.reload()

//判断是否为空对象	
var io_isEmptyObject = (i, o) => {

	let t
	for (t in i) {
		o = !1
		return o;
	}
	o = !0
	return o
}


const swalAndRefresh = async (i, o) => {
	let clickResult = await swal(i.alertMsg, {
		buttons: {
			'OK': "确定"
		}
	})
	console.log("clickResult:" + clickResult)

	if (clickResult === 'OK') {
		window.location.reload()
	}
}



//异步美化alert    i={alertMsg:'this is alert Msg'}
var aio_swal = async (i, o) => {
	return await swal(i.alertMsg, {
		buttons: {
			'OK': "确定"
		}
	}).then(value => {
		switch (value) {
			case 'OK':
				o = true
				return o
				break
		}
	})
}


//异步 sweetconfirm 封装,实现美化conform 效果i='这是消息' i={alertMsg:'this is confirm Msg'}
var aio_swcf = async (i, o) => {
	return swal(i.confirmMsg, {
			buttons: {
				'NO': "否",
				'YES': "是"
			}
		})
		.then(value => {
			switch (value) {
				case 'NO':
					o = false
					return o
					break
				case 'YES':
					o = true
					return o
					break
			}
		})
}

/**
 *确认并跳转
 *
 * @param {*} i={confirmMsg:'aaa',url:'/daa'}
 */
const swcfAndGoto = async (i) => {
	let r1 = await aio_swcf(i);
	if (r1) {
		window.location.href = i.url;

	} else {
		io_refresh();
	}

}

/**
 *弹窗并获取反馈消息
 *
 * @param {*} i={msg:''}
 */
const swalFeedback = (i) => {

	let o = swal(i.msg, {
			content: "input",
		})
		.then((value) => {
			if (value === '') {
				swalFeedback({
					msg: '请填写反馈内容!'
				})
			} else {
				// swal(`You typed: ${value}`);
				return value
			}

		});

	return o;
}



/**
 *更新版本,填写原因
 *
 * @param {*} i={msg:'',updateParams:JSON}
 */
const updateAndWriteReason = async (i) => {

	let r = await swalFeedback(i);

	i.updateParams.updateReason = r;

	$.ajax({
		method: 'post',
		url: '/app/PM/updBillStatus',
		data: i.updateParams,
		success: function (data, textStatus) {
			io_refresh();
		},
		error: function (XMLHttpRequest, textStatus,
			errorThrown) {}
	});

}

/**
 *更新版本,填写原因
 *
 * @param {*} i={msg:'',stopParams:JSON}
 */
const stopAndWriteReason = async (i) => {

	let r = await swalFeedback(i);

	i.stopParams.stopReason = r;

	$.ajax({
		method: 'post',
		url: '/app/PM/updBillStatus',
		data: i.stopParams,
		success: function (data, textStatus) {
			io_refresh();
		},
		error: function (XMLHttpRequest, textStatus,
			errorThrown) {}
	});

}


//发送钉钉消息i={DDMsg:{at:'熊奇龙',msg:'钉钉消息'}}
var aio_sendDDMsg = async (i, o) => {
	return $.ajax({
		method: 'post',
		url: '/app/public/sendDingTalk',
		data: i.DDMsg,
		success: function (data, textStatus) {
			o = true
			return o //return 返回 resolve
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			o = false
			return o //throw 返回reject
		}
	})
}



//定义提示消息,选择后发送钉钉消息货不发let i={confirmMsg:'this is confirm Msg',DDMsg:{at:'熊奇龙',msg:'this is DDMsg'}}let o={f:io_refresh}
var aio_chooseSendDDMsg = async (i, o) => {
	console.log('i:' + JSON.stringify(i))
	console.log('o:' + o.f)

	let t1_r = await aio_swcf(i, '')
	console.log('t1_r:' + t1_r)
	if (t1_r) {
		//		
		let t2_r = await aio_sendDDMsg(i, '')
		//		console.log('t2_r:'+JSON.stringify(t2_r))
		let t3_r = io_isEmptyObject(t2_r)
		console.log('t3_r:' + JSON.stringify(t3_r))
		if (t3_r) {
			let t4_r = await aio_swal({
				alertMsg: '发送成功'
			}, '')
			//			console.log('t4_r:'+JSON.stringify(t4_r))
			if (t4_r) {
				o.f()
			}
		}
	} else {
		o.f()
	}
}

//异步 ajax get 方法i={sql:"select * from `test`"}

var aio_ajaxGet = async (i, o) => {
	o = await $.ajax({
		method: 'get',
		url: '/app/public/ajaxGet',
		data: i,
		success: (data, textStatus) => {

			console.log("data:" + JSON.stringify(data))
			return textStatus //return 返回 resolve
		},
		error: (XMLHttpRequest, textStatus, errorThrown) => {
			throw textStatus //throw 返回reject
		}
	});
	return o
}


//异步 ajax get 方法i={sql:"select * from `test`"}

var aio_ajaxGetData = async (i, o) => {
	return $.ajax({
		method: 'get',
		url: '/app/public/ajaxGet',
		data: i,
		success: (data, textStatus) => {

			o = data

			return o //return 返回 resolve
		},
		error: (XMLHttpRequest, textStatus, errorThrown) => {
			throw textStatus //throw 返回reject
		}
	});

}


//测试获取异步data
var aio_ajaxGetData2 = async (i, o) => {
	o = await aio_ajaxGetData(i, o)
	console.log("o:" + JSON.stringify(o))
	return o

}




//同步ajax get 方法 i={sql:"select * from `test`"}
var io_ajaxGet = (i, o) => {
	$.ajax({
		method: 'get',
		url: '/app/public/ajaxGet',
		data: i,
		async: false,
		success: (data, textStatus) => {
			o = data
			return data
		},
		error: (XMLHttpRequest, textStatus, errorThrown) => {}
	})

	return o
}

//异步 ajax post 方法 i={sql:"insert into `test` value (6,6,6,6,6,6)"}

var aio_ajaxPost = async (i, o) => {
	o = await $.ajax({
		method: 'post',
		url: '/app/public/ajaxPost',
		data: i,
		success: (data, textStatus) => {
			return textStatus //return 返回 resolve
		},
		error: (XMLHttpRequest, textStatus, errorThrown) => {
			return textStatus //throw 返回reject
		}
	});
	return o
}

//同步ajax get 方法 i={sql:"select * from `test`"}
var io_ajaxPost = (i, o) => {
	$.ajax({
		method: 'post',
		url: '/app/public/ajaxPost',
		data: i,
		async: false,
		success: (data, textStatus) => {
			o = data
			return data
		},
		error: (XMLHttpRequest, textStatus, errorThrown) => {}
	})
	return o
}


//根据输入参数 制作sql语句i={type:'update',tableName:'ppm_bills_plan_t',data:{colName:'colName',colValue:'colValue'},filter:'BPID="PL001" AND version="0"'}
var io_makeBillSQL = (i, o) => {
	//	console.log('i:'+JSON.stringify(i))
	switch (i.type) {
		case 'update':
			let sqlPart = ''
			for (let key in i.data) {
				sqlPart = sqlPart + key + '=\'' + i.data[key] + '\','
			}
			sqlPart = sqlPart.substring(0, sqlPart.length - 1)
			//		console.log('sqlPart:'+sqlPart)
			o = 'update `' + i.tableName + '` set ' + sqlPart + ' where ' + i.filter
			console.log('sql:' + o)
			return o
			break
	}

}

//更新表数据
var aio_updateBill = async (i, o) => {
	//	console.log('i:'+JSON.stringify(i))
	i.type = 'update'
	let t1_i = i
	let t2_i = {
		sql: io_makeBillSQL(t1_i, '')
	}
	//	console.log('t2_i:'+t2_i)
	let t3_i = await aio_ajaxPost(t2_i, '')
	//	console.log('t3_i:'+JSON.stringify(t3_i))
	if (t3_i.affectedRows != 0) {
		if (i.DDMsg != undefined) {
			aio_chooseSendDDMsg(i, o)
		} else if (i.alertMsg != undefined) {
			let t4 = await aio_swal(i)

			if (t4) {
				o.f()
			}
		} else {
			o.f()
		}
	}
}


//判断是否为json格式

var isJSON = (i, o) => {
	if (typeof i === 'string') {
		try {
			let obj = JSON.parse(i);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}

		} catch (e) {
			console.log('error：' + i + '!!!' + e);
			return false;
		}
	}
	console.log('It is not a string!')
}



//函数将传入的json值为null 的变为空

var JSONNullToEmpty = (i, o) => {

	//check i
	let r1 = isJSON(i)
	//get o
	try {
		if (r1) {
			for (let j in i) {
				if (i[j] === null) {
					i[j] = ''
				}
			}
		}

	} catch (e) {
		console.log('error：JSONNullToEmpty,!!!' + e);
	}

	o = i
	return o

}

/**
 *根据sql获取需要的数据
 *
 * @param {*} i={sql,params}
 */
const getDataBySql = async (i) => {

	let o;
	o = await $.ajax({
		method: 'get',
		url: '/app/PM/lib/ajaxGet',
		data: i,
		success: function (data) {
			// console.log("getDataBySql data:" + JSON.stringify(data));
			return data;
		},
		error: function () {}
	})
	return o;
}


/**
 *更新数据库中数据
 *
 * @param {*} i={sqlParams}
 */
const postDBData = async (i) => {
	// console.log(i);
	let o = await $.ajax({
		method: 'post',
		url: '/app/PM/lib/ajaxPost',
		data: i,
		// processData: false, // 告诉jQuery不要去处理发送的数据
		// contentType: false, // 告诉jQuery不要去设置Content-Type请求头
		success: function (data) {

		},
		error: function () {}
	})

	// console.log("o:"+JSON.stringify(o));

	return o;

}

/**
 *加载bootStrapSelect 数据
 *
 * @param {*} i={elementId,sqlParams,initValue}
 */
const loadBootStrapSelector = async ({
	elementId,
	sqlParams,
	initValue
}) => {


	$('#' + elementId).empty(); //清空原有选项
	// $("#extraSelect1").selectpicker('refresh'); //刷新
	$('#' + elementId).selectpicker('destroy'); //销毁selectpicker 避免显示异常


	$('#' + elementId).selectpicker({
		noneSelectedText: "未选择", //默认显示内容
		// width: '100%' //弹出框宽度

	});


	if (!sqlParams) {
		$('#' + elementId).append($('<option value="">未选择</option>'));
		return
	}


	return $.ajax({
		method: 'get',
		url: '/app/PM/lib/ajaxGet',
		data: sqlParams,
		success: function (data) {
			// console.log('loadBootStrapSelector data',data);
			try {
				for (const n of data) {
					$('#' + elementId).append($('<option  data-tokens=' + n.token + ' value=' + n.value + '>' + n.option + '</option>'));
				}
				if (initValue) {
					$('#' + elementId).selectpicker('val', initValue);
				} else {
					$('#' + elementId).selectpicker('val', '');
				}

				$('#' + elementId).selectpicker('refresh');
			} catch (error) {
				console.log('#' + elementId, '刷新失败', error);
			}
		},
		error: function () {}
	})
}



//发送钉钉消息i={DDMsg:{at:'熊奇龙',msg:'钉钉消息'}}
const sendDDMsg = async ({
	at,
	msg
}) => {

	let rs = ''
	await $.ajax({
		method: 'post',
		url: '/app/public/sendDingTalk',
		data: {
			at: at,
			msg: msg
		},
		success: function (data, textStatus) {
			console.log('发送钉钉消息成功');
			rs = true

		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log('发送钉钉消息失败');
			rs = false
		}
	})

	return rs


}

/**
 *获得表单模块dataTable构造参数
 *
 * @param {*} i={sqlParams,dtParams}
 */
const getBillDataTableConfig = ({
	elementId, //元素id
	sqlParams, //sql参数
	dtParams //表参数
}) => {
	// console.log("getBillDataTableConfig i:" + JSON.stringify(i));

	//定义各类参数模版
	//常用sql语句ajax模版
	let dtConfigNormal = {
		ajax: {
			url: '/app/PM/lib/ajaxGet',
			data: {
				sql: 'sqlId',
				params: {}
			},
			dataSrc: ''
		},
		columns: [],
		order: [], //初始排序
		aLengthMenu: [
			[5, 10, 25],
			[5, 10, 25]
		], //设置每页显示数据条数的下拉选项
		iDisplayLength: 5, //每页初始显示5条记录
		select: true, //允许多选操作
		bAutoWidth: true, //自动列宽
		bStateSave: false, //true刷新保存当前页码,搜索信息
		// dom: 'Bfrtlip',
		dom: "<'row'<'col-sm-6'><'col-sm-6'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'col-sm-3'i><'col-sm-2'><'col-sm-7'p>>", //定义datatable组件位置
		language: languageCN
	}

	//常用sql语句ajax 简单模版
	let dtConfigSimple = {
		ajax: {
			url: '/app/PM/lib/ajaxGet',
			data: {
				sql: 'sqlId',
				params: {}
			},
			dataSrc: ''
		},
		columns: [],
		bAutoWidth: true, //自动列宽
		dom: "<'row'<'col-sm-12'tr>>",
		language: languageCN
	}


	//常用data直接赋值模版
	let dtConfigData = {
		data: [],
		columns: [],
		ordering: false, //禁止排序
		// select: false, //不允许多选操作
		// bStateSave: true, //刷新保存当前页码
		// dom: 'Bfrtlip',
		// bAutoWidth: true, //自动列宽
		dom: "<'row'<'col-sm-12'tr>>", //定义datatable组件位置
		language: languageCN
	}

	let dtConfigFull = {
		ajax: {
			url: '/app/PM/lib/ajaxGet',
			data: {
				sql: 'sqlId',
				params: {}
			},
			dataSrc: ''
		},
		columns: [],
		order: [], //初始排序
		select: true, //允许多选操作
		bAutoWidth: true, //自动列宽
		bStateSave: false, //true刷新保存当前页码,搜索信息
		aLengthMenu: [
			[5, 10, 25],
			[5, 10, 25]
		], //设置每页显示数据条数的下拉选项
		iDisplayLength: 10, //每页初始显示5条记录
		// ordering:false,//禁止排序
		order: [], //禁止初始排序
		// dom: 'Bfrtlip',
		dom: "<'row'<'col-sm-6'B><'col-sm-6'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'col-sm-2'l><'col-sm-3'i><'col-sm-7'p>>", //定义datatable组件位置
		buttons: [{
				text: '新增',
				action: function () {

					// 取消选择
					this.rows().deselect();
					//自动按下隐藏的自定义新增按钮
					$('#' + elementId + 'New').click();

				}
			},
			{
				text: '删除',
				action: function () {


					//自定义删除

					if ($('#' + elementId + 'Delete').length > 0) {
						$('#' + elementId + 'Delete').click()
					} else {
						let DBIDArray = []
						let dataSelected = this.rows({
							selected: true
						}).data();
						for (let n = 0; n < dataSelected.length; n++) {
							console.log(JSON.stringify(dataSelected[n]));
							DBIDArray.push(dataSelected[n].DBID)
						}
						// console.log(DBIDArray);

						if (DBIDArray.length > 0) {
							if (confirm('删除后无法恢复,请再次确认!')) {
								let sqlParams = {
									sql: 'delete',
									params: {
										tableId: sqlParams.params.tableId,
										data: DBIDArray
									}
								}
								let updateDataTableI = {
									elementId: elementId,
									sqlParams: sqlParams
								}
								updateDataTable(updateDataTableI);
							}
						} else {
							alert('请点击表格,至少选中一条数据!')
						}

					}

				}



			},
			'colvis',
			'excel',
			// 'csv', 
			// 'print',
			'copy',
			{
				text: '全选',
				action: function () {
					this.rows({
						page: 'current'
					}).select();
				}
			}, {
				text: '取消全选',
				action: function () {
					this.rows({
						page: 'current'
					}).deselect();
				}
			},

		],
		language: languageCN

	}


	let o;
	let dtConfig;

	//替换定义参数模版
	switch (dtParams.dtConfig) {
		case 'dtConfigFull':
			dtConfig = dtConfigFull;
			break;
		case 'dtConfigData':
			dtConfig = dtConfigData;
			break;
		case 'dtConfigSimple':
			dtConfig = dtConfigSimple;
			break;
		default:
			dtConfig = dtConfigNormal;
			break;
	}

	//修改参数

	if (dtParams.data) {
		dtConfig.data = dtParams.data;
	}

	if (sqlParams) {
		if (sqlParams.sqlId) {
			dtConfig.ajax.data.sql = sqlParams.sqlId;
		}
		if (sqlParams.params) {
			dtConfig.ajax.data.params = sqlParams.params;
		}
	}

	if (dtParams) {
		for (const p in dtParams) {
			dtConfig[p] = dtParams[p];
		}

	}


	o = dtConfig;

	return o;

}



/**
 *初始化工作流程表单模块DataTable
 *
 * @param {*} i={elementId,sqlParams,dtParams}
 */
const loadBillDataTable = async ({
	elementId, //元素id
	sqlParams, //sql参数
	dtParams //表格参数
}) => {

	$('#' + elementId).DataTable().destroy(); //销毁原数据表格,防止加载错误
	//获得r1={dataTable 参数}
	let r1 = getBillDataTableConfig({
		elementId,
		sqlParams,
		dtParams
	});
	// console.log('r1:' + JSON.stringify(r1));
	$('#' + elementId).DataTable(r1);

}