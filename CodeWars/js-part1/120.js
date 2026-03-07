function countGrade(scores) {
    const res = {
        S: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        X: 0,
    }
    scores.forEach(Marck => {
        if (Marck === 100) {
            res.S += 1
        } else if (Marck < 100 && Marck >= 90) {
            res.A += 1
        } else if (Marck < 90 && Marck >= 80) {
            res.B += 1
        } else if (Marck < 80 && Marck >= 60) {
            res.C += 1
        } else if (Marck < 60 && Marck >= 0) {
            res.D += 1
        } else {
            res.X += 1
        }
    })
    return res
}


// function countGrade(scores){
//     return {
//       'S': scores.filter(function(x){return x == 100}).length,
//       'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
//       'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
//       'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
//       'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
//       'X': scores.filter(function(x){return x == -1}).length,
//     };
//   }