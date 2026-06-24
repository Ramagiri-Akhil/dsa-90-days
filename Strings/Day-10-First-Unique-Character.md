# First Unique Character in a String | Hash Map + Frequency Array | JavaScript

## Problem

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

### Example

```javascript
Input: s = "leetcode"

Output: 0
```

---

# Approach 1: Hash Map

## 💡 Intuition

To find the first unique character, we first need to know how many times each character appears in the string.

We can use a Hash Map to store the frequency of every character.

After building the frequency map, we traverse the string again and return the index of the first character whose frequency is `1`.

---

## 📝 Algorithm

1. Create an empty Hash Map.
2. Traverse the string and store the frequency of each character.
3. Traverse the string again.
4. If the frequency of the current character is `1`, return its index.
5. If no unique character exists, return `-1`.

---

## 💻 Code

```javascript
var firstUniqChar = function(s) {

    const map = new Map();

    for(let i = 0; i < s.length; i++) {

        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }

    }

    for(let i = 0; i < s.length; i++) {

        if(map.get(s[i]) === 1) {
            return i;
        }

    }

    return -1;

};
```

---

## 🧪 Dry Run

```javascript
s = "loveleetcode"
```

Frequency Map:

```text
l → 2
o → 2
v → 1
e → 4
t → 1
c → 1
d → 1
```

Second Traversal:

```text
l → frequency = 2 ❌
o → frequency = 2 ❌
v → frequency = 1 ✅
```

Return:

```javascript
2
```

---

## 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* First traversal: O(n)
* Second traversal: O(n)

Overall:

```text
O(n)
```

### Space Complexity

```text
O(n)
```

Hash Map stores character frequencies.

---

# Approach 2: Frequency Array (Optimized)

## 💡 Intuition

The string contains only lowercase English letters.

Instead of using a Hash Map, we can use a frequency array of size 26.

Each index represents a character:

```text
a → 0
b → 1
c → 2
...
z → 25
```

This reduces the extra space to O(1).

---

## 📝 Algorithm

1. Create a frequency array of size 26 initialized with 0.
2. Traverse the string and count occurrences.
3. Traverse the string again.
4. Return the index of the first character whose frequency is 1.
5. If none exists, return -1.

---

## 💻 Code

```javascript
var firstUniqChar = function(s) {

    const count = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    for(let i = 0; i < s.length; i++) {

        if(count[s.charCodeAt(i) - 97] === 1) {
            return i;
        }

    }

    return -1;

};
```

---

## 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

### Space Complexity

```text
O(1)
```

The frequency array always contains exactly 26 elements.

---

# 🎯 Key Takeaways

* Frequency-based problems are often solved efficiently using Hash Maps.
* A second traversal is needed because we must return the first unique character in the original order.
* Frequency Arrays can replace Hash Maps when the character set size is fixed.
* Always think about whether constraints allow further optimization.

---

Happy Coding! 🚀
