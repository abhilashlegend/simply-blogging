

document.addEventListener("DOMContentLoaded", function() {
    const profile = getProfile();
    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    profile.forEach(user => {
        fullname.value = user.fullname;
        username.value = user.username;
        email.value = user.email;
    })
});