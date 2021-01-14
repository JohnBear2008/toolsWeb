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
  `Description` char(20) COLLATE utf8_bin DEFAULT NULL,
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
  `BillStatus` char(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
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
  `DptWorkId` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DptName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `DptDate` date DEFAULT NULL,
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

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
