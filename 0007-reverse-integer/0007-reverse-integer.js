/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = Math.pow(2,31);
    let isNegative = x < 0;
    let num = Math.abs(x);

    let reverseInt = 0

    while(num > 0){
        let lastDigit = num % 10;
        reverseInt = (reverseInt * 10) + lastDigit;
        num = Math.floor(num/10);
    }

    if(reverseInt > limit) return 0;

    return isNegative ? -reverseInt : reverseInt;

    
};