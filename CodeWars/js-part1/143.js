function findDifference(a, b) {
    let ploshA = 1
    let ploshB = 1
    for(let i = 0; i<a.length; i++){
        ploshA *= a[i]
        ploshB *= b[i]
    }
    if (ploshA > ploshB){
        return ploshA - ploshB
    } else {
        return ploshB - ploshA
    }
  }