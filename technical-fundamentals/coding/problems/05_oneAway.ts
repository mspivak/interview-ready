// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
	if (Math.abs(str1.length - str2.length) > 1) return false;

	let i1 = 0;
	let i2 = 0;
	let editCount = 0;

	while (str1[i1] && str2[i2]) {
		if (str1[i1] !== str2[i2]) {
			editCount++;
			if (str1[i1] == str2[i1 + 1]) {
				i2++;
				continue;
			}
			if (str1[i1 + 1] == str2[i2]) {
				i1++;
				continue;
			}
			if (str1[i1 + 1] == str2[i1 + 1]) {
				i1++;
				i2++;
				continue;
			}
		}

		i1++;
		i2++;

		if (editCount > 1) {
			return false;
		}
	}
	return true;
}
