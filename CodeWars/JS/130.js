function descendingOrder(n){
    let numArray = n.toString().split('').map(Number)
    numArray.sort((a,b) => b - a)
    return Number(numArray.join(''))
  }