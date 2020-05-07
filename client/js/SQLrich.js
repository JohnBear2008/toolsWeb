
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
//上周遗留未完成  + 延期未完成  (扣客户取消)
 
 SQLNotDone=
//  "SELECT `BTID`, `BTversion` ,`taskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,taskLimitDate ,LEFT(tbb.`taskDBE`, 50) as taskDBE_cut ,taskFinishDate,IPQCAuditDate,IPQCAuditResultText "+
//     " FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb,"+ 
//     " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
//     " where   (tbb.taskMakeDate <= ? and  (tbb.taskFinishDate >=? and tbb.taskFinishDate <=? ) and IPQCAuditResultText is null and taskType='A' ) "+
//     " OR ( (  BTStatusText!='任务终止' AND BTStatusText!='废弃' AND WFEndText!='终止归档' ) and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and  IPQCAuditResultText is null  and taskType='A')";
//  "SELECT `BTID`, `BTversion` ,`taskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,taskLimitDate ,LEFT(tbb.`taskDBE`, 50) as taskDBE_cut ,taskFinishDate,IPQCAuditDate,IPQCAuditResultText "+
//     " FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb,"+ 
//     " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
//     "     where ( taskMakeDate<=? and taskType='A' and "+
//     "   ( (taskFinishDate>=? and taskFinishDate<=?)  or (WFEndText is null and taskFinishDate is null) )"+
//     "   and (  IPQCAuditResultText is null  )	 )  "+
//     "   OR ( taskMakeDate>=? and taskMakeDate<=? and taskType='A'  and  ( BTStatus !=4 AND WFStatus!=0 ) and "+
//     "     ? > taskLimitDate and IPQCAuditResultText is null ) ";
   " SELECT `BTID`, `BTversion` ,`taskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,LEFT(`taskDBE`, 50) as taskDBE_cut ,taskLimitDate ,taskFinishDate,IPQCAuditDate,IPQCAuditResultText  "+
   " FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb, "+
   " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba  "+
	 " WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
   " where  (( taskType='A' and taskMakeDate>=? and taskMakeDate<=?) OR  "+
   " ( ( taskMakeDate<? and taskType='A'  "+
   " and ((taskFinishDate>=? and taskFinishDate<=?)  "+
   " or (WFEndText is null and taskFinishDate is null)) ) ) ) "+
   " and ((taskLimitDate<taskFinishDate  and taskStopDate is null) OR  (taskStopDate is null  and taskFinishDate is null and taskLimitDate< ? and WFEndText is null ) )	 ";


    SQLNotDone_t=
      "SELECT `BTID`, `BTversion` ,`taskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,taskLimitDate ,LEFT(tbb.`taskDBE`, 50) as taskDBE_cut ,taskFinishDate,IPQCAuditDate,IPQCAuditResultText "+
        " FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
        " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
        "     where ( taskMakeDate<=?  and "+
        "   ( (taskFinishDate>=? and taskFinishDate<=?)  or (WFEndText is null and taskFinishDate is null) )"+
        "   and (  IPQCAuditResultText is null  )	 )  "+
        "   OR ( taskMakeDate>=? and taskMakeDate<=?  and  ( BTStatus !=4 AND WFStatus!=0 ) and "+
        "     ? > taskLimitDate and IPQCAuditResultText is null ) ";
 
 
SQLLateList=
// "Select (CASE taskSortTypeText WHEN 'DSP任务单' THEN taskFinishDate  END ) as  DSPFinishDate ,(CASE taskSortTypeText WHEN 'HMI任务单' THEN taskFinishDate  END ) as  HMIFinishDate , `BPID`,`CTRName`, BTID, taskFinishDate,taskSortTypeText, `PGEMaker`,`taskStaffs` ,`applyDate`,  `limitDate`,LEFT(tbb.`topic`, 25) as topic_cut , `WFEndDate`, `auditOpinion` ,`stopReason` ,`auditDate` from `ppm_bills_plan` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, BTID,taskMakeDate,taskBPID,taskSortTypeText from ppm_bills_task  GROUP by BTID ) tbk   ON tbb.BPID=tbk.taskBPID  where  (taskFinishDate > tbb.limitDate ) and tbb.applyDate >? and tbb.applyDate <? order by BPID";
 " SELECT  BPID, limitDate,`taskStaffs` ,`applyDate`,`PGEMaker`,`CTRName`,LEFT(`topic`, 25) as topic_cut , `WFEndDate`, `stopReason` ,`emailDate` ,limitDate "+
 " FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END  "+
 " AS WFEndText  FROM `ppm_bills_plan` tbb,  "+
 " (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan`  GROUP BY BPID) tba  "+
 " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join  "+
 " (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+
 " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` "+
 " GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+
 " tb on ta.BPID=tb.pbhBPID ) A "+

 " where ( ( ( applyDate<? and emailDate>=? and emailDate<=?) "+
 " or (applyDate<? and emailDate is null and WFEndText is null) ) and limitDate<? and emailDate is null and WFEndText is null ) "+
 " OR (applyDate>=? and applyDate<=? and limitDate<? and emailDate is null and WFEndText is null )";
 

