# Word Ladder — LeetCode #127

## 🧠 Approach: Breadth-First Search (BFS)

The problem asks us to transform `beginWord` into `endWord` by changing **one character at a time**.

Every intermediate word must exist in `wordList`.

For example:

```text
hit → hot → dot → dog → cog
```

Since we need the **shortest transformation sequence**, we can treat each word as a node in a graph and use **BFS**.

### 🔑 How it works

1. Put `beginWord` into a queue.
2. Take one word from the queue.
3. Change each character of the word to every letter from `a` to `z`.
4. If the generated word exists in `wordList`, add it to the queue.
5. Remove visited words from the `Set` so we don't process them again.
6. The first time we reach `endWord`, return the number of steps.

For example, for `"hit"`:

```text
hit
 ↓
Change index 0 → ait, bit, cit, ..., hot, ...
Change index 1 → hat, hbt, hct, ...
Change index 2 → hia, hib, hic, ...
```

If `"hot"` exists in the word list, we add it to the BFS queue.

## 💻 JavaScript Solution

```js
var ladderLength = function(beginWord, endWord, wordList) {

    if (!wordList.includes(endWord)) {
        return 0;
    }

    let words = new Set(wordList);

    let queue = [[beginWord, 1]];

    let index = 0;

    while (index < queue.length) {

        let [word, steps] = queue[index++];

        for (let i = 0; i < word.length; i++) {

            for (let code = 97; code <= 122; code++) {

                let char = String.fromCharCode(code);

                if (char === word[i]) {
                    continue;
                }

                // Replace the character at index i
                let newWord =
                    word.slice(0, i) +
                    char +
                    word.slice(i + 1);

                // Found the target
                if (newWord === endWord) {
                    return steps + 1;
                }

                // Valid and not visited
                if (words.has(newWord)) {

                    words.delete(newWord);

                    queue.push([
                        newWord,
                        steps + 1
                    ]);
                }
            }
        }
    }

    return 0;
};
```

## ⏱️ Complexity

Let:

* `N` = number of words
* `L` = length of each word

For every word, we try `L` positions and `26` possible characters.

* **Time:** `O(N × L × 26)` → `O(N × L)`
* **Space:** `O(N)`

### 💡 Key Takeaway

The most important pattern here is:

**One-character transformations → Graph → Shortest path → BFS** 🚀

And remember:

```js
word.slice(0, i) + char + word.slice(i + 1)
```

means:

**everything before `i` + new character + everything after `i`**.

That is how we change exactly **one character at a time**.
