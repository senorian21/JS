function hello(name) {
    if (name === undefined || name === '') {
        name = "World";
    } else {
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    return `Hello, ${name}!`;
}