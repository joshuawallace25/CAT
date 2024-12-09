document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById("name").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Clear any existing error messages
    errorMessage.textContent = "";

    // Validate name
    if (!nameInput) {
        errorMessage.textContent = "Name cannot be empty.";
        return;
    }

    // Validate password
    if (passwordInput.length < 6) {
        errorMessage.textContent = "Password should be longer than six characters.";
        return;
    }

    // If both validations pass
    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "green";
    // Optionally, proceed with form submission or other logic
});
