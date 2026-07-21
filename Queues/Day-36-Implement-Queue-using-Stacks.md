# Implement Queue Using Stacks | Stack | JavaScript

## Problem

Implement a **queue** using only **two stacks**.

A queue follows the **First In, First Out (FIFO)** principle.

You need to implement the following operations:

* `push(x)` → Push element `x` to the back of the queue.
* `pop()` → Removes the element from the front of the queue and returns it.
* `peek()` → Returns the element at the front of the queue.
* `empty()` → Returns `true` if the queue is empty, otherwise `false`.

### Example

```text
Input:

push(1)
push(2)
peek()
pop()
empty()

Output:

1
1
false
```

---

# 💡 Intuition

A stack follows the **Last In, First Out (LIFO)** principle, which is the opposite of a queue.

To simulate a queue using stacks, we use **two stacks**:

* **Input Stack** → Used for pushing elements.
* **Output Stack** → Used for popping and peeking elements.

Key idea:

* When we need to access the front element, we transfer all elements from the input stack to the output stack.
* This reverses the order, making the oldest element appear on top of the output stack.

To optimize performance, we only transfer elements **when the output stack is empty**.

---

# 📝 Algorithm

1. Initialize two stacks: `input` and `output`.
2. For `push(x)`:

   * Push `x` onto the input stack.
3. For `pop()`:

   * If the output stack is empty:

     * Move all elements from input to output.
   * Pop and return the top element from the output stack.
4. For `peek()`:

   * If the output stack is empty:

     * Move all elements from input to output.
   * Return the top element of the output stack.
5. For `empty()`:

   * Return `true` if both stacks are empty.

---

# 💻 Code

```javascript
var MyQueue = function() {
    this.input = [];
    this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {

    if (this.output.length === 0) {
        while (this.input.length > 0) {
            this.output.push(this.input.pop());
        }
    }

    return this.output.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if (this.output.length === 0) {
        while (this.input.length > 0) {
            this.output.push(this.input.pop());
        }
    }

    return this.output[this.output.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length === 0 && this.output.length === 0;
};
```

---

# 🧪 Dry Run

### Operations

```text
push(1)
push(2)
peek()
pop()
empty()
```

### Initial State

```text
Input  = []
Output = []
```

---

### push(1)

```text
Input  = [1]
Output = []
```

---

### push(2)

```text
Input  = [1, 2]
Output = []
```

---

### peek()

Output stack is empty, so transfer elements:

```text
Input  = []
Output = [2, 1]
```

Front element:

```text
1
```

---

### pop()

```text
Input  = []
Output = [2]
```

Returned:

```text
1
```

---

### empty()

```text
Input  = []
Output = [2]
```

Queue is not empty:

```text
false
```

---

# ❓ Why Do We Use Two Stacks?

A single stack cannot maintain FIFO order.

Using two stacks allows us to reverse the order of elements:

* First stack stores elements in insertion order.
* Second stack reverses them to simulate queue behavior.

This ensures that the **oldest element is always accessible first**.

---

# 📊 Complexity Analysis

### Time Complexity

```text
push()  → O(1)
pop()   → Amortized O(1)
peek()  → Amortized O(1)
empty() → O(1)
```

* Each element is moved at most once between stacks.

---

### Space Complexity

```text
O(n)
```

* Both stacks together store at most `n` elements.

---

# 🚀 Key Takeaways

* A queue can be implemented using **two stacks**.
* Use one stack for **input** and another for **output**.
* Transfer elements only when necessary to maintain efficiency.
* `pop()` and `peek()` operations are **amortized O(1)**.
* This approach effectively simulates FIFO behavior using LIFO structures.

---

Happy Coding! 🚀
