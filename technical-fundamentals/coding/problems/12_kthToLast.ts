// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function kthToLast<T>(
	head: Node<T>,
	k: number
): Node<T> | undefined {
	let p: Node<T> | undefined = head;
	let count = 0;
	let i = 0;
	while (p) {
		count++;
		p = p.next;
	}

	if (k > count) {
		return undefined;
	}

	p = head;
	while (i < count - k) {
		i++;
		p = p?.next;
	}

	return p;
}
