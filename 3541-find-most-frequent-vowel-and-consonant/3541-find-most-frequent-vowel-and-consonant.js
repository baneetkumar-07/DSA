/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    //use freq counter
    // then loop thru array and check if vowels the get max of count;

    let  vowels = new Set(['a','e','i','o','u']);
    let vCount = 0;
    let cCount = 0;

    let freq = {};

    for(let char of s){
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let char of s){
        if(vowels.has(char)){
            vCount = Math.max(vCount, freq[char])
        } else {
            cCount = Math.max(cCount, freq[char])
        }
    }
    return vCount + cCount;
};