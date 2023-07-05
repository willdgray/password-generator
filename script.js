// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    var length = window.prompt("choose password length between 8 and 128")
    const passwordOptions = {
      num: "1234567890",
      specialCharacters: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    passwordText = [""]
     for(i=0;i < length; i++){
       passwordText += char.charAt(Math.floor(Math.random() * char.length))
       return passwordText
     }
    };

  var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var plength = prompt("How many characters would you like your password to be?")

if (plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
}

if (plength >= 8 && plength <= 128){
var cuppercase = confirm("Would you like to use uppercase letters?")
var clowercase = confirm("Would you like to use lowercase letters?")
var cnumbers = confirm("would you like to use numbers?")
var csymbols = confirm("would you like to use special characters?")
}    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

