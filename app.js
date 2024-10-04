console.log("Testing");


// Arrays
var userName = [];
var userMail = [];
var userPass = [];
var count = 0;

// Sign Up 
function sign(event){
    event.preventDefault();
    // fetch Data 
    var signName = document.getElementById("signName").value;
    var signMail = document.getElementById("signMail").value;
    var signPass = document.getElementById("signPass").value;

    // lowerCase
    var lowerName = signName.toLowerCase();
    var lowerMail = signMail.toLowerCase();
    var lowerPass = signPass.toLowerCase();

    //Push into Arrays
    userName.push(lowerName);
    userMail.push(lowerMail);
    userPass.push(lowerPass);

    //logss
    console.log(userName);
    console.log(userMail);
    console.log(userPass);

    //count for loop
    count += 1;
    console.log(count);
    
};

//<button><a href="./homepage.html">Home Page</a></button>

// login
var target = document.getElementById("target");
function log(event){
    event.preventDefault();
    var logMail = document.getElementById("logMail").value; 
    var logPass = document.getElementById("logPass").value;
    for(var i = 0 ; i <  count ; i++){
        console.log(i);
        if(logMail === userMail[i] && logPass === userPass[i]){
            target.innerHTML += `<button><a href="./homepage.html">Home Page</a></button>`
        }
        else{
            alert("Enter Correct Email and Password.")
        };
    };
};