var canPartition = function(nums) {
   let sum = 0;
   for (let num of nums) {
     sum += num;
   }

   if (sum % 2 === 1) return false;

   
}
