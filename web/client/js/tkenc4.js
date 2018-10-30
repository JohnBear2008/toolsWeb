//-------软件注册加密----------

function encryptByDESModeEBCSN(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(SNKey);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString()
}

function encryptMac(mac) {
    var source = mac;
    var cc = encryptByDESModeEBCSN(CryptoJS.enc.Utf8.parse(source));
    return cc
}


//--------MK授权文件加密---------------------          
 
function encryptByDESModeEBCMK(message) {
    var keyHex = CryptoJS.enc.Utf8.parse(MKKey);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString()
}

function encryptFac(Fac) {
    var source = Fac;
    var cc = encryptByDESModeEBCMK(CryptoJS.enc.Utf8.parse(source));
    return cc
}
 
//-------------单密钥加密算法----------------- 
 function encryptByDESModeEBC(message){
        		var keyHex = CryptoJS.enc.Utf8.parse(SPKey);
        		var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
        		mode: CryptoJS.mode.ECB,
        		padding: CryptoJS.pad.Pkcs7
        		});
        		return encrypted.ciphertext.toString();
        		}

 
 //------------手输密码算法-------------
 

 
 function PWenc(partA,partB){
 	
 	a=encryptByDESModeEBC(CryptoJS.enc.Utf8.parse(partA));

 	Salen=a.length;
 	if(Salen<=64){
			for(;Salen<64;Salen++){
 			a=a+0;        			
 		}
 	}
	
 	var a1=parseInt(a.substring(0,2),16)+parseInt(a.substring(8,10),16)+parseInt(a.substring(16,18),16)+parseInt(a.substring(24,26),16)+parseInt(a.substring(32,34),16)+parseInt(a.substring(40,42),16)+parseInt(a.substring(48,50),16)+parseInt(a.substring(56,58),16);    
 	var a2=parseInt(a.substring(2,4),16)+parseInt(a.substring(10,12),16)+parseInt(a.substring(18,20),16)+parseInt(a.substring(26,28),16)+parseInt(a.substring(34,36),16)+parseInt(a.substring(42,44),16)+parseInt(a.substring(50,52),16)+parseInt(a.substring(58,60),16); 
 	var a3=parseInt(a.substring(4,6),16)+parseInt(a.substring(12,14),16)+parseInt(a.substring(20,22),16)+parseInt(a.substring(28,30),16)+parseInt(a.substring(36,38),16)+parseInt(a.substring(44,46),16)+parseInt(a.substring(52,54),16)+parseInt(a.substring(60,62),16); 
 	var a4=parseInt(a.substring(6,8),16)+parseInt(a.substring(14,16),16)+parseInt(a.substring(22,24),16)+parseInt(a.substring(30,32),16)+parseInt(a.substring(38,40),16)+parseInt(a.substring(46,48),16)+parseInt(a.substring(54,56),16)+parseInt(a.substring(62,64),16); 
	 
		SPartA=a1.toString(16).substring(a1.toString(16).length-2)+a2.toString(16).substring(a2.toString(16).length-2)+a3.toString(16).substring(a3.toString(16).length-2)+a4.toString(16).substring(a4.toString(16).length-2);
		SPartB=encryptByDESModeEBC(CryptoJS.enc.Utf8.parse(partB));


 	return SPartA+SPartB;
 		
 	
 }
 

//----------------定义解密函数-----------------   	
function decryptByTripleDESModeEBC(ciphertext){
	var keyHex = CryptoJS.enc.Utf8.parse(SPKey);
	var decrypted = CryptoJS.TripleDES.decrypt({
	ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
	}, keyHex, {
	mode: CryptoJS.mode.ECB,
	padding: CryptoJS.pad.Pkcs7
	});
	var result_value = decrypted.toString(CryptoJS.enc.Utf8);
	return result_value;
	}