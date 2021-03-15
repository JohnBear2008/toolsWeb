/**
 * T9标准库
 */
(function (win,doc) {

    const prefix = 'https://172.16.3.49:8000';
    const T9 = {
        getMaterial: async ({
            to,
            materialId
        }) => {
            console.log('sqlserver get', {
                to,
                materialId
            });
            let res = await $.ajax({
                method: 'get',
                url: prefix + "/api/T9/getMaterial",
                data: {
                    to,
                    materialId
                },
                success: function (data) {
                    console.log("getT9DataBySql data:", data);
                    return data;
                },
                error: function (error) {
                    console.log("getT9DataBySql error:", error);
                }
            });

            return res;
        }
    }
    win.T9 = T9;
}(window,document));