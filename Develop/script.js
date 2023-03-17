// Assignment Code

function generatePassword() {
  var length = parseInt(
    prompt("Yo Dawg, How many charactizzles you want up is hizzle")
  );

  if(Number.isNaN(length)) {
    alert("Hey What the flip?? that's whack enter a number, i'm returning NULL punk")
    return null
  }

  if (length<8) {
    alert("ooooo, sorry that's a little too small...")
    alert("try a number that's 8 or larger :^)")
    return null
  }

  return "nice"

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
