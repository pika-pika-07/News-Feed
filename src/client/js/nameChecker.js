function checkForName(inputText) {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    var url = inputText;
    if (regex.test(inputText) === true) {
        return true
    } else {
        return false
    }
}

export { checkForName }
