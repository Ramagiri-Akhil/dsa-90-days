function sortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            result[index] = nums[right] * nums[right];
            right--;
        } else {
            result[index] = nums[left] * nums[left];
            left++;
        }
        index--;
    }
    return result;
}