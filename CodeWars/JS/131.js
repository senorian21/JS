function getGrade(s1, s2, s3) {
    let sredn = (s1 + s2 + s3) / 3
    if (100 >= sredn && sredn >= 90) {
        return 'A'
    } else if (90 > sredn && sredn >= 80) {
        return 'B'
    } else if (80 > sredn && sredn >= 70) {
        return 'C'
    } else if (70 > sredn && sredn >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}