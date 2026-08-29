# 🧩 LeetCode Solution — Day 76

## 287. Find the Duplicate Number

**Difficulty:** Medium

### Problem

Given an array `nums` containing `n + 1` integers where each integer is in the range `[1, n]`, return the **duplicate number**.

There is only **one repeated number**, but it may appear more than once.

### Example

```text
Input:
nums = [1, 3, 4, 2, 2]

Output:
2
```

---

## 💡 Approach — Floyd's Cycle Detection

The interesting part of this problem is that we can treat the array like a **linked list**.

For:

```text
nums = [1, 3, 4, 2, 2]
```

we can treat:

```text
nums[i]
```

as the **next position**.

So the path becomes:

```text
0 → 1 → 3 → 2 → 4
            ↑   ↓
            └───┘
```

The duplicate `2` causes a cycle.

Therefore, the problem becomes:

> **Find the entrance of the cycle.**

We can solve that using **Floyd's Tortoise and Hare algorithm**.

---

# 🐢 Phase 1 — Find the Meeting Point

We use two pointers:

```text
slow → moves 1 step
fast → moves 2 steps
```

In code:

```javascript
slow = nums[slow];
fast = nums[nums[fast]];
```

They will eventually meet somewhere inside the cycle.

---

# 🐇 Phase 2 — Find the Cycle Entrance

After the two pointers meet:

```javascript
slow = nums[0];
```

We reset `slow` to the beginning.

Then move both pointers one step at a time:

```javascript
slow = nums[slow];
fast = nums[fast];
```

When they meet again, that position is the **entrance of the cycle**, which is the duplicate number.

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Find the meeting point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find the entrance of the cycle
    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};
```

---

# 🧪 Dry Run

For:

```text
nums = [1, 3, 4, 2, 2]
```

Initial:

```text
slow = 1
fast = 1
```

### Phase 1

| Step  | `slow` | `fast` |
| ----- | -----: | -----: |
| Start |      1 |      1 |
| 1     |      3 |      2 |
| 2     |      2 |      2 |

They meet at `2`.

Now reset:

```javascript
slow = nums[0];
```

So:

```text
slow = 1
fast = 2
```

### Phase 2

| Step  | `slow` | `fast` |
| ----- | -----: | -----: |
| Start |      1 |      2 |
| 1     |      3 |      4 |
| 2     |      2 |      2 |

They meet at:

```text
2
```

Therefore:

```text
Output = 2
```

---

# 🔑 Understanding the Two Important Lines

### Slow

```javascript
slow = nums[slow];
```

If:

```text
slow = 3
```

then:

```text
nums[3] = 2
```

so:

```text
slow = 2
```

That's **one jump**.

### Fast

```javascript
fast = nums[nums[fast]];
```

If:

```text
fast = 1
```

then:

```text
nums[1] = 3
```

and:

```text
nums[3] = 2
```

so:

```text
fast = 2
```

That's **two jumps**.

---

# 🧠 Why Does a Duplicate Create a Cycle?

Because every value points to another index.

When a number occurs twice, two different positions point toward the same position.

For our example:

```text
3 → 2
4 → 2
```

This eventually creates:

```text
2 → 4 → 2 → 4 → ...
```

So:

```text
Duplicate number
       ↓
Cycle entrance
       ↓
Floyd's algorithm
       ↓
Find duplicate
```

---

## ⏱️ Complexity

**Time:** `O(n)`

We traverse the array a constant number of times.

**Space:** `O(1)`

Only `slow` and `fast` pointers are used.

---

## 🔥 Key Takeaway

The biggest insight isn't the code. It's this transformation:

> **Treat `nums[i]` as the next pointer.**

Once you see:

```text
Array → Linked List → Cycle → Cycle Entrance
```

the solution becomes much easier to understand.

**Day 76/90 — Find the Duplicate Number ✅**
