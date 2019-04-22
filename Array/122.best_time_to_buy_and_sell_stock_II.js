// Tag: Array
// Diffculty: Easy
// 心得: 跟best time to buy and sell stock一样的方式，只是记得要每次更新最低点，这样可以calculate peak and low point的值差
/**
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null) return 0;
    let maxProfit = 0;
    let lastMinPrice = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let profit = prices[i] - prices[lastMinPrice];
        
        if (profit > 0) {
            maxProfit += profit;
            lastMinPrice = i; // Update the last interval
        } else if (prices[lastMinPrice] > prices[i]) lastMinPrice = i;
        
        
    }
    
    return maxProfit;
};