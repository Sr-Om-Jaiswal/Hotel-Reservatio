 // Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('.btn.btn-warning.btn-lg.btn-block.mt-3').addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.querySelector('input[placeholder="Your full Name"]').value;
    let email = document.querySelector('input[placeholder="Your Email id"]').value;
    let query = document.querySelector('textarea[placeholder="Enter your query"]').value;

    if (name === "" || email === "" || query === "") {
        alert("Please fill all the fields");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
    } else {
        alert("Form submitted successfully");
        // Here you can write code to submit the form data to the server
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Navbar Style on Scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
