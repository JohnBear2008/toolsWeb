//FnSubB.js
function shuffleB(  BillNo ) {
    var reportType = 'BulletTrip';
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
            sData = [];
            let htmlModel = '';
            let CurLevel = '';
            $('#listPrintViewDiv').html('');
            htmlModel = '' +
        '<table width="1000" border="3" border = "1" > ' +
        '  <tr> ' +
        '    <td width="50" colspan="8"  height="30" align="center"  > ' +
        '      <h3>国内外出差报销汇总及补贴申请表</h3> ' +
        '    </td> ' +
        '    <td width="50" colspan="1"  height="30" align="center"  > ' +
        '      版本3 ' +
        '    </td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="2" height="25">表单编号ApplicNo  </td> ' +
        '    <td width="50" class="coffee-drop" align="center" colspan="5" height="30">StatusOK </td> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="2" height="25">部門 DeptName </td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="4" height="25">出 差: BusiMan  </td> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="5" height="25">出差地区：BusiArea</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="4" height="25">LeaveDate 出发时间 LeaveHour 时 LeaveMin 分</td> ' +
        '    <td width="50" bgcolor="#FAF0E6" colspan="5" height="25">BackDate 返回时间 BackHour 时 BackMin 分</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" colspan="9"  height="30"  > ' +
        '      出差内容报告： ' +
        '    </td> ' +
        '  </tr> ' +
        '  <tr>								 ' +
        '    <td width="50" class="feeSubCol">日期</td> ' +
        '    <td width="50" class="feeSubCol">接洽人</td> ' +
        '    <td width="50" class="feeSubCol" colspan="6" >工作重点/内容</td> ' +
        '    <td width="50" class="feeSubCol">备注</td>  ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" height="30">DateDate_15</td> ' +
        '    <td width="50" height="30">CustCust_15</td> ' +
        '    <td width="50" height="30" colspan="6" >ReptRept_15</td> ' +
        '    <td width="50" height="30">NoteNote_15</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" height="30">DateDate_16</td> ' +
        '    <td width="50" height="30">CustCust_16</td> ' +
        '    <td width="50" height="30" colspan="6" >ReptRept_16</td> ' +
        '    <td width="50" height="30">NoteNote_16</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" height="30">DateDate_17</td> ' +
        '    <td width="50" height="30">CustCust_17</td> ' +
        '    <td width="50" height="30" colspan="6" >ReptRept_17</td> ' +
        '    <td width="50" height="30">NoteNote_17</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" height="30">DateDate_18</td> ' +
        '    <td width="50" height="30">CustCust_18</td> ' +
        '    <td width="50" height="30" colspan="6" >ReptRept_18</td> ' +
        '    <td width="50" height="30">NoteNote_18</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" height="30">DateDate_19</td> ' +
        '    <td width="50" height="30">CustCust_19</td> ' +
        '    <td width="50" height="30" colspan="6" >ReptRept_19</td> ' +
        '    <td width="50" height="30">NoteNote_19</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td width="50" colspan="9" height="30" >出差费用日支明细：</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '    <td id="manOP" width="50" class="feeSubCol" colspan="1">日 期</td> ' +
        '   <td width="50" height="25">LiveDateA</td>' +
        '   <td width="50" height="25">LiveDateB</td>' +
        '   <td width="50" height="25">LiveDateC</td>' +
        '   <td width="50" height="25">LiveDateD</td>' +
        '   <td width="50" height="25">LiveDateE</td>' +
        '   <td width="50" height="25">LiveDateF</td>' +
        '    <td id="mancfo" width="50" class="feeSubCol" colspan="1">共计</td> ' +
        '    <td id="manpsd" width="50" class="feeSubCol" colspan="1">其中进项税</td> ' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">出发地 </td> ' +
        '   <td width="50" height="25">TrafficA_0</td>' +
        '   <td width="50" height="25">TrafficB_0</td>' +
        '   <td width="50" height="25">TrafficC_0</td>' +
        '   <td width="50" height="25">TrafficD_0</td>' +
        '   <td width="50" height="25">TrafficE_0</td>' +
        '   <td width="50" height="25">TrafficF_0</td>' +
        '   <td width="50" height="25">TicTotal_0</td>' +
        '   <td width="50" height="25">InputVAT_0</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">目的地 </td> ' +
        '   <td width="50" height="25">TrafficA_1</td>' +
        '   <td width="50" height="25">TrafficB_1</td>' +
        '   <td width="50" height="25">TrafficC_1</td>' +
        '   <td width="50" height="25">TrafficD_1</td>' +
        '   <td width="50" height="25">TrafficE_1</td>' +
        '   <td width="50" height="25">TrafficF_1</td>' +
        '   <td width="50" height="25">TicTotal_1</td>' +
        '   <td width="50" height="25">InputVAT_1</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">机票/机场税 </td> ' +
        '   <td width="50" height="25">TrafficA_2</td>' +
        '   <td width="50" height="25">TrafficB_2</td>' +   
        '   <td width="50" height="25">TrafficC_2</td>' +
        '   <td width="50" height="25">TrafficD_2</td>' +
        '   <td width="50" height="25">TrafficE_2</td>' +
        '   <td width="50" height="25">TrafficF_2</td>' +
        '   <td width="50" height="25">TicTotal_2</td>' +
        '   <td width="50" height="25">InputVAT_2</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">汽车费 </td> ' +
        '   <td width="50" height="25">TrafficA_3</td>' +
        '   <td width="50" height="25">TrafficB_3</td>' +   
        '   <td width="50" height="25">TrafficC_3</td>' +
        '   <td width="50" height="25">TrafficD_3</td>' +
        '   <td width="50" height="25">TrafficE_3</td>' +
        '   <td width="50" height="25">TrafficF_3</td>' +
        '   <td width="50" height="25">TicTotal_3</td>' +
        '   <td width="50" height="25">InputVAT_3</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">火车费 </td> ' +
        '   <td width="50" height="25">TrafficA_4</td>' +
        '   <td width="50" height="25">TrafficB_4</td>' +   
        '   <td width="50" height="25">TrafficC_4</td>' +
        '   <td width="50" height="25">TrafficD_4</td>' +
        '   <td width="50" height="25">TrafficE_4</td>' +
        '   <td width="50" height="25">TrafficF_4</td>' +
        '   <td width="50" height="25">TicTotal_4</td>' +
        '   <td width="50" height="25">InputVAT_4</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">船泊费 </td> ' +
        '   <td width="50" height="25">TrafficA_5</td>' +
        '   <td width="50" height="25">TrafficB_5</td>' +   
        '   <td width="50" height="25">TrafficC_5</td>' +
        '   <td width="50" height="25">TrafficD_5</td>' +
        '   <td width="50" height="25">TrafficE_5</td>' +
        '   <td width="50" height="25">TrafficF_5</td>' +
        '   <td width="50" height="25">TicTotal_5</td>' +
        '   <td width="50" height="25">InputVAT_5</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">计程车费 </td> ' +
        '   <td width="50" height="25">TrafficA_6</td>' +
        '   <td width="50" height="25">TrafficB_6</td>' +   
        '   <td width="50" height="25">TrafficC_6</td>' +
        '   <td width="50" height="25">TrafficD_6</td>' +
        '   <td width="50" height="25">TrafficE_6</td>' +
        '   <td width="50" height="25">TrafficF_6</td>' +
        '   <td width="50" height="25">TicTotal_6</td>' +
        '   <td width="50" height="25">InputVAT_6</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">租车 </td> ' +
        '   <td width="50" height="25">TrafficA_7</td>' +
        '   <td width="50" height="25">TrafficB_7</td>' +   
        '   <td width="50" height="25">TrafficC_7</td>' +
        '   <td width="50" height="25">TrafficD_7</td>' +
        '   <td width="50" height="25">TrafficE_7</td>' +
        '   <td width="50" height="25">TrafficF_7</td>' +
        '   <td width="50" height="25">TicTotal_7</td>' +
        '   <td width="50" height="25">InputVAT_7</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">过路/桥费 </td> ' +
        '   <td width="50" height="25">TrafficA_8</td>' +
        '   <td width="50" height="25">TrafficB_8</td>' +   
        '   <td width="50" height="25">TrafficC_8</td>' +
        '   <td width="50" height="25">TrafficD_8</td>' +
        '   <td width="50" height="25">TrafficE_8</td>' +
        '   <td width="50" height="25">TrafficF_8</td>' +
        '   <td width="50" height="25">TicTotal_8</td>' +
        '   <td width="50" height="25">InputVAT_8</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">住宿费 </td> ' +
        '   <td width="50" height="25">TrafficA_9</td>' +
        '   <td width="50" height="25">TrafficB_9</td>' +   
        '   <td width="50" height="25">TrafficC_9</td>' +
        '   <td width="50" height="25">TrafficD_9</td>' +
        '   <td width="50" height="25">TrafficE_9</td>' +
        '   <td width="50" height="25">TrafficF_9</td>' +
        '   <td width="50" height="25">TicTotal_9</td>' +
        '   <td width="50" height="25">InputVAT_9</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30" >酒店名称</td> ' +
        '   <td width="50" height="25" colspan="4">HotelName</td>' +
        '   <td width="50" height="25" colspan="2">酒店电话</td>' +
        '   <td width="50" height="25" colspan="2">HotelTel</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">早 餐补贴</td> ' +
        '   <td width="50" height="25">TrafficA_10</td>' +
        '   <td width="50" height="25">TrafficB_10</td>' +   
        '   <td width="50" height="25">TrafficC_10</td>' +
        '   <td width="50" height="25">TrafficD_10</td>' +
        '   <td width="50" height="25">TrafficE_10</td>' +
        '   <td width="50" height="25">TrafficF_10</td>' +
        '   <td width="50" height="25">TicTotal_10</td>' +
        '   <td width="50" height="25">InputVAT_10</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">午 餐补贴 </td> ' +
        '   <td width="50" height="25">TrafficA_11</td>' +
        '   <td width="50" height="25">TrafficB_11</td>' +   
        '   <td width="50" height="25">TrafficC_11</td>' +
        '   <td width="50" height="25">TrafficD_11</td>' +
        '   <td width="50" height="25">TrafficE_11</td>' +
        '   <td width="50" height="25">TrafficF_11</td>' +
        '   <td width="50" height="25">TicTotal_11</td>' +
        '   <td width="50" height="25">InputVAT_11</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">晚 餐补贴 </td> ' +
        '   <td width="50" height="25">TrafficA_12</td>' +
        '   <td width="50" height="25">TrafficB_12</td>' +   
        '   <td width="50" height="25">TrafficC_12</td>' +
        '   <td width="50" height="25">TrafficD_12</td>' +
        '   <td width="50" height="25">TrafficE_12</td>' +
        '   <td width="50" height="25">TrafficF_12</td>' +
        '   <td width="50" height="25">TicTotal_12</td>' +
        '   <td width="50" height="25">InputVAT_12</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">其他费用 </td> ' +
        '   <td width="50" height="25">TrafficA_13</td>' +
        '   <td width="50" height="25">TrafficB_13</td>' +   
        '   <td width="50" height="25">TrafficC_13</td>' +
        '   <td width="50" height="25">TrafficD_13</td>' +
        '   <td width="50" height="25">TrafficE_13</td>' +
        '   <td width="50" height="25">TrafficF_13</td>' +
        '   <td width="50" height="25">TicTotal_13</td>' +
        '   <td width="50" height="25">InputVAT_13</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">当日小计 </td> ' +
        '   <td width="50" height="25">TrafficA_14</td>' +
        '   <td width="50" height="25">TrafficB_14</td>' +   
        '   <td width="50" height="25">TrafficC_14</td>' +
        '   <td width="50" height="25">TrafficD_14</td>' +
        '   <td width="50" height="25">TrafficE_14</td>' +
        '   <td width="50" height="25">TrafficF_14</td>' +
        '   <td width="50" height="25">TicTotal_14</td>' +
        '   <td width="50" height="25">InputVAT_14</td>' +
        '  </tr> ' +
        '  <tr> ' +
        '   <td width="50" height="30">备注 </td> ' +
        '   <td width="50" height="25"  colspan="8">Explanation</td>' +
        '  </tr> ' +
            '  <tr> ' +
            '    <td width="50" height="30" >是否有超支 </td> ' +
            '    <td width="50" height="30" colspan="2">IsOver </td> ' +
            '    <td width="50" height="30" colspan="2"> 超支额度</td> ' +
            '    <td width="50" height="30" colspan="4">Overspend 元</td> ' +
            '  </tr> ' +
            '  <tr> ' +
            '    <td width="50" height="30" >申请人 </td> ' +
            '    <td width="50" height="30" colspan="2"> OppName</td> ' +
            '    <td width="50" height="30"  > 审核：</td> ' +
            '    <td width="50" height="30" colspan="2"> MagName</td> ' +
            '    <td width="50" height="30"  > 批准：</td> ' +
            '    <td width="50" height="30" colspan="2"> VipName</td> ' +
            '  </tr> ' +
            '  <tr> ' +
            '    <td width="50" height="30" > 年 月 日 </td> ' +
            '    <td width="50" height="30" colspan="2"> OppDate</td> ' +
            '    <td width="50" height="30"  >  </td> ' +
            '    <td width="50" height="30" colspan="2"> MagDate</td> ' +
            '    <td width="50" height="30"  >  </td> ' +
            '    <td width="50" height="30" colspan="2"> VipDate</td> ' +
            '  </tr> ' +
            '</table> ' +
                '</DIV>';
            for (let i = 0; i < 20; i++) {
                objT = {
                    "SNNo": bjob[i].SNNo,
                    "TrafficA": bjob[i].TrafficA,
                    "TrafficB": bjob[i].TrafficB,
                    "TrafficC": bjob[i].TrafficC,
                    "TrafficD": bjob[i].TrafficD,
                    "TrafficE": bjob[i].TrafficE,
                    "TrafficF": bjob[i].TrafficF,
                    "TicTotal": bjob[i].TicTotal,
                    "InputVAT": bjob[i].InputVAT,
                    "TripDate": (bjob[i].TripDate == null ? '' : bjob[i].TripDate) ,
                    "TripCust": bjob[i].TripCust,
                    "TripRept": bjob[i].TripRept,
                    "TripNote": bjob[i].TripNote,
                }
                if(i>14 && i< 20){
                    console.log( "夏目理绪" ,bjob[i].TripDate); 
                }
                sData.push( objT );
            }
            for (let i = 20; i < 21; i++) {
                var objU = {
                    "BillNo": bjob[i].BillNo,
                    "ApplicNo": bjob[i].ApplicNo,
                    "Version": bjob[i].Version,
                    "BusiMan": bjob[i].BusiMan,
                    "BusiArea": bjob[i].BusiArea,
                    "DeptName": bjob[i].DeptName,
                    "StaffID": bjob[i].StaffID,
                    "StaffName": bjob[i].StaffName,
                    "LeaveDate": bjob[i].LeaveDate,
                    "LeaveHour": bjob[i].LeaveHour,
                    "LeaveMin": bjob[i].LeaveMin,
                    "BackDate": bjob[i].BackDate,
                    "BackHour": bjob[i].BackHour,
                    "BackMin": bjob[i].BackMin,
                    "LiveDateA": bjob[i].LiveDateA,
                    "LiveDateB": bjob[i].LiveDateB,
                    "LiveDateC": bjob[i].LiveDateC,
                    "LiveDateD": bjob[i].LiveDateD,
                    "LiveDateE": bjob[i].LiveDateE,
                    "LiveDateF": bjob[i].LiveDateF,
                    "Explanation": bjob[i].Explanation,
                    "BackMin": bjob[i].BackMin,
                    "Overspend": bjob[i].Overspend,
                    "IsOver": bjob[i].IsOver,
                    "HotelName": bjob[i].HotelName,
                    "HotelTel": bjob[i].HotelTel,
                    "EntryDate": bjob[i].EntryDate,
                    "BillStatus": bjob[i].BillStatus,       
                }
                sData.push( objU );
            }
            for (let i = 21; i < 22; i++) {
                var objX = {
                    "OppName": bjob[i].OppName, "OppDate": bjob[i].OppDate,
                    "MagName": bjob[i].MagName, "MagDate": bjob[i].MagDate,
                    "VipName": bjob[i].VipName, "VipDate": bjob[i].VipDate,
                    "PurName": bjob[i].PurName, "PurDate": bjob[i].PurDate,
                    "PexName": bjob[i].PexName, "PexDate": bjob[i].PexDate,
                    "CfoName": bjob[i].CfoName, "CfoDate": bjob[i].CfoDate,
                    "PsdName": bjob[i].PsdName, "PsdDate": bjob[i].PsdDate,
                    "CeoName": bjob[i].CeoName, "CeoDate": bjob[i].CeoDate,
                    "BodName": bjob[i].BodName, "BodDate": bjob[i].BodDate,
                    "CurText": bjob[i].CurText, "CurStatus": bjob[i].CurStatus,
                    "CurLevel": bjob[i].CurLevel, "TermiLevel": bjob[i].TermiLevel,
                    "CurName": bjob[i].CurName, "SendText": bjob[i].SendText, 
                }
                sData.push( objX );
            }
            $('#listPrintViewDiv').html(htmlModel);
            var fillPrintModel = ({
                htmlModel,
                SNNo_0  , TrafficA_0 , TrafficB_0 , TrafficC_0 , TrafficD_0 , TrafficE_0 , TrafficF_0 , TicTotal_0 , InputVAT_0 , TripDate_0  ,TripCust_0 , TripRept_0 ,TripNote_0 ,    
                SNNo_1  , TrafficA_1 , TrafficB_1 , TrafficC_1 , TrafficD_1 , TrafficE_1 , TrafficF_1 , TicTotal_1 , InputVAT_1 , TripDate_1  ,TripCust_1 , TripRept_1 ,TripNote_1 ,    
                SNNo_2  , TrafficA_2 , TrafficB_2 , TrafficC_2 , TrafficD_2 , TrafficE_2 , TrafficF_2 , TicTotal_2 , InputVAT_2 , TripDate_2  ,TripCust_2 , TripRept_2 ,TripNote_2 ,    
                SNNo_3  , TrafficA_3 , TrafficB_3 , TrafficC_3 , TrafficD_3 , TrafficE_3 , TrafficF_3 , TicTotal_3 , InputVAT_3 , TripDate_3  ,TripCust_3 , TripRept_3 ,TripNote_3 ,    
                SNNo_4  , TrafficA_4 , TrafficB_4 , TrafficC_4 , TrafficD_4 , TrafficE_4 , TrafficF_4 , TicTotal_4 , InputVAT_4 , TripDate_4  ,TripCust_4 , TripRept_4 ,TripNote_4 ,    
                SNNo_5  , TrafficA_5 , TrafficB_5 , TrafficC_5 , TrafficD_5 , TrafficE_5 , TrafficF_5 , TicTotal_5 , InputVAT_5 , TripDate_5  ,TripCust_5 , TripRept_5 ,TripNote_5 ,    
                SNNo_6  , TrafficA_6 , TrafficB_6 , TrafficC_6 , TrafficD_6 , TrafficE_6 , TrafficF_6 , TicTotal_6 , InputVAT_6 , TripDate_6  ,TripCust_6 , TripRept_6 ,TripNote_6 ,    
                SNNo_7  , TrafficA_7 , TrafficB_7 , TrafficC_7 , TrafficD_7 , TrafficE_7 , TrafficF_7 , TicTotal_7 , InputVAT_7 , TripDate_7  ,TripCust_7 , TripRept_7 ,TripNote_7 ,    
                SNNo_8  , TrafficA_8 , TrafficB_8 , TrafficC_8 , TrafficD_8 , TrafficE_8 , TrafficF_8 , TicTotal_8 , InputVAT_8 , TripDate_8  ,TripCust_8 , TripRept_8 ,TripNote_8 ,    
                SNNo_9  , TrafficA_9 , TrafficB_9 , TrafficC_9 , TrafficD_9 , TrafficE_9 , TrafficF_9 , TicTotal_9 , InputVAT_9 , TripDate_9  ,TripCust_9 , TripRept_9 ,TripNote_9 ,    
                SNNo_10 , TrafficA_10, TrafficB_10, TrafficC_10, TrafficD_10, TrafficE_10, TrafficF_10, TicTotal_10, InputVAT_10, TripDate_10 ,TripCust_10, TripRept_10,TripNote_10,    
                SNNo_11 , TrafficA_11, TrafficB_11, TrafficC_11, TrafficD_11, TrafficE_11, TrafficF_11, TicTotal_11, InputVAT_11, TripDate_11 ,TripCust_11, TripRept_11,TripNote_11,    
                SNNo_12 , TrafficA_12, TrafficB_12, TrafficC_12, TrafficD_12, TrafficE_12, TrafficF_12, TicTotal_12, InputVAT_12, TripDate_12 ,TripCust_12, TripRept_12,TripNote_12,    
                SNNo_13 , TrafficA_13, TrafficB_13, TrafficC_13, TrafficD_13, TrafficE_13, TrafficF_13, TicTotal_13, InputVAT_13, TripDate_13 ,TripCust_13, TripRept_13,TripNote_13,    
                SNNo_14 , TrafficA_14, TrafficB_14, TrafficC_14, TrafficD_14, TrafficE_14, TrafficF_14, TicTotal_14, InputVAT_14, TripDate_14 ,TripCust_14, TripRept_14,TripNote_14,    
                SNNo_15 , TrafficA_15, TrafficB_15, TrafficC_15, TrafficD_15, TrafficE_15, TrafficF_15, TicTotal_15, InputVAT_15, DateDate_15 ,CustCust_15, ReptRept_15,NoteNote_15,    
                SNNo_16 , TrafficA_16, TrafficB_16, TrafficC_16, TrafficD_16, TrafficE_16, TrafficF_16, TicTotal_16, InputVAT_16, DateDate_16 ,CustCust_16, ReptRept_16,NoteNote_16,    
                SNNo_17 , TrafficA_17, TrafficB_17, TrafficC_17, TrafficD_17, TrafficE_17, TrafficF_17, TicTotal_17, InputVAT_17, DateDate_17 ,CustCust_17, ReptRept_17,NoteNote_17,    
                SNNo_18 , TrafficA_18, TrafficB_18, TrafficC_18, TrafficD_18, TrafficE_18, TrafficF_18, TicTotal_18, InputVAT_18, DateDate_18 ,CustCust_18, ReptRept_18,NoteNote_18,    
                SNNo_19 , TrafficA_19, TrafficB_19, TrafficC_19, TrafficD_19, TrafficE_19, TrafficF_19, TicTotal_19, InputVAT_19, DateDate_19 ,CustCust_19, ReptRept_19,NoteNote_19,    
                             
                BillNo   ,   ApplicNo   ,   Version   ,   BusiMan   ,   BusiArea   ,   DeptName   ,
                StaffID   ,   StaffName   ,   LeaveDate   ,  LeaveHour   ,   LeaveMin   ,   BackDate   ,
                BackHour   ,   BackMin   ,   LiveDateA   ,   LiveDateB   ,   LiveDateC   ,   LiveDateD   ,
                LiveDateE   ,   LiveDateF   ,   Explanation   ,   Overspend   ,   IsOver   ,   HotelName   ,
                HotelTel   ,   EntryDate   ,   BillStatus   ,

                OppName, MagName, VipName, PurName, PexName, CfoName, PsdName, CeoName, BodName,
                OppDate, MagDate, VipDate, PurDate, PexDate, CfoDate, PsdDate, CeoDate, BodDate,
                StatusOK,
                }) => {
                let newHtml = htmlModel
                .replace(/SNNo_0/, SNNo_0)    .replace(/TrafficA_0/,  TrafficA_0 )
                .replace(/SNNo_1/, SNNo_1)    .replace(/TrafficA_1/,  TrafficA_1 )
                .replace(/SNNo_2/, SNNo_2)    .replace(/TrafficA_2/,  TrafficA_2 )
                .replace(/SNNo_3/, SNNo_3)    .replace(/TrafficA_3/,  TrafficA_3 )
                .replace(/SNNo_4/, SNNo_4)    .replace(/TrafficA_4/,  TrafficA_4 )
                .replace(/SNNo_5/, SNNo_5)    .replace(/TrafficA_5/,  TrafficA_5 )
                .replace(/SNNo_6/, SNNo_6)    .replace(/TrafficA_6/,  TrafficA_6 )
                .replace(/SNNo_7/, SNNo_7)    .replace(/TrafficA_7/,  TrafficA_7 )
                .replace(/SNNo_8/, SNNo_8)    .replace(/TrafficA_8/,  TrafficA_8 )
                .replace(/SNNo_9/, SNNo_9)    .replace(/TrafficA_9/,  TrafficA_9 )
                .replace(/SNNo_10/, SNNo_10)  .replace(/TrafficA_10/, TrafficA_10)
                .replace(/SNNo_11/, SNNo_11)  .replace(/TrafficA_11/, TrafficA_11)
                .replace(/SNNo_12/, SNNo_12)  .replace(/TrafficA_12/, TrafficA_12)
                .replace(/SNNo_13/, SNNo_13)  .replace(/TrafficA_13/, TrafficA_13)
                .replace(/SNNo_14/, SNNo_14)  .replace(/TrafficA_14/, TrafficA_14)
                .replace(/SNNo_15/, SNNo_15)  .replace(/TrafficA_15/, TrafficA_15)
                .replace(/SNNo_16/, SNNo_16)  .replace(/TrafficA_16/, TrafficA_16)
                .replace(/SNNo_17/, SNNo_17)  .replace(/TrafficA_17/, TrafficA_17)
                .replace(/SNNo_18/, SNNo_18)  .replace(/TrafficA_18/, TrafficA_18)
                .replace(/SNNo_19/, SNNo_19)  .replace(/TrafficA_19/, TrafficA_19)

               
                .replace(/TrafficB_0/,  TrafficB_0 )
                .replace(/TrafficB_1/,  TrafficB_1 )
                .replace(/TrafficB_2/,  TrafficB_2 )
                .replace(/TrafficB_3/,  TrafficB_3 )
                .replace(/TrafficB_4/,  TrafficB_4 )
                .replace(/TrafficB_5/,  TrafficB_5 )
                .replace(/TrafficB_6/,  TrafficB_6 )
                .replace(/TrafficB_7/,  TrafficB_7 )
                .replace(/TrafficB_8/,  TrafficB_8 )
                .replace(/TrafficB_9/,  TrafficB_9 )
                .replace(/TrafficB_10/, TrafficB_10)
                .replace(/TrafficB_11/, TrafficB_11)
                .replace(/TrafficB_12/, TrafficB_12)
                .replace(/TrafficB_13/, TrafficB_13)
                .replace(/TrafficB_14/, TrafficB_14)
                .replace(/TrafficB_15/, TrafficB_15)
                .replace(/TrafficB_16/, TrafficB_16)
                .replace(/TrafficB_17/, TrafficB_17)
                .replace(/TrafficB_18/, TrafficB_18)
                .replace(/TrafficB_19/, TrafficB_19)

                .replace(/TrafficC_0/,  TrafficC_0 )
                .replace(/TrafficC_1/,  TrafficC_1 )
                .replace(/TrafficC_2/,  TrafficC_2 )
                .replace(/TrafficC_3/,  TrafficC_3 )
                .replace(/TrafficC_4/,  TrafficC_4 )
                .replace(/TrafficC_5/,  TrafficC_5 )
                .replace(/TrafficC_6/,  TrafficC_6 )
                .replace(/TrafficC_7/,  TrafficC_7 )
                .replace(/TrafficC_8/,  TrafficC_8 )
                .replace(/TrafficC_9/,  TrafficC_9 )
                .replace(/TrafficC_10/, TrafficC_10)
                .replace(/TrafficC_11/, TrafficC_11)
                .replace(/TrafficC_12/, TrafficC_12)
                .replace(/TrafficC_13/, TrafficC_13)
                .replace(/TrafficC_14/, TrafficC_14)
                .replace(/TrafficC_15/, TrafficC_15)
                .replace(/TrafficC_16/, TrafficC_16)
                .replace(/TrafficC_17/, TrafficC_17)
                .replace(/TrafficC_18/, TrafficC_18)
                .replace(/TrafficC_19/, TrafficC_19)

                .replace(/TrafficD_0/,  TrafficD_0 )
                .replace(/TrafficD_1/,  TrafficD_1 )
                .replace(/TrafficD_2/,  TrafficD_2 )
                .replace(/TrafficD_3/,  TrafficD_3 )
                .replace(/TrafficD_4/,  TrafficD_4 )
                .replace(/TrafficD_5/,  TrafficD_5 )
                .replace(/TrafficD_6/,  TrafficD_6 )
                .replace(/TrafficD_7/,  TrafficD_7 )
                .replace(/TrafficD_8/,  TrafficD_8 )
                .replace(/TrafficD_9/,  TrafficD_9 )
                .replace(/TrafficD_10/, TrafficD_10)
                .replace(/TrafficD_11/, TrafficD_11)
                .replace(/TrafficD_12/, TrafficD_12)
                .replace(/TrafficD_13/, TrafficD_13)
                .replace(/TrafficD_14/, TrafficD_14)
                .replace(/TrafficD_15/, TrafficD_15)
                .replace(/TrafficD_16/, TrafficD_16)
                .replace(/TrafficD_17/, TrafficD_17)
                .replace(/TrafficD_18/, TrafficD_18)
                .replace(/TrafficD_19/, TrafficD_19)

                .replace(/TrafficE_0/,  TrafficE_0 )
                .replace(/TrafficE_1/,  TrafficE_1 )
                .replace(/TrafficE_2/,  TrafficE_2 )
                .replace(/TrafficE_3/,  TrafficE_3 )
                .replace(/TrafficE_4/,  TrafficE_4 )
                .replace(/TrafficE_5/,  TrafficE_5 )
                .replace(/TrafficE_6/,  TrafficE_6 )
                .replace(/TrafficE_7/,  TrafficE_7 )
                .replace(/TrafficE_8/,  TrafficE_8 )
                .replace(/TrafficE_9/,  TrafficE_9 )
                .replace(/TrafficE_10/, TrafficE_10)
                .replace(/TrafficE_11/, TrafficE_11)
                .replace(/TrafficE_12/, TrafficE_12)
                .replace(/TrafficE_13/, TrafficE_13)
                .replace(/TrafficE_14/, TrafficE_14)
                .replace(/TrafficE_15/, TrafficE_15)
                .replace(/TrafficE_16/, TrafficE_16)
                .replace(/TrafficE_17/, TrafficE_17)
                .replace(/TrafficE_18/, TrafficE_18)
                .replace(/TrafficE_19/, TrafficE_19)

                .replace(/TrafficF_0/,  TrafficF_0 )
                .replace(/TrafficF_1/,  TrafficF_1 )
                .replace(/TrafficF_2/,  TrafficF_2 )
                .replace(/TrafficF_3/,  TrafficF_3 )
                .replace(/TrafficF_4/,  TrafficF_4 )
                .replace(/TrafficF_5/,  TrafficF_5 )
                .replace(/TrafficF_6/,  TrafficF_6 )
                .replace(/TrafficF_7/,  TrafficF_7 )
                .replace(/TrafficF_8/,  TrafficF_8 )
                .replace(/TrafficF_9/,  TrafficF_9 )
                .replace(/TrafficF_10/, TrafficF_10)
                .replace(/TrafficF_11/, TrafficF_11)
                .replace(/TrafficF_12/, TrafficF_12)
                .replace(/TrafficF_13/, TrafficF_13)
                .replace(/TrafficF_14/, TrafficF_14)
                .replace(/TrafficF_15/, TrafficF_15)
                .replace(/TrafficF_16/, TrafficF_16)
                .replace(/TrafficF_17/, TrafficF_17)
                .replace(/TrafficF_18/, TrafficF_18)
                .replace(/TrafficF_19/, TrafficF_19)

                .replace(/TicTotal_0/,  TicTotal_0 )
                .replace(/TicTotal_1/,  TicTotal_1 )
                .replace(/TicTotal_2/,  TicTotal_2 )
                .replace(/TicTotal_3/,  TicTotal_3 )
                .replace(/TicTotal_4/,  TicTotal_4 )
                .replace(/TicTotal_5/,  TicTotal_5 )
                .replace(/TicTotal_6/,  TicTotal_6 )
                .replace(/TicTotal_7/,  TicTotal_7 )
                .replace(/TicTotal_8/,  TicTotal_8 )
                .replace(/TicTotal_9/,  TicTotal_9 )
                .replace(/TicTotal_10/, TicTotal_10)
                .replace(/TicTotal_11/, TicTotal_11)
                .replace(/TicTotal_12/, TicTotal_12)
                .replace(/TicTotal_13/, TicTotal_13)
                .replace(/TicTotal_14/, TicTotal_14)
                .replace(/TicTotal_15/, TicTotal_15)
                .replace(/TicTotal_16/, TicTotal_16)
                .replace(/TicTotal_17/, TicTotal_17)
                .replace(/TicTotal_18/, TicTotal_18)
                .replace(/TicTotal_19/, TicTotal_19)

                
                .replace(/InputVAT_0/,  InputVAT_0 )
                .replace(/InputVAT_1/,  InputVAT_1 )
                .replace(/InputVAT_2/,  InputVAT_2 )
                .replace(/InputVAT_3/,  InputVAT_3 )
                .replace(/InputVAT_4/,  InputVAT_4 )
                .replace(/InputVAT_5/,  InputVAT_5 )
                .replace(/InputVAT_6/,  InputVAT_6 )
                .replace(/InputVAT_7/,  InputVAT_7 )
                .replace(/InputVAT_8/,  InputVAT_8 )
                .replace(/InputVAT_9/,  InputVAT_9 )
                .replace(/InputVAT_10/, InputVAT_10)
                .replace(/InputVAT_11/, InputVAT_11)
                .replace(/InputVAT_12/, InputVAT_12)
                .replace(/InputVAT_13/, InputVAT_13)
                .replace(/InputVAT_14/, InputVAT_14)
                .replace(/InputVAT_15/, InputVAT_15)
                .replace(/InputVAT_16/, InputVAT_16)
                .replace(/InputVAT_17/, InputVAT_17)
                .replace(/InputVAT_18/, InputVAT_18)
                .replace(/InputVAT_19/, InputVAT_19)

                .replace(/TripDate_0/,  TripDate_0 )
                .replace(/TripDate_1/,  TripDate_1 )
                .replace(/TripDate_2/,  TripDate_2 )
                .replace(/TripDate_3/,  TripDate_3 )
                .replace(/TripDate_4/,  TripDate_4 )
                .replace(/TripDate_5/,  TripDate_5 )
                .replace(/TripDate_6/,  TripDate_6 )
                .replace(/TripDate_7/,  TripDate_7 )
                .replace(/TripDate_8/,  TripDate_8 )
                .replace(/TripDate_9/,  TripDate_9 )
                .replace(/TripDate_10/, TripDate_10)
                .replace(/TripDate_11/, TripDate_11)
                .replace(/TripDate_12/, TripDate_12)
                .replace(/TripDate_13/, TripDate_13)
                .replace(/TripDate_14/, TripDate_14)
                .replace(/DateDate_15/, DateDate_15)
                .replace(/DateDate_16/, DateDate_16)
                .replace(/DateDate_17/, DateDate_17)
                .replace(/DateDate_18/, DateDate_18)
                .replace(/DateDate_19/, DateDate_19)

                
                .replace(/TripCust_0/,  TripCust_0 )
                .replace(/TripCust_1/,  TripCust_1 )
                .replace(/TripCust_2/,  TripCust_2 )
                .replace(/TripCust_3/,  TripCust_3 )
                .replace(/TripCust_4/,  TripCust_4 )
                .replace(/TripCust_5/,  TripCust_5 )
                .replace(/TripCust_6/,  TripCust_6 )
                .replace(/TripCust_7/,  TripCust_7 )
                .replace(/TripCust_8/,  TripCust_8 )
                .replace(/TripCust_9/,  TripCust_9 )
                .replace(/TripCust_10/, TripCust_10)
                .replace(/TripCust_11/, TripCust_11)
                .replace(/TripCust_12/, TripCust_12)
                .replace(/TripCust_13/, TripCust_13)
                .replace(/TripCust_14/, TripCust_14)
                .replace(/CustCust_15/, CustCust_15)
                .replace(/CustCust_16/, CustCust_16)
                .replace(/CustCust_17/, CustCust_17)
                .replace(/CustCust_18/, CustCust_18)
                .replace(/CustCust_19/, CustCust_19)

                
                .replace(/TripRept_0/,  TripRept_0 )
                .replace(/TripRept_1/,  TripRept_1 )
                .replace(/TripRept_2/,  TripRept_2 )
                .replace(/TripRept_3/,  TripRept_3 )
                .replace(/TripRept_4/,  TripRept_4 )
                .replace(/TripRept_5/,  TripRept_5 )
                .replace(/TripRept_6/,  TripRept_6 )
                .replace(/TripRept_7/,  TripRept_7 )
                .replace(/TripRept_8/,  TripRept_8 )
                .replace(/TripRept_9/,  TripRept_9 )
                .replace(/TripRept_10/, TripRept_10)
                .replace(/TripRept_11/, TripRept_11)
                .replace(/TripRept_12/, TripRept_12)
                .replace(/TripRept_13/, TripRept_13)
                .replace(/TripRept_14/, TripRept_14)
                .replace(/ReptRept_15/, ReptRept_15)
                .replace(/ReptRept_16/, ReptRept_16)
                .replace(/ReptRept_17/, ReptRept_17)
                .replace(/ReptRept_18/, ReptRept_18)
                .replace(/ReptRept_19/, ReptRept_19)

                .replace(/TripNote_0/,  TripNote_0 )
                .replace(/TripNote_1/,  TripNote_1 )
                .replace(/TripNote_2/,  TripNote_2 )
                .replace(/TripNote_3/,  TripNote_3 )
                .replace(/TripNote_4/,  TripNote_4 )
                .replace(/TripNote_5/,  TripNote_5 )
                .replace(/TripNote_6/,  TripNote_6 )
                .replace(/TripNote_7/,  TripNote_7 )
                .replace(/TripNote_8/,  TripNote_8 )
                .replace(/TripNote_9/,  TripNote_9 )
                .replace(/TripNote_10/, TripNote_10)
                .replace(/TripNote_11/, TripNote_11)
                .replace(/TripNote_12/, TripNote_12)
                .replace(/TripNote_13/, TripNote_13)
                .replace(/TripNote_14/, TripNote_14)
                .replace(/NoteNote_15/, NoteNote_15)
                .replace(/NoteNote_16/, NoteNote_16)
                .replace(/NoteNote_17/, NoteNote_17)
                .replace(/NoteNote_18/, NoteNote_18)
                .replace(/NoteNote_19/, NoteNote_19)

                .replace(/BillNo/, BillNo)    
                .replace(/ApplicNo/, ApplicNo)    
                .replace(/Version/, Version)    
                .replace(/BusiMan/, BusiMan)    
                .replace(/BusiArea/, BusiArea )   
                .replace(/DeptName/, DeptName )   
                .replace(/StaffID/, StaffID )   
                .replace(/StaffName/, StaffName )   
                .replace(/LeaveDate/, LeaveDate )   
                .replace(/LeaveHour/, LeaveHour)  
                .replace(/LeaveMin/, LeaveMin)  
                .replace(/BackDate/, BackDate)  
                .replace(/BackHour/, BackHour)  
                .replace(/BackMin/, BackMin)  
                .replace(/LiveDateA/, LiveDateA)  
                .replace(/LiveDateB/, LiveDateB)  
                .replace(/LiveDateC/, LiveDateC)  
                .replace(/LiveDateD/, LiveDateD)  
                .replace(/LiveDateE/, LiveDateE)  
                .replace(/LiveDateF/, LiveDateF)  
                .replace(/Explanation/, Explanation)  
                .replace(/Overspend/, Overspend)  
                .replace(/IsOver/, IsOver)  
                .replace(/HotelName/, HotelName)  
                .replace(/HotelTel/, HotelTel)  
                .replace(/EntryDate/, EntryDate)  
                .replace(/BillStatus/, BillStatus)  

                .replace(/OppName/, OppName)    
                .replace(/MagName/, MagName)    
                .replace(/VipName/, VipName)    
                .replace(/PurName/, PurName)    
                .replace(/PexName/, PexName )   
                .replace(/CfoName/, CfoName )   
                .replace(/PsdName/, PsdName )   
                .replace(/CeoName/, CeoName )   
                .replace(/BodName/, BodName)  

                .replace(/OppDate/, OppDate)    
                .replace(/MagDate/, MagDate)    
                .replace(/VipDate/, VipDate)    
                .replace(/PurDate/, PurDate)    
                .replace(/PexDate/, PexDate )   
                .replace(/CfoDate/, CfoDate )   
                .replace(/PsdDate/, PsdDate )   
                .replace(/CeoDate/, CeoDate )   
                .replace(/BodDate/, BodDate)

                .replace(/StatusOK/, StatusOK)
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
                        if(i>17 && i<20){
                            console.log("推:"+JSON.stringify(sData[i].TripCust)+ "里" + (JSON.stringify(sData[i].TripNote)));
                        }
                        newHtml = fillPrintModel({
                            htmlModel: htmlModel,
                            TrafficA_0:  sData[0].TrafficA,  SNNo_0:  sData[0].SNNo,
                            TrafficA_1:  sData[1].TrafficA,  SNNo_1:  sData[1].SNNo,
                            TrafficA_2:  sData[2].TrafficA,  SNNo_2:  sData[2].SNNo,
                            TrafficA_3:  sData[3].TrafficA,  SNNo_3:  sData[3].SNNo,
                            TrafficA_4:  sData[4].TrafficA,  SNNo_4:  sData[4].SNNo,
                            TrafficA_5:  sData[5].TrafficA,  SNNo_5:  sData[5].SNNo,
                            TrafficA_6:  sData[6].TrafficA,  SNNo_6:  sData[6].SNNo,
                            TrafficA_7:  sData[7].TrafficA,  SNNo_7:  sData[7].SNNo,
                            TrafficA_8:  sData[8].TrafficA,  SNNo_8:  sData[8].SNNo,
                            TrafficA_9:  sData[9].TrafficA,  SNNo_9:  sData[9].SNNo,
                            TrafficA_10: sData[10].TrafficA, SNNo_10: sData[10].SNNo,
                            TrafficA_11: sData[11].TrafficA, SNNo_11: sData[11].SNNo,
                            TrafficA_12: sData[12].TrafficA, SNNo_12: sData[12].SNNo,
                            TrafficA_13: sData[13].TrafficA, SNNo_13: sData[13].SNNo,
                            TrafficA_14: sData[14].TrafficA, SNNo_14: sData[14].SNNo,
                            TrafficA_15: sData[15].TrafficA, SNNo_15: sData[15].SNNo,
                            TrafficA_16: sData[16].TrafficA, SNNo_16: sData[16].SNNo,
                            TrafficA_17: sData[17].TrafficA, SNNo_17: sData[17].SNNo,
                            TrafficA_18: sData[18].TrafficA, SNNo_18: sData[18].SNNo,
                            TrafficA_19: sData[19].TrafficA, SNNo_19: sData[19].SNNo,
                            
                            TrafficB_0:  sData[0].TrafficB,  TrafficC_0:  sData[0].TrafficC,
                            TrafficB_1:  sData[1].TrafficB,  TrafficC_1:  sData[1].TrafficC,
                            TrafficB_2:  sData[2].TrafficB,  TrafficC_2:  sData[2].TrafficC,
                            TrafficB_3:  sData[3].TrafficB,  TrafficC_3:  sData[3].TrafficC,
                            TrafficB_4:  sData[4].TrafficB,  TrafficC_4:  sData[4].TrafficC,
                            TrafficB_5:  sData[5].TrafficB,  TrafficC_5:  sData[5].TrafficC,
                            TrafficB_6:  sData[6].TrafficB,  TrafficC_6:  sData[6].TrafficC,
                            TrafficB_7:  sData[7].TrafficB,  TrafficC_7:  sData[7].TrafficC,
                            TrafficB_8:  sData[8].TrafficB,  TrafficC_8:  sData[8].TrafficC,
                            TrafficB_9:  sData[9].TrafficB,  TrafficC_9:  sData[9].TrafficC,
                            TrafficB_10: sData[10].TrafficB, TrafficC_10: sData[10].TrafficC,
                            TrafficB_11: sData[11].TrafficB, TrafficC_11: sData[11].TrafficC,
                            TrafficB_12: sData[12].TrafficB, TrafficC_12: sData[12].TrafficC,
                            TrafficB_13: sData[13].TrafficB, TrafficC_13: sData[13].TrafficC,
                            TrafficB_14: sData[14].TrafficB, TrafficC_14: sData[14].TrafficC,
                            TrafficB_15: sData[15].TrafficB, TrafficC_15: sData[15].TrafficC,
                            TrafficB_16: sData[16].TrafficB, TrafficC_16: sData[16].TrafficC,
                            TrafficB_17: sData[17].TrafficB, TrafficC_17: sData[17].TrafficC,
                            TrafficB_18: sData[18].TrafficB, TrafficC_18: sData[18].TrafficC,
                            TrafficB_19: sData[19].TrafficB, TrafficC_19: sData[19].TrafficC,

                            TrafficD_0:  sData[0].TrafficD,  TrafficE_0:  sData[0].TrafficE,
                            TrafficD_1:  sData[1].TrafficD,  TrafficE_1:  sData[1].TrafficE,
                            TrafficD_2:  sData[2].TrafficD,  TrafficE_2:  sData[2].TrafficE,
                            TrafficD_3:  sData[3].TrafficD,  TrafficE_3:  sData[3].TrafficE,
                            TrafficD_4:  sData[4].TrafficD,  TrafficE_4:  sData[4].TrafficE,
                            TrafficD_5:  sData[5].TrafficD,  TrafficE_5:  sData[5].TrafficE,
                            TrafficD_6:  sData[6].TrafficD,  TrafficE_6:  sData[6].TrafficE,
                            TrafficD_7:  sData[7].TrafficD,  TrafficE_7:  sData[7].TrafficE,
                            TrafficD_8:  sData[8].TrafficD,  TrafficE_8:  sData[8].TrafficE,
                            TrafficD_9:  sData[9].TrafficD,  TrafficE_9:  sData[9].TrafficE,
                            TrafficD_10: sData[10].TrafficD, TrafficE_10: sData[10].TrafficE,
                            TrafficD_11: sData[11].TrafficD, TrafficE_11: sData[11].TrafficE,
                            TrafficD_12: sData[12].TrafficD, TrafficE_12: sData[12].TrafficE,
                            TrafficD_13: sData[13].TrafficD, TrafficE_13: sData[13].TrafficE,
                            TrafficD_14: sData[14].TrafficD, TrafficE_14: sData[14].TrafficE,
                            TrafficD_15: sData[15].TrafficD, TrafficE_15: sData[15].TrafficE,
                            TrafficD_16: sData[16].TrafficD, TrafficE_16: sData[16].TrafficE,
                            TrafficD_17: sData[17].TrafficD, TrafficE_17: sData[17].TrafficE,
                            TrafficD_18: sData[18].TrafficD, TrafficE_18: sData[18].TrafficE,
                            TrafficD_19: sData[19].TrafficD, TrafficE_19: sData[19].TrafficE,

                            TrafficF_0:  sData[0].TrafficF,  TicTotal_0:  sData[0].TicTotal,
                            TrafficF_1:  sData[1].TrafficF,  TicTotal_1:  sData[1].TicTotal,
                            TrafficF_2:  sData[2].TrafficF,  TicTotal_2:  sData[2].TicTotal,
                            TrafficF_3:  sData[3].TrafficF,  TicTotal_3:  sData[3].TicTotal,
                            TrafficF_4:  sData[4].TrafficF,  TicTotal_4:  sData[4].TicTotal,
                            TrafficF_5:  sData[5].TrafficF,  TicTotal_5:  sData[5].TicTotal,
                            TrafficF_6:  sData[6].TrafficF,  TicTotal_6:  sData[6].TicTotal,
                            TrafficF_7:  sData[7].TrafficF,  TicTotal_7:  sData[7].TicTotal,
                            TrafficF_8:  sData[8].TrafficF,  TicTotal_8:  sData[8].TicTotal,
                            TrafficF_9:  sData[9].TrafficF,  TicTotal_9:  sData[9].TicTotal,
                            TrafficF_10: sData[10].TrafficF, TicTotal_10: sData[10].TicTotal,
                            TrafficF_11: sData[11].TrafficF, TicTotal_11: sData[11].TicTotal,
                            TrafficF_12: sData[12].TrafficF, TicTotal_12: sData[12].TicTotal,
                            TrafficF_13: sData[13].TrafficF, TicTotal_13: sData[13].TicTotal,
                            TrafficF_14: sData[14].TrafficF, TicTotal_14: sData[14].TicTotal,
                            TrafficF_15: sData[15].TrafficF, TicTotal_15: sData[15].TicTotal,
                            TrafficF_16: sData[16].TrafficF, TicTotal_16: sData[16].TicTotal,
                            TrafficF_17: sData[17].TrafficF, TicTotal_17: sData[17].TicTotal,
                            TrafficF_18: sData[18].TrafficF, TicTotal_18: sData[18].TicTotal,
                            TrafficF_19: sData[19].TrafficF, TicTotal_19: sData[19].TicTotal,

                            TripDate_0:  sData[0].TripDate,  InputVAT_0:  sData[0].InputVAT,
                            TripDate_1:  sData[1].TripDate,  InputVAT_1:  sData[1].InputVAT,
                            TripDate_2:  sData[2].TripDate,  InputVAT_2:  sData[2].InputVAT,
                            TripDate_3:  sData[3].TripDate,  InputVAT_3:  sData[3].InputVAT,
                            TripDate_4:  sData[4].TripDate,  InputVAT_4:  sData[4].InputVAT,
                            TripDate_5:  sData[5].TripDate,  InputVAT_5:  sData[5].InputVAT,
                            TripDate_6:  sData[6].TripDate,  InputVAT_6:  sData[6].InputVAT,
                            TripDate_7:  sData[7].TripDate,  InputVAT_7:  sData[7].InputVAT,
                            TripDate_8:  sData[8].TripDate,  InputVAT_8:  sData[8].InputVAT,
                            TripDate_9:  sData[9].TripDate,  InputVAT_9:  sData[9].InputVAT,
                            TripDate_10: sData[10].TripDate, InputVAT_10: sData[10].InputVAT,
                            TripDate_11: sData[11].TripDate, InputVAT_11: sData[11].InputVAT,
                            TripDate_12: sData[12].TripDate, InputVAT_12: sData[12].InputVAT,
                            TripDate_13: sData[13].TripDate, InputVAT_13: sData[13].InputVAT,
                            TripDate_14: sData[14].TripDate, InputVAT_14: sData[14].InputVAT,
                            DateDate_15: sData[15].TripDate , InputVAT_15: sData[15].InputVAT,
                            DateDate_16: sData[16].TripDate , InputVAT_16: sData[16].InputVAT,
                            DateDate_17: sData[17].TripDate, InputVAT_17: sData[17].InputVAT,
                            DateDate_18: sData[18].TripDate, InputVAT_18: sData[18].InputVAT,
                            DateDate_19: sData[19].TripDate, InputVAT_19: sData[19].InputVAT,

                            TripCust_0:  sData[0].TripCust,  TripRept_0:  sData[0].TripRept,
                            TripCust_1:  sData[1].TripCust,  TripRept_1:  sData[1].TripRept,
                            TripCust_2:  sData[2].TripCust,  TripRept_2:  sData[2].TripRept,
                            TripCust_3:  sData[3].TripCust,  TripRept_3:  sData[3].TripRept,
                            TripCust_4:  sData[4].TripCust,  TripRept_4:  sData[4].TripRept,
                            TripCust_5:  sData[5].TripCust,  TripRept_5:  sData[5].TripRept,
                            TripCust_6:  sData[6].TripCust,  TripRept_6:  sData[6].TripRept,
                            TripCust_7:  sData[7].TripCust,  TripRept_7:  sData[7].TripRept,
                            TripCust_8:  sData[8].TripCust,  TripRept_8:  sData[8].TripRept,
                            TripCust_9:  sData[9].TripCust,  TripRept_9:  sData[9].TripRept,
                            TripCust_10: sData[10].TripCust, TripRept_10: sData[10].TripRept,
                            TripCust_11: sData[11].TripCust, TripRept_11: sData[11].TripRept,
                            TripCust_12: sData[12].TripCust, TripRept_12: sData[12].TripRept,
                            TripCust_13: sData[13].TripCust, TripRept_13: sData[13].TripRept,
                            TripCust_14: sData[14].TripCust, TripRept_14: sData[14].TripRept,
                            CustCust_15: sData[15].TripCust, ReptRept_15: sData[15].TripRept,
                            CustCust_16: sData[16].TripCust, ReptRept_16: sData[16].TripRept,
                            CustCust_17: sData[17].TripCust, ReptRept_17: sData[17].TripRept,
                            CustCust_18: sData[18].TripCust, ReptRept_18: sData[18].TripRept,
                            CustCust_19: sData[19].TripCust, ReptRept_19: sData[19].TripRept,

                            TripNote_0:  sData[0].TripNote,  
                            TripNote_1:  sData[1].TripNote,  
                            TripNote_2:  sData[2].TripNote,  
                            TripNote_3:  sData[3].TripNote,  
                            TripNote_4:  sData[4].TripNote,  
                            TripNote_5:  sData[5].TripNote,  
                            TripNote_6:  sData[6].TripNote,  
                            TripNote_7:  sData[7].TripNote,  
                            TripNote_8:  sData[8].TripNote,  
                            TripNote_9:  sData[9].TripNote,  
                            TripNote_10: sData[10].TripNote, 
                            TripNote_11: sData[11].TripNote, 
                            TripNote_12: sData[12].TripNote, 
                            TripNote_13: sData[13].TripNote, 
                            TripNote_14: sData[14].TripNote, 
                            NoteNote_15: sData[15].TripNote, 
                            NoteNote_16: sData[16].TripNote, 
                            NoteNote_17: sData[17].TripNote, 
                            NoteNote_18: sData[18].TripNote, 
                            NoteNote_19: sData[19].TripNote, 

                            Bill_No:  sData[20].BillNo, 
                            ApplicNo:   sData[20].ApplicNo,  
                            Version:   sData[20].Version,  
                            BusiMan:   sData[20].BusiMan,  
                            BusiArea:   sData[20].BusiArea,  
                            DeptName:   sData[20].DeptName,  
                            LeaveDate:   sData[20].LeaveDate,  
                            LeaveHour:   sData[20].LeaveHour,  
                            LeaveMin:   sData[20].LeaveMin,  
                            BackDate:   sData[20].BackDate,  
                            BackHour:   sData[20].BackHour,  
                            BackMin:   sData[20].BackMin,  
                            LiveDateA:   sData[20].LiveDateA,  
                            LiveDateB:   sData[20].LiveDateB,  
                            LiveDateC:   sData[20].LiveDateC,  
                            LiveDateD:   sData[20].LiveDateD,  
                            LiveDateE:   sData[20].LiveDateE,  
                            LiveDateF:   sData[20].LiveDateF,  
                            Explanation:   sData[20].Explanation,  
                            Overspend:   sData[20].Overspend,  
                            IsOver:   sData[20].IsOver,  
                            HotelName:   sData[20].HotelName,  
                            HotelTel:   sData[20].HotelTel,  
                            EntryDate:   sData[20].EntryDate,  
                            BillStatus:   sData[20].BillStatus,  

                            OppName:  sData[21].OppName, 
                            MagName:  sData[21].MagName, 
                            VipName:  sData[21].VipName, 
                            PurName:  sData[21].PurName, 
                            PexName:  sData[21].PexName, 
                            CfoName:  sData[21].CfoName, 
                            PsdName:  sData[21].PsdName, 
                            CeoName:  sData[21].CeoName, 
                            BodName:  sData[21].BodName, 

                            OppDate:  sData[21].OppDate, 
                            MagDate:  sData[21].MagDate, 
                            VipDate:  sData[21].VipDate, 
                            PurDate:  sData[21].PurDate, 
                            PexDate:  sData[21].PexDate, 
                            CfoDate:  sData[21].CfoDate, 
                            PsdDate:  sData[21].PsdDate, 
                            CeoDate:  sData[21].CeoDate, 
                            BodDate:  sData[21].BodDate, 

                            StatusOK:  sData[21].CurText, 
     
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
            divHtml = '';
            newHtml = '';
            htmlModel = '';
        },
        error: function () {
        }
    })
}
$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});