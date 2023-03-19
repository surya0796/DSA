const fibonacci = (num) => {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(4))

// Printing Fibonacci series using recurrsion
function callFibonacci(position) {
    function fibnacc(prev, next, position) {
        const newNext = prev + next
        arr.push(newNext)
        if (position === 0) return newNext
        fibnacc(next, newNext, --position)
    }
    const arr = [0, 1]
    arr.push(fibnacc(0, 1, position - 2))
    return arr
}


console.log(callFibonacci(6))

// const board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]
// const isSafe = (i, j, x, board) => {
//     const val = x.toString()
//     for (let ele = 0; ele < 9; ele++) {
//         const rowEle = board[i][ele]
//         const colEle = board[ele][j]
//         const blockEle = board[(3 * Math.floor(i / 3)) + Math.floor(ele / 3)][(3 * Math.floor(j/3)) + Math.floor(ele % 3)]
//         if ( rowEle === val || colEle === val || blockEle === val) {
//             return false
//         }
//     }
//     return true
// }
// var solveSudoku = function (board) {
//     for (let i = 0; i < board[i].length - 1; i++) {
//         for (let j = 0; j < board[j].length - 1; j++) {
//             if (board[i][j] === ".") {
//                 for (let x = 1; x <= 9; x++) {
//                     if (isSafe(i, j, x, board)) {
//                         board[i][j] = x.toString()
//                         solveSudoku(board)
//                         if (solveSudoku(board)) {
//                             return true
//                         }
//                         else {
//                             board[i][j] = "."
//                         }
//                     }
//                 }
//                 return false
//             }
//         }
//     }
//     return true
// };

// console.log(solveSudoku(board))
// console.log(board);
