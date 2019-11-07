/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// ’0‘ + ’0‘
var addStrings = function(num1, num2) {
    let ret = ''
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry === 1) {
        let n1 = i >= 0 ? num1.charAt(i--) : '0';
        let n2 = j >= 0 ? num2.charAt(j--) : '0';


        let sum = carry + (n1 - '0') + (n2 - '0');

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;  //ehhhhhhhhh, 居然忘了这一步，不可原谅！！！！！！！！
        }
        ret = sum + ret;
    }

    return ret;
        
};


// Discuss解答
var addStrings = function(num1, num2) {
    let ret = '', carry = 0, i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        let n1 = i >= 0 ? num1[i--] : 0;
        let n2 = j >= 0 ? num2[j--] : 0;
        let sum = carry + n1 % 10 + n2 % 10;
        carry = Math.trunc(sum / 10);
        ret = (sum % 10) + ret;
    }
    return ret;
};