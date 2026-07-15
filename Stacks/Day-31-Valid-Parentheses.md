# Valid Parentheses | Stack | JavaScript

## Problem

Given a string `s` containing only the characters:

```text
'(', ')', '{', '}', '[' and ']'
```

Determine if the input string is valid.

A string is considered valid if:

* Every opening bracket has a corresponding closing bracket.
* Brackets are closed in the correct order.
* Every closing bracket has a matching opening bracket.

### Example 1

```text
Input:

s = "()"

Output:

true
```

### Example 2

```text
Input:

s = "()[]{}"

Output:

true
```

### Example 3

```text
Input:

s = "(]"

Output:

false
```

### Example 4

```text
Input:

s = "([)]"

Output:

false
```

---

# 💡 Intuition

A simple approach is to compare adjacent brackets using two pointers. However, this fails for nested expressions like:

```text
({[]})
```

Here, the matching brackets are **not adjacent**.

The correct approach is to use a **Stack**.

A stack follows the **Last In, First Out (LIFO)** principle.

* Whenever we encounter an **opening bracket**, we push it onto the stack.
* Whenever we encounter a **closing bracket**, it must match the **top element** of the stack.
* If it matches, we pop the opening bracket.
* Otherwise, the string is invalid.

At the end, the stack should be empty, meaning every opening bracket has been matched.

---

# 📝 Algorithm

1. Create an empty stack.
2. Traverse each character in the string.
3. If the character is an opening bracket (`(`, `{`, `[`), push it onto the stack.
4. If the character is a closing bracket:

   * If the stack is empty, return `false`.
   * Check the top element of the stack.
   * If it matches the current closing bracket, pop it.
   * Otherwise, return `false`.
5. After processing all characters, return `true` only if the stack is empty.

---

# 💻 Code

```javascript
var isValid = function(s) {

    let stack = [];

    for (let ch of s) {

        if (ch === '(' || ch === '{' || ch === '[') {

            stack.push(ch);

        } else {

            if (stack.length === 0) {
                return false;
            }

            let top = stack[stack.length - 1];

            if (
                (ch === ')' && top === '(') ||
                (ch === '}' && top === '{') ||
                (ch === ']' && top === '[')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```

---

# 🧪 Dry Run

### Input

```text
s = "({[]})"
```

### Initial State

```text
Stack = []
```

---

### Read '('

Push onto the stack.

```text
Stack

(
```

---

### Read '{'

Push onto the stack.

```text
Stack

{
(
```

---

### Read '['

Push onto the stack.

```text
Stack

[
{
(
```

---

### Read ']'

Top of the stack:

```text
[
```

It matches `]`.

Pop the top element.

```text
Stack

{
(
```

---

### Read '}'

Top of the stack:

```text
{
```

It matches `}`.

Pop the top element.

```text
Stack

(
```

---

### Read ')'

Top of the stack:

```text
(
```

It matches `)`.

Pop the top element.

```text
Stack = []
```

The stack is empty.

Return:

```javascript
true
```

---

# ❓ Why Do We Use a Stack?

A stack always gives access to the **most recently opened bracket**.

Example:

```text
({[]})
```

The brackets are opened in this order:

```text
(
{
[
```

They must be closed in the **reverse order**:

```text
]
}
)
```

Since a stack follows the **Last In, First Out (LIFO)** principle, it perfectly models this behavior.

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n)
```

* We traverse the string once.
* Each bracket is pushed and popped at most once.

---

### Space Complexity

```text
O(n)
```

* In the worst case (e.g., `"((((("`), all opening brackets are stored in the stack.

---

# 🚀 Key Takeaways

* A **Stack** is the ideal data structure because brackets must be closed in the reverse order they are opened.
* Push every opening bracket onto the stack.
* For every closing bracket, compare it with the **top** of the stack.
* If the brackets match, pop the opening bracket.
* If they don't match or the stack is empty, return `false`.
* After processing the string, the stack must be empty for the parentheses to be valid.
* This solution runs in **O(n)** time and **O(n)** space, making it the optimal approach.

---

Happy Coding! 🚀
