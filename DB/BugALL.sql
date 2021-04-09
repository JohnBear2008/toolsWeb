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

-- 导出  表 toolsweb.bgu_credit 结构
DROP TABLE IF EXISTS `bgu_credit`;
CREATE TABLE IF NOT EXISTS `bgu_credit` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffId` char(30) COLLATE utf8_bin NOT NULL,
  `StaffName` char(20) COLLATE utf8_bin NOT NULL,
  `DeptName` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BudYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `UpperLimit` int(11) DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  `Surplus` int(11) DEFAULT NULL,
  `IsOver` char(10) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Descript` char(100) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`StaffId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_credit 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `bgu_credit` DISABLE KEYS */;
REPLACE INTO `bgu_credit` (`DBID`, `StaffId`, `StaffName`, `DeptName`, `BudYear`, `UpperLimit`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `Descript`) VALUES
	(1, '10001', '周筱龙', '工程部', '2021', 50000, NULL, NULL, 'N', NULL, NULL),
	(2, '20001', '刘宜芳', '营销部', '2021', 40000, NULL, NULL, 'N', NULL, NULL),
	(3, '50027', '曹先生', '软体部', '2021', 10000, 480, 9520, 'N', '2', NULL),
	(4, '10023', '叶海萍', '财务部', '2021', 30000, -83430, 113430, 'N', '7', NULL);
/*!40000 ALTER TABLE `bgu_credit` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_creditdetail 结构
DROP TABLE IF EXISTS `bgu_creditdetail`;
CREATE TABLE IF NOT EXISTS `bgu_creditdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffId` char(30) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `BillNo` char(50) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` int(11) DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `DesCript` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_creditdetail 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `bgu_creditdetail` DISABLE KEYS */;
REPLACE INTO `bgu_creditdetail` (`DBID`, `StaffId`, `StaffName`, `BudYear`, `RequestDate`, `BillNo`, `SNNO`, `TotalValue`, `DesCript`) VALUES
	(88, '50027', '曹先生', '2021', '2021-03-10', '20210310081177', 1, 200, NULL),
	(100, '50027', '曹先生', '2021', '2021-03-11', '20210311085741', 2, 240, NULL),
	(103, '10023', '叶海萍', '2021', '2021-03-24', '20210324091028', 1, 1476, NULL),
	(104, '10023', '叶海萍', '2021', '2021-03-24', '20210324091028', 1, 1476, NULL),
	(105, '10023', '叶海萍', '2021', '2021-03-26', '20210326104953', 2, 1200, NULL),
	(106, '10023', '叶海萍', '2021', '2021-03-26', '20210325164587', 3, -202080, NULL),
	(107, '10023', '叶海萍', '2021', '2021-03-26', '20210325164587', 3, -106008, NULL),
	(108, '10023', '叶海萍', '2021', '2021-03-26', '20210325164587', 4, 320, NULL),
	(109, '10023', '叶海萍', '2021', '2021-03-26', '20210325164587', 5, 320, NULL),
	(110, '10023', '叶海萍', '2021', '2021-03-26', '20210325164587', 6, 320, NULL),
	(111, '10023', '叶海萍', '2021', '2021-03-29', '20210329092735', 7, 18942, NULL);
