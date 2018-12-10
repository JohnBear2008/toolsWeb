/*jshint esversion: 6 */

/* 用html的语法看会比较方便 */
var moldDBform = `
<div id="DBform" class="content">
    <br />
    <form class="layui-form layui-form-pane" action="" lay-filter="filter_moldDB">
        <!-- 一区 -->
        <div class="layui-form-item">
            <!-- 一区一行 厂家、控制、机型、保留0 -->
            <div class="layui-inline">
                <label class="layui-form-label">厂家</label>
                <div class="layui-input-inline">
                    <input type="text" name="Manufacturer" id="ManufacturerInput" lay-verify="maxstr_4|required" autocomplete="off" placeholder="例： 7TM " class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">控制</label>
                <div class="layui-input-inline">
                    <input type="text" name="CtrlType" id="CtrlTypeInput" lay-verify="limitstr_4|required" autocomplete="off" placeholder="例： 0000" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">机型</label>
                <div class="layui-input-inline">
                    <input type="text" name="MachType" lay-verify="limitstr_8|required" autocomplete="off" placeholder="例： 00000000" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留0</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved0" lay-verify="minstr_1|required" autocomplete="off" placeholder="例： 0" class="layui-input">
                </div>
            </div>
            <!-- 一区二行 -->
            <div class="layui-inline">
                <label class="layui-form-label">保留1</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved1" lay-verify="minstr_1|required" autocomplete="off" placeholder="例： 0" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留2</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved2" lay-verify="minstr_1|required" autocomplete="off" placeholder="例： 0" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留3</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved3" lay-verify="minstr_1|required" autocomplete="off" placeholder="例： 0" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留4</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved4" lay-verify="minstr_1|required" autocomplete="off" placeholder="例： 0" class="layui-input">
                </div>
            </div>
        </div>
        <!-- 二区 -->
        <div class="layui-form-item">
            <!-- 二区一行 DataID、中文、补充说明、精度 -->
            <div class="layui-inline">
                <label class="layui-form-label">DataID</label>
                <div class="layui-input-inline">
                    <input type="text" id="DBform_DataID" name="DataID" lay-verify="intOnly|required" autocomplete="off" placeholder="例： 1024" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">中文</label>
                <div class="layui-input-inline">
                    <input type="text" name="CN" lay-verify="max_str40|required" autocomplete="off" placeholder="例： 中子C进一段选项" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">补充说明</label>
                <div class="layui-input-inline">
                    <input type="text" name="SubCN" lay-verify="max_str60" autocomplete="off" placeholder="例： 0-进 1-退" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">精度</label>
                <div class="layui-input-inline">
                    <input type="text" name="Prec" lay-verify="maxstr_1|required" autocomplete="off" class="layui-input">
                </div>
            </div>
            <!-- 二区二行 单位、分组 -->
            <div class="layui-inline">
                <label class="layui-form-label">单位</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Unit" lay-search="">
                        <option value="">点击选择或输入搜索</option>
                        <option value="mm"> mm - 毫米</option>
                        <option value="bar"> bar - 压力</option>
                        <option value="%"> % - 流量百分比</option>
                        <option value="seg"> seg - 段数</option>
                        <option value="opt"> opt - 选项</option>
                        <option value="cnt"> cnt - 次数</option>
                        <option value="℃"> ℃ - 温度</option>
                        <option value="sec"> sec - 秒</option>
                        <option value="min"> min - 分</option>
                        <option value="hour"> hour - 时</option>
                        <option value="day"> day - 天</option>
                        <option value="month">month - 月</option>
                        <option value="year"> year - 年</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">分组</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Organize" lay-search="">
                        <option value="">点击选择或输入搜索</option>
                        <option value="Mold">Mold - 模座</option>
                        <option value="Inject">Inject - 射出</option>
                        <option value="Gate">Gate - 阀门</option>
                        <option value="Chrg">Chrg - 储料</option>
                        <option value="Eject">Eject - 托模</option>
                        <option value="AirBlast">AirBlast - 吹气</option>
                        <option value="Core">Core - 中子</option>
                        <option value="Nozzl">Nozzl - 座台</option>
                        <option value="Temper">Temper - 温度</option>
                        <option value="Product">Product - 生产</option>
                        <option value="Moni">Moni - 监测</option>
                        <option value="Alarm">Alarm - 警报</option>
                        <option value="Other">Other - 其他</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- 三区 可见性 -->
        <div class="layui-form-item">
            <label class="layui-form-label">可见性</label>
            <div class="layui-input-block">
                <input type="radio" id="radio_visb" name="Visb" value="1" title="可见">
                <input type="radio" id="radio_invisb" name="Visb" value="0" title="隐藏">
            </div>
        </div>
        <!-- 底区 表单按钮 -->
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button lay-submit="" lay-filter="form_submit" class="layui-btn">提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>
</div>
`;
