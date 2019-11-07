const selectionSort = function (nums) {
    if (nums === null) return nums;

    for (let i = 0; i < nums.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minimum]) {
                minimum = j;
            }
        }

        swap(nums, i, minimum);
    }

    return nums;
}