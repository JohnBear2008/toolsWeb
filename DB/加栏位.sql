 alter table `bgu_purchmain` add COLUMN `ExceedValue` INT COLLATE utf8_bin DEFAULT NULL after `TotalValue`;
 alter table `bgu_purchmain` add COLUMN `IsOver` CHAR(5) COLLATE utf8_bin DEFAULT NULL after `TotalValue`;
 alter table `bgu_purchmain` add COLUMN `Accumulate` INT COLLATE utf8_bin DEFAULT NULL after `TotalValue`;