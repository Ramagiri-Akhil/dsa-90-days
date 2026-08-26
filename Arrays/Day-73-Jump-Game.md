# 🧩 LeetCode Solution — Day 73

## 55. Jump Game

**Difficulty:** Medium

### Problem

You are given an integer array `nums`.

`nums[i]` represents the **maximum number of steps** you can jump forward from index `i`.

Starting from index `0`, determine whether you can reach the **last index**.

### Example 1

```text
Input:
nums = [2,3,1,1,4]

Output:
true
```

One possible path:

```text
0 → 1 → 4
```

### Example 2

```text
Input:
nums = [3,2,1,0,4]

Output:
false
```

We get stuck at index `3` because:

```text
nums[3] = 0
```

---

# 💡 Approach — Greedy

Instead of trying every possible jump, we keep track of the **farthest index we can reach**.

```text
farthest = furthest reachable index so far
```

Initially:

```javascript
let farthest = 0;
```

For every index `i`:

1. Check whether `i` is reachable.
2. If `i > farthest`, we are stuck.
3. Otherwise, update the furthest position we can reach.

The update is:

```text id="x2d6uw"
farthest = max(farthest, i + nums[i])
```

---

# 🔄 Algorithm

```text
Start
  ↓
farthest = 0
  ↓
Visit each index
  ↓
Is i > farthest?
  ├── YES → return false
  └── NO
       ↓
Update farthest
       ↓
Reach last index?
  ├── YES → return true
  └── Continue
```

---

# 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {

        // Current index cannot be reached
        if (i > farthest) {
            return false;
        }

        // Update the furthest index we can reach
        farthest = Math.max(
            farthest,
            i + nums[i]
        );

        // We can already reach the last index
        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    return true;
};
```

---

# 🧪 Dry Run

### Example 1

```text
nums = [2,3,1,1,4]
```

Start:

```text
farthest = 0
```

### `i = 0`

```text
nums[0] = 2

farthest = max(0, 0 + 2)
         = 2
```

We can reach index `2`.

---

### `i = 1`

Since:

```text
1 <= 2
```

index `1` is reachable.

```text
farthest = max(2, 1 + 3)
         = 4
```

The last index is `4`.

Therefore:

```text
4 >= nums.length - 1
```

So we return:

```text
true
```

---

# 🚨 Failure Example

```text
nums = [3,2,1,0,4]
```

Start:

```text
farthest = 0
```

### `i = 0`

```text
farthest = max(0, 0 + 3)
         = 3
```

We can reach index `3`.

### `i = 1`

```text
farthest = max(3, 1 + 2)
         = 3
```

### `i = 2`

```text
farthest = max(3, 2 + 1)
         = 3
```

### `i = 3`

```text
farthest = max(3, 3 + 0)
         = 3
```

We're stuck here.

When:

```text
i = 4
```

we have:

```text
4 > farthest
4 > 3
```

Therefore index `4` cannot be reached.

Return:

```text
false
```

---

# 🧠 Why Does This Work?

We don't need to know the exact path taken.

We only care about the **maximum reach** possible from all the positions we've already been able to reach.

For example:

```text
[2, 3, 1, 1, 4]
```

At index `0`:

```text
       0
      / \
     1   2
```

Instead of exploring both paths, we simply record:

```text
farthest = 2
```

Then index `1` gives us:

```text
1 + 3 = 4
```

So:

```text
farthest = 4
```

We've reached the destination.

---

# 🔑 Most Important Lines

### Check whether the current index is reachable:

```javascript
if (i > farthest) {
    return false;
}
```

This means:

> **I've reached an index beyond everything I could previously reach.**

### Expand our reach:

```javascript
farthest = Math.max(
    farthest,
    i + nums[i]
);
```

This means:

> **From this reachable index, how much farther can I go?**

---

# ⏱️ Complexity

**Time:** `O(n)`

We traverse the array only once.

**Space:** `O(1)`

We only store the `farthest` variable.

---

## 🔥 Key Takeaway

The entire problem comes down to one idea:

```text
Reachable Range
      ↓
Find a reachable index
      ↓
Expand the range
      ↓
Keep the furthest reach
      ↓
Can we reach the end?
```

> **Don't try every jump. Just keep extending the furthest position you can reach.**

🔥 **Day 73/90 — Jump Game completed!**
