# Day 45 - Fibonacci Number

## Problem

The **Fibonacci numbers** form a sequence where each number is the sum of the two preceding ones.

The sequence is defined as:

- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n - 1) + F(n - 2)`, for `n > 1`

Given `n`, return the value of `F(n)`.

**LeetCode:** https://leetcode.com/problems/fibonacci-number/

---

# Intuition

A recursive solution repeatedly calculates the same Fibonacci numbers.

For example, while calculating `F(5)`, the values of `F(3)`, `F(2)`, and `F(1)` are computed multiple times, resulting in unnecessary work.

To avoid this, we can store previously computed Fibonacci numbers in an array and reuse them whenever needed. This is the core idea behind **Dynamic Programming (Tabulation)**.

---

# Approach

1. Handle the base cases:
   - If `n <= 1`, return `n`.

2. Create a `dp` array where:
   - `dp[i]` stores the `iᵗʰ` Fibonacci number.

3. Initialize:
   - `dp[0] = 0`
   - `dp[1] = 1`

4. Fill the remaining values using the recurrence relation:

```text
dp[i] = dp[i - 1] + dp[i - 2]
```

5. Return `dp[n]`.

---

# Code

```javascript
var fib = function(n) {
    if (n <= 1) return n;

    let dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
```

---

# Dry Run

### Input

```text
n = 5
```

Initialize:

```text
dp = [0, 1]
```

---

### i = 2

```text
dp[2] = dp[1] + dp[0]
       = 1 + 0
       = 1
```

```text
dp = [0,1,1]
```

---

### i = 3

```text
dp[3] = dp[2] + dp[1]
       = 1 + 1
       = 2
```

```text
dp = [0,1,1,2]
```

---

### i = 4

```text
dp[4] = dp[3] + dp[2]
       = 2 + 1
       = 3
```

```text
dp = [0,1,1,2,3]
```

---

### i = 5

```text
dp[5] = dp[4] + dp[3]
       = 3 + 2
       = 5
```

```text
dp = [0,1,1,2,3,5]
```

Return:

```text
5
```

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - We compute each Fibonacci number exactly once.

- **Space Complexity:** `O(n)`
  - The `dp` array stores all Fibonacci numbers from `0` to `n`.

---

# Key Takeaways

- Recursive Fibonacci has many **overlapping subproblems**.
- Dynamic Programming avoids repeated calculations by storing previous results.
- `dp[i]` represents the `iᵗʰ` Fibonacci number.
- Each state depends only on the previous two states:

```text
dp[i] = dp[i - 1] + dp[i - 2]
```

- This is the **Tabulation (Bottom-Up)** approach to Dynamic Programming.
- The solution can be further optimized to **O(1)** space since only the previous two Fibonacci numbers are needed at any time.
```