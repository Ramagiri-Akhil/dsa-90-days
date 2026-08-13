# 733. Flood Fill

**Difficulty:** Easy

## Problem Statement

You are given an `m x n` 2D image represented by integers, where each value represents a color.

You are also given:

* A starting pixel `(sr, sc)`
* A new color `color`

Your task is to perform a **flood fill** starting from the given pixel.

Change the color of the starting pixel and all **4-directionally connected pixels** that have the same original color to the new color.

Return the modified image.

**LeetCode:** https://leetcode.com/problems/flood-fill/

---

# Intuition

We can solve this problem using **Depth First Search (DFS)**.

The idea is simple:

* Start from the given pixel `(sr, sc)`.
* Find its **original color**.
* Change it to the new color.
* Recursively visit all connected pixels that have the same original color.
* Continue until the entire connected region is filled.

This is similar to coloring an entire region in a paint tool.

---

# Approach

1. Store the original color of the starting pixel.
2. If the original color is the same as the new color, return the image (no need to process).
3. Start DFS from `(sr, sc)`.
4. In DFS:

   * Stop if out of bounds.
   * Stop if the current cell is not equal to the original color.
   * Change the current cell to the new color.
   * Explore all four directions.
5. Return the modified image.

---

# Code

```javascript
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    let rows = image.length;
    let cols = image[0].length;

    let originalColor = image[sr][sc];

    // If new color is same as original, no need to process
    if (originalColor === color) {
        return image;
    }

    function dfs(row, col) {

        // Boundary check
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            image[row][col] !== originalColor
        ) {
            return;
        }

        // Change color
        image[row][col] = color;

        // Explore 4 directions
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    }

    dfs(sr, sc);

    return image;
};
```

---

# Dry Run

Consider:

```text
image =
1 1 1
1 1 0
1 0 1
```

Start:

```text
sr = 1, sc = 1
color = 2
```

Original color:

```text
originalColor = 1
```

---

## Step 1 — Start DFS

We start at:

```text
(1,1)
```

Change it:

```text
2 2 2
2 1 0
1 0 1
```

---

## Step 2 — Explore Neighbors

DFS visits all connected `"1"` cells:

```text
(1,0)
(0,1)
(1,2) ❌ (0, not same color)
(2,1)
(0,0)
(0,2)
(2,0)
```

Only cells connected with original color `1` are updated.

---

## Final Output

```text
2 2 2
2 2 0
2 0 1
```

---

# Why Do We Check Original Color?

This condition is important:

```javascript
image[row][col] !== originalColor
```

It ensures:

* We only fill the **connected region**
* We do not overwrite different colors
* We stop recursion correctly

---

# Why Early Return When Colors Are Same?

```javascript
if (originalColor === color) {
    return image;
}
```

If we skip this check:

* DFS will run unnecessarily
* It may cause infinite recursion in some implementations
* It wastes time visiting already correct cells

So this is an important optimization.

---

# Four Directions

We explore all connected pixels:

```text
        Up
         ↑
         |
Left ← Cell → Right
         |
         ↓
       Down
```

In code:

```javascript
dfs(row - 1, col);
dfs(row + 1, col);
dfs(row, col - 1);
dfs(row, col + 1);
```

Diagonal movement is not allowed.

---

# Connection With Number of Islands

### Number of Islands

```text
Find "1"
 ↓
DFS
 ↓
Mark visited as "0"
 ↓
Count islands
```

### Flood Fill

```text
Find starting cell
 ↓
DFS
 ↓
Change color
 ↓
Fill connected region
```

Both use the same DFS grid traversal pattern.

---

# Key Idea

> Flood Fill = Recolor a connected component in a grid

We are basically:

* Finding a connected region
* Replacing all its values with a new value

---

# Complexity Analysis

### Time Complexity: `O(m × n)`

In the worst case, all cells are visited once.

### Space Complexity: `O(m × n)`

Recursion stack in worst case (entire grid connected).

---

# Key Takeaways

* Use **DFS** for grid-based region filling.
* Start from the given pixel.
* Only fill cells with the same original color.
* Mark cells by changing their value.
* Explore 4 directions only.
* Avoid unnecessary recursion when colors are already same.
* This is a classic **flood fill / connected component modification** problem.

---

## Pattern Learned

* Depth First Search (DFS)
* Grid Traversal
* Flood Fill
* Connected Components
* Four-Direction Traversal
* Recursion
* Boundary Checking
* Matrix Traversal
