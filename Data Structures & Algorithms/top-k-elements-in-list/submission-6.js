class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsObj = {};
        for (let i = 0; i < nums.length; i++) {
            numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;
        }
        const buckets = new Array(nums.length + 1);
        for (const [key, value] of Object.entries(numsObj)) {
            buckets[value] = buckets[value] || []
            buckets[value].push(key)
        }
        let result = []
        for (let j = buckets.length - 1; j >= 1; j--) {
            if(buckets[j]){
                result.push(buckets[j])
            }
        }
        return result.flat().map(Number).slice(0, k)
    }
}
