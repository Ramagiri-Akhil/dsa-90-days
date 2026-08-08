# 100. Same Tree

**Difficulty:** Easy

## Problem Statement

Given the roots of two binary trees `p` and `q`, determine if the two trees are the same.

Two binary trees are considered the same if:

1. They have the same structure.
2. Corresponding nodes have the same values.

Return `true` if the trees are the same, otherwise return `false`.

**LeetCode:** https://leetcode.com/problems/same-tree/

---

# Intuition

We need to compare two trees node by node.

Instead of traversing one tree at a time, we can traverse both trees simultaneously using **DFS + Recursion**.

At every pair of nodes, there are three important cases:

1. Both nodes are `null` → they match.
2. Only one node is `null` → structures are different.
3. Both nodes exist → compare their values.

If the values are the same, we recursively compare:

- Left subtree of `p` with left subtree of `q`.
- Right subtree of `p` with right subtree of `q`.

Both subtrees must match, so we use `&&`.

---

# Approach

1. Create a recursive function `dfs(p, q)`.
2. If both nodes are `null`, return `true`.
3. If one node is `null`, return `false`.
4. If their values are different, return `false`.
5. Recursively compare the left subtrees.
6. Recursively compare the right subtrees.
7. Return `true` only if both subtrees are the same.

---

# Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    function dfs(p, q) {

        // Both nodes are null
        if (p === null && q === null) {
            return true;
        }

        // One node is null
        if (p === null || q === null) {
            return false;
        }

        // Values are different
        if (p.val !== q.val) {
            return false;
        }

        // Both left and right subtrees must match
        return dfs(p.left, q.left) &&
               dfs(p.right, q.right);
    }

    return dfs(p, q);
};