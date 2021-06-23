// view password when click in the password icon
document.getElementById("toggle").addEventListener("click", function(e) {

    var pwd = document.getElementById("password");
    if(pwd.getAttribute("type")=="password"){
        pwd.setAttribute("type", "text");
    } else {
        pwd.setAttribute("type", "password");
    }

});

document.querySelector('.btnLogin').onclick = function(){
    var username = document.querySelector('.username').value;
    var password = document.querySelector('.password').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if(username + password == ""){
        alert("Please fill in the required details.");
        return false;
    }
    if(username == ""){
        alert("Please enter your username.");
        return false;
    }
    if(password == ""){
        alert("Password field is empty. Please enter your password.");
        return false;
    }

    if(!username.match(regexEmail)){
        alert("Invalid Email Format");

        if(!password.match(regexPassword)){
            alert("The password must have at least 8 characters, one uppercase, one lowercase and one symbol.");
            return false;
        }

        return false;
    } 

    if(!password.match(regexPassword)){
        alert("The password must have at least 8 characters, one uppercase, one lowercase and one symbol.");
        return false;
    }
    else {
        return true;
    }
};

// direct user to Register Page
document.getElementById("btnSignUp").onclick = function(){
    location.href = "register.html";
};