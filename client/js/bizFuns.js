/**
 *bizFuns.js
 *导入方式：var bizFuns = require("./bizFuns.js"); 
 */


//数据中的data null 转换为空函数
 function NulltoEmpty(data) {
	 
	 if(data.length!=0){
		 for(let i=0;i<data.length;i++)
		 for(let j in data[i]){
	    	  if(data[i][j]==null){
	    		  data[i][j]="";
	    	  }
	      }
	      return data;
	 }else{
		 return data;
	 }
	     
}

