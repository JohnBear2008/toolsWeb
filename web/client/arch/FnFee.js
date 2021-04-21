//FnFee.js
function searchByDate() {
    if (CapMode == 'A') {
        searchFile('2');
    } else if (CapMode == 'B') {
        searchTravel('2');
    } else {
        searchFile('2');
    }
    CapDate = '1';
}

$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});
