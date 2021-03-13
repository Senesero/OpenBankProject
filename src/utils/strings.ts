export const checkValues = (text: string, textSearch: string): boolean => {
    let foundText = false
    for (var i = 0; i < text.length; i++) {
        if (textSearch.indexOf(text.charAt(i), 0) !== -1) {
            foundText = true;
        }
    }
    return foundText;
}
    

export const containCapitalLetters = (text: string): boolean =>
    checkValues(text, "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ")

export const containNumber = (text: string): boolean =>
    checkValues(text, "0123456789")