// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
	private array: (T | undefined)[];
	private stackSize: number;

	constructor(arrayLength: number) {
		this.array = Array(arrayLength).fill(undefined);
		this.stackSize = Math.floor(arrayLength / 3);
	}

	stackBounds(stackNum: number) {
		const from = Math.floor(this.stackSize * stackNum);
		const to = Math.floor(this.stackSize * (stackNum + 1));
		return [from, to];
	}

	push(stackNum: number, value: T): void {
		const [from, to] = this.stackBounds(stackNum);

		let i = from;
		while (this.array[i] && i !== to) {
			i++;
		}

		if (this.array[i] === undefined) {
			this.array[i] = value;
		} else {
			throw new Error(`Stack size of ${this.stackSize} exeeded.`);
		}
	}

	pop(stackNum: number): T | undefined {
		const [from, to] = this.stackBounds(stackNum);
		let result: T | undefined;
		let i = from;
		while (this.array[i] && i !== to) {
			i++;
		}
		result = this.array[i - 1];
		this.array[i - 1] = undefined;
		return result;
	}

	peek(stackNum: number): T | undefined {
		const [from, to] = this.stackBounds(stackNum);
		let result: T | undefined;
		let i = from;
		while (this.array[i] && i !== to) {
			i++;
		}
		return this.array[i - 1];
	}
}
