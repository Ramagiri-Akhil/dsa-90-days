# Linked List Cycle | Floyd's Cycle Detection Algorithm (Tortoise & Hare) | JavaScript

## Problem

Given the `head` of a linked list, determine if the linked list has a cycle in it.

Return:

* `true` if there is a cycle.
* `false` otherwise.

### Example 1

```text
Input:

3 → 2 → 0 → -4
    ↑         │
    └─────────┘

Output:
true
```

### Example 2

```text
Input:

1 → 2 → null

Output:
false
```

---

# 💡 Intuition

A straightforward approach is to use a **HashSet** to store every visited node. If we visit the same node again, a cycle exists.

Although this works, it requires **O(n)** extra space.

A more efficient solution is **Floyd's Cycle Detection Algorithm**, also known as the **Tortoise and Hare Algorithm**.

The idea is to use two pointers:

* **Slow Pointer** → Moves one node at a time.
* **Fast Pointer** → Moves two nodes at a time.

If there is **no cycle**, the fast pointer will eventually reach `null`.

If there **is** a cycle, the fast pointer will eventually catch up with the slow pointer, meaning both pointers will point to the same node.

This allows us to detect a cycle using **constant extra space**.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `slow = head`
   * `fast = head`
2. Traverse the linked list while `fast` and `fast.next` are not `null`.
3. Move:

   * `slow` one step.
   * `fast` two steps.
4. If `slow === fast`, a cycle exists.
5. If the loop ends because `fast` reaches `null`, no cycle exists.
6. Return the result.

---

# 💻 Code

```javascript
var hasCycle = function(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};
```

---

# 🧪 Dry Run

### Input

```text
3 → 2 → 0 → -4
    ↑         │
    └─────────┘
```

### Initial State

```text
slow
 ↓
3 → 2 → 0 → -4
↑            │
└────────────┘

fast
 ↓
3
```

---

### Iteration 1

Move pointers:

```text
slow → 2

fast → 0
```

---

### Iteration 2

Move pointers:

```text
slow → 0

fast → 2
```

---

### Iteration 3

Move pointers:

```text
slow → -4

fast → -4
```

Now,

```javascript
slow === fast
```

Cycle detected.

Return:

```javascript
true
```

---

# ❓ Why Does This Work?

Imagine two runners on a circular track.

* 🐢 Slow runner moves **1 step** at a time.
* 🐇 Fast runner moves **2 steps** at a time.

Once both runners enter the circular path, the faster runner gains **one extra step** every iteration.

Eventually, the fast runner catches up with the slow runner, meaning they meet at the same position.

The same principle applies to a linked list with a cycle.

If no cycle exists, the fast pointer simply reaches the end of the list (`null`).

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Each node is visited at most once by the slow pointer.
* The fast pointer also traverses the list efficiently.

---

### Space Complexity

```text
O(1)
```

* Only two pointers are used.
* No additional data structures are required.

---

# 🚀 Key Takeaways

* A **HashSet** can detect a cycle in **O(n)** time but requires **O(n)** extra space.
* **Floyd's Cycle Detection Algorithm** detects a cycle in **O(n)** time using **O(1)** extra space.
* The **slow pointer** moves one step, while the **fast pointer** moves two steps.
* If the linked list contains a cycle, the two pointers will eventually meet.
* If the fast pointer reaches `null`, the linked list does not contain a cycle.
* This is the optimal solution and one of the most frequently asked Linked List interview problems.

---

Happy Coding! 🚀
