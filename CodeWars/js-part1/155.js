function dutyFree(normPrice, discount, hol){
    let discountPrice = normPrice * discount
    return Math.floor(hol / discountPrice * 100)
}