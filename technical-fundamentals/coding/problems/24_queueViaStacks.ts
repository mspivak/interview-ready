// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
	in: T[] = [];
	out: T[] = [];

	constructor() {}

	enqueue(value: T): void {
		this.in.push(value);
	}

	dequeue(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.out.pop();
	}

	peek(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.out[this.out.length - 1];
	}

	isEmpty(): boolean {
		if (this.out.length > 0) {
			return false;
		}
		if (this.in.length == 0) {
			return true;
		}
		while (this.in.length > 0) {
			this.out.push(this.in.pop()!);
		}
		return false;
	}
}
