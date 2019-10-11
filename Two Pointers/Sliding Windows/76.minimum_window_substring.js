/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// Tag: Two Pointer, Sliding Windows
// Level: Hard

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

// Naive approach -- 跟t同长度，遍历一遍
// increment window size， 直到全都有
// Time out as expected
var minWindow = function(s, t) {
    if (s === null || t === null) return "";
    
    for (let i = t.length; i <= s.length; i++) {
        for (let j = 0; j <= s.length - i; j++) {
            let word = s.substring(j, i + j);
            if (checkSimilarity(word, t)) return word;
        }
    }
    
    return "";
};

const checkSimilarity = function(word1, word2) {
    let dic1 = new Map();  // Window
    let dic2 = new Map();  // Origin Word
    

    let charArr1 = word1.split("");
    let charArr2 = word2.split("");
    
    for (let i = 0; i < charArr1.length; i++) {
        if (dic1.has(charArr1[i])) dic1.set(charArr1[i], dic1.get(charArr1[i]) + 1);
        else dic1.set(charArr1[i], 1);
    }
    
    for (let i = 0; i < charArr2.length; i++) {
        if (dic2.has(charArr2[i])) dic2.set(charArr2[i], dic2.get(charArr2[i]) + 1);
        else dic2.set(charArr2[i], 1);
    }

    if (word1 === "abbbbbcdd") {
        console.log(dic1);
        console.log(dic2);
    }
    
    for (var [key, value] of dic2.entries()) {
        if (!dic1.has(key)) return false;
        else {
            if (dic1.get(key) < value) return false;
        }
    }
    return true;
}

// 看了discuss,这是非常经典的sliding window的题目， 很需要反复复习和练习， 总结一下template
var minWindow = function(s, t) {
    let arr = new Array(128).fill(0);  // Alphabet map
    let counter = 0, left = 0, right = 0, head = -1;
    let window = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < t.length; i++) {
        arr[t.charCodeAt(i)]++;
        counter++;
    }  // 建一个初始的map

    
    // console.log(arr)
    while (right < s.length) {
        let rightChar = s.charCodeAt(right++);
        
        if (arr[rightChar] > 0) {
            counter--;
        }
        arr[rightChar]--;  
        // 这步是很关键的一步，我一直想不通，后来发现是所有的不在target string里的character已经是negative了
        // 所以下面的arr[] === 0 才不会被触发
        while (counter === 0) {
            if ((right - left) < window) {
                head = left;
                window = right - head;
            }

            let leftChar = s.charCodeAt(left++);
            
            if (arr[leftChar] === 0) {
                counter++;
            }
            arr[leftChar]++; // Increment the one on the index
        }
    }
    
    // console.log(head);

    return head === -1 ? "" : s.substring(head, head + window);

}


// 二刷
var minWindow = function(s, t) {
    let dic = new Map();
    // Compute window count
    for (let i = 0; i < t.length; i++) {
        if (dic.has(t.charAt(i))) {
            dic.set(t.charAt(i), dic.get(t.charAt(i)) + 1);
        } else {
            dic.set(t.charAt(i), 1);
        }
    }
    let required = dic.size; // Character needs to be formed
    let windowCount = new Map();
    let formed = 0;

    let left = 0;
    let right = 0;

    let ans = [Number.MAX_SAFE_INTEGER, 0, 0]; // Left

    while (right < s.length) {
        let character = s.charAt(right);
        if (windowCount.has(character)) {
            windowCount.set(character, windowCount.get(character) + 1);
        } else {
            windowCount.set(character, 1);
        }

        if (dic.has(character) && dic.get(character) === windowCount.get(character)) {
            formed++;
        }


        while (left <= right && formed === required) {
            let leftChar = s.charAt(left);

            if (right - left + 1 < ans[0]) {
                ans[0] = right - left + 1;
                ans[1] = left;
                ans[2] = right;
            }

            windowCount.set(leftChar, windowCount.get(leftChar) - 1);

            if (dic.has(leftChar) && windowCount.get(leftChar) < dic.get(leftChar)) {
                formed--;
            } // 这里一开始写的不太对，

            left++; // 这里一开始是放在
        }
        right++;
    }

    return ans[0] === Number.MAX_SAFE_INTEGER ? "" : s.substring(ans[1], ans[2] + 1);
};