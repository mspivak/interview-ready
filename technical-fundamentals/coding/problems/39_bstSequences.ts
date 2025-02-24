// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
// Output: {2, 1, 3}, {2, 3, 1}
// ```

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
};

export default function bstSequences<T>(root: TreeNode<T>): T[][] {
	let sequences: T[][] = [];

	traverse(root, [root.value]);

	function traverse(node: TreeNode<T> | undefined, sequence: T[] = []) {
		if (!node) {
			sequences.push(sequence);
			return;
		}

		const sequence_a = [...sequence];
		if (node.left) {
			sequence_a.push(node.left.value);
			traverse(node!.right, sequence_a);
		} else {
			sequences.push(sequence_a);
		}

		const sequence_b = [...sequence];
		if (node.right) {
			sequence_b.push(node.right.value);
			traverse(node!.left, sequence_b);
		} else {
			sequences.push(sequence_b);
		}
	}
	console.log(sequences);
	return sequences;
}
