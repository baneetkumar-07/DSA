/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //brute force
    //find the diff b/w numbers and return the max +ve diff;
    if(prices.length === 0 ) return 0;
    let minPrice = prices[0];
    let profit = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        } else {
            let diff = prices[i] - minPrice;
            profit = Math.max(profit, diff);
        }
    }

    return profit;
};