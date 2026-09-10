# Pacific Atlantic Water Flow — LeetCode #417

## 🧠 Approach: DFS + Reverse Flow

The problem asks us to find cells from which water can flow to **both the Pacific and Atlantic oceans**.

Instead of starting DFS from every cell and checking whether it can reach an ocean, we reverse the direction of the problem.

Normally, water flows:

```text
Higher height → Lower or Equal height
```

So, starting from an ocean, we move toward cells with **greater than or equal height**.

We perform two DFS traversals:

* **Pacific DFS:** Start from the top row and left column.
* **Atlantic DFS:** Start from the bottom row and right column.

Then, any cell visited by **both** DFS traversals can reach both oceans.

---

## 🔑 How It Works

1. Create a `pacific` visited matrix.
2. Create an `atlantic` visited matrix.
3. Run DFS from all Pacific-border cells.
4. Run DFS from all Atlantic-border cells.
5. During DFS, only move to a neighbor when:

```js
heights[nextRow][nextCol] >= heights[row][col]
```

6. Traverse the entire matrix and collect cells where both matrices contain `true`.

---

## 💻 JavaScript Solution

```js
var pacificAtlantic = function(heights) {

    let rows = heights.length;
    let cols = heights[0].length;

    let pacific = Array.from(
        { length: rows },
        () => Array(cols).fill(false)
    );

    let atlantic = Array.from(
        { length: rows },
        () => Array(cols).fill(false)
    );

    let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    function dfs(row, col, visited) {

        visited[row][col] = true;

        for (let [dr, dc] of directions) {

            let nextRow = row + dr;
            let nextCol = col + dc;

            if (
                nextRow >= 0 &&
                nextRow < rows &&
                nextCol >= 0 &&
                nextCol < cols &&
                !visited[nextRow][nextCol] &&
                heights[nextRow][nextCol] >= heights[row][col]
            ) {
                dfs(nextRow, nextCol, visited);
            }
        }
    }

    // Pacific Ocean
    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacific);
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacific);
    }

    // Atlantic Ocean
    for (let col = 0; col < cols; col++) {
        dfs(rows - 1, col, atlantic);
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, cols - 1, atlantic);
    }

    let result = [];

    // Find cells reachable from both oceans
    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            if (pacific[row][col] && atlantic[row][col]) {
                result.push([row, col]);
            }
        }
    }

    return result;
};
```

---

## 🔄 Why Reverse the Flow?

Suppose we have:

```text
5 → 4 → 3 → Ocean
```

Water can flow from `5` to `4`, then `4` to `3`.

Instead of starting at `5`, we start from the ocean:

```text
Ocean → 3 → 4 → 5
```

Therefore, our DFS condition is:

```js
heights[nextRow][nextCol] >= heights[row][col]
```

This allows us to discover **all cells that can eventually flow into that ocean**.

---

## 🎯 Key Takeaway

The most important trick is:

> **Instead of asking whether every cell can reach the ocean, start from the oceans and find which cells can reach them.**

Then:

```text
Pacific Reachable
        ∩
Atlantic Reachable
        ↓
     Answer
```

This turns what could be many individual searches into just **two graph traversals**.

## ⏱️ Complexity

* **Time:** `O(m × n)`
* **Space:** `O(m × n)`

Where `m` is the number of rows and `n` is the number of columns.

🔥 **Key Pattern:** Reverse Graph Traversal + DFS + Matrix/Visited Array.
