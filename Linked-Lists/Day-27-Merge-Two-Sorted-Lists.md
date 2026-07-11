# Merge Two Sorted Lists | Dummy Node + Two Pointers | JavaScript

## Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted linked list by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Example

```text
Input:

list1: 1 → 2 → 4
list2: 1 → 3 → 4

Output:

1 → 1 → 2 → 3 → 4 → 4
```

---

# 💡 Intuition

Since both linked lists are already sorted, we don't need to sort them again.

Instead, we compare the current node of each list and always choose the **smaller node** to be added to the merged list.

To simplify the implementation, we use a **dummy node**.

The dummy node acts as a fixed starting point, allowing us to append nodes without handling the first node as a special case.

We also maintain a **tail** pointer that always points to the last node of the merged list.

---

# 📝 Algorithm

1. Create a dummy node.
2. Initialize a `tail` pointer to the dummy node.
3. Traverse both linked lists while neither is empty.
4. Compare the current nodes of both lists.
5. Attach the smaller node to `tail.next`.
6. Move the corresponding list pointer forward.
7. Move the `tail` pointer forward.
8. After one list becomes empty, attach the remaining nodes of the other list.
9. Return `dummy.next` as the head of the merged list.

---

# 💻 Code

```javascript
var mergeTwoLists = function(list1, list2) {

    let dummy = new ListNode(-1);
    let tail = dummy;

    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {

            tail.next = list1;
            list1 = list1.next;

        } else {

            tail.next = list2;
            list2 = list2.next;

        }

        tail = tail.next;
    }

    if (list1 !== null) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    return dummy.next;
};
```

---

# 🧪 Dry Run

### Input

```text
list1

1 → 2 → 4

list2

1 → 3 → 4
```

### Initial State

```text
dummy → null
 ↑
tail
```

---

### Iteration 1

Compare:

```text
1 <= 1
```

Attach node from `list1`.

```text
dummy → 1
          ↑
         tail
```

Move:

```text
list1

2 → 4

list2

1 → 3 → 4
```

---

### Iteration 2

Compare:

```text
2 <= 1 ❌
```

Attach node from `list2`.

```text
dummy → 1 → 1
              ↑
             tail
```

Move:

```text
list1

2 → 4

list2

3 → 4
```

---

### Iteration 3

Compare:

```text
2 <= 3
```

Attach node `2`.

```text
dummy → 1 → 1 → 2
                  ↑
                 tail
```

Move:

```text
list1

4

list2

3 → 4
```

---

### Iteration 4

Compare:

```text
4 <= 3 ❌
```

Attach node `3`.

```text
dummy → 1 → 1 → 2 → 3
                      ↑
                     tail
```

Move:

```text
list1

4

list2

4
```

---

### Iteration 5

Compare:

```text
4 <= 4
```

Attach node from `list1`.

```text
dummy → 1 → 1 → 2 → 3 → 4
                          ↑
                         tail
```

Now `list1` becomes `null`.

Exit the loop.

Attach the remaining nodes:

```text
tail.next = list2
```

Final merged list:

```text
1 → 1 → 2 → 3 → 4 → 4
```

Return:

```javascript
dummy.next
```

---

# ❓ Why Do We Use a Dummy Node?

Without a dummy node, we would need special handling for the first node of the merged list.

Example:

```javascript
if (head === null) {
    head = list1;
    tail = head;
}
```

This makes the code more complex.

Using a dummy node allows us to use the same logic for every node:

```javascript
tail.next = smallerNode;
tail = tail.next;
```

Finally, we simply return:

```javascript
dummy.next
```

since `dummy` itself is just a placeholder.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(m + n)
```

* Each node from both linked lists is visited exactly once.

---

### Space Complexity

```text
O(1)
```

* Only a few pointers (`dummy` and `tail`) are used.
* No extra data structures are required.

---

# 🚀 Key Takeaways

* Since both lists are already sorted, compare only the current nodes.
* Always attach the smaller node to the merged list.
* Move only the pointer (`list1` or `list2`) of the node that was attached.
* Use a **dummy node** to eliminate edge cases for the first node.
* After one list ends, append the remaining nodes of the other list.
* The iterative solution runs in **O(m + n)** time and **O(1)** extra space, making it the optimal approach.

---

Happy Coding! 🚀
