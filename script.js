// ===== FORM VALIDATION =====
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting immediately

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  let errors = [];

  // Validate username
  if (username === "") {
    errors.push("Username cannot be empty.");
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Invalid email address.");
  }

  // Validate password length
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show result
  if (errors.length > 0) {
    message.textContent = errors.join(" ");
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
    // Here you could send the form data with fetch() or AJAX
  }
});

// ===== INTERACTIVE FEATURE 1: Click Counter =====
let count = 0;
document.getElementById("countButton").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// ===== INTERACTIVE FEATURE 2: Show/Hide Message =====
document.getElementById("toggleButton").addEventListener("click", function() {
  const hiddenMsg = document.getElementById("hiddenMessage");
  if (hiddenMsg.style.display === "none") {
    hiddenMsg.style.display = "block";
  } else {
    hiddenMsg.style.display = "none";
  }
});
