container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showhidepw"),
    pwField = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


signUp.addEventListener("click", function (event) {
    event.preventDefault();
    container.classList.add("active");
});
login.addEventListener("click", function (event) {
    event.preventDefault();
    container.classList.remove("active");
})

function loginValidation() {
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/

    if (email == "" || !regEmail.test(email)) {
        alert("Enter Correct Email!");
        email.focus();
        return false;
    } if (password == "") {
        alert("Enter Correct Password!");
        password.focus();
        return false;
    } else {
        alert("Login Successful!")
    }
}

function signUpValidation() {
    let name = document.forms.signUp.name.value;

    let email = document.forms.signUpForm.email.value;

    let password = document.forms.signUpForm.password.value;

    let confirmpsw = document.forms.signUpForm.confirmpsw.value;

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/
    let regName = /\d+/g;

    if (name == "" || regName.test(name)) {
        alert('Please enter a valid Name');
        name.focus();
        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        alert('Please enter a Valid Email Address');
        email.focus();
        return false;
    }
    if (password == "" || !regName.test(password)) {
        alert("please enter correct password");
        password.focus();
        return false;
    }
    if (confirmpsw == "" || !regName.test(confirmpsw)) {
        alert("please confirm your password");
        confirmpsw.focus();
        return false;
    }
}