-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.3.16-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 divweb 的数据库结构
DROP DATABASE IF EXISTS `divweb`;
CREATE DATABASE IF NOT EXISTS `divweb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `divweb`;

-- 导出  表 divweb.div1form 结构
DROP TABLE IF EXISTS `div1form`;
CREATE TABLE IF NOT EXISTS `div1form` (
  `field1` char(50) DEFAULT NULL COMMENT '标签',
  `field2` char(50) DEFAULT NULL COMMENT '标签'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  divweb.div1form 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `div1form` DISABLE KEYS */;
/*!40000 ALTER TABLE `div1form` ENABLE KEYS */;

-- 导出  表 divweb.funbill 结构
DROP TABLE IF EXISTS `funbill`;
CREATE TABLE IF NOT EXISTS `funbill` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `billID` char(50) DEFAULT NULL,
  `billInfo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `layoutDivs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='功能表数据';

-- 正在导出表  divweb.funbill 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `funbill` DISABLE KEYS */;
REPLACE INTO `funbill` (`ID`, `billID`, `billInfo`, `layoutDivs`) VALUES
	(23, 'bill1', '{"ID":"bill1","route":"/bill1","mark":"测试"}', '[{"divID":"div1","divCSS":"width:100%; background-color: #f9fafc;","form":{"ID":"div1form","DBTableName":"div1form","inputs":[{"ID":"div1form_input1","fieldName":"field1","fieldType":"char","fieldLength":"50","unique":"false","nullable":"true","defaultValue":"","type":"input","label":"标签","options":[]},{"ID":"div1form_input2","fieldName":"field2","fieldType":"char","fieldLength":"50","unique":"false","nullable":"true","defaultValue":"","type":"radio","label":"标签","options":[{"value":"1","text":"选项1"},{"value":"2","text":"选项2"}]}]},"funs":[{"ID":"div1fun1","type":"button","text":"功能1","funScript":"getElements","i":"div1form"},{"ID":"div1fun2","type":"system","text":"功能2","funScript":"funTest","i":"33"}]}]');
/*!40000 ALTER TABLE `funbill` ENABLE KEYS */;

-- 导出  表 divweb.persons 结构
DROP TABLE IF EXISTS `persons`;
CREATE TABLE IF NOT EXISTS `persons` (
  `Id_P` int(11) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  divweb.persons 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;

-- 导出  表 divweb.router 结构
DROP TABLE IF EXISTS `router`;
CREATE TABLE IF NOT EXISTS `router` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `path` char(50) NOT NULL,
  `name` char(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- 正在导出表  divweb.router 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `router` DISABLE KEYS */;
REPLACE INTO `router` (`ID`, `path`, `name`) VALUES
	(13, '/bill1', 'bill1');
/*!40000 ALTER TABLE `router` ENABLE KEYS */;

-- 导出  表 divweb.users 结构
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `account` char(50) DEFAULT NULL,
  `password` char(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 正在导出表  divweb.users 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`ID`, `account`, `password`) VALUES
	(1, 'account1', 'pw1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
