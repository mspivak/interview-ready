// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
	let p = head;
	let lastDifferent = p;
	let seen = new Set();
	while (p) {
		if (seen.has(p.value)) {
			if (lastDifferent) lastDifferent.next = p.next;
		} else {
			seen.add(p.value);
			lastDifferent = p;
		}
		p = p.next;
	}
	return head;
}
