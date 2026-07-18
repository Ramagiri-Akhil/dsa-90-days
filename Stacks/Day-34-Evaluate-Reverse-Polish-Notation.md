# Evaluate Reverse Polish Notation | Stack | JavaScript

## Problem

Evaluate the value of an arithmetic expression in **Reverse Polish Notation (RPN)**.

Valid operators are:

* `+`
* `-`
* `*`
* `/`

Each operand may be an integer or another expression.

**Constraint:** Division between two integers should truncate toward zero.

### Example

```text
Input:
["2","1","+","3","*"]

Output:
9
```

---

# 💡 Intuition

In Reverse Polish Notation, operators come **after** their operands.

Example:

```text
2 1 + 3 *
```

Instead of using parentheses, we evaluate expressions using a **Stack**.

* When we see a number → push it onto the stack.
* When we see an operator → pop the top two numbers, apply the operation, and push the result back.

Important:

* First pop → second operand (`b`)
* Second pop → first operand (`a`)

Then compute:

```text
a operator b
```

---

# 📝 Algorithm

### For each token:

1. If the token is a number:

   * Convert it to a number.
   * Push it onto the stack.

2. If the token is an operator:

   * Pop `b` from the stack.
   * Pop `a` from the stack.
   * Perform the operation:

     * `a + b`
     * `a - b`
     * `a * b`
     * `Math.trunc(a / b)`
   * Push the result back onto the stack.

3. After processing all tokens:

   * Return the top element of the stack.

---

# 💻 Code

```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    const stack = [];

    for (const token of tokens) {

        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {

            const b = stack.pop();
            const a = stack.pop();

            switch (token) {

                case "+":
                    stack.push(a + b);
                    break;

                case "-":
                    stack.push(a - b);
                    break;

                case "*":
                    stack.push(a * b);
                    break;

                case "/":
                    stack.push(Math.trunc(a / b));
                    break;
            }
        }
    }

    return stack.pop();
};
```

---

# 🧪 Dry Run

### Input

```text
["2","1","+","3","*"]
```

| Token | Operation | Stack  |
| ----- | --------- | ------ |
| 2     | Push      | [2]    |
| 1     | Push      | [2, 1] |
| +     | 2 + 1 = 3 | [3]    |
| 3     | Push      | [3, 3] |
| *     | 3 * 3 = 9 | [9]    |

---

### Final Result

```javascript
9
```

---

# ❓ Why Use a Stack?

A stack helps us process operands in the correct order.

* It ensures we always use the **most recent values first**.
* It naturally fits the evaluation of postfix expressions.

Without a stack, managing operand order becomes complex.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* Each token is processed once.

---

### Space Complexity

```text
O(n)
```

* In the worst case, all numbers are stored in the stack.

---

# 🚀 Key Takeaways

* Reverse Polish Notation eliminates the need for parentheses.
* A stack is the best data structure for evaluating postfix expressions.
* Always maintain correct operand order (`a operator b`).
* Use `Math.trunc()` for integer division toward zero.
* Each element is pushed and popped at most once, ensuring efficiency.

---

Happy Coding! 🚀
