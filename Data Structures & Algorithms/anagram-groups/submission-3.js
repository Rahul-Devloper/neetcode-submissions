class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let output
        for (let i = 0; i < strs.length; i++) {
            checkAnagram(strs[i], i);
        }
            return Array.from(map.values())

        function checkAnagram(str, i) {
            let key = str.split("").sort().join("");
            if (!map.has(key)) {
                map.set(key, [str]);
            } else {
                let value = map.get(key);
                map.set(key, [...value, str]);
            }
        }
    }
}
