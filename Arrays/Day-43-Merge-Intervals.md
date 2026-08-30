# Day 43 - Merge Intervals

## Problem

Given an array of intervals where `intervals[i] = [startᵢ, endᵢ]`, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.

**LeetCode:** https://leetcode.com/problems/merge-intervals/

---

# Intuition

Two intervals overlap if the start of the current interval is less than or equal to the end of the previous interval.

To efficiently merge intervals, we first sort them based on their starting values. This ensures that overlapping intervals appear next to each other.

While traversing the sorted intervals:
- If the current interval overlaps with the last merged interval, merge them.
- Otherwise, add the current interval as a new interval.

---

# Approach

1. Sort the intervals by their starting value.
2. Create an empty `result` array.
3. Traverse each interval:
   - If `result` is empty or there is no overlap, push the current interval.
   - Otherwise, merge the intervals by updating the ending value to the maximum of both intervals.
4. Return the `result` array.

---

# Code

```javascript
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];

    for (let interval of intervals) {

        if (
            result.length === 0 ||
            interval[0] > result[result.length - 1][1]
        ) {
            result.push(interval);
        } else {
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
};
```

---

# Dry Run

### Input

```text
intervals = [[1,3],[2,6],[8,10],[15,18]]
```

### Step 1: Sort

The intervals are already sorted.

```text
[[1,3],[2,6],[8,10],[15,18]]
```

---

### Step 2: Process Intervals

Take the first interval.

```text
result = [[1,3]]
```

Compare with `[2,6]`.

```text
2 <= 3
```

The intervals overlap.

Merge them.

```text
result = [[1,6]]
```

---

Compare with `[8,10]`.

```text
8 > 6
```

No overlap.

Push it into the result.

```text
result = [[1,6],[8,10]]
```

---

Compare with `[15,18]`.

```text
15 > 10
```

No overlap.

Push it into the result.

```text
result = [[1,6],[8,10],[15,18]]
```

Return:

```text
[[1,6],[8,10],[15,18]]
```

---

# Complexity Analysis

- **Time Complexity:** `O(n log n)`
  - Sorting the intervals takes `O(n log n)`.
  - Traversing the intervals takes `O(n)`.

- **Space Complexity:** `O(n)`
  - The result array stores the merged intervals.

---

# Key Takeaways

- Sort the intervals before processing.
- Two intervals overlap if:

```text
currentStart <= previousEnd
```

- If they overlap, extend the previous interval using:

```javascript
previousEnd = Math.max(previousEnd, currentEnd);
```

- If they do not overlap, add the current interval to the result.
- This sorting + traversal pattern is the foundation for many interval-based interview problems.