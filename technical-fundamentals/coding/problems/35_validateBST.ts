// 5. *Validate BST*:

import { nodeModuleNameResolver } from "typescript";

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
};

export default function validateBST<T>(
	node: TreeNode<T> | undefined,
	min: T | null = null,
	max: T | null = null
): boolean {
	if (!node) return true;
	if ((min && node.value < min) || (max && node.value > max)) {
		return false;
	}
	return (
		validateBST(node.left, min, node.value) &&
		validateBST(node.right, node.value, max)
	);
}
