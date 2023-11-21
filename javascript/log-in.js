document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const googleLoginButton = document.getElementById("google-login-button");


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "user" && password === "password") {
            // Successful login
            errorMessage.textContent = "Login successful!";
            errorMessage.style.color = "green";

            setTimeout(function () {
                window.location.href = "Bienvenido.html";
            }, 2000);
        } else {
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.style.color = "red";
        }
    });

    const GOOGLE_CLIENT_ID = '';

document.getElementById('google-login').addEventListener('click', () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${window.location.origin}/auth/google/callback&response_type=code&scope=email&access_type=offline`;
});


});