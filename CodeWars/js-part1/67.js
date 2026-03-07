function openOrSenior(data) {
    let chelenstwo = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            chelenstwo.push("Senior")
        } else {
            chelenstwo.push("Open")
        }

    }
    return chelenstwo
}