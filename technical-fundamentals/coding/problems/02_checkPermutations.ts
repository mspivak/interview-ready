// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
	if (s1.length !== s2.length) {
		return false;
	}

	for (let i = 0; i < s1.length; i++) {
		if (s2.indexOf(s1[i]) === -1) {
			return false;
		}
	}
	return true;
}
