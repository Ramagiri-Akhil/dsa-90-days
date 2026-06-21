# Day 7: Valid Palindrome

**LeetCode #125**  
**Difficulty:** Easy  
**Topic:** Strings, Two Pointers

## Problem Statement

A phrase is considered a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.

Return `true` if the given string is a palindrome; otherwise, return `false`.

### Example

```javascript
Input: s = "A man, a plan, a canal: Panama"

Output: true
```

---

# Approach 1: Filtering + Reverse String

## 💡 Intuition

The simplest way to solve the problem is to first remove all non-alphanumeric characters and convert the string to lowercase.

After obtaining the filtered string, reverse it and compare it with the original filtered string. If both are equal, the string is a palindrome.

### 📝 Algorithm

1. Convert the string to lowercase.
2. Traverse the string and keep only letters and digits.
3. Store the filtered characters in a new string.
4. Reverse the filtered string.
5. Compare both strings.

### 💻 Code

```javascript
var isPalindrome = function(s) {

    s = s.toLowerCase();

    let temp = "";
    let rev = "";

    for(let i = 0; i < s.length; i++) {

        let ch = s.charCodeAt(i);

        if(
            (ch >= 48 && ch <= 57) ||
            (ch >= 97 && ch <= 122)
        ) {
            temp += s[i];
        }

    }

    for(let i = temp.length - 1; i >= 0; i--) {
        rev += temp.charAt(i);
    }

    return rev === temp;

};
```

### 📊 Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

# Approach 2: Two Pointers (Optimized)

## 💡 Intuition

Instead of creating two new strings, we can compare characters directly using two pointers.

- One pointer starts from the beginning.
- Another pointer starts from the end.

If either pointer encounters a non-alphanumeric character, simply skip it.

When both pointers point to valid characters, compare them.

If they are different, the string is not a palindrome.

Otherwise, continue moving both pointers towards the center.

### 📝 Algorithm

1. Convert the string to lowercase.
2. Initialize two pointers:
   - `left = 0`
   - `right = s.length - 1`
3. Skip non-alphanumeric characters.
4. Compare valid characters.
5. If they don't match, return `false`.
6. Move both pointers inward.
7. If the loop completes, return `true`.

### 💻 Code

```javascript
var isPalindrome = function(s) {

    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while(left < right){

        let leftCode = s.charCodeAt(left);

        if(
            !(
                (leftCode >= 48 && leftCode <= 57) ||
                (leftCode >= 97 && leftCode <= 122)
            )
        ){
            left++;
            continue;
        }

        let rightCode = s.charCodeAt(right);

        if(
            !(
                (rightCode >= 48 && rightCode <= 57) ||
                (rightCode >= 97 && rightCode <= 122)
            )
        ){
            right--;
            continue;
        }

        if(s[left] !== s[right]){
            return false;
        }

        left++;
        right--;

    }

    return true;

};
```

### 📊 Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

# Key Learnings

- Always read the problem constraints carefully before deciding on an approach.
- Two Pointers can often eliminate the need for additional space.
- Skipping invalid characters during traversal is more efficient than creating a filtered string.
- Helper functions can make repeated logic cleaner and easier to maintain.
- First solve the problem correctly, then focus on optimizing time and space complexity.

## Status

✅ Solved