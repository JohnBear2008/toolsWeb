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
/*!40000 ALTER TABLE `bgu_quota` DISABLE KEYS */;
REPLACE INTO `bgu_quota` (`DBID`, `Subject`, `BudgetCID`, `BudgetItem`, `DeptName`, `BudYear`, `AllowMoney`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `DesCript`) VALUES
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
	(33, '办公费', 'B201', '办公费用', '软体部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(98, '福利费', 'B002', '劳保用品', '工程部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(99, '差旅费', 'A002', '国内机票', '工程部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(100, '差旅费', 'A003', '国外机票', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(101, '差旅费', 'A004', '私车公用', '工程部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(102, '差旅费', 'A005', '租车费用', '工程部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(103, '办公费', 'A006', '签证费/人身保险费', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(104, '办公费', 'B206', '办公家具设备', '工程部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(105, '办公费', 'B104', 'MIS费用', '工程部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(106, '运费', 'A035', '快递费', '工程部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(107, '运费', 'A036', '物流费', '工程部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(108, '职工教育经费', 'A011', '职工教育经费', '工程部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(109, '租赁费', 'A012', '租赁费', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(110, '修缮费', 'A013', '修理费', '工程部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(111, '工具', 'A014', '工具费用', '工程部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(112, '通讯费', 'A015', '手机费', '工程部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(113, '办公费', 'B201', '办公费用', '工程部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(114, '福利费', 'B002', '劳保用品', '营销部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(115, '差旅费', 'A002', '国内机票', '营销部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(116, '差旅费', 'A003', '国外机票', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(117, '差旅费', 'A004', '私车公用', '营销部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(118, '差旅费', 'A005', '租车费用', '营销部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(119, '办公费', 'A006', '签证费/人身保险费', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(120, '办公费', 'B206', '办公家具设备', '营销部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(121, '办公费', 'B104', 'MIS费用', '营销部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(122, '运费', 'A035', '快递费', '营销部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(123, '运费', 'A036', '物流费', '营销部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(124, '职工教育经费', 'A011', '职工教育经费', '营销部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(125, '租赁费', 'A012', '租赁费', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(126, '修缮费', 'A013', '修理费', '营销部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(127, '工具', 'A014', '工具费用', '营销部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(128, '通讯费', 'A015', '手机费', '营销部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(129, '办公费', 'B201', '办公费用', '营销部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(130, '福利费', 'B002', '劳保用品', '专案部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(131, '差旅费', 'A002', '国内机票', '专案部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(132, '差旅费', 'A003', '国外机票', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(133, '差旅费', 'A004', '私车公用', '专案部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(134, '差旅费', 'A005', '租车费用', '专案部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(135, '办公费', 'A006', '签证费/人身保险费', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(136, '办公费', 'B206', '办公家具设备', '专案部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(137, '办公费', 'B104', 'MIS费用', '专案部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(138, '运费', 'A035', '快递费', '专案部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(139, '运费', 'A036', '物流费', '专案部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(140, '职工教育经费', 'A011', '职工教育经费', '专案部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(141, '租赁费', 'A012', '租赁费', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(142, '修缮费', 'A013', '修理费', '专案部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(143, '工具', 'A014', '工具费用', '专案部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(144, '通讯费', 'A015', '手机费', '专案部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(145, '办公费', 'B201', '办公费用', '专案部', '2021', 6000, NULL, NULL, 'N', '0', NULL),
	(146, '福利费', 'B002', '劳保用品', '财务部', '2021', 20040, NULL, NULL, 'N', '0', NULL),
	(147, '差旅费', 'A002', '国内机票', '财务部', '2021', 14790, NULL, NULL, 'N', '0', NULL),
	(148, '差旅费', 'A003', '国外机票', '财务部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(149, '差旅费', 'A004', '私车公用', '财务部', '2021', 8030, NULL, NULL, 'N', '0', NULL),
	(150, '差旅费', 'A005', '租车费用', '财务部', '2021', 44002, NULL, NULL, 'N', '0', NULL),
	(151, '办公费', 'A006', '签证费/人身保险费', '财务部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(152, '办公费', 'B206', '办公家具设备', '财务部', '2021', 160208, NULL, NULL, 'N', '0', NULL),
	(153, '办公费', 'B104', 'MIS费用', '财务部', '2021', 153000, NULL, NULL, 'N', '0', NULL),
	(154, '运费', 'A035', '快递费', '财务部', '2021', 3164, NULL, NULL, 'N', '0', NULL),
	(155, '运费', 'A036', '物流费', '财务部', '2021', 48000, NULL, NULL, 'N', '0', NULL),
	(156, '职工教育经费', 'A011', '职工教育经费', '财务部', '2021', 45380, NULL, NULL, 'N', '0', NULL),
	(157, '租赁费', 'A012', '租赁费', '财务部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(158, '修缮费', 'A013', '修理费', '财务部', '2021', 521420, NULL, NULL, 'N', '0', NULL),
	(159, '工具', 'A014', '工具费用', '财务部', '2021', 0, NULL, NULL, 'N', '0', NULL),
	(160, '通讯费', 'A015', '手机费', '财务部', '2021', 204000, NULL, NULL, 'N', '0', NULL),
	(161, '办公费', 'B201', '办公费用', '财务部', '2021', 6000, NULL, NULL, 'N', '0', NULL);
/*!40000 ALTER TABLE `bgu_quota` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
