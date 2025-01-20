document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    // Toggle between login and signup forms
    document.getElementById('login-toggle').addEventListener('click', function() {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
      this.classList.add('active');
      document.getElementById('signup-toggle').classList.remove('active');
    });
  
    document.getElementById('signup-toggle').addEventListener('click', function() {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
      this.classList.add('active');
      document.getElementById('login-toggle').classList.remove('active');
    });
  
    // Form Validation
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value.trim();
  
      // Simple email and password validation
      if (!isValidEmail(email)) {
        displayError('login-email-error', 'Please enter a valid email address.');
        return;
      }
  
      // Password length check
      if (password.length < 6) {
        displayError('login-password-error', 'Password must be at least 6 characters long.');
        return;
      }
  
      // Clear errors and submit the form (for demonstration purposes)
      clearError('login-email-error');
      clearError('login-password-error');
      alert('Login successful!'); // Replace with actual login logic
      this.reset(); // Clear form fields
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value.trim();
      const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
  
      // Simple email and password validation
      if (!isValidEmail(email)) {
        displayError('signup-email-error', 'Please enter a valid email address.');
        return;
      }
  
      // Password length check
      if (password.length < 6) {
        displayError('signup-password-error', 'Password must be at least 6 characters long.');
        return;
      }
  
      // Password match check
      if (password !== confirmPassword) {
        displayError('signup-confirm-password-error', 'Passwords do not match.');
        return;
      }
  
      // Clear errors and submit the form (for demonstration purposes)
      clearError('signup-email-error');
      clearError('signup-password-error');
      clearError('signup-confirm-password-error');
      alert('Signup successful!'); // Replace with actual signup logic
      this.reset(); // Clear form fields
    });
  
    // Function to validate email format
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Function to display error message
    function displayError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  
    // Function to clear error message
    function clearError(id) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  });
  