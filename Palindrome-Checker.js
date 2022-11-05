// PALINDROME TESTER USING REGEX
function palindrome(str) {
    let formattedString = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    formattedString = formattedString.toLowerCase().split("");
    for (let i = 0; i < formattedString.length - 1 / 2; i++) {
        if (formattedString[i] !== formattedString[formattedString.length - i - 1]) {
            return false;
            break;
        }
    }
    return true;
}

console.log(palindrome("qwerty"));
