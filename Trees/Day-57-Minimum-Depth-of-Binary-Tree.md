# 111. Minimum Depth of Binary Tree

**Difficulty:** Easy

## Problem Statement

Given the `root` of a binary tree, return its **minimum depth**.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest **leaf node**.

A leaf node is a node that has no left or right child.

**LeetCode:** https://leetcode.com/problems/minimum-depth-of-binary-tree/

---

# Intuition

We need to find the shortest path from the root to a **leaf node**.

This looks similar to the Maximum Depth problem, but there is one important difference.

For Maximum Depth, we can simply use:

```javascript
1 + Math.max(leftDepth, rightDepth)
```

For Minimum Depth, we might think:

```javascript
1 + Math.min(leftDepth, rightDepth)
```

But this doesn't always work.

Consider:

```text
        2
         \
          3
           \
            4
```

The left subtree is `null`, so its depth is `0`.

If we blindly use `Math.min()`:

```text
1 + Math.min(0, 2)
= 1
```

That would be wrong.

The shortest path must end at a **leaf**, so a `null` child cannot be treated as a valid path.

Therefore:

- If both children are `null`, return `1`.
- If the left child is `null`, we must go right.
- If the right child is `null`, we must go left.
- If both children exist, take the minimum depth.

---

# Approach

1. If `root` is `null`, return `0`.
2. If the left child is `null`, recursively find the minimum depth of the right subtree.
3. If the right child is `null`, recursively find the minimum depth of the left subtree.
4. If both children exist, recursively calculate both depths and take the smaller one.
5. Add `1` for the current node.

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
var minDepth = function(root) {

    // Base Case
    if (root === null) {
        return 0;
    }

    // If left child doesn't exist,
    // we must go through the right subtree
    if (root.left === null) {
        return 1 + minDepth(root.right);
    }

    // If right child doesn't exist,
    // we must go through the left subtree
    if (root.right === null) {
        return 1 + minDepth(root.left);
    }

    // Both children exist
    return 1 + Math.min(
        minDepth(root.left),
        minDepth(root.right)
    );
};
```

---

# Dry Run

### Example

```text
        3
       / \
      9   20
         /  \
        15   7
```

---

### Step 1 — Node 9

Node `9` is a leaf.

```text
left = null
right = null
```

The left child is `null`, so:

```javascript
return 1 + minDepth(null);
```

And:

```text
minDepth(null) = 0
```

Therefore:

```text
minDepth(9) = 1
```

---

### Step 2 — Node 15

Node `15` is also a leaf.

```text
minDepth(15) = 1
```

---

### Step 3 — Node 7

Node `7` is also a leaf.

```text
minDepth(7) = 1
```

---

### Step 4 — Node 20

Both children exist:

```text
leftDepth = 1
rightDepth = 1
```

Therefore:

```text
1 + Math.min(1, 1)
= 2
```

So:

```text
minDepth(20) = 2
```

---

### Step 5 — Root 3

Now:

```text
leftDepth = 1
rightDepth = 2
```

Therefore:

```text
1 + Math.min(1, 2)
= 2
```

Final answer:

```text
2
```

The shortest path is:

```text
3 → 9
```

---

# Dry Run — Only Right Children

Consider:

```text
        2
         \
          3
           \
            4
             \
              5
               \
                6
```

At node `2`:

```text
left = null
right = 3
```

So:

```text
minDepth(2)
= 1 + minDepth(3)
```

At node `3`:

```text
minDepth(3)
= 1 + minDepth(4)
```

At node `4`:

```text
minDepth(4)
= 1 + minDepth(5)
```

At node `5`:

```text
minDepth(5)
= 1 + minDepth(6)
```

At node `6`:

```text
minDepth(6)
= 1
```

Now the results return back up:

```text
minDepth(5) = 1 + 1 = 2

minDepth(4) = 1 + 2 = 3

minDepth(3) = 1 + 3 = 4

minDepth(2) = 1 + 4 = 5
```

Therefore:

```text
5
```

The important thing to understand is that `root` changes during each recursive call:

```text
root = 2
   ↓
root = 3
   ↓
root = 4
   ↓
root = 5
   ↓
root = 6
```

The answer is then built while recursion returns back up.

---

# Why Can't We Simply Use `Math.min()`?

We cannot always do:

```javascript
return 1 + Math.min(
    minDepth(root.left),
    minDepth(root.right)
);
```

Because `null` returns `0`.

For example:

```text
        1
       /
      2
     /
    3
```

If we use `Math.min()` directly:

```text
leftDepth = 2
rightDepth = 0

1 + Math.min(2, 0)
= 1
```

❌ Wrong.

The right side isn't a path to a leaf.

The actual path is:

```text
1 → 2 → 3
```

So the minimum depth is:

```text
3
```

That's why we handle missing children first.

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - Every node may be visited once.

- **Space Complexity:** `O(h)`
  - `h` is the height of the tree because of the recursion stack.
  - Balanced Tree: `O(log n)`
  - Skewed Tree: `O(n)`

---

# Key Takeaways

- Minimum depth must always end at a **leaf node**.
- `null` is not a valid path to a leaf.
- If one child is missing, we must choose the existing child.
- Only when both children exist do we use `Math.min()`.
- The recursive calls go down the tree, and the calculated depths return back up.

---

## Pattern Learned

- Binary Trees
- Depth First Search (DFS)
- Recursion
- Minimum Depth
- Tree Height
- Handling Null Children
- `Math.min()`
- Recursive Return Values
- Leaf Node Detection