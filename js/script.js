
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.querySelectorAll('.slideshow img');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = 'block';  
  setTimeout(carousel, 2000);
}

// Validasi Contact Us
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === '' || email === '' || message === '') {
    alert('Harap lengkapi semua kolom formulir.');
    return;
  }
  
  if (!validateEmail(email)) {
    alert('Format email tidak valid.');
    return;
  }
  
  // Jika formulir valid,
  alert('Formulir berhasil dikirim!');
  // Clear form
  contactForm.reset();
});

// Fungsi untuk validasi email
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

