# Longest Consecutive Sequence | HashSet | JavaScript

## Problem

Given an unsorted array of integers `nums`, return the **length of the longest consecutive elements sequence**.

Your algorithm must run in **O(n)** time.

### Example

```javascript id="h9xtkp"
Input:
nums = [100,4,200,1,3,2]

Output:
4
```

**Explanation**

The longest consecutive sequence is:

```text id="j7t7yz"
1 → 2 → 3 → 4
```

Hence, the answer is:

```text id="t1g1zu"
4
```

---

# 💡 Intuition

A straightforward approach is to sort the array and then count consecutive elements.

Although this works, sorting requires **O(n log n)** time, which does not satisfy the problem's requirement of **O(n)**.

To achieve linear time, we use a **HashSet**.

The HashSet allows us to check whether a number exists in **O(1)** time.

The key observation is:

> A number is the **start** of a consecutive sequence only if its previous number `(num - 1)` does **not** exist in the set.

Once we identify the starting point, we keep checking for the next consecutive numbers until the sequence ends.

Since every sequence is processed only once, the overall time complexity remains **O(n)**.

---

# 📝 Algorithm

1. Insert all elements of the array into a **HashSet**.
2. Initialize a variable `longest` to store the maximum sequence length.
3. Traverse every number in the HashSet.
4. Check whether `(num - 1)` exists in the set.
5. If it exists, the current number is **not** the start of a sequence, so skip it.
6. Otherwise, start counting the consecutive sequence.
7. Continue checking `(current + 1)` while it exists in the set.
8. Update the maximum sequence length.
9. Return `longest`.

---

# 💻 Code

```javascript id="nvms0x"
var longestConsecutive = function(nums) {

    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {

        // Check if current number is the start of a sequence
        if (!set.has(num - 1)) {

            let current = num;
            let length = 1;

            // Count consecutive numbers
            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};
```

---

# 🧪 Dry Run

### Input

```javascript id="pl4gfq"
nums = [100,4,200,1,3,2]
```

### Step 1: Create HashSet

```text id="l29xnm"
{100,4,200,1,3,2}
```

---

### Step 2: Traverse the Set

#### Current Number = 100

```text id="xj9pqz"
99 exists?

No
```

Start a new sequence.

```text id="lnb8kc"
100
101 ❌
```

Length = **1**

Longest = **1**

---

#### Current Number = 4

```text id="vzn0rv"
3 exists?

Yes
```

Not the start of a sequence.

Skip.

---

#### Current Number = 200

```text id="2mlj49"
199 exists?

No
```

Start a new sequence.

```text id="clqpnq"
200
201 ❌
```

Length = **1**

---

#### Current Number = 1

```text id="jytovz"
0 exists?

No
```

Start a new sequence.

```text id="bcyckq"
1 ✅
2 ✅
3 ✅
4 ✅
5 ❌
```

Length = **4**

Longest = **4**

---

#### Current Number = 3

```text id="q55xqz"
2 exists?

Yes
```

Skip.

---

#### Current Number = 2

```text id="9jynh2"
1 exists?

Yes
```

Skip.

---

Return

```javascript id="z7m92l"
4
```

---

# ❓ Why do we check `num - 1`?

Suppose the sequence is:

```text id="r0qhnp"
1 → 2 → 3 → 4
```

If we started from every number, we would repeatedly traverse the same sequence:

```text id="z4l90d"
Start from 1 → 1,2,3,4

Start from 2 → 2,3,4

Start from 3 → 3,4

Start from 4 → 4
```

This performs unnecessary work.

Instead, we only start when:

```javascript id="4t2e4p"
!set.has(num - 1)
```

For this sequence:

* `1` starts the sequence because `0` does not exist.
* `2`, `3`, and `4` are skipped because their previous numbers exist.

This ensures every sequence is traversed exactly once.

---

# 📊 Complexity Analysis

### Time Complexity

```text id="hyme3h"
O(n)
```

* Creating the HashSet → **O(n)**
* Traversing the set → **O(n)**
* Each element is visited at most once while expanding sequences.

Overall:

```text id="67gjm2"
O(n)
```

---

### Space Complexity

```text id="im5vd9"
O(n)
```

The HashSet stores all unique elements from the array.

---

# 🚀 Key Takeaways

* A **HashSet** provides **O(1)** average-time lookups.
* A number is the start of a sequence only if `(num - 1)` is absent.
* Expanding sequences only from their starting points avoids redundant work.
* Even with a `while` loop inside the `for` loop, each element is processed only once overall, keeping the time complexity **O(n)**.
* This approach satisfies the problem's requirement without sorting the array.

---

Happy Coding! 🚀
