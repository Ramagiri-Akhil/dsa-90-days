# Day 6: Reverse String

**LeetCode #344**  
**Difficulty:** Easy  
**Topic:** Strings, Two Pointers

## Problem Statement

Write a function that reverses an array of characters.

The input is given as an array of characters `s`.

You must modify the input array **in-place** with **O(1)** extra memory.

### Example

```javascript
Input: s = ["h","e","l","l","o"]

Output: ["o","l","l","e","h"]
```

---

# Approach 1: Using an Extra Array

## 💡 Intuition

The simplest way to reverse the string is by creating another array.

Traverse the original array from the last index to the first, store every character in a new array, and then copy the reversed characters back into the original array.

Although this approach is straightforward, it does not satisfy the in-place constraint because it uses extra memory.

## 📝 Algorithm

1. Create an empty array.
2. Traverse the original array from the last index to the first.
3. Store each character in the new array.
4. Copy the reversed characters back into the original array.

## 💻 Code

```javascript
var reverseString = function(s) {

    let result = [];

    for(let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }

    for(let i = 0; i < s.length; i++) {
        s[i] = result[i];
    }

};
```

## 📊 Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

# Approach 2: Two Pointers (Optimized)

## 💡 Intuition

Instead of creating another array, we use the **Two Pointer** technique.

One pointer starts from the beginning of the array, while the other starts from the end.

At every iteration, swap both characters and move the pointers towards each other until they meet.

This allows us to reverse the string efficiently without using any extra memory.

## 📝 Algorithm

1. Initialize two pointers:
   - `left = 0`
   - `right = s.length - 1`
2. While `left < right`:
   - Swap `s[left]` and `s[right]`.
   - Increment `left`.
   - Decrement `right`.
3. Continue until both pointers meet.

## 💻 Code

```javascript
var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;

    while(left < right) {

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;

    }

};
```

## 📊 Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

# Key Learnings

- Always pay close attention to problem constraints before choosing an approach.
- The **Two Pointer** technique is one of the most common interview patterns for array and string problems.
- Swapping elements from both ends allows us to reverse the string **in-place** without using additional memory.
- Although the loop executes only **n/2** times, the overall time complexity is still **O(n)** because constant factors are ignored in Big-O notation.

## Status

✅ Solved