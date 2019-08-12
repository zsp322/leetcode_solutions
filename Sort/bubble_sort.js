const bubbleSort = function(nums) {
    if (nums === null) return nums;

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}