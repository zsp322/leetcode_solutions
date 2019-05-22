// New York times考题，很简单的一道题，考官建议的indexOf是很有意思的一种解法，但是效率很低，还有一个小bug，亏好没让我写
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums === null) return nums;
    
    for (let i = 0; i < nums.length;) {
        let index = nums.indexOf(nums[i]);
        
        if (index != i) {
            nums.splice(index, 1);
        } else i++;
    }
    
};

// two-pointer解法， 像这样的题目写出来就要bug-free
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums === null) return nums;

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;

        while (nums[j] === nums[i]) {
            nums.splice(j, 1);
        }   
    }
}

// Discuss解法, in-place的终极解法
// 找到non-duplicate, 然后在array的前端储存
// O(n)最快解法


var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums === null) return nums;
    
    let id = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) nums[id++] = nums[i];
    }
}