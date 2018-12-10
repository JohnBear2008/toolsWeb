select DDKey,CN from toolsweb.hmiprint_moni
    where Manufacturer='STD' AND CtrlType='0000' AND MachType='00000000' AND Reserved0='0' AND Reserved1='0' AND Reserved2='0' AND Reserved3='0' AND Reserved4='0'
         AND DDKey not in
        (
        select DDKey from toolsweb.hmiprint_moni 
        WHERE Manufacturer='7AK' AND CtrlType='0000' AND MachType='00000000'
         AND Reserved0='0' AND Reserved1='0' AND Reserved2='0' AND Reserved3='0' AND Reserved4='0' 
         )
UNION ALL
select DDKey,CN from toolsweb.hmiprint_moni         WHERE Manufacturer='7AK' AND CtrlType='0000' AND MachType='00000000'
         AND Reserved0='0' AND Reserved1='0' AND Reserved2='0' AND Reserved3='0' AND Reserved4='0'