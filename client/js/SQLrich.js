
SQLidvDelayRate = "SELECT A.*  FROM (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb," +
"(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A   left join `ppm_bills_pbh` tph on A.BTID=tph.pbhBPID ";

SQLgetDelayRate=" SELECT tpn.*, LEFT(tpn.topic, 56) as topic_cut,LEFT(tpn.detail, 50) as detail_cut,  LEFT(tpn.`auditOpinion`, 256) as auditOpinion_cut, tph.PBHCTRName as PBHCTRName,tph.emaildate  FROM `ppm_bills_plan` tpn left join `ppm_bills_pbh` tph on tpn.BPID=tph.pbhBPID where tpn.limitdate < tph.emailDate  ";

SQLgetErrorRate="SELECT tbb.*,LEFT(tbb.taskDBE, 25) as taskDBE_cut  FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion and tbb.taskLimitDate >'2019-11-05' and tbb.taskLimitDate < '2019-11-24'  limit 1000";

SQLDelayCount="SELECT count(*) as cnt1 FROM `ppm_bills_plan` tpn  left join `ppm_bills_pbh` tph on tpn.BPID=tph.pbhBPID where tpn.limitdate < tph.emailDate and applyDate> '2019-10-15'";
SQLDelayTotal="SELECT count(*) as cnt1 FROM `ppm_bills_plan` tpn  left join `ppm_bills_pbh` tph on tpn.BPID=tph.pbhBPID where applyDate> '2019-10-15'";

SQLErrorCount="SELECT count(*) as cnt1  FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion and tbb.BTVersion>1 and tbb.taskLimitDate >'2019-11-05' and tbb.taskLimitDate < '2019-11-24'  limit 1000";
SQLErrorTotal="SELECT count(*) as cnt1  FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion and tbb.taskLimitDate >'2019-11-05' and tbb.taskLimitDate < '2019-11-24'  limit 1000";

SQLShipment="SELECT *  FROM `pm_Shipment` ";
SQLNeworder="SELECT *  FROM `pm_neworder` ";
//遗留+未完成(扣客户取消)
SQLNotDone="SELECT `BTID`, `BTversion` ,`taskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,taskLimitDate ,LEFT(tbb.`taskDBE`, 50) as taskDBE_cut ,taskFinishDate,IPQCAuditDate,IPQCAuditResultText "+
 " FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb, (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba  "+
 " WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb   "+
 " where   (tbb.taskMakeDate <= ? and  (tbb.taskFinishDate >=? and tbb.taskFinishDate <=? ) and IPQCAuditResultText is null ) "+
 " OR ( (BTStatusText!='任务终止' AND BTStatusText!='废弃') AND (tbb.taskMakeDate >=? and tbb.taskMakeDate <=? )  and IPQCAuditResultText is null )  ";
//  (tbb.taskMakeDate <= '2020-03-14' and  (tbb.taskFinishDate >='2020-03-14' and tbb.taskFinishDate <='2020-03-20' ) and IPQCAuditResultText is null )
//  OR ( (tbb.taskMakeDate >='2020-03-14' and tbb.taskMakeDate <='2020-03-20')  and IPQCAuditResultText is null ) 

//  `updateReason` 有问题
//J1220 SQLLateList="Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs` ,`applyDate`,  `limitDate`,LEFT(tbb.`topic`, 25) as topic_cut , `WFEndDate`, `auditOpinion` ,`stopReason` ,`auditDate`   from `ppm_bills_plan` tbb where tbb.applyDate >? and tbb.applyDate < ? and tbb.LimitDate > tbb.auditDate ";

// SQLLateList="Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs` ,`applyDate`,  `limitDate`,LEFT(tbb.`topic`, 25) as topic_cut , `WFEndDate`, `auditOpinion` ,`stopReason` ,`auditDate`,"+
// " tbc.emailDate from `ppm_bills_plan` tbb   LEFT JOIN (SELECT * FROM `ppm_bills_pbh`  ) tbc ON tbb.BPID=tbc.pbhBPID where tbc.emailDate > tbb.limitDate and tbb.applyDate >? and tbb.applyDate < ?  ";
SQLLateList="Select (CASE taskSortTypeText WHEN 'DSP任务单' THEN taskFinishDate  END ) as  DSPFinishDate ,(CASE taskSortTypeText WHEN 'HMI任务单' THEN taskFinishDate  END ) as  HMIFinishDate , `BPID`,`CTRName`, BTID, taskFinishDate,taskSortTypeText, `PGEMaker`,`taskStaffs` ,`applyDate`,  `limitDate`,LEFT(tbb.`topic`, 25) as topic_cut , `WFEndDate`, `auditOpinion` ,`stopReason` ,`auditDate` from `ppm_bills_plan` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, BTID,taskMakeDate,taskBPID,taskSortTypeText from ppm_bills_task  GROUP by BTID ) tbk   ON tbb.BPID=tbk.taskBPID  where  (taskFinishDate > tbb.limitDate ) and tbb.applyDate >? and tbb.applyDate <? order by BPID";

SQLPartsUp= "SELECT `DBID`, `Bill_ID`, `Customer_ID`, `Operate`, `Apply_Date`, `Limit_Date`,   `PaUp_ProdNo`,PaDown_ProdNo, `Parts_Name`, `Location`  FROM `ma_parts_detail` ";
 