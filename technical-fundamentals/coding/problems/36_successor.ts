// 6. *Successor*:

import { Tree } from "./30_trees";

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
	parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(
	node: TreeNode<T>
): TreeNode<T> | undefined {
	if (node.right) {
		let tree = new Tree<T>();
		let min: TreeNode<T> | undefined = undefined;
		tree.dfs(node.right, (n) => {
			if (!min) min = n;
			else min = n.value < min.value ? n : min;
		});
		return min;
	}

	let pointer: TreeNode<T> | undefined = node;
	while (pointer.parent) {
		if (pointer !== pointer.parent.right) {
			break;
		}
		pointer = pointer.parent;
	}

	return pointer?.parent;
}
