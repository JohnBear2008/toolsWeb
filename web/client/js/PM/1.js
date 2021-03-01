//发送钉钉消息-----------
const sendDingMsg = ({
	at,
	msg
}) => {
	$.ajax({
		method: 'post',
		url: '/app/FincTM/sendDingTalk',
		data: {
			at,
			msg
		},
		success: function (data, textStatus) {
			console.log(data, textStatus);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest, textStatus, errorThrown);
		}
	});
}