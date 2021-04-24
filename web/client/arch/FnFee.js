//FnFee.js
function searchByDate() {
    if (CapMode == 'A') {
        sleepFile('2');
    } else if (CapMode == 'B') {
        sleepTravel('2');
    } else {
        sleepFile('2');
    }
    CapDate = '1';
}

$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});
