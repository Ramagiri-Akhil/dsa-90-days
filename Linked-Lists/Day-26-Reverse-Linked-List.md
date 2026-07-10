# Reverse Linked List | Iterative | JavaScript

## Problem

Given the `head` of a singly linked list, reverse the linked list and return the reversed list.

### Example

```text
Input:

1 → 2 → 3 → 4 → 5 → null

Output:

5 → 4 → 3 → 2 → 1 → null
```

---

# 💡 Intuition

To reverse a linked list, we need to reverse the direction of every pointer.

Originally:

```text
1 → 2 → 3 → 4 → null
```

After reversing:

```text
1 ← 2 ← 3 ← 4

Equivalent to:

4 → 3 → 2 → 1 → null
```

The challenge is that once we change a node's `next` pointer, we lose access to the remaining part of the list.

To avoid this, we maintain three pointers:

* **prev** → Points to the already reversed part of the list.
* **current** → Points to the node currently being processed.
* **next** → Stores the next node before changing pointers.

Using these three pointers, we can safely reverse one link at a time.

---

# 📝 Algorithm

1. Initialize:

   * `prev = null`
   * `current = head`
2. Traverse the linked list while `current` is not `null`.
3. Store the next node in `next`.
4. Reverse the current node's pointer by pointing it to `prev`.
5. Move `prev` one step forward.
6. Move `current` to the saved `next` node.
7. Repeat until all nodes are processed.
8. Return `prev`, which becomes the new head of the reversed list.

---

# 💻 Code

```javascript
var reverseList = function(head) {

    let prev = null;
    let current = head;

    while (current !== null) {

        let next = current.next;

        current.next = prev;

        prev = current;

        current = next;
    }

    return prev;
};
```

---

# 🧪 Dry Run

### Input

```text
1 → 2 → 3 → null
```

### Initial State

```text
prev = null

current
   ↓
1 → 2 → 3 → null
```

---

### Iteration 1

Save next node:

```text
next
 ↓
2 → 3 → null
```

Reverse pointer:

```text
1 → null
```

Move pointers:

```text
prev
 ↓
1 → null

current
 ↓
2 → 3 → null
```

---

### Iteration 2

Save next node:

```text
next
 ↓
3 → null
```

Reverse pointer:

```text
2 → 1 → null
```

Move pointers:

```text
prev
 ↓
2 → 1 → null

current
 ↓
3 → null
```

---

### Iteration 3

Save next node:

```text
next = null
```

Reverse pointer:

```text
3 → 2 → 1 → null
```

Move pointers:

```text
prev
 ↓
3 → 2 → 1 → null

current = null
```

Loop ends.

Return:

```javascript
prev
```

Output:

```text
3 → 2 → 1 → null
```

---

# ❓ Why do we need the `next` pointer?

Suppose we directly reverse the pointer:

```javascript
current.next = prev;
```

For the list:

```text
1 → 2 → 3 → null
```

After changing the pointer:

```text
1 → null

2 → 3 → null
```

We lose the reference to node `2`.

To avoid this, we first save the next node:

```javascript
let next = current.next;
```

Now even after reversing the pointer, we still know where to continue traversing.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Each node is visited exactly once.

---

### Space Complexity

```text
O(1)
```

* Only three pointers (`prev`, `current`, and `next`) are used.
* No additional data structures are required.

---

# 🚀 Key Takeaways

* Use **three pointers**: `prev`, `current`, and `next`.
* Always save the next node before changing the current node's pointer.
* Reverse one link at a time while traversing the list.
* At the end of the traversal, `prev` points to the new head of the reversed list.
* This is the optimal solution with **O(n)** time and **O(1)** extra space.

---

Happy Coding! 🚀
