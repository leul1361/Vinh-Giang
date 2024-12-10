// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const header = document.querySelector('header');
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    const buttons = document.querySelectorAll('.b-1, .b-2');
    const navLinks = document.querySelectorAll('.nav-links a');
    const highlightedText = document.querySelectorAll('.high, .high2');

    // Mobile menu functions with smooth transitions
    function showSidebar() {
        const sidebar = document.querySelector('.show');
        sidebar.style.display = 'flex';
        sidebar.style.opacity = '0';
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.index = '5';
        
        
        // Force reflow
        sidebar.offsetHeight;
        
        sidebar.style.transition = 'all 0.3s ease-in-out';
        sidebar.style.opacity = '1';
        sidebar.style.transform = 'translateX(0)';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.show');
        sidebar.style.transition = 'all 0.3s ease-in-out';
        sidebar.style.opacity = '0';
        sidebar.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300);
    }

    // Smooth scroll for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                hideSidebar(); // Close mobile menu if open
            }
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Header shadow on scroll
        if (scrolled > 20) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Parallax effect for hero section
        heroLeft.style.transform = `translateY(${scrolled * 0.2}px)`;
    });

    // Enhanced button interactions
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(2px) scale(1.05)';
            button.style.index = '1';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });

    

    // Initial animations
    const animateOnLoad = () => {
        heroLeft.style.opacity = '0';
        heroRight.style.opacity = '0';
        
        setTimeout(() => {
            heroLeft.style.transition = 'all 1s ease';
            heroRight.style.transition = 'all 1s ease';
            heroLeft.style.opacity = '1';
            heroRight.style.opacity = '1';
        }, 400);
    };

    // Run initial animations
    animateOnLoad();

    // Make global functions available
    window.showSidebar = showSidebar;
    window.hideSidebar = hideSidebar;
});

//script for the second page
/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const textArray = ["Keynote Speaker", "Communication Skills Coach", "Magician"];
    const typedTextSpan = document.querySelector(".typed-text");
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function typeText() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust typing speed here
      } else {
        setTimeout(eraseText, 2000); // Pause before erasing
      }
    }
  
    function eraseText() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed here
      } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(typeText, 500); // Pause before typing the next word
      }
    }
  
    typeText(); // Start the animation
  });
  

  //for third section
  document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const underline = card.querySelector('.underline');
            underline.style.width = '100%';
        });

        card.addEventListener('mouseleave', () => {
            const underline = card.querySelector('.underline');
            underline.style.width = '0';
        });
    });

    // Add animation classes on load
    const elementsToAnimate = [
        document.querySelector('.main-title'),
        document.querySelector('.video-card'),
        document.querySelector('.welcome-message'),
        ...featureCards,
        document.querySelector('.cta-section')
    ];

    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
        element.style.transitionDelay = `${index * 0.1}s`;

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    });
});


  //fourth section

  document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            title: "INTERNATIONAL KEYNOTE SPEAKER",
            description: "Inspiring over 100,000 people annually at 80 global events. Clients include Microsoft, Google, Commonwealth bank, Facebook and LinkedIn.",
            image: "./img/inner card image for 3rd section/screenshot (233).png"
        },
        {
            title: "STAGE Virtual Masterclass",
            description: "An immersive series of online classes teaching advanced communication. Learn to COMMUNICATE, CONNECT, and deliver with CLARITY through interactive online sessions.",
            image: "./img/inner card image for 3rd section/screenshot (234).png"
        },
        {
            title: "STAGE Academy",
            description: "7 modules, 50+ videos, 10+ hours of educational content. Acquire a comprehensive toolkit for both on-stage and off-stage communication excellence.",
            image: "./img/inner card image for 3rd section/screenshot (235).png"
        }
    ];
    const modal = document.getElementById('serviceModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const closeModal = modal.querySelector('.close-modal');

    function openModal(index) {
        const service = services[index];
        modalImage.src = service.image;
        modalImage.alt = service.title;
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        modal.style.display = 'block';
    }

    function closeModalHandler() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', () => {
            const index = service.dataset.index;
            openModal(index);
        });
    });

    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // Add smooth scroll for the contact button
    document.querySelector('.contact-now').addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add animation on scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stops observing once animation is applied
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });

    // Select all elements you want to animate
    const animatableElements = document.querySelectorAll('.cta, .service'); // Update selector if needed

    animatableElements.forEach(element => {
        element.classList.add('hidden'); // Add hidden class initially to all elements
        observer.observe(element);
    });

});
//

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector('.submit-button');
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Sending...</span>';

    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success message
        submitButton.innerHTML = '<span>Message Sent!</span>';
        submitButton.style.backgroundColor = '#4CAF50';
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = '<span>Submit Request</span>';
            submitButton.style.backgroundColor = '';
        }, 2000);

    } catch (error) {
        // Error handling
        submitButton.innerHTML = '<span>Error. Try Again</span>';
        submitButton.style.backgroundColor = '#f44336';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = '<span>Submit Request</span>';
            submitButton.style.backgroundColor = '';
        }, 2000);
    }
});

// Prevent form submission when reCAPTCHA is not checked
contactForm.addEventListener('submit', (e) => {
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        e.preventDefault();
        alert('Please complete the reCAPTCHA verification.');
    }
});


//sticky button script
//footer

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize particles on load
window.addEventListener('load', createParticles);



