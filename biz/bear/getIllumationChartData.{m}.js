module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjDateTime = global.yjRequire("yujiang.Foil").yjDateTime;
    var  sql_allDayData="select dev.DeviceEntityOID,dev.Name,left(ddt.CatchTime,16) as time , ddt.ValueDec as value " 
                      +" from DeviceEntities dev  "
                      +" left outer join DeviceModels dm on dev.DeviceModelOID=dm.DeviceModelOID "
                      +" left outer join DeviceSeries ds on dm.DeviceSeriesOID=ds.DeviceSeriesOID "
                      +" left outer join DeviceCategories dc on dc.DeviceCategoryOID=ds.DeviceCategoryOID "
                      +" left outer join DeviceModelMetas dmm on dmm.DeviceModelOID=dm.DeviceModelOID "
                      +" left outer join DeviceDataMetas ddm on dmm.DeviceDataMetaOID=ddm.DeviceDataMetaOID "
                      +" left outer join DeviceDataToday ddt on ddt.DeviceDataMetaOID=ddm.DeviceDataMetaOID and ddt.DeviceEntityOID=dev.DeviceEntityOID "
                      +" where dm.DeviceModelAID='LPPYRA03AC'   "
                      +" order by ddt.CatchTime"; 

    yjDBService.exec({
        sql:sql_allDayData,
        parameters:[],
        rowsAsArray : true,
        success:function(r){
            var datas=[]
            var data=yjDB.dataSet2ObjectList(r.meta,r.rows);
            
            
             console.log(data+"ttttt1");
             
            for(var i=0;i<data.length;i++){
                var temp=[];
                var timeTemp=yjDateTime.parse(data[i].time,'YYYY-MM-DD HH:mm:ss',true);
                    temp.push(Date.parse(timeTemp)+28800000);
                    temp.push(parseFloat(data[i].value));
                    datas.push(temp);
            }
            sender.success([3,4,5,6,7,8,9,5,6,8,3,6,13]);
            console.log("6666666666");
        },
        error:sender.error
    })

}
