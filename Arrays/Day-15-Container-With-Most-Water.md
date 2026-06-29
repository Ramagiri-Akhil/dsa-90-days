# Container With Most Water | Two Pointers | JavaScript

## Problem

You are given an integer array `height` where each element represents the height of a vertical line.

Find two lines that, together with the x-axis, form a container that can hold the maximum amount of water.

Return the maximum amount of water the container can store.

### Example

```javascript
Input: height = [1,8,6,2,5,4,8,3,7]

Output: 49
```

---

# 💡 Intuition

A brute-force solution would check every possible pair of lines and calculate the area formed by each pair.

Although this works, it requires checking all combinations, resulting in **O(n²)** time complexity.

A more efficient approach is to use **Two Pointers**.

We place one pointer at the beginning of the array and another at the end. For every pair:

* The **width** is the distance between the two pointers.
* The **height** of the container is determined by the **shorter line**, because water cannot rise above it.
* We calculate the current area and keep track of the maximum.

After each calculation, we move the pointer pointing to the **shorter line**, since only moving the shorter line gives us a chance to find a taller boundary and potentially increase the area.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `left = 0`
   * `right = height.length - 1`
2. Initialize `maxArea = 0`.
3. While `left < right`:

   * Calculate the width.
   * Find the smaller height using `Math.min()`.
   * Calculate the current area.
   * Update `maxArea`.
   * Move the pointer pointing to the shorter height.
4. Return `maxArea`.

---

# 💻 Code

```javascript
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left < right){

        let width = right - left;
        let containerHeight = Math.min(height[left], height[right]);
        let area = width * containerHeight;

        maxArea = Math.max(maxArea, area);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxArea;
};
```

---

# 🧪 Dry Run

### Input

```javascript
height = [1,8,6,2,5,4,8,3,7]
```

### Initial State

```text
left = 0
right = 8

Width = 8
Height = min(1,7) = 1

Area = 8
```

Maximum Area:

```text
8
```

Since the left height is smaller:

```text
left++
```

---

### Next Iteration

```text
left = 1
right = 8

Width = 7
Height = min(8,7) = 7

Area = 49
```

Maximum Area:

```text
49
```

Now the right height is smaller, so:

```text
right--
```

Continue the same process until both pointers meet.

Final Answer:

```text
49
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

Each pointer moves at most once across the array, so every element is processed only once.

### Space Complexity

```text
O(1)
```

Only a few variables are used regardless of the input size.

---

# 🎯 Why Two Pointers?

The width between the two pointers decreases after every move, so the only way to potentially increase the area is by finding a taller boundary.

Since the **shorter line** limits the amount of water the container can hold, moving the **taller pointer** cannot increase the height while it definitely reduces the width.

Therefore, the optimal strategy is to always move the pointer pointing to the **shorter line**.

---

# 🚀 Key Takeaways

* The area of the container depends on:

  * **Width = right - left**
  * **Height = min(height[left], height[right])**
* The brute-force solution takes **O(n²)** time.
* The **Two Pointer** approach reduces the time complexity to **O(n)**.
* Always move the pointer pointing to the **shorter line**, as it is the limiting factor for the container's height.
* This is the optimal solution with **O(n)** time and **O(1)** space complexity.

---

Happy Coding! 🚀
