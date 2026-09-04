# Largest Rectangle in Histogram — LeetCode #84

## 🧠 Approach

We use a **Monotonic Increasing Stack**.

For every bar, we want to determine how far that bar can extend while maintaining its height.

The stack stores **indices of bars in increasing height order**.

### 🔄 Algorithm

1. Traverse through the histogram from left to right.
2. If the current bar is taller than or equal to the bar at the top of the stack, push its index.
3. If the current bar is shorter, the taller bars on the stack can no longer extend further.
4. Pop those bars and calculate their possible rectangle area.
5. Calculate:

   * `height` → height of the popped bar.
   * `width` → distance between the current index and the new stack top.
6. Add a `0` at the end of the array to force all remaining bars to be processed.
7. Keep track of the maximum area.

## 💻 JavaScript

```js
var largestRectangleArea = function(heights) {

    let stack = [];
    let maxArea = 0;

    // Add 0 to process remaining bars in the stack
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        // Current bar is smaller than stack top
        while (
            stack.length > 0 &&
            heights[i] < heights[stack[stack.length - 1]]
        ) {

            let top = stack.pop();

            let height = heights[top];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            let area = height * width;

            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }

    return maxArea;
};
```

## 🔍 Example

```js
heights = [2, 1, 5, 6, 2, 3]
```

The largest rectangle comes from:

```text
height = 5
width = 2

area = 5 × 2 = 10
```

So:

```text
Output = 10
```

### Why does the stack work?

The stack maintains:

```text
increasing heights
```

When we encounter a smaller height:

```text
5 → 6 → 2
         ↑
       smaller
```

we know that the rectangles with heights `6` and `5` **cannot extend beyond this point**, so we pop them and calculate their areas.

The `0` added at the end guarantees that every remaining bar gets popped and processed.

## ⏱️ Complexity

* **Time:** `O(n)`
* **Space:** `O(n)`

Each index is pushed onto the stack once and popped at most once.

## 🔑 Key Takeaway

> **When a smaller bar appears, taller bars in the stack have reached their right boundary. Pop them and calculate their maximum possible rectangle.**

This is one of the most important **Monotonic Stack patterns** to remember. 🔥
