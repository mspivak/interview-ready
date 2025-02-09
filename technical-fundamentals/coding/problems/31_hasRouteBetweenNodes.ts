// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
	value: number;
	neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
	start: GraphNode,
	end: GraphNode,
	visited: GraphNode[] = []
): boolean {
	if (start.value == end.value) {
		return true;
	}
	visited.push(start);
	for (const neighbor of start.neighbors) {
		if (
			!visited.includes(neighbor) &&
			hasRouteBetweenNodes(neighbor, end, visited)
		) {
			return true;
		}
	}
	return false;
}
