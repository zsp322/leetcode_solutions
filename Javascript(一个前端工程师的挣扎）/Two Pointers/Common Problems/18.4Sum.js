var fourSum = function(nums, target) {
    if (nums === null || nums.length === 0) return [];
    let res = [];
    nums.sort(function(a, b) {return a - b;});  // After sort, it won't have duplicate triplets

    for (let i = 0; i < nums.length; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) continue;
        let targetNumber = target - nums[i];


        let threeSumSet = threeSum(nums, i + 1, targetNumber);
        console.log(threeSumSet);
        for (let j = 0; j < threeSumSet.length; j++) {
            threeSumSet[j].push(nums[i]);
            res.push(threeSumSet[j].slice(0, threeSumSet[j].length));
        }
    }

    return res;

};

var threeSum = function(nums, start, target) {
    if (nums === null || nums.length === 0) return [];
    let res = [];


    for (let i = start; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if (i > start && nums[i] === nums[i - 1]) continue;

        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if (sum === target) {
                res.push([nums[i], nums[left], nums[right]]);

                while (left + 1 < right && nums[left + 1] === nums[left]) left++;
                while (right - 1 > left && nums[right - 1] === nums[right]) right--;

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

    }

    return res;
}