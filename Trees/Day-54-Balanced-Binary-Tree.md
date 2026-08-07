# 110. Balanced Binary Tree

**Difficulty:** Easy

## Problem Statement

Given the `root` of a binary tree, determine if it is **height-balanced**.

A binary tree is considered **height-balanced** if, for every node, the difference in height between its left and right subtrees is **at most 1**.

Return `true` if the tree is balanced, otherwise return `false`.

**LeetCode:** https://leetcode.com/problems/balanced-binary-tree/

---

# Intuition

A tree is balanced only if **every node** satisfies the following condition:

```text
|Left Height - Right Height| ≤ 1
```

To verify this, we need to know the height of both the left and right subtrees.

Instead of checking the height repeatedly (which would be inefficient), we calculate the height while traversing the tree using **Depth First Search (DFS)**.

If we find any subtree that is unbalanced, we immediately return `-1` to indicate failure.

Otherwise, we return the height of the current subtree.

---

# Approach

1. If the current node is `null`, return `0`.
2. Recursively calculate the height of the left subtree.
3. If the left subtree is unbalanced (`-1`), return `-1`.
4. Recursively calculate the height of the right subtree.
5. If the right subtree is unbalanced (`-1`), return `-1`.
6. Check the height difference:
   - If `|leftHeight - rightHeight| > 1`, return `-1`.
7. Otherwise, return the current subtree height:

```javascript
1 + Math.max(leftHeight, rightHeight)
```

8. Finally, return:

```javascript
dfs(root) !== -1
```

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
 * @return {boolean}
 */
var isBalanced = function(root) {

    function dfs(root) {

        // Base Case
        if (root === null) {
            return 0;
        }

        // Find height of left subtree
        let leftHeight = dfs(root.left);

        // Left subtree is unbalanced
        if (leftHeight === -1) {
            return -1;
        }

        // Find height of right subtree
        let rightHeight = dfs(root.right);

        // Right subtree is unbalanced
        if (rightHeight === -1) {
            return -1;
        }

        // Check balance condition
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return current subtree height
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return dfs(root) !== -1;
};
```

---

# Dry Run

### Input

```text
        3
       / \
      9   20
         /  \
        15   7
```

---

### Step 1

Visit node **9**.

```text
leftHeight = 0
rightHeight = 0

Difference = 0

Return 1
```

---

### Step 2

Visit node **15**.

```text
leftHeight = 0
rightHeight = 0

Difference = 0

Return 1
```

---

### Step 3

Visit node **7**.

```text
leftHeight = 0
rightHeight = 0

Difference = 0

Return 1
```

---

### Step 4

Return to node **20**.

```text
leftHeight = 1
rightHeight = 1

Difference = |1 - 1| = 0

Return 2
```

---

### Step 5

Return to root **3**.

```text
leftHeight = 1
rightHeight = 2

Difference = |1 - 2| = 1

Return 3
```

Since DFS returned **3** (not `-1`),

```text
Tree is Balanced ✅
```

Output:

```text
true
```

---

# Dry Run (Unbalanced Tree)

### Input

```text
        1
       /
      2
     /
    3
   /
  4
```

---

### Step 1

Node **4**

```text
Return 1
```

---

### Step 2

Node **3**

```text
leftHeight = 1
rightHeight = 0

Difference = 1

Return 2
```

---

### Step 3

Node **2**

```text
leftHeight = 2
rightHeight = 0

Difference = 2
```

Since

```text
2 > 1
```

Return

```text
-1
```

---

### Step 4

Root **1**

Receives

```text
leftHeight = -1
```

Immediately returns

```text
-1
```

Output:

```text
false
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

- A balanced tree requires every node to satisfy:

```text
|Left Height - Right Height| ≤ 1
```

- Use **Post-order DFS** to calculate subtree heights.
- Return the subtree height if it is balanced.
- Return `-1` immediately if any subtree is unbalanced.
- Using `-1` avoids returning multiple values and enables an efficient early exit.

---

## Pattern Learned

- Binary Trees
- Depth First Search (DFS)
- Post-order Traversal
- Recursion
- Tree Height Calculation
- Early Exit Optimization
- Special Return Value (`-1`)
- Recursive Return Values
```