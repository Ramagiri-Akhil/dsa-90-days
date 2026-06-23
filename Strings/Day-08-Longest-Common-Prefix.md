# Longest Common Prefix | Horizontal Scanning + Vertical Scanning | JavaScript

## Problem

Write a function to find the **longest common prefix** string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Example

```javascript
Input: strs = ["flower","flow","flight"]

Output: "fl"
```

---

# Approach 1: Horizontal Scanning

## 💡 Intuition

Assume the first string is the common prefix.

Compare it with every other string and keep reducing the prefix until both strings start with the same prefix.

Repeat this process for all strings.

## 📝 Algorithm

1. Initialize `prefix` as the first string.
2. Traverse all remaining strings.
3. While the current string does not start with `prefix`, remove the last character from `prefix`.
4. If the prefix becomes empty, return `""`.
5. Return the final prefix.

## 💻 Code

```javascript
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
```

## 📊 Complexity Analysis

**Time Complexity:** O(n × m)

- `n` = Number of strings
- `m` = Length of the shortest string

**Space Complexity:** O(1)

---

# Approach 2: Vertical Scanning (Optimized)

## 💡 Intuition

Instead of comparing entire strings, compare one character position at a time.

Use the first string as the reference.

For every character in the first string, compare it with the character at the same position in every other string.

As soon as a mismatch occurs (or one string ends), return the prefix built so far.

## 📝 Algorithm

1. Traverse every character of the first string.
2. Store the current character.
3. Compare it with the corresponding character in every other string.
4. If any mismatch is found or a string ends, return the current prefix.
5. Otherwise, append the character to the prefix.
6. Continue until all characters are processed.

## 💻 Code

```javascript
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
```

## 📊 Complexity Analysis

**Time Complexity:** O(n × m)

- `n` = Number of strings
- `m` = Length of the shortest string

Every character of every string is compared at most once.

**Space Complexity:** O(1)

Only a few extra variables are used (excluding the output string).

---

# 🎯 Why Vertical Scanning?

The common prefix is built character by character.

Instead of repeatedly shrinking a prefix, we compare the characters at the same position across all strings.

The moment a mismatch is found, we know that no longer common prefix can exist, so we immediately return the answer.

This approach is simple, efficient, and is one of the most commonly discussed interview solutions.

---

# 🚀 Key Takeaways

- Always use the first string as the reference.
- Compare characters column by column instead of comparing whole strings.
- Stop immediately when a mismatch is found.
- The optimal time complexity for this problem is **O(n × m)** because, in the worst case, every character of every string must be examined.
- Vertical Scanning is one of the cleanest and most interview-friendly approaches for solving this problem.

---

