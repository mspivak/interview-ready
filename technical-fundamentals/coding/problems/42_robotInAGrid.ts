// 2. *Robot in a Grid*:

// Imagine a robot sitting on the upper left corner of a grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are
// "off limits" such that the robot cannot step on them.
// Design an algorithm to find a path for the robot from the top left to the bottom right.

type Grid = boolean[][];
type Path = Array<[number, number]>;

export default function robotInAGrid(grid: Grid): [number, number][] | false {
	const memo = new Map<string, Path | false>();

	function move(subgrid: Grid, subpath: Path = []): [number, number][] | false {
		// is a valid grid							 and is walkable
		if (!subgrid.length || !subgrid[0].length || !subgrid[0][0]) {
			return false;
		}

		const y = grid.length - subgrid.length;
		const x = grid[0].length - subgrid[0].length;
		const memoKey = [y, x].join(",");

		if (memo.has(memoKey)) {
			return memo.get(memoKey)!;
		}

		// are we done
		if (subgrid.length == 1 && subgrid[0].length == 1) {
			subpath.unshift([x, y]);
			memo.set(memoKey, subpath);
			return subpath;
		}
		const tryDown = move(subgrid.slice(1, subgrid.length), subpath);
		memo.set([y + 1, x].join(","), tryDown);
		if (tryDown) {
			subpath.unshift([x, y]);
			return tryDown;
		}

		const tryRight = move(
			subgrid.map((row) => row.slice(1, subgrid[0].length)),
			subpath
		);
		memo.set([y, x + 1].join(","), tryDown);
		if (tryRight) {
			subpath.unshift([x, y]);
			return tryRight;
		}

		return false;
	}

	return move(grid);
}
