const _ = require("lodash"); 

// BEGIN
export function getSameCount(arr1,arr2) {
    let uniqueArray1 = _.uniq(arr1)
    let uniqueArray2 = _.uniq(arr2)

    let resultArray = new Array()

    for (const element1 of uniqueArray1) {
        for (const element2 of uniqueArray2) {
            if (element1 === element2) {
                resultArray.push(element1)
            }
        }
    }

    return resultArray.length
}
// END
export default getSameCount;


