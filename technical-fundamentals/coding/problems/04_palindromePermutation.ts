// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
	const seen = new Map<string, number>();

	for (let i = 0; i < str.length; i++) {
		const c = str[i].toLowerCase();
		if (c == " ") {
			continue;
		}
		const count = seen.get(c);
		seen.set(c, count ? count + 1 : 1);
	}

	let middleFound = false;
	for (const [key, value] of seen.entries()) {
		if (value % 2 == 0) {
			continue;
		}
		if (middleFound) {
			return false;
		}
		middleFound = true;
	}

	return true;
}
