# Squares of a Sorted Array | Two Pointers | JavaScript

## Problem

Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order.

### Example

```javascript
Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]
```

---

# 💡 Intuition

A straightforward approach is to square every element and then sort the array. Although this works, sorting increases the time complexity to **O(n log n)**.

Since the array is already sorted, the element with the largest square will always come from one of the two ends because it has the largest absolute value.

Using two pointers, we compare the absolute values at both ends and place the larger square at the end of the result array.

This allows us to build the answer in sorted order without performing an extra sort.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = nums.length - 1`
2. Create a result array of the same size.
3. Maintain another pointer `k` starting from the last index of the result array.
4. Compare the absolute values of `nums[left]` and `nums[right]`.
5. Place the larger square at `result[k]`.
6. Move the corresponding pointer and decrement `k`.
7. Continue until all elements are processed.
8. Return the result array.

---

# 💻 Code

```javascript
var sortedSquares = function(nums) {

    let left = 0;
    let right = nums.length - 1;
    let k = nums.length - 1;

    let result = new Array(nums.length).fill(0);

    while(left <= right){

        if(Math.abs(nums[right]) > Math.abs(nums[left])){
            result[k] = nums[right] * nums[right];
            right--;
        }
        else{
            result[k] = nums[left] * nums[left];
            left++;
        }

        k--;
    }

    return result;

};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [-7,-3,2,3,11]
```

### Initial State

```text
left = 0
right = 4
k = 4

result = [_,_,_,_,_]
```

Compare:

```text
|-7| = 7
|11| = 11
```

Since `11` has the larger absolute value:

```text
result[4] = 121
```

Move:

```text
right--
k--
```

Now:

```text
result = [_,_,_,_,121]
```

Next comparison:

```text
|-7| = 7
|3| = 3
```

`7` is larger.

Place:

```text
49
```

at:

```text
result[3]
```

Continue the same process until the array becomes:

```text
[4,9,9,49,121]
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each element is processed exactly once.

### Space Complexity

```text
O(n)
```

A separate result array is used to store the sorted squares.

---

# 🎯 Why Two Pointers?

Although the input array is sorted, squaring negative numbers changes their order.

Instead of sorting again, we compare the absolute values at both ends of the array. The larger absolute value always produces the larger square, so we place it at the current last position in the result array.

This avoids the extra sorting step and improves the overall time complexity from **O(n log n)** to **O(n)**.

---

# 🚀 Key Takeaways

* A brute-force solution (square + sort) works in **O(n log n)** time.
* The largest square always comes from the element with the largest absolute value.
* Since the largest absolute values are located at the two ends of the sorted array, the **Two Pointer** technique is an ideal choice.
* Building the result array from the end allows us to maintain sorted order efficiently.
* The optimized solution achieves **O(n)** time complexity.

---

Happy Coding! 🚀
