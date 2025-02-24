// 6. *Towers of Hanoi*:

// In the classic problem of the Towers of Hanoi, you have 3 towers and
// N disks of different sizes which can slide onto any tower.
// The puzzle starts with disks sorted in ascending order of size from top to bottom
// (i.e., each disk sits on top of an even larger one).
//
// You have the following constraints:
// Only one disk can be moved at a time.
// A disk is slid off the top of one tower onto another tower.
// A disk cannot be placed on top of a smaller disk.
// Write a program to move the disks from the first tower to the last using stacks.

type Tower = number[];

export function towersOfHanoi(n: number): [Tower, Tower, Tower] {
	const towers: [Tower, Tower, Tower] = [[], [], []];

	// pre-fill
	for (let i = n; i > 0; i--) {
		towers[0].push(i);
	}

	function moveDisc(n: number, from: number, to: number, through: number) {
		if (n !== 1) {
			moveDisc(n - 1, from, through, to);
		}
		towers[to].push(towers[from].pop()!);
		if (n !== 1) {
			moveDisc(n - 1, through, to, from);
		}
	}

	// move n discs from tower 0 to tower 2 through tower 1
	moveDisc(n, 0, 2, 1);
	return towers;
}
