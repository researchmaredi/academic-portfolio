/* assets/js/custom.js */
document.addEventListener('DOMContentLoaded', function() {
    // Select all links that contain ".pdf" in the URL
    var links = document.querySelectorAll('a[href*=".pdf"]');
    
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        // Optional: Add a visual indicator that it's a download
        // link.style.cursor = "alias"; 
    });
    
    console.log("Custom JS loaded: " + links.length + " PDF links updated.");
});