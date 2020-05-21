// Assignment Code
// var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Asking employee if they would like to generate a password.
  var generatePassword = confirm("Would you like to generate a password?");
  // If "true", the function will ask to choose between 8 to 128 characters.
  if (generatePassword === true) {
    // Employee selects the total number of characters they wish to have.

    var checklength = false;

    while (checklength == false) {
      var passwordLength = prompt(
        "Please choose the number of characters you wish your password to be. Password needs to be between 8 to 128 characters."
      );
      if (passwordLength > 7 && passwordLength < 129) {
        // Employee is asked if they want lowercase characters in their password. Function needs to remember Employee's choice.
        var lowercaseChar = confirm(
          "Do you want any lowercase characters in your password?"
        );
        checklength = true;
      }
      // Alert Employee receives when they type a number less than 8.
      else if (passwordLength < 8 && passwordLength != null) {
        alert("Password must be at least 8 characters long.");
      }
      // Alert Employee receives when they type a number greater than 128.
      else if (passwordLength > 128) {
        alert("Password must be less than 129 characters long.");
      }
      // Alert Employee receives if they did not type a number.
      else if (passwordLength != null) {
        if (!passwordLength.match(/^[0-9]+$/));
        alert("Invalid Entry");
      } else if (passwordLength == null) {
        alert("Cannot generate password");
        break;
      }
      // Alert Employee receives when they wish to not continue selecting a password length.
      else {
        alert("Cannot generate a password.");
      }
    }
  }
  // Alert Employee receives if they do not want to initially generate a password.
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
  }
  // Employee is asked if they would like numeric characters in their passwrod. Function needs to remember Employee's choice. Ends process and generates password based on Employee's choices.
  if (numberChar === true) {
    var specialChar = confirm(
      "Would you like spceial characters in your password?"
    );
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
