let kSUm = function(nums, target) {
    let res = [];
    sumHelper(res, k, nums, target);
    return res;
}


let sumHelper = function (res, k, nums, target, index) {
    let temp = [];

    if (k === 2) {
        let left = index;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum === target) {
                let temp = [];
                temp.push(nums[left]);
                temp.push(nums[right]);

                // 这里的去重手段需要学习一下，移动到重复数字的最后一个上
                while (left + 1 < right && nums[left + 1] === nums[left]) left++;
                while (left + 1 < right && nums[right - 1] === nums[right]) right--;

                left++;
                right--;

            } else if (sum < target) {
                left++;
            } else {
                right--;
            }

        }
    } else {
        for (let i = index + 1; i < nums.length; i++) {
            let targetNum = target - nums[i];
            let subset = [];
            sumHelper(subset, k - 1, nums, targetNum, i + 1);

            for (let j = 0; j < subset.length; j++) {
                subset[j].push(nums[i]);
                temp.push(subset);
            }
        }
    }

    return temp;

}