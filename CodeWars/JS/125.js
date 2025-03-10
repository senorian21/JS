function minMax(arr){
    let min = Infinity
    let max = -Infinity
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        } 
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    res.push(min, max)
    return res; 
  }