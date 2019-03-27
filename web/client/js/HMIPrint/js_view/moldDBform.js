/*jshint esversion: 6 */

/* 用html的语法看会比较方便 */

var mold54DBform = `
<div id="DBform" class="content">
    <br />
    <form class="layui-form layui-form-pane" action="" lay-filter="filter_moldDB">
        <!-- 一区 -->
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">厂家</label>
                <div class="layui-input-inline">
                    <input type="text" name="Manufacturer" id="ManufacturerInput" lay-verify="maxstr_4|required" placeholder="例： 7TM " class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">控制</label>
                <div class="layui-input-inline">
                    <input type="text" name="CtrlType" id="CtrlTypeInput" lay-verify="limitstr_4|required" placeholder="例： 0000" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">机型</label>
                <div class="layui-input-inline">
                    <input type="text" name="MachType" lay-verify="limitstr_8|required" placeholder="例： 00000000" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留0</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved0" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留1</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved1" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留2</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved2" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留3</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved3" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留4</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved4" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
        </div>
        <!-- 二区 -->
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">DataID</label>
                <div class="layui-input-inline">
                    <input type="text" id="DBform_DataID" name="DataID" lay-verify="intOnly|required" placeholder="例： 1024" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">精度</label>
                <div class="layui-input-inline">
                    <input type="text" name="Prec" lay-verify="maxstr_1|required" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">中文</label>
                <div class="layui-input-inline">
                    <input type="text" name="CN" lay-verify="max_str40|required" placeholder="例： 中子C进一段选项" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">英文</label>
                <div class="layui-input-inline">
                    <input type="text" name="EN" lay-verify="max_str40|required" placeholder="例： Core C Seg1 In Opt" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">单位</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Unit" lay-search="">
                        <!-- option 全部小写 -->
                        <option value="">请选择</option>
                        <option value="mm"> mm - 毫米</option>
                        <!-- <option value="cm"> cm - 厘米</option> -->
                        <!-- <option value="m"> m - 米</option> -->
                        <!-- <option value="inch"> inch - 英寸</option> -->
                        <option value="bar"> bar - 压力</option>
                        <!-- <option value="psi"> psi - 磅/平方英寸</option> -->
                        <option value="%"> % - 流量百分比</option>
                        <option value="seg"> seg - 段数</option>
                        <option value="opt"> opt - 选项</option>
                        <option value="cnt"> cnt - 次数</option>
                        <option value="ton"> ton - 吨</option>
                        <option value="℃"> ℃ - 摄氏度</option>
                        <!-- <option value="℉"> ℉ - 华氏度</option> -->
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
                        <!-- 首字母大写 -->
                        <option value="">请选择</option>
                        <option value="Mold">Mold - 模座</option>
                        <option value="Inject">Inject - 射出</option>
                        <option value="InjectB">InjectB - 射出B</option>
                        <!-- <option value="Gate">Gate - 阀门</option> -->
                        <option value="Chrg">Chrg - 储料</option>
                        <option value="ChrgB">ChrgB - 储料B</option>
                        <option value="Eject">Eject - 托模</option>
                        <option value="EjectB">EjectB - 托模B</option>
                        <option value="AirBlast">AirBlast - 吹气</option>
                        <option value="Core">Core - 中子</option>
                        <option value="Nozzl">Nozzl - 座台</option>
                        <option value="NozzlB">NozzlB - 座台B</option>
                        <option value="Temper">Temper - 温度</option>
                        <option value="Rotary">Rotary - 转台</option>
                        <!-- <option value="Product">Product - 生产</option> -->
                        <!-- <option value="Moni">Moni - 监测</option> -->
                        <!-- <option value="Alarm">Alarm - 警报限</option> -->
                        <option value="Other">Other - 其他</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">中文补充</label>
                <div class="layui-input-inline">
                    <input type="text" name="CNTips" lay-verify="max_str60" placeholder="例： 0-不用 1-使用" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">英文补充</label>
                <div class="layui-input-inline">
                    <input type="text" name="ENTips" lay-verify="max_str60" placeholder="例： 0-use 1-un use" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">Block</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Block" lay-search="">
                        <option value="">请选择</option>
                        <option value="DB_COM2GATE">DB_COM2GATE</option>
                        <option value="DB_COM2GATEB">DB_COM2GATEB</option>
                        <option value="DB_COM2TEMPDEGREEOFFSET">DB_COM2TEMPDEGREEOFFSET</option>
                        <option value="DB_COM2TEMPSET">DB_COM2TEMPSET</option>
                        <option value="DB_COM2TEMPSETPERCENT">DB_COM2TEMPSETPERCENT</option>
                        <option value="DB_MMICONFIG">DB_MMICONFIG</option>
                        <option value="DB_MOLDSET">DB_MOLDSET</option>
                        <option value="DB_MOLDSETB">DB_MOLDSETB</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">Type</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Type" lay-search="">
                        <option value="">请选择</option>
                        <option value="H_BYTE">H_BYTE</option>
                        <option value="H_WORD">H_WORD</option>
                        <option value="H_DWORD">H_DWORD</option>
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
                <!-- <button type="reset" class="layui-btn layui-btn-primary">重置</button> -->
            </div>
        </div>
    </form>
</div>
`;


