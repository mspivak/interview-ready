// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

import { LinkedList } from "./10_LinkedList";

export type TreeNode<T> = {
	value: T;
	left?: TreeNode<T>;
	right?: TreeNode<T>;
};

export class Tree<T> {
	queue: LinkedList<TreeNode<T>>;

	constructor() {
		this.queue = new LinkedList<TreeNode<T>>();
	}

	bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
		if (!node) {
			return;
		}
		this.queue.push(node);

		this.queue.forEach((node: TreeNode<T>) => {
			visit(node);
			if (node.left) this.queue.push(node.left);
			if (node.right) this.queue.push(node.right);
		});
	}

	dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
		if (!node) {
			return;
		}
		visit(node);
		this.dfs(node.left, visit);
		this.dfs(node.right, visit);
	}
}
