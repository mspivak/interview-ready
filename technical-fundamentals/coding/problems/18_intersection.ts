// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function intersection<T>(
	list1: Node<T> | undefined,
	list2: Node<T> | undefined
): Node<T> | undefined {
	let p1: Node<T> | undefined = list1;
	while (p1) {
		let p2: Node<T> | undefined = list2;
		while (p2) {
			if (p1 == p2) {
				return p1;
			}
			p2 = p2.next;
		}
		p1 = p1.next;
	}
	return undefined;
}
