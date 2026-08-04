# 226. Invert Binary Tree

**Difficulty:** Easy

## Problem Statement

Given the `root` of a binary tree, invert the tree and return its root.

Inverting a binary tree means swapping the left and right child of every node in the tree.

**LeetCode:** https://leetcode.com/problems/invert-binary-tree/

---

# Intuition

To invert a binary tree, every node needs to swap its left and right child.

Instead of manually traversing every node, we can use **Depth First Search (DFS)** with **Recursion**.

For every node:

1. Swap its left and right child.
2. Recursively invert the left subtree.
3. Recursively invert the right subtree.

The recursion automatically visits every node exactly once.

---

# Approach

1. If the current node is `null`, return `null`.
2. Swap the left and right child of the current node.
3. Recursively invert the left subtree.
4. Recursively invert the right subtree.
5. Return the current node.

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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    // Base Case
    if (root === null) {
        return null;
    }

    // Swap left and right child
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert left subtree
    invertTree(root.left);

    // Recursively invert right subtree
    invertTree(root.right);

    return root;
};
```

---

# Dry Run

### Input

```text
        4
      /   \
     2     7
    / \   / \
   1   3 6   9
```

---

### Step 1

Current node = **4**

Swap its children.

```text
        4
      /   \
     7     2
    / \   / \
   6   9 1   3
```

Now recursively invert the left subtree.

---

### Step 2

Current node = **7**

Swap its children.

```text
    7
   / \
  9   6
```

Both children are leaf nodes, so recursion reaches `null` and returns.

---

### Step 3

Go back to node **2**.

Swap its children.

```text
    2
   / \
  3   1
```

Again, both children are leaf nodes.

Recursion returns.

---

### Final Output

```text
        4
      /   \
     7     2
    / \   / \
   9   6 3   1
```

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - Every node is visited exactly once.

- **Space Complexity:** `O(h)`
  - `h` is the height of the tree due to the recursive call stack.
  - Worst Case (Skewed Tree): `O(n)`
  - Balanced Tree: `O(log n)`

---

# Key Takeaways

- Use **DFS + Recursion** to traverse the tree.
- Swap the left and right child of every node.
- The recursion stops when it reaches a `null` node.
- Every node is visited only once, making the solution efficient.
- Unlike Backtracking, there is **no undo step** because the swaps are permanent.

---

## Pattern Learned

- Binary Trees
- Depth First Search (DFS)
- Recursion
- Tree Traversal
- Base Case (`root === null`)
- Swapping Child Nodes