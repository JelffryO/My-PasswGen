// Assignment code here

// lower, upper, numbers, specialchar
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", ".", "/","<","?"];
// character array
var charlength = [];
// password array
var passchar = [];
// resetvalue
function reset() {
  charlength = [];
  passchar = [];
};

function criteria () {
  // password length 8 < 128
  charlength = window.prompt("How long would you like your password to be? \nPlease enter a number from 8 to 128:");
      if (charlength < 8 || charlength > 128 || isNaN(charlength) === true || charlength === "" || charlength === null || charlength === "null") {
          window.alert("Please enter a valid number from 8 to 128.");
          return getcharlength();
      }
  // lower 
    lowercaseValues = window.confirm("Would you like your password to include lowercase values?");
    if (lowercaseValues) {
      passchar = passchar.concat(lowerCase); 
    }
  // upper 
    uppercaseValues = window.confirm("Would you like to include uppercase values?");
    if (uppercaseValues) {
      passchar = passchar.concat(upperCase);
    }
  // numbers 
    numberValues = window.confirm("Would you like to include numbers?");
    if (numberValues) {
      passchar = passchar.concat(number);
    }
  // specialchar
    specialchar = window.confirm("Would you like to include special characters?");
    if (specialchar) {
      passchar = passchar.concat(specialCharacters);
    }
  };
 
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















