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

SQLTableBillsTrack="SELECT A.*,CASE WFStatus WHEN 1 THEN '计划单-未审核' WHEN 9 THEN '计划单-审核驳回' WHEN 10 THEN '计划单-审核通过' END AS  WFStatusText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";

SQLTableBillsPLD="SELECT A.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText,B.DBID AS fileDBID,B.fileKey,B.fileName FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 ) A LEFT JOIN `ppm_files_upload` B ON A.BPID=B.billID AND A.version=B.billVersion AND B.billName='ppm_bills_plan'";

SQLTableBillsBPT="SELECT A.*,CASE A.auditResult WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '无方案' END AS BPTStatusText,B.BPID,B.version AS PLDVersion,B.CTRName,B.PGEMaker,B.limitDate,B.MHEName AS PLDMHEName,B.model AS PLDModel FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND auditResult=1) B LEFT JOIN ppm_bills_blueprint A ON A.BPID=B.BPID";

SQLTableBillsTask="SELECT * FROM ppm_bills_task"