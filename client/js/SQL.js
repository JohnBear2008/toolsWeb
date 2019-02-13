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

SQLTableBillPlan="SELECT c.*,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText,d.DBID AS fileDBID,d.fileKey,d.fileName FROM (SELECT a.* FROM `ppm_bills_plan` a, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) b WHERE a.BPID = b.billBPID AND a.version = b.billVersion) c LEFT JOIN `ppm_files_upload` d ON c.BPID=d.billID AND c.version=d.billVersion AND d.billName='ppm_bills_plan'";