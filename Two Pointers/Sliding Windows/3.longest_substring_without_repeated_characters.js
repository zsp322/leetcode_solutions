// Tag:Two Pointer/Sliding Windows
// 复习下这道题
// 

/**
 * @param {string} s
 * @return {number}
 */


// Sliding-window basic usage
var lengthOfLongestSubstring = function(s) {
    if (s == null) {
        return null;
    }

    let dic = new Set();
    let res = 0;
    for (let i = 0, j = 0; j < s.length; ) {
        if (!dic.has(s.charAt(j))) {
            dic.add(s.charAt(j++));
            res = Math.max(res, j - i + 1);
        } else {
            dic.delete(s.charAt(i++));
        }
    }

    return res;
}

// 用模版重写下这道题
var lengthOfLongestSubstring = function(s) {
    if (s == null) {
        return null;
    }
    let arr = new Array(128).fill(0);
    let left = 0, right = 0, head = -1;
    let res = 0;
    while (right < s.length) {
        let rightChar = s.charCodeAt(right++);
        arr[rightChar]++; // Increment
       
        while (arr[rightChar] > 1) {
            let leftChar = s.charCodeAt(left++);
            arr[leftChar]--;
        }

        res = Math.max(right - left, res);
    }

    return res;

}

// Slidng-window optimized soltuion
// 还是要动手写，不然会眼高手低，因为这个思路跟上面的不一样
var lengthOfLongestSubstring = function(s) {
    if (s == null) {
        return null;
    }

    let map = new Map();
    let res = 0;
    for (let i = 0, j = 0; j < s.length;j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i); // The last character shows up, and make sure it doesn't exceed the lower bound
        }
        res = Math.max(res, j - i + 1);
        map.set(s.charAt(j), j + 1)
    }

    return res;
};


// 二刷选择了傻瓜式的Sliding Window的方式，其实可以用HASHMAP存INDEX和VALUE的PAIR,就可以跳过一个个遍历的过程
var lengthOfLongestSubstring = function(s) {
    if (s === null) return s;
    let dic = new Set();

    let i = 0;
    let j = 0;
    let res = 0;

    // 二刷的时候没有注意到这个边界条件的判断，选择了左指针想遍历所有的条件，然而没有想到右指针会跑出边界
    while (j < s.length) {
        if (dic.has(s.charAt(j))) {
            dic.delete(s.charAt(i));
            i++;
        } else {
            dic.add(s.charAt(j));
            if (res < j - i + 1) res = j - i + 1;
            j++;
        }
    }
    return res;
}
