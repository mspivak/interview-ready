// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { NewLineKind } from "typescript";
import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
	value: T;
	next?: Node<T>;
};

export default function sumLists(
	list1: Node<number> | undefined,
	list2: Node<number> | undefined
): Node<number> | undefined {
	console.log(list1);
	console.log(list2);

	const sum = new LinkedList<number>();
	let carry = 0;
	while (list1 || list2) {
		let digit = 0;
		digit += list1?.value || 0;
		digit += list2?.value || 0;
		digit += carry;
		if (digit > 9) {
			digit -= 10;
			carry = 1;
		} else {
			carry = 0;
		}
		sum.push(digit);
		list1 = list1?.next;
		list2 = list2?.next;
	}
	if (carry) {
		sum.push(1);
	}
	sum.print();
	return sum.head;
}
