var encryptThis = function(text) {
    return text.split(' ').map(word => {
        const first = word.charCodeAt(0);
        const rest = word.slice(1);

        if (rest.length <= 1) {
            return first + rest;
        }

        return first + rest.slice(-1) + rest.slice(1, -1) + rest[0];
    }).join(' ');
}