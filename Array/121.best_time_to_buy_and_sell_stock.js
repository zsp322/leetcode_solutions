// Tag: Array
// Diffculty: Easy
// 心得: 很简单都一道题，one-pass O(N), 一开始被hint的dp给迷惑了，看了解法后写出来
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null) return 0;
    let maxProfit = 0;
    let minPrice = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let profit = prices[i] - prices[minPrice];

        maxProfit = Math.max(maxProfit, profit);
        
        if (prices[i] < prices[minPrice]) minPrice = i;
    }

    return maxProfit;
};