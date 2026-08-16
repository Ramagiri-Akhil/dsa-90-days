# 101. Symmetric Tree

**Difficulty:** Easy

## Problem Statement

Given the root of a binary tree, check whether it is a **mirror of itself** (i.e., symmetric around its center).

A tree is symmetric if:

* The left subtree is a mirror reflection of the right subtree.

Return `true` if the tree is symmetric, otherwise return `false`.

**LeetCode:** https://leetcode.com/problems/symmetric-tree/

---

# Intuition

This problem is about checking whether two subtrees are **mirror images** of each other.

Instead of comparing nodes in the same direction, we compare them in a **cross pattern**:

```text
left.left  ↔ right.right
left.right ↔ right.left
```

So the idea is:

```text
We are not checking equality — we are checking mirror structure.
```

We use **DFS recursion** to compare pairs of nodes.

---

# Approach

1. If root is `null`, return `true`.
2. Create a helper function `isMirror(left, right)`.
3. In `isMirror`:

   * If both nodes are `null`, return `true`.
   * If only one is `null`, return `false`.
   * If values are not equal, return `false`.
4. Recursively check:

   * `left.left` with `right.right`
   * `left.right` with `right.left`
5. Return `true` only if both recursive checks are `true`.

---

# Code

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    // Base case: empty tree is symmetric
    if (root === null) {
        return true;
    }

    // Helper function to check mirror structure
    function isMirror(left, right) {

        // Both nodes are null
        if (left === null && right === null) {
            return true;
        }

        // One node is null
        if (left === null || right === null) {
            return false;
        }

        // Values must match
        if (left.val !== right.val) {
            return false;
        }

        // Cross comparison (mirror check)
        return (
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    // Start comparison from root's children
    return isMirror(root.left, root.right);
};
```

---

# Dry Run

### Input

```text
        1
       / \
      2   2
     / \ / \
    3  4 4  3
```

---

## Step 1: Compare root children

```text
left = 2
right = 2
```

Values match ✅

---

## Step 2: Cross comparison

### Left subtree vs Right subtree

```text
left.left  ↔ right.right
3          ↔ 3 ✅

left.right ↔ right.left
4          ↔ 4 ✅
```

---

## Step 3: All checks pass

Every mirrored pair matches.

---

## Result

```text
true
```

---

# Why Cross Comparison?

A symmetric tree is not:

```text
same structure
```

It is:

```text
mirror structure
```

So we flip the comparison direction.

---

# Tree Comparison Pattern

### Same Tree (Day 55)

```text
left.left  ↔ right.left
left.right ↔ right.right
```

### Symmetric Tree (Day 63)

```text
left.left  ↔ right.right
left.right ↔ right.left
```

---

# Why Use Recursion?

Because:

* Each subtree is itself a tree
* Mirror property must hold at every level
* DFS naturally explores structure

---

# Complexity Analysis

### Time Complexity: `O(n)`

Every node is visited once.

### Space Complexity: `O(h)`

Where `h` is the height of the tree (recursion stack).

---

# Key Takeaways

* Symmetry = **mirror comparison**, not equality
* Use **DFS recursion with paired nodes**
* Compare **cross children**
* Base cases are critical (null handling)
* Pattern is similar to tree equality but reversed

---

# Pattern Learned

* Tree Recursion
* DFS Traversal
* Mirror Structure Checking
* Pairwise Node Comparison
* Binary Tree Symmetry Pattern
* Divide and Conquer on Trees

---

## 🔥 Pattern Insight

This problem is a **mirror version of Same Tree (Day 55)**:

```text
Day 55 → identical structure
Day 63 → mirrored structure
```

---

## 🚀 Day 63 Complete

You’ve now mastered:

* Tree symmetry logic
* Mirror-based recursion
* Pairwise DFS traversal
* Structural comparison patterns

🔥 Another strong step in your tree mastery journey!
