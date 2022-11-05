function telephoneCheck(str) {

    const regexPhoneNoBrackets = /^1?[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}/
    const regexPhoneBrackets = /^1?[- ]?\(\d{3}\)[- ]?\d{3}[- ]?\d{4}/
    const regNum = /\d/
    const strArr = str.split('');
    const removedArr = [];

    let number = false;


    for (let i in strArr) {
        if (regNum.test(strArr[i])) {
            removedArr.push(strArr[i]);
        }
    }


    if (removedArr[0] === '1' && removedArr.length === 11 || removedArr.length === 10) {

        if (regexPhoneNoBrackets.test(str) || regexPhoneBrackets.test(str)) {
            number = true;
        }
    }

    return number;
}
