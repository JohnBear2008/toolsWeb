/**
 * @author mustapha.wang
 * @fileOverView
 * 与安全相关的模组。在nodejs和browser环境都可使用。
 * @see module:yjSecurity
 */

if (typeof module !== 'undefined' && module.exports) {
	// // /前面不能加var,否则在

	var NodeRSA = require('node-rsa');
	var yjDiffieHellman = require("./yjDiffie-Hellman");
}

var yjSecurity = {

	"Diffie-Hellman": {
		/**
		 * 公钥加密
		 * @memberof yjDiffie-Hellman
		 * @field
		 * @param {string} str 要加密的字串
		 * @return {string} 加密后的字串。
		 */
		encrypt: function (str) {
			var encoder = new NodeRSA(yjDiffieHellman.publicKey_pkcs8, {
				encryptionScheme: 'pkcs1'
			});
			var encryptedStr = encoder.encrypt(str, "base64", "utf8");
			return encryptedStr;
		},
		/** 
		 * 私钥解密
		 * @memberof yjDiffie-Hellman
		 * @param {string} str 要解密的字串
		 * @return {string} 解密后的字串
		 */
		decrypt: function (str) {
			var decoder = new NodeRSA(yjDiffieHellman.privateKey_pkcs1, {
				encryptionScheme: 'pkcs1'
			});
			var strRaw = decoder.decrypt(str, "utf8");
			return strRaw;
		},
		/**
		 * 私钥签名。为字串计算一个较短的特征字串。
		 * @memberof yjDiffie-Hellman
		 * @param {string} str 要签名的字串
		 * @return {string} 签名后的字串 		 
		 */
		sign: function (str) {
			var encoder = new NodeRSA(yjDiffieHellman.privateKey_pkcs1, {
				encryptionScheme: 'pkcs1'
			});
			var signedStr = encoder.sign(str, "base64", "utf8");
			return signedStr;
		},
		/**
		 * 公钥验证。验证字串是不是与某个签名匹配。
		 * @memberof yjDiffie-Hellman
		 * @param {string} str 要验证的字串。
		 * @param {string} signature 签名。
		 * @return {boolean} 是否匹配。
		 */
		verify: function (str, signature) {
			var decoder = new NodeRSA(yjDiffieHellman.publicKey_pkcs8, {
				encryptionScheme: 'pkcs1'
			});
			return decoder.verify(str, signature, "utf8", "base64");
		}
	}
}

if (typeof module !== 'undefined' && module.exports) {
	// 如果用module.exports = yjSecurity;
	// qunit的机制,需要用code:{path:"./source/yjSecurity.js",namespace:"yjSecurity"}
	// 如果用exports。yjSecurity；qunit直接用
	module.exports = yjSecurity;
}