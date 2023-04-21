// remove the numbers from the array which has a greater number to their right-side (Note- the greter number can be adjacent or can be two - three positions after.)
// Implement this in O(n) time-complexity
const anArr = [16, 17, 2, 3, 4, 1]

const removeArr = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i-1] <= arr[i]){
            arr.splice(i,1)
            console.log(arr[i-1],arr[i])
        }
    }
    console.log(arr)
}
removeArr(anArr)