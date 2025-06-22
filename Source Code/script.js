// Simple client-side validation for demonstration
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  const errorMessages = this.querySelectorAll('.error-message');
  errorMessages.forEach(msg => {
    msg.textContent = '';
    msg.style.display = 'none';
  });

  let valid = true;

  // Validate Full Name
  const fullname = this.fullname.value.trim();
  if (fullname.length < 3) {
    showError(this.fullname, 'Full name must be at least 3 characters.');
    valid = false;
  }

  // Validate Email
  const email = this.email.value.trim();
  if (!validateEmail(email)) {
    showError(this.email, 'Please enter a valid email address.');
    valid = false;
  }

  // Validate Password
  const password = this.password.value;
  if (password.length < 6) {
    showError(this.password, 'Password must be at least 6 characters.');
    valid = false;
  }

  // Confirm Password
  const confirmPassword = this['confirm-password'].value;
  if (password !== confirmPassword) {
    showError(this['confirm-password'], 'Passwords do not match.');
    valid = false;
  }

  // Terms checkbox
  const terms = this.terms.checked;
  if (!terms) {
    showError(this.terms, 'You must agree to the terms.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

function showError(inputElement, message) {
  const formGroup = inputElement.closest('.form-group');
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
