function topKFrequent(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    const bucket = new Array(nums.length + 1).fill().map(() => []);
    for (const [num, freq] of map) {
        bucket[freq].push(num);
    }
    let result = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        for (const num of bucket[i]) {
            result.push(num);
        }
        if (result.length === k) return result;
    }
    return result;
}
