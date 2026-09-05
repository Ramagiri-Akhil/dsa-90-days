# Median of Two Sorted Arrays — LeetCode #4

## 🧠 Approach: Binary Search + Partition

The goal is to find the median of two sorted arrays without actually merging them.

The key idea is to divide both arrays into a **left half** and a **right half** such that:

```text
Everything on the left <= Everything on the right
```

We use **binary search on the smaller array** to find the correct partition.

For example:

```text
nums1 = [1, 3]
nums2 = [2, 4, 5]
```

A correct partition can be:

```text
nums1: [1 | 3]
nums2: [2 | 4, 5]
```

So:

```text
left1  = 1
right1 = 3

left2  = 2
right2 = 4
```

The partition is valid because:

```text
left1 <= right2
left2 <= right1
```

### 🔑 Partition Rules

If the total number of elements is **odd**, the median is:

```text
max(left1, left2)
```

If the total number of elements is **even**, the median is:

```text
(max(left1, left2) + min(right1, right2)) / 2
```

If the partition is incorrect:

* `left1 > right2` → move the partition in `nums1` **left**
* `left2 > right1` → move the partition in `nums1` **right**

We also use `-Infinity` and `Infinity` when a partition is at the beginning or end of an array, which makes edge cases easier to handle.

## 💻 JavaScript

```js
var findMedianSortedArrays = function(nums1, nums2) {

    // Binary search on the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {

        let partition1 = Math.floor((low + high) / 2);

        let partition2 =
            Math.floor((m + n + 1) / 2) - partition1;

        let left1 = partition1 === 0
            ? -Infinity
            : nums1[partition1 - 1];

        let right1 = partition1 === m
            ? Infinity
            : nums1[partition1];

        let left2 = partition2 === 0
            ? -Infinity
            : nums2[partition2 - 1];

        let right2 = partition2 === n
            ? Infinity
            : nums2[partition2];

        // Correct partition
        if (left1 <= right2 && left2 <= right1) {

            // Odd number of elements
            if ((m + n) % 2 === 1) {
                return Math.max(left1, left2);
            }

            // Even number of elements
            let leftMax = Math.max(left1, left2);
            let rightMin = Math.min(right1, right2);

            return (leftMax + rightMin) / 2;
        }

        // Partition in nums1 is too far right
        if (left1 > right2) {
            high = partition1 - 1;
        }

        // Partition in nums1 is too far left
        else {
            low = partition1 + 1;
        }
    }
};
```

## ⏱️ Complexity

* **Time:** `O(log(min(m, n)))`
* **Space:** `O(1)`

## 💡 Key Takeaway

The biggest idea in this problem is **partitioning instead of merging**.

Rather than combining the arrays and sorting them, we use binary search to find the exact point where the combined array can be split into two balanced halves. This reduces the solution to **O(log(min(m, n)))** time. 🚀
