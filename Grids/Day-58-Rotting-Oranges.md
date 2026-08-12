# 994. Rotting Oranges

**Difficulty:** Medium

## Problem Statement

You are given a grid where:

* `0` represents an empty cell.
* `1` represents a fresh orange.
* `2` represents a rotten orange.

Every minute, a rotten orange makes its adjacent fresh oranges rotten.

Only the oranges directly **up, down, left, or right** can be affected.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.

If it is impossible for all fresh oranges to become rotten, return `-1`.

**LeetCode:** https://leetcode.com/problems/rotting-oranges/

---

# Intuition

This problem is a perfect example of **Breadth First Search (BFS)**.

We can think of each rotten orange as a starting point.

Every minute, the rot spreads to its neighboring fresh oranges.

Therefore:

```text
1 BFS Level = 1 Minute
```

There can be multiple rotten oranges at the beginning, so we put **all initially rotten oranges into the queue**.

This is called **Multi-Source BFS**.

We also keep track of the number of fresh oranges.

Whenever a fresh orange becomes rotten:

```javascript
fresh--;
```

When:

```javascript
fresh === 0
```

all oranges have become rotten.

---

# Approach

1. Traverse the entire grid.
2. Add every initially rotten orange to the queue.
3. Count the number of fresh oranges.
4. Use BFS to process rotten oranges level by level.
5. At the beginning of every BFS level, store:

```javascript
let size = queue.length;
```

This represents the number of rotten oranges that will spread during the current minute.

6. For every rotten orange, check its four neighboring cells.
7. If a neighboring cell contains a fresh orange:

   * Make it rotten.
   * Decrease `fresh`.
   * Add it to the queue.
8. After processing one complete level, increase `minutes`.
9. If fresh oranges remain after BFS finishes, return `-1`.
10. Otherwise, return `minutes`.

---

# Code

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let queue = [];
    let fresh = 0;
    let minutes = 0;

    // Find all initially rotten oranges
    // and count fresh oranges
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }

            if (grid[row][col] === 1) {
                fresh++;
            }
        }
    }

    // Four possible directions
    let directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    // Multi-source BFS
    while (queue.length > 0 && fresh > 0) {

        // Number of rotten oranges at current minute
        let size = queue.length;

        for (let i = 0; i < size; i++) {

            let [row, col] = queue.shift();

            // Check four directions
            for (let [dr, dc] of directions) {

                let newRow = row + dr;
                let newCol = col + dc;

                // Check valid position and fresh orange
                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {

                    // Make fresh orange rotten
                    grid[newRow][newCol] = 2;

                    // Decrease fresh count
                    fresh--;

                    // Add newly rotten orange to queue
                    queue.push([newRow, newCol]);
                }
            }
        }

        // One minute has passed
        minutes++;
    }

    // Fresh oranges are still remaining
    if (fresh > 0) {
        return -1;
    }

    return minutes;
};
```

---

# Dry Run

### Input

```text
[
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]
```

Initial grid:

```text
2 1 1
1 1 0
0 1 1
```

Initially:

```text
queue = [[0, 0]]
fresh = 6
minutes = 0
```

---

## Minute 1

At the beginning:

```text
size = queue.length
     = 1
```

Process:

```text
(0,0)
```

Its fresh neighbors are:

```text
(1,0)
(0,1)
```

They become rotten.

```text
2 2 1
2 1 0
0 1 1
```

Now:

```text
fresh = 4
queue = [[1,0], [0,1]]
minutes = 1
```

---

## Minute 2

Now:

```text
size = 2
```

We process only:

```text
(1,0)
(0,1)
```

Their newly affected oranges become rotten:

```text
2 2 2
2 2 0
0 1 1
```

Now:

```text
fresh = 2
minutes = 2
```

---

## Minute 3

The next oranges spread the rot:

```text
2 2 2
2 2 0
0 2 1
```

```text
fresh = 1
minutes = 3
```

---

## Minute 4

The final fresh orange becomes rotten:

```text
2 2 2
2 2 0
0 2 2
```

Now:

```text
fresh = 0
minutes = 4
```

Return:

```text
4
```

---

# Why Do We Use `size = queue.length`?

This is the most important part of the solution.

Suppose:

```text
queue = [
    [1,0],
    [0,1]
]
```

Then:

```javascript
let size = queue.length;
```

gives:

```text
size = 2
```

We process exactly these two oranges during the current minute.

While processing them, we may discover new fresh oranges:

```javascript
queue.push([1,1]);
queue.push([0,2]);
```

The queue now contains:

```text
[
    [1,1],
    [0,2]
]
```

But these newly rotten oranges **do not spread during the same minute**.

They will be processed during the next BFS level.

Therefore:

```text
Minute 1 → Current rotten oranges
Minute 2 → Newly rotten oranges
Minute 3 → Their newly rotten neighbors
```

This is why:

```javascript
let size = queue.length;
```

is necessary.

---

# Multi-Source BFS

If the grid starts with multiple rotten oranges:

```text
2 1 1
1 1 1
1 1 2
```

we put **both** rotten oranges into the queue:

```javascript
queue = [
    [0,0],
    [2,2]
];
```

Both sources start spreading at the same time.

This is called:

```text
Multi-Source BFS
```

---

# Why Do We Check Four Directions?

For every rotten orange at:

```text
(row, col)
```

we check:

```text
(row - 1, col)  → Up
(row + 1, col)  → Down
(row, col - 1)  → Left
(row, col + 1)  → Right
```

These are stored as:

```javascript
let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];
```

---

# When Do We Return `-1`?

Consider:

```text
[
    [2, 1, 0],
    [0, 0, 0],
    [0, 1, 1]
]
```

The bottom fresh oranges cannot be reached by any rotten orange.

BFS eventually stops, but:

```javascript
fresh > 0
```

Therefore:

```javascript
return -1;
```

---

# Complexity Analysis

### Time Complexity: `O(rows × cols)`

Every cell is processed at most once.

### Space Complexity: `O(rows × cols)`

In the worst case, the queue can contain many cells.

---

# Key Takeaways

* Use **BFS** because the rot spreads minute by minute.
* Put **all initially rotten oranges** into the queue.
* This is called **Multi-Source BFS**.
* Each BFS level represents **one minute**.
* Use `queue.length` to separate one minute from the next.
* Check all four directions.
* Keep track of the number of fresh oranges.
* Return `-1` if some fresh oranges cannot be reached.

---

## Pattern Learned

* Breadth First Search (BFS)
* Multi-Source BFS
* Queue
* Grid Traversal
* Matrix Traversal
* Four-Direction Traversal
* Level-by-Level Processing
* Tracking Time with BFS
* Visited State Using Grid Mutation
