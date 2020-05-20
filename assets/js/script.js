// Assignment Code
//var generateBtn = document.querySelector("#generate");

function generatePassword() {
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
  }

  // If Employee types a number between 8 and 128. Moves on to next next prompt.
  if (passwordLength > 7 && passwordLength < 129) {
    // Employee is asked if they want lowercase characters in their password. Function needs to remember Employee's choice.
    var lowercaseChar = confirm(
      "Do you want any lowercase characters in your password?"
    );
  }
  // Employee typed a number less than 8
  else if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
  }
  // Employee types a number greater than 128
  else if (passwordLength > 128) {
    alert("Password must be less than 129 characters long.");
  }
  // Employee did not type in a number
  else if (!passwordLength.match(/^[0-9]+$/) != null) {
    alert("Invalid Entry");
  }
  // Employee did not type anything
  else {
    alert("Cannot generate password.");
  }

  // Employee is asked if they would like uppercase characters in their password. Funtion needs to remember Employee's choice.
  if (lowercaseChar === true) {
    var uppercaseChare = confirm(
      "Would you like any UPPERCASE characters in your password?"
    );
  }
  // Employee is asked if they would like numeric characters in their password. Function needs to remember Employee's choice.
  if (uppercaseChare === true) {
    var numberChar = confirm(
      "Would you like numeric characters in your password?"
    );
    // Employee is asked if they would like numeric characters in their passwrod. Function needs to remember Employee's choice. Ends process and generates password based on Employee's choices.
    if (numberChar === true) {
      var specialChar = confirm(
        "Would you like spceial characters in your password?"
      );
    }
  }
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
