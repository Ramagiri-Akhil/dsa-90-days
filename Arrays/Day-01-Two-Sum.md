# 🧩 LeetCode Solution — Two Sum

## 1. Two Sum

**Difficulty:** Easy

### Problem

Given an array of integers `nums` and an integer `target`, return the **indices of the two numbers** that add up to `target`.

You may assume that each input has exactly one solution.

### Example

```text
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]
```

Because:

```text
nums[0] + nums[1]
= 2 + 7
= 9
```

---

## 💡 Approach — Hash Map

The key idea is:

> Instead of checking every pair, store the numbers we've already seen.

For every `nums[i]`, calculate the number we **need**:

```text
needed = target - nums[i]
```

Then check whether `needed` already exists in our `Map`.

If it does, we've found our answer.

Otherwise, store the current number and its index.

---

## 🔄 Example

```text
nums = [2, 7, 11, 15]
target = 9
```

### `i = 0`

```text
nums[i] = 2

needed = 9 - 2
       = 7
```

`7` isn't in the map.

Store:

```text
2 → 0
```

---

### `i = 1`

```text
nums[i] = 7

needed = 9 - 7
       = 2
```

`2` **is already in the map**:

```text
2 → index 0
```

So we found:

```text
[0, 1]
```

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const needed = target - nums[i];

        // Check if the required number already exists
        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        // Store number and its index
        map.set(nums[i], i);
    }
};
```

---

## 🧠 Why Does This Work?

Suppose:

```text
target = 9
current number = 7
```

We know:

```text
9 - 7 = 2
```

So instead of asking:

> "Which number should I pair with 7?"

we directly calculate:

> **"I need 2. Have I already seen 2?"**

That's the power of the Hash Map.

```text
Current Number
      ↓
target - current
      ↓
   Needed
      ↓
Is Needed in Map?
   ↙         ↘
 YES          NO
  ↓            ↓
Return       Store
indices      current
```

---

## 🚨 Why Store After Checking?

Notice the order:

```javascript
if (map.has(needed)) {
    return [map.get(needed), i];
}

map.set(nums[i], i);
```

We check first and then store.

This prevents using the **same element twice**.

For example:

```text
nums = [3]
target = 6
```

We shouldn't use `3 + 3` using the same index.

---

## ⏱️ Complexity

**Time:** `O(n)`

We traverse the array once, and Map lookup is `O(1)` on average.

**Space:** `O(n)`

In the worst case, we store every element in the Map.

---

## 🔑 Key Takeaway

The brute-force approach would be:

```text
For every number
    ↓
Check every other number
```

which takes `O(n²)`.

The Hash Map approach changes the question to:

```text
Current number
      ↓
What number do I need?
      ↓
Have I seen it already?
```

giving us:

**`O(n)` time + `O(n)` space.**
