function checkForName(inputURl) {
    const regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    if (regex.test(inputURl) === true) {
        return true
    } else {
        return false
    }
}

export { checkForName }
