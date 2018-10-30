/*
 Navicat MariaDB Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MariaDB
 Source Server Version : 100309
 Source Host           : localhost:3306
 Source Schema         : mestest

 Target Server Type    : MariaDB
 Target Server Version : 100309
 File Encoding         : 65001

 Date: 25/10/2018 14:41:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hmiprint_moni
-- ----------------------------
DROP TABLE IF EXISTS `hmiprint_moni`;
CREATE TABLE `hmiprint_moni`  (
  `UID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Manufacturer` varchar(8) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT 'STD' COMMENT '4位 [标准, STD]',
  `CtrlType` varchar(8) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0000' COMMENT '4位 [标准, 0000]',
  `MachType` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '00000000' COMMENT '8位 [标准, 00000000]',
  `Reserved0` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT '预留 [标准, 0]',
  `Reserved1` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT '预留 [标准, 0]',
  `Reserved2` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT '预留 [标准, 0]',
  `Reserved3` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT '预留 [标准, 0]',
  `Reserved4` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT '预留 [标准, 0]',
  `DDKey` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT '0' COMMENT 'HMI 生成的 ini中的[Parameter]英文内容',
  `CN` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `TW` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `EN` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `Visible` tinyint(1) UNSIGNED NULL DEFAULT 1,
  PRIMARY KEY (`UID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 86 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hmiprint_moni
-- ----------------------------
INSERT INTO `hmiprint_moni` VALUES (1, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'InjectMaxSpeed', '最大射速', '最大射速', 'InjectMaxSpeed', 1);
INSERT INTO `hmiprint_moni` VALUES (2, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'InjectMaxSpeedB', 'B组最大射速', 'B組最大射速', 'InjectMaxSpeedB', 1);
INSERT INTO `hmiprint_moni` VALUES (3, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'OilTemperature', '油温', '油溫', 'OilTemperature', 1);
INSERT INTO `hmiprint_moni` VALUES (4, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectCushion', '射出监控位置', '射出監控位置', 'Posi_InjectCushion', 1);
INSERT INTO `hmiprint_moni` VALUES (5, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectCushionB', 'B组射出终点', 'B組射出終點', 'Posi_InjectCushionB', 1);
INSERT INTO `hmiprint_moni` VALUES (6, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectEnd', '射出终点', '射出終點', 'Posi_InjectEnd', 1);
INSERT INTO `hmiprint_moni` VALUES (7, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectHoldEndB', 'B组射出终点位置实际值', 'B組射出終點位置實際值', 'Posi_InjectHoldEndB', 1);
INSERT INTO `hmiprint_moni` VALUES (8, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectStart', '射出起点', '射出起點', 'Posi_InjectStart', 1);
INSERT INTO `hmiprint_moni` VALUES (9, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_InjectStartB', 'B组射出起点', 'B組射出起點', 'Posi_InjectStartB', 1);
INSERT INTO `hmiprint_moni` VALUES (10, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_OpenMoldEnd', '开模终点', '開模終點', 'Posi_OpenMoldEnd', 1);
INSERT INTO `hmiprint_moni` VALUES (11, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_TurnToHold', '保压起点', '保壓起點', 'Posi_TurnToHold', 1);
INSERT INTO `hmiprint_moni` VALUES (12, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'adPosi_TurnToHoldB', 'B组保压起点', 'B組保壓起點', 'Posi_TurnToHoldB', 1);
INSERT INTO `hmiprint_moni` VALUES (13, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'cnChargeRPM', '储料RPM', '儲料RPM', 'ChargeRPM', 1);
INSERT INTO `hmiprint_moni` VALUES (14, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_ChargeBackB', 'B组储料背压', 'B組儲料背壓', 'Pres_ChargeBackB', 1);
INSERT INTO `hmiprint_moni` VALUES (15, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_ChargeMiddleB', 'B组储料尖峰压力实际值', 'B組儲料尖峰壓力實際值', 'Pres_ChargeMiddleB', 1);
INSERT INTO `hmiprint_moni` VALUES (16, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_ChargePeak', '储料尖峰压力', '儲料尖峰壓力', 'MaxPres_ChargePeak', 1);
INSERT INTO `hmiprint_moni` VALUES (17, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_InjectMiddleB', 'B组射出尖峰压力实际值', 'B組射出尖峰壓力實際值', 'Pres_InjectMiddleB', 1);
INSERT INTO `hmiprint_moni` VALUES (18, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_InjectPeak', '射出尖峰压力', '射出尖峰壓力', 'Pres_InjectPeak', 1);
INSERT INTO `hmiprint_moni` VALUES (19, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_InjecterB', 'B组射出压力', 'B組射出壓力', 'Pres_InjecterB', 1);
INSERT INTO `hmiprint_moni` VALUES (20, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPres_TurnToHold', '保压转换压力', '保壓轉換壓力', 'Pres_TurnToHold', 1);
INSERT INTO `hmiprint_moni` VALUES (21, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'daPress_TurnToHoldB', 'B组保压转换压力实际值', 'B組保壓轉換壓力實際值', 'Press_TurnToHoldB', 1);
INSERT INTO `hmiprint_moni` VALUES (22, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'dwShotCount', '开模序号', '開模序號', 'ShotCount', 1);
INSERT INTO `hmiprint_moni` VALUES (23, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmEject', '脱模计时', '脫模計時', 'EjectTime', 1);
INSERT INTO `hmiprint_moni` VALUES (24, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmEjectAdvance', '脱进计时', '脫進計時', 'EjectAdvanceTime', 1);
INSERT INTO `hmiprint_moni` VALUES (25, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmEjectReturn', '脱退计时', '脫退計時', 'EjectReturnTime', 1);
INSERT INTO `hmiprint_moni` VALUES (26, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmSuckBack', '射退计时', '射退計時', 'SuckBackTime', 1);
INSERT INTO `hmiprint_moni` VALUES (27, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmTake', '取件时间', '取件時間', 'TakeTime', 1);
INSERT INTO `hmiprint_moni` VALUES (28, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlCharge', '储料计时', '儲料計時', 'ChargeTime', 1);
INSERT INTO `hmiprint_moni` VALUES (29, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlChargeB', 'B组储料计时', 'B組儲料計時', 'ChargeTimeB', 1);
INSERT INTO `hmiprint_moni` VALUES (30, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlCycle', '循环计时', '循環計時', 'CycleTime', 1);
INSERT INTO `hmiprint_moni` VALUES (31, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlInject', '射出计时', '射出計時', 'InjectTime', 1);
INSERT INTO `hmiprint_moni` VALUES (32, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlInjectB', 'B组射出计时', 'B組射出計時', 'InjectTimeB', 1);
INSERT INTO `hmiprint_moni` VALUES (33, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmlTurnToHoldB', 'B组保压转换时间实际值', 'B組保壓轉換時間實際值', 'Time_TurnToHoldB', 1);
INSERT INTO `hmiprint_moni` VALUES (34, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'tmllTurnToHold', '保压转换时间', '保壓轉換時間', 'TurnToHoldTime', 1);
INSERT INTO `hmiprint_moni` VALUES (35, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'wReservedMG[6]', '保留', '保留', 'Reserve', 0);
INSERT INTO `hmiprint_moni` VALUES (36, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'wReservedMG[7]', '保留', '保留', 'Reserve', 0);
INSERT INTO `hmiprint_moni` VALUES (37, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'wSource', '资料来源', '資料來源', 'Source', 1);
INSERT INTO `hmiprint_moni` VALUES (38, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'wReserved', '保留', '保留', 'Reserve', 0);
INSERT INTO `hmiprint_moni` VALUES (39, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'dwReserved10', '保留', '保留', 'Reserve', 0);
INSERT INTO `hmiprint_moni` VALUES (40, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'C_MEMERY_PAD', 'C_MEMERY_PAD', 'C_MEMERY_PAD', 'C_MEMERY_PAD', 0);
INSERT INTO `hmiprint_moni` VALUES (41, 'STD', '0000', '00000000', '0', '0', '0', '0', '0', 'wReservedMG20', '保留', '保留', 'Reserve', 0);
INSERT INTO `hmiprint_moni` VALUES (42, '7AK', '1100', '10010000', '0', '0', '0', '0', '0', 'InjectMaxSpeed', '最大射速info', NULL, NULL, 1);
INSERT INTO `hmiprint_moni` VALUES (43, '7AK', '1100', '10010001', '0', '0', '0', '0', '0', 'InjectMaxSpeed', '最大射速???', NULL, NULL, 1);
INSERT INTO `hmiprint_moni` VALUES (85, 'TMP', '1100', '10010000', '0', '0', '0', '0', '0', 'InjectMaxSpeed', '最大射速Tmp', NULL, NULL, 1);

SET FOREIGN_KEY_CHECKS = 1;
