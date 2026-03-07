function between(a, b) {
    let res = []
    if (b < a) {
        [a, b] = [b, a]
    }
    while(a <= b){
        res.push(a)
        a++
    }
    return res
}