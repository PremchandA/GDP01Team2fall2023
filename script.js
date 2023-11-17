function authenticate(username, password) {
    // Perform authentication (this is where you would typically make a server request)
    // For demonstration purposes, let's consider a simple username/password check
    if (username === "user" && password === "password") {
        return true;
    } else {
        return false;
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (authenticate(username, password)) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again. or contact Admin");
    }
}
