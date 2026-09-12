class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;

    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;

  this.map = new Map();
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.addToFront = function (node) {
  node.next = this.head.next;
  node.prev = this.head;

  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }

  let node = this.map.get(key);

  this.removeNode(node);
  this.addToFront(node);

  return node.value;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let node = this.map.get(key);

    node.value = value;

    this.removeNode(node);
    this.addToFront(node);

    return;
  }

  let node = new Node(key, value);

  this.map.set(key, node);

  this.addToFront(node);

  if (this.map.size > this.capacity) {
    let lru = this.tail.prev;

    this.removeNode(lru);

    this.map.delete(lru.key);
  }
};
