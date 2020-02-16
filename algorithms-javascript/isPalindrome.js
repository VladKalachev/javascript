function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validChharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if(validChharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
    // return false or true
}

function reverseString(str) {
    return str.split('').reverse().join(''); 
}

// console.log(reverseString("Hello!"));

// console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("race car"));
