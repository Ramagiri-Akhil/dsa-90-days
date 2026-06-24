# Valid Anagram | Sorting + Hash Map + Frequency Array | JavaScript

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a word formed by rearranging the letters of another word using all the original letters exactly once.

### Example

```javascript
Input: s = "anagram", t = "nagaram"

Output: true
```

---

# Approach 1: Sorting

## 💡 Intuition

If two strings are anagrams, then after sorting both strings, they should become identical.

### 📝 Algorithm

1. Check if both strings have the same length.
2. Sort both strings.
3. Compare the sorted strings.
4. Return the result.

### 💻 Code

```javascript
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;

};
```

### 📊 Complexity Analysis

**Time Complexity:** O(n log n)

**Space Complexity:** O(n)

Although this solution is simple, sorting makes it slower than the optimal approach.

---

# Approach 2: Hash Map (Optimized)

## 💡 Intuition

Instead of sorting, count how many times each character appears in the first string.

While traversing the second string, decrease the count for every matching character.

If a character doesn't exist or its count becomes unavailable, the strings are not anagrams.

### 📝 Algorithm

1. Check if both strings have the same length.
2. Create a Hash Map.
3. Traverse the first string and store the frequency of every character.
4. Traverse the second string.
5. If a character doesn't exist or its frequency is `0`, return `false`.
6. Otherwise, decrease its frequency.
7. If all characters are processed successfully, return `true`.

### 💻 Code

```javascript
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }

    }

    for (let i = 0; i < t.length; i++) {

        if (!map.has(t[i]) || map.get(t[i]) === 0) {
            return false;
        }

        map.set(t[i], map.get(t[i]) - 1);

    }

    return true;

};
```

### 📊 Complexity Analysis

**Time Complexity:** O(n)

**Space Complexity:** O(n)

This is the most common interview solution because it avoids sorting and efficiently tracks character frequencies.

---

# Approach 3: Frequency Array (Most Optimized)

## 💡 Intuition

Since the problem specifies lowercase English letters, there are only **26 possible characters**.

Instead of using a Hash Map, we can use an array of size **26** to store character frequencies.

### 📝 Algorithm

1. Check if both strings have the same length.
2. Create a frequency array of size 26 initialized with `0`.
3. Traverse both strings simultaneously.
4. Increase the count for characters in `s`.
5. Decrease the count for characters in `t`.
6. If every element in the frequency array is `0`, the strings are anagrams.

### 💻 Code

```javascript
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;

};
```

### 📊 Complexity Analysis

**Time Complexity:** O(n)

**Space Complexity:** O(1)

Since the frequency array always contains exactly **26 elements**, the extra space remains constant regardless of the input size.

---

# 🎯 Why Hash Map / Frequency Array?

Sorting works well but requires **O(n log n)** time.

Using a **Hash Map** or a **Frequency Array** allows us to compare character frequencies in **O(n)** time.

If the input is restricted to lowercase English letters, the **Frequency Array** is the most efficient solution because it provides constant extra space.

---

# 🚀 Key Takeaways

- Always check simple edge cases first, such as different string lengths.
- Hash Maps are useful when character frequencies matter.
- Frequency Arrays are more efficient than Hash Maps when the character set size is fixed.
- Sorting provides a simple solution but is not the most optimal.
- Understanding multiple approaches helps in choosing the best solution based on problem constraints.

---

Happy Coding! 🚀