function wordSearch(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    function dfs(r, c, index) {
        if (index === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) return false;

        let temp = board[r][c];
        board[r][c] = '#'; 

        let found = dfs(r + 1, c, index + 1) || dfs(r - 1, c, index + 1) || dfs(r, c + 1, index + 1) || dfs(r, c - 1, index + 1);
        board[r][c] = temp;
        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}