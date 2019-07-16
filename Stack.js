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

var sorted = false;

while (!sorted) {
	var popped_element = stack_1.pop();
	sorted = true;
	while (stack_1.peek() !== null) {
		var top_element = stack_1.peek();
		if (popped_element > top_element) {
			stack_2.push(stack_1.pop());
			sorted = false;
		}
		else {
			stack_2.push(popped_element);
			popped_element = stack_1.pop();
		}
	}
	stack_2.push(popped_element);
	flush_stack(stack_2, stack_1);
	console.log(stack_1);
	console.log(stack_2);
}

// Empties the contents of stack_1 into stack_2, thus reversing the order of elements
function flush_stack(stack_1, stack_2) {
	while (stack_1.peek() != null) {
		stack_2.push(stack_1.pop());
	}
}
