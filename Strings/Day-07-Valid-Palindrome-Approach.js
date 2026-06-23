// ================================
// Approach 1: Filtering + Reverse String
// Time Complexity: O(n)
// Space Complexity: O(n)
// ================================

var isPalindrome = function(s) {
    s = s.toLowerCase();

    let temp = "";
    let rev = "";

    for (let i = 0; i < s.length; i++) {
        let ch = s.charCodeAt(i);

        if (
            (ch >= 48 && ch <= 57) ||
            (ch >= 97 && ch <= 122)
        ) {
            temp += s[i];
        }
    }

    for (let i = temp.length - 1; i >= 0; i--) {
        rev += temp.charAt(i);
    }

    return rev === temp;
};



// ================================
// Approach 2: Two Pointers (ASCII)
// Time Complexity: O(n)
// Space Complexity: O(1)
// ================================

var isPalindrome = function(s) {

    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        let leftCode = s.charCodeAt(left);

        if (
            !(
                (leftCode >= 48 && leftCode <= 57) ||
                (leftCode >= 97 && leftCode <= 122)
            )
        ) {
            left++;
            continue;
        }

        let rightCode = s.charCodeAt(right);

        if (
            !(
                (rightCode >= 48 && rightCode <= 57) ||
                (rightCode >= 97 && rightCode <= 122)
            )
        ) {
            right--;
            continue;
        }

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};



// ================================
// Approach 3: Clean Code (Helper Function)
// Time Complexity: O(n)
// Space Complexity: O(1)
// ================================

var isPalindrome = function(s) {

    let left = 0;
    let right = s.length - 1;

    function isAlphaNumeric(ch) {
        let code = ch.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }

    while (left < right) {

        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};