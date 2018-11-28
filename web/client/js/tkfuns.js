////-----检查信息是否为空----------
//        	function checkNotNull(Info){
//        		
//        		if(Info==""){
//        			return false
//        		}else{
//        			return true
//        		}
//        		
//        	}

//格式化网卡地址	
        	function FM(textMac){
        		textMac=textMac.replace(/-/g, "");
        		textMac=textMac.replace(/:/g, "");
        		return textMac;
        	}
        	
        	
//校验Mac地址格式   
            function checkMac(macaddr){
            	var reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
            	var reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;
            	if (reg1.test(macaddr)) {
            		return true;
            		} else if (reg2.test(macaddr)) {
            			return true;
            			} else {

                return false;
                }
            }
            
            
//获取格式化当前日期-----------
        	function CurentTime()
        	    { 
        	        var now = new Date();
        	        var year = now.getFullYear();       //年
        	        var month = now.getMonth() + 1;     //月
        	        var day = now.getDate();            //日   
        	        var clock = year + "-";
        	         if(month < 10)
        	            clock += "0";
        	        clock += month + "-";
        	        if(day < 10)
        	           clock += "0";
        	        clock += day + "";
        	        return clock; 
        	    }
        
        	var Ndate=CurentTime();
        	
        	
        	
//格式化日期-----        	
        	function FMDate(textDate){
        		textDate=textDate.replace(/-/g, "");
        		textDate=textDate.replace(/:/g, "");
        		return textDate;
        	}
        	
        	
        	
//检查输入日期合法性----------------
        	
        	

        	function checkDate(data){  
        		var sDate=data;
        		var mp=/\d{4}-\d{2}-\d{2}/; 
        		var matchArray = sDate.match(mp);     
        		if (matchArray==null){
//        			alert("日期不能为空!");
        			return false;   
        		}
        		
        		if (sDate<Ndate){
//        			alert("到期日不能小于今日日期!");
        			return false;   
        		}
        			   
        		var iaMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];     
        		var iaDate = new Array(3);     
        		var year, month, day;             
        		iaDate = sDate.split("-");          
        		year = parseFloat(iaDate[0])      
        		month = parseFloat(iaDate[1])      
        		day=parseFloat(iaDate[2])       
        		if ( year > 2100) {
//        			alert("输入日期或过大!");
        			return false;    
        		}
        			   
        		if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1]=29;       if (month < 1 || month > 12){
//        			alert("存在无效日期!");
        			return false;  
        		}
        			     
        		if (day < 1 || day > iaMonthDays[month - 1]) {
//        			alert("存在无效日期!");
        			return false; 
        		}
        			 
        		return true;   
        		}  
//日期选择有效期对比函数-------------
        	
        	function VidDateContrast(inputDate,VidDate){
        		
        		if(checkDate(inputDate)&&checkDate(VidDate)){
        			
        			if(inputDate>VidDate){
//        				alert("日期参数,不能晚于账号授权期,!本账号授权期为:"+moment(VidDate).format("YYYY-MM-DD"));
        				
        				
        				return false;
        			}else{
        				return true;
        			}
        			
        		}

        	}
        	
//检查日期组合法性------------------------------------
       	 function checkDatesArray(Dates,VidDate){

       		 var i=0;
       		 var checkReasult=true;
       		 while(i<Dates.length){
       			var resulti=VidDateContrast(Dates[i],VidDate);
       		    var checkReasult=checkReasult&&resulti;
       		    i++;        		    
       		 }
       		 
       		 if(checkReasult){     			 
       			 return true
       		 }else{
       			 return false
       		 }
       		 
       		 
       	 }
       	 

//格式化日期   YYMMDD+去除--
         function fomatDates(Date){
    
   		 Date=Date.replace(/-/g, "").substring(2,8);//删除所有-号  /g表示所有
        	 return Date;
        	 
         }
        
//----------------------------    
         
         
//定义日期格式
         Date.prototype.format=function (){
            var s='';
            s+=this.getFullYear()+'-';          // 获取年份。
            s+=(this.getMonth()+1)+"-";         // 获取月份。
            s+= this.getDate();                 // 获取日。
            return(s);                          // 返回日期。
        };
