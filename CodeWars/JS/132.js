function getMiddle(s) {
    let length = s.length
    let midl = Math.floor(length / 2)
    
    if(length % 2 === 0){
        return s[midl - 1] + s[midl]
    } else {
        return s[midl]
    }
  }