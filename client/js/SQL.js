/**
 *SQL.js
 *定义系统中固定的SQL语句,返回指定值
 */


//定义系统常用的SQL语句,用全局变量
SQLDBMHESystems = "select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `ppm_systems`";

SQLDBCustomers = "select * from `ppm_customers`";

SQLDBMachines = "select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `ppm_machines`";

SQLSRCustomers = "select DBID,concat_ws('-',FTYID,FTYName) as selectTitle from ppm_customers where status=1";

SQLSRMachines = "select DBID,concat_ws('-',MHEType,MHEName) as selectTitle from ppm_machines where status=1";

//SQLSRSystems="select DBID,concat_ws('-',STMType,model) as selectTitle from ppm_systems where status=1";
SQLSRSystems = "select DBID,concat_ws('-',sort,STMType,model,catalog) as selectTitle from ppm_systems";

SQLSRSystemsBind = "select DBID,concat_ws('-',belong,STMType,model,catalog) as selectTitle from ppm_systems where status=1";

SQLSRStaffs = "select DBID,staffName as selectTitle from ppm_staffs where status=1";

SQLSRStaffsFilter = "select DBID,staffName as selectTitle from ppm_staffs";


SQLSRStaffsBind = "select DBID,concat_ws('-',groupLabel,staffName) as selectTitle from ppm_staffs where status=1";

SQLSRRoles = "select DBID,roleName as selectTitle from ppm_roles where status=1";

// SQLTableBillsDBCenter="SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText  FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE (WFStatus=0 OR WFStatus=100) GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) A ";

// SQLTableBillsDBCenter_T="SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE (WFStatus=0 OR WFStatus=100) GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) A ";

SQLTableBillsTrack = "SELECT * FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.PLDStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PLDStatusText  FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.BPTBPID,tbd.BPTVersion,CASE tbd.BPTStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID LEFT JOIN (SELECT tbh.fqcBPID,tbh.FQCVersion,FQCResultText  FROM `ppm_bills_fqc` tbh,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbg WHERE tbh.fqcBPID=tbg.fqcBPID AND tbh.FQCVersion=tbg.maxFQCVersion) tbi ON tbi.fqcBPID=tbe.BPID  LEFT JOIN (SELECT tbk.pbhBPID,tbk.PBHVersion,CASE tbk.PBHStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PBHStatusText,CASE tbk.emailResult WHEN 0 THEN '未发邮件' WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' END AS emailResultText,tbk.emailDate  FROM `ppm_bills_pbh` tbk,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` GROUP BY pbhBPID) tbj WHERE tbk.pbhBPID=tbj.pbhBPID AND tbk.PBHVersion=tbj.maxPBHVersion) tbl ON tbe.BPID=tbl.pbhBPID) A";


SQLTableBillsTrack_T = "SELECT * FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.PLDStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PLDStatusText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND WFStatus<>100 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.BPTBPID,tbd.BPTVersion,CASE tbd.BPTStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID LEFT JOIN (SELECT tbh.fqcBPID,tbh.FQCVersion,FQCResultText  FROM `ppm_bills_fqc` tbh,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbg WHERE tbh.fqcBPID=tbg.fqcBPID AND tbh.FQCVersion=tbg.maxFQCVersion) tbi ON tbi.fqcBPID=tbe.BPID  LEFT JOIN (SELECT tbk.pbhBPID,tbk.PBHVersion,CASE tbk.PBHStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS PBHStatusText,CASE tbk.emailResult WHEN 0 THEN '未发邮件' WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' END AS emailResultText  FROM `ppm_bills_pbh_t` tbk,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh_t` GROUP BY pbhBPID) tbj WHERE tbk.pbhBPID=tbj.pbhBPID AND tbk.PBHVersion=tbj.maxPBHVersion) tbl ON tbe.BPID=tbl.pbhBPID) A";


SQLTableBillsPLD = "SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND C.WFStatus<>100 ) A ";

SQLTableBillsPLD_T = "SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan_t` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND C.WFStatus<>100) A ";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM `ppm_bills_plan` A, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) B WHERE A.BPID=B.billBPID AND A.version=B.billVersion";

