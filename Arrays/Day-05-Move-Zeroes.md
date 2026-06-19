# Day 5: Move Zeroes

**LeetCode #283**
**Difficulty:** Easy
**Topic:** Arrays, Two Pointers

## Problem Statement

Given an integer array `nums`, move all `0`s to the end while maintaining the relative order of the non-zero elements.

**Note:** You must do this in-place without making a copy of the array.

### Example

```javascript
Input: nums = [0,1,0,3,12]

Output: [1,3,12,0,0]
```

---

## Approach 1: Using an Extra Array

### Intuition

The simplest approach is to create another array and store all the non-zero elements in it.

Once all non-zero elements are copied, append the required number of zeroes at the end. Finally, copy the elements back to the original array if needed.

### Algorithm

1. Create an empty array.
2. Traverse the original array.
3. Store all non-zero elements in the new array.
4. Append zeroes until both arrays have the same length.
5. Copy the elements back to the original array.

### Code

```javascript
function moveZeroes(nums) {
    let result = [];

    for (const num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }

    while (result.length < nums.length) {
        result.push(0);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
}
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(n)

---

## Approach 2: Two Pointers (Optimized)

### Intuition

Instead of creating another array, use two pointers.

* One pointer traverses the array.
* The second pointer keeps track of the position where the next non-zero element should be placed.

After all non-zero elements have been moved to the front, fill the remaining positions with zeroes.

### Algorithm

1. Initialize `insertPos` to `0`.
2. Traverse the array.
3. If the current element is non-zero, place it at `insertPos`.
4. Increment `insertPos`.
5. After traversal, fill the remaining positions with `0`.

### Code

```javascript
function moveZeroes(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
}
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(1)

---

## Key Learnings

* Always pay attention to problem constraints, especially when asked to solve a problem **in-place**.
* Two pointers are an effective technique for rearranging elements without using extra memory.
* Separating the algorithm into two phases—moving non-zero elements first and filling zeroes later—makes the solution simple and efficient.
* The Read & Write Pointer pattern is commonly used in array-based interview questions.

## Status

✅ Solved
