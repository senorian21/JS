function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError('Input must be between 0 and 12');
    }

    if (n === 0) {
        return 1;
    }

    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact *= i;
    }

    return fact;
}