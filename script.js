// Updates progress bar when button is clicked
function updateProgress() {
  const progress = document.getElementById("progressBar");
  const text = document.getElementById("progressText");
  
  // Increase progress by 10%, but cap at 100%
  if (progress.value < 100) {
    progress.value += 10;
    text.textContent = `${progress.value}% Completed`;
  } else {
    alert("You've already completed this course!");
  }
}