//datatable  语言库
const languageCN = {
    "sProcessing": "处理中...",
    "sLengthMenu": "显示 _MENU_ 项结果",
    "sZeroRecords": "没有匹配结果",
    "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
    "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
    "sInfoPostFix": "",
    "sSearch": "搜索:",
    "sUrl": "",
    "sEmptyTable": "表中数据为空",
    "sLoadingRecords": "载入中...",
    "sInfoThousands": ",",
    "oPaginate": {
        "sFirst": "首页",
        "sPrevious": "上页",
        "sNext": "下页",
        "sLast": "末页"
    },
    "buttons": {
        "copy": "复制",
        "excel": "导出excel",
        "print": "打印",
        "colvis": "隐藏列"
    }
}



/**
 *获取格式化当前日期
 *
 * @returns
 */
const currentDate = () => {
    var now = new Date();
    var year = now.getFullYear(); //年
    var month = now.getMonth() + 1; //月
    var day = now.getDate(); //日   
    var clock = year + "-";
    if (month < 10)
        clock += "0";
    clock += month + "-";
    if (day < 10)
        clock += "0";
    clock += day + "";
    return clock;
}



/**
 *根据传入参数调整dataTable表格创建参数
 *
 * @param {*} i={elementId,sqlParams,dtParams}
 */
const divDataTableParams = (i) => {

    // console.log('i:' + JSON.stringify(i));

    let defaultParams = {
        elementId: i.elementId,
        params: {
            ajax: {
                url: '/app/RP/lib/ajaxGet',
                data: {
                    sql: 'select',
                    params: {
                        tableId: i.sqlParams.tableId,
                        filter: i.sqlParams.filter
                    }
                },
                dataSrc: ''
            },
            columns: [],
            select: true, //允许多选操作
            bStateSave: true, //刷新保存当前页码
            // dom: 'Bfrtlip',
            dom: "<'row'<'col-sm-6'B><'col-sm-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-2'l><'col-sm-3'i><'col-sm-7'p>>", //定义datatable组件位置
            buttons: [
                'copy',
                'excel',
                // 'csv', 
                'print',
                'colvis',
                {
                    text: '全选',
                    action: function () {
                        this.rows({
                            page: 'current'
                        }).select();
                        // console.log(this.rows());
                    }
                }, {
                    text: '取消全选',
                    action: function () {
                        this.rows({
                            page: 'current'
                        }).deselect();
                        // console.log(this.rows());
                    }
                },
                {
                    text: '读取选中',
                    action: function () {
                        let dataSelected = this.rows({
                            selected: true
                        }).data();

                        for (let n = 0; n < dataSelected.length; n++) {
                            console.log(JSON.stringify(dataSelected[n]));
                        }
                    }
                }, {
                    text: '新增',
                    action: function () {
                        //清空div
                        clearFormInputs({
                            elementId: i.elementId + 'Form'
                        })
                        //默认有效
                        $('#effective').selectpicker('val', '是')
                        //打开面板
                        $('#' + i.elementId + 'ModalOpen').click();

                    }
                },
                {
                    text: '删除',
                    action: function () {
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
                                        tableId: i.sqlParams.tableId,
                                        data: DBIDArray
                                    }
                                }
                                let updateDataTableI = {
                                    elementId: i.elementId,
                                    sqlParams: sqlParams
                                }
                                updateDataTable(updateDataTableI);
                            }
                        } else {
                            alert('请点击表格,至少选中一条数据!')
                        }

                    }
                },
            ],
            language: languageCN
        }
    }

    // defaultParams.elementId = i.elementId;
    for (const p in i.dtParams) {
        if (i.dtParams.hasOwnProperty(p)) {
            defaultParams.params[p] = i.dtParams[p];
        }
    }
    o = defaultParams;

    // console.log("o:"+JSON.stringify(o));

    return o;

}



/**
 *加载datatable
 *
 * @param {*} i={elementId,sqlParams,dtParams}
 */
const loadDataTable = async (i) => {

    let r1 = divDataTableParams(i);
    // console.log("r1:"+JSON.stringify(r1));

    let table = $('#' + r1.elementId).DataTable(r1.params);

    // // 新增按钮
    // $('#btnAdd').click(function () {
    //     //清空div
    //     clearFormInputs({
    //         elementId: 'rp_faultClasses'
    //     })
    //     //默认有效
    //     $('#effective').selectpicker('val', '是')
    //     //打开面板
    //     $('#btnModal').click();

    // })




    $('#' + r1.elementId + ' tbody').on('dblclick', 'tr', function () {

        let table = $('#' + r1.elementId).DataTable();

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
        let dataSelect = table.row('.selected').data();
        //清空Form原有数据
        clearFormInputs({
            elementId: r1.elementId
        })
        //填写div匹配数据
        fillDivInputs({
            elementId: r1.elementId,
            params: dataSelect
        })
        //打开面板
        $('#' + r1.elementId + 'ModalOpen').click();

    });

    //保存按钮
    $('#' + i.elementId + 'Save').click(function () {
        let formData = getFormData({
            elementId: r1.elementId
        })

        let sqlParams = {
            sql: 'replace',
            params: formData
        }

        let i = {
            elementId: r1.elementId,
            sqlParams: sqlParams
        }

        console.log('save i:' + JSON.stringify(i));


        updateDataTable(i);

    })

}


