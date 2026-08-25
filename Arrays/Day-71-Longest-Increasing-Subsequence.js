function longestIncreasingSubsequence(nums) { 
        const n = nums.length;
        let maxLength = 1;
        const dp = new Array(n).fill(1);

        let maxLength = 1;

        for (let i = 1; i < n; i++) {
          for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
            }
          }

          maxLength = Math.max(maxLength, dp[i]);
        }

        return maxLength;
}
