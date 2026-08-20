# 701. Insert into a Binary Search Tree

**Difficulty:** Medium

## Problem Statement

Given the root of a Binary Search Tree (BST) and a value `val`, insert the value into the BST and return the root of the modified tree.

You must ensure that the tree remains a valid BST after insertion.

A BST follows these rules:

* Left subtree contains values **smaller than** the root
* Right subtree contains values **greater than** the root
* Both subtrees are also valid BSTs

**LeetCode:** https://leetcode.com/problems/insert-into-a-binary-search-tree/

---

# Intuition

A BST gives us a very powerful property:

```text
We always know where a value should go ✅
```

So instead of searching the entire tree, we can:

* Compare the value with the current node
* Decide to go left or right
* Repeat until we find an empty spot

This is similar to **binary search**, but on a tree.

---

# Key Insight

We do NOT need to rebuild the tree.

We only need to:

```text
Find the correct null position and insert the new node there
```

So the problem becomes:

```text
Follow BST rules until we reach a null position
```

---

# Approach

We use **Recursive DFS guided by BST property**.

### Steps:

1. If the current node is `null`, create and return a new node.
2. Compare `val` with `root.val`:

   * If `val < root.val` → go to left subtree
   * Else → go to right subtree
3. Attach the returned subtree back to the current node
4. Return the root

---

# Code

```javascript
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    // Base case: found correct position
    if (root === null) {
        return new TreeNode(val);
    }

    // Go left if value is smaller
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    }

    // Go right if value is larger
    else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};
```

---

# Dry Run

### Input BST

```text
        8
       / \
      3   10
     / \    \
    1   6    14
       / \
      4   7
```

### Insert Value: `5`

---

## Step-by-Step Traversal

```text
5 < 8  → go LEFT
5 > 3  → go RIGHT
5 < 6  → go LEFT
5 > 4  → go RIGHT
```

We reach a null position:

```text
4.right === null
```

So we insert:

```javascript
new TreeNode(5)
```

---

## Final Tree

```text
        8
       / \
      3   10
     / \    \
    1   6    14
       / \
      4   7
       \
        5
```

---

# Why This Works

Because BST guarantees:

```text
Left < Root < Right
```

So at every step:

```text
We eliminate half the search space logically
```

This makes insertion efficient and predictable.

---

# Important Insight

We are not “searching randomly” — we are:

```text
Following a deterministic path based on comparisons
```

Each comparison tells us exactly where to go.

---

# Complexity Analysis

### Time Complexity: `O(H)`

* We only traverse one path from root to leaf
* `H` = height of the tree

### Space Complexity: `O(H)`

* Recursion stack usage

For a balanced BST:

```text
O(log n)
```

For a skewed tree:

```text
O(n)
```

---

# Common Mistake

### ❌ Incorrect Approach:

```text
Convert tree to array → insert → rebuild BST
```

This is unnecessary and inefficient.

---

# Correct Approach

```text
Use BST property to directly find insertion point
```

---

# Key Takeaways

* BST guides you left or right at every step
* Insertion is just a controlled traversal
* No restructuring needed
* Recursion naturally handles pointer updates
* Always return the root back up the call stack

---

# Pattern Learned

* Binary Search Tree Traversal
* Recursive Tree Construction
* Divide-and-Conquer Decision Making
* Pointer Rewiring in Trees

---

# 🔥 Pattern Insight

Instead of:

```text
Rebuilding the tree ❌
```

We simply:

```text
Walk down the correct path and insert ✅
```

---

# 🚀 Day 67 Complete

You’ve now mastered:

* BST structure understanding
* Recursive insertion logic
* Tree pointer manipulation
* Guided traversal using comparisons

🔥 Another core BST operation unlocked!
