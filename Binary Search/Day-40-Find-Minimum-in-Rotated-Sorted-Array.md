# Find Minimum in Rotated Sorted Array | Binary Search | JavaScript

## Problem

Given a **sorted array** that has been **rotated at some pivot**, find the **minimum element**.

You must solve it in **O(log n)** time.

### Example 1

```text
Input:

[3,4,5,1,2]

Output:

1
```

### Example 2

```text
Input:

[4,5,6,7,0,1,2]

Output:

0
```

---

# 💡 Intuition

A brute-force approach would be to scan the entire array and find the minimum element.

However, this takes **O(n)** time.

Since the array was originally sorted and then rotated, we can use **Binary Search** to find the minimum efficiently.

Key idea:

* One half of the array is always **sorted**.
* By comparing the **middle element** with the **rightmost element**, we can determine where the minimum lies.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = nums.length - 1`
2. While `left < right`:

   * Find `mid = Math.floor((left + right) / 2)`
   * If `nums[mid] > nums[right]`:

     * The minimum is in the **right half**
     * Move `left = mid + 1`
   * Else:

     * The minimum is in the **left half (including mid)**
     * Move `right = mid`
3. When the loop ends, `left` will point to the minimum element.
4. Return `nums[left]`.

---

# 💻 Code

```javascript
var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }

    return nums[left];
};
```

---

# 🧪 Dry Run

### Input

```text
[4,5,6,7,0,1,2]
```

### Initial State

```text
left = 0, right = 6
```

---

### Iteration 1

```text
mid = 3
nums[mid] = 7
nums[right] = 2
```

Since:

```text
7 > 2
```

Move:

```text
left = mid + 1 = 4
```

---

### Iteration 2

```text
left = 4, right = 6
mid = 5
nums[mid] = 1
nums[right] = 2
```

Since:

```text
1 < 2
```

Move:

```text
right = mid = 5
```

---

### Iteration 3

```text
left = 4, right = 5
mid = 4
nums[mid] = 0
nums[right] = 1
```

Since:

```text
0 < 1
```

Move:

```text
right = mid = 4
```

---

### Final State

```text
left = right = 4
```

Return:

```text
nums[4] = 0
```

---

# ❓ Why Does This Work?

* If `nums[mid] > nums[right]`, the minimum must be in the **right half** because the left side is properly sorted.
* If `nums[mid] < nums[right]`, the minimum lies in the **left half**, including `mid`.

This works because a rotated sorted array always has one sorted portion and one unsorted portion.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(log n)
```

* Each step halves the search space.

---

### Space Complexity

```text
O(1)
```

* Only a few variables are used.

---

# 🚀 Key Takeaways

* Use **Binary Search** instead of linear scan for optimal performance.
* Compare `nums[mid]` with `nums[right]` to decide the search direction.
* Always keep `mid` in the search space when moving `right`.
* Loop condition should be `left < right`.
* This pattern is useful for many rotated array problems.

---

Happy Coding! 🚀
