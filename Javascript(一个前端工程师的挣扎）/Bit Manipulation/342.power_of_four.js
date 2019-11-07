// 1. num has bigger than 4
// 2. The first binary place has to be 0
// 3. The ones has to be at odd place

var isPowerOfFour = function(num) {
   return num > 0 && (num & (num - 1)) == 0 && (nums & 0x555555555) != 0;
};