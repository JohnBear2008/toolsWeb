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

-- 正在导出表  toolsweb.bgu_orig 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `bgu_orig` DISABLE KEYS */;
REPLACE INTO `bgu_orig` (`DBID`, `DeptID`, `DeptName`, `Loacation`, `Status`, `Descript`) VALUES
	(11, '21012266', '软体部', '宁波弘讯科技', 1, '大港'),
	(12, '21012369', '工程部', '宁波弘讯科技', 1, '大港'),
	(15, '21012598', '营销部', '宁波弘讯科技', 1, '大港'),
	(20, '21011828', '专案部', '宁波弘讯科技', 1, '大港'),
	(21, '21022753', '财务部', '宁波弘讯科技', 1, '大港'),
	(22, '21031509', '管理部', '宁波弘讯科技', 1, '大港');
/*!40000 ALTER TABLE `bgu_orig` ENABLE KEYS */;

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
  `StaffRole` char(20) COLLATE utf8_bin DEFAULT '文员',
  `UpAuditor` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Mobiles` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Status` int(1) DEFAULT 0,
  `StatusText` char(4) COLLATE utf8_bin DEFAULT '正常',
  `LastModify` char(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `StaffID` (`StaffID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_staffs 的数据：~42 rows (大约)
/*!40000 ALTER TABLE `bgu_staffs` DISABLE KEYS */;
REPLACE INTO `bgu_staffs` (`DBID`, `StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `DeptLabel`, `DeptDefault`, `GroupLabel`, `GroupDefault`, `StaffRole`, `UpAuditor`, `Mobiles`, `Status`, `StatusText`, `LastModify`) VALUES
	(4, '10044', '李源', '李源', '2', '软体部', NULL, 'HMI', NULL, '部门主管', '', '17051095060', 1, '正常', NULL),
	(12, '10359', '周玲燕', '周玲燕', '1', '营销部', NULL, '内务组', NULL, '文员', '', '17051095060', 0, '正常', NULL),
	(32, '30026', '施宇城', '施宇城', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '17051095060', 0, '正常', NULL),
	(34, '30029', '谢丽君', '谢丽君', '1', '工程部', NULL, '业务课', NULL, '文员', '', '17051095060', 0, '正常', NULL),
	(35, '30032', 'Admin', '熊奇龙', '1', '软体部', NULL, 'MIS', NULL, '文员', '', '17051095060', 0, '正常', NULL),
	(51, '10099', '王启源', '王启源', '1', '软体部', NULL, 'MIS', NULL, '文员', '', '15058034628', 0, '正常', NULL),
	(52, '10084', '劳亚丹', '劳亚丹', '1', '工程部', NULL, '内务组', NULL, '文员', '', '17051095060', 0, '正常', NULL),
	(54, '10001', '周筱龙', '周筱龙', '3', '专案部', '软体部工程单位', '', NULL, '副总', '', '17051099520', 1, '正常', NULL),
	(57, '50026', '曹欣卉', '曹欣卉', '4', '软体部,工程部', '软体部,工程部', '软体部', NULL, '采购承办人', '', '17051096666', 1, '正常', NULL),
	(59, '10623', '叶海萍', '叶海萍', '6', '财务部,软体部,工程部', NULL, '财务组', NULL, '财务总监', '', '15058085471', 1, '正常', NULL),
	(79, '50027', '曹先生', '曹先生', '3', '软体部,工程部', NULL, 'NB1', NULL, '副总', '', '17051033333', 1, '正常', NULL),
	(82, '10963', '林丹桂', '林丹桂', '2', '财务部', NULL, '财务组', NULL, '部门主管', '', '17051095060', 1, '正常', NULL),
	(114, '10323', '叶海萍', '叶海萍', '1', '财务部', '财务部', '财务组', '财务组', '文员', NULL, '15058085471', 0, '正常', NULL),
	(115, '50028', '曹先生', '曹先生', '1', '软体部', '软体部', 'MIS', 'MIS', '文员', NULL, '17051999999', 0, '正常', NULL),
	(118, '50004', '张光帷', '张光帷', '2', '软体部', '软体部', 'MIS', 'MIS', '部门主管', NULL, '15058524782', 1, '正常', NULL),
	(119, '50104', '张光帷', '张光帷', '1', '软体部', '软体部', 'MIS', 'MIS', '文员', NULL, '15058524782', 0, '正常', NULL),
	(142, '10230', '张亮', '张亮', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '17051095060', 0, '正常', NULL),
	(144, '10698', '林盛', '林盛', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15888548743', 0, '正常', NULL),
	(146, '10023', '叶海萍', '叶海萍', '3', '财务部', '财务部', '财务组', '财务组', '副总', NULL, '15058085471', 1, '正常', NULL),
	(147, '10130', '张亮', '张亮', '4', '软体部,工程部,营销部,专案部,财务部', '软体部,工程部,营销部,专案部,财务部', '', '', '资讯承办人', NULL, '17051095060', 1, '正常', NULL),
	(204, '10327', '王光漫', '王光漫', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15025522222', 0, '正常', NULL),
	(227, '10964', '林丹桂', '林丹桂', '1', '财务部', '财务部', '财务组', '财务组', '文员', NULL, '13032568888', 0, '正常', '张光帷'),
	(229, '13338', '陆峰玲', '陆峰玲', '1', '管理部', '管理部', '管理组', '管理组', '文员', NULL, '15025522222', 0, '正常', '张光帷'),
	(232, '14338', '林琳', '林琳', '1', '管理部', '管理部', '管理组', '管理组', '文员', NULL, '15025522222', 0, '正常', '张光帷'),
	(234, '133385', '陆峰玲', '陆峰玲', '5', '财务部', '财务部', '财务组,管理组', '财务组,管理组', '采购主管', NULL, '15025522222', 1, '正常', '张光帷'),
	(237, '1333840', '陆峰玲', '陆峰玲', '4', '财务部', '财务部', '财务组,管理组', '财务组,管理组', '采购承办人', NULL, '15025522222', 1, '正常', '张光帷'),
	(238, '1333842', '陆峰玲', '陆峰玲', '4', '财务部', '财务部', '财务组,管理组', '财务组,管理组', '行政承办人', NULL, '15025522222', 1, '正常', '张光帷'),
	(239, '1333841', '陆峰玲', '陆峰玲', '4', '财务部', '财务部', '财务组,管理组', '财务组,管理组', '资讯承办人', NULL, '15025522222', 1, '正常', '张光帷'),
	(240, '10025', '高副总', '高副总', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15025522222', 0, '正常', NULL),
	(241, '1433840', '林琳', '林琳', '4', '管理部', '管理部', '管理组', '管理组', '采购承办人', NULL, '15025522222', 1, '正常', '王启源'),
	(242, '1433841', '林琳', '林琳', '4', '管理部', '管理部', '管理组', '管理组', '资讯承办人', NULL, '15025522222', 1, '正常', '王启源'),
	(243, '1433842', '林琳', '林琳', '4', '管理部', '管理部', '管理组', '管理组', '行政承办人', NULL, '15025522222', 1, '正常', '王启源'),
	(244, '133382', '陆峰玲', '陆峰玲', '2', '管理部', '管理部', '管理组', '管理组', '部门主管', NULL, '15025522222', 1, '正常', '陆峰玲'),
	(245, '133333', '陆峰玲', '陆峰玲', '3', '管理部', '管理部', '管理组', '管理组', '副总', NULL, '15025522222', 1, '正常', '陆峰玲'),
	(246, '103236', '叶海萍', '叶海萍', '6', '软体部,工程部,财务部,管理部', '软体部,工程部,财务部,管理部', '财务组', '财务组', '财务总监', NULL, '15058085471', 1, '正常', '陆峰玲'),
	(247, '10080', '俞田龙', '俞田龙', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15025522222', 0, '正常', NULL),
	(248, '100807', '俞田龙', '俞田龙', '7', '软体部,工程部,营销部,专案部,财务部,管理部', '软体部,工程部,营销部,专案部,财务部,管理部', '管理组', '管理组', '总经理', NULL, '15025522222', 1, '正常', '陆峰玲'),
	(249, '10093', '熊钰麟', '熊钰麟', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15025522222', 0, '正常', '陆峰玲'),
	(250, '10090', '熊明惠', '熊明惠', NULL, NULL, NULL, NULL, NULL, '文员', NULL, '15025522222', 0, '正常', NULL),
	(251, '100908', '熊明惠', '熊明惠', '8', '软体部,工程部,营销部,专案部,财务部,管理部', '软体部,工程部,营销部,专案部,财务部,管理部', '管理组', '管理组', 'CEO', NULL, '15025522222', 1, '正常', '陆峰玲'),
	(252, '100939', '熊钰麟', '熊钰麟', '9', '软体部,工程部,营销部,专案部,财务部,管理部', '软体部,工程部,营销部,专案部,财务部,管理部', 'NB1', 'NB1', '董事长', NULL, '15025522222', 1, '正常', '陆峰玲'),
	(253, '143385', '林琳', '林琳', '5', '管理部', '管理部', '', '', '采购主管', NULL, '15025522222', 1, '正常', '陆峰玲');
/*!40000 ALTER TABLE `bgu_staffs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
