// BEGIN
function getSuperSeriesWinner(scores) {
    let result = 0

    for (const score of scores) {
        if (score[0] > score[1]) 
        {
            result++;
        }
        else if(score[0] < score[1]) 
        {
            result--;
        }
    }

    if (Math.sign(result) === 1) {
        return 'canada'
    }
    else if(Math.sign(result) === -1){
        return 'ussr'
    }
    else{
        return null
    }
}

export default getSuperSeriesWinner
// END

