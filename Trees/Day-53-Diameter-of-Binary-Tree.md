# 543. Diameter of Binary Tree

**Difficulty:** Easy

## Problem Statement

Given the `root` of a binary tree, return the **length of the diameter** of the tree.

The diameter of a binary tree is the **length of the longest path between any two nodes** in a tree. This path may or may not pass through the root.

The length of a path is represented by the **number of edges** between two nodes.

**LeetCode:** https://leetcode.com/problems/diameter-of-binary-tree/

---

# Intuition

The diameter of a binary tree can pass through **any node**, not just the root.

At every node, we need two pieces of information:

- The depth of the left subtree.
- The depth of the right subtree.

The longest path passing through the current node is:

```text
leftDepth + rightDepth
```

We update the maximum diameter while traversing the tree.

To calculate the depth of each subtree, we use **Depth First Search (DFS)** with **Recursion**.

---

# Approach

1. Create a variable `diameter` to store the maximum diameter found.
2. Perform DFS on the tree.
3. If the current node is `null`, return `0`.
4. Recursively calculate the left and right subtree depths.
5. Update the diameter using:

```javascript
diameter = Math.max(diameter, leftDepth + rightDepth);
```

6. Return the current node's depth:

```javascript
1 + Math.max(leftDepth, rightDepth);
```

7. After DFS completes, return `diameter`.

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
var diameterOfBinaryTree = function(root) {

    let diameter = 0;

    function dfs(root) {

        // Base Case
        if (root === null) {
            return 0;
        }

        // Find depth of left subtree
        let leftDepth = dfs(root.left);

        // Find depth of right subtree
        let rightDepth = dfs(root.right);

        // Update maximum diameter
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return depth of current node
        return 1 + Math.max(leftDepth, rightDepth);
    }

    dfs(root);

    return diameter;
};
```

---

# Dry Run

### Input

```text
        1
       / \
      2   3
     / \
    4   5
```

---

### Step 1

Start DFS from the root.

```text
dfs(1)
```

---

### Step 2

Visit node **4**.

```text
leftDepth = 0
rightDepth = 0

diameter = max(0, 0)

return 1
```

---

### Step 3

Visit node **5**.

```text
leftDepth = 0
rightDepth = 0

diameter = max(0, 0)

return 1
```

---

### Step 4

Return to node **2**.

```text
leftDepth = 1
rightDepth = 1
```

Update diameter.

```text
diameter = max(0, 2)
         = 2
```

Return depth.

```text
1 + max(1,1)
= 2
```

---

### Step 5

Visit node **3**.

```text
leftDepth = 0
rightDepth = 0

return 1
```

---

### Step 6

Return to the root.

```text
leftDepth = 2
rightDepth = 1
```

Update diameter.

```text
diameter = max(2, 3)
         = 3
```

Return depth.

```text
1 + max(2,1)
= 3
```

---

### Output

```text
3
```

The longest path is:

```text
4 → 2 → 1 → 3
```

or

```text
5 → 2 → 1 → 3
```

Both have **3 edges**, so the diameter is **3**.

---

# Recursion Flow

```text
dfs(1)
│
├── dfs(2)
│      │
│      ├── dfs(4)
│      │      ├── null → 0
│      │      └── null → 0
│      │
│      │      returns 1
│      │
│      └── dfs(5)
│             ├── null → 0
│             └── null → 0
│
│             returns 1
│
│      diameter = 2
│      returns 2
│
└── dfs(3)
       ├── null → 0
       └── null → 0

       returns 1

diameter = 3

dfs(1) returns 3 (depth)
```

> **Note:** The recursive function returns the **depth** of each subtree, while the final answer is stored in the `diameter` variable.

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

- The diameter can pass through **any node**, not necessarily the root.
- At every node, calculate the depths of the left and right subtrees.
- Update the global diameter using `leftDepth + rightDepth`.
- Return the current node's depth to its parent using `1 + Math.max(leftDepth, rightDepth)`.
- Use a global variable because the recursive function can return only one value.

---

## Pattern Learned

- Binary Trees
- Depth First Search (DFS)
- Post-order Traversal
- Recursion
- Tree Height Calculation
- Global Variable in Recursion
- Recursive Return Values
- Diameter of Binary Tree
```