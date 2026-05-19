/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Stores value -> index
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;
        
        // If the complement is already in our map, we found the pair
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Otherwise, save the current number and its index
        numMap.set(currentNum, i);
    }
    
    return []; // Fallback case
};
