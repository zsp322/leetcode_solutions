/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 最初的想法就是建两个hashset, 把两个数组存进两个hashsets
// 对每个hashset的key遍历，如果有则存入结果数组，O(n),
// 空间复杂度O(n)
var intersection = function(nums1, nums2) {
    if (nums1 === null || nums2 === null) return [];

    let dic1 = new Set(nums1);
    let dic2 = new Set(nums2);
    let res = [];
    for (var key of dic1.entries) {
        if (dic2.has(key)) res.push(key);
    }

    return res;
};


// 快速写一下two pointers的解法
// 学习下set到array的fast-path
// 看discuss写的， 估计过两天就会忘了
var intersection = function(nums1, nums2) {
    if (nums1 === null || nums2 === null) return [];
    let dic = new Set();

    nums1.sort(function(a, b) {return a - b;});
    nums2.sort(function(a, b) {return a - b;});

   
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            dic.add(nums1[i])
            i++;
            j++;
        }
    }

    return Array.from(dic.values())

}