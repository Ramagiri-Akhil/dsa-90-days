# 46. Permutations

**Difficulty:** Medium

## Problem Statement

Given an array `nums` of distinct integers, return **all possible permutations**.

You can return the answer in **any order**.

**LeetCode:** https://leetcode.com/problems/permutations/

---

# Intuition

A permutation is an arrangement of all elements in different orders.

For each position in the permutation, we can choose **any unused element**.

Once an element is chosen, it cannot be used again in the same permutation. After exploring all possibilities with that choice, we **backtrack** by removing it and marking it as unused.

This process continues until the current permutation contains all the elements.

---

# Approach

1. Create an empty array `result` to store all permutations.
2. Create an array `current` to build the current permutation.
3. Maintain a boolean array `used` to track which elements have already been chosen.
4. Use a recursive `backtrack()` function.
5. Base Case:
   - If `current.length === nums.length`, a complete permutation is formed.
   - Store a copy of `current` in `result`.
6. Iterate through every element:
   - Skip elements that are already used.
   - Choose the current element.
   - Mark it as used.
   - Recurse to build the remaining permutation.
   - Undo the choice by removing the element and marking it unused.
7. Return `result`.

---

# Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let current = [];
    let used = new Array(nums.length).fill(false);

    function backtrack() {

        // Base Case
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        // Try every unused element
        for (let i = 0; i < nums.length; i++) {

            if (used[i]) continue;

            // Choose
            used[i] = true;
            current.push(nums[i]);

            // Explore
            backtrack();

            // Undo (Backtrack)
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};
```

---

# Dry Run

### Input

```text
nums = [1,2,3]
```

Initially:

```text
current = []
used = [false, false, false]
```

---

### Choose 1

```text
current = [1]
used = [true, false, false]
```

Choose 2

```text
current = [1,2]
used = [true, true, false]
```

Choose 3

```text
current = [1,2,3]
used = [true, true, true]
```

Current permutation is complete.

Save:

```text
[1,2,3]
```

Backtrack:

```text
current = [1,2]
used = [true, true, false]
```

Now explore other possibilities.

---

Choose 3

```text
current = [1,3]
used = [true, false, true]
```

Choose 2

```text
current = [1,3,2]
```

Save:

```text
[1,3,2]
```

Continue the same process until all permutations are generated.

---

### Final Output

```text
[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
```

---

# Complexity Analysis

- **Time Complexity:** `O(n × n!)`
  - There are `n!` permutations.
  - Copying each permutation into the result takes `O(n)` time.

- **Space Complexity:** `O(n)`
  - Recursive call stack.
  - `used` array.
  - Current permutation array.
  - (Output array is not included in auxiliary space.)

---

# Key Takeaways

- Use **Backtracking** to explore every possible arrangement.
- At each recursive call, choose **any unused element**.
- Maintain a `used` array to ensure each element appears only once in a permutation.
- After recursion, **undo the choice** using:
  - `current.pop()`
  - `used[i] = false`
- A complete permutation is formed when:

```javascript
current.length === nums.length
```

- This is one of the most fundamental **Backtracking** patterns and is widely used in problems involving permutations and exhaustive search.

---

## Pattern Learned

- Backtracking
- Recursion
- Decision Tree
- Choose → Explore → Undo
- Used Array Technique
- Permutation Generation