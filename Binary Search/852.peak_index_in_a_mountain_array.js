var peakIndexInMountainArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < nums[mid + 1]) {
            start = mid;  // mid + 1 should work too
        } else {
            end = mid;
        }
    }

    return nums[start] > nums[end] ? start : end;
};