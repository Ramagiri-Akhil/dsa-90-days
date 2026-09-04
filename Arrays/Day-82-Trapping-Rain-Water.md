# Trapping Rain Water — LeetCode #42

## 🧠 Approach: Two Pointers

The amount of water trapped at any position depends on the **shorter boundary** between the tallest wall on the left and the tallest wall on the right.

We maintain:

* `left` → pointer from the beginning
* `right` → pointer from the end
* `leftMax` → maximum height seen from the left
* `rightMax` → maximum height seen from the right
* `water` → total trapped water

### 🔑 Key Idea

If:

```text
height[left] < height[right]
```

we process the left side because the right side has a taller boundary.

Otherwise, we process the right side.

For each position:

```text
water = maxBoundary - currentHeight
```

We don't need to calculate the maximum on both sides for every position because the two-pointer technique maintains enough information to determine the limiting boundary.

## 💻 JavaScript

```js
var trap = function(height) {

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;

        } else {

            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
};
```

## ⏱️ Complexity

* **Time:** `O(n)` — each pointer moves through the array once.
* **Space:** `O(1)` — only a few variables are used.

## 💡 Key Takeaway

The main trick is realizing that we **don't need extra left-max and right-max arrays**. By using two pointers and maintaining `leftMax` and `rightMax`, we can solve the problem in **O(n) time and O(1) space**. 🚀
