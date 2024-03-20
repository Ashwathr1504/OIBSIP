document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Your authentication logic here (for demo purposes, let's check for a hardcoded username and password)
  if (username === 'user' && password === 'password') {
    // Redirect to a dashboard or authenticated page
    window.location.href = 'dashboard.html';
  } else {
    // Display error message
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
});
