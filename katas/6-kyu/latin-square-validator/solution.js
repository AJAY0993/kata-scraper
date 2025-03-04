function verifyRow(row, m, i, j) {
    const map = {}
    for (let k = 0; k < row.length; k++) {
        if (row[k] < 1 || row[k] > m) {
            return `${row[k]} at ${i + 1},${k + 1} is not between 1 and ${m}`
        }
        if (map[row[k]] === 1) {
            return `${row[k]} occurs more than once in row ${i + 1}`
        }
        if (!map[row[k]]) {
            map[row[k]] = 1
        }
    }
}

function verifyLatinSquare(array, m) {
    if (array.some(arr => arr.length !== array.length)) return "Array not square";
    if (array.length !== m) return "Array is wrong size";

    const colStore = {}
    for (let i = 0; i < array.length; i++) {
        const row = array[i]
        for (let j = 0; j < row.length; j++) {
            if (!colStore[j]) {
                colStore[j] = {}
            }
            if (colStore[j][row[j]] === 1) {
                return `${row[j]} occurs more than once in column ${j + 1}`
            }
            if (!colStore[j][row[j]]) {
                colStore[j][row[j]] = 1
            }
            const res = verifyRow(row, m, i, j)
            if (res) return res
        }
    }
    return `Valid latin square of size ${m}`
}
