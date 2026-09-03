# 84. Largest Rectangle in Histogram — O(n) Monotonic Stack Solution
## Problem

Given an array of integers heights representing the histogram's bar heights (each bar has width 1), find the area of the largest rectangle that can be formed within the bounds of the histogram.

Intuition

The brute-force approach checks every pair of bars (i, j) and uses min(heights[i..j]) * (j - i + 1) as a candidate area — O(n²) or worse.

Instead, think about it from a different angle: for every bar, what is the largest rectangle where that bar is the shortest (limiting) bar?

If we know, for each bar i:

the nearest bar to its left that is shorter than it (call its index L)
the nearest bar to its right that is shorter than it (call its index R)

...then the widest rectangle with heights[i] as its height spans from L + 1 to R - 1, giving:

area = heights[i] * (R - L - 1)

The answer is the max of this over all i. A monotonic increasing stack lets us compute this in a single O(n) pass instead of doing separate left/right scans.

Approach
Maintain a stack of indices, kept such that heights at those indices is strictly increasing bottom to top.
Walk through the array (with one extra virtual step using height 0 at the end, to flush the stack).
At each index i, while the current height is less than the height at the stack's top index, that top bar can no longer extend further right — pop it and compute the area it could have formed:
height = heights[popped]
width = i - stack.top - 1 (or just i if the stack is now empty, meaning this bar extended all the way from the start)
Push i onto the stack.
Track the maximum area seen.

The sentinel 0 at the end guarantees every remaining bar in the stack gets popped and evaluated by the time we finish.

Code
javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []; // indices, heights[stack] strictly increasing
    let maxArea = 0;
    const n = heights.length;

    for (let i = 0; i <= n; i++) {
        const currentHeight = (i === n) ? 0 : heights[i]; // sentinel to flush stack

        while (stack.length > 0 && heights[stack[stack.length - 1]] >= currentHeight) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};
Walkthrough

heights = [2, 1, 5, 6, 2, 3]

i	height	stack before	action	maxArea
0	2	[]	push 0	0 → [0]
1	1	[0]	pop 0 (h=2, w=1) → area 2; push 1	2 → [1]
2	5	[1]	push 2	[1,2]
3	6	[1,2]	push 3	[1,2,3]
4	2	[1,2,3]	pop 3 (h=6, w=1) → area 6; pop 2 (h=5, w=2) → area 10; push 4	10 → [1,4]
5	3	[1,4]	push 5	[1,4,5]
6 (sentinel)	0	[1,4,5]	pop 5 (h=3, w=1) → 3; pop 4 (h=2, w=4) → 8; pop 1 (h=1, w=6) → 6	stays 10

Result: 10 (formed by heights 5 and 6, width 2).

Complexity
Time: O(n) — each index is pushed exactly once and popped at most once, so the total stack operations across the whole run are bounded by 2n.
Space: O(n) — worst case (strictly increasing input), the stack holds all n indices before the final sentinel flush.
Why this is optimal

You must examine every bar at least once to know its height, so O(n) is a hard lower bound — this solution achieves it, making it asymptotically optimal. It's also the standard expected solution once an interviewer asks "can we beat the brute force?"