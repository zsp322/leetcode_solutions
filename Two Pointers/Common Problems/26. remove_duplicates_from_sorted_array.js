// New York times考题，很简单的一道题
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

// 二刷写的有点问题
var removeDuplicates = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let slow = 1;
    let fast = 1;

    while (fast < nums.length) {
        if (nums[fast] != nums[fast - 1]) {
            let temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            slow++;
            // 这里有个逻辑BUG,当你把slow和FAST交换后,FAST和FAST - 1的值不一样了，但其实是DUPLICATE VALUE
            // 问题其实在于并不需要SWA，其实只要把FAST POINTER的value传给slow就好了
        }
        fast++;
    }
    return slow;
};