# 🧩 LeetCode Solution — Day 74

## 647. Palindromic Substrings

**Difficulty:** Medium

### Problem

Given a string `s`, return the number of **palindromic substrings** in it.

A palindrome is a string that reads the same forward and backward.

### Example

```text
Input:
s = "aaa"

Output:
6
```

The palindromic substrings are:

```text
"a"
"a"
"a"
"aa"
"aa"
"aaa"
```

---

## 💡 Approach — Expand Around Center

Instead of generating every substring and checking each one separately, we can treat every character as a possible **center of a palindrome** and expand outward.

There are two types of palindromes:

### 1. Odd-length palindrome

Example:

```text
"aba"
```

The center is the middle character:

```text
a b a
  ↑
center
```

So we start with:

```javascript
left = i
right = i
```

### 2. Even-length palindrome

Example:

```text
"abba"
```

The center is between the two middle characters:

```text
a b b a
  ↑ ↑
center
```

So we start with:

```javascript
left = i
right = i + 1
```

---

## 🔑 Main Logic

While:

```javascript
s[left] === s[right]
```

the characters match, meaning we've found a palindrome.

So we:

```javascript
count++;
```

Then expand outward:

```javascript
left--;
right++;
```

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    let count = 0;

    for (let i = 0; i < s.length; i++) {

        // Odd-length palindromes
        count += expandAroundCenter(s, i, i);

        // Even-length palindromes
        count += expandAroundCenter(s, i, i + 1);
    }

    return count;
};


function expandAroundCenter(s, left, right) {

    let count = 0;

    while (
        left >= 0 &&
        right < s.length &&
        s[left] === s[right]
    ) {

        count++;

        left--;
        right++;
    }

    return count;
}
```

---

## 🧪 Dry Run — `"aaa"`

```text
s = "aaa"

Index:
  0   1   2
  a   a   a
```

### Center = index `0`

Odd:

```text
"a"
```

✅ Count = `1`

Even:

```text
"aa"
```

✅ Count = `1`

Total:

```text
2
```

---

### Center = index `1`

Odd:

```text
"a"
```

✅

Expand:

```text
"aaa"
```

✅

So this gives:

```text
2
```

Even:

```text
"aa"
```

✅

Total added:

```text
3
```

Overall:

```text
2 + 3 = 5
```

---

### Center = index `2`

Odd:

```text
"a"
```

✅

Even:

```text
```

No valid palindrome.

Final:

```text
5 + 1 = 6
```

Therefore:

```text
Output = 6
```

---

## 🧠 Why Do We Call the Function Twice?

This is the most important part to remember:

```javascript
count += expandAroundCenter(s, i, i);
```

checks:

```text
Odd-length palindromes
```

while:

```javascript
count += expandAroundCenter(s, i, i + 1);
```

checks:

```text
Even-length palindromes
```

Without the second call, we'd miss palindromes like:

```text
"aa"
"abba"
"noon"
```

---

## 🔄 Visualizing the Expansion

For:

```text
"racecar"
```

Start from the center:

```text
r a c e c a r
      ↑
    center
```

Expand:

```text
r a c e c a r
    ↑     ↑
```

Then:

```text
r a c e c a r
  ↑         ↑
```

Then:

```text
r a c e c a r
↑             ↑
```

Every successful expansion gives us one palindrome.

---

## ⏱️ Complexity

**Time:** `O(n²)`

There are `n` possible centers, and in the worst case we can expand up to `n` characters around each center.

**Space:** `O(1)`

We only use a few variables.

---

## 🆚 Compared to the Brute-Force Approach

The approach you initially considered was:

```text
Generate every substring
        ↓
Check every substring
        ↓
Count palindromes
```

That works, but can take **`O(n³)`** time.

With Expand Around Center:

```text
Choose center
     ↓
Expand outward
     ↓
Count every palindrome found
```

we reduce it to:

```text
Time:  O(n²)
Space: O(1)
```

### 🔥 Key Takeaway

> **Every palindrome has a center. Start from that center and expand as long as the characters match.**

This is one of those patterns that's worth remembering because it can be reused in several palindrome problems.
