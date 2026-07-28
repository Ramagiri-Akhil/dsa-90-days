# Day 44 - Sort Colors

## Problem

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order **red (0), white (1), and blue (2)**.

You must solve this problem **without using the library's sort function**.

**LeetCode:** https://leetcode.com/problems/sort-colors/

---

# Intuition

Since the array contains only three distinct values (`0`, `1`, and `2`), we don't need a comparison-based sorting algorithm.

Instead, we divide the array into four regions:

- Left region contains all `0`s.
- Middle region contains all `1`s.
- Current region contains unknown elements.
- Right region contains all `2`s.

Using three pointers (`low`, `mid`, and `high`), we can place each element into its correct region in a single traversal.

This approach is known as the **Dutch National Flag Algorithm**.

---

# Approach

1. Initialize three pointers:
   - `low = 0`
   - `mid = 0`
   - `high = nums.length - 1`

2. Traverse the array while `mid <= high`.

3. If `nums[mid] == 0`
   - Swap `nums[mid]` with `nums[low]`.
   - Increment both `low` and `mid`.

4. If `nums[mid] == 1`
   - It is already in the correct position.
   - Increment `mid`.

5. If `nums[mid] == 2`
   - Swap `nums[mid]` with `nums[high]`.
   - Decrement `high`.
   - Do **not** increment `mid` because the swapped element has not been processed yet.

6. Continue until `mid > high`.

---

# Code

```javascript
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;

        } else if (nums[mid] === 1) {
            mid++;

        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
```

---

# Dry Run

### Input

```text
nums = [2,0,2,1,1,0]
```

Initial pointers:

```text
low = 0
mid = 0
high = 5
```

---

### Step 1

Current element:

```text
nums[mid] = 2
```

Swap with `high`.

```text
[0,0,2,1,1,2]
```

```text
low = 0
mid = 0
high = 4
```

---

### Step 2

Current element:

```text
nums[mid] = 0
```

Swap with `low`.

```text
[0,0,2,1,1,2]
```

```text
low = 1
mid = 1
high = 4
```

---

### Step 3

Current element:

```text
nums[mid] = 0
```

Swap with `low`.

```text
[0,0,2,1,1,2]
```

```text
low = 2
mid = 2
high = 4
```

---

### Step 4

Current element:

```text
nums[mid] = 2
```

Swap with `high`.

```text
[0,0,1,1,2,2]
```

```text
low = 2
mid = 2
high = 3
```

---

### Step 5

Current element:

```text
nums[mid] = 1
```

Increment `mid`.

```text
low = 2
mid = 3
high = 3
```

---

### Step 6

Current element:

```text
nums[mid] = 1
```

Increment `mid`.

```text
mid = 4
```

Since:

```text
mid > high
```

Stop.

### Output

```text
[0,0,1,1,2,2]
```

---

# Complexity Analysis

- **Time Complexity:** `O(n)`
  - Each element is processed at most once.

- **Space Complexity:** `O(1)`
  - Sorting is performed in-place without using extra space.

---

# Key Takeaways

- This problem uses the **Dutch National Flag Algorithm**.
- Maintain three pointers:
  - `low` → next position for `0`
  - `mid` → current element being processed
  - `high` → next position for `2`
- If the current element is:
  - `0` → swap with `low`, increment both `low` and `mid`.
  - `1` → increment `mid`.
  - `2` → swap with `high`, decrement `high` only.
- The algorithm sorts the array in a single pass with constant extra space.
```