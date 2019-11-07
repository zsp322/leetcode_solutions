// 题目太简单了
var reverseString = function(s) {
    if (s === null || s.length === 0) return s;
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }

    return s;
};