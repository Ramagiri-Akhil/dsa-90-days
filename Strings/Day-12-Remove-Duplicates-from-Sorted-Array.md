# Remove Duplicates from Sorted Array | Two Pointers | JavaScript

## Problem

Given a sorted integer array `nums`, remove the duplicates **in-place** such that each unique element appears only once.

The relative order of the elements should remain the same.

Return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique elements.

### Example

```javascript
Input: nums = [1,1,2]

Output: 2, nums = [1,2,_]
```

---

# 💡 Intuition

Since the array is already **sorted**, duplicate elements always appear next to each other.

We can use the **Two Pointer** technique:

* One pointer (`i`) keeps track of the last unique element.
* The other pointer (`j`) scans the remaining elements.
* Whenever we find a new unique element, we move `i` forward and place that unique value at `nums[i]`.

This allows us to remove duplicates **in-place** without using extra space.

---

# 📝 Algorithm

1. Initialize `i = 0`.
2. Traverse the array using another pointer `j` starting from index `1`.
3. If `nums[i]` is different from `nums[j]`:

   * Increment `i`.
   * Copy `nums[j]` to `nums[i]`.
4. Continue until the end of the array.
5. Return `i + 1`, which represents the total number of unique elements.

---

# 💻 Code

```javascript
var removeDuplicates = function(nums) {

    let i = 0;

    for(let j = 1; j < nums.length; j++) {

        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }

    }

    return i + 1;

};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [0,0,1,1,1,2,2,3,3,4]
```

### Initial State

```text
i = 0
j = 1

[0,0,1,1,1,2,2,3,3,4]
 ↑ ↑
```

Duplicate found (`0 == 0`).

Move `j`.

---

### Next Step

```text
i = 0
j = 2

[0,0,1,1,1,2,2,3,3,4]
 ↑   ↑
```

`0 != 1`

New unique element found.

```text
i++

nums[i] = nums[j]
```

Array becomes:

```text
[0,1,1,1,1,2,2,3,3,4]
   ↑
   i
```

Continue the same process until the end.

Final array:

```text
[0,1,2,3,4,_,_,_,_,_]
```

Return:

```javascript
5
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each element is visited only once.

### Space Complexity

```text
O(1)
```

No extra array or data structure is used.

---

# 🎯 Why Two Pointers?

Because the array is **sorted**, duplicate values always appear consecutively.

One pointer (`i`) keeps track of the last unique element, while the other pointer (`j`) scans the array for the next unique value.

Whenever a new unique element is found, it is copied to the next available position.

This makes the solution efficient while modifying the array **in-place**.

---

# 🚀 Key Takeaways

* A sorted array is a strong indicator that the **Two Pointer** technique may be applicable.
* We don't actually remove elements—we overwrite duplicate positions with the next unique element.
* One pointer tracks the position for the next unique value, while the other explores the array.
* This solution achieves the optimal **O(n)** time and **O(1)** extra space complexity.

---

Happy Coding! 🚀
