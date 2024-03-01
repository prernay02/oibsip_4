const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add your login validation logic here
        // For simplicity, let's assume the login is always successful

        // Show the pop-up message
        showPopup("Login successful!");

        // You can redirect the user or perform other actions after a successful login
    });

    function showPopup(message) {
        // Create a pop-up element
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = message;

        // Append the pop-up element to the body
        document.body.appendChild(popup);

        // Remove the pop-up after a certain time (e.g., 3 seconds)
        setTimeout(function () {
            popup.remove();
        }, 3000); // Adjust the time as needed
    }

    // Add your other JavaScript logic for handling the toggle and other functionalities
});


document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector('.form-container.sign-up form');

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add your registration logic here
        // For simplicity, let's assume the registration is always successful

        // Show the pop-up message
        showPopup("Account created successfully!");

        // You can redirect the user or perform other actions after successful registration
    });

    function showPopup(message) {
        // Create a pop-up element
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = message;

        // Append the pop-up element to the body
        document.body.appendChild(popup);

        // Remove the pop-up after a certain time (e.g., 3 seconds)
        setTimeout(function () {
            popup.remove();
        }, 3000); // Adjust the time as needed
    }

    // Add your other JavaScript logic for handling the toggle and other functionalities
});
