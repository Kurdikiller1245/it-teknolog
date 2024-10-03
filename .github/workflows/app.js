// Basic interaction for the static site
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Update message on button click
    document.getElementById('change-text-btn').addEventListener('click', function() {
        welcomeMessage.innerText = "You've clicked the button!";
    });
});
