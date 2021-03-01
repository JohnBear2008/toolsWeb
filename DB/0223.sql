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

-- 导出  表 toolsweb.bgu_quota 结构
DROP TABLE IF EXISTS `bgu_quota`;
CREATE TABLE IF NOT EXISTS `bgu_quota` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` char(20) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `BudgetCID` char(10) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `BudgetItem` char(50) COLLATE utf8_bin NOT NULL,
  `DeptName` char(50) COLLATE utf8_bin NOT NULL,
  `BudYear` char(10) COLLATE utf8_bin NOT NULL,
  `AllowMoney` int(11) DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  `Surplus` int(11) DEFAULT NULL,
  `IsOver` char(10) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DesCript` char(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BudgetItem`,`DeptName`,`BudYear`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_quota 的数据：~16 rows (大约)
DELETE FROM `bgu_quota`;
/*!40000 ALTER TABLE `bgu_quota` DISABLE KEYS */;
INSERT INTO `bgu_quota` (`DBID`, `Subject`, `BudgetCID`, `BudgetItem`, `DeptName`, `BudYear`, `AllowMoney`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `DesCript`) VALUES
	(18, '福利费', 'B002', '劳保用品', '软体部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(19, '差旅费', 'A002', '国内机票', '软体部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(20, '差旅费', 'A003', '国外机票', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(21, '差旅费', 'A004', '私车公用', '软体部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(22, '差旅费', 'A005', '租车费用', '软体部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(23, '办公费', 'A006', '签证费/人身保险费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(24, '办公费', 'B206', '办公家具设备', '软体部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(25, '办公费', 'B104', 'MIS费用', '软体部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(26, '运费', 'A035', '快递费', '软体部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(27, '运费', 'A036', '物流费', '软体部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(28, '职工教育经费', 'A011', '职工教育经费', '软体部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(29, '租赁费', 'A012', '租赁费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(30, '修缮费', 'A013', '修理费', '软体部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(31, '工具', 'A014', '工具费用', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(32, '通讯费', 'A015', '手机费', '软体部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(33, '办公费', 'B201', '办公费用', '软体部', '2021', 6000, NULL, NULL, 'N', '0', NULL);
/*!40000 ALTER TABLE `bgu_quota` ENABLE KEYS */;

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
