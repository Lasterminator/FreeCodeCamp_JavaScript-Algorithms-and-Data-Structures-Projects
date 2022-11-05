function rot13(str) {
    const letterValues = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12,
        M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };
    const reg = /[A-Za-z]/;
    const strArr = str.split('');
    const convertedArr = [];

    for (let i in strArr) {

        let currentLetterVal = letterValues[strArr[i]];

        if (reg.test(strArr[i])) {

            for (let v = 1; v < 14; v++) {
                if (currentLetterVal + 1 > 26) {
                    currentLetterVal = 1;
                } else {
                    currentLetterVal++;
                }
            }

            let newLetter = Object.keys(letterValues).find(letter => letterValues[letter] === currentLetterVal);
            convertedArr.push(newLetter);
        } else if (!reg.test(strArr[i])) {

            convertedArr.push(strArr[i]);
        }
    }

    return convertedArr.join('');

}