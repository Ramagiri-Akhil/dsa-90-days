# LRU Cache — LeetCode #146

## 🧠 Approach

Implemented an LRU Cache using:

- HashMap
- Doubly Linked List

The HashMap provides O(1) access to nodes, while the Doubly Linked List maintains the order of recently used elements.

### Key Idea

- Most Recently Used → near the head
- Least Recently Used → near the tail
- `get()` moves the accessed node to the front
- `put()` moves the inserted/updated node to the front
- When capacity is exceeded, remove the node before the tail

## ⏱️ Complexity

- Time: O(1) for `get()` and `put()`
- Space: O(capacity)

## 💻 JavaScript

```js
// Your solution here