# Set Matrix Zeroes — LeetCode #73

### 💡 Approach

The goal is to set an entire row and column to `0` whenever a cell contains `0`.

A simple approach would use extra `Set`s to store zero rows and columns, but we can optimize the space to **O(1)**.

The key idea is to use the **first row and first column as markers**:

* `matrix[i][0] = 0` → row `i` needs to be zeroed.
* `matrix[0][j] = 0` → column `j` needs to be zeroed.
* We separately track whether the **first column** originally contained a zero using `firstColZero`.

### 🧠 Algorithm

1. Check whether the first column contains a zero.
2. Traverse the rest of the matrix.
3. When a zero is found, mark its row and column using the first column and first row.
4. Traverse the inner matrix and set cells to `0` based on the markers.
5. If `matrix[0][0] === 0`, set the entire first row to `0`.
6. If `firstColZero` is `true`, set the entire first column to `0`.

### 💻 JavaScript

```javascript
var setZeroes = function(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let firstColZero = false;

    // Check if first column contains zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
        }
    }

    // Use first row and first column as markers
    for (let i = 0; i < rows; i++) {
        for (let j = 1; j < cols; j++) {

            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Update inner matrix using markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {

            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Update first row
    if (matrix[0][0] === 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Update first column
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};
```

### ⏱️ Complexity

* **Time:** `O(m × n)` — every cell is processed a constant number of times.
* **Space:** `O(1)` — no extra array, matrix, or `Set` is used.

### 🔑 Key Takeaway

The main trick is:

> **Use the first row and first column of the matrix itself to store information about which rows and columns need to be zeroed.**

This turns the straightforward **O(m + n) space** solution into the optimal **O(1) space** solution.