/**
 *加载bootStrapSelect 数据
 *
 * @param {*} i={elementId,initValue,sqlParams}
 */
const loadBootStrapSelector = async (i) => {
    $('#' + i.elementId).empty(); //用select组件不用先清空

    $.ajax({
        method: 'get',
        url: '/app/RP/lib/ajaxGet',
        data: i.sqlParams,
        success: function (data) {

            $('#' + i.elementId).selectpicker({
                noneSelectedText: "未选择" //默认显示内容
            });

            $('#' + i.elementId).append($('<option value="">未选择</option>'));

            for (const n in data) {
                if (data.hasOwnProperty(n)) {
                    $('#' + i.elementId).append($('<option  data-tokens=' + data[n].token + ' value=' + data[n].option + '>' + data[n].option + '</option>'));
                }
            }

            if (i.initValue !== undefined) {
                $('#' + i.elementId).selectpicker('val', i.initValue);
            }

            $('#' + i.elementId).selectpicker('refresh');
        },
        error: function () {}
    })
}


/**
 *加载日期选择器
 *
 * @param {*} i={elementId,params}
 */
const loadDatePicker = async (i) => {

    let defaultParams = {
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        startDate: currentDate(), //设置最小日期
        // endDate: $('#limitDate').val() //设置最大日期
        format: 'yyyy-mm-dd', //年-月-日
    }

    for (const p in i.params) {
        if (i.params.hasOwnProperty(p)) {
            defaultParams[p] = i.params[p];
        }
    }

    $('#' + i.elementId).datetimepicker(defaultParams);
}


/**
 *清空div内所有input,select,textare
 *
 * @param {*} i={elementId}
 */
const clearFormInputs = (i) => {
    $("#" + i.elementId + " input").val("");
    $('#' + i.elementId + " select").selectpicker('val', '');
    $("#" + i.elementId + " textarea").val("");
}


/**
 *用数据填写div内匹配input 值
 *
 * @param {*} i={elementId,params}
 */
const fillDivInputs = async (i) => {

    console.log('fillDivInputs i:' + JSON.stringify(i.params));

    for (const p in i.params) {
        if (i.params.hasOwnProperty(p)) {
            // 判断是否存在此元素
            if ($("#" + p).length > 0) {
                // 判断此元素是否为select
                if ($("#" + p).is("select")) {
                    $("#" + p).selectpicker('val', i.params[p])
                } else {
                    $("#" + p).val(i.params[p]);
                }
            }
        }
    }

}


/**
 *根据fromid 获取form内所有元素值
 *
 * @param {*} i={elementId}
 */
const getFormData = (i) => {


    let tableId = i.elementId;
    let data = [];
    //同时遍历3类form元素
    $('#' + i.elementId + "Form input,select,textarea").each(function () {
        let id = this.id;
        let value = this.value;
        if (id !== '') {
            data.push({
                [id]: value
            })
        }
    })

    o = {
        tableId: tableId,
        data: data
    }

    console.log('getFormData:' + JSON.stringify(data));
    return o;

}


/**
 *更新数据库中数据
 *
 * @param {*} i={sqlParams}
 */
const replaceDBData = async (i) => {
    console.log(i);
    let o = await $.ajax({
        method: 'post',
        url: '/app/RP/lib/ajaxPost',
        data: i,
        success: function (data) {

        },
        error: function () {}
    })

    // console.log("o:"+JSON.stringify(o));

    return o;

}



/**
 *用于新增,更新,删除表格数据后刷新表格数据
 *
 * @param {*} i={elementId,sqlParams}
 */
const updateDataTable = async (i) => {

    console.log("updateDataTable runing");


    let table = $('#' + i.elementId).DataTable();

    let r1 = await replaceDBData(i.sqlParams);
    console.log('r1:' + JSON.stringify(r1));

    if (r1.affectedRows > 0) {
        alert('已成功更新数据库!');
        //刷新页面
        // location.replace(location)
        // history.go(0)

        //不刷新页面直接更新dataTable
        table.ajax.reload();
        $("#" + i.elementId + "ModalClose").click();
    }



}