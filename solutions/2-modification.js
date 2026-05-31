// BEGIN
export function swap(arr) {
    const swappedArray = Object.assign([],arr)

    if (swappedArray.length >= 2) {
        let temp = swappedArray[0];
        swappedArray[0] = swappedArray[swappedArray.length-1];
        swappedArray[swappedArray.length-1] = temp;
    }

    return swappedArray
}