var moldDBform = `
<div id="DBform" class="content">
    <br />
    <form class="layui-form layui-form-pane" action="" lay-filter="filter_moldDB">
        <!-- 一区 -->
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">厂家</label>
                <div class="layui-input-inline">
                    <input type="text" name="Manufacturer" id="ManufacturerInput" lay-verify="maxstr_4|required" placeholder="例： 7TM " class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">控制</label>
                <div class="layui-input-inline">
                    <input type="text" name="CtrlType" id="CtrlTypeInput" lay-verify="limitstr_4|required" placeholder="例： 0000" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">机型</label>
                <div class="layui-input-inline">
                    <input type="text" name="MachType" lay-verify="limitstr_8|required" placeholder="例： 00000000" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留0</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved0" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留1</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved1" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留2</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved2" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留3</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved3" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">保留4</label>
                <div class="layui-input-inline">
                    <input type="text" name="Reserved4" lay-verify="minstr_1|required" placeholder="例： 0" class="layui-input sysinfo">
                </div>
            </div>
        </div>
        <!-- 二区 -->
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">DataID</label>
                <div class="layui-input-inline">
                    <input type="text" id="DBform_DataID" name="DataID" lay-verify="intOnly|required" placeholder="例： 1024" class="layui-input sysinfo">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">精度</label>
                <div class="layui-input-inline">
                    <input type="text" name="Prec" lay-verify="maxstr_1|required" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">中文</label>
                <div class="layui-input-inline">
                    <input type="text" name="CN" lay-verify="max_str40|required" placeholder="例： 中子C进一段选项" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">英文</label>
                <div class="layui-input-inline">
                    <input type="text" name="EN" lay-verify="max_str40|required" placeholder="例： Core C Seg1 In Opt" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">单位</label>
                <div class="layui-input-inline">
                    <select lay-verify="required" name="Unit" lay-search="">
                        <!-- option 全部小写 -->
                        <option value="">请选择</option>
                        <option value="mm"> mm - 毫米</option>
                        <!-- <option value="cm"> cm - 厘米</option> -->
                        <!-- <option value="m"> m - 米</option> -->
                        <!-- <option value="inch"> inch - 英寸</option> -->
                        <option value="bar"> bar - 压力</option>
                        <!-- <option value="psi"> psi - 磅/平方英寸</option> -->
                        <option value="%"> % - 流量百分比</option>
                        <option value="seg"> seg - 段数</option>
                        <option value="opt"> opt - 选项</option>
                        <option value="cnt"> cnt - 次数</option>
                        <option value="ton"> ton - 吨</option>
                        <option value="℃"> ℃ - 摄氏度</option>
                        <!-- <option value="℉"> ℉ - 华氏度</option> -->
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
                        <!-- 首字母大写 -->
                        <option value="">请选择</option>
                        <option value="Mold">Mold - 模座</option>
                        <option value="Inject">Inject - 射出</option>
                        <option value="InjectB">InjectB - 射出B</option>
                        <!-- <option value="Gate">Gate - 阀门</option> -->
                        <option value="Chrg">Chrg - 储料</option>
                        <option value="ChrgB">ChrgB - 储料B</option>
                        <option value="Eject">Eject - 托模</option>
                        <option value="EjectB">EjectB - 托模B</option>
                        <option value="AirBlast">AirBlast - 吹气</option>
                        <option value="Core">Core - 中子</option>
                        <option value="Nozzl">Nozzl - 座台</option>
                        <option value="NozzlB">NozzlB - 座台B</option>
                        <option value="Temper">Temper - 温度</option>
                        <option value="Rotary">Rotary - 转台</option>
                        <!-- <option value="Product">Product - 生产</option> -->
                        <!-- <option value="Moni">Moni - 监测</option> -->
                        <!-- <option value="Alarm">Alarm - 警报限</option> -->
                        <option value="Other">Other - 其他</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">中文补充</label>
                <div class="layui-input-inline">
                    <input type="text" name="CNTips" lay-verify="max_str60" placeholder="例： 0-不用 1-使用" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">英文补充</label>
                <div class="layui-input-inline">
                    <input type="text" name="ENTips" lay-verify="max_str60" placeholder="例： 0-use 1-un use" class="layui-input">
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
                <!-- <button type="reset" class="layui-btn layui-btn-primary">重置</button> -->
            </div>
        </div>
    </form>
</div>
`;
