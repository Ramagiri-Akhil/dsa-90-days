# Subarray Sum Equals K | Prefix Sum + HashMap | JavaScript

## Problem

Given an integer array `nums` and an integer `k`, return the **total number of continuous subarrays** whose sum equals `k`.

A **subarray** is a contiguous, non-empty sequence of elements within an array.

### Example

```javascript
Input:
nums = [1,1,1]
k = 2

Output:
2
```

**Explanation**

The subarrays whose sum equals `2` are:

```text
[1,1]  (Index 0 → 1)
[1,1]  (Index 1 → 2)
```

Hence, the answer is **2**.

---

# 💡 Intuition

A brute-force solution would generate every possible subarray and calculate its sum.

However, checking every subarray requires **O(n²)** time.

A better approach is to use **Prefix Sum**.

Suppose the current prefix sum is:

```text
currentPrefix
```

If there exists a previous prefix sum equal to:

```text
currentPrefix - k
```

then the elements between those two prefix sums form a subarray whose sum is exactly `k`.

To check this efficiently, we store previously seen prefix sums in a **HashMap**.

* **Key** → Prefix Sum
* **Value** → Number of times that prefix sum has occurred

This allows us to find valid subarrays in **O(1)** time for each element.

---

# 📝 Algorithm

1. Create a **HashMap** to store prefix sums and their frequencies.
2. Initialize the map with `(0 → 1)` to represent the empty prefix.
3. Initialize `prefixSum = 0` and `count = 0`.
4. Traverse the array.
5. Add the current element to `prefixSum`.
6. Check whether `(prefixSum - k)` exists in the map.
7. If it exists, add its frequency to the answer.
8. Store the current prefix sum in the map by increasing its frequency.
9. Return the total count.

---

# 💻 Code

```javascript
var subarraySum = function(nums, k) {

    const map = new Map();

    // Empty prefix
    map.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        prefixSum += nums[i];

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};
```

---

# 🧪 Dry Run

### Input

```javascript
nums = [1,1,1]
k = 2
```

### Initial State

```text
map = {0 → 1}

prefixSum = 0
count = 0
```

---

### Iteration 1

Current element:

```text
1
```

Update prefix sum:

```text
prefixSum = 1
```

Need:

```text
1 - 2 = -1
```

Not found.

Store prefix sum:

```text
map

0 → 1
1 → 1
```

---

### Iteration 2

Current element:

```text
1
```

Update prefix sum:

```text
prefixSum = 2
```

Need:

```text
2 - 2 = 0
```

Found.

```text
count += 1

count = 1
```

Store prefix sum:

```text
map

0 → 1
1 → 1
2 → 1
```

---

### Iteration 3

Current element:

```text
1
```

Update prefix sum:

```text
prefixSum = 3
```

Need:

```text
3 - 2 = 1
```

Found.

```text
count += 1

count = 2
```

Store prefix sum:

```text
map

0 → 1
1 → 1
2 → 1
3 → 1
```

Return:

```javascript
2
```

---

# ❓ Why `map.set(0, 1)`?

This line is essential.

```javascript
map.set(0, 1);
```

It represents the prefix sum before processing any elements.

Consider:

```javascript
nums = [2]
k = 2
```

After reading `2`:

```text
prefixSum = 2
```

We compute:

```text
prefixSum - k = 0
```

Since `0` already exists in the map, we correctly count the subarray:

```text
[2]
```

Without initializing `(0 → 1)`, any valid subarray starting from **index 0** would be missed.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Traverse the array once.
* Every HashMap operation takes **O(1)** on average.

---

### Space Complexity

```text
O(n)
```

The HashMap stores prefix sums encountered during traversal.

---

# 🚀 Key Takeaways

* Prefix Sum helps compute subarray sums efficiently.
* Instead of checking every subarray, look for a previous prefix sum equal to **currentPrefix - k**.
* A HashMap stores prefix sums and their frequencies for **O(1)** lookup.
* Initialize the map with `(0 → 1)` to handle subarrays starting at index `0`.
* This approach reduces the time complexity from **O(n²)** to **O(n)**.

---

Happy Coding! 🚀
