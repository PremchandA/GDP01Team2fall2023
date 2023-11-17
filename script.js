function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication (this is where you would typically make a server request)
    // For demonstration purposes, let's consider a simple username/password check
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
