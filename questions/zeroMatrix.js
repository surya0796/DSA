const matrix = [
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1]
]

// Output:
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

const setZeroes = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[0].length; j++) {
                    debugger
                    //if zero found then store its row and column
                    if (arr[i][j] === 0) {
                       newArr[i][j] = 0
                    }
                    newArr[i][j] = arr[i][j]
        
                }
            }
}
// const setZeroes = (matrix) => {
//     const zeroRow = new Set();
//     const zeroCol = new Set();
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             //if zero found then store its row and column
//             if (matrix[i][j] === 0) {
//                 zeroRow.add(i)
//                 zeroCol.add(j)
//             }

//         }
//     }

//     for (let r of zeroRow) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             matrix[r][j] = 0;
//         }
//     }
//     for (let c of zeroCol) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             matrix[j][c] = 0;
//         }
//     }
// }

setZeroes(matrix)
console.log(matrix);