//----------------------------   

         
       //获取计算平均分期日期函数    YYYY-MM-DD
         function getAveDates(begin,end,FQNum){

             var dateAllArr = new Array();
             var ab = begin.split("-");
             var ae = end.split("-");
             var db = new Date();
             db.setUTCFullYear(ab[0], ab[1]-1, ab[2]);
             var de = new Date();
             de.setUTCFullYear(ae[0], ae[1]-1, ae[2]);
             var unixDb=db.getTime();
             var unixDe=de.getTime();
             for(var k=unixDb;k<=unixDe+1;){
      	     dateAllArr.push(  moment( (new Date(parseInt(k))).format().toString() ).format("YYYY-MM-DD")  );
                 k=k+(unixDe-unixDb)/(FQNum-1);
     			
             }

             return dateAllArr;
         } 
         
         
      
//定义固定间隔天数日期函数  -----------        
     
         function getDayNumFix(begin,FQNum,DayNumFix){
        	 
         
        	 var Dates=new Array();
        	
        	 function getNewDay(dateTemp, days) {
        		    var dateTemp = dateTemp.split("-");
        		    var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式  
        		    var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
        		    var rDate = new Date(millSeconds);
        		    var year = rDate.getFullYear();
        		    var month = rDate.getMonth() + 1;
        		    if (month < 10) month = "0" + month;
        		    var date = rDate.getDate();
        		    if (date < 10) date = "0" + date;
        		    return (year + "-" + month + "-" + date);
        	 }
        	 
        	 for(i=0;i<FQNum;i++){
        		 Dates[i]=getNewDay(begin,(i+1)*DayNumFix);
        		 
        	 }    	 
        	 return Dates;
	 
         }           
         
         
         
//定义固定日期函数-------------------------------          
         

         
         function getDatesFix(begin,FQNum,MonthFix){
        	 var DatesFix=new Array();
        	 var year=parseInt(begin.substring(0,4));
        	 var month=parseInt(begin.substring(5,7));//修复固定日期10 11 12 bug
        	 
        	 
        	 var firstDate=moment(year+"-"+month+"-"+MonthFix).format("YYYY-MM-DD");
        	 

        	 
        	 if(firstDate>begin){
  
        		 for(var i=0;i<FQNum;i++){
        			 
        			 DatesFix[i]=year+"-"+month+"-"+MonthFix;
            		 DatesFix[i]=moment(DatesFix[i]).format("YYYY-MM-DD");	 

            		 month=month+1;
            		 if(month==13){
            			 year=year+1;
            			 month=1;
            		 }	 
            		
            	 }
            
            	 return DatesFix;

        	 }else{

            	 for(var i=0;i<FQNum;i++){

            		 month=month+1;
            		 if(month==13){
            			 year=year+1;
            			 month=1;
            		 }	 
            		 DatesFix[i]=year+"-"+month+"-"+MonthFix;
            		 DatesFix[i]=moment(DatesFix[i]).format("YYYY-MM-DD");	 
            	 }
            
            	 return DatesFix;
        		 
        		 
        	 }
 	 
        	 
         }

          
//定义日期数组Area显示
         function showDateArray(Array){
//        	 layer.alert(Array);
        	 DateArray=Array;
        	 DateArray[0]="第1期："+DateArray[0];
        	 for(i=1;i<DateArray.length;i++){
        		 DateArray[i]="</br>"+"第"+(i+1)+"期："+DateArray[i];
        		 
        	 }
        	 return DateArray;
        	 
         }
         
         
         function showDivDateArray(Array){
//        	 layer.alert(Array);
        	 DateArray=Array;
        	 DateArray[0]="第1期："+DateArray[0];
        	 for(i=1;i<DateArray.length;i++){
        		 DateArray[i]="\n"+"第"+(i+1)+"期："+DateArray[i];
        		 
        	 }
        	 return DateArray;
        	 
         }
         
         
         
//机台编码长度
      	function MCodeLen(len){
      		if ( len < 10) {
          	    return "0" + len;
          	}else{
          		return len;
          	}
      	}
     
//------------------------------------------------    