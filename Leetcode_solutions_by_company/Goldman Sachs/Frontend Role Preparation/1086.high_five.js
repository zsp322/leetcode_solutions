/**
 * @param {number[][]} items
 * @return {number[][]}
 */
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    if (items == null || items.length == 0) return items;

    let dic = new Map();

    for (let i = 0; i < items.length; i++) {
        let curItem = items[i];

        let id = curItem[0];
        let score = curItem[1];

        if (dic.has(id)) {
            let currentScores = dic.get(id);
            currentScores.push(score);

            currentScores.sort(function(a, b) {
                return a - b;
            });
            if (currentScores.length > 5) currentScores.shift();
            dic.set(id, currentScores);
        } else {
            dic.set(id, [score]);
        }
    }

    let res = [];
    for (let [key, value] of dic) {
        let student = new Array(2);
        student[0] = key;
        let sum = 0;
        for (let score of value) {
            sum += score;
        }
        student[1] = Math.floor(sum / value.length);
        res.push(student);
    }
    return res;
};