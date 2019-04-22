-- --------------------------------------------------------
-- 主机:                           172.16.12.2
-- 服务器版本:                        5.6.21-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 iMES_Component_API 的数据库结构
CREATE DATABASE IF NOT EXISTS `iMES_Component_API` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `iMES_Component_API`;

-- 导出  表 iMES_Component_API.DataAynchMappings 结构
CREATE TABLE IF NOT EXISTS `DataAynchMappings` (
  `OID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectName` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT '项目来源',
  `TableName` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ID` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `SourceFlag` int(11) DEFAULT NULL,
  `DataOID` int(11) DEFAULT NULL COMMENT '数据源OID',
  `TempDataOID` int(11) DEFAULT '-1',
  `SynchMold` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SynchFlag` int(11) NOT NULL COMMENT '0.插入',
  `SynchType` int(1) NOT NULL COMMENT '1.新增   2.修改 3.删除',
  `SynchCount` int(11) DEFAULT '0',
  `CreateTime` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`OID`),
  KEY `Ix_Name` (`TableName`,`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=47875 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
