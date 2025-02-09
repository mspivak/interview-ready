// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
	stack: T[];
	mins: T[];

	constructor() {
		this.stack = [];
		this.mins = [];
	}

	get last() {
		return this.stack.length - 1;
	}

	push(value: T): void {
		this.mins.push(
			this.mins[this.last] && this.mins[this.last] < value
				? this.mins[this.last]
				: value
		);
		this.stack.push(value);
	}

	pop(): T | undefined {
		this.mins.pop();
		return this.stack.pop();
	}

	min(): T | undefined {
		return this.mins[this.last];
	}
}
