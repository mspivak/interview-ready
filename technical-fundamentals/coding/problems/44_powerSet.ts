// 4. *Power Set*:

// Write a method to return all subsets of a set.

// Example
// Input: [1, 2, 3]
// Output: [ [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3] ];

export function powerSet(set: number[]): number[][] {
	if (set.length == 0) {
		return [[]];
	}
	if (set.length == 1) {
		return [[], set];
	}
	const lastSubsets = powerSet(set.slice(1, set.length));
	const subsets = [...lastSubsets];
	for (let i = 0; i < lastSubsets.length; i++) {
		subsets.push([set[0], ...lastSubsets[i]]);
	}
	return subsets;
}
