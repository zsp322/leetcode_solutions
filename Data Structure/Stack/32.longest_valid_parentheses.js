/**
 * @param {string} s
 * @return {number}
 */
// 比较通用的一种算法是用一个STACK存储所有的左右括号，遍历到右括号，pop stack，不然压栈， 最后留下的就是没法MATCHING的括号对
// one pass的解法依靠的核心思想是，每一个valid的string都是以右括号结尾的，当每次遍历到一个右括号，STACK里面EXPECT A LEFT括号，如果没有，则在这个右括号之前没有VALID STRING
// 看的DISCUSS里的解法，一定是要复习的

var longestValidParentheses = function(s) {
    if (s === null) return s;
    let stack = [];
    let ans = 0;

    stack.push(-1);  //Give it a start point

    for (let i = 0; i < s.length; i++) {
        let character = s.charAt(i);
        if (character === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) stack.push(i);
            else ans = Math.max(ans, i - stack[stack.length - 1]);
        }
    }  // After this pass, it should only the character which not matching
    return ans;
};