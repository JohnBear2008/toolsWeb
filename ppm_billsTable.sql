-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.3.10-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 toolsweb.ppm_bills_blueprint 结构
DROP TABLE IF EXISTS `ppm_bills_blueprint`;
CREATE TABLE IF NOT EXISTS `ppm_bills_blueprint` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BPTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '方案单号',
  `BPTVersion` int(2) DEFAULT 0,
  `BPTBPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '客户',
  `PGEMaker` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '方案人',
  `limitDate` date DEFAULT NULL COMMENT '完成期限',
  `MHEName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '机型',
  `OGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '原始系统版本号',
  `modelD` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '系统',
  `modelH` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '系统',
  `modifyType` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modifyReason` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modifyABE` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BPTDescribe` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `fileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileKey` char(100) COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `maker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `makeDate` date DEFAULT NULL,
  `auditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditDate` date DEFAULT NULL,
  `auditResult` int(1) DEFAULT NULL,
  `BPTAuditOpinion` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `BPTStatus` int(1) DEFAULT 0,
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BPTID_version` (`BPTID`,`BPTVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='方案单';

-- 正在导出表  toolsweb.ppm_bills_blueprint 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_blueprint` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_blueprint` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_blueprint_t 结构
DROP TABLE IF EXISTS `ppm_bills_blueprint_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_blueprint_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BPTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '方案单号',
  `BPTVersion` int(2) DEFAULT 0,
  `BPTBPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BPIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BTIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '客户',
  `PGEMaker` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '方案人',
  `limitDate` date DEFAULT NULL COMMENT '完成期限',
  `MHEName` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '机型',
  `OGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '原始系统版本号',
  `modelD` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '系统',
  `modelH` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '系统',
  `modifyType` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modifyReason` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modifyABE` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BPTDescribe` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `fileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileKey` char(100) COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `maker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `makeDate` date DEFAULT NULL,
  `auditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditDate` date DEFAULT NULL,
  `auditResult` int(1) DEFAULT NULL,
  `BPTAuditOpinion` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `BPTStatus` int(1) DEFAULT 0,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BPTID_version` (`BPTID`,`BPTVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='方案单';

-- 正在导出表  toolsweb.ppm_bills_blueprint_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_blueprint_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_blueprint_t` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_fqc 结构
DROP TABLE IF EXISTS `ppm_bills_fqc`;
CREATE TABLE IF NOT EXISTS `ppm_bills_fqc` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `fqcBPID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '计划单号',
  `FQCVersion` int(2) DEFAULT 0,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DSPFileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DSPFileKey` char(50) COLLATE utf8_bin DEFAULT NULL,
  `HMIFileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `HMIFileKey` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCRecord` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCResult` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `FQCMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCMakeDate` date DEFAULT NULL,
  `FQCAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCAuditResult` int(1) DEFAULT 0,
  `FQCAuditDate` date DEFAULT NULL,
  `FQCStatus` int(1) DEFAULT NULL,
  `FQCResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCTestResult` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `billFQCStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='FQC\r\n\r\nFQCStatus :0 已填单 1.已通过 2 出货后修正 3 未通过';

-- 正在导出表  toolsweb.ppm_bills_fqc 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_fqc` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_fqc` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_fqc_t 结构
DROP TABLE IF EXISTS `ppm_bills_fqc_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_fqc_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `fqcBPID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '计划单号',
  `FQCVersion` int(2) DEFAULT 0,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DSPFileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `DSPFileKey` char(50) COLLATE utf8_bin DEFAULT NULL,
  `HMIFileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `HMIFileKey` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCRecord` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCResult` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `FQCMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCMakeDate` date DEFAULT NULL,
  `FQCAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCAuditResult` int(1) DEFAULT 0,
  `FQCAuditDate` date DEFAULT NULL,
  `FQCStatus` int(1) DEFAULT NULL,
  `FQCResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCTestResult` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `billFQCStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='FQC\r\n\r\nFQCStatus :0 已填单 1.已通过 2 出货后修正 3 未通过';

-- 正在导出表  toolsweb.ppm_bills_fqc_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_fqc_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_fqc_t` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_pbh 结构
DROP TABLE IF EXISTS `ppm_bills_pbh`;
CREATE TABLE IF NOT EXISTS `ppm_bills_pbh` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `pbhBPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHCTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHVersion` int(2) DEFAULT 0,
  `PBHRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `PBHMaker` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `PBHMakeDate` date DEFAULT NULL,
  `PBHAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHAuditDate` date DEFAULT NULL,
  `PBHAuditResult` int(1) DEFAULT 0,
  `emailADRS` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `emailCopyADRS` text COLLATE utf8_bin DEFAULT NULL,
  `emailTitle` text COLLATE utf8_bin DEFAULT NULL,
  `emailFiles` text COLLATE utf8_bin DEFAULT NULL,
  `emailContact` char(50) COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `emailContent` text COLLATE utf8_bin DEFAULT NULL,
  `emailResult` int(1) DEFAULT 0,
  `emailResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHStatus` int(1) DEFAULT 0,
  `PBHStatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `billPBHStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='发布单';

-- 正在导出表  toolsweb.ppm_bills_pbh 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_pbh` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_pbh` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_pbh_t 结构
DROP TABLE IF EXISTS `ppm_bills_pbh_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_pbh_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `pbhBPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHCTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHVersion` int(2) DEFAULT 0,
  `PBHRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `PBHMaker` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `PBHMakeDate` date DEFAULT NULL,
  `PBHAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHAuditDate` date DEFAULT NULL,
  `PBHAuditResult` int(1) DEFAULT 0,
  `emailADRS` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `emailCopyADRS` text COLLATE utf8_bin DEFAULT NULL,
  `emailTitle` text COLLATE utf8_bin DEFAULT NULL,
  `emailFiles` text COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `emailContent` text COLLATE utf8_bin DEFAULT NULL,
  `emailResult` int(1) DEFAULT 0,
  `emailResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PBHStatus` int(1) DEFAULT 0,
  `PBHStatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='发布单';

-- 正在导出表  toolsweb.ppm_bills_pbh_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_pbh_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_pbh_t` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_plan 结构
DROP TABLE IF EXISTS `ppm_bills_plan`;
CREATE TABLE IF NOT EXISTS `ppm_bills_plan` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BPID` char(50) COLLATE utf8_bin NOT NULL,
  `version` int(3) DEFAULT 0,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PLDArea` char(10) COLLATE utf8_bin DEFAULT NULL,
  `orderFrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `orderFromDep` char(50) COLLATE utf8_bin DEFAULT NULL,
  `topic` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `detail` varchar(10000) COLLATE utf8_bin DEFAULT NULL,
  `PGEMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskStaffs` char(250) COLLATE utf8_bin DEFAULT NULL,
  `OGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `bugID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `MHEName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `applyDate` date DEFAULT NULL,
  `limitDate` date DEFAULT NULL,
  `maker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditOpinion` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `modelD` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modelH` char(50) COLLATE utf8_bin DEFAULT NULL,
  `makeDate` date DEFAULT NULL,
  `auditDate` date DEFAULT NULL,
  `auditResult` int(1) DEFAULT NULL,
  `auditResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileKey` char(100) COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `FQCRequest` int(1) DEFAULT 0,
  `FQCRequestText` char(5) COLLATE utf8_bin DEFAULT '',
  `FQCStaff` char(50) COLLATE utf8_bin DEFAULT NULL,
  `FQCPass` int(1) DEFAULT 0,
  `taskNum` int(2) DEFAULT 0,
  `taskNumDone` int(2) DEFAULT 0,
  `PLDStatus` int(1) DEFAULT NULL,
  `WFStatus` int(3) DEFAULT 1,
  `WFEndDate` date DEFAULT NULL,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BPID_version` (`BPID`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='WFStatus :工作流程状态.0 :非进行状态 1 进行状态\r\nPLDStatus:计划单状态:0:已填单 1审核通过 2审核驳回\r\neffective : 生效 1 失效0';

-- 正在导出表  toolsweb.ppm_bills_plan 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_plan` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_plan_t 结构
DROP TABLE IF EXISTS `ppm_bills_plan_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_plan_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BPIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BTIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BPID` char(50) COLLATE utf8_bin NOT NULL,
  `version` int(3) DEFAULT 0,
  `CTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `PLDArea` char(10) COLLATE utf8_bin DEFAULT NULL,
  `orderFrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `orderFromDep` char(50) COLLATE utf8_bin DEFAULT NULL,
  `topic` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `detail` varchar(10000) COLLATE utf8_bin DEFAULT NULL,
  `PGEMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskStaffs` char(250) COLLATE utf8_bin DEFAULT NULL,
  `OGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `bugID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `MHEName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `applyDate` date DEFAULT NULL,
  `limitDate` date DEFAULT NULL,
  `maker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `auditOpinion` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `modelD` char(50) COLLATE utf8_bin DEFAULT NULL,
  `modelH` char(50) COLLATE utf8_bin DEFAULT NULL,
  `makeDate` date DEFAULT NULL,
  `auditDate` date DEFAULT NULL,
  `auditResult` int(1) DEFAULT NULL,
  `auditResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `fileKey` char(100) COLLATE utf8_bin DEFAULT NULL,
  `files` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `FQCRequest` int(1) DEFAULT 0,
  `FQCRequestText` char(5) COLLATE utf8_bin DEFAULT '无',
  `FQCPass` int(1) DEFAULT 0,
  `taskNum` int(2) DEFAULT 0,
  `taskNumDone` int(2) DEFAULT 0,
  `PLDStatus` int(1) DEFAULT NULL,
  `WFStatus` int(3) DEFAULT 1,
  `WFEndDate` date DEFAULT NULL,
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BPID_version` (`BPID`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='WFStatus :工作流程状态.0 :非进行状态 1 进行状态\r\nPLDStatus:计划单状态:0:已填单 1审核通过 2审核驳回';

-- 正在导出表  toolsweb.ppm_bills_plan_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_plan_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_plan_t` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_task 结构
DROP TABLE IF EXISTS `ppm_bills_task`;
CREATE TABLE IF NOT EXISTS `ppm_bills_task` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '任务单号',
  `BTVersion` int(11) DEFAULT NULL,
  `taskSortType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `taskSortTypeText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskType` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '任务类型',
  `taskTypeText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskRepeat` int(1) DEFAULT 0,
  `taskRepeatText` char(5) COLLATE utf8_bin DEFAULT '否',
  `taskCTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskStaff` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskBPID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '计划单号',
  `modifyABE` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '修改属性',
  `taskDBE` varchar(5000) COLLATE utf8_bin DEFAULT NULL COMMENT '任务说明',
  `taskLimitDate` date DEFAULT NULL COMMENT '任务完成期限',
  `taskMHEName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskModel` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskOGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskBugID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
  `taskMaker` char(100) COLLATE utf8_bin DEFAULT NULL,
  `taskMakeDate` date DEFAULT NULL,
  `BTAcceptResult` int(1) DEFAULT NULL,
  `BTAcceptResultText` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BTAcceptOpinion` char(200) COLLATE utf8_bin DEFAULT NULL,
  `BTAcceptDate` date DEFAULT NULL,
  `BTAcceptor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `recordNum` int(2) DEFAULT 0,
  `taskFiles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `modifyContent` longtext COLLATE utf8_bin DEFAULT NULL,
  `functionsDBE` longtext COLLATE utf8_bin DEFAULT NULL,
  `IPQCMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCMakeDate` date DEFAULT NULL,
  `IPQCResult` int(1) DEFAULT NULL,
  `IPQCResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCTestResult` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `IPQCContent` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditResult` int(11) DEFAULT NULL,
  `IPQCAuditResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditDate` date DEFAULT NULL,
  `FQCRequest` int(1) DEFAULT 0,
  `FQCRequestText` char(5) COLLATE utf8_bin DEFAULT '无',
  `BTStatus` int(2) DEFAULT NULL COMMENT '状态值',
  `WFStatus` int(1) DEFAULT 1,
  `BTStatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `T_BPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `T_StatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BTID_BTVersion` (`BTID`,`BTVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  toolsweb.ppm_bills_task 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_task` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_taskrecord 结构
DROP TABLE IF EXISTS `ppm_bills_taskrecord`;
CREATE TABLE IF NOT EXISTS `ppm_bills_taskrecord` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '任务单号',
  `BTVersion` int(11) DEFAULT NULL,
  `BPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskFiles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `recordMaker` char(100) COLLATE utf8_bin DEFAULT NULL,
  `recordMakeDate` date DEFAULT NULL,
  `recordAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `recordAuditDate` date DEFAULT NULL,
  `modifyContent` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `functionsDBE` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `recordRemark` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `fileVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `disable` int(1) DEFAULT NULL,
  `recordStatus` char(50) COLLATE utf8_bin DEFAULT '',
  `saveTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- 正在导出表  toolsweb.ppm_bills_taskrecord 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_taskrecord` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_taskrecord` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_taskrecord_t 结构
DROP TABLE IF EXISTS `ppm_bills_taskrecord_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_taskrecord_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '任务单号',
  `BTVersion` int(11) DEFAULT NULL,
  `BPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskFiles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `recordMaker` char(100) COLLATE utf8_bin DEFAULT NULL,
  `recordMakeDate` date DEFAULT NULL,
  `recordAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `recordAuditDate` date DEFAULT NULL,
  `modifyContent` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `functionsDBE` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `recordRemark` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `fileVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `disable` int(1) DEFAULT NULL,
  `recordStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`DBID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- 正在导出表  toolsweb.ppm_bills_taskrecord_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_taskrecord_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_taskrecord_t` ENABLE KEYS */;

-- 导出  表 toolsweb.ppm_bills_task_t 结构
DROP TABLE IF EXISTS `ppm_bills_task_t`;
CREATE TABLE IF NOT EXISTS `ppm_bills_task_t` (
  `DBID` int(11) NOT NULL AUTO_INCREMENT,
  `BTID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '任务单号',
  `BTVersion` int(11) DEFAULT NULL,
  `BPIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `BTIDfrom` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskSortType` char(2) COLLATE utf8_bin DEFAULT NULL,
  `taskSortTypeText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskType` char(2) COLLATE utf8_bin DEFAULT NULL COMMENT '任务类型',
  `taskTypeText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskRepeat` int(1) DEFAULT 0,
  `taskRepeatText` char(5) COLLATE utf8_bin DEFAULT '否',
  `taskCTRName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskStaff` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskBPID` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '计划单号',
  `modifyABE` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '修改属性',
  `taskDBE` varchar(5000) COLLATE utf8_bin DEFAULT NULL COMMENT '任务说明',
  `taskLimitDate` date DEFAULT NULL COMMENT '任务完成期限',
  `taskMHEName` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskModel` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskOGNSystemVersion` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskBugID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `taskRemark` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
  `taskMaker` char(100) COLLATE utf8_bin DEFAULT NULL,
  `taskMakeDate` date DEFAULT NULL,
  `BTAcceptResult` int(1) DEFAULT NULL,
  `BTAcceptResultText` char(10) COLLATE utf8_bin DEFAULT NULL,
  `BTAcceptOpinion` char(200) COLLATE utf8_bin DEFAULT NULL,
  `BTAcceptDate` date DEFAULT NULL,
  `BTAcceptor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `recordNum` int(2) DEFAULT 0,
  `taskFiles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `modifyContent` longtext COLLATE utf8_bin DEFAULT NULL,
  `functionsDBE` longtext COLLATE utf8_bin DEFAULT NULL,
  `IPQCMaker` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCMakeDate` date DEFAULT NULL,
  `IPQCResult` int(1) DEFAULT NULL,
  `IPQCResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCTestResult` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `IPQCContent` varchar(5000) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditResult` int(11) DEFAULT NULL,
  `IPQCAuditResultText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditor` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCStatus` char(50) COLLATE utf8_bin DEFAULT NULL,
  `IPQCAuditDate` date DEFAULT NULL,
  `FQCRequest` int(1) DEFAULT 0,
  `FQCRequestText` char(5) COLLATE utf8_bin DEFAULT '无',
  `BTStatus` int(2) DEFAULT NULL COMMENT '状态值',
  `WFStatus` int(1) DEFAULT 1,
  `BTStatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `T_BPID` char(50) COLLATE utf8_bin DEFAULT NULL,
  `T_StatusText` char(50) COLLATE utf8_bin DEFAULT NULL,
  `saveTimeStamp` timestamp NULL DEFAULT current_timestamp(),
  `effective` int(1) DEFAULT 1,
  PRIMARY KEY (`DBID`),
  UNIQUE KEY `BTID_BTVersion` (`BTID`,`BTVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- 正在导出表  toolsweb.ppm_bills_task_t 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `ppm_bills_task_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `ppm_bills_task_t` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
