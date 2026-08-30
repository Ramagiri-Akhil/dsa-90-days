# Search in Rotated Sorted Array | Binary Search on Pivoted Array | JavaScript

## Problem

You are given a **rotated sorted array** `nums` and a `target` value.

Return the index of the target if it exists, otherwise return `-1`.

### Example

```text
Input:
nums = [6,7,0,1,2,4,5]
target = 4

Output:
5
```

---

# 💡 Intuition

A normal binary search works only on a **fully sorted array**.

But here, the array is **rotated**, meaning it was originally sorted but then shifted at some pivot point.

Example:

```text
Original sorted array:
0 1 2 4 5 6 7

Rotated:
6 7 0 1 2 4 5
```

Even though the array is rotated, there is a key observation:

👉 In every step of binary search, **at least one half is always sorted**

So instead of searching blindly, we:

1. Find which half is sorted
2. Check if the target lies in that sorted half
3. Discard the other half

This allows us to still use **O(log n) binary search logic**.

---

# 🧠 Key Insight

At every step:

```text
mid = (left + right) / 2
```

We check:

### Case 1: Left half is sorted

```javascript
nums[left] <= nums[mid]
```

Then:

* If target lies in left half → search left
* Else → search right

---

### Case 2: Right half is sorted

Otherwise:

```text
right half is sorted
```

* If target lies in right half → search right
* Else → search left

---

# 📝 Algorithm

1. Initialize `left = 0`, `right = nums.length - 1`
2. While `left <= right`:

   * Compute `mid`
   * If `nums[mid] === target`, return `mid`
   * Check which half is sorted
   * Decide which half to discard
3. If not found, return `-1`

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

        // Left half is sorted
        if (nums[left] <= nums[mid]) {

            // Target lies in left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } 
            // Otherwise search right half
            else {
                left = mid + 1;
            }

        } 
        // Right half is sorted
        else {

            // Target lies in right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } 
            // Otherwise search left half
            else {
                right = mid - 1;
            }

        }
    }

    return -1;
};
```

---

# 🧪 Dry Run

### Input

```text
nums = [6,7,0,1,2,4,5]
target = 4
```

---

### Step 1

```text
left = 0, right = 6
mid = 3 → nums[mid] = 1
```

Array:

```text
6 7 0 | 1 2 4 5
        ^
```

Check:

```javascript
nums[left] <= nums[mid]
6 <= 1 ❌
```

So **right half is sorted**:

```text
1 2 4 5
```

Is target in right half?

```javascript
1 < 4 <= 5 ✅
```

👉 Move right:

```text
left = mid + 1 = 4
```

---

### Step 2

```text
left = 4, right = 6
mid = 5 → nums[mid] = 4
```

We found the target ✅

```text
return 5
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(log n)
```

* Each step eliminates half of the search space

---

### Space Complexity

```text
O(1)
```

* Only pointers are used

---

# 🚀 Key Takeaways

* Even in a rotated array, **one half is always sorted**
* Use that property to decide where to search
* Compare target with the sorted half range
* Reduce search space like normal binary search

---

# 🧠 Interview Tip

Always ask:

1. Which half is sorted?
2. Is the target inside that half?
3. If yes → go there
4. If no → discard it

This 4-step thinking is the **core of rotated binary search problems**.

---

Happy Coding! 🚀
