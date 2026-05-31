// BEGIN
function bubbleSort(arr)
{
    const sortedArray = Object.assign([],arr)

    let size = arr.length

    while (size != 0)
    {
        let maxindex = 0;
        for (let i = 1; i < size; i++)
        {
            if (sortedArray[i-1] > sortedArray[i])
            {
                let temp = sortedArray[i-1];
                sortedArray[i-1] = sortedArray[i];
                sortedArray[i] = temp;

                maxindex = i;
            }  
        }

        size = maxindex; 
    } 

    return sortedArray
}

export default bubbleSort

// END