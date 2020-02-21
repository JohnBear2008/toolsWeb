 
SQLAutoParts= "SELECT `DBID`, `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`  FROM `auto_parts` where Parts_Class LIKE ?  ";
SQLPartsAgree= "SELECT `DBID`, `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`  FROM `auto_rec_parts` where BILL_ID = ? OR Parts_Code = ? and Parts_status='0'  ";
SQLPartsAgreeSelf= "SELECT `DBID`, `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`  FROM `auto_rec_parts` where Parts_Apply_Date >= ? AND Parts_Apply_Date <= ? and Parts_status='0'   ";
SQLPartsAbsolete= "SELECT `DBID`, `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`  FROM `auto_parts` where BILL_ID = ? OR Parts_Code = ?    ";
