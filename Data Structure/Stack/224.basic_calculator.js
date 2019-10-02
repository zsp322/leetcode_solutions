/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let operand = 0;
    let result = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);

        if (isDigit(ch)) {
            operand = 10 * operand + ch.charCodeAt(0) - ('0').charCodeAt(0);
        } else if (ch === '+') {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (ch === '-') {
            result += sign * operand;
            sign = -1;
            operand = 0;
        } else if (ch === '(') {
           stack.push(result);
           stack.push(sign);

           sign = 1;
           result = 0;
        } else if (ch === ')') {
           result += sign * operand;
           result *= stack.pop();
           result += stack.pop();

           operand = 0;
        }
    }

    return result + (sign * operand);
};


const isDigit = function(ch) {
  if (ch >= '0' && ch <= '9') return true;
  return false;
}
