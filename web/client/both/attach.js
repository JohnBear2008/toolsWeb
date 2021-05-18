function qryBoard() {
	genParse();
	var pcode = glbpcode; pcode = myTrim(pcode);
	var pname = glbpname; pname = myTrim(pname);
	var PartsCode = pcode;
	var PartsName = pname; 
	var PicKind = '2'; 
	var KeyName = '';
	var reportType = 'Boardqry';
	var taskData = { "reportType": reportType, "Category": Category, "PicKind": PicKind, 
	"PartsCode": PartsCode , "PartsName": PartsName };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMErp/getRoute",
		success: function (data) {
			console.log("皮壳 ", JSON.stringify(data));
			if (data != undefined && data.length > 0) {
				let dataARR = data;
				var status = dataARR[0].status;
				console.log("皮亀 ", status);
				if (status == 'OK') {
					$("#boaNHead").val(glbpcode);
					$("#boaOHead").val(glbpname);
					$("#RawZone").val(dataARR[0].RawZone);
					$("#RawNo").val(dataARR[0].RawNo);
					$("#RawQty").val(dataARR[0].RawQty);
					$('#boardWin').window('open');
				} else {
					$("#boaNHead").val(glbpcode);
					$("#boaOHead").val(glbpname);
					$("#RawZone").val('');
					$("#RawNo").val('');
					$("#RawQty").val('');
					$('#boardWin').window('open');
				}
			} else {
				console.log("皮龙");
				$("#boaNHead").val(glbpcode);
				$("#boaOHead").val(glbpname);
				$("#RawZone").val('');
				$("#RawNo").val('');
				$("#RawQty").val('');
				$('#boardWin').window('open');
			}
		},
		error: function () {
		}
	})
}
function uptBoard() {
	genParse();
	var pcode = glbpcode; pcode = myTrim(pcode);
	var pname = glbpname; pname = myTrim(pname);
	var PartsCode = pcode;
	var PartsName = pname;
	var RawZone = $("#RawZone").val();
	var RawNo = $("#RawNo").val();
	var RawQty = $("#RawQty").val();
	console.log("皮痒", PartsCode);
	var reportType = 'Boardedit';
	var taskData = { "reportType": reportType, "Category": Category, "PartsCode": PartsCode, "PartsName": PartsName , 
	"RawNo": RawNo, "RawQty": RawQty, "RawZone": RawZone };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMErp/getRoute",
		success: function (data) {
			if (data.status == 'Fail') {
				layer.msg("无法修改");
				return;
			}
			if (data.affectedRows !== 0) {
				swal("Good job!", "修改成功!", "success")
					.then((value) => {
						const json2 = JSON.stringify(data);
						const bjob = JSON.parse(json2);
						// $("#qtyOHead").val(" 旧品名: " + bjob.PartsOldName + " 旧编码: " + bjob.PartsOldCode);
						// $('#boardWin').window('open');
					});
			};
		},
		error: function () {
		}
	})
}
function addLink(DBData) {
	console.log("年爽", DBData.lineItem, DBData.linePos, DBData.lineNick);
	var reportType = 'Linkadd';
	var taskData = {
		"reportType": reportType, "DBData": DBData
	};
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMErp/getRoute",
		success: function (data) {
			//         swal("成功数据:" + JSON.stringify(data));
			if (data.affectedRows !== 0) {
				swal("Good job!", "新增成功!", "success")
					.then((value) => {
						$("#tableLink").dataTable().fnDestroy();
						var DataPara = {
							"tableID": "#tableLink",
							"DBTable": "bom_connect",
							"DBCode": DBData.lineItem,
							"lineRole": DBData.lineRole,
							"lineItem": DBData.lineItem,
						}
						var columnsData = [
							{ data: 'DBID', "visible": false },
							{ data: 'lineID' },
							{ data: 'lineNick', "width": "120px" },
							{ data: 'lineItem', "width": "80px" },
							{ data: 'linePos' },
							{ data: 'lineRole', "visible": false },
						];
						showLink(DataPara, columnsData);
						table = $('#tableLink').DataTable();
						$('#tableLink tbody').on('click', 'tr', function () {
							$(this).removeClass('selected');
							if ($(this).hasClass('selected')) {
								$(this).removeClass('selected');
							} else {
								table.$('tr.selected').removeClass('selected');
								$(this).addClass('selected');
							}
							var dataSelect = table.row('.selected').data();
							picID = dataSelect.lineID;
							picPos = dataSelect.linePos;
							picRole = dataSelect.lineRole;
							picItem = dataSelect.lineItem;
							picNick = dataSelect.lineNick;
							console.log("选妃", picPos);
						});
						var cntt = 0;
						$('#tableLink tbody').on('dblclick', 'tr', function () {
							cntt++;
						});
					});
			}
		},
		error: function (err) {
			if (err.responseText.indexOf("ER_DUP_ENTRY") !== -1) {
				swal("系统中已存在重复数据,请检查!");
			} else {
				swal("失败数据:" + JSON.stringify(err));
			}
		}
	});

}
//AJAX删除数据库数据函数
function delLink(DBData) {
	console.log("年爽", DBData.lineItem, DBData.linePos, DBData.lineNick, DBData.lineID);
	var DataPara = {
		"tableID": "#tableLink",
		"DBTable": "bom_connect",
		"DBCode": DBData.lineItem,
		"lineRole": DBData.lineRole,
		"lineItem": DBData.lineItem,
	}
	var columnsData = [
		{ data: 'DBID', "visible": false },
		{ data: 'lineID' },
		{ data: 'lineNick', "width": "120px" },
		{ data: 'lineItem', "width": "80px" },
		{ data: 'linePos' },
		{ data: 'lineRole', "visible": false },
	];
	$("#tableLink").dataTable().fnDestroy();
	showLink(DataPara, columnsData);
	var reportType = 'Linkdel';
	var taskData = {
		"reportType": reportType, "DBData": DBData
	};
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMErp/getRoute",
		success: function (data) {
			//  swal("成功数据:"+JSON.stringify(data));
			if (data.affectedRows != 0) {
				//                swal("删除数据成功!");
				//                window.location.reload();
				swal("Good job!", "删除数据成功!", "success")
					.then((value) => {
						$("#tableLink").dataTable().fnDestroy();
						var DataPara = {
							"tableID": "#tableLink",
							"DBTable": "bom_connect",
							"DBCode": DBData.lineItem,
							"lineRole": DBData.lineRole,
							"lineItem": DBData.lineItem,
						}
						var columnsData = [
							{ data: 'DBID', "visible": false },
							{ data: 'lineID' },
							{ data: 'lineNick', "width": "120px" },
							{ data: 'lineItem', "width": "80px" },
							{ data: 'linePos' },
							{ data: 'lineRole', "visible": false },
						];
						showLink(DataPara, columnsData);
						table = $('#tableLink').DataTable();
						$('#tableLink tbody').on('click', 'tr', function () {
							$(this).removeClass('selected');
							if ($(this).hasClass('selected')) {
								$(this).removeClass('selected');
							} else {
								table.$('tr.selected').removeClass('selected');
								$(this).addClass('selected');
							}
							var dataSelect = table.row('.selected').data();
							picID = dataSelect.lineID;
							picPos = dataSelect.linePos;
							picRole = dataSelect.lineRole;
							picItem = dataSelect.lineItem;
							picNick = dataSelect.lineNick;
							console.log("选妃", picPos);
						});
						var cntt = 0;
						$('#tableLink tbody').on('dblclick', 'tr', function () {
							cntt++;
						});
					});
			} else {
				//                swal("删除数据失败!");
				swal("Good job!", "未有数据删除!", "warning")
					.then((value) => {
						//window.location.reload();
						$('#locateWin').window('close');
						$('#locateWin').window('open');
					});

			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) { }
	});
}