// " where ( ( ( applyDate<'2020-04-20' and emailDate>='2020-04-20' and emailDate<='2020-04-24') "+
// " or (applyDate<'2020-04-20' and emailDate is null and WFEndText is null) ) and limitDate<'2020-04-24' and emailDate is null and WFEndText is null ) "+
// " OR (applyDate>='2020-04-20' and applyDate<='2020-04-24' and limitDate<'2020-04-24' and emailDate is null and WFEndText is null )";


//  where (( ( applyDate<'2020-04-20' and emailDate>='2020-04-20' and emailDate<='2020-04-24')
//  or (applyDate<'2020-04-20' and emailDate is null and WFEndText is null) )  and emailDate is null   and WFEndText is null)
//  OR (applyDate>='2020-04-20' and applyDate<='2020-04-24' and emailDate is null   and WFEndText is null)

//  where  ( applyDate>='2020-03-01' and applyDate <='2020-03-31'   and  '2020-04-26' > LimitDate and emailDate is  null and  WFEndDate is NUll  and WFEndText is NULL )
//  OR (( applyDate<'2020-03-01' and emailDate>='2020-03-01' and emailDate<='2020-03-31' and '2020-04-26' > LimitDate and  WFEndDate is NUll  and WFEndText is NULL )
//  or (applyDate<'2020-03-01' and emailDate is null and WFEndText is null  and '2020-04-26' > LimitDate and  WFEndDate is NUll  and WFEndText is NULL )
//  )
SQLLateList_t=
" SELECT  BPID, limitDate,`taskStaffs` ,`applyDate`,`PGEMaker`,`CTRName`,LEFT(`topic`, 25) as topic_cut , `WFEndDate`, `stopReason` ,`PBHAuditDate` ,limitDate "+
" FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END  "+
" AS WFEndText  FROM `ppm_bills_plan_t` tbb,  "+
" (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+
" WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join  "+
" (SELECT tbc.pbhBPID,tbc.PBHAuditDate  FROM `ppm_bills_pbh_t` tbc, "+
" (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh_t` "+
" GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+
" tb on ta.BPID=tb.pbhBPID ) A "+
" where (( applyDate<? and PBHAuditDate>=? and PBHAuditDate<=?) "+
" or (applyDate<? and PBHAuditDate is null and WFEndText is null)) "+
" and PBHAuditDate is null  OR (applyDate>=? and applyDate<=? and PBHAuditDAte is null and WFEndText is null) ";




// " where (( applyDate<'2020-01-01' and PBHAuditDate>='2020-01-01' and PBHAuditDate<='2020-04-24') "+
// " or (applyDate<'2020-01-01' and PBHAuditDate is null and WFEndText is null)) "+
// " and PBHAuditDate is null  OR (applyDate>='2020-01-01' and applyDate<='2020-04-24' and PBHAuditDAte is null and WFEndText is null) ";

// " where ( applyDate>=? and applyDate<=?  and ? > LimitDate and PBHAuditDate is  null and  WFEndDate is NUll  and WFEndText is NULL ) "+
// " OR (( applyDate<? and PBHAuditDate>=? and PBHAuditDate<=? and ? > LimitDate and  WFEndDate is NUll  and WFEndText is NULL ) "+
// " OR (applyDate<? and PBHAuditDate is null and WFEndText is null  and ? > LimitDate and  WFEndDate is NUll  and WFEndText is NULL  )) ";
 
SQLPartsUp= "SELECT `DBID`, `Bill_ID`, `Customer_ID`, `Operate`, `Apply_Date`, `Limit_Date`,   `PaUp_ProdNo`,PaDown_ProdNo, `Parts_Name`, `Location`  FROM `ma_parts_detail` ";
 