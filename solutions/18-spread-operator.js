// BEGIN
export function flatten(arr) {
    let resultArray = new Array()

    for (const iterator of arr) {
        if (Array.isArray(iterator)) {
            resultArray.push(...iterator)
        }
        else{
            resultArray.push(iterator)
        }
    }

    return resultArray
}
// END


