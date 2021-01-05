//FnFee.js
function analysisWin(pclass, billid, pcode, pname) {
    var reportType = 'CherryQuery';
    var arrange = 'popup';
    var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": pclass, "BILLID": billid, "PartsCode": pcode, "DBTable": "auto_rec_parts" };
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            console.log("新新");
            const json2 = JSON.stringify(data);
            const bjob = JSON.parse(json2);
            $("#specNHead").val("编码: " + pcode + " 品名: " + pname);
            $("#specEF").val("EF: " + bjob.SupplyTitle + " 供应商: " + bjob.SMTTitle);
            $("#specModel").val(bjob.Model);
            $("#specAssem").val(bjob.Assembly);
            $("#specUnitE").val(bjob.UnitE);
            $("#specPhase").val(bjob.Phase);
            $("#specPrior").val(bjob.Prior);
            $("#specStaff").val(bjob.Staff);
            $("#specApplyDate").val(bjob.ApplyDate);
            $("#specList").val(bjob.ValueM + bjob.NameM + bjob.ValueA + bjob.NameA + bjob.Value1 + bjob.Name1 + bjob.Value2 + bjob.Name2 + bjob.Value3 + bjob.Name3 + bjob.Value4 + bjob.Name4 + bjob.Value5 + bjob.Name5 + bjob.Value6 + bjob.Name6 + bjob.Value7 + bjob.Name7 + bjob.Value8 + bjob.Name8
                + bjob.Value9 + bjob.Name9 + bjob.Value10 + bjob.Name10 + bjob.Value11 + bjob.Name11 + bjob.Value12 + bjob.Name12 + bjob.Value13 + bjob.Name13 + bjob.Value14 + bjob.Name14 + bjob.Value15 + bjob.Name15
                + bjob.Value16 + bjob.Name16 + bjob.Value17 + bjob.Name17 + bjob.Value18 + bjob.Name18 + bjob.Value19 + bjob.Name19 + bjob.Value20 + bjob.Name20);
        },
        error: function () {
        }
    })
}
function shuffleWin(  BillNo ) {
    var reportType = 'BulletQuery';
    var arrange = 'popup';
    var taskData = { "reportType": reportType, "arrange": arrange,   "BillNo": BillNo  };
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMFinc/getRoute",
        success: function (data) {
            const json2 = JSON.stringify(data);
            const bjob = JSON.parse(json2);
            // console.log("新新", json2);
            console.log("加里", bjob[10].StaffName);
            console.log("李在希", bjob[10].Explanation);
            var StatusOK =bjob[11].StatusText;
            var CurLevel =bjob[11].CurLevel;
            sData = [];
            let htmlModel = '';
            $('#listPrintViewDiv').html('');
            htmlModel = '' +
                '<table width = "1000" border = "1"  > ' +
                '<tr>' +
                '<td width="100"  rowspan ="2" colspan="3" height="50" align="center"><img src="/images/techmation.png" /></td>' +
                '<td  colspan="7" align="center"><h3>宁波弘讯科技股份有限公司</h3></td>' +
                '<td  colspan="3" align="center" class="coffee-drop" >Status</td> ' +
                '</tr>' +
                '<tr>' +
                '<td  colspan="7" align="center"><h3>NINGBO TECHMATION CO.,LTD.</h3></td>' +
                '<td  colspan="3" align="center" > List_No</td> ' +
                '</tr>' +
                '<tr>' +
                '<td width="50" colspan="3" height="25">Proj_No</td>' +
                '<td width="50" rowspan ="2" colspan="5" height="25">采购申请单</td>' +
                '<td width="50" colspan="5" height="25">ReqDate</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" colspan="3" height="25">DeptName</td>' +
                '<td width="50" colspan="5" height="25">Applic_No</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">预算项目</td>' +
                '<td width="50" height="25">品名/服务</td>' +
                '<td width="50" height="25">型号/说明</td>' +
                '<td width="50" height="25">单位</td>' +
                '<td width="50" height="25">库存</td>' +
                '<td width="50" height="25">单价</td>' +
                '<td width="50" height="25">数量</td>' +
                '<td width="50" height="25">小计</td>' +
                '<td width="50" height="25">交期</td>' +
                '<td width="50" height="25">供货商</td>' +
                '<td width="50" height="25">是否预算内</td>' +
                '<td width="50" height="25">新增/换新/补遗</td>' +
                '<td width="50" height="25">使用部门</td>' +
                '</tr>' +
                '<tr>' +

                '<td width="50" height="25">SNO_1</td>' +
                '<td width="50" height="25">BudItem_1</td>' +
                '<td width="50" height="25">ItemO_1</td>' +
                '<td width="50" height="25">Descip_1</td>' +
                '<td width="50" height="25">Measure_1</td>' +
                '<td width="50" height="25">Invent_1</td>' +
                '<td width="50" height="25">UniPrice_1</td>' +
                '<td width="50" height="25">QuantAmt_1</td>' +
                '<td width="50" height="25">SubTot_1</td>' +
                '<td width="50" height="25">Delivway_1</td>' +
                '<td width="50" height="25">Vender_1</td>' +
                '<td width="50" height="25">Underbur_1</td>' +
                '<td width="50" height="25">DeptM_1</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_2</td>' +
                '<td width="50" height="25">BudItem_2</td>' +
                '<td width="50" height="25">ItemO_2</td>' +
                '<td width="50" height="25">Descip_2</td>' +
                '<td width="50" height="25">Measure_2</td>' +
                '<td width="50" height="25">Invent_2</td>' +
                '<td width="50" height="25">UniPrice_2</td>' +
                '<td width="50" height="25">QuantAmt_2</td>' +
                '<td width="50" height="25">SubTot_2</td>' +
                '<td width="50" height="25">Delivway_2</td>' +
                '<td width="50" height="25">Vender_2</td>' +
                '<td width="50" height="25">Underbur_2</td>' +
                '<td width="50" height="25">DeptM_2</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_3</td>' +
                '<td width="50" height="25">BudItem_3</td>' +
                '<td width="50" height="25">ItemO_3</td>' +
                '<td width="50" height="25">Descip_3</td>' +
                '<td width="50" height="25">Measure_3</td>' +
                '<td width="50" height="25">Invent_3</td>' +
                '<td width="50" height="25">UniPrice_3</td>' +
                '<td width="50" height="25">QuantAmt_3</td>' +
                '<td width="50" height="25">SubTot_3</td>' +
                '<td width="50" height="25">Delivway_3</td>' +
                '<td width="50" height="25">Vender_3</td>' +
                '<td width="50" height="25">Underbur_3</td>' +
                '<td width="50" height="25">DeptM_3</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_4</td>' +
                '<td width="50" height="25">BudItem_4</td>' +
                '<td width="50" height="25">ItemO_4</td>' +
                '<td width="50" height="25">Descip_4</td>' +
                '<td width="50" height="25">Measure_4</td>' +
                '<td width="50" height="25">Invent_4</td>' +
                '<td width="50" height="25">UniPrice_4</td>' +
                '<td width="50" height="25">QuantAmt_4</td>' +
                '<td width="50" height="25">SubTot_4</td>' +
                '<td width="50" height="25">Delivway_4</td>' +
                '<td width="50" height="25">Vender_4</td>' +
                '<td width="50" height="25">Underbur_4</td>' +
                '<td width="50" height="25">DeptM_4</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_5</td>' +
                '<td width="50" height="25">BudItem_5</td>' +
                '<td width="50" height="25">ItemO_5</td>' +
                '<td width="50" height="25">Descip_5</td>' +
                '<td width="50" height="25">Measure_5</td>' +
                '<td width="50" height="25">Invent_5</td>' +
                '<td width="50" height="25">UniPrice_5</td>' +
                '<td width="50" height="25">QuantAmt_5</td>' +
                '<td width="50" height="25">SubTot_5</td>' +
                '<td width="50" height="25">Delivway_5</td>' +
                '<td width="50" height="25">Vender_5</td>' +
                '<td width="50" height="25">Underbur_5</td>' +
                '<td width="50" height="25">DeptM_5</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_6</td>' +
                '<td width="50" height="25">BudItem_6</td>' +
                '<td width="50" height="25">ItemO_6</td>' +
                '<td width="50" height="25">Descip_6</td>' +
                '<td width="50" height="25">Measure_6</td>' +
                '<td width="50" height="25">Invent_6</td>' +
                '<td width="50" height="25">UniPrice_6</td>' +
                '<td width="50" height="25">QuantAmt_6</td>' +
                '<td width="50" height="25">SubTot_6</td>' +
                '<td width="50" height="25">Delivway_6</td>' +
                '<td width="50" height="25">Vender_6</td>' +
                '<td width="50" height="25">Underbur_6</td>' +
                '<td width="50" height="25">DeptM_6</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_7</td>' +
                '<td width="50" height="25">BudItem_7</td>' +
                '<td width="50" height="25">ItemO_7</td>' +
                '<td width="50" height="25">Descip_7</td>' +
                '<td width="50" height="25">Measure_7</td>' +
                '<td width="50" height="25">Invent_7</td>' +
                '<td width="50" height="25">UniPrice_7</td>' +
                '<td width="50" height="25">QuantAmt_7</td>' +
                '<td width="50" height="25">SubTot_7</td>' +
                '<td width="50" height="25">Delivway_7</td>' +
                '<td width="50" height="25">Vender_7</td>' +
                '<td width="50" height="25">Underbur_7</td>' +
                '<td width="50" height="25">DeptM_7</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_8</td>' +
                '<td width="50" height="25">BudItem_8</td>' +
                '<td width="50" height="25">ItemO_8</td>' +
                '<td width="50" height="25">Descip_8</td>' +
                '<td width="50" height="25">Measure_8</td>' +
                '<td width="50" height="25">Invent_8</td>' +
                '<td width="50" height="25">UniPrice_8</td>' +
                '<td width="50" height="25">QuantAmt_8</td>' +
                '<td width="50" height="25">SubTot_8</td>' +
                '<td width="50" height="25">Delivway_8</td>' +
                '<td width="50" height="25">Vender_8</td>' +
                '<td width="50" height="25">Underbur_8</td>' +
                '<td width="50" height="25">DeptM_8</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_9</td>' +
                '<td width="50" height="25">BudItem_9</td>' +
                '<td width="50" height="25">ItemO_9</td>' +
                '<td width="50" height="25">Descip_9</td>' +
                '<td width="50" height="25">Measure_9</td>' +
                '<td width="50" height="25">Invent_9</td>' +
                '<td width="50" height="25">UniPrice_9</td>' +
                '<td width="50" height="25">QuantAmt_9</td>' +
                '<td width="50" height="25">SubTot_9</td>' +
                '<td width="50" height="25">Delivway_9</td>' +
                '<td width="50" height="25">Vender_9</td>' +
                '<td width="50" height="25">Underbur_9</td>' +
                '<td width="50" height="25">DeptM_9</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" height="25">SNO_10</td>' +
                '<td width="50" height="25">BudItem_10</td>' +
                '<td width="50" height="25">ItemO_10</td>' +
                '<td width="50" height="25">Descip_10</td>' +
                '<td width="50" height="25">Measure_10</td>' +
                '<td width="50" height="25">Invent_10</td>' +
                '<td width="50" height="25">UniPrice_10</td>' +
                '<td width="50" height="25">QuantAmt_10</td>' +
                '<td width="50" height="25">SubTot_10</td>' +
                '<td width="50" height="25">Delivway_10</td>' +
                '<td width="50" height="25">Vender_10</td>' +
                '<td width="50" height="25">Underbur_10</td>' +
                '<td width="50" height="25">DeptM_10</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" rowspan ="4" colspan="8" height="25">申请说明</td>' +
                '<td width="50" colspan="2" height="25">总金额</td>' +
                '<td width="50" colspan="3" height="25">TotalV</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" colspan="2" height="25">币别</td>' +
                '<td width="50" colspan="3" height="25">Exchange</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" colspan="2" height="25">付款方式</td>' +
                '<td width="50" colspan="3" height="25">Pay_method</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50" colspan="2" height="25">说明：</td>' +
                '<td width="50" colspan="3" height="25">Explan</td>' +
                '</tr>' +
                '<tr>' +
                '<td id=\"manOP\" width="50"  colspan="1" height="25">申请人</td>' +
                '<td id=\"mandpt\" width="50"  colspan="1" height="25">部门主管</td>' +
                '<td id=\"manvip\" width="50"  colspan="2" height="25">副总</td>' +
                '<td id=\"manpur\" width="50"  colspan="1" height="25">采购承办人</td>' +
                '<td id=\"manpex\" width="50"  colspan="1" height="25">采购主管</td>' +
                '<td id=\"mancfo\" width="50"  colspan="2" height="25">财务总监</td>' +
                '<td id=\"manpsd\" width="50"  colspan="2" height="25">总经理</td>' +
                '<td id=\"manceo\" width="50"  colspan="2" height="25">集团CEO</td>' +
                '<td id=\"manbod\" width="50"  colspan="1" height="25">董事长</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50"  colspan="1" height="25">OppName</td>' +
                '<td width="50"  colspan="1" height="25">DptName</td>' +
                '<td width="50"  colspan="2" height="25">VipName</td>' +
                '<td width="50"  colspan="1" height="25">PurName</td>' +
                '<td width="50"  colspan="1" height="25">PexName</td>' +
                '<td width="50"  colspan="2" height="25">CfoName</td>' +
                '<td width="50"  colspan="2" height="25">PsdName</td>' +
                '<td width="50"  colspan="2" height="25">CeoName</td>' +
                '<td width="50"  colspan="1" height="25">BodName</td>' +
                '</tr>' +
                '<tr>' +
                '<td width="50"  colspan="1" height="25">OppDate</td>' +
                '<td width="50"  colspan="1" height="25">DptDate</td>' +
                '<td width="50"  colspan="2" height="25">VipDate</td>' +
                '<td width="50"  colspan="1" height="25">PurDate</td>' +
                '<td width="50"  colspan="1" height="25">PexDate</td>' +
                '<td width="50"  colspan="2" height="25">CfoDate</td>' +
                '<td width="50"  colspan="2" height="25">PsdDate</td>' +
                '<td width="50"  colspan="2" height="25">CeoDate</td>' +
                '<td width="50"  colspan="1" height="25">BodDate</td>' +
                '</tr>' +
                '</table>' +
                '</DIV>';
            for (let i = 0; i < 10; i++) {
                objT = {
                    "SNO" : bjob[i].SNNo, 
                    "BudItem" : bjob[i].BudgetItem, 
                    "ItemO": bjob[i].ItemNo,
                    "Descip": bjob[i].Description,
                    "Measure": bjob[i].Unit,
                    "Invent": bjob[i].Remain,
                    "UniPrice": bjob[i].UnitPrice,
                    "QuantAmt": bjob[i].Quantity,
                    "SubTot": bjob[i].Subtotal,
                    "Delivway": bjob[i].Delivery,
                    "Vender": bjob[i].Supplier,
                    "Underbur": bjob[i].Underburget,
                    "DeptM": bjob[i].Department,
                }
                // console.log("睿娜",objT);
                sData.push( objT );
            }
            for (let i = 10; i < 11; i++) {
                var objU = {
                    "BillNo": bjob[i].BillNo,
                    "ListNo": bjob[i].ListNo,
                    "RequestDate": bjob[i].RequestDate,
                    "ProjectNo": bjob[i].ProjectNo,
                    "ApplicNo": bjob[i].ApplicNo,
                    "DeptName": bjob[i].DeptName,
                    "StaffID": bjob[i].StaffID,
                    "StaffName": bjob[i].StaffName,
                    "TotalValue": bjob[i].TotalValue,
                    "Currency": bjob[i].Currency,
                    "Payment": bjob[i].Payment,
                    "Explanation": bjob[i].Explanation,
                    "EntryDate": bjob[i].EntryDate,
                }
                // console.log("真率",objU);
                sData.push( objU );
            }
 
            for (let i = 11; i < 12; i++) {
                var objX = {
                    "OppName": bjob[i].OppName, "OppDate": bjob[i].OppDate,
                    "DptName": bjob[i].DptName, "DptDate": bjob[i].DptDate,
                    "VipName": bjob[i].VipName, "VipDate": bjob[i].VipDate,
                    "PurName": bjob[i].PurName, "PurDate": bjob[i].PurDate,
                    "PexName": bjob[i].PexName, "PexDate": bjob[i].PexDate,
                    "CfoName": bjob[i].CfoName, "CfoDate": bjob[i].CfoDate,
                    "PsdName": bjob[i].PsdName, "PsdDate": bjob[i].PsdDate,
                    "CeoName": bjob[i].CeoName, "CeoDate": bjob[i].CeoDate,
                    "BodName": bjob[i].BodName, "BodDate": bjob[i].BodDate,
                    "Status": bjob[i].Status, "CurStatus": bjob[i].CurStatus,
                    "CurLevel": bjob[i].CurLevel, "TermiLevel": bjob[i].TermiLevel,
                    "CurName": bjob[i].CurName, "StatusText": bjob[i].StatusText, 
                }
                console.log("真率",objX);
                sData.push( objX );
            }
            $('#listPrintViewDiv').html(htmlModel);
            var fillPrintModel = ({
                htmlModel,
                SNO_1,  BudItem_1  ,  ItemO_1  , Descip_1  , Measure_1  ,  Invent_1  , UniPrice_1  ,QuantAmt_1  ,SubTot_1  ,Delivway_1  , Vender_1  ,Underbur_1  ,DeptM_1  ,
                SNO_2,  BudItem_2  ,  ItemO_2  , Descip_2  , Measure_2  ,  Invent_2  , UniPrice_2  ,QuantAmt_2  ,SubTot_2  ,Delivway_2  , Vender_2  ,Underbur_2  ,DeptM_2  ,
                SNO_3,  BudItem_3  ,  ItemO_3  , Descip_3  , Measure_3  ,  Invent_3  , UniPrice_3  ,QuantAmt_3  ,SubTot_3  ,Delivway_3  , Vender_3  ,Underbur_3  ,DeptM_3  ,
                SNO_4,  BudItem_4  ,  ItemO_4  , Descip_4  , Measure_4  ,  Invent_4  , UniPrice_4  ,QuantAmt_4  ,SubTot_4  ,Delivway_4  , Vender_4  ,Underbur_4  ,DeptM_4  ,
                SNO_5,  BudItem_5  ,  ItemO_5  , Descip_5  , Measure_5  ,  Invent_5  , UniPrice_5  ,QuantAmt_5  ,SubTot_5  ,Delivway_5  , Vender_5  ,Underbur_5  ,DeptM_5  ,
                SNO_6,  BudItem_6  ,  ItemO_6  , Descip_6  , Measure_6  ,  Invent_6  , UniPrice_6  ,QuantAmt_6  ,SubTot_6  ,Delivway_6  , Vender_6  ,Underbur_6  ,DeptM_6  ,
                SNO_7,  BudItem_7  ,  ItemO_7  , Descip_7  , Measure_7  ,  Invent_7  , UniPrice_7  ,QuantAmt_7  ,SubTot_7  ,Delivway_7  , Vender_7  ,Underbur_7  ,DeptM_7  ,
                SNO_8,  BudItem_8  ,  ItemO_8  , Descip_8  , Measure_8  ,  Invent_8  , UniPrice_8  ,QuantAmt_8  ,SubTot_8  ,Delivway_8  , Vender_8  ,Underbur_8  ,DeptM_8  ,
                SNO_9,  BudItem_9  ,  ItemO_9  , Descip_9  , Measure_9  ,  Invent_9  , UniPrice_9  ,QuantAmt_9  ,SubTot_9  ,Delivway_9  , Vender_9  ,Underbur_9  ,DeptM_9  ,
                SNO_10, BudItem_10 ,  ItemO_10 , Descip_10 , Measure_10 ,  Invent_10 , UniPrice_10 ,QuantAmt_10 ,SubTot_10 ,Delivway_10 , Vender_10 ,Underbur_10 ,DeptM_10 ,
                Bill_No, List_No, ReqDate, Proj_No, Applic_No, DeptName,  TotalV, Exchange, Pay_method, Explan, Entry_Date,
                OppName, DptName, VipName, PurName, PexName, CfoName, PsdName, CeoName, BodName,
                OppDate, DptDate, VipDate, PurDate, PexDate, CfoDate, PsdDate, CeoDate, BodDate,
                Status,
                }) => {
                let newHtml = htmlModel
                .replace(/SNO_1/, SNO_1)    .replace(/BudItem_1/,  BudItem_1 )
                .replace(/SNO_2/, SNO_2)    .replace(/BudItem_2/,  BudItem_2 )
                .replace(/SNO_3/, SNO_3)    .replace(/BudItem_3/,  BudItem_3 )
                .replace(/SNO_4/, SNO_4)    .replace(/BudItem_4/,  BudItem_4 )
                .replace(/SNO_5/, SNO_5 )   .replace(/BudItem_5/,  BudItem_5 )
                .replace(/SNO_6/, SNO_6 )   .replace(/BudItem_6/,  BudItem_6 )
                .replace(/SNO_7/, SNO_7 )   .replace(/BudItem_7/,  BudItem_7 )
                .replace(/SNO_8/, SNO_8 )   .replace(/BudItem_8/,  BudItem_8 )
                .replace(/SNO_9/, SNO_9 )   .replace(/BudItem_9/,  BudItem_9 )
                .replace(/SNO_10/, SNO_10)  .replace(/BudItem_10/, BudItem_10)

                .replace(/ItemO_1/, ItemO_1)    .replace(/Descip_1/,  Descip_1 )
                .replace(/ItemO_2/, ItemO_2)    .replace(/Descip_2/,  Descip_2 )
                .replace(/ItemO_3/, ItemO_3)    .replace(/Descip_3/,  Descip_3 )
                .replace(/ItemO_4/, ItemO_4)    .replace(/Descip_4/,  Descip_4 )
                .replace(/ItemO_5/, ItemO_5 )   .replace(/Descip_5/,  Descip_5 )
                .replace(/ItemO_6/, ItemO_6 )   .replace(/Descip_6/,  Descip_6 )
                .replace(/ItemO_7/, ItemO_7 )   .replace(/Descip_7/,  Descip_7 )
                .replace(/ItemO_8/, ItemO_8 )   .replace(/Descip_8/,  Descip_8 )
                .replace(/ItemO_9/, ItemO_9 )   .replace(/Descip_9/,  Descip_9 )
                .replace(/ItemO_10/, ItemO_10)  .replace(/Descip_10/, Descip_10)

                .replace(/Measure_1/, Measure_1)    .replace(/Invent_1/,  Invent_1 )
                .replace(/Measure_2/, Measure_2)    .replace(/Invent_2/,  Invent_2 )
                .replace(/Measure_3/, Measure_3)    .replace(/Invent_3/,  Invent_3 )
                .replace(/Measure_4/, Measure_4)    .replace(/Invent_4/,  Invent_4 )
                .replace(/Measure_5/, Measure_5 )   .replace(/Invent_5/,  Invent_5 )
                .replace(/Measure_6/, Measure_6 )   .replace(/Invent_6/,  Invent_6 )
                .replace(/Measure_7/, Measure_7 )   .replace(/Invent_7/,  Invent_7 )
                .replace(/Measure_8/, Measure_8 )   .replace(/Invent_8/,  Invent_8 )
                .replace(/Measure_9/, Measure_9 )   .replace(/Invent_9/,  Invent_9 )
                .replace(/Measure_10/, Measure_10)  .replace(/Invent_10/, Invent_10)

                .replace(/UniPrice_1/, UniPrice_1)    .replace(/QuantAmt_1/,  QuantAmt_1 )
                .replace(/UniPrice_2/, UniPrice_2)    .replace(/QuantAmt_2/,  QuantAmt_2 )
                .replace(/UniPrice_3/, UniPrice_3)    .replace(/QuantAmt_3/,  QuantAmt_3 )
                .replace(/UniPrice_4/, UniPrice_4)    .replace(/QuantAmt_4/,  QuantAmt_4 )
                .replace(/UniPrice_5/, UniPrice_5 )   .replace(/QuantAmt_5/,  QuantAmt_5 )
                .replace(/UniPrice_6/, UniPrice_6 )   .replace(/QuantAmt_6/,  QuantAmt_6 )
                .replace(/UniPrice_7/, UniPrice_7 )   .replace(/QuantAmt_7/,  QuantAmt_7 )
                .replace(/UniPrice_8/, UniPrice_8 )   .replace(/QuantAmt_8/,  QuantAmt_8 )
                .replace(/UniPrice_9/, UniPrice_9 )   .replace(/QuantAmt_9/,  QuantAmt_9 )
                .replace(/UniPrice_10/, UniPrice_10)  .replace(/QuantAmt_10/, QuantAmt_10)

                .replace(/SubTot_1/, SubTot_1)    .replace(/Delivway_1/,  Delivway_1 )
                .replace(/SubTot_2/, SubTot_2)    .replace(/Delivway_2/,  Delivway_2 )
                .replace(/SubTot_3/, SubTot_3)    .replace(/Delivway_3/,  Delivway_3 )
                .replace(/SubTot_4/, SubTot_4)    .replace(/Delivway_4/,  Delivway_4 )
                .replace(/SubTot_5/, SubTot_5 )   .replace(/Delivway_5/,  Delivway_5 )
                .replace(/SubTot_6/, SubTot_6 )   .replace(/Delivway_6/,  Delivway_6 )
                .replace(/SubTot_7/, SubTot_7 )   .replace(/Delivway_7/,  Delivway_7 )
                .replace(/SubTot_8/, SubTot_8 )   .replace(/Delivway_8/,  Delivway_8 )
                .replace(/SubTot_9/, SubTot_9 )   .replace(/Delivway_9/,  Delivway_9 )
                .replace(/SubTot_10/, SubTot_10)  .replace(/Delivway_10/, Delivway_10)

                .replace(/Vender_1/, Vender_1)    .replace(/Underbur_1/,  Underbur_1 )
                .replace(/Vender_2/, Vender_2)    .replace(/Underbur_2/,  Underbur_2 )
                .replace(/Vender_3/, Vender_3)    .replace(/Underbur_3/,  Underbur_3 )
                .replace(/Vender_4/, Vender_4)    .replace(/Underbur_4/,  Underbur_4 )
                .replace(/Vender_5/, Vender_5 )   .replace(/Underbur_5/,  Underbur_5 )
                .replace(/Vender_6/, Vender_6 )   .replace(/Underbur_6/,  Underbur_6 )
                .replace(/Vender_7/, Vender_7 )   .replace(/Underbur_7/,  Underbur_7 )
                .replace(/Vender_8/, Vender_8 )   .replace(/Underbur_8/,  Underbur_8 )
                .replace(/Vender_9/, Vender_9 )   .replace(/Underbur_9/,  Underbur_9 )
                .replace(/Vender_10/, Vender_10)  .replace(/Underbur_10/, Underbur_10)

                .replace(/DeptM_1/, DeptM_1)    
                .replace(/DeptM_2/, DeptM_2)    
                .replace(/DeptM_3/, DeptM_3)    
                .replace(/DeptM_4/, DeptM_4)    
                .replace(/DeptM_5/, DeptM_5 )   
                .replace(/DeptM_6/, DeptM_6 )   
                .replace(/DeptM_7/, DeptM_7 )   
                .replace(/DeptM_8/, DeptM_8 )   
                .replace(/DeptM_9/, DeptM_9 )   
                .replace(/DeptM_10/, DeptM_10)  

                .replace(/Bill_No/, Bill_No)    
                .replace(/List_No/, List_No)    
                .replace(/ReqDate/, ReqDate)    
                .replace(/Proj_No/, Proj_No)    
                .replace(/Applic_No/, Applic_No )   
                .replace(/DeptName/, DeptName )   
                .replace(/TotalV/, TotalV )   
                .replace(/Exchange/, Exchange )   
                .replace(/Pay_method/, Pay_method )   
                .replace(/Explan/, Explan)  
                .replace(/Entry_Date/, Entry_Date)  

                .replace(/OppName/, OppName)    
                .replace(/DptName/, DptName)    
                .replace(/VipName/, VipName)    
                .replace(/PurName/, PurName)    
                .replace(/PexName/, PexName )   
                .replace(/CfoName/, CfoName )   
                .replace(/PsdName/, PsdName )   
                .replace(/CeoName/, CeoName )   
                .replace(/BodName/, BodName)  

                .replace(/OppDate/, OppDate)    
                .replace(/DptDate/, DptDate)    
                .replace(/VipDate/, VipDate)    
                .replace(/PurDate/, PurDate)    
                .replace(/PexDate/, PexDate )   
                .replace(/CfoDate/, CfoDate )   
                .replace(/PsdDate/, PsdDate )   
                .replace(/CeoDate/, CeoDate )   
                .replace(/BodDate/, BodDate)

                .replace(/Status/, Status)
               ;
                return newHtml;
            }

            const createRpHtml = (sData) => {
                if (sData.length > 0) {
                    let divHtml = '';
                    let newHtml = '';
                    // console.log("f--------------是对", sData[10].BillNo);
                    console.log("金世禄", sData.length);
                   
                    for (let i = 0; i < sData.length; i++) { //sData.length 会重复累加视窗
                        const element = sData[i];
                        newHtml = fillPrintModel({
                            htmlModel: htmlModel,
                            // prodBelong_1: sData[i].prodBelong_1,
                            // prodBelong_2: sData[i].prodBelong_2,
                            // prodBelong_3: sData[i].prodBelong_3,
                            // prodBelong_4: sData[i].prodBelong_4,
                            // prodBelong_5: sData[i].prodBelong_5,
                            BudItem_1:  sData[0].BudItem, SNO_1:  sData[0].SNO,
                            BudItem_2:  sData[1].BudItem, SNO_2:  sData[1].SNO,
                            BudItem_3:  sData[2].BudItem, SNO_3:  sData[2].SNO,
                            BudItem_4:  sData[3].BudItem, SNO_4:  sData[3].SNO,
                            BudItem_5:  sData[4].BudItem, SNO_5:  sData[4].SNO,
                            BudItem_6:  sData[5].BudItem, SNO_6:  sData[5].SNO,
                            BudItem_7:  sData[6].BudItem, SNO_7:  sData[6].SNO,
                            BudItem_8:  sData[7].BudItem, SNO_8:  sData[7].SNO,
                            BudItem_9:  sData[8].BudItem, SNO_9:  sData[8].SNO,
                            BudItem_10: sData[9].BudItem, SNO_10: sData[9].SNO,

                            ItemO_1:  sData[0].ItemO, Descip_1:  sData[0].Descip,
                            ItemO_2:  sData[1].ItemO, Descip_2:  sData[1].Descip,
                            ItemO_3:  sData[2].ItemO, Descip_3:  sData[2].Descip,
                            ItemO_4:  sData[3].ItemO, Descip_4:  sData[3].Descip,
                            ItemO_5:  sData[4].ItemO, Descip_5:  sData[4].Descip,
                            ItemO_6:  sData[5].ItemO, Descip_6:  sData[5].Descip,
                            ItemO_7:  sData[6].ItemO, Descip_7:  sData[6].Descip,
                            ItemO_8:  sData[7].ItemO, Descip_8:  sData[7].Descip,
                            ItemO_9:  sData[8].ItemO, Descip_9:  sData[8].Descip,
                            ItemO_10: sData[9].ItemO, Descip_10: sData[9].Descip,

                            Measure_1:  sData[0].Measure, Invent_1:  sData[0].Invent,
                            Measure_2:  sData[1].Measure, Invent_2:  sData[1].Invent,
                            Measure_3:  sData[2].Measure, Invent_3:  sData[2].Invent,
                            Measure_4:  sData[3].Measure, Invent_4:  sData[3].Invent,
                            Measure_5:  sData[4].Measure, Invent_5:  sData[4].Invent,
                            Measure_6:  sData[5].Measure, Invent_6:  sData[5].Invent,
                            Measure_7:  sData[6].Measure, Invent_7:  sData[6].Invent,
                            Measure_8:  sData[7].Measure, Invent_8:  sData[7].Invent,
                            Measure_9:  sData[8].Measure, Invent_9:  sData[8].Invent,
                            Measure_10: sData[9].Measure, Invent_10: sData[9].Invent,

                            UniPrice_1:  sData[0].UniPrice, QuantAmt_1:  sData[0].QuantAmt,
                            UniPrice_2:  sData[1].UniPrice, QuantAmt_2:  sData[1].QuantAmt,
                            UniPrice_3:  sData[2].UniPrice, QuantAmt_3:  sData[2].QuantAmt,
                            UniPrice_4:  sData[3].UniPrice, QuantAmt_4:  sData[3].QuantAmt,
                            UniPrice_5:  sData[4].UniPrice, QuantAmt_5:  sData[4].QuantAmt,
                            UniPrice_6:  sData[5].UniPrice, QuantAmt_6:  sData[5].QuantAmt,
                            UniPrice_7:  sData[6].UniPrice, QuantAmt_7:  sData[6].QuantAmt,
                            UniPrice_8:  sData[7].UniPrice, QuantAmt_8:  sData[7].QuantAmt,
                            UniPrice_9:  sData[8].UniPrice, QuantAmt_9:  sData[8].QuantAmt,
                            UniPrice_10: sData[9].UniPrice, QuantAmt_10: sData[9].QuantAmt,

                            SubTot_1:  sData[0].SubTot, Delivway_1:  sData[0].Delivway,
                            SubTot_2:  sData[1].SubTot, Delivway_2:  sData[1].Delivway,
                            SubTot_3:  sData[2].SubTot, Delivway_3:  sData[2].Delivway,
                            SubTot_4:  sData[3].SubTot, Delivway_4:  sData[3].Delivway,
                            SubTot_5:  sData[4].SubTot, Delivway_5:  sData[4].Delivway,
                            SubTot_6:  sData[5].SubTot, Delivway_6:  sData[5].Delivway,
                            SubTot_7:  sData[6].SubTot, Delivway_7:  sData[6].Delivway,
                            SubTot_8:  sData[7].SubTot, Delivway_8:  sData[7].Delivway,
                            SubTot_9:  sData[8].SubTot, Delivway_9:  sData[8].Delivway,
                            SubTot_10: sData[9].SubTot, Delivway_10: sData[9].Delivway,

                            Vender_1:  sData[0].Vender, Underbur_1:  sData[0].Underbur,
                            Vender_2:  sData[1].Vender, Underbur_2:  sData[1].Underbur,
                            Vender_3:  sData[2].Vender, Underbur_3:  sData[2].Underbur,
                            Vender_4:  sData[3].Vender, Underbur_4:  sData[3].Underbur,
                            Vender_5:  sData[4].Vender, Underbur_5:  sData[4].Underbur,
                            Vender_6:  sData[5].Vender, Underbur_6:  sData[5].Underbur,
                            Vender_7:  sData[6].Vender, Underbur_7:  sData[6].Underbur,
                            Vender_8:  sData[7].Vender, Underbur_8:  sData[7].Underbur,
                            Vender_9:  sData[8].Vender, Underbur_9:  sData[8].Underbur,
                            Vender_10: sData[9].Vender, Underbur_10: sData[9].Underbur,

                            DeptM_1:  sData[0].DeptM, 
                            DeptM_2:  sData[1].DeptM, 
                            DeptM_3:  sData[2].DeptM, 
                            DeptM_4:  sData[3].DeptM, 
                            DeptM_5:  sData[4].DeptM, 
                            DeptM_6:  sData[5].DeptM, 
                            DeptM_7:  sData[6].DeptM, 
                            DeptM_8:  sData[7].DeptM, 
                            DeptM_9:  sData[8].DeptM, 
                            DeptM_10: sData[9].DeptM, 
          
                            Bill_No:  sData[10].BillNo, 
                            List_No:  "表单编号: "+sData[10].ListNo, 
                            ReqDate:  "申请日期: "+sData[10].RequestDate, 
                            Proj_No:  "计划案号: "+sData[10].ProjectNo, 
                            Applic_No:  "申请单编号: "+sData[10].ApplicNo, 
                            DeptName:  "部門: "+sData[10].DeptName, 
                            TotalV:   sData[10].TotalValue, 
                            Exchange:   sData[10].Currency, 
                            Pay_method:   sData[10].Payment, 
                            Explan:  sData[10].Explanation, 
                            Entry_Date: "申请日期: "+sData[10].EntryDate, 

                            OppName:  sData[11].OppName, 
                            DptName:  sData[11].DptName, 
                            VipName:  sData[11].VipName, 
                            PurName:  sData[11].PurName, 
                            PexName:  sData[11].PexName, 
                            CfoName:  sData[11].CfoName, 
                            PsdName:  sData[11].PsdName, 
                            CeoName:  sData[11].CeoName, 
                            BodName:  sData[11].BodName, 

                            OppDate:  sData[11].OppDate, 
                            DptDate:  sData[11].DptDate, 
                            VipDate:  sData[11].VipDate, 
                            PurDate:  sData[11].PurDate, 
                            PexDate:  sData[11].PexDate, 
                            CfoDate:  sData[11].CfoDate, 
                            PsdDate:  sData[11].PsdDate, 
                            CeoDate:  sData[11].CeoDate, 
                            BodDate:  sData[11].BodDate, 

                            Status:  StatusOK, 
     
                        })
                        if (i === 0) {
                            newHtml = newHtml.replace(/STYLE="page-break-before:always"/, '');
                        }
                    }
                    divHtml = divHtml + newHtml;                 //不要放在廻圈理
                    $('#listPrintViewDiv').html(divHtml);
                }
            }
            createRpHtml(sData);

           
            if(CurLevel =='1'){
                $("#mandpt").addClass("fee-approval"); 
            }
            if(CurLevel =='2'){
                $("#manvip").addClass("fee-approval"); 
            }
            if(CurLevel =='3'){
                $("#manpur").addClass("fee-approval"); 
            }
            if(CurLevel =='4'){
                $("#manpex").addClass("fee-approval"); 
            }
            if(CurLevel =='5'){
                $("#mancfo").addClass("fee-approval"); 
            }
            if(CurLevel =='6'){
                $("#manpsd").addClass("fee-approval"); 
            }
            if(CurLevel =='7'){
                $("#manceo").addClass("fee-approval"); 
            }
            if(CurLevel =='8'){
                $("#manbod").addClass("fee-approval"); 
            }
            divHtml = '';
            newHtml = '';
            htmlModel = '';
        },
        error: function () {
        }
    })
}
function searchFile(mode) {
    var qrybillno = $('#mainbillno').val();
    var qryclass = $('#mainPclass').val();
    var Auditor = sessionName;
    const emdata = [
    ]
    let dataArr = [];
    var reportType = 'CherryFee';
    var arrange = 'search';
    var DateB = $("#taskMakeDateB").val();
    var DateE = $("#taskMakeDateE").val();
    var taskData = '';
    if (mode == '1') {
        taskData = {
            "reportType": reportType, "arrange": arrange, "BillNo": qrybillno, "PartsClass": qryclass ,
            "CurWorkId":  sessionAID , "CurName": sessionName ,
        };
    } else {
        taskData = {
            "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE ,
            "CurWorkId":  sessionAID , "CurName": sessionName ,
        };
    }

    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMFinc/getRoute",
        success: function (data) {
            dataArr = data;
            const json2 = JSON.stringify(dataArr);
            const bjob = JSON.parse(json2);
            console.log("端装", json2, "机动", data.length);
            for (var i = 0; i < dataArr.length; i++) {
                var dataTTT = dataArr[i];
                emdata.push(dataTTT);
            }
            var table = layui.table;
            centerTable = table;
            table = $.extend(table, { config: { checkName: 'checked' } });
            table.render({
                elem: '#test'
                , data: emdata
                , toolbar: '#toolbarDemo'
                , defaultToolbar: ['filter', 'exports', 'print', {
                    title: '提示'
                    , layEvent: 'LAYTABLE_TIPS'
                    , icon: 'layui-icon-tips'
                }]
                , width :1350
                , title: '数据表'
                , cols: [[
                    { type: 'checkbox', fixed: 'left' }
                    , { field: 'BillNo', title: '系统号', width: 140, sort: true }
                    , { field: 'ListNo', title: '表单编号', width: 100 , sort: true }
                    , { field: 'RequestDate', title: '申请日期', width: 120, sort: true  }
                    , { field: 'ProjectNo', title: '计划案号', width: 100, sort: true  }
                    , { field: 'ApplicNo', title: '申请单号', width: 90 }
                    , { field: 'DeptName', title: '使用部门', width: 80 }
                    , { field: 'StaffID', title: '提交人', width: 80 }
                    , { field: 'StaffName', title: '提交人', width: 80 }
                    , { field: 'TotalValue', title: '总金额', width: 70 }
                    , { field: 'Currency', title: '币别', width: 70 }
                    , { field: 'Payment', title: '付款方式', width: 70 }
                    , { field: 'CurName', title: '审批人', width: 70 }
                    , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200 }
                ]]
                , page: true
            });
            table.on('toolbar(test)', function (obj) {
                objCenter = obj;
                var checkStatus = table.checkStatus(obj.config.id);
            
                switch (obj.event) {
                    case 'viewSumary':
                        var dataARR = (checkStatus.data);
                        // console.log("z智阭", JSON.stringify(checkStatus));
                        console.log("西阭", (dataARR[0].BillNo));
                        shuffleWin(  dataARR[0].BillNo );
                        // <DIV STYLE="page-break-before:always">
                        $('#kisswindow').modal('show');
                        break;
                    case 'massReject':
                        break;
                    case 'isAll':
                        layer.msg(checkStatus.isAll ? '全选' : '未全选');
                        break;
                    case 'LAYTABLE_TIPS':
                        layer.alert('这是工具栏右侧自定义的一个图标按钮');
                };
            });
            table.on('tool(test)', function (obj) {
                var data = obj.data;
                var Parts_BillNo = data.BillNo;
                 
                if (obj.event === 'analysis') {
                    shuffleWin( Parts_BillNo );
                    // <DIV STYLE="page-break-before:always">
                    $('#kisswindow').modal('show');
                     
                } else if (obj.event === 'approval') {
                    layer.confirm('进行审批同意吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'agreeFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId":  sessionAID , "CurName": sessionName ,
                        }
                        layer.alert("同意此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了']
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    var paramType = missType;
                                    var paramClearA = encodeURI(encodeURI(qrybillno)); 
                                    console.log("双", missType, "夏", Parts_BillNo, "迎", DateB, "我", DateE);
                                    window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA +   "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'reject') {
                    layer.confirm('进行审批驳回吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'rejectFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId":  sessionAID , "CurName": sessionName 
                        }
                        layer.alert("驳回此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了'] //按钮
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    var paramType = missType;
                                    var paramClearA = encodeURI(encodeURI(qrybillno));
                                    var paramClearB = encodeURI(encodeURI(qryclass));
                                    // console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                    window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA + "&missB=" + paramClearB + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'repeat') {   

                }
            });
        },
        error: function () {
        }
    })
}

$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});