# Day 1: Two Sum

**LeetCode #1**
**Difficulty:** Easy
**Topic:** Arrays, Hash Map

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

### Example

```javascript
Input: nums = [2,7,11,15], target = 9

Output: [0,1]
```

---

## Approach 1: Brute Force

### Intuition

Check every possible pair in the array and see whether their sum equals the target.

### Algorithm

1. Pick one element.
2. Compare it with every element after it.
3. If their sum equals the target, return their indices.

### Code

```javascript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

### Complexity Analysis

* Time Complexity: O(n²)
* Space Complexity: O(1)

---

## Approach 2: Optimized Using Hash Map

### Intuition

Instead of checking every pair, store previously visited numbers in a Hash Map.

For each number:

* Calculate the complement (`target - currentNumber`)
* Check whether the complement already exists in the map
* If yes, return the indices immediately

### Code

```javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(n)

---

## Key Learnings

* Brute force solutions are useful for understanding the problem.
* Hash Maps help reduce lookup time from O(n) to O(1).
* Always discuss the brute force approach before presenting the optimized solution in interviews.

## Status

✅ Solved
