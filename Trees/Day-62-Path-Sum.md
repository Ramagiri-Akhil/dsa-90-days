# 112. Path Sum

**Difficulty:** Easy

## Problem Statement

You are given the root of a binary tree and an integer `targetSum`.

Return `true` if there exists a **root-to-leaf path** such that the sum of all node values along the path equals `targetSum`.

A **leaf node** is a node with no children.

Return `false` otherwise.

**LeetCode:** https://leetcode.com/problems/path-sum/

---

# Intuition

This problem is a classic example of **Depth First Search (DFS)** on a binary tree.

We explore every possible path from the root to the leaf and keep track of the remaining sum needed.

At each node:

```text
remainingSum = targetSum - currentNodeValue
```

We pass this updated value down the tree.

The key idea is:

```text
We only check the sum when we reach a LEAF node.
```

So instead of calculating full path sums separately, we continuously reduce the target.

---

# Approach

1. Start DFS from the root node.
2. If the node is `null`, return `false`.
3. Subtract the current node’s value from `targetSum`.
4. If the node is a **leaf node**, check:

   ```javascript
   targetSum === node.val
   ```
5. Recursively check:

   * Left subtree
   * Right subtree
6. If either subtree returns `true`, return `true`.
7. If no valid path is found, return `false`.

---

# Code

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    // Base case: empty node
    if (root === null) {
        return false;
    }

    // Check if we reached a leaf node
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }

    // Reduce target sum
    let remainingSum = targetSum - root.val;

    // Explore left and right subtrees
    return (
        hasPathSum(root.left, remainingSum) ||
        hasPathSum(root.right, remainingSum)
    );
};
```

---

# Dry Run

### Input

```text
        5
       / \
      4   8
     /
    11
   /  \
  7    2
```

```text
targetSum = 22
```

---

## Step 1: Start at root

```text
Node = 5
Remaining = 22 - 5 = 17
```

Go left and right.

---

## Step 2: Go left (4)

```text
Remaining = 17 - 4 = 13
```

---

## Step 3: Go left (11)

```text
Remaining = 13 - 11 = 2
```

---

## Step 4: Check leaf nodes

### Left leaf (7)

```text
2 - 7 ≠ 0 ❌
```

### Right leaf (2)

```text
2 - 2 = 0 ✅
```

---

## Result

A valid root-to-leaf path exists:

```text
5 → 4 → 11 → 2
```

Sum:

```text
5 + 4 + 11 + 2 = 22
```

Return:

```text
true
```

---

# Why Do We Check Only Leaf Nodes?

A valid path must:

```text
Start at root
AND
End at leaf
```

So intermediate nodes are not valid endpoints.

---

# Why Do We Pass Remaining Sum?

Instead of tracking full path:

```text
5 + 4 + 11 + 2
```

We simplify it as:

```text
22 → 17 → 13 → 2 → 0
```

This makes recursion cleaner and avoids extra storage.

---

# Tree DFS Pattern

At every node:

```text
Check current node
↓
Reduce target
↓
Go left
↓
Go right
↓
Return OR result
```

---

# Complexity Analysis

### Time Complexity: `O(n)`

Every node is visited once.

### Space Complexity: `O(h)`

Where `h` is the height of the tree (recursion stack).

---

# Key Takeaways

* Use **DFS recursion** for tree path exploration.
* Pass **remaining target sum downward**.
* Only validate at **leaf nodes**.
* Return `true` if any path matches.
* This is a **root-to-leaf path problem pattern**.

---

# Pattern Learned

* Depth First Search (DFS)
* Tree Recursion
* Root-to-Leaf Path
* Passing State Through Recursion
* Backtracking-style Exploration
* Binary Tree Traversal
* Conditional Leaf Validation

---

## 🔥 Pattern Insight

This problem is the opposite of LCA (Day 61):

```text
Day 61 → Information flows UP the tree
Day 62 → Information flows DOWN the tree
```

---

## 🚀 Day 62 Complete

You’ve now mastered:

* Tree traversal patterns
* DFS recursion flow
* Root-to-leaf path problems
* State propagation in recursion

🔥 Keep going — you're building strong tree intuition!
