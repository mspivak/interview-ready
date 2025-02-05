// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i + 1; j < matrix.length; j++) {
			const v = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = v;
		}
	}
	matrix.forEach((row) => row.reverse());
	return matrix;
}

// export default function rotateMatrix(matrix: Matrix) {
// 	const newMatrix: Matrix = [];
// 	for (let i = 0; i < matrix.length; i++) {
// 		for (let j = 0; j < matrix.length; j++) {
// 			if (newMatrix[i] === undefined) {
// 				newMatrix[i] = [];
// 			}
// 			newMatrix[i][matrix.length - 1 - j] = matrix[j][i];
// 		}
// 	}
// 	matrix = newMatrix;
// }
