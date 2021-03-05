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
DELETE FROM `bgu_credit`;
/*!40000 ALTER TABLE `bgu_credit` DISABLE KEYS */;
INSERT INTO `bgu_credit` (`DBID`, `StaffId`, `StaffName`, `DeptName`, `BudYear`, `UpperLimit`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `Descript`) VALUES
	(1, '10001', '周筱龙', '工程部', '2021', 50000, NULL, NULL, 'N', NULL, NULL),
	(2, '20001', '刘宜芳', '营销部', '2021', 40000, NULL, NULL, 'N', NULL, NULL),
	(3, '50027', '曹先生', '软体部', '2021', 10000, NULL, NULL, 'N', NULL, NULL),
	(4, '10023', '叶海萍', '财务部', '2021', 30000, NULL, NULL, 'N', NULL, NULL);
/*!40000 ALTER TABLE `bgu_credit` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
