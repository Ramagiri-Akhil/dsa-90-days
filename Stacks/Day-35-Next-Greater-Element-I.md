# Next Greater Element | Monotonic Stack | JavaScript

## Problem

Given two arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`, find the **next greater element** for each element in `nums1`.

The **next greater element** of a number `x` in `nums2` is the first greater number to its right. If it does not exist, return `-1`.

### Example

```text
Input:
nums1 = [4,1,2]
nums2 = [1,3,4,2]

Output:
[-1,3,-1]
```

---

# 💡 Intuition

A brute-force approach would check each element in `nums1` by scanning `nums2` to find its next greater element. This leads to **O(m × n)** complexity.

To optimize, we use a **Monotonic Stack**.

* Traverse `nums2` from **right to left**.
* Maintain a stack that keeps elements in decreasing order.
* Remove elements from the stack that are smaller than or equal to the current element.
* The top of the stack (if it exists) is the next greater element.

We store results in a **Map** for quick lookup when processing `nums1`.

---

# 📝 Algorithm

### Step 1: Process `nums2`

1. Initialize an empty stack and a map.
2. Traverse `nums2` from right to left.
3. While the stack is not empty and top ≤ current element:

   * Pop from the stack.
4. If the stack is empty:

   * Map current element → `-1`
5. Else:

   * Map current element → stack top
6. Push current element onto the stack.

---

### Step 2: Build Result for `nums1`

1. For each element in `nums1`:

   * Retrieve its next greater element from the map.
2. Return the result array.

---

# 💻 Code

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    const stack = [];
    const map = new Map();

    // Process nums2
    for (let i = nums2.length - 1; i >= 0; i--) {

        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            map.set(nums2[i], stack[stack.length - 1]);
        } else {
            map.set(nums2[i], -1);
        }

        stack.push(nums2[i]);
    }

    // Build result for nums1
    const result = [];

    for (const num of nums1) {
        result.push(map.get(num));
    }

    return result;
};
```

---

# 🧪 Dry Run

### Input

```text
nums1 = [4,1,2]
nums2 = [1,3,4,2]
```

### Processing `nums2`

| Current | Stack Before | Next Greater | Stack After | Map    |
| ------- | ------------ | ------------ | ----------- | ------ |
| 2       | []           | -1           | [2]         | 2 → -1 |
| 4       | [2]          | -1           | [4]         | 4 → -1 |
| 3       | [4]          | 4            | [4,3]       | 3 → 4  |
| 1       | [4,3]        | 3            | [4,3,1]     | 1 → 3  |

---

### Build Result

```text
4 → -1
1 → 3
2 → -1
```

---

### Final Output

```javascript
[-1,3,-1]
```

---

# ❓ Why Use a Monotonic Stack?

* It helps efficiently find the next greater element.
* Ensures each element is processed only once.
* Avoids redundant comparisons from brute-force methods.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n + m)
```

* Each element in `nums2` is pushed and popped at most once.
* Each element in `nums1` is processed once.

---

### Space Complexity

```text
O(n)
```

* Stack and map store up to `n` elements.

---

# 🚀 Key Takeaways

* Use a **Monotonic Stack** to solve next greater element problems efficiently.
* Traverse from **right to left** to maintain correct ordering.
* Store results in a **Map** for quick lookup.
* Each element is pushed and popped at most once.
* Reduces complexity from **O(m × n)** to **O(n + m)**.

---

Happy Coding! 🚀
