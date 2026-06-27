function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right]; 

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        }   

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No solution found
}