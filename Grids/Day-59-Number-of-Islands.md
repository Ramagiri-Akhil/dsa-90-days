# 200. Number of Islands

**Difficulty:** Medium

## Problem Statement

Given an `m x n` 2D binary grid, where:

* `"1"` represents land.
* `"0"` represents water.

An island is a group of connected land cells.

Cells are considered connected only when they are adjacent **up, down, left, or right**.

Return the number of islands in the grid.

**LeetCode:** https://leetcode.com/problems/number-of-islands/

---

# Intuition

We can solve this problem using **Depth First Search (DFS)**.

Whenever we find an unvisited land cell:

```javascript
grid[row][col] === "1"
```

we know that we have found a **new island**.

So we:

1. Increase the island count.
2. Start DFS from that cell.
3. Visit every connected land cell belonging to that island.
4. Mark every visited land cell as `"0"`.

By marking visited cells as `"0"`, we make sure that the same island is not counted again.

---

# Approach

1. Traverse every cell in the grid.
2. If the current cell is `"0"`, continue.
3. If the current cell is `"1"`:

   * Increment `count`.
   * Start DFS from that cell.
4. In DFS:

   * Stop if we go outside the grid.
   * Stop if the current cell is water.
   * Change the current land cell from `"1"` to `"0"`.
   * Explore all four directions.
5. Continue scanning the grid.
6. Return `count`.

---

# Code

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    function dfs(row, col) {

        // Out of bounds or water
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            grid[row][col] === "0"
        ) {
            return;
        }

        // Mark current land as visited
        grid[row][col] = "0";

        // Explore up
        dfs(row - 1, col);

        // Explore down
        dfs(row + 1, col);

        // Explore left
        dfs(row, col - 1);

        // Explore right
        dfs(row, col + 1);
    }

    // Traverse the entire grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            // Found a new island
            if (grid[row][col] === "1") {

                count++;

                // Explore the entire island
                dfs(row, col);
            }
        }
    }

    return count;
};
```

---

# Dry Run

Consider:

```text
1 1 0 0
1 0 0 1
0 0 1 1
```

Initially:

```text
count = 0
```

---

## Step 1 — Find First Island

The first cell is:

```text
(0,0) = "1"
```

So we found a new island.

```text
count = 1
```

Start:

```javascript
dfs(0, 0);
```

DFS visits:

```text
(0,0)
(0,1)
(1,0)
```

They all belong to the same island.

We mark them as visited:

```text
0 0 0 0
0 0 0 1
0 0 1 1
```

We **do not increase `count`** for `(0,1)` or `(1,0)` because they are already part of the island we found.

---

## Step 2 — Continue Scanning

The grid eventually reaches:

```text
(1,3) = "1"
```

This cell has not been visited.

Therefore:

```text
count = 2
```

Start another DFS:

```javascript
dfs(1, 3);
```

DFS visits:

```text
(1,3)
(2,3)
(2,2)
```

They belong to the same second island.

After DFS:

```text
0 0 0 0
0 0 0 0
0 0 0 0
```

---

## Final Answer

```text
count = 2
```

Therefore:

```text
2
```

---

# Why Do We Change `"1"` to `"0"`?

This line is extremely important:

```javascript
grid[row][col] = "0";
```

It means:

> This land cell has already been visited.

For example:

```text
1 1
1 1
```

All four cells belong to **one island**.

When we find the first `"1"`:

```text
count++
```

Then DFS visits all four cells and changes them to `"0"`.

So when the outer loop reaches those cells later, they are no longer counted.

Without marking them visited, we could incorrectly count the same island multiple times.

---

# Four Directions

For every land cell, DFS checks:

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

Diagonal cells are **not** considered connected.

---

# Connection With Day 58

### Day 58 — Rotting Oranges

```text
Grid
 ↓
BFS
 ↓
Multiple starting points
 ↓
Spread level by level
 ↓
Each level = 1 minute
```

### Day 59 — Number of Islands

```text
Grid
 ↓
DFS
 ↓
Find a land cell
 ↓
Explore connected land
 ↓
Mark it visited
 ↓
Count the island
```

Both problems use the same four-direction grid traversal pattern.

---

# Connected Components

There is also an important graph concept behind this problem.

Each island can be considered a **connected component**.

For example:

```text
1 1 0 0
1 0 0 1
0 0 1 1
```

contains:

```text
Connected Component 1
        +
Connected Component 2
        ↓
        2 islands
```

So another way to think about the problem is:

> **Count the number of connected components of land in the grid.**

---

# Complexity Analysis

### Time Complexity: `O(m × n)`

Every cell is visited at most once.

### Space Complexity: `O(m × n)`

In the worst case, the recursion stack can contain many cells.

---

# Key Takeaways

* Use **DFS** to explore each island.
* Every unvisited `"1"` represents a new island.
* Increment `count` when a new island is found.
* Mark visited land as `"0"`.
* Explore only four directions.
* DFS ensures the entire connected island is visited.
* This problem is an example of finding **connected components** in a grid.

---

## Pattern Learned

* Depth First Search (DFS)
* Grid Traversal
* Connected Components
* Four-Direction Traversal
* Recursion
* Visited State
* Matrix Traversal
* Graph Traversal
