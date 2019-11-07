/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 // 初始非常基础的双指针的解法, 子方程里的for-loop出现了小问题，还是有点问题的
var strStr = function(haystack, needle) {
    if (needle === null || needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (checkImplicity(i, haystack, needle)) return i;
        }
    }

    return -1;
};


const checkImplicity = function(index, haystack, needle) {
    if (index >= haystack.length) return false;
    for (let i = 1; i < needle.length; i++) {
        if (haystack[i + index] != needle[i] || i + index>= haystack.length) return false;
    }

    return true;
}




// 优化解法, 略微效率高了点，其实这个代码看上去还是很像Java
var strStr = function(haystack, needle) {
    if (needle === null || needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
           for (let j = 1; j < needle.length; j++) {
               if (haystack[i + j] != needle[j]) break; //Break out this loop
               if (j === needle.length - 1) return i; // The last element
           }
        }
    }

    return -1;
};


//KMP解法，有时间回来做一下