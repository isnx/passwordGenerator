console.log("start")
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let characters = []
let headerOne = document.getElementById("header-one")
    headerOne.textContent = "Generate a"
let headerTwo = document.getElementById("header-two")
    headerTwo.textContent = "random password"
let supportText = document.querySelector("p")
    supportText.textContent = "Never use an insecure password again"
let passwordOne = ""
let passwordTwo = ""
let btn = document.getElementById("generate-password")
    btn.textContent = "Generate password"
let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")
let copyConfirmation = document.getElementById("copy-confirmation")
const myTimeout = setTimeout(classReset, 5000);
let letInput = document.getElementById("let-input")
let numInput = document.getElementById("num-input")
let symInput = document.getElementById("sym-input")

function classReset(){
    copyConfirmation.classList.add("display-off");
    copyConfirmation.classList.remove("display-on");
}

function renderPassword(){
    if (letInput.checked && numInput.checked && symInput.checked){
    characters = letters.concat(numbers, symbols)
    generatePassword()
    } else if(letInput.checked && numInput.checked && symInput.checked === false ){
        characters = letters.concat(numbers)
        generatePassword()
    } else if(letInput.checked && numInput.checked === false && symInput.checked){
        characters = letters.concat(symbols)
        generatePassword()
    } else if(letInput.checked && numInput.checked === false && symInput.checked === false){
        characters = letters
        generatePassword()
    } else if(letInput.checked === false && numInput.checked && symInput.checked){
        characters = numbers.concat(symbols)
        generatePassword()
    } else if(letInput.checked === false && numInput.checked && symInput.checked === false){
        characters = numbers
        generatePassword()
    } else if(letInput.checked === false && numInput.checked === false && symInput.checked){
        characters = symbols
        generatePassword()
    } else{
        alert("check at least one box")
    }
}
 
function generatePassword(){
    passwordOne = ""
    passwordTwo = ""
    for (let i = 0; i < 15; i ++) {
        passwordOne = passwordOne + characters[Math.floor(Math.random()*characters.length)]
    }
    for (let i = 0; i < 15; i ++) {
        passwordTwo = passwordTwo + characters[Math.floor(Math.random()*characters.length)]
    }
    passOne.textContent = passwordOne
    passTwo.textContent = passwordTwo
}


btn.addEventListener("click", renderPassword)

function copyToClipboard(x){
    navigator.clipboard.writeText(x);
    copyConfirmation.classList.remove("display-off");
    copyConfirmation.classList.add("display-on");
    copyConfirmation.textContent = "Password Saved"
    setTimeout(classReset, 1500)
}
function copyTextPwdOne(){
    const text = document.getElementById('password-one').textContent
    copyToClipboard(text)
  }

  function copyTextPwdTwo(){
    const text = document.getElementById('password-two').textContent
    copyToClipboard(text)
  }

  passOne.addEventListener("click", copyTextPwdOne)
  passTwo.addEventListener("click", copyTextPwdTwo)

