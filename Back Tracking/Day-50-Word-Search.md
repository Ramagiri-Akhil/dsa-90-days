# 79. Word Search

**Difficulty:** Medium

## Problem Statement

Given an `m x n` grid of characters `board` and a string `word`, return **true** if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are **horizontally or vertically neighboring**.

The same cell **cannot be used more than once** in a single path.

**LeetCode:** https://leetcode.com/problems/word-search/

---

# Intuition

We need to determine whether there exists **at least one path** in the grid that forms the given word.

We can start from **any cell** that matches the first character of the word.

From each matching cell, we perform a **Depth First Search (DFS)** and explore all four possible directions:

- Up
- Down
- Left
- Right

While exploring a path, we temporarily mark the current cell as visited so it cannot be reused.

After exploring all possibilities from that cell, we restore its original value. This is the **Backtracking** step.

---

# Approach

1. Traverse every cell in the board.
2. If a cell matches the first character of the word, start DFS.
3. In the DFS function:
   - If all characters are matched, return `true`.
   - Return `false` if:
     - The position is out of bounds.
     - The character doesn't match.
     - The cell has already been visited.
   - Mark the current cell as visited.
   - Explore all four directions recursively.
   - Restore the original character before returning.
4. If any DFS call returns `true`, the word exists.
5. Otherwise, return `false`.

---

# Code

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {

        // Base Case: Entire word found
        if (index === word.length) {
            return true;
        }

        // Invalid position or character mismatch
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Mark current cell as visited
        let temp = board[row][col];
        board[row][col] = "#";

        // Explore all four directions
        let found =
            dfs(row - 1, col, index + 1) || // Up
            dfs(row + 1, col, index + 1) || // Down
            dfs(row, col - 1, index + 1) || // Left
            dfs(row, col + 1, index + 1);   // Right

        // Restore the original character (Backtrack)
        board[row][col] = temp;

        return found;
    }

    // Try every cell as a starting point
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};
```

---

# Dry Run

### Input

```text
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

word = "ABCCED"
```

---

### Step 1

Start from the first matching character.

```text
A B C E
↑
S F C S
A D E E
```

Matched:

```text
A
```

Mark it as visited.

```text
# B C E
S F C S
A D E E
```

---

### Step 2

Search for the next character (`B`).

Check all four directions.

- Up ❌
- Left ❌
- Down ❌
- Right ✅

Move right.

```text
# B C E
  ↑
S F C S
A D E E
```

Matched:

```text
AB
```

---

### Step 3

Search for `C`.

Move right.

```text
# # C E
    ↑
S F C S
A D E E
```

Matched:

```text
ABC
```

---

### Step 4

Continue exploring.

```text
# # # E
S F C S
    ↑
A D E E
```

Matched:

```text
ABCCE
```

Finally,

```text
# # # E
S F # S
  ↑
A D E E
```

Matched:

```text
ABCCED
```

Entire word is found.

Return:

```text
true
```

---

# Complexity Analysis

- **Time Complexity:** `O(m × n × 4^L)`
  - `m × n` possible starting cells.
  - `L` is the length of the word.
  - From each character, DFS explores up to four directions.

- **Space Complexity:** `O(L)`
  - Maximum recursion depth equals the length of the word.

---

# Key Takeaways

- Traverse every cell because the word can start anywhere.
- Start DFS only when the first character matches.
- Mark visited cells to prevent revisiting them in the same path.
- Restore the cell after recursion (Backtracking).
- Explore all four directions.
- Return `true` as soon as one valid path is found.

---

## Pattern Learned

- Backtracking
- Depth First Search (DFS)
- Grid Traversal
- 2D Matrix Traversal
- Choose → Explore → Undo
- Mark & Restore Technique
- Boundary Checking
- Recursive Search