//Start working code
//Sets variables that will later be used in prompts/confirms
var enter;
var confirmNum;
var confirmLower;
var confirmUpper;
var confirmChar;
var userChoice;

//Character variables that will be used to generate password
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

//Grabs button element and sets it to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password generator
function generatePassword() {
  //Prompt that asks user for desired password length
  enter = parseInt(prompt("Please enter desired password length. Must be between 8 and 128 characters."));
  //Error message if a user doesn't enter a value
  if (!enter) {
    alert("Please enter a value.");
  } 
  //Error message if value doesn't fall between 8 and 128
  else if (enter < 8 || enter > 128) {
    alert("Password must be between 8 and 128 characters.");
  } 
  //Asks user which criteria they want to include
  else {
    confirmNum = confirm("Include numbers?");
    confirmLower = confirm("Include lowercase letters?");
    confirmUpper = confirm("include uppercase letters?");
    confirmChar = confirm("Include special characters?");
  };
  //Error message if user declines all criteria
  if (!confirmNum && !confirmLower && !confirmUpper && !confirmChar) {
    userChoice = alert("Please choose at lease one criteria.");
  } 
  //Four positive responses
  else if (confirmNum && confirmLower && confirmUpper && confirmChar) {
    userChoice = numbers.concat(letters, letters2, characters);
  }
  //Three positive responses
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
  //Two positive respones
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
  //One positive response
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
  //Placeholder to be concatinated with randomly selected characters
  var generatedPassword = "";
  //Randomly selects characters for password based on specified length (enter) and concatinates them using the above placeholder
  for (var i = 0; i < enter; i++) {
    generatedPassword += userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  //Return writes password thanks to writePassword funtion
  return generatedPassword;
}
