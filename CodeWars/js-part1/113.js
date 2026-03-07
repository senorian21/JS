function howManySmaller(arr, n) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        let roundedValue = arr[i].toFixed(2); 
        if (roundedValue < n) {
            count++; 
        }
    }
    return count; 
}
