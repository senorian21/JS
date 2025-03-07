function firstToLast(str,c){
    let fistIndex = str.indexOf(c)
    let lastIndex = str.lastIndexOf(c)

    if (fistIndex === -1){
        return -1
    }
    return lastIndex - fistIndex
  }