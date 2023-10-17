const form = document.getElementById("form");
const email = document.getElementById("input-email");
const errorSpan = document.getElementById("span-error");
const signUp = document.getElementById("sign-up-div");
const successfull = document.getElementById("successfull-div");
const emailSpan = document.getElementById("email-address-span");
const dismissButton = document.getElementById("dismiss-button");

form.addEventListener("submit", e => {
    e.preventDefault
    var emailValue = email.value.trim();
    var regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailValue === ""){
        errorFunc("Email required");
    }else if(!emailValue.match(regexPattern)){
        errorFunc("Valid email required");
    }
    else{
        successFunc();
    }
});

dismissButton.addEventListener("click", e => {
    e.preventDefault
    signUp.style.display = "flex";
    successfull.style.display = "none";
});

function errorFunc(message){
    errorSpan.style.display = "block";
    errorSpan.innerText = message;
    email.className += "error";
    email.style.border = "solid 1px hsl(4, 100%, 67%)";
};

function typing(){
    errorSpan.style.display = "none";
    email.style.border = "solid 1px hsl(231, 7%, 60%)";
    if(email.classList.contains("error")){
        email.classList.remove("error");
    }; 
};

function successFunc(){
    var emailValue = email.value.trim();
    emailSpan.innerText = emailValue;
    signUp.style.display = "none";
    successfull.style.display = "block";    
};