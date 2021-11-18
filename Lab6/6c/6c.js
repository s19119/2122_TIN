// eslint-disable-next-line no-unused-vars
function validateForm(){
    var validForm=true;
    var username = document.getElementById("username");
    if(username.value == ''){
        validForm=false;
        username.value="Must be not null";
        username.style.color="red";
    }
    var email = document.getElementById("email");
    var emailValid=validateEmail(email.value);
    if(!emailValid){
        validForm=false;
        email.style.color="red";
    }
    if(validForm){
        document.getElementById("form").submit();
    }
    return validForm;
}

function validateEmail(email){
    const regex=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(email);
}