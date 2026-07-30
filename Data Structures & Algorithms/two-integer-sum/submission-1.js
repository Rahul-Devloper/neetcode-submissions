class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const limit = nums.length;
        for (let i = 0; i < limit; i++) {
            for (let j = i + 1; j < limit; j++) {
                if(nums[i]+ nums[j] == target){
                    return [i, j]
                }
            }
        }
    }
}
