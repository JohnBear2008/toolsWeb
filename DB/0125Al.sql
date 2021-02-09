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
  `StaffId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `RuleType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `OfficeJob` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `UpperLimit` int(11) DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`StaffId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_credit 的数据：~2 rows (大约)
DELETE FROM `bgu_credit`;
/*!40000 ALTER TABLE `bgu_credit` DISABLE KEYS */;
INSERT INTO `bgu_credit` (`DBID`, `StaffId`, `StaffName`, `RuleType`, `GroupLabel`, `OfficeJob`, `BudgetYear`, `UpperLimit`) VALUES
	(1, '10001', '周筱龙', 'A', 'MGR', 'VP', '2021', 50000),
	(2, '20001', '刘宜芳', 'A', 'MGR', 'VP', '2021', 40000);
/*!40000 ALTER TABLE `bgu_credit` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_credit_detail 结构
DROP TABLE IF EXISTS `bgu_credit_detail`;
CREATE TABLE IF NOT EXISTS `bgu_credit_detail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudgetYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `UseAmount` int(11) DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_credit_detail 的数据：~4 rows (大约)
DELETE FROM `bgu_credit_detail`;
/*!40000 ALTER TABLE `bgu_credit_detail` DISABLE KEYS */;
INSERT INTO `bgu_credit_detail` (`DBID`, `StaffId`, `StaffName`, `BudgetYear`, `RequestDate`, `UseAmount`, `Accumulate`) VALUES
	(1, '10001', '周筱龙', '2021', '2021-01-16', 15002, 24002),
	(2, '10001', '周筱龙', '2021', '2021-01-04', 9000, 9000),
	(3, '20001', '刘宜芳', '2021', '2021-01-16', 12462, 12462),
	(4, '20001', '刘宜芳', '2020', '2021-01-16', 8000, 8000);
/*!40000 ALTER TABLE `bgu_credit_detail` ENABLE KEYS */;

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

