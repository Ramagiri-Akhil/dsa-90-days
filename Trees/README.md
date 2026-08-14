# Trees

This folder contains binary tree and tree-based DSA problems solved as part of my **90-Day DSA Challenge**.

The problems focus on tree traversal, recursion, DFS, BFS, binary tree properties, and common tree problem-solving patterns.

---

## Problems Solved

| Day | Problem | LeetCode | Difficulty | Main Concept |
| --- | --- | --- | --- | --- |
| 51 | Invert Binary Tree | #226 | Easy | DFS / Recursion |
| 52 | Maximum Depth of Binary Tree | #104 | Easy | DFS / Recursion |
| 53 | Diameter of Binary Tree | #543 | Easy | DFS / Recursion |
| 54 | Balanced Binary Tree | #110 | Easy | DFS / Height |
| 55 | Same Tree | #100 | Easy | DFS / Recursion |
| 56 | Binary Tree Level Order Traversal | #102 | Medium | BFS / Queue |
| 57 | Minimum Depth of Binary Tree | #111 | Easy | DFS / Recursion |
| 61 | Lowest Common Ancestor of a Binary Tree | #236 | Medium | DFS / Recursion |

---

# Day 51 — Invert Binary Tree

### Problem

Given the root of a binary tree, invert the tree and return its root.

### Approach

Use recursion to swap the left and right children of every node.

```text
Current Node
     ↓
Swap Left and Right
     ↓
Invert Left Subtree
     ↓
Invert Right Subtree