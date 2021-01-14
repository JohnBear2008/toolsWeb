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

-- 数据导出被取消选择。
-- 导出  表 toolsweb.bgu_purchmain 结构
DROP TABLE IF EXISTS `bgu_purchmain`;
CREATE TABLE IF NOT EXISTS `bgu_purchmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `ListNo` char(20) COLLATE utf8_bin DEFAULT NULL,
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
  `EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
