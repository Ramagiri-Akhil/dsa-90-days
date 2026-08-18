# 98. Validate Binary Search Tree

**Difficulty:** Medium

## Problem Statement

Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST).

A BST is valid if:

* The left subtree of a node contains only nodes with values **less than** the node’s value.
* The right subtree of a node contains only nodes with values **greater than** the node’s value.
* Both left and right subtrees must also be valid BSTs.

**LeetCode:** https://leetcode.com/problems/validate-binary-search-tree/

---

# Intuition

A Binary Search Tree is not just about local comparisons.

A common mistake is checking only:

```text
node.left < node < node.right ❌ (incorrect)
```

Instead, every node must satisfy a **global constraint**:

```text
All values in left subtree < root < all values in right subtree
```

So we need to track a **valid range (min, max)** for every node.

---

# Key Insight

Each node must lie within a valid boundary:

```text
(min, max)
```

* Left subtree → max becomes current node value
* Right subtree → min becomes current node value

---

# Approach

We use DFS with range validation.

### Steps:

1. Start with the full range:

   ```text
   (-Infinity, +Infinity)
   ```

2. For each node:

   * If node value is not in range → return false
   * Recursively validate:

     * Left subtree → `(min, node.val)`
     * Right subtree → `(node.val, max)`

3. If all nodes satisfy constraints → return true

---

# Code

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    function validate(node, min, max) {

        // Base case: empty subtree is valid
        if (node === null) {
            return true;
        }

        // Violation of BST property
        if (node.val <= min || node.val >= max) {
            return false;
        }

        // Check left and right subtrees with updated ranges
        return (
            validate(node.left, min, node.val) &&
            validate(node.right, node.val, max)
        );
    }

    return validate(root, -Infinity, Infinity);
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

## Step 1: Start at root

```text
5 → range (-∞, +∞) ✅
```

---

## Step 2: Left subtree

Node `3` → range (-∞, 5) ✅

* 2 → (-∞, 3) ✅
* 4 → (3, 5) ✅

---

## Step 3: Right subtree

Node `7` → range (5, +∞) ✅

* 8 → (7, +∞) ✅

---

## Final Result

```text
All nodes satisfy constraints → TRUE
```

---

# Why This Works

Because BST validity depends on **entire subtree constraints**, not just parent-child relationships.

The range method ensures:

```text
Every node respects ALL ancestors
```

---

# Common Mistake

### ❌ Wrong approach:

```text
if (node.left.val < node.val && node.right.val > node.val)
```

This fails because it ignores deeper violations.

---

# Correct Approach

```text
Track valid range for every node
```

---

# Complexity Analysis

### Time Complexity: `O(n)`

Each node is visited once.

### Space Complexity: `O(h)`

* Recursion stack
* `h = height of tree`

---

# Key Takeaways

* BST validation requires **global constraints**
* Range checking is the correct approach
* Each node inherits constraints from ancestors
* DFS is ideal for tree validation problems

---

# Pattern Learned

* Tree DFS
* Range Validation
* Recursion on Trees
* BST Property Enforcement
* Divide and Conquer
* Constraint Propagation

---

# 🔥 Pattern Insight

Instead of checking:

```text
parent-child relationship ❌
```

We enforce:

```text
ancestor-aware constraints ✅
```

---

# 🚀 Day 65 Complete

You’ve now mastered:

* BST validation using DFS
* Range-based recursion
* Tree constraint propagation
* Global property enforcement in trees

🔥 Another core BST pattern unlocked!
