// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function detectLoop<T>(
	head: Node<T> | undefined
): Node<T> | null {
	let slow: Node<T> | undefined = head;
	let fast: Node<T> | undefined = head;

	while (slow && fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow == fast) {
			let pointer = head;
			while (pointer !== slow) {
				pointer = pointer?.next;
				slow = slow?.next;
			}
			if (pointer === undefined) return null;
			return pointer;
		}
	}
	return null;
}
