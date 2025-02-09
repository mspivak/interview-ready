// 5. *Sort Stack*:

import { LinkedList, Node } from "./10_LinkedList";

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
	list: LinkedList<T>;

	constructor() {
		this.list = new LinkedList();
	}

	push(value: T): void {
		let pointer = this.list.head;

		console.log("push", value);
		if (!pointer) {
			this.list.push(value);
			return;
		}

		let previousItem: Node<T> | undefined = undefined;

		while (pointer) {
			console.log(value, pointer.value);
			if (value < pointer.value) {
				if (!previousItem) this.list.head = { value, next: pointer };
				else previousItem!.next = { value, next: pointer };
				this.list.length++;
				return;
			}
			previousItem = pointer;
			pointer = pointer.next;
		}
		pointer = { value, next: undefined };
		if (previousItem) previousItem.next = pointer;
		this.list.tail = pointer;
		this.list.length++;
	}

	pop(): T | undefined {
		const value = this.list.pop();
		console.log("pop", value);
		return value;
	}

	peek(): T | undefined {
		const value = this.list.head?.value;
		console.log("peek", value);
		return value;
	}

	isEmpty(): boolean {
		console.log("isempty", this.list.length);
		return this.list.length === 0;
	}
}

let stack = new SortStack();

stack.push(1);
stack.list.print();
stack.peek();
stack.list.print();
stack.push(3);
stack.list.print();
stack.pop();
stack.push(2);
stack.peek();
