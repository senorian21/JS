function splitAndMerge(string, separator) {
    let arrayStr = string.split(' ')
    let arrLetter = []
    for(let i = 0; i < arrayStr.length; i++){
        arrLetter.push(arrayStr[i].split('').join(separator))
    }
    let resStr = arrLetter.join(' ')
    return resStr
  }