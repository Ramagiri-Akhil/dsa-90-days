function depth(root) {
    let diameter = 0;

    function dfs(root) {
        if (!root) return 0;
        let leftDepth = dfs(root.left);
        let rightDepth = dfs(root.right);
        diameter = Math.max(diameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);
    return diameter;
}