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
  `StaffId` char(10) COLLATE utf8_bin NOT NULL,
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

-- 正在导出表  toolsweb.bgu_credit 的数据：~3 rows (大约)
DELETE FROM `bgu_credit`;
/*!40000 ALTER TABLE `bgu_credit` DISABLE KEYS */;
INSERT INTO `bgu_credit` (`DBID`, `StaffId`, `StaffName`, `DeptName`, `BudYear`, `UpperLimit`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `Descript`) VALUES
	(1, '10001', '周筱龙', NULL, '2021', 50000, NULL, NULL, 'N', NULL, NULL),
	(2, '20001', '刘宜芳', NULL, '2021', 40000, NULL, NULL, 'N', NULL, NULL),
	(3, '50027', '曹橘子', '软体部', '2021', 10000, 95891, 0, 'Y', '2', NULL);
/*!40000 ALTER TABLE `bgu_credit` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_creditdetail 结构
DROP TABLE IF EXISTS `bgu_creditdetail`;
CREATE TABLE IF NOT EXISTS `bgu_creditdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `BillNo` char(50) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` int(11) DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `DesCript` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_creditdetail 的数据：~4 rows (大约)
DELETE FROM `bgu_creditdetail`;
/*!40000 ALTER TABLE `bgu_creditdetail` DISABLE KEYS */;
INSERT INTO `bgu_creditdetail` (`DBID`, `StaffId`, `StaffName`, `BudYear`, `RequestDate`, `BillNo`, `SNNO`, `TotalValue`, `DesCript`) VALUES
	(1, '10001', '周筱龙', '2021', '2021-01-16', '123123132', 1, 15002, NULL),
	(2, '10001', '周筱龙', '2021', '2021-01-04', '1231231', 1, 9000, NULL),
	(74, '50027', '曹橘子', '2021', '2021-02-18', '20210218130271', 1, 95847, NULL),
	(75, '50027', '曹橘子', '2021', '2021-02-18', '20210218130448', 2, 44, NULL);
/*!40000 ALTER TABLE `bgu_creditdetail` ENABLE KEYS */;

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

-- 正在导出表  toolsweb.bgu_orig 的数据：~4 rows (大约)
DELETE FROM `bgu_orig`;
/*!40000 ALTER TABLE `bgu_orig` DISABLE KEYS */;
INSERT INTO `bgu_orig` (`DBID`, `DeptID`, `DeptName`, `Loacation`, `Status`, `Descript`) VALUES
	(11, '21012266', '软体部', '宁波弘讯科技', 1, '大港'),
	(12, '21012369', '工程部', '宁波弘讯科技', 1, '大港'),
	(15, '21012598', '营销部', '宁波弘讯科技', 1, '大港'),
	(20, '21011828', '专案部', '宁波弘讯科技', 1, '大港');
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

