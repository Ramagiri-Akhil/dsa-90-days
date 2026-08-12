# Grids

This folder contains grid and matrix-based DSA problems solved as part of my **90-Day DSA Challenge**.

The problems focus on grid traversal, BFS, DFS, matrix manipulation, and graph-based patterns.

---

## Problems Solved

| Day | Problem         | LeetCode | Difficulty | Main Concept     |
| --- | --------------- | -------- | ---------- | ---------------- |
| 58  | Rotting Oranges | #994     | Medium     | Multi-Source BFS |

---

## Day 58 — Rotting Oranges

### Problem

Given a grid containing empty cells, fresh oranges, and rotten oranges, determine the minimum number of minutes required for all fresh oranges to become rotten.

If some fresh oranges can never become rotten, return `-1`.

### Approach

The problem is solved using **Multi-Source BFS**.

All initially rotten oranges are added to the queue before BFS begins.

```text
Initial Rotten Oranges
        ↓
      Queue
        ↓
   BFS Level 1
        ↓
     1 minute
        ↓
   BFS Level 2
        ↓
     1 minute
        ↓
      ...
```

Each BFS level represents **one minute**.

### Concepts Learned

* Breadth First Search (BFS)
* Multi-Source BFS
* Queue
* Grid Traversal
* Matrix Traversal
* Four-Direction Traversal
* Level-by-Level Processing
* Tracking Time Using BFS
* Handling Multiple Starting Points
* Detecting Unreachable Cells

### Complexity

**Time Complexity:** `O(rows × cols)`

**Space Complexity:** `O(rows × cols)`

---

## Repository Structure

```text
Grids/
├── README.md
├── Day-58-Rotting-Oranges.js
└── Day-58-Rotting-Oranges.md
```

---

## Progress

```text
Day 58 / 90
```

🔥 **58 problems completed!**
