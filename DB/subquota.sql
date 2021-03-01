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
	(34, '福利费', 'A001', '劳保用品', '工程部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(35, '差旅费', 'A002', '国内机票', '工程部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(36, '差旅费', 'A003', '国外机票', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(37, '差旅费', 'A004', '私车公用', '工程部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(38, '差旅费', 'A005', '租车费用', '工程部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(39, '办公费', 'A006', '签证费/人身保险费', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(40, '办公费', 'B006', '办公家具设备', '工程部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(41, '办公费', 'B004', 'MIS费用', '工程部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(42, '运费', 'A035', '快递费', '工程部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(43, '运费', 'A036', '物流费', '工程部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(44, '职工教育经费', 'A011', '职工教育经费', '工程部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(45, '租赁费', 'A012', '租赁费', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(46, '修缮费', 'A013', '修理费', '工程部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(47, '工具', 'A014', '工具费用', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(48, '通讯费', 'A015', '手机费', '工程部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(49, '办公费', 'B001', '办公费用', '工程部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(50, '福利费', 'A001', '劳保用品', '软体部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(51, '差旅费', 'A002', '国内机票', '软体部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(52, '差旅费', 'A003', '国外机票', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(53, '差旅费', 'A004', '私车公用', '软体部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(54, '差旅费', 'A005', '租车费用', '软体部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(55, '办公费', 'A006', '签证费/人身保险费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(56, '办公费', 'B006', '办公家具设备', '软体部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(57, '办公费', 'B004', 'MIS费用', '软体部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(58, '运费', 'A035', '快递费', '软体部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(59, '运费', 'A036', '物流费', '软体部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(60, '职工教育经费', 'A011', '职工教育经费', '软体部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(61, '租赁费', 'A012', '租赁费', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(62, '修缮费', 'A013', '修理费', '软体部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(63, '工具', 'A014', '工具费用', '软体部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(64, '通讯费', 'A015', '手机费', '软体部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(65, '办公费', 'B001', '办公费用', '软体部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(66, '福利费', 'A001', '劳保用品', '营销部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(67, '差旅费', 'A002', '国内机票', '营销部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(68, '差旅费', 'A003', '国外机票', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(69, '差旅费', 'A004', '私车公用', '营销部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(70, '差旅费', 'A005', '租车费用', '营销部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(71, '办公费', 'A006', '签证费/人身保险费', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(72, '办公费', 'B006', '办公家具设备', '营销部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(73, '办公费', 'B004', 'MIS费用', '营销部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(74, '运费', 'A035', '快递费', '营销部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(75, '运费', 'A036', '物流费', '营销部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(76, '职工教育经费', 'A011', '职工教育经费', '营销部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(77, '租赁费', 'A012', '租赁费', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(78, '修缮费', 'A013', '修理费', '营销部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(79, '工具', 'A014', '工具费用', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(80, '通讯费', 'A015', '手机费', '营销部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(81, '办公费', 'B001', '办公费用', '营销部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(82, '福利费', 'A001', '劳保用品', '专案部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(83, '差旅费', 'A002', '国内机票', '专案部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(84, '差旅费', 'A003', '国外机票', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(85, '差旅费', 'A004', '私车公用', '专案部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(86, '差旅费', 'A005', '租车费用', '专案部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(87, '办公费', 'A006', '签证费/人身保险费', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(88, '办公费', 'B006', '办公家具设备', '专案部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(89, '办公费', 'B004', 'MIS费用', '专案部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(90, '运费', 'A035', '快递费', '专案部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(91, '运费', 'A036', '物流费', '专案部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(92, '职工教育经费', 'A011', '职工教育经费', '专案部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(93, '租赁费', 'A012', '租赁费', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(94, '修缮费', 'A013', '修理费', '专案部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(95, '工具', 'A014', '工具费用', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(96, '通讯费', 'A015', '手机费', '专案部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(97, '办公费', 'B001', '办公费用', '专案部', '2021', 6000, NULL, NULL, 'N', '0', NULL);
/*!40000 ALTER TABLE `bgu_quota` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
