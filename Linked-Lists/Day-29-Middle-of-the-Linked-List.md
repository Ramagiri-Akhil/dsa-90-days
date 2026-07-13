# Middle of the Linked List | Fast & Slow Pointers | JavaScript

## Problem

Given the `head` of a singly linked list, return the **middle node** of the linked list.

If there are **two middle nodes**, return the **second middle node**.

### Example 1

```text id="2bskhr"
Input:

1 → 2 → 3 → 4 → 5

Output:

3 → 4 → 5
```

### Example 2

```text id="20kc2s"
Input:

1 → 2 → 3 → 4 → 5 → 6

Output:

4 → 5 → 6
```

---

# 💡 Intuition

A straightforward approach is to traverse the linked list once to calculate its length. Then, traverse it again until reaching the middle node.

Although this approach works, it requires **two traversals**.

A more efficient solution uses the **Fast & Slow Pointer** technique.

* **Slow Pointer** moves **one node** at a time.
* **Fast Pointer** moves **two nodes** at a time.

By the time the fast pointer reaches the end of the list, the slow pointer will have reached the middle.

For an even-length linked list, the algorithm naturally returns the **second middle node**, which matches the problem requirement.

---

# 📝 Algorithm

1. Initialize two pointers:

   * `slow = head`
   * `fast = head`
2. Traverse the linked list while `fast` and `fast.next` are not `null`.
3. Move:

   * `slow` one step forward.
   * `fast` two steps forward.
4. When the loop ends, `slow` will point to the middle node.
5. Return `slow`.

---

# 💻 Code

```javascript id="jlwmz5"
var middleNode = function(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

    }

    return slow;
};
```

---

# 🧪 Dry Run

### Input

```text id="v49k2w"
1 → 2 → 3 → 4 → 5 → 6
```

### Initial State

```text id="k1ywlo"
S,F
 ↓
1 → 2 → 3 → 4 → 5 → 6
```

---

### Iteration 1

Move pointers:

```text id="1jlwmg"
Slow → 2

Fast → 3
```

```text id="yngm06"
1 → 2 → 3 → 4 → 5 → 6
    S       F
```

---

### Iteration 2

Move pointers:

```text id="if8hwd"
Slow → 3

Fast → 5
```

```text id="n4ykn9"
1 → 2 → 3 → 4 → 5 → 6
        S       F
```

---

### Iteration 3

Move pointers:

```text id="ft4b5q"
Slow → 4

Fast → null
```

```text id="o8qdvo"
1 → 2 → 3 → 4 → 5 → 6
            S
```

The loop ends because:

```javascript id="o87czw"
fast === null
```

Return:

```javascript id="ft9cxy"
slow
```

Output:

```text id="wxyjlwm"
4 → 5 → 6
```

---

# ❓ Why Does This Work?

The fast pointer moves **twice as fast** as the slow pointer.

* When the fast pointer has traversed the **entire linked list**, the slow pointer has traversed **half of it**.
* Therefore, when the fast pointer reaches the end, the slow pointer is exactly at the middle node.

For even-length linked lists, the fast pointer becomes `null` after moving two steps, leaving the slow pointer at the **second middle node**, which is exactly what the problem requires.

---

# 📊 Complexity Analysis

### Time Complexity

```text id="tl4yv4"
O(n)
```

* Each node is visited at most once.
* Only a single traversal of the linked list is performed.

---

### Space Complexity

```text id="jlwmn5"
O(1)
```

* Only two pointers (`slow` and `fast`) are used.
* No additional data structures are required.

---

# 🚀 Key Takeaways

* The **Fast & Slow Pointer** technique allows finding the middle node in a **single traversal**.
* The slow pointer moves one step, while the fast pointer moves two steps.
* When the fast pointer reaches the end of the list, the slow pointer is positioned at the middle.
* The algorithm naturally returns the **second middle node** for even-length linked lists.
* This is the optimal solution with **O(n)** time and **O(1)** extra space.

---

Happy Coding! 🚀
