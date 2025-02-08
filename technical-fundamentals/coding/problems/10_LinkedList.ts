// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
	next?: Node<T> | undefined;
	value: T;
};

export class LinkedList<T> {
	head: Node<T> | undefined;
	tail: Node<T> | undefined;

	constructor(head?: Node<T>) {
		this.head = head;
		if (head) {
			let p: Node<T> | undefined = head;
			while (p?.next) {
				p = p.next;
			}
			this.tail = p;
		}
	}

	push(value: T) {
		const newTail = {
			next: undefined,
			value,
		};
		if (!this.head) {
			this.head = newTail;
			this.tail = newTail;
			return;
		}

		this.tail!.next = newTail;
		this.tail = newTail;
	}

	filter(fn: Function) {
		let pointer: Node<T> | undefined = this.head;
		let filteredList = new LinkedList<T>();
		while (pointer) {
			if (fn(pointer.value)) filteredList.push(pointer.value);
			pointer = pointer.next;
		}
		return filteredList;
	}

	forEach(fn: Function) {
		let pointer: Node<T> | undefined = this.head;
		while (pointer) {
			fn(pointer.value);
			pointer = pointer.next;
		}
	}

	map(fn: Function) {
		let pointer: Node<T> | undefined = this.head;
		let mappedList = new LinkedList<T>();
		while (pointer) {
			mappedList.push(fn(pointer.value));
			pointer = pointer.next;
		}
		return mappedList;
	}

	remove(index: number) {
		let pointer: Node<T> | undefined = this.head;
		let prevPointer: Node<T> | undefined;
		let i = 0;

		while (pointer) {
			if (i == index) {
				if (!prevPointer) {
					this.head = pointer.next;
				} else {
					prevPointer.next = pointer.next;
				}
				if (pointer == this.tail) {
					this.tail = prevPointer;
				}
			}
			prevPointer = pointer;
			pointer = pointer.next;
			i++;
		}
	}

	concat(another: LinkedList<T>) {
		if (!this.tail) {
			this.head = another.head;
			this.tail = another.tail;
		} else {
			this.tail.next = another.head;
		}
		return this;
	}

	print() {
		let pointer: Node<T> | undefined = this.head;
		let output = "[";
		while (pointer !== undefined) {
			output += pointer.value;
			pointer = pointer.next;
			if (pointer) {
				output += ", ";
			}
		}
		output += "]";
		console.log(output);
	}

	find(value: T): Node<T> | null {
		let pointer: Node<T> | undefined = this.head;
		while (pointer !== undefined) {
			if (pointer.value == value) {
				return pointer;
			}
			pointer = pointer.next;
		}
		return null;
	}

	get(index: number): Node<T> | null {
		let pointer: Node<T> | undefined = this.head;
		let i = 0;

		while (pointer) {
			if (i == index) {
				return pointer;
			}
			pointer = pointer.next;
			i++;
		}
		return null;
	}

	toArray(): T[] {
		let arr: T[] = [];
		let pointer: Node<T> | undefined = this.head;
		while (pointer) {
			arr.push(pointer.value);
			pointer = pointer.next;
		}
		return arr;
	}

	[Symbol.iterator](): LinkedListIterator<T> {
		return new LinkedListIterator(this);
	}
}

export class LinkedListIterator<T> {
	private index: number;
	private current: Node<T> | undefined;

	constructor(private list: LinkedList<T>) {
		this.index = 0;
	}

	next(): IteratorResult<T, number | undefined> {
		this.index++;
		this.current = this.current ? this.current.next! : this.list.head!;

		if (this.current.next == undefined) return { done: true, value: undefined };

		return {
			done: false,
			value: this.current.value,
		};
	}
}
