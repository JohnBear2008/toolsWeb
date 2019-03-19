/**
 *SQL.js
 *定义系统中固定的SQL语句,返回指定值
 */


//定义系统常用的SQL语句,用全局变量
SQLDBMHESystems="select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `ppm_systems`";

SQLDBCustomers="select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `ppm_customers`";

SQLDBMachines="select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `ppm_machines`";

SQLSRCustomers="select DBID,concat_ws('-',FTYID,FTYName) as selectTitle from ppm_customers where status=1";

SQLSRMachines="select DBID,concat_ws('-',MHEType,MHEName) as selectTitle from ppm_machines where status=1";
	
SQLSRSystems="select DBID,concat_ws('-',STMType,model) as selectTitle from ppm_systems where status=1";

SQLSRStaffs="select DBID,staffName as selectTitle from ppm_staffs where status=1";

SQLTableBillsTrack="SELECT * FROM  (SELECT tbb.*,CASE tbb.PLDStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PLDStatusText  FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.BPTBPID,tbd.BPTVersion,CASE tbd.BPTStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID LEFT JOIN (SELECT tbh.fqcBPID,tbh.FQCVersion,CASE tbh.FQCStatus WHEN 0 THEN '已填单' WHEN 1 THEN '已通过' WHEN 2 THEN '出货后修正' WHEN 3 THEN '未通过' END AS FQCStatusText  FROM `ppm_bills_fqc` tbh,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbg WHERE tbh.fqcBPID=tbg.fqcBPID AND tbh.FQCVersion=tbg.maxFQCVersion) tbi ON tbi.fqcBPID=tbe.BPID  LEFT JOIN (SELECT tbk.pbhBPID,tbk.PBHVersion,CASE tbk.PBHStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PBHStatusText,CASE tbk.emailResult WHEN 0 THEN '未发邮件' WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' END AS emailResultText  FROM `ppm_bills_pbh` tbk,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` GROUP BY pbhBPID) tbj WHERE tbk.pbhBPID=tbj.pbhBPID AND tbk.PBHVersion=tbj.maxPBHVersion) tbl ON tbe.BPID=tbl.pbhBPID";


SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A ";

SQLTableBillsPLD_T="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan_t` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A ";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM `ppm_bills_plan` A, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) B WHERE A.BPID=B.billBPID AND A.version=B.billVersion";

SQLTableBillsTaskFrom="SELECT A.*,CASE A.taskSortType WHEN 'D' THEN 'DSP任务' WHEN 'H' THEN 'HMI任务' WHEN 'P' THEN 'PLC任务' WHEN 'C' THEN 'codesys任务' END AS taskSortTypeText," +
"CASE A.taskType WHEN 'A' THEN 'APP' WHEN 'K' THEN 'KERNEL' WHEN 'L' THEN 'LIB' WHEN 'O' THEN 'OS' END AS taskTypeText,CASE A.BTAcceptResult WHEN 0 THEN '未确认' WHEN 1 THEN '已确认' WHEN 2 THEN '已拒绝' END AS BTAcceptResultText,CASE A.recordAuditResult WHEN 0 " +
"THEN '待审核' WHEN 1 THEN '审核通过' ELSE '未记录' END AS recordAuditResultText,CASE A.IPQCAuditResult WHEN 0 THEN 'IPQC未审核' WHEN 1 THEN" +
" 'IPQC已审核' ELSE '未记录' END AS IPQCAuditResultText,CASE A.IPQCResult*A.IPQCAuditResult WHEN 1 THEN '测试通过' WHEN 2 THEN '测试未通过' " +
" ELSE '未完结' END AS IPQCResultText FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` " +
"GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult IS NOT NULL ) A WHERE A.taskType<>'A' AND A.BTAcceptResult=1 AND A.T_BPID IS NULL";



SQLTableBillsBPT="SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.model AS PLDModel,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID";

SQLTableBillsBPT_T="SELECT * FROM  (SELECT tbb.BPID,tbb.BTIDfrom AS PLDBTIDfrom,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.model AS PLDModel,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.*  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID";




