/**
 * 字符串首字母小写
 * @param {String} str
 * @returns {String}
 */
export function firstLowerCase(str) {
    return str.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toLowerCase() + $2);
}