const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
const symbols = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstPasswordEl = document.querySelector("#first-password-el")
let secondPasswordEl = document.querySelector("#second-password-el")
let passwordEl = document.querySelector(".password-el")
let passwordSizeInput = document.querySelector("#password-lenght-input")
let useSymbolsNumber = document.querySelector("#special-chars-toggle")
let passwords = []


function generatePassword() {

    passwords = getRandomCharacters(passwordSizeInput.value, useSymbolsNumber.checked)

    firstPasswordEl.textContent = passwords[0]
    secondPasswordEl.textContent = passwords[1]
    passwordSizeInput.value = passwords[0].length
}

function getRandomCharacters(size, useSymbolsNumber){
    
    let firstPassword = ""
    let secondPassword = ""
    let lenght = (!size || size > 15)? 15 : size
    let source = (useSymbolsNumber)? characters.concat(symbols) : characters
    console.log(lenght)
    console.log(size)
    
    for (i = 0; i < lenght; i++) {
        firstPassword += source[Math.floor(Math.random() * source.length)]
        secondPassword += source[Math.floor(Math.random() * source.length)]
    }
    
    return [firstPassword, secondPassword]

}







