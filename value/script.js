// Function to check if the user is logged in
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
        // Store the current page the user is trying to access
        sessionStorage.setItem("intendedPage", window.location.pathname);

        // Redirect to login page if not authenticated
        window.location.href = "../login/index.html";
    }
}

// Call this function on page load
window.onload = checkAuthentication;

// Function to log out the user
function logout() {
    sessionStorage.removeItem("isAuthenticated");
    window.location.href = "../login/index.html"; // Redirect to login page after logout
}
