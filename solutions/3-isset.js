// BEGIN
export function get(arr,index,defaultValue = null) {
    if (index >= arr.length || index < 0) {
        return defaultValue
    }
    else 
    {
        return arr[index]
    }
}
// END



