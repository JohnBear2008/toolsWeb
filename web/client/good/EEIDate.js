
function funNextDay(nday) {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayTime = now.getTime() + (nday) * oneDayLong;
    let monday = new Date(mondayTime);
    var dateFormat = monday.Format("yyyy-MM");
    return dateFormat;
}
function funNextDay2(nday) {
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayTime = now.getTime() + (nday) * oneDayLong;
    let monday = new Date(mondayTime);
    var dateFormat = monday.Format("yyyyMM") + '01';
    return dateFormat;
}
function nulReplaceTxt(passTxt, repword) {
    var ret = '';
    ret = (passTxt == null || passTxt == undefined) ? (repword) : passTxt;
    return ret;
}
function dateFormatConversion(nMon) {
    var latayesr = new Date().getFullYear() - 1;
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth(nMon);
    var date = currentYear + '-' + currentMonth + '-' + '01';
    if (currentMonth == 0) {
        currentYear = currentYear - 1;
        date = currentYear + 12 + '-';
    }
    return date;
}
function funFIYr(chooseDate , nMon) {   
    //tranARForm
    if((chooseDate == null || chooseDate == undefined || chooseDate.length<6 || nMon == null || nMon == undefined)){
        return '2020';
    }
    var yyyy = chooseDate.substr(0,4);
    var MM = chooseDate.substr(4,2);
    var dd = chooseDate.substr(6,2);
    // console.log("朴:" , yyyy, "昭" ,MM, "垠" ,dd);
    let monday = new Date(yyyy, MM, dd);
    monday.setDate(1);
    monday.setMonth(monday.getMonth() - nMon);
    var dateFormat = monday.Format("yyyy");
    return dateFormat;
}
function funFIMo(chooseDate , nMon) {   
    //tranARForm
    if((chooseDate == null || chooseDate == undefined || chooseDate.length<6  || nMon == null || nMon == undefined)){
        return '01';
    }
    var yyyy = chooseDate.substr(0,4);
    var MM = chooseDate.substr(4,2);
    var dd = chooseDate.substr(6,2);
    let monday = new Date(yyyy, MM, dd);
    monday.setDate(1);
    monday.setMonth(monday.getMonth() - nMon);
    var dateFormat = monday.Format("MM");
    return dateFormat;
}
function funPrevMon(chooseDate , nMon) {   
    //tranARForm
    //今日 20200928 输入1 得到这个月的1号日期  20200901
    //输入12 得到去年的1号日期  20201001
    if((chooseDate == null || chooseDate == undefined || chooseDate.length<6  || nMon == null || nMon == undefined)){
        return '20201201';
    }
    var yyyy = chooseDate.substr(0,4);
    var MM = chooseDate.substr(4,2);
    var dd = '01';
    var lastMonthDate = new Date(yyyy, MM, dd);
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - nMon);
    var dateFormat = lastMonthDate.Format("yyyyMMdd");
    return dateFormat;
}
function funPrevMonth(nMon) {
    //今日 20201211 输入1 得到上个月的日期  20201101
    // 输入2 得到上上个月的日期  20201001
    let oneDayLong = 24 * 60 * 60 * 1000;
    let now = new Date();
    let mondayTime = now.getTime() + (nMon) * oneDayLong;
    let monday = new Date(mondayTime);
    var dateFormat = monday.Format("yyyyMM") + '01';
    return dateFormat;
}
