function DNAtoRNA(str) {
    let strArray = str.split('')
    let res = ''
    for(let i = 0; i < strArray.length; i++){
        if (strArray[i] === 'T'){
            strArray[i] = 'U' 
            res += strArray[i]
        } else {
            res += strArray[i]
        }
    }
    return res
  }