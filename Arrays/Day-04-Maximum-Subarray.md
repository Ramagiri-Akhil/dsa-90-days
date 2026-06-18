# Maximum Subarray | Brute Force + Kadane's Algorithm | JavaScript

## Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

### Example

```javascript
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]

Output: 6
```

Explanation:

The subarray `[4,-1,2,1]` has the largest sum.

```
4 + (-1) + 2 + 1 = 6
```

---

## Approach 1: Brute Force

The most straightforward solution is to check every possible contiguous subarray.

For each starting index, calculate the sum of every possible subarray ending after it and keep track of the maximum sum found.

### Code

```javascript
var maxSubArray = function(nums) {

    let maxSum = -Infinity;

    for(let i = 0; i < nums.length; i++) {

        let currentSum = 0;

        for(let j = i; j < nums.length; j++) {

            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);

        }

    }

    return maxSum;
};
```

### Complexity Analysis

* Time Complexity: O(n²)
* Space Complexity: O(1)

This approach is much better than calculating every subarray sum from scratch, but it still checks every possible subarray.

---

## Approach 2: Kadane's Algorithm (Optimized)

Instead of checking every subarray, we can keep track of the maximum subarray ending at the current index.

For each element:

1. Decide whether to start a new subarray from the current element or extend the previous one.
2. Update the current maximum subarray sum.
3. Update the overall maximum sum if a better answer is found.

This allows us to solve the problem in a single traversal.

### Code

```javascript
var maxSubArray = function(nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++) {

        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);

    }

    return maxSum;
};
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(1)

---

## Key Takeaways

* A negative running sum can reduce the total sum of future subarrays.
* At every index, decide whether to start a new subarray or continue the existing one.
* Kadane's Algorithm is one of the most important dynamic programming and greedy patterns for coding interviews.
* Reducing a quadratic solution to a single traversal significantly improves performance.

Happy Coding! 🚀
