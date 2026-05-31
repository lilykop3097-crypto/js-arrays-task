// BEGIN
export function calculateSum(arr) {
    let result = 0
    for (const number of arr) {
        if (number % 3 === 0) {
            result += number
        }
    }
    return result
}
// END


