# Binary Search | Efficient Searching | JavaScript

## Problem

Given a **sorted array** `nums` and a target value `target`, return the **index of the target** if it exists in the array. Otherwise, return `-1`.

### Example

```javascript
Input:
nums = [-1,0,3,5,9,12]
target = 9

Output:
4
```

**Explanation**

The target value `9` is located at index `4` in the array.

---

# 💡 Intuition

A brute-force approach would check each element one by one, resulting in **O(n)** time complexity.

However, since the array is **sorted**, we can use **Binary Search** to improve efficiency.

Binary Search works by repeatedly dividing the search space in half:

* Compare the target with the middle element.
* If equal → return the index.
* If smaller → search the left half.
* If larger → search the right half.

This reduces the search space exponentially.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = nums.length - 1`
2. While `left <= right`:

   * Calculate `mid = Math.floor((left + right) / 2)`
   * If `nums[mid] === target`, return `mid`
   * If `target < nums[mid]`, move `right = mid - 1`
   * Else, move `left = mid + 1`
3. If the loop ends, return `-1`

---

# 💻 Code

```javascript
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [-1,0,3,5,9,12]
target = 9
```

### Initial State

```text
left = 0
right = 5
```

---

### Iteration 1

```text
mid = (0 + 5) / 2 = 2
nums[mid] = 3
```

Target is greater than `3`, so search right half:

```text
left = 3
```

---

### Iteration 2

```text
mid = (3 + 5) / 2 = 4
nums[mid] = 9
```

Target found:

```text
return 4
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(log n)
```

* The search space is halved in each iteration.

---

### Space Complexity

```text
O(1)
```

* No extra space is used.

---

# 🚀 Key Takeaways

* Binary Search works only on **sorted arrays**.
* It reduces the search space by half each time.
* Much faster than linear search for large datasets.
* Always maintain correct `left` and `right` boundaries.
* Use `while (left <= right)` to ensure all elements are considered.

---

Happy Coding! 🚀
