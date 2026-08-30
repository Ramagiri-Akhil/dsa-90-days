function subsets(nums) {
  let result = [];
  let current = [];

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }
    current.push(nums[index]);
    backtrack(index + 1);

    current.pop();

    backtrack(index + 1);
  }

  backtrack(0);

  return result;
};