//AJAX更新数据库数据函数
// function uptLink(DBData, showText) {
// 	console.log("日爽");
// 	$.ajax({
// 		method: 'post',
// 		url: '/app/TMErp/uptDevice',
// 		data: DBData,
// 		success: function (data, textStatus) {
// 			swal("成功数据:" + JSON.stringify(data));
// 			if (data.changedRows != 0) {
// 				//                swal(showText+"更新数据成功!");
// 				//               window.location.reload();
// 				swal("Good job!", "更新成功!", "success")
// 					.then((value) => {
// 						window.location.reload();
// 					});

// 			} else {
// 				//                swal(showText+"未有数据更新!");
// 				//                window.location.reload();
// 				swal("Good job!", "无数据更新!", "warning")
// 					.then((value) => {
// 						window.location.reload();
// 					});
// 			}
// 		},
// 		error: function (XMLHttpRequest, textStatus, errorThrown) { }
// 	});
// }
function showDevice(DataPara, columnsData) {
	//alert(JSON.stringify(DataPara));
	$(DataPara.tableID).DataTable({
		ajax: {
			url: '/app/TMErp/showDevice',
			data: {
				DBTable: DataPara.DBTable
			},
			dataSrc: ''
		},
		columns: columnsData,
		aaSorting: [0, 'desc'], //默认排序
		language: languageCN

	});
}
//函数 检查权限函数
function validAuthority(selectSQL, AuthorityID) {
	let checkResult = false;
	// $.ajax({
	// 	method: 'get',
	// 	data: selectSQL,
	// 	url: "/app/TMErp/getRouteSQL",
	// 	async: false, //必须同步
	// 	success: function (data) {
	// 		//  console.log("authority:"+JSON.stringify(data[0]["roleAuthorities"]));
	// 		if (data[0]["roleAuthorities"] != null) {
	// 			let authorityArray = JSON.parse(data[0]["roleAuthorities"]);
	// 			if (authorityArray.length > 0) {
	// 				for (let i = 0; i < authorityArray.length; i++) {
	// 					//  console.log(authorityArray[i].val);
	// 					if (AuthorityID == authorityArray[i].val) {
	// 						checkResult = true;
	// 						break; //跳出循环提高效率
	// 					}
	// 				}
	// 			}
	// 		}
	// 	},
	// 	error: function () { }
	// })
	checkResult = true; //硬塞权限 TEST
	if (checkResult == false) {
		alert("监测到当前账号无该操作权限,请联系管理员授权!");
	}
	return checkResult;
}

