class Stack {
	constructor() {
		this.stack  = [];
	}

	push(number) {
		this.stack.push(number);
	}

	peek() {
		var stack_size = this.stack.length;
		if (stack_size > 0) {
			return this.stack[stack_size - 1];
		}
		else {
			return null; 
		}
	}

	pop() {
		return this.stack.pop();
	}
}


var stack_1 = new Stack();
var stack_2 = new Stack();

// the last element is the top of the stack
var starting_stack = [1,2,3,4,5,6,1,2,3,56];

starting_stack.forEach(function(element) {
	stack_1.push(element);
});

console.log(stack_1.stack);