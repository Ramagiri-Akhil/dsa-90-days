function moveZeros(nums){
    let insertPos = 0;
    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos] = num;
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
}

function moveZeros(nums) {
    let insertPos = 0;  
    for (let num of nums) {
        if (num !== 0) {
            [nums[insertPos], num] = [num, nums[insertPos]];
            insertPos++;
        }
    }
}