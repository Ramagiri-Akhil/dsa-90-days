# 3Sum | Sorting + Two Pointers | JavaScript

## Problem

Given an integer array `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that:

* `i != j`
* `i != k`
* `j != k`
* `nums[i] + nums[j] + nums[k] == 0`

The solution set must not contain duplicate triplets.

### Example

```javascript
Input: nums = [-1,0,1,2,-1,-4]

Output:
[[-1,-1,2],[-1,0,1]]
```

---

# 💡 Intuition

The brute-force solution would use three nested loops to check every possible triplet.

Although this works, it results in **O(n³)** time complexity, which is too slow.

A better approach is to first **sort the array**.

After fixing one element, the remaining task becomes finding two numbers whose sum equals `-nums[i]`, which is exactly the **Two Sum II** problem.

Using the **Two Pointer** technique allows us to find those two numbers efficiently while also skipping duplicate values to avoid repeated triplets.

---

# 📝 Algorithm

1. Sort the array.
2. Traverse the array using index `i`.
3. Skip duplicate values for `i`.
4. If `nums[i] > 0`, stop because three positive numbers cannot sum to zero.
5. Initialize:

   * `left = i + 1`
   * `right = nums.length - 1`
6. While `left < right`:

   * Calculate the sum of the three numbers.
   * If the sum is `0`, store the triplet.
   * Skip duplicate values for both pointers.
   * Move both pointers.
   * If the sum is less than `0`, move `left`.
   * If the sum is greater than `0`, move `right`.
7. Return all unique triplets.

---

# 💻 Code

```javascript
var threeSum = function(nums) {

    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        if (nums[i] > 0) break;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {

                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;

            } else if (sum < 0) {

                left++;

            } else {

                right--;

            }

        }

    }

    return result;

};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [-1,0,1,2,-1,-4]
```

After sorting:

```text
[-4,-1,-1,0,1,2]
```

### Iteration 1

```text
i = -4

Target becomes 4
```

No valid pair found.

---

### Iteration 2

```text
i = -1

left = -1
right = 2
```

Current sum:

```text
-1 + (-1) + 2 = 0
```

Triplet found:

```text
[-1,-1,2]
```

Move both pointers and skip duplicates.

---

Next comparison:

```text
left = 0
right = 1
```

Current sum:

```text
-1 + 0 + 1 = 0
```

Triplet found:

```text
[-1,0,1]
```

No more valid pairs remain.

Final result:

```text
[[-1,-1,2],[-1,0,1]]
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n²)
```

* Sorting takes **O(n log n)**.
* The outer loop runs **O(n)** times.
* The two pointers together traverse the remaining array in **O(n)**.

Overall:

```text
O(n log n) + O(n²) = O(n²)
```

---

### Space Complexity

```text
O(1)
```

Ignoring the output array, only a few variables are used.

---

# 🎯 Why Two Pointers?

After sorting the array, fixing one element transforms the remaining problem into **Two Sum II**.

Instead of checking every possible triplet with three nested loops, we efficiently search for the remaining two numbers using the **Two Pointer** technique.

Sorting also makes it easy to skip duplicate values, ensuring that only unique triplets are added to the result.

---

# 🚀 Key Takeaways

* The brute-force approach has **O(n³)** time complexity.
* Sorting transforms the problem into a series of **Two Sum II** problems.
* Two Pointers reduce the overall complexity to **O(n²)**.
* Skipping duplicate values is essential to avoid repeated triplets.
* The early condition `if (nums[i] > 0) break;` avoids unnecessary iterations because the array is sorted.

---

Happy Coding! 🚀
