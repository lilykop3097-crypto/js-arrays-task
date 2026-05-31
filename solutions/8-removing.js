// BEGIN
function getSameParity(arr) {

    if (arr.length === 0) {
        return arr
    }

    let firstElementParity = Math.abs(arr[0] % 2)
    
    let resultArray = new Array()
    for (const number of arr) {
        if (Math.abs(number % 2) === firstElementParity) {
            resultArray.push(number)
        }
    }
    return resultArray
}

export default getSameParity
// END

