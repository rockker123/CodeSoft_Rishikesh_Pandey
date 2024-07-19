document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust scroll position if you have a fixed header
                behavior: 'smooth'
            });
        });
    });

    // Form submission alert
    const contactForm = document.querySelector('.contact form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
            contactForm.reset(); // Reset form after submission
        } else {
            alert('Please fill in all fields before submitting the form.');
        }
    });
});
