// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Feature dropdown functionality
    const featureDropdown = document.querySelector('.feature-dropdown');
    featureDropdown.addEventListener('click', function() {
        // Add dropdown menu functionality here
        console.log('Feature dropdown clicked');
    });

    // Analyze button functionality
    const analyzeBtn = document.querySelector('.analyze-btn');
    const urlInput = document.querySelector('input[type="text"]');

    analyzeBtn.addEventListener('click', function() {
        const url = urlInput.value.trim();
        
        if (!url) {
            alert('Please enter a valid URL');
            return;
        }

        if (!isValidURL(url)) {
            alert('Please enter a valid URL format');
            return;
        }

        // Here you would typically make an API call to analyze the URL
        console.log('Analyzing URL:', url);
        // Add loading state
        analyzeBtn.textContent = 'Analyzing...';
        analyzeBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            analyzeBtn.textContent = 'Analyze Now';
            analyzeBtn.disabled = false;
            alert('Analysis complete! (This is a demo)');
        }, 2000);
    });

    // URL validation function
    function isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Add input placeholder animation
    const input = document.querySelector('input');
    input.addEventListener('focus', function() {
        this.placeholder = '';
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.placeholder = 'Example: https://contentflow.com';
        }
    });
});