SQLTableBillsTaskFrom = "SELECT A.* FROM ( SELECT ta.*,CASE WHEN taskSortType='H' THEN '蒋伟贞' WHEN (taskSortType='D' AND taskModel LIKE  '%HT%') THEN '李斌' ELSE '许静静' END AS TPLDMaker FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult=1 ) ta WHERE ta.taskType<>'A' AND ta.T_BPID IS NULL) A";


SQLTableBillsBPT = "SELECT A.* FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion,tbb.maker AS PLDMaker FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1) tbf  ON tbe.BPID=tbf.BPTBPID) A";

//计划单更新版本未审核时其他流程单据加载
//SQLTableBillsBPT="SELECT A.* FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion AND tbb.PLDStatus=1 ) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '已填单' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID) A";

SQLTableBillsBPT_T = "SELECT A.* FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.BPIDfrom AS PLDBPIDfrom,tbb.BTIDfrom AS PLDBTIDfrom,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion,tbb.maker AS PLDMaker,tbb.auditor AS PLDAuditor FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1) tbf  ON tbe.BPID=tbf.BPTBPID) A";

//SQLTableBillsBPT_T="SELECT A.* FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.BTIDfrom AS PLDBTIDfrom,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe LEFT JOIN  (SELECT tbd.*  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion) tbf  ON tbe.BPID=tbf.BPTBPID) A";

//SQLTableBillsBPT="SELECT G.*,A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END " +
//    "AS BPTAuditResultText FROM (SELECT * FROM (SELECT E.BPID AS PLDBPID,E.version AS PLDVersion,E.CTRName AS PLDCTRName,E.PGEMaker " +
//    "AS PLDPGEMaker,E.MHEName AS PLDMHEName,E.model AS PLDModel,E.limitDate AS PLDLimitDate,E.OGNSystemVersion AS PLDOGNSystemVersion " +
//    "FROM `ppm_bills_plan` E WHERE auditResult=1 AND WFStatus<>0 ) F,(SELECT BPID,MAX(version) AS maxVersion FROM `ppm_bills_plan` GROUP BY BPID) D " +
//    "WHERE F.PLDBPID=D.BPID AND F.PLDVersion=D.maxVersion) G LEFT JOIN (SELECT C.*,C.version AS BPTVersion FROM `ppm_bills_blueprint` C," +
//    "(SELECT BPTID AS maxBPTID,MAX(version) AS maxVer FROM `ppm_bills_blueprint` GROUP BY BPTID)B WHERE C.version=B.maxVer AND C.BPTID=B.maxBPTID) A " +
//    "ON G.PLDBPID= A.BPTID";
//SQLTableBillsBPT="SELECT A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END AS BPTAuditResultText,B.DBID AS PLDDBID,B.BPID,B.version AS PLDVersion,B.CTRName ,B.PGEMaker,B.limitDate,B.MHEName AS PLDMHEName,B.model AS PLDModel,B.OGNSystemVersion FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND auditResult=1) B LEFT JOIN ppm_bills_blueprint A ON A.BPID=B.BPID";

//SQLTableBillsTask="SELECT *,CASE taskType WHEN 'T1' THEN 'DSP任务' WHEN 'T2' THEN 'HMI任务' WHEN 'T3' THEN '内核任务' ELSE '未定义' END AS taskTypeText,CASE BTAuditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '新增' END AS BTAuditResultText FROM ppm_bills_task"



SQLTableBillsTask = "SELECT A.*  FROM (SELECT tbb.* FROM `ppm_bills_task` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A";

SQLTableBillsTask_T = "SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A";


//SQLTableBillsTaskRecord="SELECT A.* FROM (SELECT tbb.*,CASE tbb.recordNum WHEN 0 THEN '未登记' ELSE '已登记' END AS recordText FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` " +
//    "GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND ((tbb.BTAcceptResult IS NOT NULL AND taskType='A') OR (tbb.BTAcceptResult=0 AND taskType<>'A') ) AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 ) A";

