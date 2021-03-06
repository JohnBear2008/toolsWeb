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
        "colvis": "隐藏列",
        "excel": "导出excel",
        "print": "打印",
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
 *格式化日期函数
 *
 * @param {*} fmt
 * @param {*} date
 * @returns
 */
const dateFormat = (date, fmt) => {
    //先格式化为日期,缺少此句 get函数无法执行
    date = new Date(date);
    let o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "H+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 *位数不够前置自动补0函数
 *
 * @param {*} num  数值
 * @param {*} length 长度
 * @returns
 */
const PrefixInteger = (num, length) => {
    return (Array(length).join('0') + num).slice(-length);
}


/**
 *对字符串进行处理,替换其中特殊字符,避免后台生成sql执行出错 
 *
 * @param {*} text
 */
const replaceURI = (text) => {
    if (text && typeof text == 'string') {
        text = text.replace(/'/g, '')
        text = text.replace(/"/g, '')
    }
    return text
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
                url: '/app/PM/lib/ajaxGet',
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
            buttons: [{
                    text: '新增',
                    action: function () {

                        // 取消选择
                        this.rows().deselect();
                        //清空div
                        initFormInputs({
                            formId: i.elementId + 'Form'
                        })

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

    $('#' + r1.elementId + ' tbody').on('dblclick', 'tr', function () {

        let table = $('#' + r1.elementId).DataTable();

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
        let dataSelect = table.row('.selected').data();
        //清空Form原有数据
        initFormInputs({
            formId: r1.elementId + 'Form'
        })
        //填写div匹配数据
        fillFormInputs({
            formId: r1.elementId + 'Form',
            params: dataSelect
        })
        //打开面板
        $('#' + r1.elementId + 'ModalOpen').click();

    });

    //保存按钮
    $('#' + i.elementId + 'Save').click(function () {
        let formData = getFormData({
            formId: r1.elementId + 'Form'
        })

        let sqlParams = {
            sql: 'replace',
            params: formData
        }

        let i = {
            elementId: r1.elementId,
            sqlParams: sqlParams
        }

        // console.log('save i:' + JSON.stringify(i));
        updateDataTable(i);

    })

    // 关闭事件重置选中datatable选中,避免显示错误
    $('#' + r1.elementId + 'Modal').on('hidden.bs.modal', function () {
        table.$('tr.selected').removeClass('selected');
    })

}


/**
 *根据传入参数调整 子dataTable表格创建参数
 *
 * @param {*} i={elementId,sqlParams,dtParams,parmas:{fixInitValues}}
 */
const divSubDataTableParams = (i) => {

    // console.log('i:' + JSON.stringify(i));

    let defaultParams = {
        elementId: i.elementId,
        params: {
            ajax: {
                url: '/app/PM/lib/ajaxGet',
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
            // bStateSave: true, //刷新保存当前页码
            // dom: 'Bfrtlip',
            dom: "<'row'<'col-sm-6'B>>" +
                "<'row'<'col-sm-12'tr>>", //定义datatable组件位置
            buttons: [{
                    text: '新增',
                    action: function () {
                        //清空div
                        initFormInputs({
                            formId: i.elementId + 'Form',
                            params: i.params.fixInitValues
                        })

                        // console.log(JSON.stringify({
                        //     elementId: i.elementId + 'Form',
                        //     params: i.params.fixInitValues
                        // }));


                        //打开面板
                        $('#' + i.elementId + 'Panel').show();

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
                            // console.log(JSON.stringify(dataSelected[n]));
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
 *加载子 datatable
 *
 * @param {*} i={elementId,sqlParams,dtParams,parmas:{fixInitValues}}
 */
const loadSubDataTable = async (i) => {

    let r1 = divSubDataTableParams(i);
    // console.log("r1:"+JSON.stringify(r1));

    $('#' + r1.elementId + 'Panel').hide();

    $('#' + r1.elementId).DataTable().destroy(); //销毁原数据表格,防止加载错误

    let table = $('#' + r1.elementId).DataTable(r1.params);


    $('#' + r1.elementId + ' tbody').on('click', 'tr', function () {

        let table = $('#' + r1.elementId).DataTable();

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
        $('#' + r1.elementId + 'Panel').hide();

    });

    $('#' + r1.elementId + ' tbody').on('dblclick', 'tr', function () {

        let table = $('#' + r1.elementId).DataTable();

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
        let dataSelect = table.row('.selected').data();
        //清空Form原有数据
        initFormInputs({
            formId: r1.elementId + 'Form'
        })
        //填写div匹配数据
        fillFormInputs({
            formId: r1.elementId + 'Form',
            params: dataSelect
        })
        //打开面板
        $('#' + r1.elementId + 'Panel').show();

    });




    //保存按钮
    $('#' + i.elementId + 'Save').click(function () {
        let formData = getSubFormData({
            formId: r1.elementId + 'Form'
        })

        let sqlParams = {
            sql: 'replace',
            params: formData
        }

        let i = {
            elementId: r1.elementId,
            sqlParams: sqlParams
        }

        // console.log('save i:' + JSON.stringify(i));
        updateDataTable(i);

    })

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
            // console.log('loadBootStrapSelector data', data);
            try {

                //r-添加option
                $('#' + elementId).append($('<option value="">未选择</option>'));

                for (const n of data) {
                    $('#' + elementId).append($('<option  data-tokens=' + n.token + ' value="' + n.value + '">' + n.option + '</option>'));
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


/**
 *加载多个有相同参数的selector
 *
 * @param {*} {elementIds,sqlParams,initValue}
 */
const loadBootStrapSelectors = async ({
    elementIds,
    sqlParams,
    initValue
}) => {

    if (!elementIds || elementIds.length === 0) {
        alert('loadBootStrapSelectors elementIds 参数错误')
        return
    }

    for (const elementId of elementIds) {
        loadBootStrapSelector({
            elementId: elementId,
            sqlParams: sqlParams,
            initValue: initValue
        })
    }

}

/**
 *根据选项数组构建selector
 *
 * @param {*} {elementId,options,initValue}
 */
const loadDataSelector = ({
    elementId,
    options,
    initValue
}) => {
    $('#' + elementId).empty(); //清空原有选项
    // $("#extraSelect1").selectpicker('refresh'); //刷新
    $('#' + elementId).selectpicker('destroy'); //销毁selectpicker 避免显示异常

    $('#' + elementId).selectpicker({
        noneSelectedText: "未选择" //默认显示内容
    });
    if (!options) {
        $('#' + elementId).append($('<option value="">未选择</option>'));
        return
    }
    for (option of options) {
        $('#' + elementId).append($('<option  data-tokens=' + option.token + ' value=' + option.value + '>' + option.option + '</option>'));
    }

    let defaultValue = initValue || '';
    console.log('default', defaultValue);

    $('#' + elementId).selectpicker('val', defaultValue);

    console.log($('#' + elementId + ' option:selected').val());

    $('#' + elementId).selectpicker('refresh');
    // $('#' + elementId).selectpicker('render');

}


/**
 *加载日期选择器
 *
 * @param {*} i={elementId,params}
 */
const loadDatePicker = async ({
    elementId,
    params
}) => {
    // console.log(JSON.stringify(i))

    let defaultParams = {
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2, //4年,3月,2日,1时,0 分
        minView: 2, //4年,3月,2日,1时,0 分
        forceParse: 0,
        // startDate: currentDate(), //设置最小日期
        // endDate: $('#limitDate').val() //设置最大日期
        format: 'yyyy-mm-dd', //年-月-日
    }

    if (params) {
        for (let p in params) {
            defaultParams[p] = params[p];
        }
    }

    $('#' + elementId).datetimepicker(defaultParams);
}


/**
 *用于初始话相同设置的时间选择器
 *
 * @param {*} {
 *     elementIds,
 *     params
 * }
 */
const loadDatePickers = async ({
    elementIds,
    params
}) => {
    if (Object.prototype.toString.call(elementIds) !== '[object Array]') {
        console.log('loadDatePickers 参数是错误,非数组!');
        return
    }
    if (elementIds.length > 0) {
        for (const elementId of elementIds) {
            loadDatePicker({
                elementId,
                params
            })
        }
    }

}


/**
 *清空div内所有input,select,textare
 *
 * @param {*} i={formId}
 */
const clearFormInputs = (i) => {

    $("#" + i.formId).find('p').text("");;
    $("#" + i.formId).find('select').selectpicker('val', '');
    $("#" + i.formId).find('input,textarea').val("");

    // $("#" + i.formId + " p").text("");
    // $("#" + i.formId + " input").val("");
    // $('#' + i.formId + " select").selectpicker('val', '');
    // $("#" + i.formId + " textarea").val("");
}


/**
 *初始化Form内inputs状态,先清空,再补充固定值
 *
 * @param {*} i={formId,params}
 */
const initFormInputs = (i) => {

    //清空数据
    clearFormInputs(i);

    //设置select 选中第一个
    let selectArr = $("#" + i.formId).find('select');
    for (const n of selectArr) {
        // n.options[0].selected = true;
        // console.log('n options:', n.options);
        //无待选项则不更新,避免报错导致整个页面加载失败
        if (n.options.length > 0) {
            // $(n).selectpicker('val', n.options[0].value);
            $(n).selectpicker('val', '');
        }
    }
}


/**
 *用数据填写div内匹配input 值
 *
 * @param {*} i={formId,params}
 */
const fillFormInputs = (i) => {
    // console.log('fillFormInputs i:' + JSON.stringify(i));
    for (let p in i.params) {
        // 判断是否存在此元素
        if ($("#" + i.formId + '-' + p).length > 0) {
            //  console.log(p);
            //根据元素不同类型选定不同赋值方式
            switch (true) {
                case $("#" + i.formId + '-' + p).is("select") === true:
                    // console.log($("#" + i.formId + '-' + p)[0]);

                    try {
                        if ($("#" + i.formId + '-' + p)[0].options.length > 0) {
                            // console.log('multiple', $("#" + i.formId + '-' + p).attr("multiple"));

                            //多选
                            if ($("#" + i.formId + '-' + p).attr("multiple")) {
                                let arr = i.params[p].split(',');
                                $("#" + i.formId + '-' + p).selectpicker('val', arr);
                            } else {
                                $("#" + i.formId + '-' + p).selectpicker('val', i.params[p])
                            }
                            $("#" + i.formId + '-' + p).selectpicker('refresh')
                        }
                    } catch (error) {
                        console.log("#" + i.formId + '-' + p, i.params[p], '赋值失败');
                    }

                    // console.log('c1');

                    break;
                case $("#" + i.formId + '-' + p).is("p") === true:
                    $("#" + i.formId + '-' + p).text(i.params[p]);
                    // console.log('c2');
                    break;
                default:
                    $("#" + i.formId + '-' + p).val(i.params[p]);
                    // console.log('cd');
                    break;
            }
        }
    }
}


/**
 *用数据填写table内匹配input 值,主要用于打印预览
 *
 * @param {*} i={tableId,params}
 */
const fillTableInputs = (i) => {
    // console.log('fillFormInputs i:' + JSON.stringify(i));
    for (let p in i.params) {
        // 判断是否存在此元素
        if ($("#" + i.tableId + '-' + p).length > 0) {
            $("#" + i.tableId + '-' + p).text(i.params[p]);
        }
    }
}

/**
 *用数据填写table 数据行,用于打印预览
 *
 * @param {*} i={tableId,cols,data}
 */
const fillTableRows = (i) => {
    // console.log('fillFormInputs i:' + JSON.stringify(i));
    let tr = '';
    for (const n of i.data) {

        let td = ''
        for (const p of i.cols) {

            td = td + '<td>' + n[p] + '</td>'
        }
        tr = tr + '<tr>' + td + '</tr>'
    }
    $("#" + i.tableId + ' tbody').html(tr);

}

/**
 *初始化并填写form 内inputs
 *
 * @param {*}  i={formId,params}
 */
const initAndFillFormInputs = async (i) => {
    initFormInputs(i);
    fillFormInputs(i);
}




/**
 *根据fromid 获取subform内所有元素值
 *
 * @param {*} i={formId}
 */
const getSubFormData = (i) => {

    let tableId = i.formId;
    let data = [];
    //同时遍历3类form元素
    $('#' + i.formId + " input,select,textarea").each(function () {
        let id = this.id;
        let value = replaceURI(this.value);
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

    // console.log('getFormData:' + JSON.stringify(data));
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
 *用于新增,更新,删除表格数据后刷新表格数据
 *
 * @param {*} i={elementId,sqlParams}
 */
const updateDataTable = async (i) => {

    // console.log("updateDataTable runing");

    // console.log('i old:' + JSON.stringify(i));


    let table = $('#' + i.elementId).DataTable();

    //讲i.sqlParams中的data 调整为普通数组格式

    if (i.sqlParams.sql === 'replace') {
        i.sqlParams.params.data = [formDataToRowData(i.sqlParams.params.data)];
        // console.log('i new:' + JSON.stringify(i));
    }

    let r1 = await postDBData(i.sqlParams);
    // console.log('r1:' + JSON.stringify(r1));

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
 *根据sql 填写指定form内容
 *
 * @param {*} i={formId,sqlParams}
 */
const fillFormBySql = async (i) => {
    // console.log('fillFormBySql i:' + JSON.stringify(i));
    let r = await getDataBySql(i.sqlParams);
    // console.log('r:' + JSON.stringify(r));
    //初始化并填写form内inputs
    fillFormInputs({
        formId: i.formId,
        params: r[0]
    })
}



/**
 *根据fromid 获取form内所有元素值
 *
 * @param {*} i={formId}
 */
const getFormData = (i) => {
    let tableId = i.formId.split('Form')[0];
    let data = [];
    //同时遍历3类form元素
    // $('#' + i.formId + ' p,input,select,textarea').each(function () {
    $('#' + i.formId).find('p,input,select,textarea').each(function () {

        // console.log("this:" + JSON.stringify(this));

        let id = this.id.split('-')[1];
        let value;

        if ($(this).is('p')) {
            value = $(this).text();
        } else {
            // value = this.value;
            value = $(this).val();
        }

        //统一将null undefined 转换为空
        if (!value) {
            value = '';
        }

        //判断是否为数组,处理数组值['a','b','c']=>a,b,c
        if (Object.prototype.toString.call(value) == '[object Array]') {
            let valueStr = '';
            for (const n of value) {
                valueStr = valueStr + ',' + n;
            }
            valueStr = valueStr.substring(1, valueStr.length);
            value = valueStr
        }

        //处理异常字符 如 '," 
        value = replaceURI(value);


        if (id) {
            data.push({
                [id]: value
            })
        }
    })

    o = {
        tableId: tableId,
        data: data
    }

    // console.log('getFormData:' + JSON.stringify(data));
    return o;
}

/**
 *转换数据格式,将form获取的数据格式转换成dataTable的row 数据格式
 *
 * @param {*} i
 */
const formDataToRowData = (i) => {

    // console.log("formDataToRowData i:" + JSON.stringify(i));
    let rowData = {}

    for (let n of i) {
        let paramName = Object.keys(n)[0];
        // console.log('paramName:' + paramName)
        let paramValue = n[paramName];
        // console.log('paramValue:' + paramValue)
        rowData[paramName] = paramValue
    }

    // console.log("rowData:" + JSON.stringify(rowData));

    return rowData;
}


/**
 *获取form内的数据格式,直接转换为可发送的数据格式
 *
 * @param {*} i={formId}
 */
const getPostFormData = (i) => {

    let o;
    let r1 = getFormData(i)
    // console.log('r1:' + JSON.stringify(r1));

    r1.data = [formDataToRowData(r1.data)]
    o = r1;

    // console.log("o:" + JSON.stringify(o));

    return o;

}


/**
 *将dataTable的数据格式转化为普通的数组
 *
 * @param {*} i:dataTableObject
 */
const tableDataToArray = (i) => {
    let arr = []
    for (let n = 0; n < i.length; n++) {
        arr.push(i[n]);
    }
    return arr;
}

/**
 *将数组转换为(a,b,c)字符串,用于sql语句范围
 *
 * @param {*} arr
 */
const getRangeString = (arr) => {
    let range = ''
    for (const n of arr) {
        range = range + '"' + n + '",'
    }
    range = range.substring(0, range.length - 1);
    range = '(' + range + ')';
    return range;

}




/**
 *上传附件功能
 *
 * @param {*} obj
 */

const uploadFiles = (files) => {
    let formData = new FormData();

    for (let n = 0; n < files.length; n++) {
        formData.append(n, files[n]);
    }

    // // //添加目录放置到指定文件夹
    // formData.append("desDir", "rp");

    console.log('data:' + formData);
    formData.forEach((value, key) => console.log('formData:' + key + ':' + value));
    $.ajax({
        data: formData,
        type: "POST",
        url: "/system.files.upload/",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        xhr: function () { //获取ajaxSettings中的xhr对象，为它的upload属性绑定progress事件的处理函数
            let myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) { //检查upload属性是否存在
                //绑定progress事件的回调函数
                myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
            }
            return myXhr; //xhr对象返回给jQuery使用
        },
        success: function (data, evt) {
            console.log("file data:" + JSON.stringify(data));
            console.log("file evt:" + JSON.stringify(evt));

            let filesLink = getSuccessFilesUrl(data);
            let oldlink = $('#files').html()
            let newLink = oldlink + filesLink


            $('#files').html(newLink)

            $("#files").find("button").remove(); //先删除已有button

            let ibtn = "<button type='button' class='btn btn-default btn-xs'>×</button>";
            $("#files").find("a").after(ibtn);

            $("#files :button").on('click', function () {
                $(this).prev("a").remove();
                $(this).prev("span").remove();
                // $(this).next(";").remove();
                $(this).remove();
                console.log($('#files').html());
            })


            //[服务器所在文件所在目录位置]一般为"http://119.23.216.181/RoboBlogs/Upload_File/default_show.png"
            // $('#summernote').summernote('insertImage',
            //     "http://127.0.0.1:2019/system.files.upload/1.png");
        },
        error: function () {
            alert("上传失败");
        }
    });
}

/**
 *选择文件函数
 *
 */
const fileSelected = () => {
    let files = $('#fileToUpload')[0].files;
    uploadFiles(files)
}

/**
 *获取已上传文件的可下载链接,用于前端展示
 *
 * @param {*} obj={fields,files}
 */
const getSuccessFilesUrl = (obj) => {

    let filesLink = ''
    let files = obj.files

    for (const n in files) {
        console.log('files n:' + JSON.stringify(files[n][0]));
        let file = files[n][0];
        if (file.status === 'success') {
            if (obj.fields.desDir) {
                filesLink = filesLink + '<a  href=' + "/system.files.download/" + obj.fields.desDir + "%2F" + file.key + ' download=' +
                    file.fileRawName + '>' + '<span>' + file.fileRawName + ';</span></a>';
            } else {
                filesLink = filesLink + '<a  href=' + "/system.files.download/" + file.key + ' download=' +
                    file.fileRawName + '>' + '<span>' + file.fileRawName + ';</span></a>';
            }
        }
    }

    console.log('filesLink:' + filesLink);
    return filesLink;
}

/**
 *根据url 获取,file类型存储至数据库的json格式
 *
 * @param {*} 
 */
const getFilesJson = () => {
    let jsonArr = []
    $('#files').find('a').each(function () {
        let key = this.href
        let name = this.download
        key = key.split('/system.files.download/')[1];
        jsonArr.push({
            name: name,
            key: key
        })
    })
    let dbJson = JSON.stringify(jsonArr)
    return dbJson
}

/**
 *将数据库中的fileJSON 转换成前端url展示
 *
 * @param {*} json
 */
const getFilesUrl = (json) => {
    let fileArr = JSON.parse(json);
    // alert(fileArr.length)
    let filesLink = ''
    if (fileArr.length > 0) {
        for (const n of fileArr) {
            filesLink = filesLink + '<a  href=' + "/system.files.download/" + n.key + ' download=' +
                n.name + '>' + '<span>' + n.name + '</span></a>' + ' ; ';
        }
    }
    return filesLink;
}



/**
 *删除已上传文件
 *
 * @param {*} filesLink
 */
const deleteFiles = () => {
    //		alert(JSON.stringify(g_uploaded.files));
    $('#files').find('a').each(function () {
        let key = this.href
        key = key.split('/system.files.download/')[1];

        // // key = key.replace(/%2F/g, '/')//替换/字符
        // console.log("")
        // console.log(key)
        // var xhr = new XMLHttpRequest();
        // xhr.open("delete", "/system.files/"+key ); //修改成自己的接口
        // xhr.send();
        yjClient.ajax({
            method: "delete",
            url: "/system.files/" + key,
            success: function (data) {
                console.log("delete ok!", data)
            }
        })
    })
    $('#files').html('')

    // for (var name in g_uploaded.files) {
    //     var xhr = new XMLHttpRequest();
    //     alert(JSON.stringify(g_uploaded.files[0][0].key));
    //     xhr.open("delete", "/system.files/test/" +
    //         g_uploaded.files[name][0].key); //修改成自己的接口
    //     xhr.send();
    // }
}

//进度条控制
const progressHandlingFunction = (e) => {
    let curr = e.loaded;
    let total = e.total;
    let process = curr / total * 100;

    if (process > 0 && process < 100) {
        $("#progressbarDiv").show();
        $("#progressbar")[0].style.width = process + "%";
    } else {
        $("#progressbarDiv").hide();
    }
}

/**
 *替换属性名称
 *
 * @param {*} obj
 * @param {*} rule
 */
const replaceObjParamsName = (obj, rules) => {
    for (const p in rules) {
        obj[p] = obj[rules[p]];
        delete obj[rules[p]];
    }
    return obj
}





/**
 *替换中文标点符号至英文
 *
 * @param {*} str
 */
const cn2enPunctuation = (str) => {
    let newStr = str.replace(/，/g, ',')
        .replace(/，/g, ',')
        .replace(/；/g, ';')
        .replace(/。/g, '.')

    console.log('nestr', newStr);

    return newStr;
}


/**
 * 获取两个时间月份差 
 */
const getMonths = (start, end) => {
    var result = [];
    var starts = start.split('-');
    var ends = end.split('-');
    var staYear = starts[0] * 1;
    var staMon = starts[1] * 1 < 10 ? starts[1] : starts[1];
    var endYear = ends[0] * 1;
    var endMon = ends[1] * 1 < 10 ? ends[1] : ends[1];;
    result.push(staYear + '-' + staMon);
    while (staYear <= endYear) {
        if (staYear === endYear) {
            while (staMon < endMon) {
                staMon++;
                if (staMon < 10) {
                    result.push(staYear + '-0' + staMon);
                } else {
                    result.push(staYear + '-' + staMon);
                }
            }
            staYear++;
        } else {
            staMon++;
            if (staMon > 12) {
                staMon = 1;
                staYear++;
            }
            if (staMon < 10) {
                result.push(staYear + '-0' + staMon);
            } else {
                result.push(staYear + '-' + staMon);
            }
        }
    }
    return result.length;

}

/**
 *自动记录绑定关系
 *
 * @param {*} data 绑定数据
 */
const autoAddBindAuditor = async (data) => {

    let rs = await postDBData({
        sql: 'insert',
        params: {
            tableId: 'ppm_customerbinds',
            data: [data]
        }
    })

    console.log('autoAddBindAuditor rs', rs);

    return rs ? true : false
}

//
/**
 *获取浏览器url传入参数
 *
 * @param {*} name
 * @returns
 */
const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r) return unescape(r[2]);
    return null;
}

//获取间隔天数日期
const getIntervalDate = (
    date, //基准日期
    dayNum //间隔天数
) => {

    let oldDate = new Date(date);
    let milliseconds = oldDate.getTime() + 1000 * 60 * 60 * 24 * dayNum;
    let newDate = dateFormat(new Date(milliseconds), "yyyy-MM-dd")
    console.log('newDate', newDate);
    return newDate;
}

//判断是否为有效手机号
const isPhoneAvailable = (phone) => {
    let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}