-- 正在导出表  toolsweb.bgu_orig_detail 的数据：~6 rows (大约)
DELETE FROM `bgu_orig_detail`;
/*!40000 ALTER TABLE `bgu_orig_detail` DISABLE KEYS */;
INSERT INTO `bgu_orig_detail` (`DBID`, `DeptID`, `DeptName`, `GroupID`, `GroupName`, `Loacation`, `Status`, `Descript`) VALUES
	(5, '21012598', '营销部', '21010555', '内修组', '宁波弘讯科技', 1, '大港'),
	(6, '21012369', '工程部', '21011933', '应用组', '宁波弘讯科技', 1, '大港'),
	(7, '21012266', '软体部', '21011644', 'MIS', '宁波弘讯科技', 1, '大港'),
	(8, '21012266', '软体部', '21011655', '品管组', '宁波弘讯科技', 1, '大港'),
	(9, '21011828', '专案部', '21011839', 'Sandal专案组', '宁波弘讯科技', 1, '大港'),
	(10, '21012369', '工程部', '21011955', '产品技术组', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig_detail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_purchdetail 结构
DROP TABLE IF EXISTS `bgu_purchdetail`;
CREATE TABLE IF NOT EXISTS `bgu_purchdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin NOT NULL DEFAULT '20201224',
  `SNNo` char(5) COLLATE utf8_bin NOT NULL DEFAULT '1',
  `BudgetItem` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ItemNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Description` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Unit` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Remain` char(20) COLLATE utf8_bin DEFAULT NULL,
  `UnitPrice` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Quantity` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Subtotal` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Delivery` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Supplier` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Underburget` char(20) COLLATE utf8_bin DEFAULT NULL,
  `AppendType` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Department` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  KEY `BillSN` (`BillNo`,`SNNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_purchdetail 的数据：~13 rows (大约)
DELETE FROM `bgu_purchdetail`;
/*!40000 ALTER TABLE `bgu_purchdetail` DISABLE KEYS */;
INSERT INTO `bgu_purchdetail` (`DBID`, `BillNo`, `SNNo`, `BudgetItem`, `ItemNo`, `Description`, `Unit`, `Remain`, `UnitPrice`, `Quantity`, `Subtotal`, `Delivery`, `Supplier`, `Underburget`, `AppendType`, `Department`) VALUES
	(82, '20210113083767', '2', NULL, '12', '223', '12', '212', '25', '53', '1325', '2021-01-07', '12', '121', '12', '22'),
	(83, '20210113083767', '3', NULL, '1256', '12', '2', '21', '123', '213', '26199', '2021-01-29', '122', '2', '12', '22'),
	(84, '20210113083767', '1', 'A010##运输工具', '123', '123', '12', '23', '12', '1231', '14772', '2021-01-07', '123', '12', '12', '22'),
	(85, '20210113083767', '4', NULL, '32', '12', '23', '12', '21', '88', '2583', '2021-01-07', '121', '1', '12', '22'),
	(86, '20210113083767', '5', NULL, '231', '123', '2', '12', '85', '5', '4420', '2021-01-06', '12', '12', '12', '33'),
	(91, '20210113100461', '1', 'B002##审计费', '123', '12', '12', '2', '255', '254', '64770', '2021-01-07', '123', '12', '新增', '12'),
	(92, '20210113132594', '1', 'A003##董事会费股东会费', '12', '12', '12', '12', '22', '58', '1276', '2021-01-06', '', '', '', ''),
	(93, '20210113134717', '1', 'A005##查新费用', '12', '查新费', '12', '12', '2855', '2', '5710', '2021-01-07', '12', '12', '12', '12'),
	(94, '20210114103743', '2', NULL, '213', '123', '12', '2', '522', '23', '12006', '', '123', '否', '换新', '123'),
	(95, '20210114103743', '1', 'A004##体系建设维护费用', '123', '123', '12', '22', '252', '2', '504', '2020-12-31', '123', '否', '新增', '123'),
	(97, '20210115145973', '1', 'A004##体系建设维护费用', 'A12', '222', '20', '15', '150', '24', '3600', '2021-01-20', 'A', '是', '换新', 'MIS'),
	(100, '20210115154011', '1', 'A008##办公设备', '版', '111', '20', '3', '319', '20', '6380', '2021-01-22', '', '是', '换新', 'mis'),
	(101, '20210115154011', '2', NULL, 'D', '123', '6', '4', '269', '35', '9415', '', '', '是', '新增', '');
/*!40000 ALTER TABLE `bgu_purchdetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_purchmain 结构
DROP TABLE IF EXISTS `bgu_purchmain`;
CREATE TABLE IF NOT EXISTS `bgu_purchmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ListNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `ProjectNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ApplicNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(20) COLLATE utf8_bin DEFAULT NULL,
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

-- 正在导出表  toolsweb.bgu_purchmain 的数据：~7 rows (大约)
DELETE FROM `bgu_purchmain`;
/*!40000 ALTER TABLE `bgu_purchmain` DISABLE KEYS */;
INSERT INTO `bgu_purchmain` (`DBID`, `BillNo`, `Subject`, `ListNo`, `EntryDate`, `RequestDate`, `ProjectNo`, `ApplicNo`, `DeptName`, `StaffID`, `StaffName`, `TotalValue`, `Currency`, `Payment`, `Explanation`, `BillStatus`) VALUES
	(60, '20210113083767', '采购申请单', '123', '2021-01-13', '2021-01-22', '121', '123', '', '53', '张光帷', '49299', '321', '123', '', NULL),
	(65, '20210113100461', '采购申请单', '1212', '2021-01-13', '2021-01-15', '132123', '123123', '12312', '53', '张光帷', '64770', '12', '12123', '12313123', NULL),
	(66, '20210113132594', '采购申请单', '1321', '2021-01-13', '2021-01-13', 'A123', '12', '123', '53', '张光帷', '1276', '4213', '123', '', NULL),
	(67, '20210113134717', '采购申请单', '22', '2021-01-13', '2021-01-13', 'A1231', '12', '12', '53', '张光帷', '5710', '12', '12', '', NULL),
	(68, '20210114103743', '采购申请单', '123', '2021-01-14', '2021-01-14', 'f123123', '123', '123', '53', '张光帷', '12510', 'RMB', '', '', NULL),
	(70, '20210115145973', '采购申请单', 'A222', '2021-01-15', '2021-01-15', 'A123', 'A123', 'D123', '1', '熊奇龙', '3600', 'RMB', 'AIR', '海天19吋', NULL),
	(72, '20210115154011', '采购申请单', 'A11', '2021-01-15', '2021-01-14', 'A11', '333', 'AA', '1', '熊奇龙', '15795', 'RMB', 'AIR', '或AI', NULL);
/*!40000 ALTER TABLE `bgu_purchmain` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_rule 结构
DROP TABLE IF EXISTS `bgu_rule`;
CREATE TABLE IF NOT EXISTS `bgu_rule` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(30) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `GroupLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `CurStatus` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CurText` char(50) COLLATE utf8_bin DEFAULT '正常',
  `SendStatus` char(10) COLLATE utf8_bin DEFAULT '1',
  `SendText` char(50) COLLATE utf8_bin DEFAULT '1',
  `CurLevel` char(2) COLLATE utf8_bin DEFAULT NULL,
  `CurWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `CurName` char(20) COLLATE utf8_bin DEFAULT NULL,
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

-- 正在导出表  toolsweb.bgu_rule 的数据：~9 rows (大约)
DELETE FROM `bgu_rule`;
/*!40000 ALTER TABLE `bgu_rule` DISABLE KEYS */;
INSERT INTO `bgu_rule` (`DBID`, `BillNo`, `EntryDate`, `GroupLabel`, `StaffID`, `StaffName`, `CurStatus`, `CurText`, `SendStatus`, `SendText`, `CurLevel`, `CurWorkId`, `CurName`, `TermiLevel`, `Track`, `Level1`, `OppWorkId`, `OppName`, `OppDate`, `Level2`, `MagWorkId`, `MagName`, `MagDate`, `Level3`, `VipWorkId`, `VipName`, `VipDate`, `Level4`, `PurWorkId`, `PurName`, `PurDate`, `Level5`, `PexWorkId`, `PexName`, `PexDate`, `Level6`, `CfoWorkId`, `CfoName`, `CfoDate`, `Level7`, `PsdWorkId`, `PsdName`, `PsdDate`, `Level8`, `CeoWorkId`, `CeoName`, `CeoDate`, `Level9`, `BodWorkId`, `BodName`, `BodDate`, `reason`) VALUES
	(367, '20210113083767', '2021-01-13', 'MIS', '53', '张光帷', 'P', '审批', 'D', '送出', '1', '50004', '张光帷', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '53', '张光帷', '2021-01-13', NULL, '50004', '张光帷', NULL, NULL, '10001', '周筱龙', NULL, NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(368, '20210113100461', '2021-01-13', 'MIS', '53', '张光帷', 'R', '退回', '', '送出', '1', '50004', '张光帷', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, '53', '张光帷', '2021-01-13', 'N', '50004', '张光帷', '2021-01-13', NULL, '10001', '周筱龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '10090', '熊明惠', NULL, NULL, '10093', '熊钰麟', NULL, NULL),
	(369, '20210113132594', '2021-01-13', 'MIS', '53', '张光帷', 'P', '审批', 'D', '送出', '1', '50004', '张光帷', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '53', '张光帷', '2021-01-13', NULL, '50004', '张光帷', NULL, NULL, '10001', '周筱龙', NULL, NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(370, '20210113134717', '2021-01-13', 'MIS', '53', '张光帷', 'P', '审批', 'D', '送出', '3', '50026', '曹欣卉', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '53', '张光帷', '2021-01-13', 'Y', '50004', '张光帷', '2021-01-25', 'Y', '10001', '周筱龙', '2021-01-25', NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(371, '20210114103743', '2021-01-14', 'MIS', '53', '张光帷', 'P', '审批', 'K', '保存', '1', '50004', '张光帷', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '53', '张光帷', '2021-01-14', NULL, '50004', '张光帷', NULL, NULL, '10001', '周筱龙', NULL, NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(372, '20210115145973', '2021-01-15', 'MIS', '1', '熊奇龙', 'P', '审批', 'D', '送出', '2', '10001', '周筱龙', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '1', '熊奇龙', '2021-01-15', 'Y', '50004', '张光帷', '2021-01-15', NULL, '10001', '周筱龙', NULL, NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(373, '20210115154011', '2021-01-15', 'MIS', '1', '熊奇龙', 'P', '审批', 'D', '送出', '2', '10001', '周筱龙', '6', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, '1', '熊奇龙', '2021-01-15', 'Y', '50004', '张光帷', '2021-01-15', NULL, '10001', '周筱龙', NULL, NULL, '50026', '曹欣卉', NULL, NULL, '10035', '乐晓雯', NULL, NULL, '10023', '叶海萍', NULL, NULL, '10080', '俞田龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(375, '20210123094544', '2021-01-23', 'MIS', '53', '张光帷', 'P', '审批', 'K', '保存', '1', '50004', '张光帷', '2', '[{"Level1":"dpt","Level2":"vip"}]', NULL, '53', '张光帷', '2021-01-23', NULL, '50004', '张光帷', NULL, NULL, '10001', '周筱龙', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL),
	(376, '20210125083379', '2021-01-25', 'MIS', '53', '张光帷', 'Q', '核准', 'D', '送出', '3', '', '', '2', '[{"Level1":"dpt","Level2":"vip"}]', NULL, '53', '张光帷', '2021-01-25', 'Y', '50004', '张光帷', '2021-01-25', 'Y', '10001', '周筱龙', '2021-01-25', NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL, '', '', NULL, NULL);
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
	(1, 'B', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(2, 'A', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '10033', '涂文娇', '10022', '谢丽君', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
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
	(9, '10130', NULL, '张亮', '', 'Eng', NULL, 'MIS', NULL, '', '', 0, '正常'),
	(10, '10133', NULL, '许静静', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(11, '10327', 'wgm', '王光漫', '4', 'Eng', NULL, '品管组', NULL, '', '', 1, '正常'),
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
	(34, '30029', 'salina', '谢丽君', '1', '工程单位', NULL, '内务组', NULL, '', '', 1, '正常'),
	(35, '30032', 'Admin', '熊奇龙', '', '软体部', NULL, 'MIS', NULL, '', '', 1, '正常'),
	(36, '30033', NULL, '张铖', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(37, '30034', NULL, '单霖霖', '', 'Eng', NULL, '', NULL, '', '', 0, '正常'),
	(38, '30035', NULL, '孙维泽', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(39, '30036', NULL, '方林杰', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(41, '30038', NULL, '柳张成', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(42, '30042', NULL, '谷永亮', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(43, '30043', NULL, '周颖', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(44, '30044', NULL, '赵韦', '', 'Eng', NULL, 'HMI', NULL, '', '', 0, '正常'),
	(51, '10099', 'wqy', '王启源', '', '软体部', NULL, 'MIS', NULL, '', '', 1, '正常'),
	(52, '10084', 'led', '劳亚丹', '', 'Eng', NULL, '', NULL, '', '', 1, '正常'),
	(53, '50004', 'zgw', '张光帷', '2', '软体部', NULL, 'MIS', NULL, '部门主管', '', 1, '正常'),
	(54, '10001', 'zxl', '周筱龙', '3', '软体部工程单位', NULL, 'DSP', NULL, '副总', '', 1, '正常'),
	(57, '50026', 'apple', '曹欣卉', '4', '软体部', NULL, 'NB1', NULL, '采购承办人', '', 1, '正常'),
	(58, '10035', 'lsw', '乐晓雯', '5', '软体部工程单位', NULL, 'NB1', NULL, '采购主管', '', 1, '正常'),
	(59, '10023', 'yhp', '叶海萍', '6', '软体部工程单位', NULL, 'NB1', NULL, '财务总监', '', 1, '正常'),
	(60, '10080', 'ytl', '俞田龙', '7', '软体部工程单位', NULL, 'NB1', NULL, '总经理', '', 1, '正常'),
	(61, '10090', 'xmh', '熊明惠', '8', '软体部工程单位', NULL, 'NB1', NULL, 'CEO', '', 1, '正常'),
	(62, '10093', 'xyl', '熊钰麟', '9', '软体部工程单位', NULL, 'NB1', NULL, '董事长', '', 1, '正常'),
	(69, '30045', NULL, '谢涛', '', 'Eng', NULL, 'DSP', NULL, '', '', 0, '正常'),
	(78, '30046', NULL, '戎桂', NULL, 'Eng', NULL, NULL, NULL, '', '', 0, '正常'),
	(79, '50027', 'orange', '曹橘子', '4', '工程单位', NULL, 'NB1', NULL, '采购承办人', '', 1, '正常');
/*!40000 ALTER TABLE `bgu_staffs` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_subject 结构
DROP TABLE IF EXISTS `bgu_subject`;
CREATE TABLE IF NOT EXISTS `bgu_subject` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `RuleType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ItemClass` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ItemCID` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DesCript` char(200) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`ItemCID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_subject 的数据：~56 rows (大约)
DELETE FROM `bgu_subject`;
/*!40000 ALTER TABLE `bgu_subject` DISABLE KEYS */;
INSERT INTO `bgu_subject` (`DBID`, `RuleType`, `Subject`, `ItemClass`, `ItemCID`, `DesCript`, `DeptName`) VALUES
	(180, 'A', '福利费', '劳保用品', 'A001', '手套/防尘衣/钢头鞋/胶鞋/口罩/工作服', '行政'),
	(181, 'A', '协会会费', '协会会费', 'A002', '各协会会员会费', '行政'),
	(182, 'A', '董事会费', '董事会费股东会费', 'A003', '独立董事津贴，。', '财务、行政'),
	(183, 'A', '咨询及审计费', '体系建设维护费用', 'A004', 'ISO相关费用', '行政'),
	(184, 'A', '研发投入', '查新费用', 'A005', '科技项目查新费用', '行政'),
	(185, 'A', '研发投入', '直接投入', 'A006', '新机种研发（面膜打样费）、PM工具升级，研发使用外购材料', '工程部'),
	(186, 'A', '固定资产', '研发设备', 'A007', '工程部申请采购研发设备', '资材'),
	(187, 'A', '固定资产', '办公设备', 'A008', '', '资材'),
	(188, 'A', '固定资产', '生产设备', 'A009', '生产部申请采购研发设备', '资材'),
	(189, 'A', '固定资产', '运输工具', 'A010', '汽车', '行政'),
	(190, 'A', '固定资产', '其他辅助设备', 'A011', '其他辅助设备', '资材'),
	(191, 'A', '在建工程', '厂房前期工程', 'A012', '厂房基建支出', '行政'),
	(192, 'A', '在建工程', '待安装设备', 'A013', '新厂房电梯、中央空调、生产设备等需安装调试设备', '行政'),
	(193, 'A', '其他', '其他-其他', 'A014', '其他', '行政'),
	(194, 'A', '差旅费', '租车费用', 'A015', '使用公司指定的租车服务', '行政'),
	(195, 'A', '办公费', '签证费', 'A016', '境外执行公务需办理的签证费和保险费用', '行政'),
	(196, 'A', '办公费', '办公家具设备（价值小于5000）', 'A017', '除电脑外，单位价值5000元以下的家具和办公设备（打印机、扫描仪等）', '资材'),
	(197, 'A', '运费', '快递费', 'A018', '使用快递公司寄件费用', '行政，各办事处由客服部请款'),
	(198, 'A', '运费', '物流费', 'A019', '使用物流公司寄件费用', '行政，各办事处由客服部请款'),
	(199, 'A', '职工教育经费', '职工培训费', 'A020', '员工各项外训和内训费用', '行政'),
	(200, 'A', '租赁费', '租赁费用', 'A021', '公司对外租赁办公或其他用房费用，包括租赁房租、物业费、电梯费、水电费、电话费、取暖费、网络费等', '房租-行政，其他-客服部'),
	(201, 'A', '修缮费', '设备维修', 'A022', '生产、办公、研发设备维修和养护费用', '生产设备-行政 其他-需求部门'),
	(202, 'A', '修缮费', '建筑修缮', 'A023', '厂区维护和建筑修理修缮', '行政'),
	(203, 'A', '工具', '工具费用', 'A024', '生产和维修用的各种工具和检测仪器', '资材'),
	(204, 'A', '办公费', 'MIS费用', 'A025', '包括电脑、笔记本、网络安全防护系统、监控设备、门禁等公司网络、信息安全费用支出', '行政'),
	(205, 'A', '福利费', '食堂其他费用', 'A026', '食堂修理，器具购置等其他费用', '行政'),
	(206, 'A', '福利费', '宿舍费用', 'A027', '与宿舍相关费用，包括从住宿员工扣回的水电费用', '行政'),
	(207, 'A', '福利费', '旅游', 'A028', '公司统一安排员工旅游费用', '行政'),
	(208, 'A', '福利费', '尾牙费用', 'A029', '年末尾牙费用', '承办部门'),
	(209, 'A', '办公费', '招聘费', 'A030', '通过各种途径招聘人事费用', '行政'),
	(210, 'A', '办公费', '绿化养护保安费用', 'A031', '厂区绿化养护支出，养狗费用支出', '行政'),
	(211, 'A', '办公费', '名片印制', 'A032', '名片印制费用', '行政'),
	(212, 'A', '办公费', '书报杂志', 'A033', '订购各种书报期刊杂志费用', '行政'),
	(213, 'A', '办公费', 'VI费用', 'A034', '公司品牌形象设计费用', '行政'),
	(214, 'A', '办公费', '环境检测费', 'A035', '废气排污费用，危化物回收费，垃圾清运，活性炭购置等费用', '行政'),
	(215, 'A', '办公费', '专利费', 'A036', '境内外申报各项专利费用', '行政'),
	(216, 'A', '办公费', '商标费', 'A037', '境内外申报商标费用', '行政'),
	(217, 'A', '办公费', '网址费、网站建设', 'A038', '通用网址/无线网址年费/新申请网址费用', '行政'),
	(218, 'A', '通讯费', '联通网络费', 'A039', '联通网络费', '行政'),
	(219, 'A', '机物料消耗', '生产用辅料', 'A040', '生产用辅料：纸盒、胶带、保护剂、气泡袋、锡膏、酒精、二硫化钼、橡皮筋、自封袋', '各需求部门'),
	(220, 'A', '汽车费用', '汽车保险费', 'A041', '汽车保险费用', '行政'),
	(221, 'A', '汽车费用', '汽车维修保养', 'A042', '企业维修、保养、年检费用', '行政'),
	(222, 'A', '汽车费用', '汽车用油费', 'A043', '汽车加油费用', '行政'),
	(223, 'A', '汽车费用', '车船使用税', 'A044', '车船使用税', '行政'),
	(224, 'A', '公益支出', '公益支出', 'A045', '通过公益性社会团体或者县级以上人民政府及其部门对外的捐赠支出', '行政'),
	(225, 'B', '会务费', '会务费', 'B001', '营业部或工程部召开会议所发生的费用，包括租用会议场所费用、会议资料费、交通费、茶水费、餐费、住宿费等（除董事会费）', '需求部门'),
	(226, 'B', '咨询及审计费', '审计费', 'B002', '各中介机构审计费用', '需求部门'),
	(227, 'B', '广告费', '广告费', 'B003', '通过各种媒体宣传等方式对公司的产品或者形象做广告宣传。', '需求部门'),
	(228, 'B', '展览费', '展览费', 'B004', '各展览展位费、展台搭建费、服装、宣传用品、参与人员住宿、餐费、交通费等于展会直接相关费用', '需求部门'),
	(229, 'B', '出口报关费用', '出口报关费', 'B005', '出口报关费用', '需求部门'),
	(230, 'B', '研发投入', '技术服务费', 'B006', '研发相关技术服务费', '需求部门'),
	(231, 'B', '研发投入', '技术服务费', 'B007', NULL, NULL),
	(232, 'B', '业务招待费', '交际费', 'B008', '客户、供应商餐费', '需求部门'),
	(233, 'B', '检测费', '仪器检测费', 'B009', '仪器设备检测费用', '各需求部门'),
	(234, 'B', '办公费', '办公杂费', 'B010', '翻译费、办公用品、纯净水费用、复印费用、电子平台交易手续费等其他办公费用', '各需求部门'),
	(235, 'B', '福利费', '其他', 'B011', '年终各部门聚餐等其他费用', '各需求部门');
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

-- 正在导出表  toolsweb.bgu_tripdetail 的数据：~11 rows (大约)
DELETE FROM `bgu_tripdetail`;
/*!40000 ALTER TABLE `bgu_tripdetail` DISABLE KEYS */;
INSERT INTO `bgu_tripdetail` (`DBID`, `BillNo`, `SNNo`, `TrafficA`, `TrafficB`, `TrafficC`, `TrafficD`, `TrafficE`, `TrafficF`, `TicTotal`, `InputVAT`, `TripDate`, `TripCust`, `TripRept`, `TripNote`) VALUES
	(488, '20210113134717', '0', '55', '53', '12', '12', '2323', '333', '1231123', '12', '2021-01-20', '123', '123', '1212'),
	(489, '20210113134717', '1', '552', '213', '123', '212', '555', '3323', '85', '54', '2021-01-20', '055', '987', '123'),
	(490, '20210113134717', '15', '55', '325', '123', '212', '555', '3323', '85', '54', '2021-01-20', '海天', '费用报销管理', '海天3354会议'),
	(491, '20210113134717', '16', '56', '21', '123', '212', '123132', '3323', '85', '54', '2021-01-20', '海雄', '工具开发', '工具开发2021'),
	(492, '20210123094544', '14', '492', '369', '', '', '', '', '861', '', NULL, NULL, NULL, NULL),
	(493, '20210123094544', '0', '123', '123', '', '', '', '', '246', '', NULL, NULL, NULL, NULL),
	(494, '20210123094544', '15', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-07', '132', '123', ''),
	(495, '20210125083379', '14', '3000', '3044', '', '', '', '', '6044', '', NULL, NULL, NULL, NULL),
	(496, '20210125083379', '0', '1000', '1522', '', '', '', '', '2522', '', NULL, NULL, NULL, NULL),
	(497, '20210125083379', '15', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-06', '张帆', '产品生命周期管理系统', '1/25');
/*!40000 ALTER TABLE `bgu_tripdetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_tripmain 结构
DROP TABLE IF EXISTS `bgu_tripmain`;
CREATE TABLE IF NOT EXISTS `bgu_tripmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ApplicNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Version` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BusiMan` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BusiArea` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(20) COLLATE utf8_bin DEFAULT NULL,
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
  `EntryDate` date DEFAULT NULL,
  `BillStatus` char(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_tripmain 的数据：~3 rows (大约)
DELETE FROM `bgu_tripmain`;
/*!40000 ALTER TABLE `bgu_tripmain` DISABLE KEYS */;
INSERT INTO `bgu_tripmain` (`DBID`, `BillNo`, `ApplicNo`, `Version`, `BusiMan`, `BusiArea`, `DeptName`, `StaffID`, `StaffName`, `TotalValue`, `LeaveDate`, `LeaveHour`, `LeaveMin`, `BackDate`, `BackHour`, `BackMin`, `LiveDateA`, `LiveDateB`, `LiveDateC`, `LiveDateD`, `LiveDateE`, `LiveDateF`, `Explanation`, `Overspend`, `IsOver`, `HotelName`, `HotelTel`, `EntryDate`, `BillStatus`) VALUES
	(67, '20210113134717', '12', '1', '王森', '衝州', '客服部', '12', '12', NULL, '2021-01-20', '12', '30', '2021-01-30', '21', '00', '2021-01-20', '2021-01-20', '2021-01-22', '2021-01-25', '2021-01-25', '2021-01-27', '12132', '2569', 'Y', '宁波酒店', '150582966566', '2021-01-20', '1'),
	(68, '20210123094544', 'A132', '3', '王建', '衝州', NULL, '53', '张光帷', NULL, '2021-01-07', '', '', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '是', '', '', '2021-01-23', '1'),
	(69, '20210125083379', 'A1321', NULL, '陈波西', '台湾', NULL, '53', '张光帷', NULL, '2020-12-31', '15', '30', '2021-01-28', '16', '30', '2021-01-27', '2021-01-28', NULL, NULL, NULL, NULL, '', '500', '是', '', '', '2021-01-25', '1');
/*!40000 ALTER TABLE `bgu_tripmain` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
