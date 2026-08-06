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
        let sortedNums = Object.keys(numsObj).sort(function (a, b) {
            return numsObj[b] - numsObj[a];
        });
        return sortedNums.slice(0, k).reverse()
    }
}
