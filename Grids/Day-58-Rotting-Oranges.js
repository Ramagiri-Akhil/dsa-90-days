function isRottingOranges(grid) { 
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;
    let minutes = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    freshCount--;
                }
            }
        }
        minutes++;
    }
    return freshCount === 0 ? minutes : -1;
    return minutes;
}