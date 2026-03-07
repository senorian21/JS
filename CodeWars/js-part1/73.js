function correct(string)
{
	let res = ''
    let stringArray = string.split('')
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === '5'){
            stringArray[i] = 'S'
            res += stringArray[i]
        } else if ( stringArray[i] === '1'){
            stringArray[i] = 'I'
            res += stringArray[i]
        } else if (stringArray[i] === '0'){
            stringArray[i] = 'O'
            res += stringArray[i]
        } else {
            res += stringArray[i]
        }
    }
    return res
}