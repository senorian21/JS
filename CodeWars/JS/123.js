var uniqueInOrder = function (iterable) {
    let letterArray = Array.isArray(iterable) ? iterable : iterable.split(''); 
    let resArray = [];

    for (let i = 0; i < letterArray.length; i++) {
        if (i === 0 || letterArray[i] !== letterArray[i - 1]) {
            resArray.push(letterArray[i]);
        }
    }

    return resArray;
};
