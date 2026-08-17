function buildTree(preorder, inorder) {
    let preOrderIndex = 0;
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++){
        inorderMap.set(inorder[i],i)
    }

    function build(left, right) {
        if (left > right) return null;

        const rootValue = preorder[preOrderIndex];
        preOrderIndex++;

        const root = new TreeNode(rootValue);
        const rootIndex = inorderMap.get(rootValue);

        root.left = build(left, rootIndex - 1);
        root.right = build(rootIndex + 1, right);

        return root;
    }
    return build(0, inorder.length - 1);
}