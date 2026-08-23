# 🧩 LeetCode Solution — Day 70

## 322. Coin Change

**Difficulty:** Medium

### Problem

Given an array of coin denominations `coins` and an integer `amount`, return the **fewest number of coins** needed to make that amount.

You can use each coin **unlimited times**.

If the amount cannot be made, return `-1`.

### Example

```text
Input:
coins = [1, 2, 5]
amount = 11

Output:
3
```

Because:

```text
5 + 5 + 1 = 11
```

---

## 💡 Approach — Dynamic Programming

We create a DP array where:

```text
dp[i] = minimum number of coins required to make amount i
```

Initially, we don't know how to make any amount, so we set everything to `Infinity`.

```javascript
const dp = new Array(amount + 1).fill(Infinity);
```

For amount `0`:

```javascript
dp[0] = 0;
```

Because we need **0 coins to make amount 0**.

---

## 🔄 How the Loops Work

There are **two loops**, and they have different jobs:

```javascript
for (let i = 1; i <= amount; i++) {

    for (let coin of coins) {
        // ...
    }
}
```

### Outer loop — `i`

`i` represents the **amount we're currently trying to make**:

```text
i = 1
i = 2
i = 3
i = 4
...
```

### Inner loop — `coin`

For each amount, we try **every available coin**:

```text
coin = 1
coin = 2
coin = 5
```

So with:

```text
coins = [1, 2, 5]
```

the process looks like:

```text
i = 1 → try 1, 2, 5
i = 2 → try 1, 2, 5
i = 3 → try 1, 2, 5
i = 4 → try 1, 2, 5
...
```

This is the key idea behind the nested loops.

---

## 🧠 DP Transition

If the current coin can be used:

```javascript
if (coin <= i)
```

we calculate:

```javascript
dp[i - coin] + 1
```

Why?

Suppose:

```text
i = 11
coin = 5
```

Then:

```text
11 - 5 = 6
```

So if we already know that:

```text
dp[6] = 2
```

we can make `11` using:

```text
2 coins for 6 + 1 coin for 5
= 3 coins
```

Therefore:

```javascript
dp[i] = Math.min(dp[i], dp[i - coin] + 1);
```

---

## 💻 JavaScript Solution

```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    const dp = new Array(amount + 1).fill(Infinity);

    // 0 coins are needed to make amount 0
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {

        for (let coin of coins) {

            if (coin <= i) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1
                );
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
```

---

## 🧪 Dry Run

For:

```text
coins = [1, 2, 5]
amount = 5
```

We start with:

```text
dp = [0, ∞, ∞, ∞, ∞, ∞]
```

### `i = 1`

Try coins:

```text
coin = 1 → 1 <= 1 ✅
dp[1] = dp[0] + 1 = 1
```

Coins `2` and `5` are too large.

```text
dp = [0, 1, ∞, ∞, ∞, ∞]
```

### `i = 2`

```text
coin = 1 → dp[2] = dp[1] + 1 = 2

coin = 2 → dp[2] = dp[0] + 1 = 1
```

So:

```text
dp[2] = 1
```

### `i = 3`

```text
coin = 1 → dp[3] = dp[2] + 1 = 2

coin = 2 → dp[3] = dp[1] + 1 = 2
```

Therefore:

```text
dp[3] = 2
```

### `i = 4`

```text
coin = 1 → 3 coins
coin = 2 → 2 coins
```

Therefore:

```text
dp[4] = 2
```

### `i = 5`

```text
coin = 1 → dp[4] + 1 = 3
coin = 2 → dp[3] + 1 = 3
coin = 5 → dp[0] + 1 = 1
```

Therefore:

```text
dp[5] = 1
```

Final DP array:

```text
amount:  0  1  2  3  4  5
dp:      0  1  1  2  2  1
```

Answer:

```text
1
```

because we can simply use one `5` coin.

---

## 🚨 When the Amount Is Impossible

For:

```text
coins = [2]
amount = 3
```

There is no combination that creates `3`.

Therefore:

```text
dp[3] = Infinity
```

and we return:

```javascript
-1
```

---

## ⏱️ Complexity

**Time:** `O(amount × coins.length)`

For every amount, we try every coin.

**Space:** `O(amount)`

We store the minimum number of coins for every amount from `0` to `amount`.

---

## 🔑 Key Takeaway

The most important idea from this problem is:

```text
        Current Amount
              ↓
       Try Every Coin
              ↓
      Remaining Amount
              ↓
   Previous Best + 1 Coin
              ↓
          Take MIN
```

And remember the two-loop distinction:

```text
i     → amount I'm trying to make
coin  → coin I'm currently trying
```

🔥 **Day 70/90 — Coin Change completed!**
