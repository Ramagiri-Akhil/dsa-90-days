function combination(index, sum) {
    let result = [];
    let current = [];
    function backtrack(index, sum) { 
        if (sum === target) {
            result.push([...current]);
            return;
        }
        if (sum > target || index === candidates.length) return;

        current.push(candidates[index]);
        backtrack(index, sum + candidates[index]);
        current.pop();
        backtrack(index + 1, sum);
    }
    backtrack(0, 0);
    return result;
}