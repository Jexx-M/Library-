// Handle Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let response = await fetch("https://your-backend-url.com/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  let result = await response.json();
  alert(result.message);
  this.reset();
});

// Handle Suggestion Form Submission
document.getElementById('suggestionForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  let suggestion = document.getElementById('suggestion').value;

  let response = await fetch("https://your-backend-url.com/suggestion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ suggestion })
  });

  let result = await response.json();
  alert(result.message);
  this.reset();
});
