# 🧩 LeetCode Solution — Day 77

## 54. Spiral Matrix

**Difficulty:** Medium

### Problem

Given an `m × n` matrix, return all elements of the matrix in **spiral order**.

Example:

```text
Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Output:
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

---

## 💡 Approach — Four Boundaries

Instead of marking visited cells, we maintain four boundaries:

```text
top
bottom
left
right
```

These boundaries represent the **remaining unvisited portion** of the matrix.

We traverse in four directions:

```text
→ Right
↓ Down
← Left
↑ Up
```

After completing each direction, we move that boundary inward.

---

## 🧠 Step-by-Step

For:

```text
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Initially:

```text
top = 0
bottom = 2
left = 0
right = 2
```

### 1. Move Right

```text
1 → 2 → 3
```

Then:

```text
top++
```

### 2. Move Down

```text
6
↓
9
```

Then:

```text
right--
```

### 3. Move Left

```text
8 ← 7
```

Then:

```text
bottom--
```

### 4. Move Up

```text
4
↑
```

Then:

```text
left++
```

Now only `5` remains, so the process repeats.

Final result:

```text
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;

    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        // Move Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        top++;

        // Move Down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        right--;

        // Move Left
        if (top <= bottom) {

            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }

            bottom--;
        }

        // Move Up
        if (left <= right) {

            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }

            left++;
        }
    }

    return result;
};
```

---

## 🚨 Why Are the `if` Conditions Needed?

These two checks are important:

```javascript
if (top <= bottom)
```

and:

```javascript
if (left <= right)
```

They prevent us from traversing a row or column that we've **already processed**.

For example, consider:

```text
[1, 2, 3, 4]
```

After moving right, we've already processed the entire matrix.

Without the condition, we could try to traverse the same row again.

---

## 🔑 Key Insight

Don't think:

> "Which cell should I visit next?"

Think:

> **"What is the boundary of the unvisited area?"**

Maintain:

```text
top
bottom
left
right
```

Then repeatedly:

```text
→ Right  → top++
↓ Down   → right--
← Left   → bottom--
↑ Up     → left++
```

This makes the problem much easier to manage.

---

## ⏱️ Complexity

**Time:** `O(m × n)`

Every element is visited exactly once.

**Extra Space:** `O(1)`

We only use four boundary variables. The `result` array is the required output and isn't counted as extra space.

---

## 🎯 Key Takeaway

The main pattern from this problem is:

**Matrix → Four Boundaries → Traverse → Shrink → Repeat**

Once you recognize a matrix problem involving **spiral/layer-by-layer traversal**, the first approach to think about is **top, bottom, left, right boundaries**. 🔥
