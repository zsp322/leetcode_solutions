/**
 * Initialize your data structure here.
 */
 // 一开始想的是 array存值， 再存一个sum表
 // 每次进来新数，更新sum表 O(n)add, O(1)查找
 // O（n)Space Complexity

 // Discuss和九章的答案看了下来发现更好/更推崇的做法是
 // O(1)的 add
 // O(n)的查找
 var TwoSum = function() {
      this.dic = new Map();
 };

 /**
  * Add the number to an internal data structure..
  * @param {number} number
  * @return {void}
  */
 TwoSum.prototype.add = function(number) {
     if (this.dic.has(number)) {
       this.dic.set(number, this.dic.get(number) + 1);
     } else {
       this.dic.set(number, 1);
     }
 };

 /**
  * Find if there exists any pair of numbers which sum is equal to the value.
  * @param {number} value
  * @return {boolean}
  */
 TwoSum.prototype.find = function(value) {
     for (let num1 of this.dic.keys()) {
         let num2 = value - num1;
         if (num1 === num2 && this.dic.get(num1) > 1) return true;
         if (num1 != num2 && this.dic.has(num2)) return true;
     }

     return false;
 };
