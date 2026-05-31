// BEGIN
export function getMax(elements) {
    if (elements.length === 0) {
        return null
    }

    let [maxElement,...restElements] = elements

    for (const element of restElements) {
        if (element > maxElement) {
            maxElement = element
        }
    }
    return maxElement
}
// END