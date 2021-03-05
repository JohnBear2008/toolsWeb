/**
 *根据sql获取需要的数据
 *
 * 
 */
const getT9DataBySql = async ({
    to, //本系统id
    sql, //sqlid
    params //其他参数
}) => {

    let o;
    o = await $.ajax({
        method: 'get',
        url: 'https://127.0.0.1:8000/api/t9/getBySql',
        data: {
            to,
            sql,
            params
        },
        success: function (data) {
            console.log("getT9DataBySql data:", data);
            return data;
        },
        error: function (error) {
            console.log("getT9DataBySql error:", error);
        }
    })
    return o;
}

/**
 *加载T9 bootStrapSelect 数据
 *
 * @param {*} i={elementId,sqlParams,initValue}
 */
const loadT9BootStrapSelector = async ({
    elementId,
    sqlParams,
    initValue,
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
        url: '/app/RP/lib/t9Get',
        data: sqlParams,
        success: function (data) {
            // console.log('loadBootStrapSelector data',data);
            try {
                for (const n of data) {
                    $('#' + elementId).append($('<option  data-tokens=' + n.token + ' value=' + n.value + '>' + n.selectOption + '</option>'));
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
