// Project Name: To-Do List Application
// Description: JavaScript functionality for the To-Do List application

// Get references to the form, input field, task list, and progress elements
const form = document.getElementById('todo-form'); // Form element for adding tasks
const input = document.getElementById('todo-input'); // Input field for entering tasks
const list = document.getElementById('todo-list'); // Unordered list to display tasks
const charCounter = document.getElementById('char-counter'); // Character counter element
const progressBar = document.getElementById('progress-bar'); // Progress bar element
const progressText = document.getElementById('progress-text'); // Text displaying progress percentage
const clearAllButton = document.getElementById('clear-all'); // Button to clear all tasks

// Display a greeting based on the time of day
function displayGreeting() {
  const hour = new Date().getHours(); // Get the current hour
  const greeting =
    hour < 12 ? 'Good Morning!' : // Morning greeting
    hour < 18 ? 'Good Afternoon!' : // Afternoon greeting
    'Good Evening!'; // Evening greeting
  document.getElementById('greeting').textContent = greeting; // Set the greeting text
}
displayGreeting(); // Call the function to display the greeting

// Update the character counter dynamically
input.addEventListener('input', function () {
  const maxLength = 50; // Maximum allowed characters
  const remaining = maxLength - input.value.length; // Calculate remaining characters
  charCounter.textContent = `${remaining} characters remaining`; // Update the counter text
});

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const task = input.value.trim(); // Get the input value and remove extra whitespace
  if (task === '') {
    // Check if the input is empty
    alert('Please enter a task!'); // Show an alert if no task is entered
    return; // Exit the function if input is empty
  }
  addTodo(task); // Call the function to add the task to the list
  input.value = ''; // Clear the input field after adding the task
  charCounter.textContent = '50 characters remaining'; // Reset the character counter
});

// Function to add a new task
function addTodo(taskText) {
  const li = document.createElement('li'); // Create a new list item (li) element
  li.textContent = taskText; // Set the task text

  // Add an event listener to toggle the "completed" class when the task is clicked
  li.addEventListener('click', function () {
    li.classList.toggle('completed'); // Toggle the "completed" class to mark/unmark the task
    updateProgress(); // Update the progress bar
  });

  // Create a delete button for the task
  const deleteBtn = document.createElement('button'); // Create a new button element
  deleteBtn.textContent = 'X'; // Set the button text to "X" (delete icon)

  // Add an event listener to handle task deletion
  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click event from propagating to the parent (li)
    li.classList.add('removing'); // Add the "removing" class for the fade-out animation
    setTimeout(() => {
      li.remove(); // Remove the task (list item) from the list
      updateProgress(); // Update the progress bar
    }, 300); // Wait for the animation to finish
  });

  li.appendChild(deleteBtn); // Append the delete button to the list item
  list.appendChild(li); // Append the list item to the unordered list
  updateProgress(); // Update the progress bar
}

// Update the progress bar
function updateProgress() {
  const totalTasks = list.children.length; // Get the total number of tasks
  const completedTasks = list.querySelectorAll('.completed').length; // Get the number of completed tasks
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100; // Calculate the progress percentage
  progressBar.value = progress; // Update the progress bar value
  progressText.textContent = `${Math.round(progress)}% completed`; // Update the progress text
}

// Clear all tasks
clearAllButton.addEventListener('click', function () {
  if (confirm('Are you sure you want to clear all tasks?')) {
    // Confirm before clearing all tasks
    list.innerHTML = ''; // Remove all tasks from the list
    updateProgress(); // Reset the progress bar
  }
});

// Secret action: Double-click to clear all tasks
document.body.addEventListener('dblclick', () => {
  if (confirm('Double-click detected! Clear all tasks?')) {
    list.innerHTML = ''; // Clear all tasks
    updateProgress(); // Reset the progress bar
  }
});

// Generate a random color
function getRandomColor() {
  const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#85E3FF', '#B9FBC0']; // Array of predefined colors
  return colors[Math.floor(Math.random() * colors.length)]; // Return a random color from the array
}

// Form validation
const validationForm = document.getElementById('validation-form'); // Form for validating email and password
const emailInput = document.getElementById('email-input'); // Input field for email
const passwordInput = document.getElementById('password-input'); // Input field for password
const emailError = document.getElementById('email-error'); // Error message for email validation
const passwordError = document.getElementById('password-error'); // Error message for password validation

validationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission
  let isValid = true; // Flag to track if the form is valid

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.'; // Display error message for invalid email
    isValid = false; // Set the form as invalid
  } else {
    emailError.textContent = ''; // Clear the error message if the email is valid
  }

  // Password validation
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.'; // Display error message for short password
    isValid = false; // Set the form as invalid
  } else {
    passwordError.textContent = ''; // Clear the error message if the password is valid
  }

  if (isValid) {
    alert('Form is valid!'); // Show a success message if the form is valid
  }
});

// Image gallery hover effect
const galleryImages = document.querySelectorAll('.gallery-image'); // Select all images in the gallery
galleryImages.forEach((img) => {
  img.addEventListener('click', () => alert(`You clicked on ${img.alt}`)); // Display an alert with the image's alt text when clicked
});

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn'); // Select all tab buttons
const tabContents = document.querySelectorAll('.tab-content'); // Select all tab content sections
tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabContents.forEach((content) => content.classList.remove('active')); // Hide all tab content
    document.getElementById(btn.dataset.tab).classList.add('active'); // Show the content for the clicked tab
  });
});