//SQLTableBillsBPT="SELECT G.*,A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END " +
//    "AS BPTAuditResultText FROM (SELECT * FROM (SELECT E.BPID AS PLDBPID,E.version AS PLDVersion,E.CTRName AS PLDCTRName,E.PGEMaker " +
//    "AS PLDPGEMaker,E.MHEName AS PLDMHEName,E.model AS PLDModel,E.limitDate AS PLDLimitDate,E.OGNSystemVersion AS PLDOGNSystemVersion " +
//    "FROM `ppm_bills_plan` E WHERE auditResult=1 AND WFStatus<>0 ) F,(SELECT BPID,MAX(version) AS maxVersion FROM `ppm_bills_plan` GROUP BY BPID) D " +
//    "WHERE F.PLDBPID=D.BPID AND F.PLDVersion=D.maxVersion) G LEFT JOIN (SELECT C.*,C.version AS BPTVersion FROM `ppm_bills_blueprint` C," +
//    "(SELECT BPTID AS maxBPTID,MAX(version) AS maxVer FROM `ppm_bills_blueprint` GROUP BY BPTID)B WHERE C.version=B.maxVer AND C.BPTID=B.maxBPTID) A " +
//    "ON G.PLDBPID= A.BPTID";
//SQLTableBillsBPT="SELECT A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END AS BPTAuditResultText,B.DBID AS PLDDBID,B.BPID,B.version AS PLDVersion,B.CTRName ,B.PGEMaker,B.limitDate,B.MHEName AS PLDMHEName,B.model AS PLDModel,B.OGNSystemVersion FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND auditResult=1) B LEFT JOIN ppm_bills_blueprint A ON A.BPID=B.BPID";

//SQLTableBillsTask="SELECT *,CASE taskType WHEN 'T1' THEN 'DSP任务' WHEN 'T2' THEN 'HMI任务' WHEN 'T3' THEN '内核任务' ELSE '未定义' END AS taskTypeText,CASE BTAuditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '新增' END AS BTAuditResultText FROM ppm_bills_task"
SQLTableBillsTask="SELECT A.*  FROM (SELECT tbb.* FROM `ppm_bills_task` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A";

SQLTableBillsTask_T="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb," +
"(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A";


SQLTableBillsTaskRecord="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` " +
    "GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult IS NOT NULL ) A";



SQLTableBillsTaskRecord_T="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` " +
"GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult IS NOT NULL ) A";


SQLTableBillsTaskIPQC="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion" +
    " FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0) A";

SQLTableBillsFQC="SELECT tbc.*,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
    " WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText," +
    "tbd.*,CASE tbd.FQCResult*tbd.FQCAuditResult WHEN 1 THEN '测试通过' WHEN 2 THEN '出货后修正' WHEN 3 THEN '立即修正'  ELSE '未确认' END AS FQCResultText FROM " +
    "(SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba " +
    "WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.WFStatus <> 0 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd " +
    "ON tbc.BPID=tbd.fqcBPID";

SQLTableBillsPBH="SELECT tbc.*,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
" WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText,CASE FQCRequest WHEN 1 THEN '有' ELSE '无' END AS FQCRequestText,CASE FQCPass WHEN 1 THEN '通过' ELSE '未通过' END AS FQCPassText," +
"tbd.*,CASE tbd.emailResult WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' ELSE '未发邮件' END AS PBHResultText FROM " +
"(SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba " +
"WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.WFStatus <> 0 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_pbh` tbf,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` GROUP BY pbhBPID) tbe WHERE tbf.pbhBPID=tbe.pbhBPID AND tbf.PBHVersion=tbe.maxPBHVersion) tbd " +
"ON tbc.BPID=tbd.pbhBPID";


SQLTableTestContents="SELECT * FROM `ppm_testcontents`";

SQLGetEMails="SELECT email,contact,contacts FROM `ppm_customers`";

SQLGetPLDNum="SELECT COUNT(1) AS GPLDNum FROM `ppm_bills_plan` WHERE TO_DAYS(makeDate) = TO_DAYS(NOW())";


SQLgetBindPLDdata="SELECT A.* FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion ) A";

SQLTaskRecords="SELECT * FROM `ppm_bills_taskrecord`";



