document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "username" && password === "password") {
            alert("Login successful!");
            window.location.href = "https://oasisinfobyte.com/";
        } else {
            document.getElementById("error-message").innerText = "Invalid username or password.";
        }
    });
