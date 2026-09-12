# LRU Cache — LeetCode #146

## 🧠 Approach: HashMap + Doubly Linked List

The goal is to design a cache where both `get()` and `put()` operations work in **O(1)** time.

To achieve this, we combine two data structures:

* **HashMap** → Provides O(1) access to a node using its key.
* **Doubly Linked List** → Maintains the order of recently used nodes.

The linked list is organized like this:

```text
HEAD ↔ Most Recent ↔ ... ↔ Least Recent ↔ TAIL
```

Whenever a node is accessed or inserted, it is moved to the front.

When the cache exceeds its capacity, the node just before `TAIL` is removed because it is the **Least Recently Used** node.

---

## 🔑 How It Works

### `get(key)`

1. Check whether the key exists in the HashMap.
2. If it doesn't exist, return `-1`.
3. Get the corresponding node.
4. Remove the node from its current position.
5. Move it to the front because it was recently used.
6. Return its value.

### `put(key, value)`

1. If the key already exists:

   * Update its value.
   * Move it to the front.
2. Otherwise:

   * Create a new node.
   * Add it to the HashMap.
   * Add it to the front.
3. If the cache exceeds its capacity:

   * Remove the node before `TAIL`.
   * Delete its key from the HashMap.

---

## 💻 JavaScript Solution

```js
class Node {

    constructor(key, value) {

        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}


var LRUCache = function(capacity) {

    this.capacity = capacity;

    this.map = new Map();

    // Dummy head and tail nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};


// Add node right after head
LRUCache.prototype.addToFront = function(node) {

    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
};


// Remove node from the linked list
LRUCache.prototype.removeNode = function(node) {

    node.prev.next = node.next;
    node.next.prev = node.prev;
};


LRUCache.prototype.get = function(key) {

    // Key doesn't exist
    if (!this.map.has(key)) {
        return -1;
    }

    let node = this.map.get(key);

    // Move node to front
    this.removeNode(node);
    this.addToFront(node);

    return node.value;
};


LRUCache.prototype.put = function(key, value) {

    // Key already exists
    if (this.map.has(key)) {

        let node = this.map.get(key);

        node.value = value;

        // Move to front
        this.removeNode(node);
        this.addToFront(node);

        return;
    }

    // Create new node
    let node = new Node(key, value);

    // Store in HashMap
    this.map.set(key, node);

    // Add to front
    this.addToFront(node);

    // Remove least recently used node
    if (this.map.size > this.capacity) {

        let lru = this.tail.prev;

        this.removeNode(lru);

        this.map.delete(lru.key);
    }
};
```

---

## 🔄 Example

For:

```text
capacity = 2
```

Operations:

```text
put(1, 10)
put(2, 20)
get(1)
put(3, 30)
get(2)
```

After:

```text
put(1, 10)
put(2, 20)
```

```text
HEAD ↔ 2 ↔ 1 ↔ TAIL
```

`2` is most recently used.

After:

```text
get(1)
```

`1` moves to the front:

```text
HEAD ↔ 1 ↔ 2 ↔ TAIL
```

Now:

```text
put(3, 30)
```

The cache exceeds capacity, so we remove the node before `TAIL`:

```text
2
```

Final cache:

```text
HEAD ↔ 3 ↔ 1 ↔ TAIL
```

Therefore:

```text
get(2) → -1
```

---

## 🎯 Key Takeaway

The core idea is:

```text
             LRU Cache
                 │
        ┌────────┴────────┐
        ↓                 ↓
     HashMap       Doubly Linked List
        │                 │
    Find node         Track order
       O(1)               O(1)
        │                 │
        └────────┬────────┘
                 ↓
          get() → O(1)
          put() → O(1)
```

The **HashMap tells us where the node is**, while the **Doubly Linked List tells us which node is most/least recently used**.

### ⏱️ Complexity

* **`get()` → O(1)**
* **`put()` → O(1)**
* **Space → O(capacity)**

🔥 **Key Pattern:** HashMap + Doubly Linked List + O(1) Data Structure Design.
