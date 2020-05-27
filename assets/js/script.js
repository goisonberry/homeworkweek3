// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Asking employee if they would like to generate a password.
  var generatePassword = confirm("Would you like to generate a password?");
  // If "true", the function will ask to choose between 8 to 128 characters.
  if (generatePassword === true) {
    var checklength = false;
    // The beginning of the first loop.
    while (checklength == false) {
      // Employee selects the total number of characters they wish to have.
      var passwordLength = prompt(
        "Please choose the number of characters you wish your password to be. Password needs to be between 8 to 128 characters."
      );
      // Code will see if the Employee chose between 8 and 128 characters.
      if (passwordLength > 7 && passwordLength < 129) {
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
        // Member will get an "Invalid Entry" alert if they choose any character other than a number.
        if (!passwordLength.match(/^[0-9]+$/));
        {
          alert("Invalid Entry");
        }
      }
      // Employee will get an alert stating that password cannot be generated if they hit 'cancel' or leave prompt blank.
      else if (passwordLength == null || passwordLength == "") {
        alert("Cannot generate password");
        break;
      }
      // Alert Employee receives when they wish to not continue selecting a password length.
      else {
        alert("Cannot generate a password.");
      }
      // End of first while loop.

      // Begin Character Check 'while' loop for Employee to selet types of charcaters they want in the passwrod.
      var charCheck = true;

      while (charCheck == true && checklength == true) {
        // Employee is asked if they want lowercase characters in their password. Function needs to remember Employee's choice.
        var lowercaseChar = confirm(
          "Would you want any lowercase characters in your password?"
        );

        // Employee is asked if they would like uppercase characters in their password. Funtion needs to remember Employee's choice.

        var uppercaseChare = confirm(
          "Would you like any UPPERCASE characters in your password?"
        );

        // Employee is asked if they would like numeric characters in their password. Function needs to remember Employee's choice.

        var numberChar = confirm(
          "Would you like numeric characters in your password?"
        );

        // Employee is asked if they would like numeric characters in their passwrod. Function needs to remember Employee's choice. Ends process and generates password based on Employee's choices.

        var specialChar = confirm(
          "Would you like special characters in your password?"
        );
        // Code will see if the statements were true or false in order to determine if the password has the correct requirements.
        if (
          lowercaseChar != true &&
          uppercaseChare != true &&
          numberChar != true &&
          specialChar != true
        ) {
          // Employee will get this message if they selected "cancel" to all the character types.
          var stop = confirm(
            "You must select at least one character type. Try again?"
          );
          // Emplyee will get alert stating that password cannot be generated if employee does not want to try again.
          if (stop == false) {
            alert("Cannot generate password.");
            break;
          }
        }
        // Code is set to identify employee's choices and feed into the randomization math function.
        else {
          var pass = "";
          var str = "";
          charCheck = false;
          if (lowercaseChar == true) {
            str += "abcdefghijklmnopqrstuvwxyz";
          }
          if (uppercaseChare == true) {
            str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          }
          if (numberChar == true) {
            str += "0123456789";
          }
          if (specialChar == true) {
            str += "~!@#$%^&*()_-+={}|[];:,./<>?";
          }
          // Random passwrod is generated based on the employee's choices above.
          for (i = 1; i <= passwordLength; i++) {
            var char = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(char);
          }
          // Displays the result of the radnomization on the webpage.
          document.getElementById("password").value = pass;
        }
      }
    }
  }
  // Alert Employee receives if they do not want to initially generate a password.
  else {
    alert("Cannot generate password.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
