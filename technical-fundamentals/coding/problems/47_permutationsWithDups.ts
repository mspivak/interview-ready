// 7.Permutations without Dups: Write a method to compute all permutations of a string of unique characters.

export function permutationsWithoutDups(input: string): string[] {
	if (input.length == 1) {
		return [input];
	}
	const minusOneLetter = permutationsWithoutDups(
		input.substring(0, input.length - 1)
	);
	const permutations = [];
	const lastChar = input[input.length - 1];

	for (let i = 0; i < minusOneLetter.length; i++) {
		const previousPermutation = minusOneLetter[i];
		for (let j = 0; j <= previousPermutation.length; j++) {
			permutations.push(
				previousPermutation.substring(0, j) +
					lastChar +
					previousPermutation.substring(j, input.length)
			);
		}
	}

	return permutations;
}

// *Permutations with Dups*: Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.

export function permutationsWithDups(input: string): string[] {
	return [...new Set(permutationsWithoutDups(input))];
}
