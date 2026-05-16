/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length === 0) return [];
    let mid = Math.floor(s.length/2);

    let i = 0;
    let j = s.length - 1;

    while( i < j){
       [s[i],s[j]] = [s[j], s[i]];
       i++;
       j--;
    }
    return s;
};