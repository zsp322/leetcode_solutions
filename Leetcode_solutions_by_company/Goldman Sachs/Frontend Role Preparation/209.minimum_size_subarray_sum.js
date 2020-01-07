/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// DP Solution -> O(n^2)
var minSubArrayLen = function(s, nums) {
    if (nums == null || nums.length == 0) return 0;

    let dp = new Array(nums.length + 1); // 我发现把DP ARRAY 初始化为原始长度 + 1是比较好的做法，避免出现很多edge case collision
    dp[0] = 0;
    let res = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i - 1] + nums[i - 1];

        if (dp[i] >= s) {
            for (let j = i; j >= 0; j--) {
                let subSum = dp[i] - dp[j];
                if (subSum >= s) {
                    res = Math.min(res, i - j);
                    break;
                }
            }
        }
    }

    return res == Number.MAX_SAFE_INTEGER ? 0 : res;
};

// Sliding Window Solution -> O(n)
var minSubArrayLen = function(s, nums) {
    if (nums == null || nums.length == 0) return 0;

    let left = 0;
    let right = 0;
    let currentSum = 0;
    let res = Number.MAX_SAFE_INTEGER;

    while (right < nums.length) {
        currentSum += nums[right];

        if (currentSum >= s) {
            res = Math.min(res, right - left + 1);

            while (currentSum >= s) {
                currentSum -= nums[left];
                left++;
                if (currentSum >= s) {
                    res = Math.min(res, right - left + 1);
                }
            }
        }
        right++;
    }

    return res == Number.MAX_SAFE_INTEGER ? 0 : res;
};

// O（NlogN)的方式
var minSubArrayLen = function(s, nums) {
    if (nums == null || nums.length == 0) return 0;

    let dp = new Array(nums.length + 1); // 我发现把DP ARRAY 初始化为原始长度 + 1是比较好的做法，避免出现很多edge case collision
    dp[0] = 0;
    let res = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i - 1] + nums[i - 1];
    }

    for (let i = 0; i < dp.length; i++) {
        let end = binarySearch(i, )
    }


}

var binarySearch = function(start, end, target, sums) {
    while (start + 1 < end) {
        let middle = (start + end) / 2;


        if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    if (nums[end] < target) return sum.length;
    if (nums[start] >= target) return start;
    if (nums[end] >= target) return end;
}