/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //covert to lowercase
    // then replace all non-alphbhetic
    // then check if palindrome
    if(s.length === 0) return false;
    let newStr = s.toLowerCase().replace(/[^a-z0-9]/g,'');

    let start = 0;
    let end = newStr.length - 1;

    while(start < end){
        if(newStr[start] !== newStr[end]){
        return false
        }
            start++;
            end--;
    }

    return true;
};