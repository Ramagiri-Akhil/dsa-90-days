# Two Sum II - Input Array Is Sorted | Two Pointers | JavaScript

## Problem

Given a **1-indexed** array of integers `numbers` that is sorted in non-decreasing order, find two numbers such that they add up to a specific `target`.

Return the indices of the two numbers (1-based indexing).

You may assume that each input has exactly one solution, and you may not use the same element twice.

### Example

```javascript
Input: numbers = [2,7,11,15], target = 9

Output: [1,2]
```

---

# 💡 Intuition

Since the array is already **sorted**, we don't need a Hash Map like the original Two Sum problem.

Instead, we can use the **Two Pointer** technique.

* Start one pointer from the beginning (`left`).
* Start another pointer from the end (`right`).
* Calculate the current sum.
* If the sum is greater than the target, move the `right` pointer to decrease the sum.
* If the sum is smaller than the target, move the `left` pointer to increase the sum.
* If the sum equals the target, return the required indices.

Because the array is sorted, every pointer movement predictably increases or decreases the sum.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = numbers.length - 1`
2. While `left < right`:

   * Calculate the current sum.
   * If the sum is greater than the target, decrement `right`.
   * If the sum is smaller than the target, increment `left`.
   * Otherwise, return `[left + 1, right + 1]`.
3. Return the answer.

---

# 💻 Code

```javascript
var twoSum = function(numbers, target) {

    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {

        let sum = numbers[left] + numbers[right];

        if(sum > target) {
            right--;
        }
        else if(sum < target) {
            left++;
        }
        else {
            return [left + 1, right + 1];
        }

    }

};
```

---

# 🧪 Dry Run

### Input

```javascript
numbers = [2,7,11,15]
target = 9
```

### Initial State

```text
Left = 0 (2)
Right = 3 (15)
```

Current Sum:

```text
2 + 15 = 17
```

Since

```text
17 > 9
```

Move the right pointer.

---

### Next Step

```text
Left = 0 (2)
Right = 2 (11)
```

Current Sum:

```text
2 + 11 = 13
```

Still greater than the target.

Move the right pointer again.

---

### Next Step

```text
Left = 0 (2)
Right = 1 (7)
```

Current Sum:

```text
2 + 7 = 9
```

Target found!

Return:

```javascript
[1,2]
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each pointer moves only in one direction, so every element is visited at most once.

### Space Complexity

```text
O(1)
```

Only a few variables are used regardless of the input size.

---

# 🎯 Why Two Pointers?

The original **Two Sum** problem uses a **Hash Map** because the array is unsorted.

In this problem, the array is already sorted, allowing us to determine whether moving the left or right pointer will increase or decrease the current sum.

This makes the Two Pointer approach more efficient since it achieves:

* **O(n)** Time Complexity
* **O(1)** Extra Space

which is the optimal solution.

---

# 🚀 Key Takeaways

* Always check the constraints before choosing an algorithm.
* A sorted array is a strong indicator that the **Two Pointer** technique might be applicable.
* Moving the left pointer increases the sum.
* Moving the right pointer decreases the sum.
* Two Pointers provide an optimal solution without using extra memory.

---

Happy Coding! 🚀