-- 正在导出表  toolsweb.bgu_orig_detail 的数据：~8 rows (大约)
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
	(13, '21012266', '软体部', '21020219', '内务组', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig_detail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_purchdetail 结构
DROP TABLE IF EXISTS `bgu_purchdetail`;
CREATE TABLE IF NOT EXISTS `bgu_purchdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin NOT NULL DEFAULT '20201224',
  `SNNo` char(5) COLLATE utf8_bin NOT NULL DEFAULT '1',
  `BudgetCID` char(10) COLLATE utf8_bin DEFAULT '1',
  `BudgetItem` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ItemNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Description` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Unit` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Remain` char(20) COLLATE utf8_bin DEFAULT NULL,
  `UnitPrice` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Quantity` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Subtotal` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Delivery` date DEFAULT NULL,
  `Supplier` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Underburget` char(20) COLLATE utf8_bin DEFAULT NULL,
  `AppendType` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Department` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  KEY `BillSN` (`BillNo`,`SNNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_purchdetail 的数据：~0 rows (大约)
DELETE FROM `bgu_purchdetail`;
/*!40000 ALTER TABLE `bgu_purchdetail` DISABLE KEYS */;
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

-- 正在导出表  toolsweb.bgu_purchmain 的数据：~0 rows (大约)
DELETE FROM `bgu_purchmain`;
/*!40000 ALTER TABLE `bgu_purchmain` DISABLE KEYS */;
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
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BudgetItem`,`DeptName`,`BudYear`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_quota 的数据：~16 rows (大约)
DELETE FROM `bgu_quota`;
/*!40000 ALTER TABLE `bgu_quota` DISABLE KEYS */;
INSERT INTO `bgu_quota` (`DBID`, `Subject`, `BudgetCID`, `BudgetItem`, `DeptName`, `BudYear`, `AllowMoney`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `DesCript`) VALUES
	(18, '福利费', 'A001', '劳保用品', '软体部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(19, '差旅费', 'A002', '国内机票', '软体部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(20, '差旅费', 'A003', '国外机票', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(21, '差旅费', 'A004', '私车公用', '软体部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(22, '差旅费', 'A005', '租车费用', '软体部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(23, '办公费', 'A006', '签证费/人身保险费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(24, '办公费', 'B006', '办公家具设备', '软体部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(25, '办公费', 'B004', 'MIS费用', '软体部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(26, '运费', 'A035', '快递费', '软体部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(27, '运费', 'A036', '物流费', '软体部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(28, '职工教育经费', 'A011', '职工教育经费', '软体部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(29, '租赁费', 'A012', '租赁费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(30, '修缮费', 'A013', '修理费', '软体部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(31, '工具', 'A014', '工具费用', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(32, '通讯费', 'A015', '手机费', '软体部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(33, '办公费', 'B001', '办公费用', '软体部', '2021', 6000, NULL, NULL, 'N', '0', NULL);
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
  `SNNO` int(11) DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `DesCript` char(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_quotadetail 的数据：~0 rows (大约)
DELETE FROM `bgu_quotadetail`;
/*!40000 ALTER TABLE `bgu_quotadetail` DISABLE KEYS */;
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
  `CurWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CurName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CurJob` char(10) COLLATE utf8_bin DEFAULT NULL,
  `TermiLevel` char(2) COLLATE utf8_bin DEFAULT NULL,
  `Track` char(200) COLLATE utf8_bin DEFAULT '正常',
  `Level1` char(2) COLLATE utf8_bin DEFAULT NULL,
  `OppWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `OppName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `OppDate` date DEFAULT NULL,
  `Level2` char(2) COLLATE utf8_bin DEFAULT NULL,
  `MagWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `MagName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `MagDate` date DEFAULT NULL,
  `Level3` char(2) COLLATE utf8_bin DEFAULT NULL,
  `VipWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `VipName` char(20) COLLATE utf8_bin NOT NULL,
  `VipDate` date DEFAULT NULL,
  `Level4` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PurWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PurName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PurDate` date DEFAULT NULL,
  `Level5` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PexWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PexName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PexDate` date DEFAULT NULL,
  `Level6` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CfoWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CfoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CfoDate` date DEFAULT NULL,
  `Level7` char(2) COLLATE utf8_bin DEFAULT NULL,
  `PsdWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `PsdName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `PsdDate` date DEFAULT NULL,
  `Level8` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CeoWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CeoName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CeoDate` date DEFAULT NULL,
  `Level9` char(2) COLLATE utf8_bin DEFAULT NULL,
  `BodWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BodName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BodDate` date DEFAULT NULL,
  `reason` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_rule 的数据：~0 rows (大约)
DELETE FROM `bgu_rule`;
/*!40000 ALTER TABLE `bgu_rule` DISABLE KEYS */;
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
DELETE FROM `bgu_rule_def`;
/*!40000 ALTER TABLE `bgu_rule_def` DISABLE KEYS */;
INSERT INTO `bgu_rule_def` (`DBID`, `RuleType`, `GroupLabel`, `Track`, `OppWorkId`, `OppName`, `MagWorkId`, `MagName`, `VipWorkId`, `VipName`, `PurWorkId`, `PurName`, `PexWorkId`, `PexName`, `CfoWorkId`, `CfoName`, `PsdWorkId`, `PsdName`, `CeoWorkId`, `CeoName`, `BodWorkId`, `BodName`) VALUES
	(1, 'A', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(2, 'B', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '10033', '涂文娇', '10022', '谢丽君', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(3, 'C', 'MIS', '[{"Level1":"dpt","Level2":"vip"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '', '', '', '', '10088', '熊明惠', '10093', '熊钰麟');
/*!40000 ALTER TABLE `bgu_rule_def` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_staffs 结构
DROP TABLE IF EXISTS `bgu_staffs`;
CREATE TABLE IF NOT EXISTS `bgu_staffs` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffUser` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffLevel` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptLabel` char(200) COLLATE utf8_bin DEFAULT NULL,
  `DeptDefault` char(200) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(200) COLLATE utf8_bin DEFAULT NULL,
  `GroupDefault` char(200) COLLATE utf8_bin DEFAULT NULL,
  `StaffRole` char(50) COLLATE utf8_bin DEFAULT NULL,
  `UpAuditor` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Status` int(1) DEFAULT 1,
  `StatusText` char(4) COLLATE utf8_bin DEFAULT '正常',
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`StaffID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_staffs 的数据：~54 rows (大约)
DELETE FROM `bgu_staffs`;
/*!40000 ALTER TABLE `bgu_staffs` DISABLE KEYS */;
INSERT INTO `bgu_staffs` (`DBID`, `StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `DeptLabel`, `DeptDefault`, `GroupLabel`, `GroupDefault`, `StaffRole`, `UpAuditor`, `Status`, `StatusText`) VALUES
	(1, '10022', NULL, '曹峥', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(2, '10031', NULL, '蒋伟贞', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(3, '10039', NULL, '孙凌财', '2', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(4, '10044', NULL, '李源', '2', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(5, '10056', NULL, '朱宝安', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(7, '10089', NULL, '杨勇', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(8, '10120', NULL, '李斌', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(9, '10130', 'zl1', '张亮', '4', '软体部', NULL, 'MIS', NULL, '资讯承办人', '', 0, '正常'),
	(10, '10133', NULL, '许静静', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(11, '10327', 'wgm', '王光漫', '4', '软体部', NULL, 'MIS', NULL, '行政承办人', '', 1, '正常'),
	(12, '10359', 'zly', '周玲燕', '1', '管理部', NULL, '内务组', NULL, '', '', 1, '正常'),
	(13, '10369', NULL, '唐奕磊', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(14, '10471', NULL, '刘梦', '', 'Eng', NULL, '', NULL, '', '', 0, '正常'),
	(15, '10483', NULL, '钟静伟', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(16, '10503', NULL, '梅迪凡', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(18, '30041', NULL, '王涛', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(19, '30002', NULL, '王莉', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(20, '30003', NULL, '周永汉', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(21, '30005', NULL, '陈波', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(22, '30006', NULL, '王浩宇', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(23, '30007', NULL, '傅霞银', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(24, '30008', NULL, '张磊', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(25, '30017', NULL, '沈航凯', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(26, '30010', NULL, '虞晔文', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(27, '30012', NULL, '俞洋', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(28, '30013', NULL, '裘凯迪', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(29, '30014', NULL, '王锋', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(30, '30015', NULL, '张凯', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(31, '30020', NULL, '陈浩天', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(32, '30026', 'syc', '施宇城', '', 'Eng', NULL, '', NULL, '', '', 1, '正常'),
	(33, '30028', 'ls', '林盛', '3', '业务单位', NULL, '', NULL, '', '', 1, '正常'),
	(34, '30029', 'salina', '谢丽君', '1', '工程单位', NULL, '业务课', NULL, '', '', 1, '正常'),
	(35, '30032', 'Admin', '熊奇龙', '', '软体部', NULL, 'MIS', NULL, '', '', 1, '正常'),
	(36, '30033', NULL, '张铖', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(37, '30034', NULL, '单霖霖', '', 'Eng', NULL, '', NULL, '', '', 0, '正常'),
	(38, '30035', NULL, '孙维泽', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(39, '30036', NULL, '方林杰', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(41, '30038', NULL, '柳张成', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(42, '30042', NULL, '谷永亮', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(43, '30043', NULL, '周颖', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(44, '30044', NULL, '赵韦', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(51, '10099', 'wqy', '王启源', '1', '软体部,工程部', NULL, 'MIS', NULL, '', '', 1, '正常'),
	(52, '10084', 'led', '劳亚丹', '1', '软体部', NULL, '内务组', NULL, '', '', 1, '正常'),
	(53, '50004', 'zgw', '张光帷', '2', '软体部', NULL, 'MIS', NULL, '部门主管', '', 1, '正常'),
	(54, '10001', 'zxl', '周筱龙', '3', '营销部,专案部', '软体部工程单位', '', NULL, '副总', '', 1, '正常'),
	(57, '50026', 'apple', '曹欣卉', '4', '软体部', NULL, 'NB1', NULL, '采购承办人', '', 1, '正常'),
	(58, '10035', 'lsw', '乐晓雯', '5', '软体部,工程部', NULL, 'NB1', NULL, '采购主管', '', 1, '正常'),
	(59, '10023', 'yhp', '叶海萍', '6', '软体部,工程部', NULL, 'NB1', NULL, '财务总监', '', 1, '正常'),
	(60, '10080', 'ytl', '俞田龙', '7', '软体部,工程部', NULL, 'NB1', NULL, '总经理', '', 1, '正常'),
	(61, '10090', 'xmh', '熊明惠', '8', '软体部,工程部', NULL, 'NB1', NULL, 'CEO', '', 1, '正常'),
	(62, '10093', 'xyl', '熊钰麟', '9', '软体部,工程部', NULL, 'NB1', NULL, '董事长', '', 1, '正常'),
	(69, '30045', NULL, '谢涛', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(78, '30046', NULL, '戎桂', NULL, 'Eng', NULL, NULL, NULL, '', '', 0, '正常'),
	(79, '50027', 'orange', '曹橘子', '3', '软体部,工程部', NULL, 'NB1', NULL, '采购承办人', '', 1, '正常');
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

-- 正在导出表  toolsweb.bgu_tripdetail 的数据：~0 rows (大约)
DELETE FROM `bgu_tripdetail`;
/*!40000 ALTER TABLE `bgu_tripdetail` DISABLE KEYS */;
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

-- 正在导出表  toolsweb.bgu_tripmain 的数据：~0 rows (大约)
DELETE FROM `bgu_tripmain`;
/*!40000 ALTER TABLE `bgu_tripmain` DISABLE KEYS */;
/*!40000 ALTER TABLE `bgu_tripmain` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
