// Handle Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your feedback!');
  this.reset();
});

// Handle Suggestion Form Submission
document.getElementById('suggestionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your suggestion!');
  this.reset();
});