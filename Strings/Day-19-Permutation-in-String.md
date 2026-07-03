# Permutation in String | Sliding Window + Frequency Array | JavaScript

## Problem

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, otherwise return `false`.

A permutation is a rearrangement of all the characters of a string.

### Example

```javascript
Input:
s1 = "ab"
s2 = "eidbaooo"

Output:
true
```

Explanation:

```text
The substring "ba" is a permutation of "ab".
```

---

# 💡 Intuition

A brute-force approach would generate every substring of length `s1.length` from `s2`, sort both strings, and compare them.

Although this works, sorting every substring results in **O(n × k log k)** time complexity.

A better approach is to use a **Fixed-Size Sliding Window**.

Since every permutation of `s1` has exactly the same length as `s1`, we only need to examine windows of that size in `s2`.

Instead of comparing strings directly, we compare the **frequency of each character**.

* Build a frequency array for `s1`.
* Build another frequency array for the current window in `s2`.
* Compare both frequency arrays.
* Slide the window by removing the outgoing character and adding the incoming character.

If both frequency arrays become identical, we have found a permutation.

---

# 📝 Algorithm

1. If `s1.length > s2.length`, return `false`.
2. Create two frequency arrays of size `26`.
3. Fill one array with the character frequencies of `s1`.
4. Fill the second array with the first window of `s2`.
5. Compare both frequency arrays.
6. Slide the window:

   * Remove the outgoing character.
   * Add the incoming character.
   * Compare the frequency arrays.
7. If a match is found, return `true`.
8. If no match exists after checking all windows, return `false`.

---

# 💻 Code

```javascript
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);

    // Build frequency arrays
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    // Check first window
    if (isEqual(s1Count, windowCount)) {
        return true;
    }

    // Slide the window
    for (let right = s1.length; right < s2.length; right++) {

        // Remove outgoing character
        windowCount[s2.charCodeAt(right - s1.length) - 97]--;

        // Add incoming character
        windowCount[s2.charCodeAt(right) - 97]++;

        // Compare frequency arrays
        if (isEqual(s1Count, windowCount)) {
            return true;
        }
    }

    return false;
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
s1 = "ab"
s2 = "eidbaooo"
```

### Step 1

Build frequency arrays.

```text
s1Count

a → 1
b → 1
```

First window:

```text
"ei"
```

```text
windowCount

e → 1
i → 1
```

Not equal.

---

### Slide 1

Window:

```text
"id"
```

Remove:

```text
e
```

Add:

```text
d
```

Still not equal.

---

### Slide 2

Window:

```text
"db"
```

Remove:

```text
i
```

Add:

```text
b
```

Still not equal.

---

### Slide 3

Window:

```text
"ba"
```

Remove:

```text
d
```

Add:

```text
a
```

Frequency arrays become:

```text
a → 1
b → 1
```

They match `s1Count`.

Return:

```text
true
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Building the frequency arrays takes **O(k)**.
* The sliding window traverses `s2` once.
* Comparing two frequency arrays takes **O(26)**, which is a constant.

Overall complexity:

```text
O(k + 26 × (n - k))
≈ O(n)
```

---

### Space Complexity

```text
O(1)
```

Only two frequency arrays of size `26` are used.

---

# 🎯 Why Sliding Window?

Every permutation of `s1` has the **same length**.

Instead of checking every possible substring from scratch, we maintain a **fixed-size sliding window** of length `s1.length`.

As the window moves:

* One character leaves the window.
* One character enters the window.

Updating the frequency array takes constant time, allowing us to efficiently check every possible permutation.

---

# 🚀 Key Takeaways

* A permutation contains the **same characters with the same frequencies**, only the order changes.
* Since every permutation has the same length, this is a **Fixed-Size Sliding Window** problem.
* A frequency array is more efficient than a HashMap when the input contains only lowercase English letters.
* Updating the window by removing one character and adding another avoids rebuilding the frequency array for every window.
* Comparing two frequency arrays allows us to determine whether the current window is a permutation of `s1`.

---

Happy Coding! 🚀
