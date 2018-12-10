
        WITH info AS 
        ( 
              SELECT DDKey FROM hmiprint_moni 
              WHERE Manufacturer="7AK" AND CtrlType="0000" AND MachType="00000000" 
              AND Reserved0="0" AND Reserved1="0" AND Reserved2="0" AND Reserved3="0" AND Reserved4="0" 
        ) 

        SELECT DDKey,CN,Visb,Prec FROM hmiprint_moni 
              WHERE DDKey NOT IN ( SELECT DDKey FROM info ) 
                  AND Manufacturer="STD" AND CtrlType="0000" AND MachType="00000000" 
                  AND Reserved0="0" AND Reserved1="0" AND Reserved2="0" AND Reserved3="0" AND Reserved4="0" 

        UNION ALL 
        SELECT DDKey,CN,Visb,Prec FROM hmiprint_moni 
              WHERE Manufacturer="7AK" AND CtrlType="0000" AND MachType="00000000" 
              AND Reserved0="0" AND Reserved1="0" AND Reserved2="0" AND Reserved3="0" AND Reserved4="0" 