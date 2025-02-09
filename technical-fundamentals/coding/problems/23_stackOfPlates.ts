// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
	stacks: T[][];
	current: number;

	constructor(private capacity: number) {
		this.current = 0;
		this.stacks = [[]];
	}

	push(value: T): void {
		if (this.stacks[this.current].length == this.capacity) {
			this.current++;
			this.stacks[this.current] = [];
		}
		if (this.stacks[this.current].length < this.capacity) {
			this.stacks[this.current].push(value);
		}
	}

	pop(): T | undefined {
		if (!this.stacks[this.current] || this.stacks[this.current].length == 0) {
			if (this.current == 0) {
				return undefined;
			}
			this.current--;
		}
		if (this.stacks[this.current].length > 0) {
			return this.stacks[this.current].pop();
		}
		return undefined;
	}
}
