/**
* var yjPub = require("./yjPub");
* let pw = yjPub.ExchYear(passTxt);
*/
if (typeof module !== 'undefined' && module.exports) {

}

var yjPub = {
		ExchYear: function (passTxt) {
			var ret = '';
			var YY = '';
			passTxt = (passTxt == null || passTxt == undefined || passTxt == '') ? ('2020') : passTxt;
			let DefautYY = 2010;
			var ExcYY =  parseInt(passTxt, 10)-DefautYY;
			if((ExcYY%26) == 0){
			    YY ='A';
			}else if((ExcYY%26) == 1){
				YY ='B';
			}else if((ExcYY%26) == 2){
				YY ='C';
			}else if((ExcYY%26) == 3){
				YY ='D';
			}else if((ExcYY%26) == 4){
				YY ='E';
			}else if((ExcYY%26) == 5){
				YY ='F';
			}else if((ExcYY%26) == 6){
				YY ='G';
			}else if((ExcYY%26) == 7){
				YY ='H';
			}else if((ExcYY%26) == 8){
				YY ='I';
			}else if((ExcYY%26) == 9){
				YY ='J';
			}else if((ExcYY%26) == 10){
				YY ='K';
			}else if((ExcYY%26) == 11){
				YY ='L';
			}else if((ExcYY%26) == 12){
			    YY ='M';
			}else if((ExcYY%26) == 13){
			    YY ='N';
			}else if((ExcYY%26) == 14){
			    YY ='O';
			}else if((ExcYY%26) == 15){
			    YY ='P';
			}else if((ExcYY%26) == 16){
			    YY ='Q';
			}else if((ExcYY%26) == 17){
			    YY ='R';
			}else if((ExcYY%26) == 18){
			    YY ='S';
			}else if((ExcYY%26) == 19){
			    YY ='T';
			}else if((ExcYY%26) == 20){
			    YY ='U';
			}else if((ExcYY%26) == 21){
			    YY ='V';
			}else if((ExcYY%26) == 22){
			    YY ='W';
			}else if((ExcYY%26) == 23){
			    YY ='X';
			}else if((ExcYY%26) == 24){
			    YY ='Y';
			}else{
			    YY ='Z';
			}
			ret =YY;
			return ret; 			 
		}

}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = yjPub;
}