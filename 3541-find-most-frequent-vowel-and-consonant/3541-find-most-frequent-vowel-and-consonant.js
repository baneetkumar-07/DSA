/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    //use freq counter
    // then loop thru array and check if vowels the get max of count;

    let  vowels = ['a','e','i','o','u'];
    let vCount = 0;
    let cCount = 0;

    let freq = {};

    for(let char of s){
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let i = 0; i <= s.length - 1; i++){
        if(vowels.includes(s[i])){
            vCount = Math.max(vCount, freq[s[i]])
        } else {
            cCount = Math.max(cCount, freq[s[i]])
        }
    }
    return vCount + cCount;
};