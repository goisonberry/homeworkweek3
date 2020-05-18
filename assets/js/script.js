// Assignment Code
// var generateBtn = document.querySelector("#generate");
// Confirming if Employee woul d like to generate a password.
// var generatePassword = confirm("Would you like to generate a password?");
// Alerts Employee that they will need to select a password length.
// alert("You will need to select the length of your password.");
// Prompts Employee choose the number of characters.
// var passwordLength = prompt(
//  "Choose how long you want your password to be. Choose between 8 to 128 characters."
// );
// Alerts Employee that they will need to choose at least one type of character
// alert(
//  "You will need to select at least one lowercase, uppercase, numbers or special characters."
//);
// Cofirms with employee if they woud like lowercase characters.
// var lowercaseChar = confirm("Would you like to have lowercase characters?");
// Confirms with employee if they would like uppercase characters.
// var uppercaseChare = confirm("Would you like to have UPPERCASE characters?");
// Confirm with employee if they would like numeric characters.
// var numberChar = confirm("Would you like to have numeric characters?");
// Confirm with employee if they would like special characters.
// var specialChar = confirm("Would you like to have special characters?");

function generatePassword() {
  alert("This Works");
}

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
