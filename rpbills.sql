-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.4.6-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 toolsweb.rp_partsbills 结构
DROP TABLE IF EXISTS `rp_partsbills`;
CREATE TABLE IF NOT EXISTS `rp_partsbills` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `recordBillId` char(50) DEFAULT NULL COMMENT '维修单号',
  `rowId` char(50) DEFAULT NULL COMMENT '序号',
  `partId` char(50) DEFAULT NULL COMMENT '部件编号',
  `partName` char(50) DEFAULT NULL COMMENT '部件名称',
  `partDescription` varchar(255) DEFAULT NULL COMMENT '部件描述',
  `partLocation` char(50) DEFAULT NULL COMMENT '部件位置',
  `num` int(3) DEFAULT NULL COMMENT '数量',
  `price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `partFee` decimal(10,2) DEFAULT NULL COMMENT '原件费用',
  `numStatus` char(50) DEFAULT NULL COMMENT '领用状态',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `billSaveTimeStamp` timestamp NULL DEFAULT current_timestamp() COMMENT '时间戳',
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `recordBillId_rowId` (`recordBillId`,`rowId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内修系统_工作流程_维修记录单 子表 更换部件清单表';

-- 正在导出表  toolsweb.rp_partsbills 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `rp_partsbills` DISABLE KEYS */;
/*!40000 ALTER TABLE `rp_partsbills` ENABLE KEYS */;

-- 导出  表 toolsweb.rp_recordbills 结构
DROP TABLE IF EXISTS `rp_recordbills`;
CREATE TABLE IF NOT EXISTS `rp_recordbills` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `recordBillId` char(50) DEFAULT NULL COMMENT '记录单号',
  `requestBillId` char(50) DEFAULT NULL COMMENT '申请单号',
  `rowId` char(50) DEFAULT NULL COMMENT '申请单行号',
  `responseBillId` char(50) DEFAULT NULL COMMENT '出货单号',
  `productId` char(50) DEFAULT NULL COMMENT '产品编号',
  `productName` varchar(255) DEFAULT NULL COMMENT '产品名称',
  `productDescription` varchar(255) DEFAULT NULL COMMENT '产品描述',
  `factoryNo` char(50) DEFAULT NULL COMMENT '出厂编号',
  `origin` varchar(255) DEFAULT NULL COMMENT '原产地',
  `systemType` char(50) DEFAULT NULL COMMENT '系统分类',
  `productClass` char(50) DEFAULT NULL COMMENT '产品类别',
  `productYear` varchar(255) DEFAULT NULL COMMENT '生产年份',
  `productMonth` varchar(255) DEFAULT NULL COMMENT '生产月份',
  `productionDate` date DEFAULT NULL COMMENT '生产日期',
  `orginFactoryNo` char(50) DEFAULT NULL COMMENT '原厂编码',
  `isRework` varchar(255) DEFAULT NULL COMMENT '是否返修',
  `urgent` varchar(255) DEFAULT NULL COMMENT '是否紧急',
  `inWarranty` varchar(255) DEFAULT NULL COMMENT '质保期内',
  `productFrom` varchar(255) DEFAULT NULL COMMENT '来源类型',
  `productBelong` varchar(255) DEFAULT NULL COMMENT '产品归属',
  `testResult` varchar(255) DEFAULT NULL COMMENT '检测结果',
  `testItem` varchar(255) DEFAULT NULL COMMENT '检测项目',
  `testFee` decimal(10,2) DEFAULT NULL COMMENT '检测费用',
  `faultDescription` varchar(255) DEFAULT NULL COMMENT '故障描述',
  `faultReason` varchar(255) DEFAULT NULL COMMENT '故障原因',
  `faultClass` varchar(255) DEFAULT NULL COMMENT '故障分类',
  `changePartList` varchar(255) DEFAULT NULL COMMENT '替换原件清单',
  `repairResult` char(50) DEFAULT NULL COMMENT '维修结果',
  `repairTotalFee` decimal(10,2) DEFAULT NULL COMMENT '总费用',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `maker` varchar(255) DEFAULT NULL COMMENT '制单人',
  `makeDate` date DEFAULT NULL COMMENT '制单日期',
  `status` char(50) DEFAULT NULL COMMENT '状态',
  `billSaveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `requestBillId_rowId` (`requestBillId`,`rowId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='内修系统_工作流程_维修记录单';

-- 正在导出表  toolsweb.rp_recordbills 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `rp_recordbills` DISABLE KEYS */;
/*!40000 ALTER TABLE `rp_recordbills` ENABLE KEYS */;

