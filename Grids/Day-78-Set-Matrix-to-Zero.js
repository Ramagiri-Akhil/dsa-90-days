function setZeroes(matrix) { 
    let row = new Set();
    let col = new Set();
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          row.add(i);
          col.add(j);
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (row.has(i) || col.has(j)) {
          matrix[i][j] = 0;
        }
      }
  }
  return matrix;
}
console.log(setZeroes([[1, 2, 3], [4, 0, 6], [7, 8, 9]])); // Output: [[1, 0, 3], [0, 0, 0], [7, 0, 9]]