// 5. *Recursive Multiply*:

// Write a recursive function to multiply two positive integers without using the * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

export function recursiveMultiply(a: number, b: number): number {
	if (b == 0) return 0;
	if (b == 1) return a;
	return a + recursiveMultiply(a, b - 1);
}
