// Part 1: Event Handling //

// Button click event
document.getElementById("messageBtn").addEventListener("click", function() {
  document.getElementById("messageOutput").innerText = "Button clicked!";
});

// Mouseover event
document.getElementById("colorBox").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightblue";
});
document.getElementById("colorBox").addEventListener("mouseout", function() {
  this.style.backgroundColor = "lightgray";
});

// Keypress event
document.getElementById("keyInput").addEventListener("keyup", function(event) {
  document.getElementById("keyOutput").innerText = `You typed: ${event.key}`;
});


// Part 2: Interactive Elements //

// Light/Dark Mode Toggle
document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").innerText = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", function() {
  counter--;
  document.getElementById("counterValue").innerText = counter;
});


// Part 3: Form Validation //


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting
  let valid = true;

  // Name validation
  let name = document.getElementById("name").value;
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  let email = document.getElementById("email").value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password validation
  let password = document.getElementById("password").value;
  if (password.length < 6 || !/\d/.test(password)) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters and contain a number.";
    valid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").innerText = "Form submitted successfully!";
  } else {
    document.getElementById("formSuccess").innerText = "";
  }
});
