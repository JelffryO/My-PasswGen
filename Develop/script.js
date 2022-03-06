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
















