 alter table `bgu_quotadetail` add COLUMN `UnitName` CHAR(50) COLLATE utf8_bin DEFAULT NULL after `DeptName`
 alter table `bgu_purchmain` add COLUMN `IsBillUnder` CHAR(50) COLLATE utf8_bin DEFAULT NULL after `BillStatus`