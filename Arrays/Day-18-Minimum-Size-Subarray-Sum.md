# Minimum Size Subarray Sum | Sliding Window | JavaScript

## Problem

Given an array of **positive integers** `nums` and a positive integer `target`, return the **minimal length** of a contiguous subarray whose sum is **greater than or equal to** `target`.

If no such subarray exists, return `0`.

### Example

```javascript
Input:
target = 7
nums = [2,3,1,2,4,3]

Output:
2
```

Explanation:

```text
The subarray [4,3] has a sum of 7, so the minimum length is 2.
```

---

# 💡 Intuition

A brute-force approach would generate every possible contiguous subarray, calculate its sum, and check whether it is greater than or equal to the target.

Although this works, it repeatedly recalculates overlapping subarrays, leading to **O(n²)** time complexity.

Since all numbers in the array are **positive**, we can use the **Sliding Window** technique.

* Expand the window by moving the `right` pointer and adding elements to the current sum.
* Once the current sum becomes **greater than or equal to the target**, start shrinking the window from the left while maintaining the condition.
* During each valid window, update the minimum length.

This allows us to find the smallest valid subarray efficiently.

---

# 📝 Algorithm

1. Initialize:

   * `left = 0`
   * `windowSum = 0`
   * `minLength = Infinity`
2. Traverse the array using the `right` pointer.
3. Add `nums[right]` to `windowSum`.
4. While `windowSum >= target`:

   * Update the minimum length.
   * Remove `nums[left]` from `windowSum`.
   * Move `left` forward.
5. If `minLength` is still `Infinity`, return `0`; otherwise, return `minLength`.

---

# 💻 Code

```javascript
var minSubArrayLen = function(target, nums) {

    let left = 0;
    let windowSum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {

        windowSum += nums[right];

        while (windowSum >= target) {

            minLength = Math.min(minLength, right - left + 1);

            windowSum -= nums[left];

            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
```

---

# 🧪 Dry Run

### Input

```javascript
target = 7
nums = [2,3,1,2,4,3]
```

### Step 1

Expand the window:

```text
[2]

windowSum = 2
```

Less than target, so continue expanding.

---

### Step 2

```text
[2,3]

windowSum = 5
```

Still less than target.

---

### Step 3

```text
[2,3,1]

windowSum = 6
```

Still less than target.

---

### Step 4

```text
[2,3,1,2]

windowSum = 8
```

Now:

```text
8 >= 7
```

Valid window.

Update:

```text
minLength = 4
```

Shrink the window:

```text
Remove 2

Window = [3,1,2]

windowSum = 6
```

Stop shrinking because the sum is now less than the target.

---

### Continue

Expand:

```text
[3,1,2,4]

windowSum = 10
```

Valid.

Shrink:

```text
[1,2,4]

windowSum = 7

minLength = 3
```

Still valid.

Shrink again:

```text
[2,4]

windowSum = 6
```

Stop shrinking.

Expand:

```text
[2,4,3]

windowSum = 9
```

Valid.

Shrink:

```text
[4,3]

windowSum = 7

minLength = 2
```

This is the smallest possible valid window.

Final Answer:

```text
2
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each element is added to the window once and removed from the window at most once.

---

### Space Complexity

```text
O(1)
```

Only a few variables are used regardless of the input size.

---

# 🎯 Why Sliding Window?

The problem asks for the **minimum length of a contiguous subarray** whose sum satisfies a condition.

Since all elements are **positive**, increasing the window always increases (or maintains) the sum, and shrinking the window always decreases it. This property makes the **Sliding Window** technique ideal.

Instead of checking every possible subarray, we dynamically expand and shrink the window to maintain a valid sum while minimizing its length.

---

# 🚀 Key Takeaways

* Brute force checks every possible subarray and takes **O(n²)** time.
* Sliding Window expands until the target is reached, then shrinks to find the smallest valid window.
* Because all numbers are positive, the window sum changes predictably, making this optimization possible.
* Each element enters and leaves the window at most once, resulting in an **O(n)** solution.
* This is a classic **Variable Sliding Window** problem where the window shrinks as long as it remains valid.

---

Happy Coding! 🚀
