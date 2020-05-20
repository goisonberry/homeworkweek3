// Assignment Code
//var generateBtn = document.querySelector("#generate");
// Confirming if Employee woul d like to generate a password.
//var generatePassword = confirm("Would you like to generate a password?");
// Alerts Employee that they will need to select a password length.
//alert("You will need to select the length of your password.");
// Prompts Employee choose the number of characters.
//var passwordLength = prompt(
//"Choose how long you want your password to be. Choose between 8 to 128 characters."
//);
// Alerts Employee that they will need to choose at least one type of character
//alert(
////"You will need to select at least one lowercase, uppercase, numbers or special characters."
//);
// Cofirms with employee if they woud like lowercase characters.
//var lowercaseChar = confirm("Would you like to have lowercase characters?");
// Confirms with employee if they would like uppercase characters.
//var uppercaseChare = confirm("Would you like to have UPPERCASE characters?");
// Confirm with employee if they would like numeric characters.
//var numberChar = confirm("Would you like to have numeric characters?");
// Confirm with employee if they would like special characters.
//var specialChar = confirm("Would you like to have special characters?");

function generatePassword() {
  var check = false;

  while (check == false) {
    // Asking employee if they would like to generate a password.
    var generatePassword = confirm("Would you like to generate a password?");
    // If "true", the funtion will ask to choose 8 to 128 characters.
    if (generatePassword === true) {
      // Employee selects the total number of characters they wish to have
      var passwordLength = prompt(
        "Please choose the number of characters you wish your password to be. Password needs to be between 8 to 128 characters."
      );
    }
    // If not true, the prompts end.
    else {
      alert("Cannot generate password.");
      break;
    }

    // If Employee types a number between 8 and 128. Moves on to next next prompt.
    if (passwordLength > 7 && passwordLength < 129) {
      var lowercaseChar = confirm(
        "Do you want any lowercase characters in your password?"
      );
    }
    // Employee typed a number less than 8
    else if (passwordLength < 8) {
      alert("Passwrod must be at least 8 characters long.");
    }
    // Employee types a number greater than 128
    else if (passwordLength > 128) {
      alert("Password must be less than 129 characters long.");
    }
    // Employee did not type in a number
    else if (!passwordLength.match(/^[0-9]+$/) != null) {
      alert("Invalid Entry");
    }
  }
  // Employee did not type anything
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
