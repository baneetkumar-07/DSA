/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    //create a balce variable
    // if 0 then balanced
    let balance = 0;
    let count = 0

    for(let i = 0; i <= s.length - 1; i++){
        if(s[i] === "L"){
            balance++;
        } else{
            balance--;
        }
        if(balance === 0){
            count++
        }
    }
    return count;
};