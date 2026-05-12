/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length;

    while(start <= end){
        let middle = Math.floor((start + end)/2)

        if(nums[middle] === target){
            return middle;
        } else if(nums[middle] > target){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
};