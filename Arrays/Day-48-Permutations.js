function permute(nums) {
  let result = [];
  let current = [];
  let used = new Array(nums.length).fill(false);

  function backtrack() {
    // Base Case
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    // Try every unused number
    for (let i = 0; i < nums.length; i++) {
      // Skip if already used
      if (used[i]) continue;

      // Choose
      used[i] = true;
      current.push(nums[i]);

      // Explore
      backtrack();

      // Undo (Backtrack)
      current.pop();
      used[i] = false;
    }
  }

  backtrack();

  return result;
};
