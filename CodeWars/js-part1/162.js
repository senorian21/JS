function capitalize(str) {
    let strArray = str.split('');
    let evenIndex = [];
    let oddIndex = [];
    let rez = [];

   
    for (let i = 0; i < strArray.length; i++) {
        if (i % 2 === 0) {
            evenIndex.push(strArray[i].toUpperCase());
        } else {
            evenIndex.push(strArray[i].toLowerCase());
        }
    }

    for (let i = 0; i < strArray.length; i++) {
        if (i % 2 === 0) {
            oddIndex.push(strArray[i].toLowerCase());
        } else {
            oddIndex.push(strArray[i].toUpperCase());
        }
    }


    rez.push(evenIndex.join(''), oddIndex.join(''));
    return rez;
}


console.log(capitalize("abcdef")); 
