function checkExam(key, answer) {
    let point = 0; 
    for (let i = 0; i < key.length; i++) {
        if (key[i] === answer[i]) {
            point += 4;
        } else if (answer[i] === "") {
            point += 0; 
        } else {
            point -= 1;
        }
    }
    if (point < 0) return 0; 
    else return point;
}
