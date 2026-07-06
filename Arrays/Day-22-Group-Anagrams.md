# Group Anagrams | HashMap + Frequency Array | JavaScript

## Problem

Given an array of strings `strs`, group the anagrams together.

You can return the answer in **any order**.

An **anagram** is a word or phrase formed by rearranging the letters of another word using all the original letters exactly once.

### Example

```javascript
Input:
strs = ["eat","tea","tan","ate","nat","bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```

Explanation:

```text
"eat", "tea", and "ate" contain the same characters,
so they belong to the same group.

Similarly,
"tan" and "nat" form another group.

"bat" has no other anagram.
```

---

# 💡 Intuition

A straightforward approach is to sort every string alphabetically and use the sorted string as a key.

For example:

```text
eat → aet
tea → aet
ate → aet
```

Since all anagrams produce the same sorted string, they can be grouped together.

However, sorting every string takes **O(k log k)** time.

A more efficient approach is to use a **frequency array**.

Instead of sorting, count how many times each character appears.

For example:

```text
eat

a → 1
e → 1
t → 1
```

Every anagram produces the exact same frequency array.

We convert this frequency array into a string and use it as the key in a **HashMap**.

---

# 📝 Algorithm

1. Create a HashMap.
2. Traverse every word in the input array.
3. Create a frequency array of size `26`.
4. Count the occurrence of every character in the current word.
5. Convert the frequency array into a string key.
6. If the key doesn't exist in the map, create a new array.
7. Push the current word into its corresponding group.
8. Return all the values stored in the map.

---

# 💻 Code

```javascript
var groupAnagrams = function(strs) {

    const map = new Map();

    for (const word of strs) {

        const count = new Array(26).fill(0);

        for (const ch of word) {
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
};
```

---

# 🧪 Dry Run

### Input

```javascript
strs = ["eat","tea","tan","ate","nat","bat"]
```

### Step 1

Word:

```text
eat
```

Frequency:

```text
a → 1
e → 1
t → 1
```

Key:

```text
1#0#0#0#1#0#...#1
```

Map:

```text
{
Key1 → ["eat"]
}
```

---

### Step 2

Word:

```text
tea
```

Produces the same frequency array.

Same key.

Map:

```text
{
Key1 → ["eat", "tea"]
}
```

---

### Step 3

Word:

```text
ate
```

Same frequency.

Map:

```text
{
Key1 → ["eat", "tea", "ate"]
}
```

---

### Step 4

Word:

```text
tan
```

New frequency.

New key.

Map:

```text
{
Key1 → ["eat", "tea", "ate"]
Key2 → ["tan"]
}
```

---

### Step 5

Word:

```text
nat
```

Produces the same frequency as `"tan"`.

Map:

```text
{
Key1 → ["eat", "tea", "ate"]
Key2 → ["tan", "nat"]
}
```

---

### Step 6

Word:

```text
bat
```

New key.

Final Map:

```text
{
Key1 → ["eat", "tea", "ate"]
Key2 → ["tan", "nat"]
Key3 → ["bat"]
}
```

Return:

```javascript
[
    ["eat","tea","ate"],
    ["tan","nat"],
    ["bat"]
]
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n × k)
```

Where:

* `n` = number of strings
* `k` = average length of each string

Each character is visited exactly once while building the frequency array.

---

### Space Complexity

```text
O(n × k)
```

The HashMap stores every string, and each key is derived from a frequency array of fixed size.

---

# 🎯 Why Frequency Array?

Instead of sorting every string, we represent each word by the **frequency of its characters**.

For example:

```text
eat

a → 1
e → 1
t → 1
```

Every anagram produces the exact same frequency array.

By converting this frequency array into a string key, we can efficiently group all anagrams together without performing any sorting.

This improves the time complexity from:

```text
O(n × k log k)
```

to

```text
O(n × k)
```

making it more efficient for longer strings.

---

# 🚀 Key Takeaways

* Anagrams have the **same character frequencies**, only the order differs.
* A **HashMap** is ideal for grouping strings using a common key.
* Using a **frequency array** avoids sorting every string.
* Converting the frequency array into a string creates a unique and reusable key.
* This optimized solution runs in **O(n × k)** time and is faster than the sorting-based approach.

---

Happy Coding! 🚀
