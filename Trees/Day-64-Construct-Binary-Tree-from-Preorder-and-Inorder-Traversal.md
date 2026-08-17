# 105. Construct Binary Tree from Preorder and Inorder Traversal

**Difficulty:** Medium

## Problem Statement

Given two integer arrays:

* `preorder` — preorder traversal of a binary tree
* `inorder` — inorder traversal of the same tree

Construct the original binary tree and return its root.

**LeetCode:** https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

---

# Intuition

This problem is based on the relationship between **preorder and inorder traversals**.

We use two key observations:

### 1. Preorder gives the root

```text
Root → Left → Right
```

So the **first element of preorder is always the root** of the current subtree.

---

### 2. Inorder helps split the tree

```text
Left → Root → Right
```

Once we find the root in inorder, we can split the array:

```text
[ left subtree | root | right subtree ]
```

This tells us exactly which nodes belong to the left and right subtrees.

---

So the idea is:

```text
Preorder → tells WHO is root  
Inorder  → tells WHERE to split
```

---

# Approach

1. Use a pointer `preorderIndex` to track the current root in preorder.
2. Store inorder values in a HashMap for O(1) lookup.
3. Create a recursive function `build(left, right)`:

   * If `left > right`, return `null`
   * Pick current root from preorder
   * Find its index in inorder
   * Recursively build:

     * Left subtree → `left to rootIndex - 1`
     * Right subtree → `rootIndex + 1 to right`
4. Return the constructed root.

---

# Code

```javascript
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let preorderIndex = 0;

    // Map to store inorder value → index
    let inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function build(left, right) {

        // Base case: no elements
        if (left > right) {
            return null;
        }

        // Pick current root from preorder
        let rootValue = preorder[preorderIndex];
        preorderIndex++;

        let root = new TreeNode(rootValue);

        // Find root position in inorder
        let rootIndex = inorderMap.get(rootValue);

        // Build left subtree
        root.left = build(left, rootIndex - 1);

        // Build right subtree
        root.right = build(rootIndex + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};
```

---

# Dry Run

### Input

```text
preorder = [3, 9, 20, 15, 7]
inorder  = [9, 3, 15, 20, 7]
```

---

## Step 1: Root from preorder

```text
preorder[0] = 3
```

So:

```text
        3
```

Find `3` in inorder:

```text
[9, 3, 15, 20, 7]
    ↑
```

Split:

```text
Left  → [9]
Right → [15, 20, 7]
```

---

## Step 2: Build left subtree

Next preorder value:

```text
9
```

It has no children → becomes leaf.

```text
    3
   /
  9
```

---

## Step 3: Build right subtree

Next preorder value:

```text
20
```

Find in inorder:

```text
[15, 20, 7]
     ↑
```

Split:

```text
Left  → [15]
Right → [7]
```

---

## Step 4: Final tree

```text
        3
       / \
      9   20
         /  \
        15   7
```

---

# Why This Works

Because:

* Preorder always gives the **next root**
* Inorder always gives the **structure split**
* Together they uniquely define the tree

---

# Key Insight

```text
Preorder → selects root in order  
Inorder  → defines subtree boundaries
```

---

# Tree Construction Pattern

### Step Flow

```text
Pick Root (Preorder)
        ↓
Find Root Position (Inorder)
        ↓
Split Left / Right
        ↓
Recursively Build Subtrees
```

---

# Why Use HashMap?

Without it:

```text
Finding root in inorder = O(n)
```

With HashMap:

```text
O(1) lookup → total O(n)
```

---

# Complexity Analysis

### Time Complexity: `O(n)`

Each node is processed once.

### Space Complexity: `O(n)`

* HashMap storage
* Recursion stack

---

# Key Takeaways

* Preorder = root selection order
* Inorder = structure definition
* HashMap optimizes index lookup
* Recursion builds tree bottom-up
* Each node is created exactly once

---

# Pattern Learned

* Tree Construction
* DFS Recursion
* Divide and Conquer
* Preorder Traversal
* Inorder Traversal
* HashMap Optimization
* Subtree Splitting Pattern

---

## 🔥 Pattern Insight

This is a classic **Tree Reconstruction Problem**:

```text
Preorder → tells "what is root"
Inorder  → tells "where to split"
```

---

## 🚀 Day 64 Complete

You’ve now mastered:

* Tree construction from traversals
* Recursive tree building
* HashMap optimization
* Divide and conquer on trees
* Subtree decomposition logic

🔥 Another major milestone in your tree journey!
