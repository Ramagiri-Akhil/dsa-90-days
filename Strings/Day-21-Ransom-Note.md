# Ransom Note | Frequency Array | JavaScript

## Problem

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine`, otherwise return `false`.

Each letter in `magazine` can only be used **once**.

### Example

```javascript
Input:
ransomNote = "aa"
magazine = "aab"

Output:
true
```

Explanation:

```text
The magazine contains two 'a' characters and one 'b'.

We can use both 'a' characters to construct the ransom note.
```

---

# 💡 Intuition

A brute-force approach would search for every character of the ransom note inside the magazine and remove it once found.

However, repeatedly searching through the magazine makes the solution inefficient.

A better approach is to count the frequency of every character in the magazine.

Then, while traversing the ransom note:

* If the required character is unavailable, return `false`.
* Otherwise, use that character by decreasing its frequency.

If we successfully process every character, the ransom note can be constructed.

---

# 📝 Algorithm

1. Create a frequency array of size `26`.
2. Traverse the `magazine` string and count the frequency of every character.
3. Traverse the `ransomNote`.
4. For each character:

   * If its frequency is `0`, return `false`.
   * Otherwise, decrement its frequency.
5. If all characters are processed successfully, return `true`.

---

# 💻 Code

```javascript
var canConstruct = function(ransomNote, magazine) {

    const count = new Array(26).fill(0);

    // Count characters in magazine
    for (let i = 0; i < magazine.length; i++) {
        count[magazine.charCodeAt(i) - 97]++;
    }

    // Use characters for ransom note
    for (let i = 0; i < ransomNote.length; i++) {

        if (count[ransomNote.charCodeAt(i) - 97] === 0) {
            return false;
        }

        count[ransomNote.charCodeAt(i) - 97]--;
    }

    return true;
};
```

---

# 🧪 Dry Run

### Input

```javascript
ransomNote = "aa"
magazine = "aab"
```

### Step 1

Build the frequency array for `magazine`.

```text
Magazine = "aab"

a → 2
b → 1
```

---

### Step 2

Read the first character of `ransomNote`.

```text
'a'
```

Frequency:

```text
a → 2
```

Available.

Use one occurrence.

```text
a → 1
```

---

### Step 3

Read the second character.

```text
'a'
```

Frequency:

```text
a → 1
```

Available.

Use one occurrence.

```text
a → 0
```

All characters have been processed successfully.

Return:

```javascript
true
```

---

### Another Example

```javascript
ransomNote = "aa"
magazine = "ab"
```

Frequency:

```text
a → 1
b → 1
```

Use the first `'a'`:

```text
a → 0
```

Need another `'a'`, but:

```text
a → 0
```

Not available.

Return:

```javascript
false
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n + m)
```

Where:

* `n` = length of `ransomNote`
* `m` = length of `magazine`

We traverse each string only once.

---

### Space Complexity

```text
O(1)
```

The frequency array always contains **26** elements, regardless of the input size.

---

# 🎯 Why Frequency Array?

The problem is not asking whether a character exists—it asks **how many times** each character is available.

A frequency array allows us to:

* Count each character efficiently.
* Consume characters as they are used.
* Detect immediately when a required character is unavailable.

Since the input contains only lowercase English letters, a frequency array is more efficient than a HashMap.

---

# 🚀 Key Takeaways

* The problem is based on **character frequency**, not character existence.
* A frequency array is the optimal choice for lowercase English letters.
* Build the frequency array once and consume characters while traversing the ransom note.
* If any required character is unavailable, return `false` immediately.
* The solution runs in **O(n + m)** time with **O(1)** extra space.

---

Happy Coding! 🚀
