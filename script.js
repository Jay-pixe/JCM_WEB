document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});


///this start the slide share

// script.js

// script.js

let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    const radioButtons = document.querySelectorAll('.dot');
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('click', () => currentSlide(index + 1));
    });

    slideInterval = setInterval(showSlides, 5000);
});


//About Us
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var leftContent = document.querySelector(".left-content");
        var rightContent = document.querySelector(".right-content");
        var section = document.querySelector(".section");

        var sectionPosition = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Adjust the trigger point as needed
        var triggerPoint = windowHeight * 0.6;

        if (sectionPosition.top < triggerPoint && sectionPosition.bottom >= triggerPoint) {
            leftContent.style.transform = "translateX(0)";
            leftContent.style.opacity = 1;

            rightContent.style.transform = "translateX(0)";
            rightContent.style.opacity = 1;
        } else {
            leftContent.style.transform = "translateX(-100%)";
            leftContent.style.opacity = 0;

            rightContent.style.transform = "translateX(100%)";
            rightContent.style.opacity = 0;
        }
    });
});

///why choose us

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

///explore our products
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function scrollToProducts() {
    var productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}


//Contact us

function submitForm(event) {
    event.preventDefault();

    // You can add your form submission logic here
    // For demonstration purposes, let's display an alert
    alert("Form submitted successfully!");
}


//product page the actual page named products
// You can add interactive features here
document.getElementById('buy-button').addEventListener('click', function() {
    alert('Product added to cart!'); // You can replace this with actual cart functionality
});
