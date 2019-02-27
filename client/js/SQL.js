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

SQLTableBillsTrack="SELECT A.*,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回' WHEN 10 THEN '计划单-审核通过' WHEN 19 THEN '方案单-审核驳回' WHEN 20 THEN '方案单-审核通过' END AS  WFStatusText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";

SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A ";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";
//SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM `ppm_bills_plan` A, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) B WHERE A.BPID=B.billBPID AND A.version=B.billVersion";

SQLTableBillsBPT="SELECT G.*,A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END AS BPTAuditResultText FROM (SELECT * FROM (SELECT E.BPID AS PLDBPID,E.version AS PLDVersion,E.CTRName AS PLDCTRName,E.PGEMaker AS PLDPGEMaker,E.MHEName AS PLDMHEName,E.model AS PLDModel,E.limitDate AS PLDLimitDate,E.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` E WHERE auditResult=1 AND WFStatus<>0 ) F,(SELECT BPID,MAX(version) AS maxVersion FROM `ppm_bills_plan` GROUP BY BPID) D WHERE F.PLDBPID=D.BPID AND F.PLDVersion=D.maxVersion) G LEFT JOIN (SELECT C.*,C.version AS BPTVersion FROM `ppm_bills_blueprint` C,(SELECT BPTID AS maxBPTID,MAX(version) AS maxVer FROM `ppm_bills_blueprint` GROUP BY BPTID)B WHERE C.version=B.maxVer AND C.BPTID=B.maxBPTID) A ON G.PLDBPID= A.BPTID";
//SQLTableBillsBPT="SELECT A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END AS BPTAuditResultText,B.DBID AS PLDDBID,B.BPID,B.version AS PLDVersion,B.CTRName ,B.PGEMaker,B.limitDate,B.MHEName AS PLDMHEName,B.model AS PLDModel,B.OGNSystemVersion FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND auditResult=1) B LEFT JOIN ppm_bills_blueprint A ON A.BPID=B.BPID";

//SQLTableBillsTask="SELECT *,CASE taskType WHEN 'T1' THEN 'DSP任务' WHEN 'T2' THEN 'HMI任务' WHEN 'T3' THEN '内核任务' ELSE '未定义' END AS taskTypeText,CASE BTAuditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '新增' END AS BTAuditResultText FROM ppm_bills_task"
SQLTableBillsTask="SELECT A.*,CASE A.taskType WHEN 'T1' THEN 'DSP任务' WHEN 'T2' THEN 'HMI任务' WHEN 'T3' THEN '内核任务' END AS taskTypeText,CASE A.BTAcceptResult WHEN 0 THEN '待确认' WHEN 1 THEN '已确认' WHEN 2 THEN '已拒绝' END AS BTAcceptResultText,CASE A.recordAuditResult WHEN 0 THEN '待审核' WHEN 1 THEN '审核通过' ELSE '无记录' END AS recordAuditResultText FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A";

SQLTableBillsTaskIPQC="SELECT A.*,CASE A.taskType WHEN 'T1' THEN 'DSP任务' WHEN 'T2' THEN 'HMI任务' WHEN 'T3' THEN '内核任务' END AS taskTypeText,CASE A.BTAcceptResult WHEN 0 THEN '待确认' WHEN 1 THEN '已确认' WHEN 2 THEN '已拒绝' END AS BTAcceptResultText,CASE A.recordAuditResult WHEN 0 THEN '待审核' WHEN 1 THEN '审核通过' ELSE '无记录' END AS recordAuditResultText,CASE A.IPQCAuditResult WHEN 0 THEN '待审核' WHEN 1 THEN '审核通过' ELSE '无记录' END AS IPQCAuditResultText FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordAuditResult=1) A";
