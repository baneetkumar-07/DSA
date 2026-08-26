/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    //we can count the  ( ) brackts and and get the diff and that will be the ouput

    let open = 0;
    let needAddition = 0;

    for(let char of s){
        if(char === '('){
            open++
        } else if(open >0){
            open--
        } else {
            needAddition++
        }
    }
    return open+needAddition
};