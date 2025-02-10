// 3. *List of Depths*:

import { LinkedList } from "./10_LinkedList";

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
};

export type ListNode<T> = {
	value: T;
	next?: ListNode<T>;
};

export default function listOfDepths<T>(
	root: TreeNode<T> | null
): ListNode<T>[] {
	const lists: ListNode<T>[] = [];
	let depth = 0;
	if (!root) return [];
	dfs(root, depth);

	function dfs(tree: TreeNode<T> | undefined, depth: number) {
		if (!tree) return;
		if (!lists[depth]) {
			lists[depth] = { value: tree.value };
		} else {
			let p = lists[depth];
			while (p.next) {
				p = p.next;
			}
			p.next = { value: tree.value };
		}
		depth++;
		dfs(tree.left, depth);
		dfs(tree.right, depth);
	}

	return lists;
}
