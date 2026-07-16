var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};


MinStack.prototype.push = function(value) {
    this.stack.push(value);

    let currentMin = this.minStack.length === 0 ? value : this.minStack[this.minStack.length - 1];

    this.minStack.push(Math.min(value,currentMin));
};


MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};


MinStack.prototype.top = function() {
   return this.stack[this.stack.length - 1]
};


MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};