SQLTableBillsTaskRecord = "SELECT A.* FROM (SELECT  tbc.*,tbd.recordStatus,tbd.recordAuditor FROM (SELECT tbb.* FROM `ppm_bills_task` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion " +
    "AND ((tbb.BTAcceptResult IS NOT NULL AND taskType='A') OR (tbb.BTAcceptResult=0 AND taskType<>'A') ) AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 )tbc " +
    "LEFT JOIN `ppm_bills_taskrecord` tbd ON tbc.BTID= tbd.BTID AND tbc.BTVersion =tbd.BTVersion) A"

SQLTableBillsTaskRecord_T = "SELECT A.* FROM (SELECT  tbc.*,tbd.recordStatus,tbd.recordAuditor FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion " +
    "AND tbb.BTAcceptResult IS NOT NULL AND taskType<>'A' AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 )tbc " +
    "LEFT JOIN `ppm_bills_taskrecord_t` tbd ON tbc.BTID= tbd.BTID AND tbc.BTVersion =tbd.BTVersion) A";


//SQLTableBillsTaskRecord_T="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` " +
//"GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult IS NOT NULL ) A";


SQLTableBillsTaskIPQC = "SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion" +
    " FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0 AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 ) A";

SQLTableBillsTaskIPQC_T = "SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion" +
    " FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0 AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 ) A";


//SQLTableBillsTaskIPQC_T="SELECT A.* FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion" +
//" FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0) A";

SQLTableBillsFQC = "SELECT A.* FROM (SELECT tbc.FQCStaff,tbc.BPID,tbc.version,tbc.maker,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE tbc.WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
    " WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText," +
    "tbd.* FROM " +
    "(SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba " +
    "WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd " +
    "ON tbc.BPID=tbd.fqcBPID) A";

SQLTableBillsFQC_T = "SELECT A.* FROM (SELECT tbc.FQCStaff,tbc.BPID,tbc.version,tbc.maker,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE tbc.WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
    " WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText," +
    "tbd.* FROM " +
    "(SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba " +
    "WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc_t` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc_t` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd " +
    "ON tbc.BPID=tbd.fqcBPID) A";


//SQLTableBillsFQC_T="SELECT A.* FROM (SELECT tbc.BPID,tbc.version,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
//" WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText," +
//"tbd.*,CASE tbd.FQCResult*tbd.FQCAuditResult WHEN 1 THEN '测试通过' WHEN 2 THEN '出货后修正' WHEN 3 THEN '立即修正'  ELSE '未确认' END AS FQCResultText FROM " +
//"(SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba " +
//"WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100  ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc_t` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc_t` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd " +
//"ON tbc.BPID=tbd.fqcBPID) A";

SQLTableBillsPBH = "SELECT A.* FROM (SELECT tbc.PGEMaker as maker,tbc.BPID,tbc.version,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE FQCRequest WHEN 1 THEN '有' ELSE '无' END AS FQCRequestText,CASE FQCPass WHEN 1 THEN '通过' ELSE '未通过' END AS FQCPassText," +
    "tbd.*,CASE tbd.emailResult WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' WHEN 3 THEN '待更新重发' ELSE '未发邮件' END AS PBHResultText FROM (SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion " +
    "AND ((tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone>0 AND tbb.FQCRequest=tbb.FQCPass ) OR tbb.pbhFast=1 ) AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100  ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_pbh` tbf,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh` GROUP BY pbhBPID) tbe WHERE tbf.pbhBPID=tbe.pbhBPID AND tbf.PBHVersion=tbe.maxPBHVersion) tbd ON tbc.BPID=tbd.pbhBPID) A"

SQLTableBillsPBH_T = "SELECT A.* FROM (SELECT tbc.BPIDfrom,tbc.BTIDfrom,tbc.PGEMaker as maker,tbc.BPID,tbc.version,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE FQCRequest WHEN 1 THEN '有' ELSE '无' END AS FQCRequestText,CASE FQCPass WHEN 1 THEN '通过' ELSE '未通过' END AS FQCPassText," +
    "tbd.*,CASE tbd.emailResult WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' WHEN 3 THEN '待更新重发' ELSE '未发邮件' END AS PBHResultText FROM (SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion " +
    "AND ((tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone>0 AND tbb.FQCRequest=tbb.FQCPass ) OR tbb.pbhFast=1 ) AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100  ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_pbh_t` tbf,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh_t` GROUP BY pbhBPID) tbe WHERE tbf.pbhBPID=tbe.pbhBPID AND tbf.PBHVersion=tbe.maxPBHVersion) tbd ON tbc.BPID=tbd.pbhBPID) A"

