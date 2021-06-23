// view password when click in the password icon
document.getElementById("toggle").addEventListener("click", function(e) {

    var pwd = document.getElementById("password");
    if(pwd.getAttribute("type")=="password"){
        pwd.setAttribute("type", "text");
    } else {
        pwd.setAttribute("type", "password");
    }

});

// view confirm password when click on the confirm password icon
document.getElementById("cfmtoggle").addEventListener("click", function(e) {

    var cfmpwd = document.getElementById("cfmpassword");
    if(cfmpwd.getAttribute("type")=="password"){
        cfmpwd.setAttribute("type", "text");
    } else {
        cfmpwd.setAttribute("type", "password");
    }

});

// check empty string and validate pwd and cfmpwd. (Password matching)
document.querySelector('.btnRegister').onclick = function(){
    var fullname = document.querySelector('.name').value;
    var username = document.querySelector('.username').value;
    var password = document.querySelector('.password').value;
    var cfmPassword = document.querySelector('.cfmpassword').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if(fullname + username + password + cfmPassword == ""){
        alert("Please fill in the required details.");
        return false;
    }

    if(fullname == ""){
        alert("Please enter your full name.");
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

    if(cfmPassword == ""){
        alert("Confirm Password field is empty. Please enter your confirm password.");
        return false;
    }

    if(password != cfmPassword){
        alert("Sign Up unsuccessful, password mismatch detected. Please try again!");
        return false;
    }

    if(!username.match(regexEmail)){
        alert("Invalid email format for username.");

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

// direct user to Login Page
document.getElementById("btnSignIn").onclick = function(){
    location.href = "log-in.html";
};
