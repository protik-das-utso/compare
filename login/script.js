const users = [
    { username: "user1", password: "pass1" },
    { username: "2", password: "2" },
    { username: "user3", password: "pass3" },
];

function login() {
    let enteredUsername = document.getElementById("username").value.trim();
    let enteredPassword = document.getElementById("password").value.trim();

    const user = users.find(
        (user) =>
            user.username === enteredUsername &&
            user.password === enteredPassword
    );

    if (user) {
        // Mark the user as authenticated
        sessionStorage.setItem("isAuthenticated", "true");

        // Check if the user was trying to access a protected page before login
        const intendedPage = sessionStorage.getItem("intendedPage");

        if (intendedPage) {
            sessionStorage.removeItem("intendedPage");
            window.location.href = intendedPage; // Redirect to the intended page after login
        } else {
            window.location.href = "../index.html"; // Default redirect to the main page
        }
    } else {
        document.getElementById("loginResult").innerText =
            "Invalid Username or Password";
    }
}
