// ======================================
// Approach 1: Horizontal Scanning
// Time Complexity: O(n × m)
// Space Complexity: O(1)
// ======================================

var longestCommonPrefix = function(strs) {

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {

        while(strs[i].indexOf(prefix) !== 0) {

            prefix = prefix.substring(0, prefix.length - 1);

            if(prefix === "") {
                return "";
            }

        }

    }

    return prefix;

};


// ======================================
// Approach 2: Vertical Scanning
// Time Complexity: O(n × m)
// Space Complexity: O(1)
// ======================================

var longestCommonPrefix = function(strs) {

    if(strs.length === 0) {
        return "";
    }

    let prefix = "";

    for(let i = 0; i < strs[0].length; i++) {

        let currentChar = strs[0][i];

        for(let j = 1; j < strs.length; j++) {

            if(
                i >= strs[j].length ||
                strs[j][i] !== currentChar
            ) {
                return prefix;
            }

        }

        prefix += currentChar;

    }

    return prefix;

};