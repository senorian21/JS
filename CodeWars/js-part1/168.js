function sumOfMinimums(arr) {
    let minSum = 0

    for(let i = 0; i < arr.length; i++){
        let arr1 = arr[i] 
        let min = Infinity
        for(let j = 0; j < arr1.length; j++){
            if(min > arr1[j]){
                min = arr1[j]
            }
        }
        minSum += min
    }
    return minSum
  }