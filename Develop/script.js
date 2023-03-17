// Assignment Code
// make a variable for all possible password characters

// all? symbols except for ' and " cause they're too annoying 
// I've got 19 symbols here
var sym = ["!", "@", "#","$", "%", "^", "&", "*", "(", ")", ",", "." ,"?" ,";" ,":", "-", "_", "+", "="]

// all lowercase letters I can use the uhhhhhhh toUpperCase() method to convert them to Upper case if I need to
// there are 26
var let = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

// all numbers there are 10 possibilities for numbers, I also don't think I need to make this becuase math.Floor(math.Rand() * 10) would return these but whatever 
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//variables
var eRand
var boolU
var boolL
var boolS
var boolN

var length
var pass =[]
// this little for loop works for putting all possible letters into the console, which is kind of pog
// for(let i = 0; i < 50; i++){
// console.log(let[Math.floor(Math.random() * 26)])
// console.log(let[Math.floor(Math.random() * 26)].toUpperCase())
// }
var i
function genRandy(i) {
  return Math.floor(Math.random() * i)
}


function generatePassword() {
  var length = parseInt(
    prompt("How many characters would you like in your password?")
  );

  if(Number.isNaN(length)) {
    alert("Please enter a number:")
    return null
  };

  if (length<8) {
    alert("Your password must be at least 8 characters long.")
    alert("Enter a number that is 8 or greater.")
    return null
  };

  if (length>128) {
    alert("Your password cannot be longer than 128 characters.")
    alert("Enter a number that is 128 or less.")
  };

  var boolU = confirm("Should your password contain Uppercase Letters?");

  var boolL = confirm("Should your password contain Lowercase Letters?");

  var boolS = confirm("Should your password contain Symbols?");

  var boolN = confirm("Should your password contain Numbers?");
  
  for(let i = 0; i < length;) {
    eRand = genRandy(4)

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
      pass.push(sym[genRandy(19)])
      i++}
  }

  return pass.join("")
}
//this works pretty well but it's possible that you could exclude required contents because it's completely random

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
