# Grids

This folder contains grid and matrix-based DSA problems solved as part of my **90-Day DSA Challenge**.

The problems focus on grid traversal, BFS, DFS, matrix manipulation, connected components, and graph-based patterns.

---

## Problems Solved

| Day | Problem           | LeetCode | Difficulty | Main Concept               |
| --- | ----------------- | -------- | ---------- | -------------------------- |
| 58  | Rotting Oranges   | #994     | Medium     | Multi-Source BFS           |
| 59  | Number of Islands | #200     | Medium     | DFS / Connected Components |
| 60  | Flood Fill        | #733     | Easy       | DFS / Grid Traversal       |

---

# Day 58 — Rotting Oranges

### Problem

Given a grid containing empty cells, fresh oranges, and rotten oranges, find the minimum number of minutes required for all fresh oranges to become rotten.

If some fresh oranges can never become rotten, return `-1`.

### Approach

The problem is solved using **Multi-Source BFS**.

All initially rotten oranges are added to the queue before BFS begins.

Each BFS level represents one minute.

```text
Initial Rotten Oranges
        ↓
      Queue
        ↓
     Minute 1
        ↓
     Minute 2
        ↓
     Minute 3
        ↓
       ...
```

### Concepts Learned

* Breadth First Search (BFS)
* Multi-Source BFS
* Queue
* Grid Traversal
* Four-Direction Traversal
* Level-by-Level Processing
* Tracking Time Using BFS
* Multiple Starting Points

### Complexity

**Time:** `O(rows × cols)`

**Space:** `O(rows × cols)`

---

# Day 59 — Number of Islands

### Problem

Given a binary grid containing land (`"1"`) and water (`"0"`), find the number of islands.

An island consists of connected land cells that are connected horizontally or vertically.

### Approach

The problem is solved using **Depth First Search (DFS)**.

We scan the entire grid. Whenever we find an unvisited land cell:

```text
"1"
 ↓
New Island
 ↓
count++
 ↓
DFS
 ↓
Visit all connected land
 ↓
Mark visited cells as "0"
```

This prevents the same island from being counted multiple times.

### Concepts Learned

* Depth First Search (DFS)
* Grid Traversal
* Connected Components
* Four-Direction Traversal
* Recursion
* Visited State
* Matrix Traversal
* Graph Traversal

### Complexity

**Time:** `O(rows × cols)`

Every cell is visited at most once.

**Space:** `O(rows × cols)`

The recursion stack can contain many cells in the worst case.

---

# Day 60 — Flood Fill

### Problem

Given a 2D grid representing an image, a starting cell `(sr, sc)`, and a new color, change the color of the starting cell and all connected cells (4-directionally) that have the same original color.

### Approach

This problem is solved using **Depth First Search (DFS)**.

We first store the original color of the starting cell.

Then we perform DFS and recolor all connected cells that match the original color.

```text
Start Cell (sr, sc)
        ↓
Store Original Color
        ↓
Check Boundary + Color Match
        ↓
Recolor Cell
        ↓
DFS in 4 Directions
```

We also handle the edge case where the original color is the same as the new color.

```text
If originalColor == newColor → return image
```

### Concepts Learned

* Depth First Search (DFS)
* Grid Traversal
* Flood Fill Algorithm
* Recursion
* Connected Components
* Boundary Checking
* Four-Direction Movement

### Complexity

**Time:** `O(rows × cols)`

Each cell is visited at most once.

**Space:** `O(rows × cols)`

Recursion stack in worst case.

---

# BFS vs DFS in Grid Problems

The last three problems demonstrate two important grid traversal patterns.

| Problem           | Technique        | Main Idea                                  |
| ----------------- | ---------------- | ------------------------------------------ |
| Rotting Oranges   | Multi-Source BFS | Spread level by level                      |
| Number of Islands | DFS              | Explore one connected component completely |
| Flood Fill        | DFS              | Recolor connected region                   |

### Rotting Oranges

```text
Multiple Sources
       ↓
      BFS
       ↓
Each level = 1 minute
```

### Number of Islands

```text
Find "1"
   ↓
DFS
   ↓
Explore entire island
   ↓
Mark visited
   ↓
Count +1
```

### Flood Fill

```text
Start Cell
   ↓
Original Color
   ↓
DFS
   ↓
Recolor Connected Region
```

---

# Repository Structure

```text
Grids/
├── README.md
├── Day-58-Rotting-Oranges.js
├── Day-58-Rotting-Oranges.md
├── Day-59-Number-of-Islands.js
├── Day-59-Number-of-Islands.md
├── Day-60-Flood-Fill.js
└── Day-60-Flood-Fill.md
```

---

# Progress

```text
Day 60 / 90
```

🔥 **60 problems completed!**

### Patterns Covered So Far

* BFS
* Multi-Source BFS
* DFS
* Grid Traversal
* Connected Components
* Flood Fill
* Four-Direction Traversal
* Queue
* Recursion
* Tree Traversal
* Matrix Traversal

---

🚀 **60/90 completed — strong progress in grid-based patterns!**
