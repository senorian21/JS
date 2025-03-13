function removeUrlAnchor(url) {
    let urlArray = url.split('');
    for (let i = 0; i < urlArray.length; i++) {
        if (urlArray[i] === '#') {
            urlArray.splice(i); 
            break; 
        }
    }
    return urlArray.join(''); 
}
