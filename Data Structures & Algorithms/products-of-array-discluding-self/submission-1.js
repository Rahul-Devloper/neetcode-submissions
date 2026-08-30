class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = []
        prefix[0] = 1

        let suffix = []
        suffix[nums.length - 1] = 1

        let result = []

        for(let i = 1; i < nums.length ; i++){
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }
        for(let j = nums.length - 2; j >= 0 ; j--){
            suffix[j] = suffix[j + 1] * nums[j + 1]
        }
        for(let i = 0; i < nums.length; i++){
            result[i] = prefix[i] * suffix[i]
        }
        console.log('prefix=>', prefix)
        console.log('suffix=>', suffix)
        return result
    }
}
