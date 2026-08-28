class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let joinedStr = "";
        for (let i = 0; i < strs.length; i++) {
            joinedStr += strs[i].length + "#" + strs[i];
        }
        return joinedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let result = [];

        // decoder(length, index)
        while (i < str.length) {
            let index = str.indexOf("#", i);
            let length = str.substring(i, index);
            const len = parseInt(length, 10);

            let value = str.substring(index + 1, index + 1 + len);
            result.push(value);
            i = index + len + 1;
        }
        return result;
    }
}
