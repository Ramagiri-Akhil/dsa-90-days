# 70. Climbing Stairs

**Difficulty:** Easy

## Problem Statement

You are climbing a staircase that has `n` steps.

You can take either:

* 1 step at a time
* 2 steps at a time

Your task is to find the total number of **distinct ways** to reach the top.

**LeetCode:** https://leetcode.com/problems/climbing-stairs/

---

# Intuition

This problem is based on a simple observation:

To reach step `n`, you must come from:

* Step `n - 1` (by taking 1 step)
* Step `n - 2` (by taking 2 steps)

So, the total number of ways to reach step `n` is the sum of:

* Ways to reach `n - 1`
* Ways to reach `n - 2`

This forms a **Fibonacci-like pattern**.

---

# Approach

1. If `n <= 2`, return `n` directly.
2. Initialize two variables:

   * `prev1` → ways to reach step 2
   * `prev2` → ways to reach step 1
3. Iterate from step `3` to `n`.
4. For each step:

   * Current ways = `prev1 + prev2`
   * Update previous values
5. Return the final computed value.

---

# Code

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    // Base cases
    if (n <= 2) {
        return n;
    }

    let prev2 = 1; // ways to reach step 1
    let prev1 = 2; // ways to reach step 2

    for (let i = 3; i <= n; i++) {

        let current = prev1 + prev2;

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
```

---

# Dry Run

Consider:

```text
n = 5
```

---

## Step 1 — Initialization

```text
prev2 = 1  (step 1)
prev1 = 2  (step 2)
```

---

## Step 2 — i = 3

```text
current = 2 + 1 = 3
```

Update:

```text
prev2 = 2
prev1 = 3
```

---

## Step 3 — i = 4

```text
current = 3 + 2 = 5
```

Update:

```text
prev2 = 3
prev1 = 5
```

---

## Step 4 — i = 5

```text
current = 5 + 3 = 8
```

Update:

```text
prev2 = 5
prev1 = 8
```

---

## Final Output

```text
8
```

---

# Why This Works

Every step depends on the previous two steps:

```text
Step n
  ↓
Step n-1 + Step n-2
```

So we build the answer incrementally:

```text
1 → 2 → 3 → 5 → 8 → ...
```

This is the **Fibonacci sequence pattern** in disguise.

---

# Visual Understanding

```text
Ways to reach step n:

        n
       / \
   n-1     n-2
    |        |
  ways     ways
```

So:

```text
ways(n) = ways(n-1) + ways(n-2)
```

---

# Why We Use Two Variables

Instead of storing an array:

```text
dp[1], dp[2], dp[3], ... dp[n]
```

We only keep:

* `prev1` → last computed value
* `prev2` → second last value

This reduces space usage.

---

# Complexity Analysis

### Time Complexity: `O(n)`

We iterate from 3 to n once.

### Space Complexity: `O(1)`

Only two variables are used.

---

# Key Takeaways

* This is a **Dynamic Programming (DP)** problem.
* It follows a **Fibonacci pattern**.
* Each state depends on the previous two states.
* Space optimization reduces DP array to two variables.
* Always check for base cases (`n <= 2`).

---

## Pattern Learned

* Dynamic Programming (DP)
* Fibonacci Sequence
* State Transition
* Space Optimization
* Iterative DP
* Recurrence Relation
