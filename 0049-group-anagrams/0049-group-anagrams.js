/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    //important point is -> sort each str aphabetically if they are anagrams str would be same

    // so sort it first sort the array
    // the use map to map the values & print the map at the end

    let sortedArr = strs.map((str) => str.split("").sort().join(""));
    let map = {}

    for(let i = 0; i <= sortedArr.length - 1; i++){

        if(!map[sortedArr[i]]){
            map[sortedArr[i]] = [strs[i]]
        } else {
            map[sortedArr[i]].push(strs[i])
        }
    }

    return Object.values(map)
};