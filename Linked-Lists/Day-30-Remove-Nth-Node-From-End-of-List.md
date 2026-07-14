# Remove Nth Node From End of List | Dummy Node + Two Pointers | JavaScript

## Problem

Given the `head` of a linked list, remove the **nth node from the end** of the list and return its head.

### Example

```text
Input:

1 → 2 → 3 → 4 → 5

n = 2

Output:

1 → 2 → 3 → 5
```

---

# 💡 Intuition

A straightforward approach is to first find the length of the linked list.

Once the length is known, the position of the node to remove from the beginning can be calculated using:

```text
position = length - n
```

Then, traverse the list again until reaching the node just before the target node and remove it.

Although this approach works, it requires **two traversals**.

A more efficient solution uses the **Fast & Slow Pointer** technique along with a **Dummy Node** to remove the node in a **single traversal**.

The idea is:

* Move the **fast pointer** `n` nodes ahead.
* Keep the **slow pointer** at the dummy node.
* Move both pointers together until `fast` reaches the last node.
* At this point, `slow` will be pointing to the node **just before** the node that needs to be removed.

The dummy node helps handle edge cases such as removing the head node without requiring special logic.

---

# 📝 Algorithm

1. Create a dummy node and connect it to the head.
2. Initialize both `slow` and `fast` pointers at the dummy node.
3. Move the `fast` pointer `n` steps ahead.
4. Move both pointers one step at a time until `fast.next` becomes `null`.
5. The `slow` pointer now points to the node before the target node.
6. Remove the target node by updating:

```javascript
slow.next = slow.next.next;
```

7. Return `dummy.next`.

---

# 💻 Code

```javascript
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both pointers together
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove the target node
    slow.next = slow.next.next;

    return dummy.next;
};
```

---

# 🧪 Dry Run

### Input

```text
1 → 2 → 3 → 4 → 5

n = 2
```

### Initial State

```text
dummy → 1 → 2 → 3 → 4 → 5
S,F
```

---

### Move `fast` 2 Steps

```text
dummy → 1 → 2 → 3 → 4 → 5
S           F
```

* `slow = dummy`
* `fast = 2`

---

### Iteration 1

Move both pointers.

```text
dummy → 1 → 2 → 3 → 4 → 5
     S           F
```

* `slow = 1`
* `fast = 3`

---

### Iteration 2

```text
dummy → 1 → 2 → 3 → 4 → 5
         S           F
```

* `slow = 2`
* `fast = 4`

---

### Iteration 3

```text
dummy → 1 → 2 → 3 → 4 → 5
             S           F
```

* `slow = 3`
* `fast = 5`

Now:

```text
fast.next = null
```

The loop ends.

The `slow` pointer is positioned just before the node to remove.

---

### Remove the Node

Execute:

```javascript
slow.next = slow.next.next;
```

This changes:

```text
3 → 4 → 5
```

to

```text
3 → 5
```

Final list:

```text
1 → 2 → 3 → 5
```

Return:

```javascript
dummy.next;
```

---

# ❓ Why Do We Use a Dummy Node?

Without a dummy node, removing the **head node** becomes a special case.

Example:

```text
1 → 2

n = 2
```

We need to remove the head (`1`).

Using a dummy node:

```text
dummy → 1 → 2
```

The dummy node acts as the previous node of the head, allowing us to use the same deletion logic for every node:

```javascript
slow.next = slow.next.next;
```

This keeps the implementation simple and avoids extra edge-case handling.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* The fast pointer traverses the list once.
* The slow pointer also traverses the list once.
* Overall, each node is visited at most once.

---

### Space Complexity

```text
O(1)
```

* Only a few pointers (`dummy`, `slow`, and `fast`) are used.
* No additional data structures are required.

---

# 🚀 Key Takeaways

* A **Dummy Node** simplifies edge cases, especially when removing the head node.
* Maintain a gap of **n nodes** between the fast and slow pointers.
* When the fast pointer reaches the last node, the slow pointer is positioned just before the node to remove.
* Remove the node using:

```javascript
slow.next = slow.next.next;
```

* This solution completes the task in **one traversal** with **O(n)** time and **O(1)** extra space, making it the optimal approach.

---

Happy Coding! 🚀
