function rentalCarCost(day) {
    const dailyRate = 40; 
    let totalCost = day * dailyRate; 
  
    if (day >= 7) {
      totalCost -= 50; 
    } else if (day >= 3) {
      totalCost -= 20; 
    }
  
    return totalCost;
}
