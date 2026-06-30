# Maximum Average Subarray I | Sliding Window | JavaScript

## Problem

You are given an integer array `nums` consisting of `n` elements and an integer `k`.

Find the contiguous subarray of length `k` that has the maximum average value and return that value.

### Example

```javascript
Input:
nums = [1,12,-5,-6,50,3]
k = 4

Output:
12.75
```

---

# 💡 Intuition

A brute-force approach would calculate the sum of every subarray of size `k` separately and then compute its average.

Although this works, many elements are added repeatedly, leading to unnecessary calculations.

Instead, we can use the **Sliding Window** technique.

First, calculate the sum of the first `k` elements. As the window moves one position to the right, only one element leaves the window and one new element enters it.

Instead of recalculating the entire sum, we simply:

* Subtract the element leaving the window.
* Add the new element entering the window.

This allows us to process the entire array efficiently in **O(n)** time.

---

# 📝 Algorithm

1. Calculate the sum of the first `k` elements.
2. Store it as both `windowSum` and `maxSum`.
3. Traverse the remaining elements starting from index `k`.
4. Update the current window sum by:

   * Removing the element leaving the window.
   * Adding the new element entering the window.
5. Update `maxSum` whenever a larger window sum is found.
6. Return `maxSum / k`.

---

# 💻 Code

```javascript
var findMaxAverage = function(nums, k) {

    let windowSum = 0;

    // Calculate the first window sum
    for(let i = 0; i < k; i++){
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for(let i = k; i < nums.length; i++){

        windowSum += nums[i] - nums[i - k];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [1,12,-5,-6,50,3]
k = 4
```

### First Window

```text
[1,12,-5,-6]

windowSum = 1 + 12 - 5 - 6 = 2

maxSum = 2
```

---

### Slide the Window

New window:

```text
[12,-5,-6,50]
```

Update:

```text
windowSum = 2 - 1 + 50 = 51

maxSum = 51
```

---

### Slide Again

New window:

```text
[-5,-6,50,3]
```

Update:

```text
windowSum = 51 - 12 + 3 = 42

maxSum = 51
```

No more windows remain.

Return:

```text
51 / 4 = 12.75
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

The first window is calculated once, and each remaining element is processed exactly once while sliding the window.

### Space Complexity

```text
O(1)
```

Only a few variables are used regardless of the input size.

---

# 🎯 Why Sliding Window?

The problem asks for a **contiguous subarray of fixed size `k`**.

Instead of calculating the sum of every window from scratch, the Sliding Window technique reuses the previous window's sum.

Each time the window moves:

* One element leaves the window.
* One new element enters the window.

Updating the sum in constant time eliminates redundant calculations and reduces the overall complexity from **O(n × k)** to **O(n)**.

---

# 🚀 Key Takeaways

* A brute-force approach recalculates every window sum and takes **O(n × k)** time.
* Sliding Window reuses the previous window's sum by subtracting the outgoing element and adding the incoming element.
* The problem introduces one of the most common interview patterns for **contiguous subarray** problems.
* The optimized solution runs in **O(n)** time and **O(1)** space.
* Whenever a problem mentions a **fixed-size contiguous subarray**, consider using the **Sliding Window** technique.

---

Happy Coding! 🚀
