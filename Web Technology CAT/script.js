document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
   
    errorMessage.textContent = "";
  
  
    if (!nameInput) {
      errorMessage.textContent = "Name cannot be empty.";
      return;
    }
  

    if (passwordInput.length < 6) {
      errorMessage.textContent = "Password should be longer than six characters.";
      return;
    }
  
  
    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "green";
   
  });
  