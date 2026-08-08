function isSameTree(p, q) { 
    function dfs(p, q) {
        if (!p && !q) return true;
        if(!p || !q) return false;
        if (p.val !== q.val) return false;
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
    return dfs(p, q);
}