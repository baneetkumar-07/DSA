/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    if(nums.length <= 1) return nums;

    function merge(left, right){
        let sortedArr = [];
        let i = 0, j = 0;

        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                sortedArr.push(left[i]);
                i++;
            } else {
                sortedArr.push(right[j]);
                j++;
            }
        }

        return sortedArr.concat(left.slice(i).concat(right.slice(j)))
    }


   
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left, right)
    
};