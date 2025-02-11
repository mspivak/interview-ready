// 1. *Triple Step*:

// A child is running up a staircase with n steps and can hop either
// 1 step, 2 steps, or 3 steps at a time. Implement a method to count
// how many possible ways the child can run up the stairs.
//
let tried = new Map();
export default function tripleStep(n: number): number {
	if (n <= 0) {
		return 0;
	}
	if (tried.has(n)) {
		return tried.get(n);
	}
	let possibleWays = 0;
	for (const step of [1, 2, 3]) {
		const newPosition = n - step;
		if (newPosition == 0) {
			possibleWays++;
			continue;
		} else if (newPosition < 0) {
			continue;
		}
		possibleWays += tripleStep(newPosition);
	}
	tried.set(n, possibleWays);
	return possibleWays;
}
