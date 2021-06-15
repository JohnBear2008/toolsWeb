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

-- 导出  表 toolsweb.bgu_claim 结构
DROP TABLE IF EXISTS `bgu_claim`;
CREATE TABLE IF NOT EXISTS `bgu_claim` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `EntryDate` date DEFAULT NULL,
  `RequestDate` date DEFAULT NULL,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `TotalValue` int(11) DEFAULT NULL,
  `UpperLimit` int(11) DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  `Surplus` int(11) DEFAULT NULL,
  `IsOver` char(5) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(20) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(20) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Descript` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
-- 导出  表 toolsweb.bgu_claimdetail 结构
DROP TABLE IF EXISTS `bgu_claimdetail`;
CREATE TABLE IF NOT EXISTS `bgu_claimdetail` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `RequestDate` date DEFAULT NULL,
  `BillNo` char(50) COLLATE utf8_bin DEFAULT NULL,
  `SNNO` char(10) COLLATE utf8_bin DEFAULT NULL,
  `DivideValue` int(11) DEFAULT NULL,
  `Invoice` char(50) COLLATE utf8_bin DEFAULT NULL,
  `Accumulate` int(11) DEFAULT NULL,
  `Surplus` int(11) DEFAULT NULL,
  `Descript` char(50) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
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
  `EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  KEY `BillSN` (`BillNo`,`SNNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
-- 导出  表 toolsweb.bgu_tripmain 结构
DROP TABLE IF EXISTS `bgu_tripmain`;
CREATE TABLE IF NOT EXISTS `bgu_tripmain` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BillNo` char(20) COLLATE utf8_bin DEFAULT NULL,
  `Formkind` char(10) COLLATE utf8_bin DEFAULT NULL,
  `Subject` char(20) COLLATE utf8_bin DEFAULT NULL,
  `EntryDate` date DEFAULT NULL,
  `ApplicNo` char(50) COLLATE utf8_bin DEFAULT NULL,
  `Version` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BusiMan` char(50) COLLATE utf8_bin DEFAULT NULL,
  `CompMan` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BusiArea` char(50) COLLATE utf8_bin DEFAULT NULL,
  `RoomChoice` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DinnerChoice` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DeptName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `UnitName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `GroupName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `StaffID` char(10) COLLATE utf8_bin DEFAULT NULL,
  `StaffName` char(50) COLLATE utf8_bin DEFAULT NULL,
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
  `LiveExtA` char(5) COLLATE utf8_bin DEFAULT NULL,
  `LiveExtB` char(5) COLLATE utf8_bin DEFAULT NULL,
  `LiveExtC` char(5) COLLATE utf8_bin DEFAULT NULL,
  `LiveExtD` char(5) COLLATE utf8_bin DEFAULT NULL,
  `LiveExtE` char(5) COLLATE utf8_bin DEFAULT NULL,
  `LiveExtF` char(5) COLLATE utf8_bin DEFAULT NULL,
  `Explanation` char(200) COLLATE utf8_bin DEFAULT NULL,
  `Overspend` char(255) COLLATE utf8_bin DEFAULT NULL,
  `IsOver` char(5) COLLATE utf8_bin DEFAULT NULL,
  `OverReason` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `HotelName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `HotelTel` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BillStatus` char(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `workID` (`BillNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
