var increasingTriplet = function(nums) {
    if (nums === null || nums.length === 0 || nums.length === 3) return false;

    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER；

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      } else if (nums[i] <= secondMin) {
        secondMin = nums[i];
      } else {
        return true;
      }
    }
    return false;
};
