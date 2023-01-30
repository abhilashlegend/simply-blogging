const userData = [
    {
        id: 1,
        fullname: "Abhilash N",
        username: "admin",
        email: "abhilash@example.com",
        password: "123456789"
    }
];

const authorization = [
    {
        loggedIn: false,
        username: "",
        fullname: ""
    }
];


if(JSON.parse(window.localStorage.getItem("users")) === null){
    window.localStorage.setItem("users", JSON.stringify(userData));
};

window.localStorage.setItem("auth", JSON.stringify(authorization));

const verifyUserAuthorization = (username, password) => {
    const users = JSON.parse(window.localStorage.getItem("users"));
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    let authorized = false;
    users.forEach(user => {
        if(username == user.username && password == user.password){
           
            auth.forEach(data => {
                data.loggedIn = true;
                data.username = user.username;
                data.fullname = user.fullname;
            })
            window.localStorage.setItem("auth", JSON.stringify(auth));
            authorized = true;
        } else {
            authorized = false;
        }
    });
    return authorized;
}

const signinBtn = document.getElementById("signin");

signinBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    let formIsValid = true;

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    formIsValid = checkRequiredInput(username);
    formIsValid = checkRequiredInput(password);
    
    if(formIsValid){
       
        const loggedIn = verifyUserAuthorization(username.value, password.value);

        let message = '';
        if(loggedIn === true){
            message = "Login Successfull";
            location.replace("/index.html");
            alert(message);
        } else {
            message = "Invalid username or password";
            alertMessage("error", message);
        }
    }
    
    
})

const alertMessage = (type, message) => {
    let alertbg = "";
    const alert = document.querySelector(".alert");
    if(type == "error"){
        alert.classList.remove("alert-success");
        alertbg = "alert-danger";
    } else {
        alert.classList.remove("alert-danger");
        alertbg = "alert-success";
    }

    
    alert.classList.remove("hide");
    alert.classList.add('show');
    alert.classList.add(alertbg);
    messageEle = document.getElementById("messagebox");
    messageEle.innerHTML = message;
    
}



const signUpBtn = document.getElementById("signupBtn");
signUpBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    let formIsValid = true;

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    formIsValid = checkRequiredInput(fullname);
    formIsValid = checkRequiredInput(email) && checkEmailInput(email);
    formIsValid = checkRequiredInput(username);
    formIsValid = checkRequiredInput(password);
    formIsValid = checkRequiredInput(confirmPassword) && checkConfirmPassword(password, confirmPassword);

    if(formIsValid){
        const users = JSON.parse(window.localStorage.getItem("users"));
        const newid = generateUniqueId(users);
        newuser = [
            ...users,
            {
            id: newid,
            fullname: fullname.value,
            username: username.value,
            email: email.value,
            password: password.value
        }];
        window.localStorage.setItem("users", JSON.stringify(newuser));
        alert("Thank you for registration");
    }
})