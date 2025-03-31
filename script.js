// Add any JavaScript here for basic interactivity, like form validation,
// image slideshows, or simple animations.

// Example:  Basic Form Validation (Contact Form)

function openNav() {
  document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidePanel").style.width = "0";
}

const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault(); // Prevent form submission
    }
  });
}

// Example: Simple Image Hover Effect (adjust selectors as needed)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.opacity = 0.8; // Example: Dim on hover
  });
  item.addEventListener('mouseleave', () => {
    item.style.opacity = 1;
  });
});