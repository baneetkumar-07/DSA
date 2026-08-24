/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let sArr = s.split('');
    for(let i = 0; i <= sArr.length - 1; i += 2*k){
        let left = i;
        let right = Math.min(i + k-1, sArr.length -1);

        while(left < right){
            let temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        }
    }
    return sArr.join('');
};