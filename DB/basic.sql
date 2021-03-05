-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.2.10-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 toolsweb.bgu_orig 结构
DROP TABLE IF EXISTS `bgu_orig`;
CREATE TABLE IF NOT EXISTS `bgu_orig` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `DeptID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(50) COLLATE utf8_bin NOT NULL,
  `Loacation` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Status` int(1) DEFAULT 1,
  `Descript` char(100) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `DeptName` (`DeptName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_orig 的数据：~5 rows (大约)
DELETE FROM `bgu_orig`;
/*!40000 ALTER TABLE `bgu_orig` DISABLE KEYS */;
INSERT INTO `bgu_orig` (`DBID`, `DeptID`, `DeptName`, `Loacation`, `Status`, `Descript`) VALUES
	(11, '21012266', '软体部', '宁波弘讯科技', 1, '大港'),
	(12, '21012369', '工程部', '宁波弘讯科技', 1, '大港'),
	(15, '21012598', '营销部', '宁波弘讯科技', 1, '大港'),
	(20, '21011828', '专案部', '宁波弘讯科技', 1, '大港'),
	(21, '21022753', '财务部', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_orig_detail 结构
DROP TABLE IF EXISTS `bgu_orig_detail`;
CREATE TABLE IF NOT EXISTS `bgu_orig_detail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `DeptID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `GroupID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `GroupName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `Loacation` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Status` int(1) DEFAULT 1,
  `Descript` char(100) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `GroupID` (`DeptName`,`GroupName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_orig_detail 的数据：~9 rows (大约)
DELETE FROM `bgu_orig_detail`;
/*!40000 ALTER TABLE `bgu_orig_detail` DISABLE KEYS */;
INSERT INTO `bgu_orig_detail` (`DBID`, `DeptID`, `DeptName`, `GroupID`, `GroupName`, `Loacation`, `Status`, `Descript`) VALUES
	(5, '21012598', '营销部', '21010555', '内修组', '宁波弘讯科技', 1, '大港'),
	(6, '21012369', '工程部', '21011933', '应用组', '宁波弘讯科技', 1, '大港'),
	(7, '21012266', '软体部', '21011644', 'MIS', '宁波弘讯科技', 1, '大港'),
	(8, '21012266', '软体部', '21011655', '品管组', '宁波弘讯科技', 1, '大港'),
	(9, '21011828', '专案部', '21011839', 'Sandal专案组', '宁波弘讯科技', 1, '大港'),
	(10, '21012369', '工程部', '21011955', '产品技术组', '宁波弘讯科技', 1, '大港'),
	(12, '21012598', '营销部', '21020213', '业务课', '宁波弘讯科技', 1, '大港'),
	(13, '21012266', '软体部', '21020219', '内务组', '宁波弘讯科技', 1, '大港'),
	(14, '21022753', '财务部', '21022727', '财务组', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig_detail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_staffs 结构
DROP TABLE IF EXISTS `bgu_staffs`;
CREATE TABLE IF NOT EXISTS `bgu_staffs` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffUser` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffLevel` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptLabel` char(200) COLLATE utf8_bin DEFAULT NULL,
  `DeptDefault` char(100) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(200) COLLATE utf8_bin DEFAULT NULL,
  `GroupDefault` char(100) COLLATE utf8_bin DEFAULT NULL,
  `StaffRole` char(20) COLLATE utf8_bin DEFAULT NULL,
  `UpAuditor` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Mobiles` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Status` int(1) DEFAULT 1,
  `StatusText` char(4) COLLATE utf8_bin DEFAULT '正常',
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_staffs 的数据：~25 rows (大约)
DELETE FROM `bgu_staffs`;
/*!40000 ALTER TABLE `bgu_staffs` DISABLE KEYS */;
INSERT INTO `bgu_staffs` (`DBID`, `StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `DeptLabel`, `DeptDefault`, `GroupLabel`, `GroupDefault`, `StaffRole`, `UpAuditor`, `Mobiles`, `Status`, `StatusText`) VALUES
	(3, '10039','孙凌财', '孙凌财', '2', '软体部', NULL, 'HMI', NULL, '部门主管', '', '17051095060', 0, '正常'),
	(4, '10044', '李源', '李源', '2', '软体部', NULL, 'HMI', NULL, '部门主管', '', '17051095060', 0, '正常'),
	(9, '10130', '张亮', '张亮', '4', '软体部', NULL, 'MIS', NULL, '资讯承办人', '', '17051095060', 0, '正常'),
	(11, '10327', '王光漫', '王光漫', '4', '软体部', NULL, 'MIS', NULL, '行政承办人', '', '17051095060', 1, '正常'),
	(12, '10359', '周玲燕', '周玲燕', '1', '营销部', NULL, '内务组', NULL, '文员', '', '17051095060', 1, '正常'),
	(32, '30026', '施宇城', '施宇城', '1', '软体部', NULL, 'MIS', NULL, '文员', '', '17051095060', 1, '正常'),
	(34, '30029', '谢丽君', '谢丽君', '1', '工程部', NULL, '业务课', NULL, '文员', '', '17051095060', 1, '正常'),
	(35, '30032', 'Admin', '熊奇龙', '1', '软体部', NULL, 'MIS', NULL, '文员', '', '17051095060', 1, '正常'),
	(51, '10099', '王启源', '王启源', '1', '软体部', NULL, 'MIS', NULL, '文员', '', '15058034628', 1, '正常'),
	(52, '10084','劳亚丹', '劳亚丹', '1', '工程部', NULL, '内务组', NULL, '文员', '', '17051095060', 1, '正常'),
	(53, '50004', '张光帷', '张光帷', '2', '软体部,工程部', NULL, 'MIS', NULL, '部门主管', '', '17051022222', 1, '正常'),
	(54, '10001', '周筱龙', '周筱龙', '3', '营销部,专案部', '软体部工程单位', '', NULL, '副总', '', '17051099520', 1, '正常'),
	(57, '50026', '曹欣卉', '曹欣卉', '4', '软体部,工程部,财务部', NULL, 'NB1', NULL, '采购承办人', '', '17051096666', 1, '正常'),
	(58, '10035', '乐晓雯', '乐晓雯', '5', '软体部,工程部,财务部', NULL, 'NB1', NULL, '采购主管', '', '17051096541', 1, '正常'),
	(59, '10023',  '叶海萍', '叶海萍', '6', '财务部,软体部,工程部', NULL, '财务组', NULL, '财务总监', '', '17051098765', 1, '正常'),
	(60, '10080', '俞田龙', '俞田龙', '7', '软体部,工程部,财务部', NULL, 'NB1', NULL, '总经理', '', '17051023456', 1, '正常'),
	(61, '10090',  '熊明惠', '熊明惠', '8', '软体部,工程部,财务部', NULL, 'NB1', NULL, 'CEO', '', '17051011111', 1, '正常'),
	(62, '10093', '熊钰麟', '熊钰麟', '9', '软体部,工程部,财务部', NULL, 'NB1', NULL, '董事长', '', '17051888888', 1, '正常'),
	(79, '50027', '曹先生', '曹先生', '3', '软体部,工程部', NULL, 'NB1', NULL, '副总', '', '17051033333', 1, '正常'),
	(82, '10963', '林丹桂', '林丹桂', '2', '财务部', NULL, '财务组', NULL, '部门主管', '', '17051095060', 1, '正常'),
	(84, '10963', '林丹桂', '林丹桂', '1', '财务部', NULL, '财务组', NULL, '文员', '', '17051095060', 1, '正常'),
	(112, '30028', '林盛', '林盛', '1', '专案部', '专案部', '应用组', '应用组', '文员', NULL, '13062589985', 1, '正常'),
	(113, '10023',  '叶海萍', '叶海萍', '3', '财务部', '财务部', '', '', '副总', NULL, '15058085471', 1, '正常'),
	(114, '10023', '叶海萍', '叶海萍', '1', '财务部', '财务部', '财务组', '财务组', '文员', NULL, '15058085471', 1, '正常'),
	(115, '50027',  '曹先生', '曹先生', '1', '软体部', '软体部', 'MIS', 'MIS', '文员', NULL, '17051999999', 1, '正常'),
	(117, '50004','张光帷', '张光帷', '1', '专案部', '专案部', '内务组', '内务组', '文员', NULL, '15058524782', 1, '正常');
/*!40000 ALTER TABLE `bgu_staffs` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_subject 结构
DROP TABLE IF EXISTS `bgu_subject`;
CREATE TABLE IF NOT EXISTS `bgu_subject` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `RuleType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetItem` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetCID` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DesCript` char(200) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BudgetCID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_subject 的数据：~50 rows (大约)
DELETE FROM `bgu_subject`;
/*!40000 ALTER TABLE `bgu_subject` DISABLE KEYS */;
INSERT INTO `bgu_subject` (`DBID`, `RuleType`, `Subject`, `BudgetItem`, `BudgetCID`, `DesCript`, `DeptName`) VALUES
	(1, 'A', '福利费', '其他', 'A001', '年终各部门聚餐等其他费用', '各需求部门'),
	(2, 'A', '汽车费用', '汽车维修保养', 'A002', '企业维修、保养、年检费用', '行政'),
	(3, 'A', '汽车费用', '汽车保险费', 'A003', '汽车保险费用', '行政'),
	(4, 'A', '通讯费', '联通网络费', 'A004', '联通网络费', '行政'),
	(5, 'A', '办公费', '网址费、网站建设', 'A005', '通用网址/无线网址年费/新申请网址费用', '行政'),
	(6, 'A', '办公费', '商标费', 'A006', '境内外申报商标费用', '行政'),
	(7, 'A', '办公费', '专利费', 'A007', '境内外申报各项专利费用', '行政'),
	(8, 'A', '办公费', '环境检测费', 'A008', '废气排污费用，危化物回收费，垃圾清运，活性炭购置等费用', '行政'),
	(9, 'A', '办公费', 'VI费用', 'A009', '公司品牌形象设计费用', '行政'),
	(10, 'A', '办公费', '书报杂志', 'A010', '订购各种书报期刊杂志费用', '行政'),
	(11, 'A', '办公费', '名片印制', 'A011', '名片印制费用', '行政'),
	(12, 'A', '汽车费用', '汽车用油费', 'A012', '汽车加油费用', '行政'),
	(13, 'A', '汽车费用', '车船使用税', 'A013', '车船使用税', '行政'),
	(14, 'A', '检测费', '仪器检测费', 'A014', '仪器设备检测费用', '各需求部门'),
	(15, 'A', '业务招待费', '交际费', 'A015', '客户、供应商餐费', '需求部门'),
	(16, 'A', '研发投入', '技术服务费', 'A016', '', ''),
	(17, 'A', '研发投入', '技术服务费', 'A017', '研发相关技术服务费', '需求部门'),
	(18, 'A', '出口报关费用', '出口报关费', 'A018', '出口报关费用', '需求部门'),
	(19, 'A', '展览费', '展览费', 'A019', '各展览展位费、展台搭建费、服装、宣传用品、参与人员住宿、餐费、交通费等于展会直接相关费用', '需求部门'),
	(20, 'A', '广告费', '广告费', 'A020', '通过各种媒体宣传等方式对公司的产品或者形象做广告宣传。', '需求部门'),
	(21, 'A', '咨询及审计费', '审计费', 'A021', '各中介机构审计费用', '需求部门'),
	(22, 'A', '会务费', '会务费', 'A022', '营业部或工程部召开会议所发生的费用，包括租用会议场所费用、会议资料费、交通费、茶水费、餐费、住宿费等（除董事会费）', '需求部门'),
	(23, 'A', '公益支出', '公益支出', 'A023', '通过公益性社会团体或者县级以上人民政府及其部门对外的捐赠支出', '行政'),
	(24, 'A', '办公费', '绿化养护保安费用', 'A024', '厂区绿化养护支出，养狗费用支出', '行政'),
	(25, 'A', '办公费', '招聘费', 'A025', '通过各种途径招聘人事费用', '行政'),
	(26, 'A', '办公费', '签证费', 'A026', '境外执行公务需办理的签证费和保险费用', '行政'),
	(27, 'A', '差旅费', '租车费用', 'A027', '使用公司指定的租车服务', '行政'),
	(28, 'A', '其他', '其他-其他', 'A028', '其他', '行政'),
	(29, 'A', '在建工程', '待安装设备', 'A029', '新厂房电梯、中央空调、生产设备等需安装调试设备', '行政'),
	(30, 'A', '在建工程', '厂房前期工程', 'A030', '厂房基建支出', '行政'),
	(31, 'A', '研发投入', '查新费用', 'A031', '科技项目查新费用', '行政'),
	(32, 'A', '咨询及审计费', '体系建设维护费用', 'A032', 'ISO相关费用', '行政'),
	(33, 'A', '董事会费', '董事会费股东会费', 'A033', '独立董事津贴，。', '财务、行政'),
	(34, 'A', '协会会费', '协会会费', 'A034', '各协会会员会费', '行政'),
	(35, 'A', '运费', '快递费', 'A035', '使用快递公司寄件费用', '行政，各办事处由客服部请款'),
	(36, 'A', '运费', '物流费', 'A036', '使用物流公司寄件费用', '行政，各办事处由客服部请款'),
	(37, 'A', '福利费', '宿舍费用', 'A037', '与宿舍相关费用，包括从住宿员工扣回的水电费用', '行政'),
	(38, 'A', '福利费', '食堂其他费用', 'A038', '食堂修理，器具购置等其他费用', '行政'),
	(39, 'A', '福利费', '旅游', 'A039', '公司统一安排员工旅游费用', '行政'),
	(40, 'A', '福利费', '尾牙费用', 'A040', '年末尾牙费用', '承办部门'),
	(41, 'A', '职工教育经费', '职工培训费', 'A044', '员工各项外训和内训费用', '行政'),
	(42, 'A', '租赁费', '租赁费用', 'A043', '公司对外租赁办公或其他用房费用，包括租赁房租、物业费、电梯费、水电费、电话费、取暖费、网络费等', '房租-行政，其他-客服部'),
	(43, 'A', '修缮费', '设备维修', 'A042', '生产、办公、研发设备维修和养护费用', '生产设备-行政 其他-需求部门'),
	(44, 'A', '修缮费', '建筑修缮', 'A041', '厂区维护和建筑修理修缮', '行政'),
	(45, 'B', '福利费', '劳保用品', 'B002', '手套/防尘衣/钢头鞋/胶鞋/口罩/工作服', '行政'),
	(46, 'B', '研发投入', '直接投入', 'B003', '新机种研发（面膜打样费）、PM工具升级，研发使用外购材料', '工程部'),
	(47, 'B', '办公费', '办公家具设备', 'B206', '除电脑外，单位价值5000元以下的家具和办公设备（打印机、扫描仪等）', '资材'),
	(48, 'B', '办公费', 'MIS费用', 'B104', '包括电脑、笔记本、网络安全防护系统、监控设备、门禁等公司网络、信息安全费用支出', '行政'),
	(49, 'B', '机物料消耗', '生产用辅料', 'B005', '生产用辅料：纸盒、胶带、保护剂、气泡袋、锡膏、酒精、二硫化钼、橡皮筋、自封袋', '各需求部门'),
	(50, 'B', '办公费', '办公费用', 'B201', '翻译费、办公用品、纯净水费用、复印费用、电子平台交易手续费等其他办公费用', '各需求部门');
/*!40000 ALTER TABLE `bgu_subject` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
