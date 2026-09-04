class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0
        for(let i = 0; i < nums.length; i++){
            if(!set.has(nums[i] - 1)){
                let length = 1
                let next = nums[i] + 1
                while(set.has(next)){
                    length ++
                    next ++
                }
                count = Math.max(count, length)
            }
        }
        return count
    }
}
