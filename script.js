
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

function generatePassword() {
  enter = parseInt(prompt("Please enter desired password length. Must be between 8 and 128 characters."));
  if (!enter) {
    alert("Please enter a value.");
  } 
  else if (enter < 8 || enter > 128) {
    alert("Password must be between 8 and 128 characters.");
  } 
  else {
    confirmNum = confirm("Include numbers?");
    confirmLower = confirm("Include lowercase letters?");
    confirmUpper = confirm("include uppercase letters?");
    confirmChar = confirm("Include special characters?");
  };
  if (!confirmNum && !confirmLower && !confirmUpper && !confirmChar) {
    userChoice = alert("Please choose at lease one criteria.");
  } 
  else if (confirmNum && confirmLower && confirmUpper && confirmChar) {
    userChoice = numbers.concat(letters, letters2, characters);
  }
  else if (confirmNum && confirmLower && confirmUpper) {
    userChoice = numbers.concat(letters, letters2);
  }
  else if (confirmNum && confirmLower && confirmChar) {
    userChoice = numbers.concat(letters, characters);
  }
  else if (confirmNum && confirmUpper && confirmChar) {
    userChoice = numbers.concat(letters2, characters);
  }
  else if (confirmLower && confirmUpper && confirmChar) {
    userChoice = letters.concat(letters2, characters);
  }
  else if (confirmNum && confirmLower) {
    userChoice = numbers.concat(letters);
  }
  else if (confirmNum && confirmUpper) {
    userChoice = numbers.concat(letters2);
  }
  else if (confirmNum && confirmChar) {
    userChoice = numbers.concat(characters);
  }
  else if (confirmLower && confirmUpper) {
    userChoice = letters.concat(letters2);
  }
  else if (confirmLower && confirmChar) {
    userChoice = letters.concat(characters);
  }
  else if (confirmUpper && confirmChar) {
    userChoice = letters2.concat(characters);
  }
  else if (confirmNum) {
    userChoice = numbers;
  }
  else if (confirmLower) {
    userChoice = letters;
  }
  else if (confirmUpper) {
    userChoice = letters2;
  }
  else if (confirmChar) {
    userChoice = characters;
  }
  var generatedPassword = "";
  for (var i = 0; i < enter; i++) {
    generatedPassword += userChoice[Math.floor(Math.random() * userChoice.length)];
    console.log(generatedPassword);
  }
  return generatedPassword;
}
