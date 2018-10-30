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