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
		let previousItem: Node<T> | undefined = undefined;

		if (!pointer) {
			this.list.push(value);
			return;
		}

		while (pointer) {
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
		return this.list.pop();
	}

	peek(): T | undefined {
		return this.list.head?.value;
	}

	isEmpty(): boolean {
		return this.list.length === 0;
	}
}
