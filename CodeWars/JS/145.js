function isPalindrome(x) {
    let lowerX = x.toLowerCase()
    let revers = lowerX.split('').reverse().join('')
    return revers === lowerX
  }