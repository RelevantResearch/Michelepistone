document.getElementById("subscribe-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const emailInput = document.getElementById("mce-EMAIL");
    const errorMessage = document.getElementById("error-message");
    const emailValue = emailInput.value.trim();
    
    // Regular expression for validating email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email is valid
    if (!emailPattern.test(emailValue)) {
        errorMessage.style.display = "block"; // Show error message
        emailInput.setAttribute("aria-invalid", "true"); // Set aria-invalid to true
    } else {
        errorMessage.style.display = "none"; // Hide error message
        emailInput.setAttribute("aria-invalid", "false"); // Set aria-invalid to false

        // You can add your form submission logic here
        alert("Email submitted: " + emailValue);
        // Example: Perform an AJAX request to submit the email
    }
});
