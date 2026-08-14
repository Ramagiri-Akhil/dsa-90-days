# Day 61 — Lowest Common Ancestor of a Binary Tree

## 🧩 Problem

Given a binary tree, find the **Lowest Common Ancestor (LCA)** of two given nodes `p` and `q`.

The Lowest Common Ancestor is the lowest node in the tree that has both `p` and `q` as descendants.

---

## 💡 Approach

We use **Depth First Search (DFS) with recursion**.

At every node:

1. If the node is `null`, return `null`.
2. If the node is `p` or `q`, return the current node.
3. Recursively search the **left subtree**.
4. Recursively search the **right subtree**.
5. If both left and right return a node, the current node is the LCA.
6. Otherwise, return whichever side contains `p` or `q`.

### Key Idea

```text
              root
             /    \
          left    right
            ↓       ↓
          found?   found?
             \     /
              \   /
            both found
                 ↓
             root = LCA
```

---

## 💻 JavaScript Solution

```javascript
var lowestCommonAncestor = function(root, p, q) {

    // Base case
    if (root === null || root === p || root === q) {
        return root;
    }

    // Search left subtree
    let left = lowestCommonAncestor(root.left, p, q);

    // Search right subtree
    let right = lowestCommonAncestor(root.right, p, q);

    // p and q are found on different sides
    if (left !== null && right !== null) {
        return root;
    }

    // Return the side where p or q was found
    return left !== null ? left : right;
};
```

---

## 🔍 Example

```text
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4
```

For:

```text
p = 5
q = 1
```

At node `3`:

```text
left  → 5
right → 1
```

Both sides return a node, so:

```text
LCA = 3
```

---

## ⏱️ Complexity

**Time Complexity:** `O(n)`

We may visit every node once.

**Space Complexity:** `O(h)`

Where `h` is the height of the tree because of the recursion stack.

In the worst case:

```text
O(n)
```

For a balanced tree:

```text
O(log n)
```

---

## 🧠 What I Learned

* DFS on Binary Trees
* Recursion
* Base Cases
* Returning information from recursive calls
* Comparing results from left and right subtrees
* Lowest Common Ancestor pattern
* Understanding how recursion moves information **back up the tree**

### 🔥 Pattern to Remember

> **If left and right both find something, the current node is the LCA. Otherwise, return the side that found something.**

**Day 61/90 ✅ — Lowest Common Ancestor of a Binary Tree**
