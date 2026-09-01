# Decode Ways — LeetCode #91

### 💡 Approach

This problem can be solved using **Dynamic Programming**.

Each digit can be decoded in two possible ways:

1. **One digit** — if the current digit is between `1` and `9`.
2. **Two digits** — if the current and previous digits form a number between `10` and `26`.

We define:

> `dp[i]` = number of ways to decode the first `i` characters.

For every position, we check whether we can use one digit or two digits.

### 🧠 Example

For:

```text
"226"
```

The possible decodings are:

```text
2 2 6
22 6
2 26
```

So the answer is:

```text
3
```

The DP values are:

```text
dp[0] = 1
dp[1] = 1
dp[2] = 2
dp[3] = 3
```

For `dp[i]`:

```text
If current digit is valid:
    dp[i] += dp[i - 1]

If previous + current form 10–26:
    dp[i] += dp[i - 2]
```

### ⚠️ Handling `0`

A `0` cannot be decoded by itself.

```text
"10" → valid
"20" → valid
"01" → invalid
"30" → invalid
```

Therefore, a single digit is valid only when it is `1–9`.

### 💻 JavaScript Solution

```javascript
var numDecodings = function(s) {

    let n = s.length;

    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    if (s[0] !== "0") {
        dp[1] = 1;
    }

    for (let i = 2; i <= n; i++) {

        // Take one digit
        let oneDigit = Number(s[i - 1]);

        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // Take two digits
        let twoDigits = Number(s.slice(i - 2, i));

        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};
```

### ⏱️ Complexity

* **Time:** `O(n)` — we traverse the string once.
* **Space:** `O(n)` — we store the DP results.

### 🔑 Key Takeaway

The main idea is:

```text
Current digit valid?
        ↓
    dp[i - 1]

Two digits valid (10–26)?
        ↓
    dp[i - 2]

       ↓
Add both
       ↓
    dp[i]
```

This is the **DP version** of Decode Ways. The later `O(1)` space optimization works because each `dp[i]` only needs the previous two DP values.
