var singleNumber = function(nums) {
    if (nums === null || nums.length === 0) return null;

    let xor = nums[0];
    for (let i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
};