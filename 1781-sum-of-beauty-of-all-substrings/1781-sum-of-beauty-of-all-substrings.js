/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            // Increment count for current character
            freq[s.charCodeAt(j) - 97]++;

            let maxFreq = 0;
            let minFreq = Infinity;

            // Find min and max non-zero frequencies
            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    maxFreq = Math.max(maxFreq, freq[k]);
                    minFreq = Math.min(minFreq, freq[k]);
                }
            }

            totalBeauty += (maxFreq - minFreq);
        }
    }

    return totalBeauty;

    
};