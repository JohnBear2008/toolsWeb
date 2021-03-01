var path = require("path");
var fs = require("fs");

var g_dirFoil=path.join(__dirname,"../../yujiang.Foil.Node");
var g_dirFoilBiz=path.join(g_dirFoil,"../yujiang.Foil.Node.BizServer");
var g_dirFoilWeb = path.join(g_dirFoil,"../yujiang.Foil.Node.WebServer");

var g_dbConenctions={
    "mysql.huawei":{
    	engine:"mysql",
		connection:{
			server : '119.3.45.21',
			database : 'tmPlasCloud',
			user : 'root',
			password : 'tmXA@14863',
			multipleStatements:true
		}
	},
    "tiDB":{
        engine:"mysql",
        connection:{
            server : '192.168.10.149',
            port : 4000,
            database : 'tmPlasCloud',
            user : 'root',
            password : 'root@123',
            multipleStatements:true
        }
    },
	"mysql.xian":{
    	engine:"mysql",
    	connection:{
    		server : '192.168.11.107',
    		database : 'tmPlasCloud190706',
    		user : 'root',
    		password : '123456',
			multipleStatements:true
		}
	},
	"mysql.self":{
		engine:"mysql",
		connection:{
    		server : '127.0.0.1',
            database : 'tmPlasCloud',
            user : 'root',
            password : 'root',
            multipleStatements:true
		}
	}
};

var g_bizConnections= {
	"http.self":{
		engine: "remote.superagent",
		connection: {
			url: "http://127.0.0.1:2019/biz"
		}
	}
};

