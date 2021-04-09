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

-- 导出  表 toolsweb.bgu_bufdetail 结构
DROP TABLE IF EXISTS `bgu_bufdetail`;
CREATE TABLE IF NOT EXISTS `bgu_bufdetail` (
  `BffType` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BudMonth` char(10) COLLATE utf8_bin DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `BillNo` char(50) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `Descript` char(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_bufdetail 的数据：~0 rows (大约)
DELETE FROM `bgu_bufdetail`;
/*!40000 ALTER TABLE `bgu_bufdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `bgu_bufdetail` ENABLE KEYS */;

-- 导出  表 toolsweb.bgu_buffer 结构
DROP TABLE IF EXISTS `bgu_buffer`;
CREATE TABLE IF NOT EXISTS `bgu_buffer` (
  `BffType` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `BudYear` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BudMonth` char(10) COLLATE utf8_bin DEFAULT NULL,
  `UpperLimit` int(11) DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  `Surplus` int(11) DEFAULT NULL,
  `IsOver` char(5) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Descript` char(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.bgu_buffer 的数据：~9 rows (大约)
DELETE FROM `bgu_buffer`;
/*!40000 ALTER TABLE `bgu_buffer` DISABLE KEYS */;
INSERT INTO `bgu_buffer` (`BffType`, `BffName`, `BudYear`, `BudMonth`, `UpperLimit`, `Accumulate`, `Surplus`, `IsOver`, `SNNO`, `Descript`) VALUES
	('A', '消耗类', '2021', '06', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '03', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '04', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '05', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '07', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '08', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '09', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '10', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '12', 50000, 0, 50000, 'N', '0', NULL),
	('A', '消耗类', '2021', '11', 50000, 0, 50000, 'N', '0', NULL);
/*!40000 ALTER TABLE `bgu_buffer` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
