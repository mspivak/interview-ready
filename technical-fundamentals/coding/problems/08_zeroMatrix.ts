// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
	const zeroesCols: number[] = [];
	const zeroesRows: number[] = [];

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 0) {
				zeroesRows.push(i);
				zeroesCols.push(j);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			matrix[i][j] =
				zeroesRows.includes(i) || zeroesCols.includes(j) ? 0 : matrix[i][j];
		}
	}

	return matrix;
}
