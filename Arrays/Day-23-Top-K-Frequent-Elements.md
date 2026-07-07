# Top K Frequent Elements | Bucket Sort + HashMap | JavaScript

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

You may return the answer in **any order**.

### Example

```javascript
Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]
```

**Explanation**

```text
Frequency of each element:

1 → 3
2 → 2
3 → 1

The two most frequent elements are:
[1,2]
```

---

# 💡 Intuition

A straightforward approach is to count the frequency of every number and then sort them based on their frequencies.

However, sorting takes **O(n log n)** time.

We can do better using **Bucket Sort**.

The maximum possible frequency of any element is `nums.length`. So instead of sorting, we create an array of buckets where:

* **Index = Frequency**
* **Value = List of numbers having that frequency**

After filling the buckets, we simply traverse them from the highest frequency to the lowest until we collect `k` elements.

This avoids sorting entirely and achieves **O(n)** time complexity.

---

# 📝 Algorithm

1. Create a **HashMap** to store the frequency of each number.
2. Traverse the array and count the frequency of every element.
3. Create a bucket array of size `nums.length + 1`.
4. Traverse the HashMap and place every number into its corresponding frequency bucket.
5. Create an empty result array.
6. Traverse the bucket array from the highest frequency to the lowest.
7. Add numbers from each bucket into the result array.
8. Stop when `k` elements have been collected.
9. Return the result.

---

# 💻 Code

```javascript
var topKFrequent = function(nums, k) {

    const map = new Map();

    // Count frequencies
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    // Create buckets
    const bucket = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    // Fill buckets
    for (const [num, freq] of map) {
        bucket[freq].push(num);
    }

    // Collect top k frequent elements
    const result = [];

    for (let i = bucket.length - 1; i >= 0; i--) {
        for (const num of bucket[i]) {
            result.push(num);

            if (result.length === k) {
                return result;
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
nums = [1,1,1,2,2,3]
k = 2
```

### Step 1: Build Frequency Map

```text
1 → 3
2 → 2
3 → 1
```

---

### Step 2: Create Buckets

```text
Frequency

0 → []
1 → [3]
2 → [2]
3 → [1]
4 → []
5 → []
6 → []
```

---

### Step 3: Traverse Buckets Backwards

Start from the highest frequency.

```text
Frequency 6 → []
Frequency 5 → []
Frequency 4 → []
Frequency 3 → [1]
```

Result:

```text
[1]
```

Continue:

```text
Frequency 2 → [2]
```

Result:

```text
[1,2]
```

We have collected `k = 2` elements.

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

* Building the frequency map → **O(n)**
* Filling the buckets → **O(n)**
* Traversing the buckets → **O(n)**

Overall:

```text
O(n)
```

---

### Space Complexity

```text
O(n)
```

* HashMap stores the frequency of each unique element.
* Bucket array stores the grouped elements.
* Result array stores the final answer.

---

# 🎯 Why Bucket Sort?

Instead of sorting elements by frequency, Bucket Sort groups elements according to how many times they appear.

For example:

```text
Frequency Map

1 → 3
2 → 2
3 → 1
```

becomes

```text
Bucket Array

bucket[1] = [3]
bucket[2] = [2]
bucket[3] = [1]
```

Traversing the buckets from the highest frequency to the lowest directly gives the most frequent elements, eliminating the need for sorting and reducing the time complexity to **O(n)**.

---

# 🚀 Key Takeaways

* Use a **HashMap** to count the frequency of each element.
* The maximum frequency of any element is `nums.length`, making **Bucket Sort** possible.
* Store numbers in buckets based on their frequencies.
* Traverse the buckets from highest to lowest frequency to collect the answer.
* This approach avoids sorting and achieves an optimal **O(n)** time complexity.

---

Happy Coding! 🚀
