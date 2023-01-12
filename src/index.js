module.exports = function reverse (n) {
    let newString = '';
    const intToString = n.toString();

    for (let i = intToString.length - 1; i >= 0; i -= 1) {
        newString += intToString[i];
    }

    return parseInt(newString) * 1;
}