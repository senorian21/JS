function addLength(str) {
    let arr = str.split(' ');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(`${arr[i]} ${arr[i].length}`);
    }
    return result;
}