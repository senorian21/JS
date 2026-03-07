var number = function (busStops) {
    let sum = 0 
    for(let i = 0; i < busStops.length; i++){
        sum += busStops[i][0] - busStops[i][1]
       
    }
    return sum < 0 ? 0 : sum
}