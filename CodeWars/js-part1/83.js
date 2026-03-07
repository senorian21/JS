function highAndLow(numbers){
    let numArrayString = numbers.split(' ');
    let numArray = numArrayString.map(Number);
    let minNum = numArray[0];
    let maxNum = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if (numArray[i] > maxNum){
            maxNum = numArray[i];
        } else if (numArray[i] < minNum){
            minNum = numArray[i];
        }
    }
    let res = `${maxNum} ${minNum}`;
    return res;
}

