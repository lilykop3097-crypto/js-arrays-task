// BEGIN
function makeCensored(sentence,listOfBannedWords) {
    let splittedSentence = sentence.split(' ')
    
    for (let i = 0; i < listOfBannedWords.length; i++) 
        for (let j = 0; j < splittedSentence.length; j++) 
            if (splittedSentence[j] === listOfBannedWords[i]) 
                splittedSentence[j] = `$#%!`
            
    return splittedSentence.join(' ')
}

export default makeCensored
// END


