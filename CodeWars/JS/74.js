function squareSum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Math.pow(numbers[i] , 2)
        sum += numbers[i]
    } 
    return sum
}