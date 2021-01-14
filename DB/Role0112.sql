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

-- 导出  表 toolsweb.bgu_rule_def 结构
DROP TABLE IF EXISTS `bgu_rule_def`;
CREATE TABLE IF NOT EXISTS `bgu_rule_def` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `RuleType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Track` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `OppWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `OppName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DptWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DptName` char(20) COLLATE utf8_bin DEFAULT NULL,
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

-- 正在导出表  toolsweb.bgu_rule_def 的数据：~2 rows (大约)
DELETE FROM `bgu_rule_def`;
/*!40000 ALTER TABLE `bgu_rule_def` DISABLE KEYS */;
INSERT INTO `bgu_rule_def` (`DBID`, `RuleType`, `GroupLabel`, `Track`, `OppWorkId`, `OppName`, `DptWorkId`, `DptName`, `VipWorkId`, `VipName`, `PurWorkId`, `PurName`, `PexWorkId`, `PexName`, `CfoWorkId`, `CfoName`, `PsdWorkId`, `PsdName`, `CeoWorkId`, `CeoName`, `BodWorkId`, `BodName`) VALUES
	(1, 'B', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"cfo","Level4":"psd","Level5":"ceo","Level6":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '', '', '', '', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟'),
	(2, 'A', 'MIS', '[{"Level1":"dpt","Level2":"vip","Level3":"pur","Level4":"pex","Level5":"cfo","Level6":"psd","Level7":"ceo","Level8":"bod"}]', NULL, NULL, '10044', '张光帷', '10055', '周筱龙', '10033', '涂文娇', '10022', '谢丽君', '10066', '叶海萍', '10077', '俞田龙', '10088', '熊明惠', '10093', '熊钰麟');
/*!40000 ALTER TABLE `bgu_rule_def` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_staffs 结构
DROP TABLE IF EXISTS `bgu_staffs`;
CREATE TABLE IF NOT EXISTS `bgu_staffs` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `StaffID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffUser` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffLevel` char(20) COLLATE utf8_bin DEFAULT NULL,
  `GroupLabel` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DeptLabel` char(20) COLLATE utf8_bin DEFAULT NULL,
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
INSERT INTO `bgu_staffs` (`DBID`, `StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `GroupLabel`, `DeptLabel`, `StaffRole`, `UpAuditor`, `Status`, `StatusText`) VALUES
	(1, '10022', NULL, '曹峥', '', 'DSP', 'Eng', '', '许静静', 1, '正常'),
	(2, '10031', NULL, '蒋伟贞', '', 'HMI', 'Eng', '', '孙凌财', 1, '正常'),
	(3, '10039', NULL, '孙凌财', '2', 'HMI', 'Eng', '', NULL, 1, '正常'),
	(4, '10044', NULL, '李源', '2', 'HMI', 'Eng', '', NULL, 1, '正常'),
	(5, '10056', NULL, '朱宝安', '', 'HMI', 'Eng', '', '孙凌财', 1, '正常'),
	(7, '10089', NULL, '杨勇', '', 'DSP', 'Eng', '', '许静静', 1, '正常'),
	(8, '10120', NULL, '李斌', '', 'DSP', 'Eng', '', '许静静', 1, '正常'),
	(9, '10130', NULL, '张亮', '', 'MIS', 'Eng', '', NULL, 1, '正常'),
	(10, '10133', NULL, '许静静', '', 'DSP', 'Eng', '', '李斌', 1, '正常'),
	(11, '10327', NULL, '王光漫', '', '', 'Eng', '', NULL, 1, '正常'),
	(12, '10359', NULL, '周玲燕', '', '', 'Eng', '', NULL, 1, '正常'),
	(13, '10369', NULL, '唐奕磊', '', 'HMI', 'Eng', '', '朱宝安', 1, '正常'),
	(14, '10471', NULL, '刘梦', '', '', 'Eng', '', NULL, 1, '正常'),
	(15, '10483', NULL, '钟静伟', '', 'DSP', 'Eng', '', '李源', 1, '正常'),
	(16, '10503', NULL, '梅迪凡', '', 'HMI', 'Eng', '', '唐奕磊', 1, '正常'),
	(18, '30041', NULL, '王涛', '', 'HMI', 'Eng', '', '朱宝安', 1, '正常'),
	(19, '30002', NULL, '王莉', '', 'HMI', 'Eng', '', '蒋伟贞', 1, '正常'),
	(20, '30003', NULL, '周永汉', '', 'HMI', 'Eng', '', '傅霞银', 1, '正常'),
	(21, '30005', NULL, '陈波', '', 'DSP', 'Eng', '', '李源', 1, '正常'),
	(22, '30006', NULL, '王浩宇', '', 'DSP', 'Eng', '', '杨勇', 1, '正常'),
	(23, '30007', NULL, '傅霞银', '', 'HMI', 'Eng', '', '蒋伟贞', 1, '正常'),
	(24, '30008', NULL, '张磊', '', 'DSP', 'Eng', '', '许静静', 1, '正常'),
	(25, '30017', NULL, '沈航凯', '', 'DSP', 'Eng', '', '杨勇', 1, '正常'),
	(26, '30010', NULL, '虞晔文', '', 'HMI', 'Eng', '', '梅迪凡', 1, '正常'),
	(27, '30012', NULL, '俞洋', '', 'HMI', 'Eng', '', '梅迪凡', 1, '正常'),
	(28, '30013', NULL, '裘凯迪', '', 'HMI', 'Eng', '', '朱宝安', 1, '正常'),
	(29, '30014', NULL, '王锋', '', 'HMI', 'Eng', '', '唐奕磊', 1, '正常'),
	(30, '30015', NULL, '张凯', '', 'DSP', 'Eng', '', '李斌', 1, '正常'),
	(31, '30020', NULL, '陈浩天', '', 'DSP', 'Eng', '', '张磊', 1, '正常'),
	(32, '30026', NULL, '施宇城', '', '', 'Eng', '', NULL, 1, '正常'),
	(33, '30028', NULL, '林盛', '', '', 'Eng', '', NULL, 1, '正常'),
	(34, '30029', NULL, '谢丽君', '', '', 'Eng', '', NULL, 1, '正常'),
	(35, '30032', NULL, '熊奇龙', '', 'MIS', 'Eng', '', '孙凌财', 1, '正常'),
	(36, '30033', NULL, '张铖', '', 'HMI', 'Eng', '', '朱宝安', 1, '正常'),
	(37, '30034', NULL, '单霖霖', '', '', 'Eng', '', '杨勇', 1, '正常'),
	(38, '30035', NULL, '孙维泽', '', 'DSP', 'Eng', '', '杨勇', 1, '正常'),
	(39, '30036', NULL, '方林杰', '', 'HMI', 'Eng', '', '唐奕磊', 1, '正常'),
	(41, '30038', NULL, '柳张成', '', 'DSP', 'Eng', '', '杨勇', 1, '正常'),
	(42, '30042', NULL, '谷永亮', '', 'DSP', 'Eng', '', '张磊', 1, '正常'),
	(43, '30043', NULL, '周颖', '', 'HMI', 'Eng', '', '王莉', 1, '正常'),
	(44, '30044', NULL, '赵韦', '', 'HMI', 'Eng', '', '王莉', 1, '正常'),
	(45, '30031', NULL, '杨金鑫', '', 'DSP', 'Eng', '', '许静静', 1, '正常'),
	(51, '10099', 'wqy', '王启源', '', 'MIS', 'Eng', '', NULL, 1, '正常'),
	(52, '10084', 'led', '劳亚丹', '', '', 'Eng', '', NULL, 1, '正常'),
	(53, '50004', 'zgw', '张光帷', '2', 'MIS', 'Eng', '', NULL, 1, '正常'),
	(54, '10001', 'zxl', '周筱龙', '3', 'DSP', 'Eng', '', NULL, 1, '正常'),
	(57, '50026', 'apple', '曹欣卉', '4', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(58, '10035', 'lsw', '乐晓雯', '5', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(59, '10023', 'yhp', '叶海萍', '6', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(60, '10080', 'ytl', '俞田龙', '7', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(61, '10090', 'xmh', '熊明惠', '8', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(62, '10093', 'xyl', '熊钰麟', '9', 'NB1', 'Eng', NULL, NULL, 1, '正常'),
	(69, '30045', NULL, '谢涛', '', 'DSP', 'Eng', '', '杨金鑫', 1, '正常'),
	(78, '30046', NULL, '戎桂', NULL, NULL, 'Eng', '', '唐奕磊', 1, '正常');
/*!40000 ALTER TABLE `bgu_staffs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
