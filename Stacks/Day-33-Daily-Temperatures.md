# Day 33: Daily Temperatures

## Problem Statement

Given an array of integers `temperatures` representing the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `iᵗʰ` day to get a warmer temperature. If there is no future day with a warmer temperature, keep `answer[i] = 0`.

### Example 1

Input:
```
temperatures = [73,74,75,71,69,72,76,73]
```

Output:
```
[1,1,4,2,1,1,0,0]
```

### Example 2

Input:
```
temperatures = [30,40,50,60]
```

Output:
```
[1,1,1,0]
```

### Example 3

Input:
```
temperatures = [30,60,90]
```

Output:
```
[1,1,0]
```

---

# Intuition

For every temperature, we need to find the **next warmer temperature**.

A brute force approach checks every element to its right until a warmer temperature is found.

Instead of repeatedly scanning the array, we can process it **from right to left** while maintaining a **Monotonic Increasing Stack (of indices)**.

The stack stores indices whose temperatures are strictly increasing from top to bottom.

Whenever we encounter a temperature greater than or equal to the top of the stack, that element becomes useless because it can never be the next warmer temperature for any previous element.

So we remove it.

The top of the stack (if it exists) is always the next warmer day's index.

---

# Algorithm

1. Create an answer array initialized with 0.
2. Create an empty stack to store indices.
3. Traverse the array from right to left.
4. Remove all indices whose temperatures are less than or equal to the current temperature.
5. If the stack is not empty, the top index is the next warmer day.
6. Store the difference between indices.
7. Push the current index onto the stack.
8. Return the answer array.

---

# JavaScript Solution

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {

        while (
            stack.length &&
            temperatures[stack[stack.length - 1]] <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            answer[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return answer;
};
```

---

# Dry Run

Input:

```
temperatures = [73,74,75,71,69,72,76,73]
```

| Index | Temp | Stack (Indices) | Answer |
|------:|-----:|----------------:|-------:|
| 7 | 73 | [7] | 0 |
| 6 | 76 | [6] | 0 |
| 5 | 72 | [6,5] | 1 |
| 4 | 69 | [6,5,4] | 1 |
| 3 | 71 | [6,5,3] | 2 |
| 2 | 75 | [6,2] | 4 |
| 1 | 74 | [6,2,1] | 1 |
| 0 | 73 | [6,2,1,0] | 1 |

Output:

```
[1,1,4,2,1,1,0,0]
```

---

# Complexity Analysis

**Time Complexity:** `O(n)`

- Every index is pushed once.
- Every index is popped at most once.

**Space Complexity:** `O(n)`

- Stack stores at most `n` indices.

---

# Key Takeaways

- Learned the **Monotonic Stack** pattern.
- Store **indices**, not temperatures.
- Traverse **from right to left**.
- Remove useless elements using a `while` loop.
- Useful for "Next Greater Element" type problems.

---

# Tags

- Stack
- Monotonic Stack
- Next Greater Element
- Array