# Find All Anagrams in a String | Fixed Sliding Window + Frequency Array | JavaScript

## Problem

Given two strings `s` and `p`, return an array of all the **start indices** of `p`'s anagrams in `s`.

An **anagram** is a word formed by rearranging the letters of another word using all the original letters exactly once.

### Example

```javascript
Input:
s = "cbaebabacd"
p = "abc"

Output:
[0, 6]
```

Explanation:

```text
Index 0 → "cba" is an anagram of "abc"
Index 6 → "bac" is an anagram of "abc"
```

---

# 💡 Intuition

A brute-force approach would generate every substring of length `p.length`, sort it, and compare it with the sorted version of `p`.

Although this works, sorting every substring results in **O(n × k log k)** time complexity.

A more efficient approach is to use a **Fixed-Size Sliding Window**.

Since every anagram of `p` has exactly the same length as `p`, we only need to examine windows of size `p.length`.

Instead of sorting, we compare the **frequency of each character**.

* Build a frequency array for `p`.
* Build another frequency array for the current window in `s`.
* Compare both arrays.
* Slide the window by removing the outgoing character and adding the incoming character.

Whenever both frequency arrays are identical, store the starting index of that window.

---

# 📝 Algorithm

1. If `p.length` is greater than `s.length`, return an empty array.
2. Create two frequency arrays of size `26`.
3. Fill one array with the character frequencies of `p`.
4. Fill the second array with the first window of `s`.
5. If both frequency arrays match, add index `0` to the result.
6. Slide the window:

   * Remove the outgoing character.
   * Add the incoming character.
   * Compare the frequency arrays.
   * If they match, store the starting index.
7. Return the result array.

---

# 💻 Code

```javascript
var findAnagrams = function(s, p) {

    if (p.length > s.length) return [];

    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    const result = [];

    // Build frequency arrays
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        windowCount[s.charCodeAt(i) - 97]++;
    }

    // Check first window
    if (isEqual(pCount, windowCount)) {
        result.push(0);
    }

    // Slide the window
    for (let right = p.length; right < s.length; right++) {

        // Remove outgoing character
        windowCount[s.charCodeAt(right - p.length) - 97]--;

        // Add incoming character
        windowCount[s.charCodeAt(right) - 97]++;

        // Compare frequency arrays
        if (isEqual(pCount, windowCount)) {
            result.push(right - p.length + 1);
        }
    }

    return result;
};

function isEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
```

---

# 🧪 Dry Run

### Input

```javascript
s = "cbaebabacd"
p = "abc"
```

### Step 1

First window:

```text
"cba"
```

Frequency:

```text
a → 1
b → 1
c → 1
```

Matches `p`.

Result:

```javascript
[0]
```

---

### Slide 1

Window:

```text
"bae"
```

Remove:

```text
c
```

Add:

```text
e
```

Frequencies don't match.

---

### Continue Sliding

Windows checked:

```text
"aeb" ❌
"eba" ❌
"bab" ❌
"aba" ❌
```

No matches.

---

### Final Match

Window:

```text
"bac"
```

Frequency:

```text
a → 1
b → 1
c → 1
```

Matches `p`.

Result:

```javascript
[0, 6]
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Building frequency arrays takes **O(p)**.
* Sliding the window takes **O(n - p)**.
* Comparing two frequency arrays takes **O(26)**, which is constant.

Overall:

```text
O(n)
```

---

### Space Complexity

```text
O(1)
```

Two frequency arrays of fixed size `26` are used regardless of the input size.

---

# 🎯 Why Sliding Window?

Every anagram of `p` has the **same length**, making this a perfect **Fixed-Size Sliding Window** problem.

Instead of rebuilding the frequency array for every substring, we efficiently update the current window by:

* Removing the outgoing character.
* Adding the incoming character.

This allows us to check every possible window in **linear time**.

---

# 🚀 Key Takeaways

* Every anagram has the **same length** as the original string.
* A **Fixed-Size Sliding Window** is the ideal approach for this type of problem.
* A frequency array is more efficient than a HashMap when the input contains only lowercase English letters.
* Updating the frequency array while sliding the window avoids unnecessary recomputation.
* This problem is a direct extension of **Permutation in String**, where instead of returning `true` on the first match, we collect the starting index of every matching window.

---

Happy Coding! 🚀
