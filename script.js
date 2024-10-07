window.onload = function() {
    const img = document.getElementById('img');
    const blurredBackground = document.getElementById('blurred-background');
    const contentSections = document.querySelectorAll('.text-content'); // Changed to select paragraph containers

    // Add class to trigger the animation
    setTimeout(function() {
        if (img) img.classList.add('animate-img');
        if (blurredBackground) blurredBackground.style.opacity = '0';

        // Delay for the logo shrink animation
        setTimeout(function() {
            contentSections.forEach(section => {
                section.classList.remove('content-hidden');
                section.classList.add('content-visible');
            });
        }, 1000); // Adjust the timing based on your animation duration
    }, 1000); // Delay of 1 second before starting the image animation
};



document.addEventListener('DOMContentLoaded', function() {
    const moreLink = document.getElementById('more-link');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Add event listener to the "More" link
    moreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent following the "#" link

        // Toggle the dropdown visibility
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!moreLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none'; // Close dropdown when clicking outside
        }
    });
});