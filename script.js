
var enter;
var confirmNum;
var confirmLower;
var confirmUpper;
var confirmChar;
var userChoice;

var numbers = '1234567890'.split(
  ''
);
var letters = 'abcdefghijklmnopqrstuvwxyz'.split(
  ''
);
var letters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);
var characters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


