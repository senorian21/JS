function cutIt(arr){
    let minLength = Infinity
    let resuiltArray = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length < minLength){
            minLength = arr[i].length
        }
    }
    for(let i = 0; i < arr.length; i++){
        resuiltArray.push(arr[i].slice(0,minLength))
    }
    return resuiltArray
  }