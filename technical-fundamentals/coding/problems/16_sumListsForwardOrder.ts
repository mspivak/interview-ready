// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295
// Output:9 -> 1 -> 2. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";
import sumLists from "./15_sumLists";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function sumListsForwardOrder(
	list1: Node<number> | undefined,
	list2: Node<number> | undefined
): Node<number> | undefined {
	const reversed1 = new LinkedList(list1).reverse();
	const reversed2 = new LinkedList(list2).reverse();
	const sum = sumLists(reversed1.head, reversed2.head);
	const reversedSum = new LinkedList(sum).reverse();
	return reversedSum.head;
}
