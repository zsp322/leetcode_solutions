const sortIntegers2 = function (A) {
    quickSort(A, 0, A.length - 1);
}

const quickSort = function (nums, start, end) {
    if (start >= end) return; // single element array doesn't have to be sorted

    let left = start;
    let right = end;

    let pivot = nums[Math.floor((start + end) / 2)];

    while (left <= right) {
        while (left <= right && nums[left] < pivot) {
            left++;
        }
        while (left <= right && nums[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }

    quickSort(nums, start, right);
    quickSort(nums, left, end);
}