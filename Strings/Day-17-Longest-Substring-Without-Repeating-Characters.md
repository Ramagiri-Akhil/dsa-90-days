# Longest Substring Without Repeating Characters | Sliding Window + Hash Set | JavaScript

## Problem

Given a string `s`, find the length of the **longest substring** without repeating characters.

A substring is a contiguous sequence of characters.

### Example

```javascript
Input:
s = "abcabcbb"

Output:
3
```

Explanation:

```text
The answer is "abc", with a length of 3.
```

---

# 💡 Intuition

A brute-force approach would generate every possible substring and check whether it contains duplicate characters.

Although this works, it requires checking many substrings repeatedly, resulting in **O(n²)** (or worse) time complexity.

A more efficient approach is to use a **Variable Sliding Window** along with a **Hash Set**.

The idea is to expand the window by moving the `right` pointer while all characters are unique. If a duplicate character is found, shrink the window from the left by removing characters until the duplicate is eliminated.

This ensures that the current window always contains unique characters.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = 0`
2. Create a `HashSet` to store the characters in the current window.
3. Initialize `maxLength = 0`.
4. While `right` is within the string:

   * If the current character is **not** in the set:

     * Add it to the set.
     * Update the maximum length.
     * Move `right` forward.
   * Otherwise:

     * Remove `s[left]` from the set.
     * Move `left` forward.
5. Return `maxLength`.

---

# 💻 Code

```javascript
var lengthOfLongestSubstring = function(s) {

    let left = 0;
    let right = 0;
    let maxLength = 0;

    const set = new Set();

    while(right < s.length){

        if(!set.has(s[right])){

            set.add(s[right]);

            maxLength = Math.max(maxLength, right - left + 1);

            right++;

        }else{

            set.delete(s[left]);

            left++;

        }

    }

    return maxLength;

};
```

---

# 🧪 Dry Run

### Input

```javascript
s = "abcabcbb"
```

### Step 1

```text
Window = "a"

Set = {a}

maxLength = 1
```

---

### Step 2

```text
Window = "ab"

Set = {a, b}

maxLength = 2
```

---

### Step 3

```text
Window = "abc"

Set = {a, b, c}

maxLength = 3
```

---

### Step 4

Next character is:

```text
'a'
```

Duplicate found.

Remove the leftmost character:

```text
Window = "bca"

Set = {b, c, a}

maxLength = 3
```

Continue expanding and shrinking the window whenever duplicates are found.

Final Answer:

```text
3
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each character is added to the set at most once and removed at most once.

Both pointers traverse the string only once.

---

### Space Complexity

```text
O(min(n, m))
```

Where:

* `n` = length of the string
* `m` = size of the character set (for example, 26 lowercase letters or 128 ASCII characters)

In the worst case, the set stores every unique character in the current window.

---

# 🎯 Why Sliding Window?

The problem asks for the **longest contiguous substring** without repeating characters.

Instead of restarting the search whenever a duplicate is found, the Sliding Window technique efficiently adjusts the current window by removing characters from the left until it becomes valid again.

Using a `HashSet` allows duplicate checks, insertions, and deletions in **O(1)** time, making the overall solution linear.

---

# 🚀 Key Takeaways

* A brute-force solution checks every substring and is inefficient.
* A **Variable Sliding Window** dynamically expands and shrinks based on the presence of duplicate characters.
* A `HashSet` provides constant-time lookup, insertion, and deletion.
* Each character is processed at most twice (once when added and once when removed), leading to an **O(n)** solution.
* This problem is a classic example of combining **Sliding Window** and **Hash Set** to solve string problems efficiently.

---

Happy Coding! 🚀
