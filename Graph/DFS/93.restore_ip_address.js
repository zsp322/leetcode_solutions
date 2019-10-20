/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s === null || s.length === 0) return [];

    let res = [];
    dfsHelper(res, s, 0, []);
    return res;
};

const dfsHelper = function(res, s, curIdx, curCombo) {
    // console.log(curCombo.length)
    if (curCombo.length > 4) return;

    if (curCombo.length === 4) {
        // console.log(curIdx)
        if (curIdx === s.length) {
            res.push(constructString(curCombo));
        } else {
            return;
        }
    } else {
        for (let i = curIdx + 1; i <= curIdx + 3; i++) {
            if (i > s.length) continue;


            let nextString = s.substring(curIdx, i);
            let nextNumber = Number.parseInt(nextString);
 
            if (nextString.startsWith('0') && (nextNumber != 0 || nextString.length != 1))continue;  //这里花里挺多时间考虑的

            if (nextNumber >= 0 && nextNumber <= 255) { 
                curCombo.push(nextNumber);
                dfsHelper(res, s, i, curCombo);
                curCombo.pop();
            }
        }
    }

}

const constructString = function(arr) {
    if (arr === null || arr.length === 0) return "";

    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        if (i !== arr.length - 1) {
            s += '.';
        }
    }

    return s;
}
