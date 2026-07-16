# Min Stack | Two Stacks | JavaScript

## Problem

Design a stack that supports the following operations:

* `push(val)` – Push an element onto the stack.
* `pop()` – Remove the top element.
* `top()` – Return the top element.
* `getMin()` – Retrieve the minimum element in the stack.

**Constraint:** All operations must run in **O(1)** time.

### Example

```text
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]
```

---

# 💡 Intuition

A brute-force approach is to traverse the entire stack whenever `getMin()` is called.

For example:

```text
Stack

Top
 ↓
1
8
2
5
```

To find the minimum:

* Initialize `min = Infinity`.
* Traverse every element.
* Return the smallest value.

Although this works, `getMin()` takes **O(n)** time, which violates the problem's requirement.

To achieve **O(1)** time for every operation, we use **two stacks**:

* **Main Stack** → Stores all elements.
* **Min Stack** → Stores the minimum element seen so far at each position.

The top of the Min Stack always contains the current minimum element.

---

# 📝 Algorithm

### push(val)

1. Push `val` into the Main Stack.
2. Find the current minimum:

   * If the Min Stack is empty, the current minimum is `val`.
   * Otherwise, compare `val` with the current minimum.
3. Push the smaller value into the Min Stack.

---

### pop()

1. Pop from the Main Stack.
2. Pop from the Min Stack.

---

### top()

Return the top element of the Main Stack.

---

### getMin()

Return the top element of the Min Stack.

---

# 💻 Code

```javascript
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    let currentMin = this.minStack.length === 0
        ? val
        : this.minStack[this.minStack.length - 1];

    this.minStack.push(Math.min(val, currentMin));
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
```

---

# 🧪 Dry Run

### Operations

```text
push(5)
push(2)
push(8)
push(1)
```

| Operation | Main Stack | Min Stack |
| --------- | ---------- | --------- |
| push(5)   | [5]        | [5]       |
| push(2)   | [5,2]      | [5,2]     |
| push(8)   | [5,2,8]    | [5,2,2]   |
| push(1)   | [5,2,8,1]  | [5,2,2,1] |

---

### getMin()

Top of Min Stack:

```text
1
```

Return:

```javascript
1
```

---

### pop()

Remove the top element from both stacks.

| Main Stack | Min Stack |
| ---------- | --------- |
| [5,2,8]    | [5,2,2]   |

---

### top()

Top of Main Stack:

```text
8
```

Return:

```javascript
8
```

---

### getMin()

Top of Min Stack:

```text
2
```

Return:

```javascript
2
```

---

# ❓ Why Do We Need Two Stacks?

The Main Stack stores the actual values.

The Min Stack stores the **minimum value at each position**.

Example:

| Main Stack | Min Stack |
| ---------- | --------- |
| 5          | 5         |
| 5,2        | 5,2       |
| 5,2,8      | 5,2,2     |
| 5,2,8,1    | 5,2,2,1   |

Whenever we push a new value, we also store the minimum value seen so far.

This allows `getMin()` to return the answer instantly by simply looking at the top of the Min Stack.

---

# 📊 Complexity Analysis

### Time Complexity

| Operation | Complexity |
| --------- | ---------- |
| push()    | **O(1)**   |
| pop()     | **O(1)**   |
| top()     | **O(1)**   |
| getMin()  | **O(1)**   |

All operations perform only constant-time stack operations.

---

### Space Complexity

```text
O(n)
```

* The Main Stack stores all elements.
* The Min Stack stores one minimum value for each element.

Overall Space Complexity:

```text
O(n)
```

---

# 🚀 Key Takeaways

* A normal stack cannot return the minimum element in **O(1)** time.
* Using a second stack allows us to track the minimum value after every push.
* The Min Stack stores the **minimum element seen so far**, not the actual values.
* Both stacks must always remain synchronized by performing push and pop operations together.
* The top of the Min Stack always represents the current minimum element.
* This approach achieves **O(1)** time for all operations with **O(n)** extra space.

---

Happy Coding! 🚀