//函数 普通格式获取指定SQL数据加载至selector中
function getSelectBox(selectSQL, selectorID, InitValue) {
	$(selectorID).empty();
	$(selectorID).append($('<option value="">未选择</option>'));
	// $.ajax({
	// 	method: 'get',
	// 	data: selectSQL,
	// 	url: "/app/PM/getSQLDBData",
	// 	success: function (data) {
	// 		$(selectorID).append($('<option value="">未选择</option>'));
	// 		if (InitValue == undefined || InitValue == "") {
	// 			for (i = 0; i < data.length; i++) {
	// 				$(selectorID).append($('<option value=' + data[i].DBID + '>' + data[i].selectTitle + '</option>'));
	// 			}
	// 		} else {
	// 			for (i = 0; i < data.length; i++) {
	// 				$(selectorID).append($('<option value=' + data[i].DBID + '>' + data[i].selectTitle + '</option>'));
	// 				if (Fun_getSelectText(data[i].selectTitle) == InitValue || data[i].DBID == InitValue) {
	// 					$(selectorID).val(data[i].DBID);
	// 				}
	// 			}
	// 		}
	// 	},
	// 	error: function () { }
	// })
}
//检查输入信息-------------------
function checkinput(Data) {
	if (Data.staffID == "") {
		swal('工号不能为空，请检查!');
		return false;
	} else if (Data.staffName == "") {
		swal('姓名不能为空，请检查!');
		return false;
	} else if (Data.staffUser == "") {
		swal('英文账号不能为空，请检查!');
		return false;
	}
	if (alphacheck(Data.staffUser)) {
		// swal("输入检核通过！");
	} else {
		return false;
	}
	if (digitcheck(Data.staffID)) {
		// swal("输入检核通过！");
	} else {
		return false;
	}
	return true;
}
function digitcheck(nubmer) {
	var re = /^[0-9]+.?[0-9]*$/;
	if (re.test(nubmer)) {
		return true;
	} else {
		swal("请输入数字");
		return false;
	}
}
function alphacheck(str) {
	var parent = /^[A-Za-z]+$/;
	if (parent.test(str)) {
		return true;
	}
	else {
		swal("只能输入英文字母");
		return false;
	}
}