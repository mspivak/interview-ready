// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
	next?: Node<T> | undefined;
	value: T;
};

export class LinkedList<T> {
	head: Node<T> | undefined;
	tail: Node<T> | undefined;
	length: number;
	constructor(head?: Node<T>) {
		this.length = 0;
		this.head = undefined;
		this.tail = undefined;

		if (head) {
			let pointer: Node<T> | undefined = head;
			let newHead: Node<T> = { value: pointer.value };
			let previousNewNode = newHead;

			this.head = newHead;
			this.tail = newHead;
			this.length = 1;
			pointer = pointer.next;

			while (pointer) {
				const newNode = { value: pointer.value };
				previousNewNode.next = newNode;
				previousNewNode = newNode;
				this.length++;
				pointer = pointer.next;
				this.tail = newNode;
			}
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
		this.length++;
	}
	insertAt(index: number, value: T) {
		let pointer = this.head;
		let i = 0;
		while (pointer) {
			if (i == index) {
				pointer.next = { value, next: pointer.next };
			}
			pointer = pointer.next;
			i++;
		}
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
		this.length--;
	}

	count() {
		let pointer: Node<T> | undefined = this.head;
		let count = 0;
		while (pointer) {
			count++;
			pointer = pointer.next;
		}
		this.length = count;
		return count;
	}

	concat(another: LinkedList<T>) {
		if (!this.tail) {
			this.head = another.head;
			this.tail = another.tail;
		} else {
			this.tail.next = another.head;
		}
		this.count();
		return this;
	}

	reverse() {
		let pointer: Node<T> | undefined = this.head;
		let previous: Node<T> | undefined;
		this.tail = this.head;
		while (pointer) {
			const next = pointer.next;
			pointer.next = previous;
			previous = pointer;
			pointer = next;
		}
		this.head = previous;
		return this;
	}

	isEqualTo(list: LinkedList<T>): boolean {
		let pointer1: Node<T> | undefined = this.head;
		let pointer2: Node<T> | undefined = list.head;
		while (pointer1 || pointer2) {
			if (!pointer1 || !pointer2 || pointer1.value !== pointer2.value) {
				return false;
			}
			pointer1 = pointer1?.next;
			pointer2 = pointer2?.next;
		}
		return true;
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
		return this;
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