// SQLTableBillsPBH_T="SELECT A.* FROM (SELECT tbc.maker,tbc.BPID,tbc.BTIDfrom,tbc.BPIDfrom,tbc.version,tbc.limitDate,tbc.taskNum,tbc.taskNumDone,tbc.applyDate,tbc.MHEName,tbc.modelD,tbc.modelH,tbc.PGEMaker,tbc.topic,tbc.detail,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回'" +
// " WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' WHEN 25 THEN '任务单-处理中' WHEN 30 THEN '任务单-处理完成' WHEN 35 THEN 'FQC单-未通过' WHEN 40 THEN 'FQC单-通过' END  AS  WFStatusText,CASE FQCRequest WHEN 1 THEN '有' ELSE '无' END AS FQCRequestText,CASE FQCPass WHEN 1 THEN '通过' ELSE '未通过' END AS FQCPassText," +
// "tbd.*,CASE tbd.emailResult WHEN 1 THEN '已发系统邮件' WHEN 2 THEN '已发自定义邮件' ELSE '未发邮件' END AS PBHResultText FROM " +
// "(SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba " +
// "WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.FQCPass=1 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100  ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_pbh_t` tbf,(SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh_t` GROUP BY pbhBPID) tbe WHERE tbf.pbhBPID=tbe.pbhBPID AND tbf.PBHVersion=tbe.maxPBHVersion) tbd " +
// "ON tbc.BPID=tbd.pbhBPID) A";

SQLTableTestContents = "SELECT * FROM `ppm_testcontents` ";

SQLCodeAuditRecord = "select * from `ppm_bills_codeaudit`"

SQLGetEMails = "SELECT email,contact,contacts FROM `ppm_customers`";

SQLGetPLDNum = "SELECT COUNT(1) AS GPLDNum FROM `ppm_bills_plan` WHERE TO_DAYS(makeDate) = TO_DAYS(NOW()) AND version=0";

SQLGetPLDNum_T = "SELECT COUNT(1) AS GPLDNum FROM `ppm_bills_plan_t` WHERE TO_DAYS(makeDate) = TO_DAYS(NOW()) AND version=0";

SQLgetBindPLDdata = "SELECT A.* FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion ) A";

SQLTaskRecords = "SELECT * FROM `ppm_bills_taskrecord`";

SQLTaskRecords_T = "SELECT * FROM `ppm_bills_taskrecord_t`";

SQLGetAuthorities = "SELECT roleAuthorities FROM `ppm_staffs` ta LEFT JOIN `ppm_roles` tb ON ta.staffRole=tb.roleName";

SQLGetDataBinds = "SELECT bindsInfo FROM `ppm_dbbinds`";

SQLGetCTRBinds = "SELECT * FROM `ppm_customerbinds` ";

SQLCTRBindsCount = "SELECT Count(1) AS CountNum,CTRName,CTRVal FROM `ppm_customerbinds` GROUP BY CTRVal ";

SQLGetOldBillInfo = "SELECT * FROM `pm_bills`";

SQLGetBindsInfo = "SELECT * FROM `ppm_customerbinds`";

SQLGetUpAuditor = "SELECT DATEDIFF(NOW(),entryDate) AS entryDays,upAuditor FROM `ppm_staffs`";

SQLGetEntryDays = "SELECT DATEDIFF(NOW(),entryDate) AS entryDays FROM `ppm_staffs`";


SQLTableTasksDBCenter = "SELECT A.*  FROM (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A";

SQLTableTasksDBCenter_T = "SELECT A.*  FROM (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb," +
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A";


SQLTableBillsDBCenter = "SELECT * FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText  FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan`  GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join " +
    " (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`  GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) tb on ta.BPID=tb.pbhBPID ) A";

SQLTableBillsDBCenter_T = "SELECT * FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join " +
    " (SELECT tbc.pbhBPID,tbc.PBHAuditDate  FROM `ppm_bills_pbh_t` tbc, (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh_t`  GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) tb on ta.BPID=tb.pbhBPID ) A";

// SQLTableBillsDBCenter_T = "SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) A ";