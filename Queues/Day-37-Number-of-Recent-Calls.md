# Number of Recent Calls | Queue | JavaScript

## Problem

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

* `RecentCounter()` initializes the counter with zero recent requests.
* `ping(int t)` adds a new request at time `t` (in milliseconds) and returns the number of requests that have happened in the past **3000 milliseconds**, including the current request.

### Example

```javascript
Input:
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]

Output:
[null, 1, 2, 3, 3]
```

Explanation:

* `ping(1)` → requests in range [-2999, 1] → [1] → return 1
* `ping(100)` → requests in range [-2900, 100] → [1, 100] → return 2
* `ping(3001)` → requests in range [1, 3001] → [1, 100, 3001] → return 3
* `ping(3002)` → requests in range [2, 3002] → [100, 3001, 3002] → return 3

---

## Approach: Queue (Sliding Window)

Since timestamps are strictly increasing, we can use a **queue** to store only the valid requests within the last 3000 milliseconds.

### Steps

1. Add the current timestamp `t` to the queue.
2. Remove all timestamps from the front that are less than `t - 3000`.
3. The remaining elements in the queue represent valid recent requests.
4. Return the size of the queue.

---

## Code

```javascript
var RecentCounter = function() {
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {

    // Add current request
    this.queue.push(t);

    // Remove outdated requests
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    // Return number of recent requests
    return this.queue.length;
};
```

---

## Complexity Analysis

* Time Complexity: O(1) amortized
  Each request is added once and removed once.

* Space Complexity: O(n)
  Stores only the requests within the last 3000 milliseconds.

---

## Key Takeaways

* This is a classic **sliding window problem**.
* A **queue** efficiently maintains the order of requests.
* Remove outdated elements to keep only relevant data.
* The size of the queue directly gives the answer.

Happy Coding! 🚀
