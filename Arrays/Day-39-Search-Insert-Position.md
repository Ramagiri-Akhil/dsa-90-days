# Search Insert Position | Binary Search | JavaScript

## Problem

Given a **sorted array of distinct integers** and a target value, return the **index if the target is found**.

If not, return the **index where it would be inserted** in order.

You must write an algorithm with **O(log n)** runtime complexity.

### Example

```text
Input:

nums = [1,3,5,6]
target = 2

Output:

1
```

---

# 💡 Intuition

Since the array is **sorted**, we can use **Binary Search** to efficiently find the target.

Key idea:

* If the target exists, return its index.
* If it does not exist, the position where the search ends (`left`) will be the correct insertion index.

Binary Search helps us reduce the search space by half in each step.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = nums.length - 1`
2. While `left <= right`:

   * Calculate `mid = Math.floor((left + right) / 2)`
   * If `nums[mid] === target`, return `mid`
   * If `nums[mid] < target`, move `left = mid + 1`
   * Else, move `right = mid - 1`
3. If the target is not found, return `left`

---

# 💻 Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
```

---

# 🧪 Dry Run

### Input

```text
nums = [1,3,5,6]
target = 2
```

---

### Initial State

```text
left = 0
right = 3
```

---

### Iteration 1

```text
mid = 1
nums[mid] = 3
```

Target is smaller:

```text
right = 0
```

---

### Iteration 2

```text
mid = 0
nums[mid] = 1
```

Target is greater:

```text
left = 1
```

---

### Loop Ends

```text
left = 1
right = 0
```

Return:

```text
1
```

---

# ❓ Why Return Left?

When the loop ends:

* `left` points to the **smallest index where the target can be inserted**
* It ensures the array remains sorted

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(log n)
```

* Binary Search reduces the search space by half each time.

---

### Space Complexity

```text
O(1)
```

* No extra space is used.

---

# 🚀 Key Takeaways

* Binary Search works only on **sorted arrays**
* If the target is found, return its index
* If not found, return `left` as the insertion position
* Efficient solution with **O(log n)** time complexity
* This is a classic Binary Search problem used in many variations

---

Happy Coding! 🚀
