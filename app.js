function ValidateEmail() {
    var err;
    var u_email = document.getElementById("u_email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(u_email.value)) {
        err = document.getElementById("er_msg");
        err.innerHTML = "Valid Format..!!";
        err.style.color = "green";
        u_email.style.border = "2px solid green";
    }
    else {
        err = document.getElementById("er_msg");
        err.innerHTML = "Invalid Format..!!";
        err.style.color = "red";
        u_email.style.border = "2px solid red";
    }
}

function ValidatePass() {
    var err;
    var pass = document.getElementById("pass");
    var numberCheck = /[0-9]/;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (pass.value.length < 6) {
        err = document.getElementById("er_msg1");
        err.innerHTML = "Atleast 6 Characters Long..!!";
        err.style.color = "red";
        pass.style.border = "2px solid red";
    }
    else if (!pass.value.match(letterNumber)) {
        err = document.getElementById("er_msg1");
        err.innerHTML = "Must Contain Letters & Numbers Only..!!";
        err.style.color = "red";
        pass.style.border = "2px solid red";
    }
    else if (pass.value[0].match(numberCheck)) {
        err = document.getElementById("er_msg1");
        err.innerHTML = "Must Start With Letter Only..!!";
        err.style.color = "red";
        pass.style.border = "2px solid red";
    }
    else {
        err = document.getElementById("er_msg1");
        err.innerHTML = "Valid Password..!!";
        err.style.color = "green";
        pass.style.border = "2px solid green";
    }
}

function signup() {
    var email = document.getElementById("u_email");
    var pwd = document.getElementById("pass");

    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", pwd.value);

    document.getElementById("msg").innerHTML = "Signed-Up Successfully..!!";
    email.value = pwd.value = "";
    document.getElementById("er_msg").innerHTML = document.getElementById("er_msg1").innerHTML = "";
}