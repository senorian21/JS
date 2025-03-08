function alienLanguage(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
        words[i] = words[i].slice(0, -1) + words[i][words[i].length - 1].toLowerCase();
    }
    return words.join(" ");
}
