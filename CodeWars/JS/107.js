function abbrevName(name){
    let nameArray = name.split(' ');
    let firstNameInitial = nameArray[0][0].toUpperCase();
    let lastNameInitial = nameArray[1][0].toUpperCase();
    return `${firstNameInitial}.${lastNameInitial}`;
}
