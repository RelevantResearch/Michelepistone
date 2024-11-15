// Function to validate the form before submission
function validateForm(event) {
    // Prevent form submission until validation is done
    event.preventDefault();
    
    // Get the values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let valid = true;

    // Clear previous errors
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function (msg) {
        msg.style.display = 'none';
    });

    // Validate Name
    if (name === '') {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    }

    // Validate Message
    if (message === '') {
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        document.getElementById('mc-embedded-subscribe-form').submit();
    }
}
