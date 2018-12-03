module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    //    var aDataIDs = sender.req.query.t;  
    console.log("get:" + JSON.stringify(sender.req.query));

    var Filter = sender.req.query.Filter;

    //   console.log("Filter:"+JSON.stringify(Filter));
    if (Filter != undefined) {
        SQLFilter = "";

        for (var i = 0; i < Filter.length; i++) {

            function getAttr(obj) {
                for (var j in obj) {
                    return j;
                }
            }

            var Attr = getAttr(Filter[i]);
                    	console.log("Attr:"+Attr);
                    	console.log("AttrValue:"+Filter[i][Attr]);
                    	console.log("AttrCType:"+Filter[i]["CType"]);

            if(Filter[i][Attr] instanceof Array){
            	console.log("Filter[i][Attr]是数组");
            	console.log(Filter[i][Attr][0]+"-"+Filter[i][Attr][1])

            	if(Filter[i][Attr][0]!=""){            		
            		SQLFilter=SQLFilter+ Attr +">="+"'"+Filter[i][Attr][0]+"'"+" AND ";            		
            		console.log("SQLFilter:"+SQLFilter);            		
            	}            	
                if(Filter[i][Attr][1]!=""){            		
            		SQLFilter=SQLFilter+ Attr +"<="+"'"+Filter[i][Attr][1]+"'"+" AND ";           		
            		console.log("SQLFilter:"+SQLFilter);            		
            	}
                
                
            }else{
            	if(Filter[i][Attr]!=""){
            		console.log("Filter[i][Attr]不是数组且值不为空");
            		
            		if(Filter[i]['CType']=="LIKE"||Filter[i]['CType']=="NOT LIKE"){
            			SQLFilter = SQLFilter + Attr +" "+ Filter[i]['CType']+" "+ "'%" + Filter[i][Attr] + "%'" + " AND ";
            		}else{
            			SQLFilter = SQLFilter + Attr +" "+ Filter[i]['CType']+" "+ "'" + Filter[i][Attr] + "'" + " AND ";
            		}
            		
            		
            	}
            }
            

        }

           console.log("SQLFilter:"+SQLFilter);
        // var sqlGetTableData = "SELECT * FROM "+DBTable+" WHERE "+SQLFilter;
           
           if(SQLFilter==""){
        	   var sqlGetTableData = "SELECT * FROM pm_orders LEFT JOIN pm_customers ON pm_orders.customer_ID=pm_customers.cust_FID ";
           }else{
        	   
        	   var sqlGetTableData = "SELECT * FROM pm_orders LEFT JOIN pm_customers ON pm_orders.customer_ID=pm_customers.cust_FID WHERE " + SQLFilter;
               
               sqlGetTableData=sqlGetTableData.substring(0,sqlGetTableData.length-5);//去掉最后"AND"字符串

               console.log("sqlGetTableData:"+sqlGetTableData);
        	   
           }

       
    } else {
        var sqlGetTableData = "SELECT * FROM pm_orders LEFT JOIN pm_customers ON pm_orders.customer_ID=pm_customers.cust_FID "
    }

    //    
    yjDBService.exec({
        sql: sqlGetTableData,
        parameters: [],
        rowsAsArray: false,
        // Chenly 2018-10-19 返回obj arr
        success: function(result) {

            sender.success(result);
        },
        error: sender.error
    });

};