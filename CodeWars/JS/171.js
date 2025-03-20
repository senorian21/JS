function titleCase(title, minorWords) {
    if (!title) return ""; 

    let titleArray = title.toLowerCase().split(' '); 
    let minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : []; 

    return titleArray
        .map((word, index) => {
            if (index === 0 || !minorWordsArray.includes(word)) {
                return word[0].toUpperCase() + word.slice(1); 
            } else {
                return word;
            }
        })
        .join(' '); 
}
