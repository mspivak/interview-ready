import stringRotation from "../../09_stringRotation";
import { afterEach, describe, expect, it, vi } from "vitest";

function isSubstring(s1: string, s2: string): boolean {
	return s1.includes(s2);
}

describe("09 - stringRotation", () => {
	test("rotates a string", () => {
		const spy = vi.fn(isSubstring);
		const str1 = "Hello";
		const str2 = "oHell";
		const result = stringRotation(str1, str2, spy);
		expect(spy).toHaveBeenCalledOnce();
		expect(result).toEqual(true);
	});

	test("rotates another string", () => {
		const spy = vi.fn(isSubstring);
		const str1 = "waterbottle";
		const str2 = "erbottlewat";
		const result = stringRotation(str1, str2, spy);
		expect(spy).toHaveBeenCalledOnce();
		expect(result).toEqual(true);
	});
});
