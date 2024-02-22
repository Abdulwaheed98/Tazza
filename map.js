// Example using JavaScript
function navigateToPage(page) {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        // Load new content or navigate to the new page
        // For demonstration, just changing the innerHTML of #app
        document.getElementById('app').innerHTML = 'New Content Here';
        
        // Remove the fade-out class and add the fade-in class
        document.body.classList.remove('fade-out');
        document.body.classList.add('fade-in');
    }, 500); // Adjust the timeout to match the animation duration
}

// Call the function when navigating
navigateToPage('newPage.html');