/*!40000 ALTER TABLE `bgu_creditdetail` ENABLE KEYS */;

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
/*!40000 ALTER TABLE `bgu_orig_detail` DISABLE KEYS */;
REPLACE INTO `bgu_orig_detail` (`DBID`, `DeptID`, `DeptName`, `GroupID`, `GroupName`, `Loacation`, `Status`, `Descript`) VALUES
	(5, '21012598', '营销部', '21010555', '内修组', '宁波弘讯科技', 1, '大港'),
	(6, '21012369', '工程部', '21011933', '应用组', '宁波弘讯科技', 1, '大港'),
	(7, '21012266', '软体部', '21011644', 'MIS', '宁波弘讯科技', 1, '大港'),
	(8, '21012266', '软体部', '21011655', '品管组', '宁波弘讯科技', 1, '大港'),
	(9, '21011828', '专案部', '21011839', 'Sandal专案组', '宁波弘讯科技', 1, '大港'),
	(10, '21012369', '工程部', '21011955', '产品技术组', '宁波弘讯科技', 1, '大港'),
	(12, '21012598', '营销部', '21020213', '业务课', '宁波弘讯科技', 1, '大港'),
	(13, '21012266', '软体部', '21020219', '内务组', '宁波弘讯科技', 1, '大港'),
	(14, '21022753', '财务部', '21022727', '财务组', '宁波弘讯科技', 1, '大港'),
	(15, '21031509', '管理部', '21031507', '管理组', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig_detail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_purchdetail 结构
DROP TABLE IF EXISTS `bgu_purchdetail`;
CREATE TABLE IF NOT EXISTS `bgu_purchdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin NOT NULL DEFAULT '20201224',
  `SNNo` char(5) COLLATE utf8_bin NOT NULL DEFAULT '1',
  `Subject` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BudgetCID` char(10) COLLATE utf8_bin DEFAULT '1',
  `BudgetItem` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ItemNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Description` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Unit` char(20) COLLATE utf8_bin DEFAULT NULL,
  `UnitPrice` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Quantity` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Subtotal` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Delivery` date DEFAULT NULL,
  `Supplier` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Remain` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Underburget` char(20) COLLATE utf8_bin DEFAULT NULL,
  `AppendType` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Department` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  KEY `BillSN` (`BillNo`,`SNNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_purchdetail 的数据：~21 rows (大约)
/*!40000 ALTER TABLE `bgu_purchdetail` DISABLE KEYS */;
REPLACE INTO `bgu_purchdetail` (`DBID`, `BillNo`, `SNNo`, `Subject`, `BudgetCID`, `BudgetItem`, `ItemNo`, `Description`, `Unit`, `UnitPrice`, `Quantity`, `Subtotal`, `Delivery`, `Supplier`, `Remain`, `Underburget`, `AppendType`, `Department`) VALUES
	(403, '20210325152427', '1', '机物料消耗', 'B005', '生产用辅料', '123', '12', '12', '11', '2', '22', NULL, '', '100', '是', NULL, ''),
	(404, '20210325152427', '2', '研发投入', 'B003', '直接投入', '123', '12', '12', '12', '12', '144', NULL, '', '100', '是', NULL, ''),
	(405, '20210325153269', '1', '办公费', 'B104', 'MIS费用', '12', '12', '12', '12', '12', '144', NULL, '', '153000', '是', NULL, ''),
	(407, '20210325164487', '1', '办公费', 'B104', 'MIS费用', '123', '12', '12', '12', '12', '144', NULL, '', '153000', '否', NULL, ''),
	(408, '20210325164487', '2', '业务招待费', 'A015', '交际费', '22', '22', '22', '22', '88', '1936', NULL, '', '0', '是', NULL, ''),
	(409, '20210325164587', '1', '办公费', 'B104', 'MIS费用', '222', '22', '22', '88', '89', '7832', NULL, '', '153000', '是', NULL, ''),
	(410, '20210325164587', '2', '业务招待费', 'A015', '交际费', '88', '88', '88', '8', '40', '320', NULL, '', '0', '否', NULL, ''),
	(411, '20210325164981', '1', '办公费', 'A006', '商标费', '132', '12', '12', '12', '12', '144', NULL, '22', '0', '否', NULL, ''),
	(412, '20210326104953', '1', '办公费', 'A045', '办公费用', '椅子', 'A001', '1', '400', '2', '800', NULL, '', '6000', '是', NULL, ''),
	(413, '20210326104953', '2', '办公费', 'A025', '招聘费', '廣告', 'B001', '1', '200', '2', '400', NULL, '', '0', '否', NULL, ''),
	(414, '20210329084838', '1', '办公费', 'B104', 'MIS费用', '123', '12', '132', '123', '2222', '273306', NULL, '', '98336', '是', NULL, ''),
	(415, '20210329084972', '1', '办公费', 'B104', 'MIS费用', '123', '12', '132', '123', '2222', '273306', NULL, '', '98336', '是', NULL, ''),
	(416, '20210329085029', '1', '办公费', 'B104', 'MIS费用', '123', '12', '132', '123', '2222', '273306', NULL, '', '98336', '是', NULL, ''),
	(417, '20210329091003', '1', '办公费', 'B104', 'MIS费用', '12', '12', '12', '12', '222', '2664', NULL, '', '98336', '是', NULL, ''),
	(418, '20210329091332', '1', '办公费', 'B104', 'MIS费用', '12', '12', '123', '122', '22', '2684', NULL, '', '98336', '是', NULL, ''),
	(419, '20210329092255', '1', '办公费', 'A005', '网址费、网站建设', '132', '132', '123', '132', '123', '16236', NULL, '', '0', '否', NULL, ''),
	(420, '20210329092374', '1', '办公费', 'A009', 'VI费用', '1321231', '12', '32', '2131', '23', '49013', NULL, '', '0', '否', NULL, ''),
	(421, '20210329092374', '2', '福利费', 'A040', '尾牙费用', '132', '12312', '12', '12', '2', '24', NULL, '', '0', '否', NULL, ''),
	(422, '20210329092735', '2', '办公费', 'A006', '商标费', '213', '132', '132', '123', '22', '2706', NULL, '', '0', '否', NULL, ''),
	(423, '20210329092735', '1', '办公费', 'B104', 'MIS费用', '2112', '123', '1', '132', '123', '16236', NULL, '', '98336', '是', NULL, ''),
	(426, '20210329094310', '1', '业务招待费', 'A015', '交际费', '123', '132', '123', '12', '222', '2664', NULL, '', '203680', '是', NULL, ''),
	(427, '20210329095186', '1', '业务招待费', 'A015', '交际费', '12', '123', '123', '123', '222', '27306', NULL, '', '203680', '是', NULL, '');
/*!40000 ALTER TABLE `bgu_purchdetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_purchmain 结构
DROP TABLE IF EXISTS `bgu_purchmain`;
CREATE TABLE IF NOT EXISTS `bgu_purchmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Formkind` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetCID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BudgetItem` char(50) COLLATE utf8_bin DEFAULT NULL,
  `ListNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `ProjectNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ApplicNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `GroupName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TotalValue` char(50) COLLATE utf8_bin DEFAULT NULL,
  `Currency` char(5) COLLATE utf8_bin DEFAULT NULL,
  `Payment` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Explanation` char(200) COLLATE utf8_bin DEFAULT NULL,
  `BillStatus` char(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_purchmain 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `bgu_purchmain` DISABLE KEYS */;
REPLACE INTO `bgu_purchmain` (`DBID`, `BillNo`, `Formkind`, `Subject`, `BudgetCID`, `BudgetItem`, `ListNo`, `EntryDate`, `RequestDate`, `ProjectNo`, `ApplicNo`, `DeptName`, `GroupName`, `StaffID`, `StaffName`, `TotalValue`, `Currency`, `Payment`, `Explanation`, `BillStatus`) VALUES
	(326, '20210329084838', '采购单', '办公费', 'B104', 'MIS费用', 'L032938PL', '2021-03-29', '2021-03-29', 'A11321', 'L032938PA', '财务部', '财务组', '135', '林丹桂', '273306', 'RMB', '', '213', NULL),
	(327, '20210329084972', '采购单', '办公费', 'B104', 'MIS费用', 'L032972PL', '2021-03-29', '2021-03-29', 'A11321', 'L032972PA', '财务部', '财务组', '135', '林丹桂', '273306', 'RMB', '', '213', NULL),
	(328, '20210329085029', '采购单', '办公费', 'B104', 'MIS费用', 'L032929PL', '2021-03-29', '2021-03-29', 'A11321', 'L032929PA', '财务部', '财务组', '135', '林丹桂', '273306', 'RMB', '', '213', NULL),
	(329, '20210329091003', '采购单', '办公费', 'B104', 'MIS费用', 'L032903PL', '2021-03-29', '2021-03-29', '1321', 'L032903PA', '财务部', '财务组', '135', '林丹桂', '2664', 'RMB', '', '132112', NULL),
	(330, '20210329091332', '采购单', '办公费', 'B104', 'MIS费用', 'L032932PL', '2021-03-29', '2021-03-29', '', 'L032932PA', '财务部', '财务组', '135', '林丹桂', '2684', 'RMB', '', '2123', NULL),
	(331, '20210329092255', '采购单', '办公费', 'A005', '网址费、网站建设', 'L032955PL', '2021-03-29', '2021-03-29', 'A12313', 'L032955PA', '财务部', '财务组', '135', '林丹桂', '16236', 'RMB', '', '1231', NULL),
	(332, '20210329092374', '采购单', '办公费', 'A009', 'VI费用', 'L032974PL', '2021-03-29', '2021-03-29', '123', 'L032974PA', '财务部', '财务组', '135', '林丹桂', '49037', 'RMB', '', '132', NULL),
	(333, '20210329092735', '采购单', '办公费', 'B104', 'MIS费用', 'L032935PL', '2021-03-29', '2021-03-29', '1321', 'L032935PA', '财务部', '财务组', '135', '林丹桂', '18942', 'RMB', '', '321', NULL),
	(335, '20210329094310', '采购单', '业务招待费', 'A015', '交际费', 'L032910PL', '2021-03-29', '2021-03-29', '1321', 'L032910PA', '财务部', '财务组', '135', '林丹桂', '2664', 'RMB', '', '1231', NULL),
	(336, '20210329095186', '采购单', '业务招待费', 'A015', '交际费', 'L032986PL', '2021-03-29', '2021-03-29', '1231', 'L032986PA', '财务部', '财务组', '135', '林丹桂', '27306', 'RMB', '', '', NULL);
/*!40000 ALTER TABLE `bgu_purchmain` ENABLE KEYS */;

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
  `Temp` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BudgetItem`,`DeptName`,`BudYear`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_quota 的数据：~108 rows (大约)
/*!40000 ALTER TABLE `bgu_quota` DISABLE KEYS */;
REPLACE INTO `bgu_quota` (`DBID`, `Subject`, `BudgetCID`, `BudgetItem`, `DeptName`, `BudYear`, `AllowMoney`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `DesCript`, `Temp`) VALUES
	(1, '福利费', 'B002', '劳保用品', '软体部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(2, '差旅费', 'A002', '国内机票', '软体部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(3, '差旅费', 'A003', '国外机票', '软体部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(4, '差旅费', 'A004', '私车公用', '软体部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(5, '差旅费', 'A005', '租车费用', '软体部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(6, '办公费', 'A026', '签证费', '软体部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(7, '办公费', 'B206', '办公家具设备', '软体部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(8, '办公费', 'B104', 'MIS费用', '软体部', '2021', 153000, NULL, 153000, 'N', '0', NULL, NULL),
	(9, '运费', 'A035', '快递费', '软体部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(10, '运费', 'A036', '物流费', '软体部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(11, '职工教育经费', 'A044', '职工培训费', '软体部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(12, '租赁费', 'A012', '租赁费', '软体部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(13, '修缮费', 'A013', '修理费', '软体部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(14, '工具', 'A014', '工具费用', '软体部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(15, '业务招待费', 'A015', '交际费', '软体部', '2021', 204000, NULL, 204000, 'N', '0', NULL, NULL),
	(16, '办公费', 'A045', '办公费用', '软体部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(17, '研发投入', 'B003', '直接投入', '软体部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(18, '机物料消耗', 'B005', '生产用辅料', '软体部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(19, '福利费', 'B002', '劳保用品', '工程部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(20, '差旅费', 'A002', '国内机票', '工程部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(21, '差旅费', 'A003', '国外机票', '工程部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(22, '差旅费', 'A004', '私车公用', '工程部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(23, '差旅费', 'A005', '租车费用', '工程部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(24, '办公费', 'A026', '签证费', '工程部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(25, '办公费', 'B206', '办公家具设备', '工程部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(26, '办公费', 'B104', 'MIS费用', '工程部', '2021', 153000, NULL, 153000, 'N', '0', NULL, NULL),
	(27, '运费', 'A035', '快递费', '工程部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(28, '运费', 'A036', '物流费', '工程部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(29, '职工教育经费', 'A044', '职工培训费', '工程部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(30, '租赁费', 'A012', '租赁费', '工程部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(31, '修缮费', 'A013', '修理费', '工程部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(32, '工具', 'A014', '工具费用', '工程部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(33, '业务招待费', 'A015', '交际费', '工程部', '2021', 204000, NULL, 204000, 'N', '0', NULL, NULL),
	(34, '办公费', 'A045', '办公费用', '工程部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(35, '研发投入', 'B003', '直接投入', '工程部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(36, '机物料消耗', 'B005', '生产用辅料', '工程部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(37, '福利费', 'B002', '劳保用品', '营销部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(38, '差旅费', 'A002', '国内机票', '营销部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(39, '差旅费', 'A003', '国外机票', '营销部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(40, '差旅费', 'A004', '私车公用', '营销部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(41, '差旅费', 'A005', '租车费用', '营销部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(42, '办公费', 'A026', '签证费', '营销部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(43, '办公费', 'B206', '办公家具设备', '营销部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(44, '办公费', 'B104', 'MIS费用', '营销部', '2021', 153000, NULL, 153000, 'N', '0', NULL, NULL),
	(45, '运费', 'A035', '快递费', '营销部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(46, '运费', 'A036', '物流费', '营销部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(47, '职工教育经费', 'A044', '职工培训费', '营销部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(48, '租赁费', 'A012', '租赁费', '营销部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(49, '修缮费', 'A013', '修理费', '营销部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(50, '工具', 'A014', '工具费用', '营销部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(51, '业务招待费', 'A015', '交际费', '营销部', '2021', 204000, NULL, 204000, 'N', '0', NULL, NULL),
	(52, '办公费', 'A045', '办公费用', '营销部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(53, '研发投入', 'B003', '直接投入', '营销部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(54, '机物料消耗', 'B005', '生产用辅料', '营销部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(55, '福利费', 'B002', '劳保用品', '专案部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(56, '差旅费', 'A002', '国内机票', '专案部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(57, '差旅费', 'A003', '国外机票', '专案部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(58, '差旅费', 'A004', '私车公用', '专案部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(59, '差旅费', 'A005', '租车费用', '专案部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(60, '办公费', 'A026', '签证费', '专案部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(61, '办公费', 'B206', '办公家具设备', '专案部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(62, '办公费', 'B104', 'MIS费用', '专案部', '2021', 153000, NULL, 153000, 'N', '0', NULL, NULL),
	(63, '运费', 'A035', '快递费', '专案部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(64, '运费', 'A036', '物流费', '专案部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(65, '职工教育经费', 'A044', '职工培训费', '专案部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(66, '租赁费', 'A012', '租赁费', '专案部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(67, '修缮费', 'A013', '修理费', '专案部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(68, '工具', 'A014', '工具费用', '专案部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(69, '业务招待费', 'A015', '交际费', '专案部', '2021', 204000, NULL, 204000, 'N', '0', NULL, NULL),
	(70, '办公费', 'A045', '办公费用', '专案部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(71, '研发投入', 'B003', '直接投入', '专案部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(72, '机物料消耗', 'B005', '生产用辅料', '专案部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(73, '福利费', 'B002', '劳保用品', '管理部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(74, '差旅费', 'A002', '国内机票', '管理部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(75, '差旅费', 'A003', '国外机票', '管理部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(76, '差旅费', 'A004', '私车公用', '管理部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(77, '差旅费', 'A005', '租车费用', '管理部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(78, '办公费', 'A026', '签证费', '管理部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(79, '办公费', 'B206', '办公家具设备', '管理部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(80, '办公费', 'B104', 'MIS费用', '管理部', '2021', 153000, NULL, 153000, 'N', '0', NULL, NULL),
	(81, '运费', 'A035', '快递费', '管理部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(82, '运费', 'A036', '物流费', '管理部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(83, '职工教育经费', 'A044', '职工培训费', '管理部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(84, '租赁费', 'A012', '租赁费', '管理部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(85, '修缮费', 'A013', '修理费', '管理部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(86, '工具', 'A014', '工具费用', '管理部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(87, '业务招待费', 'A015', '交际费', '管理部', '2021', 204000, NULL, 204000, 'N', '0', NULL, NULL),
	(88, '办公费', 'A045', '办公费用', '管理部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(89, '研发投入', 'B003', '直接投入', '管理部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(90, '机物料消耗', 'B005', '生产用辅料', '管理部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(91, '福利费', 'B002', '劳保用品', '财务部', '2021', 20040, NULL, 20040, 'N', '0', NULL, NULL),
	(92, '差旅费', 'A002', '国内机票', '财务部', '2021', 14790, NULL, 14790, 'N', '0', NULL, NULL),
	(93, '差旅费', 'A003', '国外机票', '财务部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(94, '差旅费', 'A004', '私车公用', '财务部', '2021', 8030, NULL, 8030, 'N', '0', NULL, NULL),
	(95, '差旅费', 'A005', '租车费用', '财务部', '2021', 44002, NULL, 44002, 'N', '0', NULL, NULL),
	(96, '办公费', 'A026', '签证费', '财务部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(97, '办公费', 'B206', '办公家具设备', '财务部', '2021', 160208, NULL, 160208, 'N', '0', NULL, NULL),
	(98, '办公费', 'B104', 'MIS费用', '财务部', '2021', 153000, 54664, 98336, 'N', '14', NULL, NULL),
	(99, '运费', 'A035', '快递费', '财务部', '2021', 3164, NULL, 3164, 'N', '0', NULL, NULL),
	(100, '运费', 'A036', '物流费', '财务部', '2021', 48000, NULL, 48000, 'N', '0', NULL, NULL),
	(101, '职工教育经费', 'A044', '职工培训费', '财务部', '2021', 45380, NULL, 45380, 'N', '0', NULL, NULL),
	(102, '租赁费', 'A012', '租赁费', '财务部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(103, '修缮费', 'A013', '修理费', '财务部', '2021', 521420, NULL, 521420, 'N', '0', NULL, NULL),
	(104, '工具', 'A014', '工具费用', '财务部', '2021', 0, NULL, 0, 'N', '0', NULL, NULL),
	(105, '业务招待费', 'A015', '交际费', '财务部', '2021', 204000, 320, 203680, 'N', '2', NULL, NULL),
	(106, '办公费', 'A045', '办公费用', '财务部', '2021', 6000, NULL, 6000, 'N', '0', NULL, NULL),
	(107, '研发投入', 'B003', '直接投入', '财务部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich'),
	(108, '机物料消耗', 'B005', '生产用辅料', '财务部', '2021', 100, NULL, 100, 'N', '0', NULL, 'Rich');
/*!40000 ALTER TABLE `bgu_quota` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_quotadetail 结构
DROP TABLE IF EXISTS `bgu_quotadetail`;
CREATE TABLE IF NOT EXISTS `bgu_quotadetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetCID` char(20) COLLATE utf8_bin NOT NULL,
  `BudgetItem` char(50) COLLATE utf8_bin NOT NULL,
  `BudYear` char(10) COLLATE utf8_bin NOT NULL,
  `RequestDate` date NOT NULL,
  `DeptName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `DesCript` char(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_quotadetail 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `bgu_quotadetail` DISABLE KEYS */;
REPLACE INTO `bgu_quotadetail` (`DBID`, `Subject`, `BudgetCID`, `BudgetItem`, `BudYear`, `RequestDate`, `DeptName`, `BillNo`, `SNNO`, `TotalValue`, `DesCript`) VALUES
	(101, '运费', 'A044', '职工培训费', '2021', '2021-03-24', '财务部', '20210324091028', '', 1476, NULL),
	(108, '运费', 'A036', '物流费', '2021', '2021-03-24', '财务部', '20210324091028', '1', 176, NULL),
	(125, '办公费', 'B104', 'MIS费用', '2021', '2021-03-26', '财务部', '20210325164587', '11', 7832, NULL),
	(126, '业务招待费', 'A015', '交际费', '2021', '2021-03-26', '财务部', '20210325164587', '13', 0, NULL),
	(127, '办公费', 'B104', 'MIS费用', '2021', '2021-03-26', '财务部', '20210325164587', '13', 7832, NULL),
	(128, '业务招待费', 'A015', '交际费', '2021', '2021-03-26', '财务部', '20210325164587', '1', 320, NULL),
	(129, '办公费', 'B104', 'MIS费用', '2021', '2021-03-26', '财务部', '20210325164587', '13', 7832, NULL),
	(130, '业务招待费', 'A015', '交际费', '2021', '2021-03-26', '财务部', '20210325164587', '1', 320, NULL);
/*!40000 ALTER TABLE `bgu_quotadetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_rule 结构
DROP TABLE IF EXISTS `bgu_rule`;
CREATE TABLE IF NOT EXISTS `bgu_rule` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(30) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `GroupLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DeptLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CurStatus` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CurText` char(50) COLLATE utf8_bin DEFAULT '正常',
  `SendStatus` char(10) COLLATE utf8_bin DEFAULT '1',
  `SendText` char(50) COLLATE utf8_bin DEFAULT '1',
  `CurLevel` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CurWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CurName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CurJob` char(10) COLLATE utf8_bin DEFAULT NULL,
  `TermiLevel` char(2) COLLATE utf8_bin DEFAULT NULL,
  `Track` char(200) COLLATE utf8_bin DEFAULT '正常',
  `Level1` char(2) COLLATE utf8_bin DEFAULT NULL,
  `OppWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `OppName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `OppDate` date DEFAULT NULL,
  `Level2` char(2) COLLATE utf8_bin DEFAULT NULL,
  `MagWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `MagName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `MagDate` date DEFAULT NULL,
  `Level3` char(2) COLLATE utf8_bin DEFAULT NULL,
  `VipWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `VipName` char(20) COLLATE utf8_bin NOT NULL,
  `VipDate` date DEFAULT NULL,
  `Level4` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PurWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PurName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PurDate` date DEFAULT NULL,
  `Level5` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PexWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PexName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PexDate` date DEFAULT NULL,
  `Level6` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CfoWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CfoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CfoDate` date DEFAULT NULL,
  `Level7` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PsdWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PsdName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PsdDate` date DEFAULT NULL,
  `Level8` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CeoWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CeoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CeoDate` date DEFAULT NULL,
  `Level9` char(2) COLLATE utf8_bin DEFAULT NULL,
  `BodWorkId` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BodName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BodDate` date DEFAULT NULL,
  `Reason` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_rule 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `bgu_rule` DISABLE KEYS */;
REPLACE INTO `bgu_rule` (`DBID`, `BillNo`, `EntryDate`, `GroupLabel`, `DeptLabel`, `StaffID`, `StaffName`, `CurStatus`, `CurText`, `SendStatus`, `SendText`, `CurLevel`, `CurWorkId`, `CurName`, `CurJob`, `TermiLevel`, `Track`, `Level1`, `OppWorkId`, `OppName`, `OppDate`, `Level2`, `MagWorkId`, `MagName`, `MagDate`, `Level3`, `VipWorkId`, `VipName`, `VipDate`, `Level4`, `PurWorkId`, `PurName`, `PurDate`, `Level5`, `PexWorkId`, `PexName`, `PexDate`, `Level6`, `CfoWorkId`, `CfoName`, `CfoDate`, `Level7`, `PsdWorkId`, `PsdName`, `PsdDate`, `Level8`, `CeoWorkId`, `CeoName`, `CeoDate`, `Level9`, `BodWorkId`, `BodName`, `BodDate`, `Reason`) VALUES
	(657, '20210329085029', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'D', '送出', '3', '17051095060', '张亮', 'pur', '8', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', 'Y', '15058085471', '叶海萍', '2021-03-29', NULL, '17051095060', '张亮', NULL, NULL, '17051095060', '张亮', NULL, NULL, '15058085471', '叶海萍', NULL, NULL, '15025522222', '俞田龙', NULL, NULL, '15025522222', '熊明惠', NULL, NULL, '15025522222', '熊钰麟', NULL, NULL),
	(658, '20210329091003', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'K', '保存', '2', '15058085471', '叶海萍', 'vip', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', NULL, '15058085471', '叶海萍', NULL, NULL, '17051095060', '张亮', NULL, NULL, '17051095060', '张亮', NULL, NULL, '15058085471', '叶海萍', NULL, NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(659, '20210329091332', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'K', '保存', '2', '15058085471', '叶海萍', 'vip', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', NULL, '15058085471', '叶海萍', NULL, NULL, '17051095060', '张亮', NULL, NULL, '17051095060', '张亮', NULL, NULL, '15058085471', '叶海萍', NULL, NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(660, '20210329092255', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'K', '保存', '2', '15058085471', '叶海萍', 'vip', '4', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', NULL, '15058085471', '叶海萍', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '15058085471', '叶海萍', NULL, NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(661, '20210329092374', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'D', '送出', '4', '15025522222', '俞田龙', 'psd', '4', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', 'Y', '15058085471', '叶海萍', '2021-03-29', NULL, '', '', NULL, NULL, '', '', NULL, 'Y', '15058085471', '叶海萍', '2021-03-29', NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(662, '20210329092735', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'Q', '核准', 'D', '送出', '7', '15025522222', '俞田龙', 'ceo', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', 'Y', '15058085471', '叶海萍', '2021-03-29', 'Y', '17051095060', '张亮', '2021-03-29', 'Y', '17051095060', '张亮', '2021-03-29', 'Y', '15058085471', '叶海萍', '2021-03-29', 'Y', '15025522222', '俞田龙', '2021-03-29', NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(664, '20210329094310', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'D', '送出', '4', '15025522222', '俞田龙', 'psd', '4', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', 'Y', '15058085471', '叶海萍', '2021-03-29', NULL, '', '', NULL, NULL, '', '', NULL, 'Y', '15058085471', '叶海萍', '2021-03-29', NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(665, '20210329095186', '2021-03-29', '财务组', '财务部', '135', '林丹桂', 'P', '审批', 'K', '保存', '2', '15058085471', '叶海萍', 'vip', '4', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, '135', '林丹桂', '2021-03-29', NULL, '17051095060', '林丹桂', '2021-03-29', NULL, '15058085471', '叶海萍', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '15058085471', '叶海萍', NULL, NULL, '15025522222', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL);
/*!40000 ALTER TABLE `bgu_rule` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_rule_def 结构
DROP TABLE IF EXISTS `bgu_rule_def`;
CREATE TABLE IF NOT EXISTS `bgu_rule_def` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `RuleType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Track` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `OppWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `OppName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `MagWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `MagName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `VipWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `VipName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PurWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PurName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PexWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PexName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CfoWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CfoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PsdWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PsdName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CeoWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CeoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BodWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BodName` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`RuleType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_rule_def 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `bgu_rule_def` DISABLE KEYS */;
REPLACE INTO `bgu_rule_def` (`DBID`, `RuleType`, `GroupLabel`, `Track`, `OppWorkId`, `OppName`, `MagWorkId`, `MagName`, `VipWorkId`, `VipName`, `PurWorkId`, `PurName`, `PexWorkId`, `PexName`, `CfoWorkId`, `CfoName`, `PsdWorkId`, `PsdName`, `CeoWorkId`, `CeoName`, `BodWorkId`, `BodName`) VALUES
	(1, 'A', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(2, 'B', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '10033', '涂文娇', '10022', '谢丽君', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(3, 'C', 'MIS', '[{"Level1":"dpt","Level2":"vip"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '', '', '', '', '10088', '熊明惠', '10093', '熊钰麟');
/*!40000 ALTER TABLE `bgu_rule_def` ENABLE KEYS */;

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
/*!40000 ALTER TABLE `bgu_subject` DISABLE KEYS */;
REPLACE INTO `bgu_subject` (`DBID`, `RuleType`, `Subject`, `BudgetItem`, `BudgetCID`, `DesCript`, `DeptName`) VALUES
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
	(50, 'A', '办公费', '办公费用', 'A045', '翻译费、办公用品、纯净水费用、复印费用、电子平台交易手续费等其他办公费用', '各需求部门');
/*!40000 ALTER TABLE `bgu_subject` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_tripdetail 结构
DROP TABLE IF EXISTS `bgu_tripdetail`;
CREATE TABLE IF NOT EXISTS `bgu_tripdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin NOT NULL DEFAULT '20201224',
  `SNNo` char(5) COLLATE utf8_bin NOT NULL DEFAULT '1',
  `TrafficA` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TrafficB` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TrafficC` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TrafficD` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TrafficE` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TrafficF` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TicTotal` char(20) COLLATE utf8_bin DEFAULT NULL,
  `InputVAT` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TripDate` date DEFAULT NULL,
  `TripCust` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TripRept` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TripNote` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  KEY `BillSN` (`BillNo`,`SNNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_tripdetail 的数据：~14 rows (大约)
/*!40000 ALTER TABLE `bgu_tripdetail` DISABLE KEYS */;
REPLACE INTO `bgu_tripdetail` (`DBID`, `BillNo`, `SNNo`, `TrafficA`, `TrafficB`, `TrafficC`, `TrafficD`, `TrafficE`, `TrafficF`, `TicTotal`, `InputVAT`, `TripDate`, `TripCust`, `TripRept`, `TripNote`) VALUES
	(642, '20210310075710', '0', '123', '', '', '', '', '', '123', '', NULL, NULL, NULL, NULL),
	(643, '20210310075710', '14', '246', '', '', '', '', '', '246', '', NULL, NULL, NULL, NULL),
	(644, '20210310075710', '1', '123', '', '', '', '', '', '123', '', NULL, NULL, NULL, NULL),
	(645, '20210322133317', '0', '2122', '', '', '', '', '', '2122', '', NULL, NULL, NULL, NULL),
	(646, '20210322133317', '14', '2122', '', '', '', '', '', '2122', '', NULL, NULL, NULL, NULL),
	(652, '20210325082104', '1', '542', '2', '2', '', '', '', '546', '27.3', NULL, NULL, NULL, NULL),
	(653, '20210325082104', '14', '627', '57', '98', '', '', '', '782', '39.1', NULL, NULL, NULL, NULL),
	(654, '20210325082104', '0', '85', '55', '96', '', '', '', '236', '11.8', NULL, NULL, NULL, NULL),
	(655, '20210325075554', '0', '9', '', '', '', '', '', '9', '0.45', NULL, NULL, NULL, NULL),
	(656, '20210325075554', '1', '', '50', '', '', '', '', '50', '2.5', NULL, NULL, NULL, NULL),
	(657, '20210325075554', '2', '50', '200', '', '', '', '', '250', '12.5', NULL, NULL, NULL, NULL),
	(658, '20210325075554', '3', '138', '138', '', '', '', '', '276', '13.8', NULL, NULL, NULL, NULL),
	(659, '20210325075554', '15', '', '', '', '', '', '', NULL, NULL, '2021-03-25', '张SIR', '建造工程领域', ''),
	(660, '20210325075554', '14', '197', '388', '', '', '', '', '585', '29.25', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `bgu_tripdetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_tripmain 结构
DROP TABLE IF EXISTS `bgu_tripmain`;
CREATE TABLE IF NOT EXISTS `bgu_tripmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Formkind` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `ApplicNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Version` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BusiMan` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BusiArea` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `GroupName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TotalValue` char(10) COLLATE utf8_bin DEFAULT NULL,
  `LeaveDate` date DEFAULT NULL,
  `LeaveHour` char(10) COLLATE utf8_bin DEFAULT NULL,
  `LeaveMin` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BackDate` date DEFAULT NULL,
  `BackHour` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BackMin` char(10) COLLATE utf8_bin DEFAULT NULL,
  `LiveDateA` date DEFAULT NULL,
  `LiveDateB` date DEFAULT NULL,
  `LiveDateC` date DEFAULT NULL,
  `LiveDateD` date DEFAULT NULL,
  `LiveDateE` date DEFAULT NULL,
  `LiveDateF` date DEFAULT NULL,
  `Explanation` char(200) COLLATE utf8_bin DEFAULT NULL,
  `Overspend` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IsOver` char(5) COLLATE utf8_bin DEFAULT NULL,
  `HotelName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `HotelTel` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BillStatus` char(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_tripmain 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `bgu_tripmain` DISABLE KEYS */;
REPLACE INTO `bgu_tripmain` (`DBID`, `BillNo`, `Formkind`, `Subject`, `EntryDate`, `ApplicNo`, `Version`, `BusiMan`, `BusiArea`, `DeptName`, `GroupName`, `StaffID`, `StaffName`, `TotalValue`, `LeaveDate`, `LeaveHour`, `LeaveMin`, `BackDate`, `BackHour`, `BackMin`, `LiveDateA`, `LiveDateB`, `LiveDateC`, `LiveDateD`, `LiveDateE`, `LiveDateF`, `Explanation`, `Overspend`, `IsOver`, `HotelName`, `HotelTel`, `BillStatus`) VALUES
	(109, '20210310075710', '出差单', '差旅费', '2021-03-10', 'L031010TA', '3', '132132', '', '软体部', NULL, '53', '张光帷', NULL, NULL, '', '', NULL, '', '', '2021-03-10', NULL, NULL, NULL, NULL, NULL, '', '', '是', '', '', '1'),
	(110, '20210322133317', '出差单', '差旅费', '2021-03-22', 'L032217TA', '3', 'A12123', '1231', '财务部', NULL, '59', '叶海萍', NULL, '2021-03-13', '12', '12', NULL, '', '', '2021-03-23', NULL, NULL, NULL, NULL, NULL, '132132', '', '是', '', '', '1'),
	(112, '20210325082104', '出差单', '差旅费', '2021-03-25', 'L032504TA', '3', '文天', '衢州', '财务部', NULL, '135', '林丹桂', NULL, '2021-03-05', '7', '7', NULL, '', '', '2021-03-18', '2021-03-26', '2021-03-26', NULL, NULL, NULL, '', '', '是', '', '', '1'),
	(113, '20210325075554', '出差单', '差旅费', '2021-03-25', 'L032536TA', '3', '依玛士', '衢州', '财务部', NULL, '135', '林丹桂', NULL, '2021-03-26', '12', '12', NULL, '', '', '2021-03-26', '2021-03-26', NULL, NULL, NULL, NULL, '', '8500', '是', '宁波酒店', '15052025522', '1');
/*!40000 ALTER TABLE `bgu_tripmain` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
