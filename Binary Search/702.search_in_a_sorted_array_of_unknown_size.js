/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
     // Exponetional expand

    if (reader === null) return -1;
    let index = 0;
    let exponetialNum = 0;

    while (read.get(index) != 2147483647 && read.get(index) < target) {
        index = Math.pow(2, exponetialNum);
        exponetialNum++;
    }

    // 不知道这里为什么要加一个傻逼判断条P件
    // 学算法还是要认真，真的，要多思考多总结才有效率
    // if (read.get(index) === 2147483647) return -1; // Out of bound

    let start = 0;
    let end = index;

    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if (reader.get(index) === target) return index;

        if (reader.get(mid) < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (reader.get(start) === target) return start;
    if (reader.get(end) === target) return end;

    return -1;
};