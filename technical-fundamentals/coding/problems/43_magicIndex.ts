// 3. *Magic Index*:

// A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.

// Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// FOLLOW UP: What if the values are not distinct?

export function findMagicIndexDistinct(
	arr: number[],
	start: number = 0,
	end: number | undefined = undefined
): number | null {
	end = end ?? arr.length;

	if (start >= end) {
		return arr[start] == start ? start : null;
	}

	const middleKey = Math.floor((end + start) / 2);
	const middleValue = arr[start + middleKey];

	if (middleKey == middleValue) {
		return middleKey;
	}

	if (middleKey > middleValue) {
		return findMagicIndexDistinct(arr, middleKey + 1, end);
	}
	return findMagicIndexDistinct(arr, start, middleKey);
}

export function findMagicIndexNonDistinct(
	arr: number[],
	start: number = 0,
	end: number | undefined = undefined
): number | null {
	end = end ?? arr.length;

	if (start >= end) {
		return arr[start] == start ? start : null;
	}

	const middleKey = Math.floor((end + start) / 2);
	const middleValue = arr[start + middleKey];
	console.log({ start, end, middleKey, middleValue });

	if (middleKey == middleValue) {
		return middleKey;
	}

	if (arr[middleKey] == arr[middleKey - 1]) {
		console.log("skipping equal");
		return findMagicIndexNonDistinct(arr, start, end - 1);
	}

	if (middleKey > middleValue) {
		return findMagicIndexNonDistinct(arr, middleKey + 1, end);
	}
	return findMagicIndexNonDistinct(arr, start, middleKey);
}
