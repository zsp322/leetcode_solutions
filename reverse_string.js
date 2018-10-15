/**
 * Question 7. Reverse Integer
 * Solved Strategy: Simple Number mainpulation
 * Date: 10/04/2018
 * Description: First time use javascript solve leetcode
 * Learn Math.floor() because JS doesn't have int type
 */


/** Couldn't figure out the problem
 *  Using sliding window optimized solution
 *  Solved by see the solution
 *  Need to review
 */




var reverse = function(x) {
    if (x < 0) return -reverse(-x);

    var reversedInt = 0;

    while(x>0) {
        var a = x%10;
        x = Math.floor(x/10);

        //Should no larger than Math.floor(Number.MAX_VALUE/10)
        if(reversedInt >= 214748365)
            return 0;
        reversedInt = reversedInt*10+a;
    }

    return reversedInt;
};