-- 导出  表 toolsweb.rp_requestbills 结构
DROP TABLE IF EXISTS `rp_requestbills`;
CREATE TABLE IF NOT EXISTS `rp_requestbills` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `requestBillId` char(50) DEFAULT NULL COMMENT '申请单编号',
  `requestDate` date DEFAULT NULL COMMENT '申请日期',
  `fromBillId` char(50) DEFAULT NULL COMMENT '来源单号',
  `customerId` char(50) DEFAULT NULL COMMENT '客户编号',
  `customerShortName` char(255) DEFAULT NULL COMMENT '简称',
  `customerArea` varchar(255) DEFAULT NULL COMMENT '区域',
  `customerName` varchar(255) DEFAULT NULL COMMENT '客户名称',
  `contact` varchar(255) DEFAULT NULL COMMENT '联系人',
  `mobilePhone` varchar(255) DEFAULT NULL COMMENT '移动电话',
  `customerBelongShort` varchar(255) DEFAULT NULL COMMENT '客户归属简称',
  `customerBelongFull` varchar(255) DEFAULT NULL COMMENT '客户归属全称',
  `isInland` varchar(255) DEFAULT NULL COMMENT '国内外',
  `requestWay` varchar(255) DEFAULT NULL COMMENT '送修方式',
  `requestStaff` varchar(255) DEFAULT NULL COMMENT '送修人',
  `maker` varchar(255) DEFAULT NULL COMMENT '制单人员',
  `makeDate` date DEFAULT NULL COMMENT '制单日期',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `billSaveTimeStamp` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `requestBillId` (`requestBillId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='内修系统_工作流程_维修申请单';

-- 正在导出表  toolsweb.rp_requestbills 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `rp_requestbills` DISABLE KEYS */;
/*!40000 ALTER TABLE `rp_requestbills` ENABLE KEYS */;

-- 导出  表 toolsweb.rp_responsebills 结构
DROP TABLE IF EXISTS `rp_responsebills`;
CREATE TABLE IF NOT EXISTS `rp_responsebills` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `responseBillId` char(50) DEFAULT NULL COMMENT '出货单号',
  `customerId` char(50) DEFAULT NULL COMMENT '客户编号',
  `customerShortName` char(50) DEFAULT NULL COMMENT '简称',
  `fullName` varchar(255) DEFAULT NULL COMMENT '全称',
  `customerBelong` char(50) DEFAULT NULL COMMENT '客户归属',
  `invoiceName` char(50) DEFAULT NULL COMMENT '开票名称',
  `fax` char(50) DEFAULT NULL COMMENT '传真号',
  `contact` char(50) DEFAULT NULL COMMENT '联系人',
  `mobilePhone` char(50) DEFAULT NULL COMMENT '移动电话',
  `responseDate` date DEFAULT NULL COMMENT '出货日期',
  `paymentWay` char(50) DEFAULT NULL COMMENT '收款方式',
  `sendWay` char(50) DEFAULT NULL COMMENT '出货方式',
  `expressId` char(50) DEFAULT NULL COMMENT '运输单号',
  `responseStaff` char(50) DEFAULT NULL COMMENT '出货人',
  `currency` char(50) DEFAULT NULL COMMENT '币别编号',
  `amount` decimal(10,2) DEFAULT NULL COMMENT '合计金额',
  `discount` double DEFAULT NULL COMMENT '折扣',
  `discountAmount` decimal(10,2) DEFAULT NULL COMMENT '折扣后金额',
  `payAmount` decimal(10,2) DEFAULT NULL COMMENT '付款金额',
  `payWay` char(50) DEFAULT NULL COMMENT '付款方式',
  `payDate` date DEFAULT NULL COMMENT '付款日期',
  `isFullPay` char(50) DEFAULT NULL COMMENT '是否已付清',
  `isSended` char(50) DEFAULT NULL COMMENT '是否已发货',
  `maker` char(50) DEFAULT NULL COMMENT '制单人员',
  `makeDate` date DEFAULT NULL COMMENT '制单日期',
  `remark` char(50) DEFAULT NULL COMMENT '备注',
  `billSaveTimeStamp` timestamp NULL DEFAULT current_timestamp() COMMENT '时间戳',
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='内修系统_工作流程_维修出货单';

-- 正在导出表  toolsweb.rp_responsebills 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `rp_responsebills` DISABLE KEYS */;
/*!40000 ALTER TABLE `rp_responsebills` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
