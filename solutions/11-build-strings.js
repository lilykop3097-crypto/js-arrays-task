// BEGIN
function buildDefinitionList(definitions) {
    if (definitions.length === 0) {
      return ''
    }
    let result = ''
    
    result += '<dl>'

    for (const element of definitions) {
        result += `<dt>${element[0]}</dt><dd>${element[1]}</dd>`
    }

    result += '</dl>'

    return result
}

export default buildDefinitionList
// END


