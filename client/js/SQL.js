/**
 *SQL.js
 *定义系统中固定的SQL语句,返回指定值
 */


//定义系统常用的SQL语句,用全局变量
SQLBDMHESystems="select *, case status  when 1 then '正常' when 2 then '作废'  end as statustext from `pm_systems`";



SQLTableBillPlan="select tA.*,tB.fileKey,tB.fileName from `pm_bills_plan` tA left join `pm_files_upload` tB on tA.BPID=tB.billID and tB.billName='pm_bills_plan'";