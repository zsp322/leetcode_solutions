/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
   if (chars == null || chars.length == 0) return 0;

   chars.sort();
   let a = 'a';
   let z = 'z';
   let curIdx = 0;
   let count = 0;
   while (curIdx < chars.length) {
       if  (chars[curIdx].charCodeAt(0) >= a.charCodeAt(0)
           && chars[curIdx].charCodeAt(0) <= z.charCodeAt(0)) {
           let sumOfCurrentChar = 0;
           let curChar = chars[curIdx];
           while (curIdx < chars.length && chars[curIdx] == curChar) {
               sumOfCurrentChar++;
               curIdx++;
           }

           chars[count++] = curChar;
           if (sumOfCurrentChar != 1) {
               // 这个地方一开始漏了，没考虑到多位数INTEGER
               let countArr = [...sumOfCurrentChar.toString()];

               for (let countedDigit of countArr) {
                   chars[count++] = countedDigit;
               }
           }
       }
   }

   return count;
};