// Assignment Code
// make a variable for all possible password characters

// all? symbols except for ' and " cause they're too annoying 
// I've got 19 symbols here
var sym = ["!", "@", "#","$", "%", "^", "&", "*", "(", ")", ",", "." ,"?" ,";" ,":", "-", "_", "+", "="]

// all lowercase letters I can use the toUpperCase() method to convert them to Upper case if I need to
// there are 26
var let = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

//variables
var musCon = []
var musConLen
var eRand
var boolU
var boolL
var boolS
var boolN
var symLen = sym.length
var length
var pass = []
var i

function genRandy(i) {
  return Math.floor(Math.random() * i)
}


function generatePassword() {
  pass = []

  var length = parseInt(
    prompt("How many characters would you like in your password?") //gets the number of characters and saves it to a variable
  );

  if(Number.isNaN(length)) {
    alert("Please enter a number") // if length is not saved as a number this ends the function
    return null
  };

  if (length<8) {
    alert("Your password must be at least 8 characters long.") // if length is too short this ends the function and returns null
    alert("Enter a number that is 8 or greater.")
    return null
  };

  if (length>128) {
    alert("Your password cannot be longer than 128 characters.") // if length is too long this ends the function and returns null
    alert("Enter a number that is 128 or less.")
    return null
  };

  var boolU = confirm("Should your password contain Uppercase Letters?"); // lines 53-59 save booleans to ask about uppercase, lowercase, symbols and numbers

  var boolL = confirm("Should your password contain Lowercase Letters?");

  var boolS = confirm("Should your password contain Symbols?");

  var boolN = confirm("Should your password contain Numbers?");

  if (boolU) { //lines 61-72 create a 1-4 long array that contains at least of each required character type.
    musCon.push(let[genRandy(26)].toUpperCase())
  } 
  if (boolL) {
    musCon.push(let[genRandy(26)])
  }
  if (boolS) {
    musCon.push(sym[genRandy(symLen)])
  } 
  if (boolN) {
    musCon.push(genRandy(10))
  }
  if (boolU === false && boolL === false && boolS === false && boolN === false) { // this checks if the user selected no for each of the confirms on 53-59, sends an alert and returns null
    alert("Your password must contain at least one type of character")
    return null
  }
  musConLen = musCon.length

  for(let i = musConLen; i < length;) { // i is set to musConLen so that when musCon is added to the end the password is the correct length
    eRand = genRandy(4) // random number to select a random character type, if the random number selects a unselected character type the for loop resets without incrementing.

    if (eRand == 0 && boolN == true){
      pass.push(genRandy(10))
      i++}

    if (eRand == 1 && boolL == true)  {
      pass.push(let[genRandy(26)])
      i++}

    if (eRand == 2 && boolU == true)  {
      pass.push(let[genRandy(26)].toUpperCase())
      i++}

    if (eRand == 3 && boolS == true) {
      pass.push(sym[genRandy(symLen)])
      i++}
  }
  pass = pass.concat(musCon) // ataches the musCon and password arrays
  return pass.join("")  // joining with an empty string turns an array into a string with no commas seperating elements
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
