// 9. *String Rotation*;

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// [e.g., "waterbottle" is a rotation oP'erbottlewat")

export default function stringRotation(
	s1: string,
	s2: string,
	isSubstring: Function
): boolean {
	if (s1.length !== s2.length) {
		return false;
	}

	let r = s2;

	for (let i = 0; i < s1.length; i++) {
		r = r.slice(1, s1.length) + r[0];
		if (r == s2) {
			return isSubstring(r, s2);
		}
	}
	return false;
}
