// Methods of stack 
/*
push(e) // To insert the element
pop()// To remove the element
peek() // It gives the element that is on the top of the Stack
isEmpty()// It gives a Boolean value
size()
*/


// Basic Stack Implementation 

class Stack{
    constructor(){
        this.stack = []; // Local variable name stack
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }

        return this.stack.pop()
    }

    peek(){
       if(this.isEmpty()){
          return `Stack is Empty.`;
       } 

       return this.stack[this.size()-1]
    }

    isEmpty(){
        return this.size() === 0;
    } 
    
    size(){
        return this.stack.length;
    }

    printStack(){
        return this.stack;
    }
}

const stack = new Stack()

stack.push(10);
stack.push(90);
stack.push(80);
stack.push(120);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.size());
console.log(stack.peek());
console.log(stack.printStack());