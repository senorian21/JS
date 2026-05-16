function evaporator(content, evapPerDay, threshold) {
    let percentage = 100
    let days = 0
    while (percentage > threshold) {
        percentage *= (1 - evapPerDay / 100)
        days += 1
    }
    return days;
}