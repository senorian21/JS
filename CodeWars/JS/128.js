function duplicateCount(text) {
    let lowerCaseText = text.toLowerCase()
    let freg = {}
    for(let char of lowerCaseText){
        freg[char] = (freg[char] || 0) + 1
    }

    let count = 0
    for(let key of Object.keys(freg)){
        if (freg[key] > 1) count++
    }
    return count
}   