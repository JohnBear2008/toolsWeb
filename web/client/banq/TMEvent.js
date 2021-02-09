document.onkeydown = function (eventTag) {
    var event = eventTag || windows.event;
    var e = event.srcElement || event.target;
    if (event.keyCode == 88) {
        layer.msg(' 按下 X 关闭....');
        $('#pptwindow').window('close'); 
    }
    if (event.keyCode == 13) {
        searchFile();
        return false;
    }
}
