# 104. Maximum Depth of Binary Tree

**Difficulty:** Easy

## Problem Statement

Given the `root` of a binary tree, return its **maximum depth**.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**LeetCode:** https://leetcode.com/problems/maximum-depth-of-binary-tree/

---

# Intuition

To find the maximum depth, we need to know:

- The depth of the left subtree.
- The depth of the right subtree.

The maximum depth of the current node is simply:

- `1` (current node)
- plus the larger of the two subtree depths.

We can solve this naturally using **Depth First Search (DFS)** and **Recursion**.

---

# Approach

1. If the current node is `null`, return `0` because an empty tree has a depth of `0`.
2. Recursively calculate the depth of the left subtree.
3. Recursively calculate the depth of the right subtree.
4. Return `1 + Math.max(leftDepth, rightDepth)`.

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
 * @return {number}
 */
var maxDepth = function(root) {

    // Base Case
    if (root === null) {
        return 0;
    }

    // Find depth of left subtree
    let leftDepth = maxDepth(root.left);

    // Find depth of right subtree
    let rightDepth = maxDepth(root.right);

    // Return the maximum depth
    return 1 + Math.max(leftDepth, rightDepth);
};
```

---

# Dry Run

### Input

```text
        3
      /   \
     9     20
          /  \
         15   7
```

---

### Step 1

Start from the root.

```text
Current Node = 3
```

Find the depth of its left and right subtrees.

---

### Step 2

Go to node **9**.

```text
9
```

Both children are `null`.

```text
leftDepth = 0
rightDepth = 0

Depth = 1 + max(0,0)
      = 1
```

Return:

```text
1
```

---

### Step 3

Go to node **20**.

```text
      20
     /  \
    15   7
```

Find the depth of both children.

Node **15** is a leaf.

```text
Depth = 1
```

Node **7** is also a leaf.

```text
Depth = 1
```

Now compute node **20**.

```text
Depth = 1 + max(1,1)
      = 2
```

Return:

```text
2
```

---

### Step 4

Go back to the root.

Now we have:

```text
leftDepth = 1
rightDepth = 2
```

Maximum depth:

```text
1 + max(1,2)

= 3
```

### Output

```text
3
```

---

# Recursion Flow

```text
maxDepth(3)
│
├── maxDepth(9)
│      ├── null → 0
│      └── null → 0
│
│      returns 1
│
└── maxDepth(20)
       │
       ├── maxDepth(15)
       │      ├── null → 0
       │      └── null → 0
       │
       │      returns 1
       │
       └── maxDepth(7)
              ├── null → 0
              └── null → 0
              
              returns 1

20 returns 2

3 returns 3
```

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - Every node is visited exactly once.

- **Space Complexity:** `O(h)`
  - `h` is the height of the tree due to the recursion stack.
  - **Balanced Tree:** `O(log n)`
  - **Skewed Tree:** `O(n)`

---

# Key Takeaways

- The depth of an empty tree is `0`.
- Solve the left and right subtrees recursively.
- The current node's depth depends on the deeper subtree.
- Add `1` to include the current node.
- This problem introduces the **Post-order DFS** pattern where child nodes return values before the parent computes its answer.

---

## Pattern Learned

- Binary Trees
- Depth First Search (DFS)
- Recursion
- Post-order Traversal
- Divide and Conquer
- Recursive Return Values
```