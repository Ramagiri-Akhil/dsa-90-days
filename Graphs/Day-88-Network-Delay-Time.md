# Network Delay Time — LeetCode #743

## 🧠 Approach: Dijkstra's Algorithm

The problem gives us a **directed weighted graph**, where each edge represents the time required for a signal to travel from one node to another.

We need to find the time required for a signal starting from node `k` to reach **all nodes**.

Since different edges have different weights, we use **Dijkstra's Algorithm** to find the shortest distance from `k` to every node.

The final answer is the **maximum shortest distance** because we need to wait until the last node receives the signal.

---

## 🔑 How It Works

1. Build an **adjacency list** for the graph.
2. Create a `dist` array where `dist[i]` represents the shortest time to reach node `i`.
3. Set the starting node's distance to `0`.
4. Use a **Min Heap / Priority Queue** to always process the node with the smallest distance.
5. For every neighbor, calculate a new possible distance.
6. If the new distance is smaller, update `dist`.
7. After Dijkstra finishes:

   * If any node is still `Infinity`, return `-1`.
   * Otherwise, return the maximum value in `dist`.

---

## 💻 JavaScript Solution

```js
var networkDelayTime = function(times, n, k) {

    // Create adjacency list
    let graph = Array.from(
        { length: n + 1 },
        () => []
    );

    for (let [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // Shortest distance to every node
    let dist = new Array(n + 1).fill(Infinity);

    dist[k] = 0;

    // Min Heap: [distance, node]
    let heap = [[0, k]];

    function push(item) {

        heap.push(item);

        let index = heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (heap[parent][0] <= heap[index][0]) {
                break;
            }

            [heap[parent], heap[index]] =
            [heap[index], heap[parent]];

            index = parent;
        }
    }

    function pop() {

        if (heap.length === 1) {
            return heap.pop();
        }

        let result = heap[0];

        heap[0] = heap.pop();

        let index = 0;

        while (true) {

            let left = index * 2 + 1;
            let right = index * 2 + 2;

            let smallest = index;

            if (
                left < heap.length &&
                heap[left][0] < heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < heap.length &&
                heap[right][0] < heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [heap[index], heap[smallest]] =
            [heap[smallest], heap[index]];

            index = smallest;
        }

        return result;
    }

    // Dijkstra's Algorithm
    while (heap.length > 0) {

        let [currentDistance, node] = pop();

        // Ignore outdated distance
        if (currentDistance > dist[node]) {
            continue;
        }

        // Explore neighbors
        for (let [neighbor, weight] of graph[node]) {

            let newDistance =
                currentDistance + weight;

            // Relaxation
            if (newDistance < dist[neighbor]) {

                dist[neighbor] = newDistance;

                push([newDistance, neighbor]);
            }
        }
    }

    // Find maximum shortest distance
    let answer = 0;

    for (let node = 1; node <= n; node++) {

        if (dist[node] === Infinity) {
            return -1;
        }

        answer = Math.max(answer, dist[node]);
    }

    return answer;
};
```

---

## 🔄 Example

Suppose:

```text
1 → 2 (1)
1 → 3 (4)
2 → 3 (2)
```

Starting from `1`:

```text
dist[1] = 0
dist[2] = 1
dist[3] = 4
```

Then we discover:

```text
1 → 2 → 3
```

with cost:

```text
1 + 2 = 3
```

So we update:

```text
dist[3] = 3
```

Final:

```text
dist = [0, 1, 3]
```

The maximum shortest distance is:

```text
3
```

Therefore, the network delay time is `3`.

---

## 🎯 Key Takeaway

The most important Dijkstra pattern is **relaxation**:

```js
let newDistance = currentDistance + weight;

if (newDistance < dist[neighbor]) {
    dist[neighbor] = newDistance;
}
```

We're simply asking:

> **"Can I reach this neighbor faster through the current node?"**

If yes, update its shortest distance.

### Complexity

* **Time:** `O((V + E) log V)`
* **Space:** `O(V + E)`

**Key Pattern:** Graph + Weighted Edges + Dijkstra + Min Heap. 🚀
