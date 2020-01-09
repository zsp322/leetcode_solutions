const findSecondSmallestElementFromArray = function (nums) {
    if (nums == null || nums.length == 0 || nums.length == 1) return null;

    let biggestElement = Number.MIN_SAFE_INTEGER;
    let secondBiggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];

        if (curNum > biggestElement) {
            secondBiggest = biggestElement;
            biggestElement = curNum;
        } else if (curNum > secondBiggest && curNum < biggestElement) {
            secondBiggest = curNum;
        }
    }

    return secondBiggest == Number.MIN_SAFE_INTEGER ? null : secondBiggest;

}

let nums = [1,1,2,3,3,4,5,5,5,6,6,7,7];
findSecondSmallestElementFromArray(nums);