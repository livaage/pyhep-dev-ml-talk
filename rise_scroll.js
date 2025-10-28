// Auto-scroll RISE slides to top when navigating

(function() {
    console.log('RISE scroll-to-top initialized');
    
    function scrollToTop() {
        const currentSlide = document.querySelector('.reveal .slides section.present');
        if (currentSlide) {
            currentSlide.scrollTop = 0;
            console.log('Scrolled slide to top');
        }
    }
    
    // Wait for Reveal.js to be ready
    function init() {
        if (window.Reveal) {
            console.log('Reveal.js found, attaching listeners');
            
            // Listen for slide changes
            Reveal.addEventListener('slidechanged', function(event) {
                console.log('Slide changed, scrolling to top');
                scrollToTop();
            });
            
            // Scroll on initial load
            Reveal.addEventListener('ready', function(event) {
                console.log('Reveal ready, scrolling to top');
                scrollToTop();
            });
        } else {
            console.log('Reveal.js not ready yet, retrying...');
            setTimeout(init, 100);
        }
    }
    
    // Start initialization
    init();
})();
