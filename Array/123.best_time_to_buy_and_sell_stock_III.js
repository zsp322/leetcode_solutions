// Say you have an array for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete at most two transactions.
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Input: [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

// Naive Approach O(n^2)
// One pass approach

// 其实题目的本质就是找相对最大值-相对最小值，relatively difference, 最大的2个relative difference即two transactions should be made
var maxProfit = function(prices) {
    if (prices === null) return 0;
    let minPriceIndex = 0;
    
    let maxProfit = [];

    for (let i = 0; i < prices.length; i++) {
       
    }
}