// BEGIN
function calculateAverage(arr) {
    if(arr.length === 0) 
        return null

    let averageTemp = 0

    for (const element of arr) {
        averageTemp += element
    }
    return averageTemp / arr.length
}

export default calculateAverage
// END


