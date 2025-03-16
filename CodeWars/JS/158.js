function pipeFix(numbers){
    let max = -Infinity
    let min = Infinity
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i]
        }
        if(min > numbers[i]){
            min = numbers[i]
        }
    }
    let res = []
    for(let i = min; i <= max; i++){
        res.push(i)
    }
    return res
}