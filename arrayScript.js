function createArray(rows, cols) {
    const arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            arr[i][j] = Math.floor(Math.random() * 101);
        }
    }
    return arr;
}

function transformArray(arr) {
    return arr.map(row => row.map(value => (value > 50 ? 1 : 0)));
}

function printArrayAsTable(arr) {
    console.table(arr);
}

const initialArray = createArray(50, 50);

console.log("Исходный массив:");
printArrayAsTable(initialArray);

const transformedArray = transformArray(initialArray);

console.log("Измененный массив:");
printArrayAsTable(transformedArray);