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
| 72  | Unique Paths        | #62     | Medium       | DFS / Grid Traversal       |

---

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


# Repository Structure

```text
Grids/
├── README.md
├── Day-58-Rotting-Oranges.js
├── Day-58-Rotting-Oranges.md
├── Day-59-Number-of-Islands.js
├── Day-59-Number-of-Islands.md
├── Day-60-Flood-Fill.js
├── Day-60-Flood-Fill.md
├── Day-71-Unique-Paths.js
└── Day-71-Unique-Paths.md
```

---



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
