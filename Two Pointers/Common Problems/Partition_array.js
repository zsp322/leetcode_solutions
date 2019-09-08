/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {

    if (nums === null || nums.length === 0) return 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        while (left <= right && nums[left] < k) left++;
        while (left <= right && nums[right] >= k) right--;

        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }

    }

    return left;

}
