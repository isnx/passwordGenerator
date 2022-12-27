console.log("start")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

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

btn.addEventListener("click", generatePassword)


