# Koko Eating Bananas | Binary Search on Answer | JavaScript

## Problem

Koko loves to eat bananas. There are `n` piles of bananas, where the `iᵗʰ` pile has `piles[i]` bananas.

Koko can choose an eating speed `k` (bananas per hour). Each hour, she picks one pile and eats up to `k` bananas. If the pile has fewer than `k` bananas, she finishes it and does not continue to another pile in the same hour.

Return the **minimum integer eating speed `k`** such that Koko can eat all bananas within `h` hours.

### Example

```javascript
Input: piles = [3,6,7,11], h = 8

Output: 4
```

---

# 💡 Intuition

We are asked to find the **minimum possible eating speed** such that Koko finishes all bananas within `h` hours.

Instead of trying every speed one by one, we observe:

- If Koko can finish at speed `k`, she can also finish at any speed greater than `k`.
- If she cannot finish at speed `k`, she also cannot finish at any smaller speed.

This creates a **monotonic search space**, which is perfect for **Binary Search on Answer**.

So instead of searching the array, we search the **range of possible speeds**.

---

# 📝 Algorithm

1. Set `left = 1` (minimum possible speed).
2. Set `right = max(piles)` (maximum possible speed).
3. While `left <= right`:
   - Find `mid = Math.floor((left + right) / 2)` as current speed.
   - Calculate total hours needed to eat all piles at speed `mid`.
     - For each pile: `Math.ceil(pile / mid)`
   - If total hours `<= h`:
     - Store `mid` as a possible answer.
     - Try to find a smaller speed → move `right = mid - 1`
   - Else:
     - Speed is too slow → move `left = mid + 1`
4. Return the minimum valid speed.

---

# 💻 Code

```javascript
var minEatingSpeed = function(piles, h) {

    let left = 1;
    let right = Math.max(...piles);
    let answer = right;

    while(left <= right) {

        let mid = Math.floor((left + right) / 2);

        let hours = 0;

        for(let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if(hours <= h) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }

    return answer;

};
```

---

# 🧪 Dry Run

### Input

```javascript
piles = [3,6,7,11], h = 8
```

---

### Step 1

```text
left = 1, right = 11
mid = 6
```

Hours required:

```text
ceil(3/6) + ceil(6/6) + ceil(7/6) + ceil(11/6)
= 1 + 1 + 2 + 2 = 6
```

Since `6 <= 8`, speed works.

```text
answer = 6
right = 5
```

---

### Step 2

```text
left = 1, right = 5
mid = 3
```

Hours:

```text
1 + 2 + 3 + 4 = 10
```

Since `10 > 8`, speed is too slow.

```text
left = 4
```

---

### Step 3

```text
left = 4, right = 5
mid = 4
```

Hours:

```text
1 + 2 + 2 + 3 = 8
```

Since `8 <= 8`, speed works.

```text
answer = 4
right = 3
```

Now loop ends.

---

### Final Answer

```javascript
4
```

---

# 📊 Complexity Analysis

### Time Complexity

```text
O(n × log m)
```

- `n` = number of piles
- `m` = maximum pile size
- Each binary search step scans all piles

---

### Space Complexity

```text
O(1)
```

No extra data structures used.

---

# 🎯 Why Binary Search on Answer?

We are not searching in a sorted array, but in a **range of possible answers**.

Key observations:

- If a speed works → all higher speeds also work
- If a speed fails → all lower speeds also fail

This monotonic behavior allows us to apply **Binary Search on the answer space**.

---

# 🚀 Key Takeaways

- This is a classic **Binary Search on Answer** problem.
- Always identify:
  - Search space (here: speed from `1` to `max(piles)`)
  - Monotonic condition (feasible or not feasible)
- Use `Math.ceil(pile / speed)` to calculate hours per pile.
- Try to minimize the valid answer using binary search.

---

Happy Coding! 🚀
```
````
