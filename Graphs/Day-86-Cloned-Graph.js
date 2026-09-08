function clonedGraph(node) { 
    if (!node) return null;
    
    let map = new Map();

    function dfs(node) {
        if (map.has(node)) return map.get(node);
        
        let clone = new Node(node.val);
        map.set(node, clone);

        for(let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    return dfs(node);
}