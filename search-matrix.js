const matrixSearch = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / cols)][mid % cols];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

// usage 
const matrix = [
    [1, 3, 5],
    [7, 8, 10],
    [12, 15, 18]
];
const target = 8;
const result = matrixSearch(matrix, target);
console.log(result);
