# 231. Power of Two

**Difficulty:** Easy

## Problem Statement

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that:

```
n = 2^x
```

---

## Intuition

A power of two has **exactly one set bit (`1`)** in its binary representation.

Examples:

```
1  = 0001
2  = 0010
4  = 0100
8  = 1000
16 = 10000
```

When we subtract `1` from a power of two, the only set bit becomes `0` and all the bits to its right become `1`.

Example:

```
8  = 1000
7  = 0111
```

Performing a bitwise AND (`&`) results in:

```
1000
0111
----
0000
```

This property is true for every power of two.

Therefore,

```
n & (n - 1) === 0
```

The extra condition `n > 0` ensures that `0` and negative numbers are not considered powers of two.

---

## Approach

- Return `false` if `n` is less than or equal to `0`.
- Perform a bitwise AND between `n` and `n - 1`.
- If the result is `0`, `n` has only one set bit, so it is a power of two.
- Otherwise, return `false`.

---

## Code (JavaScript)

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};
```

---

## Dry Run

### Example 1

```
n = 16

Binary:
16 = 10000
15 = 01111

10000
01111
-----
00000
```

Result:

```
true
```

---

### Example 2

```
n = 10

Binary:
10 = 1010
 9 = 1001

1010
1001
----
1000
```

Since the result is not `0`,

```
false
```

---

## Complexity Analysis

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`

---

## Key Takeaways

- A power of two contains **exactly one set bit**.
- Subtracting `1` flips that set bit to `0` and changes all lower bits to `1`.
- The expression `n & (n - 1)` removes the lowest set bit.
- If the result is `0`, the original number had only one set bit.
- Always check `n > 0` because `0` and negative numbers are not powers of two.

---

### Pattern Learned

- Bit Manipulation
- Bitwise AND (`&`)
- Binary Representation
- Power of Two Bit Trick