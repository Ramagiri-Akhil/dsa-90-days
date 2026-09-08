# Clone Graph — LeetCode #133

## 🧠 Approach: DFS + HashMap

The problem asks us to create a **deep copy** of a connected graph.

Each node has:

* A value
* A list of neighboring nodes

The main challenge is that a graph can contain **cycles**, so we need to make sure we don't clone the same node multiple times.

We use a **HashMap** to store the relationship between the original node and its cloned node:

```text
Original Node → Cloned Node
```

For example:

```text
1 → 1'
2 → 2'
3 → 3'
```

---

## 🔑 How It Works

1. If the input node is `null`, return `null`.
2. Create a `Map` to store original → cloned nodes.
3. Use DFS to traverse the graph.
4. If a node has already been cloned, return its existing clone.
5. Otherwise, create a new clone and immediately store it in the map.
6. Traverse every neighbor.
7. Clone each neighbor and add it to the current clone's neighbors.
8. Return the cloned starting node.

The important part is:

```js
clone.neighbors.push(dfs(neighbor));
```

This means:

> Clone the neighbor and connect that cloned neighbor to the current cloned node.

---

## 💻 JavaScript Solution

```js
var cloneGraph = function(node) {

    if (node === null) {
        return null;
    }

    let map = new Map();

    function dfs(node) {

        // If node is already cloned
        if (map.has(node)) {
            return map.get(node);
        }

        // Create clone
        let clone = new Node(node.val);

        // Store original → clone
        map.set(node, clone);

        // Clone all neighbors
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};
```

## 🔄 Example

For:

```text
1 ─── 2
│     │
│     │
4 ─── 3
```

DFS creates:

```text
1 → 1'
2 → 2'
3 → 3'
4 → 4'
```

and preserves all the connections between them.

If DFS encounters `1` again because of a cycle, the map already contains:

```text
1 → 1'
```

so it simply returns `1'` instead of creating another copy.

---

## ⏱️ Complexity

* **Time:** `O(V + E)`
* **Space:** `O(V)`

Where:

* `V` = number of nodes
* `E` = number of edges

## 🎯 Key Takeaway

The core pattern is:

```text
Visit node
   ↓
Already cloned?
   ↓ Yes
Return existing clone
   ↓ No
Create clone
   ↓
Store in Map
   ↓
Clone neighbors
   ↓
Connect them
```

**Graph Traversal + HashMap** is the key pattern to remember for Clone Graph. 🚀
