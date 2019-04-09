/*jshint esversion: 6 */
/* 用html的语法看会比较方便 */
/**
 * [sessionForm session表单，可用于洗澡能或者编辑]
 * @type {[type]}
 */
var sessionForm = `
<div id="DBform" class="content">
    <form class="layui-form layui-form-pane" action="" lay-filter="filter_sessionForm">
        <!-- 一区 -->
        <div class="layui-form-item">
            <!-- 一区一行 厂家、控制、机型、保留0 -->
            <div class="layui-inline">
                <label class="layui-form-label">host</label>
                <div class="layui-input-inline">
                    <input type="text" name="hmi_host" id="hmi_host" lay-verify="required" placeholder="HMI的IP" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">账户</label>
                <div class="layui-input-inline">
                    <input type="text" name="hmi_usr" lay-verify="required" placeholder="默认：root" class="layui-input sysinfo">
                </div>
                <label class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                    <input type="text" name="hmi_pwd" placeholder="不填则为空" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button lay-submit="" lay-filter="form_submit" class="layui-btn">新增</button>
                </div>
            </div>
        </div>
    </form>
</div>
`;
