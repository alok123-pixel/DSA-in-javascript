// 155. Min Stack
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int value) pushes the element value onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

var MinStack = function() {
    this.stack = [];
    this.minstack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
     this.stack.push(value)
     if(this.minstack.length === 0){
        this.minstack.push(value)
     }else{
        let minvalue = Math.min(value,this.minstack[this.minstack.length-1])
        this.minstack.push(minvalue);
     }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
         return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
};
