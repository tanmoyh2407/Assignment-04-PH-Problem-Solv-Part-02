function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid';
    }
    return str.split(" ").join("").toUpperCase();
}

const finalCharacter = onlyCharacter("asdkfj KIik    askdfji ");
// const finalCharacter = onlyCharacter('asef kjd9a K')
console.log(finalCharacter);