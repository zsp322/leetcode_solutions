/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 太简单了，没什么好说的
var twoSum = function(numbers, target) {
    if (numbers === null) return [];

    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];

        if (sum === target) return [i + 1, j + 1];
        else  if (sum < target) i++;
        else j--;
    }

    return [];
};