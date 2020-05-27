# homeworkweek3

## General

The purpose of this webpage was to develop a password generator for new and current employees. This would assist in creating a strong randomly generated password to increase security.

## Summary

I was given a webpage that displayed what would become a password generator. I began by making sure the page did not prompt the the function, but instead, the button created in the html file did. I did this by setting a "onclick" class that connected with the var generatepassword in the JS file. From here it was setting up the basic framework to see if the button worked. I set an action of confirm to see if the button worked. From there I connected the confirm to a prompt of asking the employee of how many characters they would like their password to be. After this process, the code became a little difficult to process. I needed to make sure that the function I was writing would be able to make sense within the broswer.

I decided to go with a "while loop" in order to give the employee multiple chances to create a password and only break the loop if the employee decided to cancel the process. This became much more difficult when it came time to identifying a null input. The issue was that, even though the employee selected to leave the prompt blank or use a incorrect value, the code would continue to ask the employee what type of charaters they wanted and the code would only stop if the user canceled the prompts. I was finally able to solve this issue by inserting a break in the last "else if" statement that stated if the prompt was null or blank, to inform the user the password cannot be created. Once this loop was fixed, I added a second while loop, but this time it focused on the options the employee had chosen. This became an issue when I tried collecting the information the employee had selected.

I was finally able to solve this issue by utilizing "if" statements only and making sure that "charCheck" and "checkLength" were true in order to begin the randomization process. Once this issue had been resolved, I utilized a "for" loop and math function to generate and randomize the employee's selection. I made sure to add "document.getElementById("password").value = pass" in order to connect both loops and display the randomized password in the text field.

The Employee will now be able to select a password with a character length between 8 and 128 characters. They will have the option to choose from lowercase, uppercase, numeric and/or special characters. Employee will be asked to select a minimum of one character type in order for their password to be generated. Upon following these prompts, the employee will end up with a randomly generated password that they can now utilize towards their work.
