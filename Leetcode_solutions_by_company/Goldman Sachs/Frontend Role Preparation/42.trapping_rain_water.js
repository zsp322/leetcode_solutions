/**
 * @param {number[]} height
 * @return {number}
 */
// Two Pointers
var trap = function(height) {
   if (height == null || height.length == 0) return 0;

   let left = 0;
   let right = 0;

   let maxLeft = nums[0];
   let maxRight = nums[height];

   let res = 0;
   while (left < right) {
       if (nums[left] < nums[right]) {
           maxLeft = Math.max(maxLeft, nums[left]);
           res += maxLeft - nums[left];
           left++;
       } else {
           maxRight = Math.max(maxRight, nums[right]);
           res += maxRight - nums[right];
           right--;
       }
   }

   return res;
};