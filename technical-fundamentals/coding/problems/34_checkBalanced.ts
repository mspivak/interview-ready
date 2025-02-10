// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
	const depths: number[] = [];
	let depth = 0;
	if (!tree) return true;
	dfs(tree, depth);

	function dfs(tree: TreeNode<T> | undefined, depth: number) {
		if (!tree) return;
		if (!depths[depth]) depths[depth] = 0;
		depths[depth]++;
		depth++;
		dfs(tree.left, depth);
		dfs(tree.right, depth);
	}

	for (let i = 0; i < depths.length; i++) {
		if (depths[i] == 2 ** i) {
			continue;
		}
		return i === depths.length - 1;
	}
	return true;
}
