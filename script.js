// Assignment Code

// Var creations 
var allowableCharacters = "";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*()_-+={[}];:,<.>/?";
var upperCaseOption;
var numbersOption;
var addUpperCase;
var password;
var passwordLength;
var addNumbers;
var specialCharactersOption;
var addSpecialCharacters;
var lowerCaseOption;
var addLowerCase

// Get uppercase response from user 
function getUpperCaseOption() {
  var upperCaseOption = confirm( "Would you like to include upper case characters in your password?");
  return upperCaseOption;
}

function addUpperCase() {
  if (upperCaseOption) {
    allowableCharacters += upperCaseCharacters;
    return allowableCharacters;
  }
}

// Get lowercase response from user 
function getLowerCaseOption() {
  var lowerCaseOption = confirm( "Would you like to include lower case characters in your password? (Note: Letter Characters must be included in passcode: if you selected 'cancel' for upper case, it will include lowecase letters regardless of response.)");
  return lowerCaseOption;
}

function addLowerCase() {
  if (lowerCaseOption) {
    allowableCharacters += lowerCaseCharacters;
    return allowableCharacters;
  }
}

// Get numerical option from user 
function getNumbersOption() {
  var numbersOption = confirm("Would you like to include numerals in your password?");
  return numbersOption;
}

function addNumbers() {
  if (numbersOption) {
    allowableCharacters += numbers;
    return allowableCharacters;
  }
}

// Get special character from user 
function getSpecialCharactersOption() {
  var specialCharactersOption = confirm("Would you like to include special characters in your password?");
  return specialCharactersOption;
}

function addSpecialCharacters() {
  if (specialCharactersOption) {
    allowableCharacters += specialCharacters;
    return allowableCharacters;
  }
}

// Get password length from user 
function getPasswordLength() {
  var passwordLength = prompt("How many characters would you like in your password (8-128)?");
  while (8 > passwordLength || passwordLength > 128) {
    // Give an alert if the character length is too small or too large 
    alert("OOPS!TRY AGAIN 🙄 Your password must contain at least 8 characters and cannot exceed 128 characters!");
    passwordLength = prompt ("How many characters would you like in your password?");
  }
  return passwordLength; 
}

// Math function that allows the computor to generate a random password 
function getRandomCharacter(string) {
  var randomIndex = Math.floor(Math.random() * allowableCharacters.length);
  return allowableCharacters[randomIndex];
}

function generatePassword(passwordLength) {
  var output = "";
  for (var i = 0; i < passwordLength; i++) {
    output += getRandomCharacter(allowableCharacters);
  }
  return output;
}

// reference the #generate element 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  allowableCharacters ="";
  passwordLength = "";
  upperCaseOption = "";
  lowerCaseOption = "";
  numbersOption = "";
  password = "";
  upperCaseOption = getUpperCaseOption();
  lowerCaseOption = getLowerCaseOption();
  allowableCharacters = addUpperCase();
  numbersOption = getNumbersOption();
  allowableCharacters = addNumbers();
  specialCharactersOption = getSpecialCharactersOption();
  allowableCharacters = addSpecialCharacters();
  passwordLength = getPasswordLength();
  password = generatePassword(passwordLength);

  // var password = generatePassword(); Ignore 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

