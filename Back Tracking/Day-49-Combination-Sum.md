# 39. Combination Sum

**Difficulty:** Medium

## Problem Statement

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of candidates where the chosen numbers sum to `target`.

You may return the combinations in **any order**.

The **same number may be chosen unlimited times**.

Two combinations are unique if the frequency of at least one chosen number is different.

**LeetCode:** https://leetcode.com/problems/combination-sum/

---

# Intuition

At every candidate, we have two choices:

1. **Take** the current candidate.
2. **Skip** the current candidate.

The interesting part of this problem is that we are allowed to **reuse the same element** multiple times.

So, after taking an element, we **stay at the same index** instead of moving to the next one.

We continue exploring until:

- The sum becomes equal to the target (valid combination).
- The sum exceeds the target (invalid path).
- All candidates have been considered.

This makes Backtracking the ideal approach.

---

# Approach

1. Create two arrays:
   - `result` to store all valid combinations.
   - `current` to build the current combination.

2. Define a recursive function `backtrack(index, sum)`.

3. Base Cases:
   - If `sum === target`, store a copy of `current`.
   - If `sum > target`, stop exploring this path.
   - If `index === candidates.length`, return.

4. Make two recursive choices:

   **Choice 1:** Include the current candidate.
   - Add it to `current`.
   - Increase the sum.
   - Stay on the same index because the candidate can be reused.

   **Choice 2:** Exclude the current candidate.
   - Remove it from `current`.
   - Move to the next index.

5. Return all valid combinations.

---

# Code

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let result = [];
    let current = [];

    function backtrack(index, sum) {

        // Base Case: Valid combination
        if (sum === target) {
            result.push([...current]);
            return;
        }

        // Base Case: Invalid path
        if (sum > target || index === candidates.length) {
            return;
        }

        // Choice 1: Include current candidate
        current.push(candidates[index]);
        backtrack(index, sum + candidates[index]);

        // Undo the choice
        current.pop();

        // Choice 2: Skip current candidate
        backtrack(index + 1, sum);
    }

    backtrack(0, 0);

    return result;
};
```

---

# Dry Run

### Input

```text
candidates = [2,3,6,7]
target = 7
```

Initial State

```text
current = []
sum = 0
index = 0
```

---

### Take 2

```text
current = [2]
sum = 2
```

Take 2 again

```text
current = [2,2]
sum = 4
```

Take 2 again

```text
current = [2,2,2]
sum = 6
```

Take 2 again

```text
current = [2,2,2,2]
sum = 8
```

Since:

```text
8 > 7
```

Return.

Backtrack.

```text
current = [2,2,2]
```

Skip 2.

Move to 3.

```text
current = [2,2,3]
sum = 7
```

A valid combination is found.

```text
result = [
    [2,2,3]
]
```

Continue exploring.

Eventually,

Choose 7 directly.

```text
current = [7]
sum = 7
```

Store it.

Final Result

```text
[
 [2,2,3],
 [7]
]
```

---

# Complexity Analysis

- **Time Complexity:** Exponential (approximately `O(2^target)`), since the recursion explores many possible combinations depending on the target value and candidate set.
- **Space Complexity:** `O(target)`
  - Recursive call stack.
  - Current combination.
  - (Excluding the output array.)

---

# Key Takeaways

- This is a classic **Backtracking** problem.
- Every recursive call has two choices:
  - **Take** the current candidate.
  - **Skip** the current candidate.
- When taking a candidate, **stay at the same index** because elements can be reused.
- After exploring one path, **undo the choice** using `current.pop()`.
- Stop recursion immediately if:
  - The sum exceeds the target.
  - All candidates have been processed.
- Save the current combination only when:

```javascript
sum === target
```

---

## Pattern Learned

- Backtracking
- Recursion
- Choose → Explore → Undo
- Include / Skip Pattern
- Reusing the Same Element
- Pruning Invalid Paths