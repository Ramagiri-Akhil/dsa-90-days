function isFilled(image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;

    function dfs(row, col) {
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            image[row][col] !== originalColor
        ) {
            return;
        }
        image[row][col] = color;
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    dfs(sr, sc);
    return true;
}
