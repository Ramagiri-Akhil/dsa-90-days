function pacificAtlantic(heights) {
  let rows = heights.length;
  let cols = heights[0].length;

  let pacific = Array.from({ length: rows }, () => Array(cols).fill(false));

  let atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
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

  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacific);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacific);
  }

  for (let col = 0; col < cols; col++) {
    dfs(rows - 1, col, atlantic);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, cols - 1, atlantic);
  }

  let result = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
};
