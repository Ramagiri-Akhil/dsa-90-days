# 🧩 LeetCode Solution — Day 69

## 198. House Robber

**Difficulty:** Medium

### Problem

You are given an array `nums` where `nums[i]` represents the amount of money in the `i`-th house.

You want to rob the maximum amount of money, but you **cannot rob two adjacent houses**.

### Example

```text
Input:
nums = [2, 7, 9, 3, 1]

Output:
12
```

The optimal choice is:

```text
2 + 9 + 1 = 12
```

---

## 💡 Approach

At every house, we have two choices:

### 1. Skip the current house

Keep the maximum amount from the previous house:

```text
prev1
```

### 2. Rob the current house

If we rob the current house, we cannot rob the previous one.

So we take:

```text
prev2 + nums[i]
```

Therefore, the recurrence is:

We only need the previous two results, so we can optimize the space from `O(n)` to `O(1)`.

---

## 🔄 Algorithm

1. Initialize `prev2 = 0`.
2. Initialize `prev1 = 0`.
3. Iterate through every house.
4. Calculate the maximum between:

   * Skipping the current house.
   * Robbing the current house + `prev2`.
5. Shift the variables forward.
6. Return `prev1`.

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let prev2 = 0;
    let prev1 = 0;

    for (let i = 0; i < nums.length; i++) {

        let current = Math.max(
            prev1,
            prev2 + nums[i]
        );

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
```

---

## 🧪 Dry Run

For:

```text
nums = [2, 7, 9, 3, 1]
```

| House | Money | `prev2` | `prev1` | `current` |
| ----: | ----: | ------: | ------: | --------: |
|     1 |     2 |       0 |       0 |         2 |
|     2 |     7 |       0 |       2 |         7 |
|     3 |     9 |       2 |       7 |        11 |
|     4 |     3 |       7 |      11 |        11 |
|     5 |     1 |      11 |      11 |        12 |

Final answer:

```text
12
```

---

## 🧠 Why Does This Work?

At each house:

```text
              Current House
                   |
          ┌────────┴────────┐
          ↓                 ↓
        SKIP               ROB
          ↓                 ↓
       prev1         prev2 + nums[i]
          └────────┬────────┘
                   ↓
                  MAX
```

We're essentially asking:

> **"Is it better to keep what I already have, or rob this house and combine it with the best amount from two houses back?"**

This guarantees that we never rob two adjacent houses.

---

## ⏱️ Complexity

**Time:** `O(n)`

Every house is visited exactly once.

**Space:** `O(1)`

Only two previous states are stored.

---

## 🔑 Key Takeaway

> **At every house, make a choice between taking the current house and skipping it. Store only the previous two optimal results.**

This is another important **1D Dynamic Programming** pattern, very similar to yesterday's **Climbing Stairs** problem.

```text
Day 68 → Climbing Stairs
          ↓
Previous 2 states

Day 69 → House Robber
          ↓
Previous 2 states + current choice
```

🔥 **69/90 completed!**
