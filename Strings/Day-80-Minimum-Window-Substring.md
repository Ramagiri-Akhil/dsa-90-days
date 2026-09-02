# Minimum Window Substring — LeetCode #76

## 🧠 Approach

We use the **Sliding Window + HashMap** technique.

The goal is to find the **smallest substring of `s` that contains all characters of `t`**, including duplicates.

We maintain two maps:

* `need` → stores the frequency of each character required from `t`.
* `window` → stores the frequency of characters in the current window.

We also maintain:

* `formed` → number of required character frequencies currently satisfied.
* `required` → total number of distinct characters we need.

### 🔄 Algorithm

1. Store the frequency of every character in `t` inside `need`.
2. Use `right` to expand the window.
3. Add each character to `window`.
4. If a character reaches its required frequency, increase `formed`.
5. When `formed === required`, the window is valid.
6. Move `left` forward to shrink the window as much as possible.
7. Keep track of the smallest valid window.
8. Return the smallest window found.

## 💻 JavaScript

```js
var minWindow = function(s, t) {

    if (t.length > s.length) return "";

    let need = new Map();
    let window = new Map();

    // Count required characters
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let formed = 0;
    let required = need.size;

    let minLength = Infinity;
    let minStart = 0;

    // Expand window using right
    for (let right = 0; right < s.length; right++) {

        let char = s[right];

        window.set(
            char,
            (window.get(char) || 0) + 1
        );

        // Requirement for this character is satisfied
        if (
            need.has(char) &&
            window.get(char) === need.get(char)
        ) {
            formed++;
        }

        // Shrink window while it is valid
        while (formed === required) {

            let currentLength = right - left + 1;

            // Update minimum window
            if (currentLength < minLength) {
                minLength = currentLength;
                minStart = left;
            }

            let leftChar = s[left];

            window.set(
                leftChar,
                window.get(leftChar) - 1
            );

            // Removing this character broke a requirement
            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }
    }

    if (minLength === Infinity) return "";

    return s.slice(minStart, minStart + minLength);
};
```

## ⏱️ Complexity

* **Time:** `O(n + m)`
* **Space:** `O(k)`

Where `n` is the length of `s`, `m` is the length of `t`, and `k` is the number of distinct characters.

## 🔑 Key Takeaway

The main pattern is:

```text
Expand with right
       ↓
Window becomes valid
       ↓
Shrink with left
       ↓
Window becomes invalid
       ↓
Expand again
```

The most important condition is:

```js
formed === required
```

which tells us that our current window contains everything required by `t`.
