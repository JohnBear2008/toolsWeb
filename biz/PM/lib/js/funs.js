/**
 *将json 数据中的null 转换为空值,方便前端显示
 *
 * @param {*} json
 */
const nullToEmpty = (json) => {
    for (const p in json) {
        if (json[p] === null) {
            json[p] = '';
        }
    }
    return json;
}

module.exports = {
    nullToEmpty
}