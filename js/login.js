document.getElementById('signin-btn').addEventListener('click', function () {
    const username = document.getElementById('username-field').value;
    const password = document.getElementById('password-field').value;
    if (username === "admin" && password === "admin123") {
        window.location.href = "/home.html";
    }
    else {
        alert("Invalid username or password");
        document.getElementById("username-field").value = "";
        document.getElementById("password-field").value = "";
    }
})