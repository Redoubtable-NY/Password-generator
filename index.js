const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// console.log(characters.length)

let codeOne = "";
let codeTwo = "";
//document.getElementById You need these to write your code to the HTML
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function characterSelector() {
    let randomPicker = Math.floor(Math.random() * characters.length);
    return randomPicker
};

function codeGenerator() {
    for ( i = 0; i < 15; i++ ){
        codeOne += characters[characterSelector()]
        codeTwo += characters[characterSelector()]
    };
    console.log(codeTwo)
    console.log(codeOne)
    passwordOne.innerText = codeOne
    passwordTwo.innerText = codeTwo
    
    // clears the value of the code variables at the end of the function
    codeTwo = "" 
    codeOne = ""
};

function codeGrabberOne() { // function allows me to copy the value of the pw1 to clipboard
    var lockdownOne = document.getElementById("password-one");

    lockdownOne.textContent
    // lockdownOne.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(lockdownOne.textContent);

    alert("Copied the text: " + lockdownOne.textContent);
}

function codeGrabberTwo() { // function allows me to copy the value of the pw2 to clipboard
    var lockdownTwo = document.getElementById("password-two");

    lockdownTwo.textContent
    // lockdownTwo.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(lockdownTwo.textContent);

    alert("Copied the text: " + lockdownTwo.textContent);
}

// codeGenerator()