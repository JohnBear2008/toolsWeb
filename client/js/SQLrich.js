
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

//SQLNotDone="Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs`,  `applyDate`, `limitDate`,  LEFT(tbb.`topic`, 50) as topic_cut from `ppm_bills_plan` tbb where tbb.LimitDate >? and tbb.LimitDate < ? ";
SQLNotDone="Select `BTID`, `TaskCTRName`, `taskStaff`, `taskSortTypeText` ,`taskMakeDate` ,taskLimitDate , LEFT(tbb.`taskDBE`, 50) as taskDBE_cut  from `ppm_bills_task` tbb  where tbb.taskLimitDate >? and tbb.taskLimitDate < ? ";
//SQLLateList="Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs`,  `applyDate`, `limitDate`,  `makeDate`, auditDate,`PLDArea`,LEFT(tbb.`topic`, 256) as topic_cut from `ppm_bills_plan` tbb where tbb.LimitDate >? and tbb.LimitDate < ? ";

//  `updateReason` 有问题
SQLLateList="Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs` ,`applyDate`,  `limitDate`,LEFT(tbb.`topic`, 25) as topic_cut , `WFEndDate`, `auditOpinion` ,`stopReason` ,`auditDate`  from `ppm_bills_plan` tbb where tbb.LimitDate >? and tbb.LimitDate < ? and orderFrom='W' ";
//                     单号	   完成期限	   面板修改人	主机修改人	厂商	                    修改内容			 延期时间   	 延期原因	  面板完成日期	  主机完成日期
 