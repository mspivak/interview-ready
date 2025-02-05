// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
	let compressed = "";
	let lastChar = "";
	let charCount = 1;

	// note the <= comparison to deliberately iterate one more time
	// when the string is completed to account for the last compression string.
	for (let i = 0; i <= str.length; i++) {
		if (lastChar == str[i]) {
			charCount++;
		} else if (lastChar !== "") {
			compressed += `${lastChar}${charCount}`;
			charCount = 1;
		}
		if (compressed.length >= str.length) {
			return str;
		}
		lastChar = str[i];
	}

	return compressed;
}
