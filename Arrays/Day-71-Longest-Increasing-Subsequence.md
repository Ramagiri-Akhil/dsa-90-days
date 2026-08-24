# 🧩 LeetCode Solution — Day 71

## 300. Longest Increasing Subsequence

**Difficulty:** Medium

### Problem

Given an integer array `nums`, return the length of the **longest strictly increasing subsequence**.

A subsequence can be formed by deleting some elements without changing the order of the remaining elements.

### Example

```text
Input:
nums = [10,9,2,5,3,7,101,18]

Output:
4
```

One longest increasing subsequence is:

```text
2 → 5 → 7 → 101
```

So the answer is `4`.

---

## 💡 Approach — Dynamic Programming

The key question is:

> **What is the longest increasing subsequence ending at index `i`?**

Define:

```text
dp[i] = length of the longest increasing subsequence
       ending at index i
```

Every element can form a subsequence of length `1` by itself:

```javascript
dp[i] = 1;
```

For every `i`, we look at all previous elements `j`.

If:

```javascript
nums[j] < nums[i]
```

then `nums[i]` can be added to the increasing subsequence ending at `j`.

Therefore:

```text
dp[i] = max(dp[i], dp[j] + 1)
```

---

## 🔄 Algorithm

1. Create a `dp` array of size `n`.
2. Initialize every value to `1`.
3. For every element `i`, check all previous elements `j`.
4. If `nums[j] < nums[i]`, try extending the subsequence ending at `j`.
5. Keep track of the maximum length.
6. Return the maximum length.

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    const n = nums.length;

    // Every element can form a subsequence of length 1
    const dp = new Array(n).fill(1);

    let maxLength = 1;

    for (let i = 1; i < n; i++) {

        for (let j = 0; j < i; j++) {

            // nums[j] can come before nums[i]
            if (nums[j] < nums[i]) {

                dp[i] = Math.max(
                    dp[i],
                    dp[j] + 1
                );
            }
        }

        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
};
```

---

## 🧪 Dry Run

Consider:

```text
nums = [10, 9, 2, 5, 3, 7, 101, 18]
```

Initially:

```text
dp = [1, 1, 1, 1, 1, 1, 1, 1]
```

After processing each element:

```text
nums:  10  9  2  5  3  7  101  18
dp:     1  1  1  2  2  3   4    4
```

For `7`:

```text
nums[i] = 7
```

We check previous values:

```text
10 < 7 ❌
9  < 7 ❌
2  < 7 ✅
5  < 7 ✅
3  < 7 ✅
```

The best subsequence we can extend is:

```text
2 → 5
```

which has length `2`.

So:

```text
dp[5] = dp[3] + 1
      = 2 + 1
      = 3
```

Now we have:

```text
2 → 5 → 7
```

When we reach `101`, we can extend it:

```text
2 → 5 → 7 → 101
```

giving:

```text
dp[6] = 4
```

The maximum value in `dp` is therefore:

```text
4
```

---

## 🧠 Understanding the Two Loops

This is an important part of the solution.

```javascript
for (let i = 1; i < n; i++) {

    for (let j = 0; j < i; j++) {
        // ...
    }
}
```

Think of them as:

```text
i → current element
j → previous elements
```

For example, when:

```text
i = 5
nums[i] = 7
```

the inner loop checks:

```text
j = 0 → 10
j = 1 → 9
j = 2 → 2
j = 3 → 5
j = 4 → 3
```

We're asking:

> **Which previous elements can be placed before `7` while keeping the sequence increasing?**

---

## 🔑 Why `dp[i]` Starts at `1`

Consider:

```text
nums = [10, 9, 2]
```

Even if no previous number can be used, each number itself is already a valid subsequence:

```text
[10] → length 1
[9]  → length 1
[2]  → length 1
```

That's why:

```javascript
const dp = new Array(n).fill(1);
```

---

## ⏱️ Complexity

**Time:** `O(n²)`

For every element, we may check all previous elements.

**Space:** `O(n)`

We use the `dp` array to store the best subsequence length ending at each index.

---

## 🔥 Key Takeaway

The most important pattern from this problem is:

```text
Current Element
      ↓
Look at Previous Elements
      ↓
Find Valid Previous State
      ↓
Extend It
      ↓
Take MAX
```

The key line:

```javascript
dp[i] = Math.max(dp[i], dp[j] + 1);
```

means:

> **If the previous number is smaller, see whether extending its best subsequence gives us a better answer for the current number.**

### DP Pattern

```text
dp[i]
  ↓
Best answer ending at i
  ↓
Check previous states
  ↓
Extend the best valid state
```

🔥 **Day 71/90 — Longest Increasing Subsequence completed!**
