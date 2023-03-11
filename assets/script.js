// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
    // bools for prompts to change

    var lowerbool = false; 
    var upperbool = false;
    var numberbool = false;
    var specialbool = false; 
  
    // keys for our list to be randomized once added to options
  
    var charoptions = "";
    var pass = "";
    
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = lowercase.toUpperCase();
    var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // needed to delimit \" and \\
    var number = "1234567890";



  // using parseInt (not covered in class yet) to convert string to num 
  var passLength = parseInt(prompt("Please type a number between 8 and 128 for the length."))

  // Included isNaN() to check that type is number
  if(passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("The number you entered was too high or too low!");
    
  // recursively returns and calls password to start over again  
    return generatePassword();
  }
    

  else {
     lowerbool = confirm("Do you want want lowercase letters?");
     upperbool = confirm("Do you want uppercase letters?");
     numberbool = confirm("Howabout numbers?");
     specialbool  = confirm("Symbols?");

     //need these all as if statements and not if else because we arent switching we can check off multiple things here.
     if (lowerbool){
        charoptions += lowercase; 
     }
    
     if (upperbool){
        charoptions += uppercase; 
      }

     if (numberbool){
      charoptions += number; 
     }

     if (specialbool){
      charoptions += special; 
     }


    //  check for empty string, reset program if none is selected.
    if (charoptions.length === 0){
      alert("You must select at least one character type. Starting Over.");
      return generatePassword();
    }

    // Now we need to randomize and push strings to another string. 
    for (var i = 0; i < passLength; i++){
      var randomSelect = Math.floor(Math.random() * charoptions.length);
      pass += charoptions[randomSelect];
    }
  }

  return pass;
}



// MOCK UP
// 1. PROMPT FOR minimum 8 characters and max 128.
    // Sets length.
// 2. PROMPTS FOR CRITERIA: Special Cases, Numbers, capital letters, lowercase letters (MUST HAVE ONE checked.)
    // a. must be checkbox w bools.
// 3. Must use randomizer with content to create program.
  // a. make one huge string and use math random used in class.
// 4. Present it on webpage