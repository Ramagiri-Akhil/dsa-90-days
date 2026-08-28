# 🧩 LeetCode Solution — Day 75

## 238. Product of Array Except Self

**Difficulty:** Medium

### Problem

Given an integer array `nums`, return an array `answer` such that:

```text
answer[i] = product of all elements of nums except nums[i]
```

The solution must **not use division** and should run in `O(n)` time.

### Example

```text
Input:
nums = [1, 2, 3, 4]

Output:
[24, 12, 8, 6]
```

Because:

```text
index 0 → 2 × 3 × 4 = 24
index 1 → 1 × 3 × 4 = 12
index 2 → 1 × 2 × 4 = 8
index 3 → 1 × 2 × 3 = 6
```

---

## 💡 Approach — Prefix + Suffix Product

For every index, we need:

```text
product of elements on the left
×
product of elements on the right
```

So:

Instead of creating separate prefix and suffix arrays, we can reuse the `answer` array.

### Pass 1 — Prefix

Traverse from **left to right**.

At each index, store the product of everything before it.

```javascript
answer[i] = prefix;
prefix *= nums[i];
```

For:

```text
[1, 2, 3, 4]
```

we get:

```text
answer = [1, 1, 2, 6]
```

---

### Pass 2 — Suffix

Now traverse from **right to left**.

Maintain the product of everything to the right:

```javascript
answer[i] *= suffix;
suffix *= nums[i];
```

This turns:

```text
[1, 1, 2, 6]
```

into:

```text
[24, 12, 8, 6]
```

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let answer = new Array(nums.length);

    // Prefix product
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {

        answer[i] = prefix;

        prefix *= nums[i];
    }

    // Suffix product
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {

        answer[i] *= suffix;

        suffix *= nums[i];
    }

    return answer;
};
```

---

## 🧪 Dry Run

For:

```text
nums = [1, 2, 3, 4]
```

### First pass — Prefix

```text
i = 0
answer[0] = 1
prefix = 1
```

```text
i = 1
answer[1] = 1
prefix = 2
```

```text
i = 2
answer[2] = 2
prefix = 6
```

```text
i = 3
answer[3] = 6
prefix = 24
```

Now:

```text
answer = [1, 1, 2, 6]
```

This represents:

```text
[ product before 0,
  product before 1,
  product before 2,
  product before 3 ]
```

---

### Second pass — Suffix

Start:

```text
suffix = 1
```

At index `3`:

```text
answer[3] = 6 × 1 = 6
suffix = 1 × 4 = 4
```

At index `2`:

```text
answer[2] = 2 × 4 = 8
suffix = 4 × 3 = 12
```

At index `1`:

```text
answer[1] = 1 × 12 = 12
suffix = 12 × 2 = 24
```

At index `0`:

```text
answer[0] = 1 × 24 = 24
```

Final:

```text
[24, 12, 8, 6]
```

---

## 🧠 Why Do We Start `prefix` and `suffix` at `1`?

Because `1` is the **multiplicative identity**.

For index `0`, there is nothing on the left:

```text
[ | 1 | 2 | 3 | 4]
  ↑
nothing
```

So we use:

```text
prefix = 1
```

Similarly, for the last index, there is nothing on the right:

```text
[1 | 2 | 3 | 4 |]
            ↑
         nothing
```

So:

```text
suffix = 1
```

This allows the multiplication to work naturally.

---

## 🚨 Why Not Use Division?

A tempting solution would be:

```javascript
totalProduct / nums[i]
```

But the problem specifically asks us not to use division.

More importantly, zeros create a problem:

```text
nums = [1, 2, 0, 4]
```

Division by `nums[i]` could mean division by zero.

The prefix/suffix approach handles zeros naturally.

---

## 🔑 Core Pattern

For every index:

```text
              Current Index
                   ↓
        ┌──────────┴──────────┐
        ↓                     ↓
   Everything              Everything
     LEFT                     RIGHT
        ↓                     ↓
        └───────── × ─────────┘
                   ↓
               answer[i]
```

The key idea is:

> **Don't calculate the product of everything except `nums[i]` directly. Calculate what is on the left and what is on the right, then multiply them.**

---

## ⏱️ Complexity

**Time:** `O(n)`

We make two passes through the array.

**Extra Space:** `O(1)`

We don't use separate prefix/suffix arrays. The output array itself stores the prefix products.

> Note: The returned `answer` array is required output space, so it isn't counted as extra space.

---

## 🔥 Key Takeaway

This problem teaches an extremely useful array pattern:

```text
Prefix → Left side
Suffix → Right side
        ↓
   Combine them
        ↓
    Final answer
```

Once you recognize **"everything before + everything after"**, think:

**Prefix + Suffix.** 🚀