var config = {
	port: 80,
    port_https:443,
    potocols:['http','https'],
	db_Connection: g_dbConenctions["mysql.self"],
    biz_Connection: g_bizConnections["http.self"],
    homePage_url : "/app/overView/showOverView",
    product : {
		bannerBackgroundImage : "/images/plcBanner/banner.png",
		loginBackgroundImage : "/images/plcBanner/background.jpg",
		name : "tmPlasCloud",
		description : "Techmation MES P2/Cloud",
		userImg : "",
		logo : "/images/plcLogo/tmPlasCloud.gif",	
		favIcon : path.join(__dirname, './web/src/client/images/plcLogo/logo.ico'),
		version : "5.2.0",
		releaseLogDir:path.join(__dirname,"./web/src/system/release/data"),
		company:{
			name:"Ningbo Techmation Software Co.,Ltd.",
			website:"http://www.techmation.com.cn"
		},
		env:['production','development'][1],
        
	},
    processTree:{
		style:"mes_accordion"
	},
	packages:{
		version:{
			"jquery-easyui":"1.5.4.5"
		}
	},
    security: {
        passwordEncryptMode: 'rsa',
        isNeedSession: true,
        isOpenRegister: false,
        isCheckProcessAuthority:true,
        login_url: "/app/account/showLogin",
        register_url:"/app/register/showRegister",
        protocol_url:"/app/register/protocol",
        loginTypes: ["userID"],
        notNeedLogin_urls:[],
        ca:{
             //私钥文件路径
             keyPath:path.join(__dirname,'./ca/2105488_www.tmplascloud.com.key'),
             //证书文件路径
             certPath:path.join(__dirname,'./ca/2105488_www.tmplascloud.com.pem' )
        },
        bodyParser:{
            urlencoded:{limit:"10mb",parameterLimit:1000000}
		}
    },
    log : {
        login : {
            isIPLocation : false
        }
    },
    theme:{
		layout:{
			foil:["classic","bright"][1]
		},
		style:{
			easyui:["default","black","bootstrap","gray","metro"][4],
			foil:["classic","bright","modern"][1],
			project: ["wathet-blue","wathet-gray","incanus","hoary"][3]
		}
	},
    project: {
        edition:"v0.1",
        isNeedStatus:true,
        isShowPageNum: true,
        netMode : "local",
        dataSource : ["mysql","openTSDB","influxDB"][2],
        openTSDBUrl : 'opentsdb-fzsy63naamoeyq9.cloudtable.com:4242',
        influxDB : {
            host: '192.168.10.121',
            database: 'tmplascloud',
            port: 8086,
            username: 'root',
            password: '123456',
        },
        status: {
        	text : "",
        	color : "#FFF",
        	padding : "20px 0px"
        },
        isShowMyAccount : true,
        authorizeHost : true
    },
    isNeedView: true,
    rootDir: g_dirFoilWeb,
    logDir: path.join(__dirname, "./web/src/system/log"),
    autoRunDirs: [],
    routeDirs: [{
        nameSpace:"/app/account",
        rootDir: path.join(__dirname,"./web/src/app/account"),
        dir: path.join(__dirname, "./web/src/app/account")
    },{
        rootDir: g_dirFoilBiz,
        dir: path.join(g_dirFoilBiz, "biz")
    },{
        nameSpace:"/biz/console",
        rootDir: path.join(__dirname, "./biz/src/console"),
        dir: path.join(__dirname, "./biz/src/console")
    },{
        rootDir: path.join(__dirname, "./biz/src"),
        dir: path.join(__dirname, "./biz/src/biz")
    }, {
        rootDir: g_dirFoilWeb,
        dir: path.join(g_dirFoilWeb, "app")
    }, {
		rootDir: path.join(__dirname,"web/src/root"),
        dir: path.join(__dirname, "web/src/root")
	},{
        rootDir: path.join(__dirname, "./web/src"),
        dir: path.join(__dirname, "./web/src/app")
    },{
        rootDir: path.join(__dirname, "./web/src"),
        dir: path.join(__dirname, "./web/src/console")
    },{
        nameSpace:"/app/tm.utils.type",
        rootDir : path.join(__dirname,"../../tm.utils.type/web"),
        dir : path.join(__dirname, "../../tm.utils.type/web")
    },{
        nameSpace:"/biz/tm.utils.type",
        rootDir : path.join(__dirname,"../../tm.utils.type/biz"),
        dir : path.join(__dirname, "../../tm.utils.type/biz")
    },{  
        nameSpace:"/app/system/authority2/user",
        rootDir : path.join(__dirname,"../../tm.utils.account.quatos/web"),
        dir : path.join(__dirname, "../../tm.utils.account.quatos/web")
    },{
        nameSpace:"/biz/system/authority2/user",
        rootDir : path.join(__dirname,"../../tm.utils.account.quatos/biz"),
        dir : path.join(__dirname, "../../tm.utils.account.quatos/biz")
    },{
        nameSpace:"/app/tm.utils.spec",
        rootDir : path.join(__dirname,"../../tm.utils.spec/web"),
        dir : path.join(__dirname, "../../tm.utils.spec/web")
    },{
        nameSpace:"/biz/tm.utils.spec",
        rootDir : path.join(__dirname,"../../tm.utils.spec/biz"),
        dir : path.join(__dirname, "../../tm.utils.spec/biz")
    },{
        nameSpace:"/app/tm.utils.controlData",
        rootDir : path.join(__dirname,"../../tm.utils.controlData/web"),
        dir : path.join(__dirname, "../../tm.utils.controlData/web")
    },{
        nameSpace:"/biz/tm.utils.controlData",
        rootDir : path.join(__dirname,"../../tm.utils.controlData/biz"),
        dir : path.join(__dirname, "../../tm.utils.controlData/biz")
    }
    ],
	staticDirs : [
	    path.join(__dirname, "./web/src/client"),
	    path.join(__dirname, "uploaded"),
		path.join(g_dirFoilWeb, "client"),
		path.join(g_dirFoil,'client'),
		path.join(g_dirFoil,'src/client')
	].concat(process.env.Node_Path.split(';')),
	requireDirs : {
		"yujiang.Foil" : path.join(g_dirFoil,"src"),
		"acroprise.MultiLang" : path.join(g_dirFoil,"../MultiLanguage/Component/JavaScript/Acroprise.MultiLang.JavaScript/src"),
        "yujiang.Foil.Biz":path.join(g_dirFoilBiz,"biz")
	},
	locale : {
		DDFile : path.join(g_dirFoil, "../yujiang.Foil.Node.Lng/Unicode.lng"),
		LCID : 2052
	},
	cache:{
        engine:"native",
        connection:{
            dir:path.join(__dirname,'./uploaded')
        },
        isCacheView:false
    },
    sms:{
        baidu:{
            ak:"3ZNfTt6yTX8X3ho5e364FeoE",
            sk:"h8tah3cAG3SzsFnllW8bobND35A1fzLs",
            invokeId:'sms-sign-JSgSJi57835'
        }
    },
    edgeServer_Connection:{
        apiUrl:"127.0.0.1:2021/system.api.udpProtocol",
    },
    payment:{
        //弘讯
        ali:{
           //支付宝网关
            alipayURL : 'https://openapi.alipay.com/gateway.do?',
            //应用id
            app_id : '2018120862494653',
            //签名方式：RSA或RSA2
            signType : 'RSA2',
            //应用私钥，保密
            privateKey : '-----BEGIN RSA PRIVATE KEY-----\n'+
                "MIIEowIBAAKCAQEAyYDEEJm0d02Zfpv35Z4Ryf27KrWcCeyVEPjfs/fuNnRWyAJjJcVOmunjGwtmMv01Q6D2jEs3fJVDO/5pgKbcyhesdSRKun2kb8Y1VD1gB/EO/2uchTniq83eVkQXxKeruf4jwNx1tdRXaD9Zc2OOTg/omHT/L4BvRRVchmtZ5nwfKq6a3ed56rSBmS2Jn+iBYj/xqQNBrZrEbwaVUP6xO8h6ANc1MP7GSYaF0V13brSjTNQlr6SLGChJWpRj6QIPv3PAvrHXwy1Pvd+PhWETZpI+ol9dswdv6XghyjsqbggCIRjfUA61s0p5oymPhEpdvi/oOf8ipmn4mIsvFl2HpQIDAQABAoIBABLSrn4Gfa8vVolXNH8ElxDRXOyObncW3I3rUapUHLKFh53Da1OZ7M/XzVk3ZWKZ+KHKpX1RgWtn3hH6oAxeif1u3LNMopZtKjEuyMiHuzLCt+3wNXzUfXIjFwPj9HxwVUBYlypq7awAm/GnCUoYILD2F3o2Y6giTUKczjnYSVuYThmntMyA8S4xIGh+2omTiuNb96FwgUApbDz+3mFOp999IBC3aj5AMEF3Muem/75zROXp0KRaF724dcy4DgBIf/IoEV5YuCLItplVE3IO9nd1oc5H9SD8iw68lJx23PtVwhRayzP8V9zaQoWqlSklWqfg14DyDuyWerMMY8FsrQECgYEA9WLLQCYg1VE0FubsMkm1hSAuQvpJNZTpBtkwCCBJgtP/5EkT9FOODrfiyHZMIxqxlDRf6KIBN6lxN35OZ56/AyITNWmsJouRW/3X+5vNBCPEzurBU8F58vLBVo28DJN7cNdht71Ax1tzRM8RjTddtIpMEN+3v+/LuUyarQ8a+yECgYEA0jgMO1jHqOaujpcwZ3W5sspwOsrSWwSYIdfyAlo63FsHlDgTwGtDc1bI8NaDg2+8VTbIbvmeeKgplUgqcLFcNpIrdRGG4n9qDJZPeC65wYxlLVECgaqP6WHHds6gAel9CUvad1OY1J4rs55wX9A02CcdfXTPCx9vW+s25KOioAUCgYA7n4mrSJhpvJVfizSQ83/7nNogxBfNwSTt2Q/mqZGzDDf9DBShJTw7L0sXUkclsHK9hAxZxiNtluo/hZ0faF8ZL8pjDA4cP4VOSNuV80FZZCeJ71iSNUygT4PSuBWdKKixvmOr9Xwr9HiJm5a0LWPDXmclInbPWEC0AX0D18vCgQKBgQCp9BYvhL8mlhlZvnGrs0nGelPxtDgMzdIQyn0l2bzsmcuu0Qdm8VE+1lLuIv+AK72fRwMUdUrhUVMNFaL6KOncVKA9rUXXqBscwgjNqTkUeWTzFiNooXRnwl14d+R0p0gnU+PzxOoyOw4p0VYYoEOY3UbCPsWEwI1PSwK+Jm074QKBgFuPhdkTYvI8WyYFhu+K7EDA7v/SuT1upK4eJ3mXf5bB8SX3xd1RSAIiI9PlbZmaHEIWskFATb5hPXT2eUJGBm1Q0/IMzL9eRfF5C1wmY1I8ZvbZ5wa0Wb/pRrPsXlzLtMFLUsqkBVBAXlBntueuxytKjlVKjKOJVHf/nHgq5AFY\n"
                +'-----END RSA PRIVATE KEY-----',
            //应用公钥，配置给支付宝
            publicKey : "-----BEGIN PUBLIC KEY-----\n" + 
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyYDEEJm0d02Zfpv35Z4Ryf27KrWcCeyVEPjfs/fuNnRWyAJjJcVOmunjGwtmMv01Q6D2jEs3fJVDO/5pgKbcyhesdSRKun2kb8Y1VD1gB/EO/2uchTniq83eVkQXxKeruf4jwNx1tdRXaD9Zc2OOTg/omHT/L4BvRRVchmtZ5nwfKq6a3ed56rSBmS2Jn+iBYj/xqQNBrZrEbwaVUP6xO8h6ANc1MP7GSYaF0V13brSjTNQlr6SLGChJWpRj6QIPv3PAvrHXwy1Pvd+PhWETZpI+ol9dswdv6XghyjsqbggCIRjfUA61s0p5oymPhEpdvi/oOf8ipmn4mIsvFl2HpQIDAQAB\n" +
                "-----END PUBLIC KEY-----",
            //支付宝公钥，用来验签
            ali_publicKey:'-----BEGIN PUBLIC KEY-----\n' + 
            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnWtivWmV6ac4WUjhmzZ7WYuos+gChwvOcnpNotC7eoWI9pZaWwY7ajxdmuod5c1gjL+k9iefnKSyomjDCPh79AFGUo7O7KY6+zOaV3sGoXIh4pdtC53LT8g9guGZ+pv2rCVSbrF8Nkcg2QUN4OKPhIqa1OZ6qe7cYGloPTjdldTa9ZWi5O+JFEqEAKBVpRHjKUJqb95NZ3uGg4C2WXpQI0mmOmIXjH4F/BVqna0Kua55Jw5J4I+dK9JrTrF+CoMqNt0UGprFaQzwn8gidwpaXRS3q4yJAa+vi5Mv4rbZ6MACzG6S00qZTWq6lU7HN3NNPuwTV6WGNpjK+Jf/DYxwXQIDAQAB\n" +
            '-----END PUBLIC KEY-----',
            //支付宝商家账号
            ali_account:"app.wx@techmation.com.cn",
            //notify_url:"https://www.fgems.net/biz/APPService/payment/alipay/aliGateway",
            notify_url:"https://www.tmplascloud.com/console/alipay/aliGateway"
        },
        wx:{
            //2、交易类型
            //JSAPI--JSAPI支付（或小程序支付）、
            //NATIVE--Native支付、
            //APP--app支付，
            //MWEB--H5支付
            NATIVE:{
                appid:"wx0654f3f79f7b4d24",//调用接口提交的应用ID
                appsecret:"e9ff968ef9e8474f5e51c414fc79efaf",//微信开放平台应用ID的appsecret
                mch_id:"1498896572",//调用接口提交的商户号
                mchkey:"xiaohuangyubaoyongkeji1234567890",//商户平台配置的安全秘钥 
                notify_url:"https://www.tmplascloud.com/console/wxpay/wxGateway",//支付回调url,
                cert: fs.readFileSync(path.join(__dirname,'./biz/src/cert/apiclient_cert.pem')),
                key: fs.readFileSync(path.join(__dirname,'./biz/src/cert/apiclient_key.pem' ))
            },
            /*JSAPI:{
                appid:"wxe7096d104487ea93",//调用接口提交的应用ID
                appsecret:"1c5dc5fcabd5d0db7b58ee0fb101ab32",//微信开放平台应用ID的appsecret
                mch_id:"1498896572",//调用接口提交的商户号
                mchkey:"xiaohuangyubaoyongkeji1234567890",//商户平台配置的安全秘钥
                notify_url:"https://www.fgems.net/biz/APPService/payment/wxpay/wxGateway",//支付回调url,
                cert: fs.readFileSync(path.join(__dirname,'./cert/apiclient_cert.pem')),
                key: fs.readFileSync(path.join(__dirname,'./cert/apiclient_key.pem' ))
            },*/
        },
        yunpay:{//云闪付
            //交易请求地址 
            url:"https://qr-test2.chinaums.com/netpay-route-server/api//",//银商平台接口地址(实际接口为：https://qr-test2.chinaums.com/netpay-route-server/api/,因框架里会把最后一个“/”去掉，所以多加一个)
            mid:"898340149000005",//商户号
            tid:"88880001",//终端号
            msgSrc:"WWW.TEST.COM",//来源系统
            msgSrcId:"3194",
            instMid:"QRPAYDEFAULT",//机构商户号
            key:"fcAmtnx7MwismjWNhNKdHC44mNXtnEQeJkRrhKJwyrW2ysRR",//通讯秘钥
            notifyUrl:"https://www.tmplascloud.com/console/yunpay/ypGateway",//后台通知地址
            // notifyUrl:"http://180.76.109.49/biz/backRcvResponce",
            msgType:{//消息类型
                getQRCode:"bills.getQRCode",//获取二维码
                query:"bills.query",//账单查询
                refund:"bills.refund",//订单退款
                queryLastQRCode:"bills.queryLastQRCode",//根据商户终端号查询此台终端最后一笔详单情况
                queryQRCodeInfo:"bills.queryQRCodeInfo",//查询二维码静态信息
                closeQRCode:"bills.closeQRCode",//关闭二维码
                updateQRCode:"bills.updateQRCode"//更新二维码
            }
        }
    },
}
module.exports = config;