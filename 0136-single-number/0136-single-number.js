/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //we can use freq counter

    let result = 0;
    for(let i = 0; i < nums.length; i++){
        result = result ^ nums[i]
    }
    return result
};