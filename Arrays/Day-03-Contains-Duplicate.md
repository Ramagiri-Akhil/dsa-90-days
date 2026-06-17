# Day 3: Contains Duplicate

**LeetCode #217**
**Difficulty:** Easy
**Topic:** Arrays, Hash Set

## Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Example

```javascript
Input: nums = [1,2,3,1]

Output: true
```

---

## Approach 1: Brute Force

### Intuition

Compare every element with every other element in the array.

If any two elements are equal, a duplicate exists and we can return `true`.

### Algorithm

1. Pick an element from the array.
2. Compare it with all remaining elements.
3. If a match is found, return `true`.
4. If no matches are found after checking all pairs, return `false`.

### Code

```javascript
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}
```

### Complexity Analysis

* Time Complexity: O(n²)
* Space Complexity: O(1)

---

## Approach 2: Optimized Using Hash Set

### Intuition

Instead of comparing every pair, we can keep track of elements we have already seen using a Set.

For every element:

* If it already exists in the Set, a duplicate has been found.
* Otherwise, add it to the Set and continue.

### Algorithm

1. Create an empty Set.
2. Traverse the array.
3. Check if the current element already exists in the Set.
4. If it exists, return `true`.
5. Otherwise, add it to the Set.
6. If the traversal completes, return `false`.

### Code

```javascript
function containsDuplicate(nums) {
  let seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(n)

---

## Key Learnings

* Sets only store unique values.
* Checking whether an element exists in a Set is very efficient.
* Hash-based data structures can often replace nested loops.
* Tracking previously seen elements is a common interview pattern.

## Status

✅ Solved
