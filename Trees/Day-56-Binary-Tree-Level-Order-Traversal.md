# 102. Binary Tree Level Order Traversal

**Difficulty:** Medium

## Problem Statement

Given the `root` of a binary tree, return the **level order traversal** of its nodes' values.

Level order traversal means visiting the nodes **level by level**, from left to right.

For example:

```text
        3
       / \
      9   20
         /  \
        15   7
```

The level order traversal is:

```text
[
    [3],
    [9, 20],
    [15, 7]
]
```

**LeetCode:** https://leetcode.com/problems/binary-tree-level-order-traversal/

---

# Intuition

Unlike the previous tree problems where we used **DFS + Recursion**, this problem requires us to process the tree **level by level**.

For this, we use:

- **Breadth First Search (BFS)**
- **Queue**

A queue follows the **First In → First Out** principle.

We start by putting the root into the queue.

Then:

1. Take all nodes belonging to the current level.
2. Store their values in a `level` array.
3. Add their children to the queue.
4. Add the current `level` to the result.
5. Continue until the queue becomes empty.

The important part is knowing how many nodes belong to the current level.

We can get that using:

```javascript
let size = queue.length;
```

---

# Approach

1. If `root` is `null`, return an empty array.
2. Create a `queue` and add the root node.
3. Create a `result` array to store all levels.
4. While the queue is not empty:
   - Store the current queue size in `size`.
   - Create an empty `level` array.
   - Process exactly `size` nodes.
   - Add each node's value to `level`.
   - Add its left and right children to the queue.
5. Add the completed `level` to `result`.
6. Return `result`.

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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    // Base Case
    if (root === null) {
        return [];
    }

    let result = [];
    let queue = [root];

    while (queue.length > 0) {

        // Number of nodes in current level
        let size = queue.length;

        let level = [];

        // Process current level
        for (let i = 0; i < size; i++) {

            let node = queue.shift();

            // Add current node value
            level.push(node.val);

            // Add left child
            if (node.left !== null) {
                queue.push(node.left);
            }

            // Add right child
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        // Add current level to result
        result.push(level);
    }

    return result;
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

Initially:

```text
queue = [3]
result = []
```

The queue contains one node, so:

```text
size = 1
```

Process node `3`.

```text
level = [3]
```

Add its children:

```text
queue = [9, 20]
```

Add the level to the result:

```text
result = [
    [3]
]
```

---

### Step 2

Now:

```text
queue = [9, 20]
```

Therefore:

```text
size = 2
```

We process exactly **2 nodes**.

First node:

```text
9
```

Second node:

```text
20
```

So:

```text
level = [9, 20]
```

While processing `20`, we add its children:

```text
15
7
```

The queue becomes:

```text
queue = [15, 7]
```

Result:

```text
[
    [3],
    [9, 20]
]
```

---

### Step 3

Now:

```text
queue = [15, 7]
```

So:

```text
size = 2
```

Process:

```text
15
7
```

Therefore:

```text
level = [15, 7]
```

Both are leaf nodes, so no new nodes are added.

Queue becomes:

```text
queue = []
```

Final result:

```text
[
    [3],
    [9, 20],
    [15, 7]
]
```

---

# Why Do We Store `queue.length`?

This is the most important part of the solution.

Suppose we have:

```text
queue = [9, 20]
```

At the beginning of this level:

```javascript
let size = queue.length;
```

So:

```text
size = 2
```

We process only these two nodes:

```text
9
20
```

While processing `20`, we add:

```text
15
7
```

Now the queue becomes:

```text
[15, 7]
```

But we **do not process them immediately**.

Why?

Because our loop is:

```javascript
for (let i = 0; i < size; i++)
```

and `size` was already `2`.

Therefore:

```text
Current Level → 9, 20

Next Level → 15, 7
```

This is how we separate the tree into different levels.

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - Every node is visited exactly once.

- **Space Complexity:** `O(n)`
  - The queue can contain up to `O(n)` nodes in the worst case.

---

# Key Takeaways

- Level Order Traversal uses **BFS**.
- BFS uses a **Queue**.
- Queue follows **First In → First Out**.
- `queue.length` tells us how many nodes belong to the current level.
- We process exactly that many nodes before moving to the next level.
- Children are added to the queue and processed in the next level.
- `result` stores each level as a separate array.

---

## Pattern Learned

- Binary Trees
- Breadth First Search (BFS)
- Queue
- Level Order Traversal
- Tree Traversal
- Processing Nodes Level by Level
- Separating Levels Using `queue.length`
- Iterative Tree Traversal