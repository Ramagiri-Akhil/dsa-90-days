# Day 2: Best Time to Buy and Sell Stock

**LeetCode #121**
**Difficulty:** Easy
**Topic:** Arrays

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a stock on the `i-th` day.

You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.

Return the maximum profit you can achieve. If no profit can be made, return `0`.

### Example

```javascript
Input: prices = [7,1,5,3,6,4]

Output: 5
```

---

## Approach 1: Brute Force

### Intuition

Check every possible buying day and compare it with every possible selling day after it.

Calculate the profit for each pair and keep track of the maximum profit.

### Algorithm

1. Select a day to buy the stock.
2. Compare it with every future day.
3. Calculate the profit.
4. Update the maximum profit if the current profit is larger.

### Code

```javascript
function maxProfit(prices) {
  let maxProfit = 0;

  for (let buy = 0; buy < prices.length; buy++) {
    for (let sell = buy + 1; sell < prices.length; sell++) {
      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
```

### Complexity Analysis

* Time Complexity: O(n²)
* Space Complexity: O(1)

---

## Approach 2: Optimized Single Pass

### Intuition

Instead of checking every pair, keep track of the minimum price seen so far.

For every new price:

* Update the minimum price if a lower value is found.
* Otherwise, calculate the profit using the current price and the minimum price.
* Update the maximum profit if needed.

### Code

```javascript
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
```

### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(1)

---

## Key Learnings

* Sometimes storing the minimum value seen so far is enough to solve the problem efficiently.
* Not every problem requires comparing all possible pairs.
* A single traversal can often produce the optimal result.
* Always look for ways to reduce nested loops into a single pass.

## Status

✅ Solved
