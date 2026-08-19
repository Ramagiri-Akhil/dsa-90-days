Here is your **clean, structured draft for Day 66 — 230. Kth Smallest Element in a BST**, matching your previous format:

---

# 230. Kth Smallest Element in a BST

**Difficulty:** Medium

## Problem Statement

Given the root of a Binary Search Tree (BST) and an integer `k`, return the **kth smallest value** (1-indexed) among all the values of the nodes in the tree.

A BST is defined as:

* Left subtree contains values **less than** the root
* Right subtree contains values **greater than** the root
* Both subtrees are also BSTs

**LeetCode:** https://leetcode.com/problems/kth-smallest-element-in-a-bst/

---

# Intuition

A Binary Search Tree has a very important property:

```text
Inorder traversal of a BST gives sorted order ✅
```

So instead of thinking about the tree structure, we can think in terms of:

```text
Sorted sequence of values
```

The problem then becomes:

```text
Find the kth element in sorted order
```

---

# Key Insight

We do not need to store all values.

We can:

* Traverse the tree in **inorder (Left → Root → Right)**
* Count nodes as we visit them
* Stop when we reach the kth node

---

# Approach

We use **DFS Inorder Traversal** with a counter.

### Steps:

1. Initialize:

   * `count = 0`
   * `result = 0`

2. Perform inorder traversal:

   * Traverse left subtree
   * Visit node → increment count
   * If `count === k`, store result and stop
   * Traverse right subtree

3. Return result

---

# Code

```javascript
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let count = 0;
    let result = 0;

    function inorder(node) {

        if (node === null) {
            return;
        }

        // Traverse left subtree
        inorder(node.left);

        // Visit current node
        count++;

        if (count === k) {
            result = node.val;
            return;
        }

        // Traverse right subtree
        inorder(node.right);
    }

    inorder(root);

    return result;
};
```

---

# Dry Run

### Input

```text
        5
       / \
      3   7
     / \   \
    2   4   8
```

---

## Step 1: Inorder Traversal

```text
2 → 3 → 4 → 5 → 7 → 8
```

---

## Step 2: Track k = 3

| Step | Node | Count | Action   |
| ---- | ---- | ----- | -------- |
| 1    | 2    | 1     | continue |
| 2    | 3    | 2     | continue |
| 3    | 4    | 3     | ✅ found  |

---

## Final Answer

```text
kth smallest = 4
```

---

# Why This Works

Because BST inorder traversal produces:

```text
Sorted order of elements
```

So:

```text
kth visited node = kth smallest element
```

---

# Optimization Insight

We stop early once we find the answer:

```text
No need to traverse entire tree
```

This makes it efficient for large trees.

---

# Complexity Analysis

### Time Complexity: `O(H + k)`

* We traverse only until kth element is found
* H = height of tree

### Space Complexity: `O(H)`

* Recursion stack

---

# Common Mistake

### ❌ Wrong idea:

```text
Sort all nodes and pick kth element
```

This uses extra space and is unnecessary.

---

# Correct Approach

```text
Use inorder traversal + counter
```

---

# Key Takeaways

* BST inorder traversal = sorted order
* Use DFS with counter for kth element
* Stop early once result is found
* No need to store full traversal

---

# Pattern Learned

* Tree DFS
* Inorder Traversal
* BST Properties
* Early Termination in Recursion
* Controlled Traversal with State

---

# 🔥 Pattern Insight

Instead of:

```text
Build full sorted array ❌
```

We do:

```text
Traverse only until kth element ✅
```

---

# 🚀 Day 66 Complete

You’ve now mastered:

* BST inorder traversal pattern
* Kth element extraction
* Controlled DFS traversal
* Early stopping optimization

🔥 Another core BST pattern unlocked!
