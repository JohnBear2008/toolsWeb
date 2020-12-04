let yjSecurity = require('./yjSecurity')
let pwe = 'hgifHOsbkTXmqxfJLe9UUpHdYfQ4kaTVgc1GoRUuOi/J51fcZ7mR669D42zZQnjSklxUvMvxp9K6zelt2qBtY6FXrMZDy7GFF78thIKR6T7PVsVpqP7HXfVZzyxFs9OpYuQOOCOkTMPlmCcd03VFudIADSRntL+9/TBONlB79ND5raWhIuSp8GpFaQmm/QG2tXccRy3fsiTPETnqZMS2u/6jy3PmwgBN57dTZGN0GaEM2508RsdZSuTfPB9Fu46D+WHX/0tZEH5kOqL4X6o2NOWL4CMYZnVrjX4LdxIEz+VY01r3UAmaHki1wWL2CijFlgG2zgFejuYtyhBeJ8ggDA=='

var path = require("path");
var g_dbConenctions = {
    //    engine: "mysql",
    //    connection: {
    //        server: '10.10.0.23',
    //        database: 'toolsWeb',
    //        user: 'demo',
    //        password: 'test',
    //        port:'3308',
    //        insecureAuth: true
    //    },
    engine: "mysql",
    connection: {
        server: '127.0.0.1',
        database: 'toolsWeb',
        user: 'root',
        password: yjSecurity["Diffie-Hellman"].decrypt(pwe),
        insecureAuth: true
        //       timezone:'GMT' //时区
    },
    // "erp_Connection": {
    //     engine: "sqlserver",
    //     package: "msnodesqlv8",
    //     connection: {
    //         driver: "SQL Server Native Client 11.0",
    //         server: '192.168.0.26',
    //         database: 'T9Techmation',
    //         user: 'sa',
    //         password: '338168',
    //     }
    // },
    "rich_T9": {
        engine: "sqlserver",
        package: "msnodesqlv8",
        connection: {
            driver: "SQL Server Native Client 10.0",
            server: '192.168.0.26',
            database: 'T9Techmation',
            user: 'sa',
            password: '338168',
        },
    }
};
var config = {
    port: 2019,
    biz_Connection: {
        engine: "remote.superagent",
        //        engine: "remote.restify",
        connection: {
            url: "http://127.0.0.1:2019/biz"
            // url: "http://192.168.0.9:2019/" // 这个是我们公司服务器的地址
        }
    },
    //    homePage_url: "/app/PM/workCenter",
    homePage_url: "/app/system/sitemap/showSitemap",
    db_Connection: g_dbConenctions,
    product: {
        name: "ToolsWeb",
        namePic: "/images/blank.png",
        projectName: 'ToolsWeb',
        description: "",
        logo: "/images/blank.png",
        favIcon: path.join(__dirname, '/client/images/Foil.ico'),
        version: "1.0.0",
        releaseLogDir: path.join(__dirname, "./web/system/release/data"),
        company: {
            name: "Techmation Co.,Ltd.",
            website: "http://www.techmation.com.cn",
            CNName: '宁波弘讯软件开发有限公司西安分公司'
        },
        mes: {
            deviceType: "EEI"
        },
        isNeedReleaseLog: false,
        isNeedMultilingual: false,
        loginBackgroundImage: "/images/login/background.jpg",
        userImg: ''
    },
    processTree: {
        isNeedAuthorityCheck: true,
        style: "mes_accordion"
    },
    security: {
        passwordEncryptMode: 'rsa',
        isNeedSession: true,
        isOpenRegister: false,
        login_url: "/app/account/showLogin",
        loginTypes: ["userID"],
        //        loginTypes: ["mobilePhone"],
        //        notNeedLogin_urls: []
        notNeedLogin_urls: [
            // "/system.files.upload/",
            // "/system.files/",
            // "/app/PM/lib/ajaxGet",
            // "/biz/PM/lib/ajaxGet",
            // "/app/PM/lib/ajaxPost",
            // "/biz/PM/lib/ajaxPost/",
            "/app/PM/linkPage",
            // "/app/PM/billsRequest"
        ],
        // bodyParser: {
        //     urlencoded: {
        //         limit: "10mb",
        //         parameterLimit: 1000000
        //     }
        // }
    },
    theme: {
        layout: {
            foil: ["bright"][0]
        },
        style: {
            easyui: ["default", "black", "bootstrap", "gray", "metro"][3],
            foil: ["bright", "modern"][0],
            project: ["wathet-blue", "wathet-gray", "incanus", "blue-white"][3],
        },
    },
    project: {
        status: { //测试中的样式 分别为 文本 颜色 位置 
            text: '', //为空时不显示测试中的信息
            color: '#FFFFFF',
            padding: '22px 0px'
        },
        edition: "mes"
    },
    packages: {
        version: {
            "jquery-easyui": "1.5",
            "jquery": '1.7.2',
        }
    },
    //    project: {
    //        edition: "mes"
    //    },
    isNeedView: true,
    rootDir: path.join(__dirname, "../yujiang.Foil.Node.WebServer"),
    logDir: path.join(__dirname, "./system/log"),
    autoRunDirs: [path.join(__dirname, "./biz/auto")],
    routeDirs: [{
        isNeedAuthorityCheck: true,
        rootDir: path.join(__dirname, "../yujiang.Foil.Node.BizServer"),
        dir: path.join(__dirname, "../yujiang.Foil.Node.BizServer/biz")
    }, {
        rootDir: path.join(__dirname, "../yujiang.Foil.Node.WebServer"),
        dir: path.join(__dirname, "../yujiang.Foil.Node.WebServer/app")
    }, {
        isNeedAuthorityCheck: true,
        rootDir: path.join(__dirname),
        dir: path.join(__dirname, "./biz")
    }, {
        rootDir: path.join(__dirname, "./web"),
        dir: path.join(__dirname, "./web/app")
    }],
    staticDirs: [
        path.join(__dirname, "../node_modules"),
        path.join(__dirname, "../yujiang.Foil.Node/client"),
        path.join(__dirname, "../yujiang.Foil.Node/src/client"),
        path.join(__dirname, "../yujiang.Foil.Node.WebServer/client"),
        path.join(__dirname, "./web/client"),
    ],
    requireDirs: {
        "yujiang.Foil": path.join(__dirname, "../yujiang.Foil.Node/src"),
        "acroprise.MultiLang": path.join(__dirname, "../MultiLanguage/Component/JavaScript/Acroprise.MultiLang.JavaScript/src"),
        "yujiang.Foil.Biz": path.join(__dirname, "../yujiang.Foil.Node.BizServer/biz")
    },
    locale: {
        DDFile: path.join(__dirname, "../yujiang.Foil.Node.Lng/Unicode.lng"),
        LCID: 2052
    },
    cache: {
        engine: "native",
        connection: {
            dir: path.join(__dirname, './uploaded')
        },
        isCacheView: false
    },
    sms: {
        baidu: {
            ak: "3ZNfTt6yTX8X3ho5e364FeoE",
            sk: "h8tah3cAG3SzsFnllW8bobND35A1fzLs",
            invokeId: 'f2VnoRb1-JQ9i-2s8Q'
        }
    }
};
module.exports = config;