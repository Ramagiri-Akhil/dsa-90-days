# Longest Palindromic Substring — LeetCode #5

## 🧠 Approach: Expand Around Center

The goal is to find the **longest substring that is a palindrome**.

Instead of checking every possible substring, we can consider every character (and every gap between characters) as a possible **center** of a palindrome and expand outward.

There are two types of palindromes:

* **Odd length:** `"aba"` → center is `b`
* **Even length:** `"abba"` → center is between the two `b`s

For every index, we check both cases and keep track of the longest palindrome.

---

## 🔑 How It Works

1. Start from every character in the string.
2. Expand around that character for an odd-length palindrome.
3. Expand around the gap between that character and the next character for an even-length palindrome.
4. While the left and right characters are equal, continue expanding.
5. Track the starting position and length of the longest palindrome.
6. Return the corresponding substring.

---

## 💻 JavaScript Solution

```js
var longestPalindrome = function(s) {

    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {

        // Odd-length palindrome
        let oddLength = expand(i, i);

        // Even-length palindrome
        let evenLength = expand(i, i + 1);

        let currentLength = Math.max(
            oddLength,
            evenLength
        );

        if (currentLength > maxLength) {

            maxLength = currentLength;

            start = i -
                Math.floor((currentLength - 1) / 2);
        }
    }

    return s.slice(
        start,
        start + maxLength
    );
};
```

---

## 🔄 Example

For:

```text
s = "babad"
```

We consider each character as a center:

```text
b a b a d
  ↑
 center
```

Expanding around the second character gives:

```text
bab
```

Expanding around the third character gives:

```text
aba
```

Both have length `3`, so either `"bab"` or `"aba"` is a valid answer.

---

## 🎯 Key Takeaway

The important pattern is:

```text
Choose a center
      ↓
Expand left & right
      ↓
Compare characters
      ↓
Continue while equal
      ↓
Track longest palindrome
```

We check **two centers for every index**:

```js
expand(i, i)       // Odd length
expand(i, i + 1)   // Even length
```

This handles both types of palindromes.

### ⏱️ Complexity

* **Time:** `O(n²)`
* **Space:** `O(1)`

**Key Pattern:** Expand Around Center 🔥
