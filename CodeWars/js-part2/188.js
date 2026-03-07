function digitize(number) {
    return String(number).split('').reverse().map(Number);
}