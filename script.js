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
        // Store authentication flag in sessionStorage
        sessionStorage.setItem("isAuthenticated", "true");

        // Redirect to the main page
        window.location.href = "index.html";
    } else {
        document.getElementById("loginResult").innerText =
            "Invalid Username or Password";
    }
}

// Function to check if the user is logged in
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
        // Store the current page the user is trying to access
        sessionStorage.setItem("intendedPage", window.location.pathname);

        // Redirect to login page if not authenticated
        window.location.href = "login/index.html";
    }
}

// Call this function on page load
window.onload = checkAuthentication;

// Function to log out the user
function logout() {
    sessionStorage.removeItem("isAuthenticated");
    window.location.href = "login/index.html"; // Redirect to login page after logout
}




function showCurrentTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const dateString = `${day}:${month}:${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById(
        "currentTime"
    ).innerText = `Date: ${dateString} | Time: ${timeString}`;

    setTimeout(showCurrentTime, 1000);
}

function showResultPopup(content) {
    document.getElementById("result").innerHTML = content;
    document.getElementById("resultModal").style.display = "block";
}

function closeResultPopup() {
    document.getElementById("resultModal").style.display = "none";
}

function compareValues() {
    let a = document.getElementById("valueA").value.trim();
    let b = document.getElementById("valueB").value.trim();

    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText =
            "Please enter valid numbers";
        return;
    }

    // Show the loading section when "Get Now" is clicked
    document.getElementById("loading").style.display = "flex";

    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        let result = "";

        if (a > b) {
            result =
                `<span style="color: #FF0000; font-weight: bold;">Forecast > Previous</span><br><br>` +
                `USD/JPY = <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br>` +
                `USD/CAD= <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br>` +
                `USD/CHF= <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br><br>` +
                `GBP/USD= <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br>` +
                `EUR/USD= <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br>` +
                `AUD/USD= <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br><br>` +
                `<span style="color: #FFA500; font-weight: bold; font-size: 18px;">Use Only 5% Amount in Your Balance<br><span style="color: #00ff00;">If Lose 3 Minute Reverser.</span></span>`;
        } else if (b > a) {
            result =
                `<span style="color: #FF0000; font-weight: bold;">Forecast < Previous</span><br><br>` +
                `USD/JPY = <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br>` +
                `USD/CAD= <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br>` +
                `USD/CHF= <span style="color: #ff0000; font-weight: bold;">DOWN/PUT</span><br><br>` +
                `GBP/USD= <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br>` +
                `EUR/USD= <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br>` +
                `AUD/USD= <span style="color: #00ff00; font-weight: bold;">UP/CALL</span><br><br>` +
                `<span style="color: #FFA500; font-weight: bold; font-size: 18px;">Use Only 5% Amount in Your Balance<br><span style="color: #00ff00;">If Lose 3 Minute Reverser.</span></span>`;
        } else {
            result = "Both are the same";
        }

        showResultPopup(result);
    }, 2000); // 2 seconds delay for loading
}

function openHelpPopup() {
    document.getElementById("helpPopup").style.display = "block";
}

function closeHelpPopup() {
    document.getElementById("helpPopup").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    var modal = document.getElementById("helpPopup");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
