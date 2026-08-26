# 🧩 LeetCode Solution — Day 72

## 62. Unique Paths

**Difficulty:** Medium

### Problem

You are given an `m × n` grid.

A robot starts at the **top-left corner** and wants to reach the **bottom-right corner**.

The robot can only move:

* ➡️ Right
* ⬇️ Down

Return the number of possible unique paths.

### Example

```text
Input:
m = 3
n = 3

Output:
6
```

The six possible paths are different combinations of right and down movements.

---

## 💡 Approach — Dynamic Programming

We can solve this by asking:

> **How many ways are there to reach each cell?**

Define:

```text
dp[row][col] = number of ways to reach this cell
```

To reach any cell, the robot can only come from **two directions**:

```text
       Above
         ↓
      [current]
         ↑
       Left
```

Therefore:

```text
ways to reach current cell
=
ways from above
+
ways from left
```

---

## 🧠 Base Case

The first row contains only one possible path:

```text
→ → →
```

So every cell in the first row has:

```text
dp[0][col] = 1
```

Similarly, the first column can only be reached by moving down:

```text
↓
↓
↓
```

So:

```text
dp[row][0] = 1
```

That's why we initialize the entire DP grid with `1`.

---

## 🔄 Algorithm

1. Create an `m × n` DP grid filled with `1`.
2. Start from row `1` and column `1`.
3. For every cell:

   * Get paths from above.
   * Get paths from the left.
   * Add them together.
4. Return the bottom-right cell.

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    const dp = Array.from(
        { length: m },
        () => new Array(n).fill(1)
    );

    for (let row = 1; row < m; row++) {

        for (let col = 1; col < n; col++) {

            dp[row][col] =
                dp[row - 1][col] +
                dp[row][col - 1];
        }
    }

    return dp[m - 1][n - 1];
};
```

---

## 🧪 Dry Run

For:

```text
m = 3
n = 3
```

Initially:

```text
1  1  1
1  1  1
1  1  1
```

### Cell `(1,1)`

```text
dp[1][1] = dp[0][1] + dp[1][0]
         = 1 + 1
         = 2
```

```text
1  1  1
1  2  1
1  1  1
```

### Cell `(1,2)`

```text
dp[1][2] = dp[0][2] + dp[1][1]
         = 1 + 2
         = 3
```

### Cell `(2,1)`

```text
dp[2][1] = dp[1][1] + dp[2][0]
         = 2 + 1
         = 3
```

### Cell `(2,2)`

```text
dp[2][2] = dp[1][2] + dp[2][1]
         = 3 + 3
         = 6
```

Final DP table:

```text
1  1  1
1  2  3
1  3  6
```

Therefore:

```text
Answer = 6
```

---

## 🔑 Why Does Adding Work?

Consider the bottom-right cell:

```text
1  1  1
1  2  3
1  3  [6]
```

The robot can enter `[6]` from:

```text
       3
       ↓
     [ 6 ]
       ↑
       3
```

There are:

* `3` ways from above
* `3` ways from the left

Therefore:

```text
3 + 3 = 6
```

And that's the entire DP idea.

---

## ⏱️ Complexity

**Time:** `O(m × n)`

We process every cell exactly once.

**Space:** `O(m × n)`

We store the number of paths for every cell.

---

## 🧠 Key Takeaway

The important pattern here is:

```text
Current Cell
     ↓
Look at previous states
     ↓
Combine them
     ↓
Store the result
```

For Unique Paths:

```text
Above + Left
     ↓
Current Cell
```

This is a great example of **Grid Dynamic Programming**, where the grid itself becomes our DP table.

🔥 **Day 72/90 completed!**
