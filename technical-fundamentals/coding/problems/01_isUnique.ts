// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
	const seen: Set<string> = new Set();
	for (let i = 0; i < str.length; i++) {
		const c = str[i];
		if (seen.has(c)) {
			return false;
		}
		seen.add(c);
	}
	return true;
}
