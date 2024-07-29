


// SLIDER
function injectStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .video-industry {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            overflow: hidden;
        }

        .video-industry::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.2), rgba(255,255,255,0.1));
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 1;
        }

        .video-industry:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .video-industry:hover::before {
            opacity: 1;
        }

        .video-industry iframe, .video-industry img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
            transition: transform 0.4s ease;
        }

        .video-industry:hover iframe, .video-industry:hover img {
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .video-industry {
                padding-bottom: 75%;
            }
            .card-body {
                padding: 1.5rem;
            }
        }
        
        .card-text, .card-body ul {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #444;
        }
        .card-body ul {
            padding-left: 1.8rem;
            font-size: 1rem;
        }
        .card-body li {
            font-size: 1rem;
            margin-bottom: 0.7rem;
            position: relative;
        }
        .card-body li::before {
            color: #7209d4;
            font-weight: bold;
            position: absolute;
            left: -1.2rem;
        }
        @media (max-width: 768px) {
            .card-title {
                font-size: 1.8rem;
            }
            .card-text, .card-body ul {
                font-size: 1rem;
            }
        }
      
    `;
    document.head.appendChild(styleElement);
}

// Call this function when your page loads or when you're adding the content
injectStyles();

const cardContents = {
    hospitality: `
    <div class="row g-0">
    <div class="col-md-6">
        <div class="card-body">
            <h2 class="card-title fw-bold mb-4">Hospitality Solutions</h2>
            <p class="card-text mb-4">Discover innovative solutions tailored for the hospitality industry. Our comprehensive suite of tools and services helps you enhance guest experiences, streamline operations, and boost your bottom line. Key features include:</p>
            <ul class="mb-4">
                <li>Smart reservation systems</li>
                <li>Contactless check-in and check-out</li>
                <li>Integrated property management</li>
                <li>Guest analytics and personalization</li>
            </ul>
            <p class="card-text mb-4">Transform your hospitality business with our cutting-edge technology and industry-specific expertise.</p>
            <div class="button-wrapper">
            <a href="#" class="btn-custom btn-sm mt-3">Explore Solutions</a>
        </div>
            </div>
    </div>
    <div class="col-md-6">
    <div class="card-body d-flex align-items-center justify-content-center h-100">
        <div class="video-industry position-relative overflow-hidden">
            <div class="video-overlay"></div>
            <iframe class="rounded-video" src="https://www.youtube.com/embed/sjL6Gl6ZIqs" allowfullscreen allow="fullscreen"></iframe>
        </div>
    </div>
</div>
</div>
    `,
    manufacturing: `
        <div class="row g-0">
            <div class="col-md-6">
                <div class="card-body">
                    <h2 class="card-title fw-bold mb-4">Manufacturing Excellence</h2>
                    <p class="card-text mb-4">Elevate your manufacturing processes with our state-of-the-art solutions. Our integrated platform is designed to optimize production, increase efficiency, and drive innovation in your manufacturing operations. Key benefits include:</p>
                    <ul class="mb-4">
                        <li>Advanced production planning and scheduling</li>
                        <li>Real-time inventory management</li>
                        <li>Quality control and assurance systems</li>
                        <li>Predictive maintenance for equipment</li>
                    </ul>
                    <p class="card-text mb-4">Empower your manufacturing business with data-driven insights and cutting-edge automation technologies.</p>
                    <div class="button-wrapper">
                        <a href="#" class="btn-custom btn-sm mt-3">Discover More</a>
                    </div>
                    </div>
            </div>
            <div class="col-md-6">
                <div class="card-body d-flex align-items-center justify-content-center h-100">
                    <div class="video-industry position-relative overflow-hidden">
                        <img src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/700E4D82-4F55-4EE1-9B6CA0C194C84956/182DC208-2737-40B8-A720EEBF9FA9B88F/WebsiteJpg_XL-FMTEC_Main%20Visual_Red_Website.jpg" alt="Manufacturing Facility" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </div>
    `,
    // Add more content for other tabs here
    finance: `<div class="card-body"><h2 class="fw-bold mb-4">Bank & Finance Solutions</h2><p>Content for Bank & Finance...</p></div>`,
    hr: `<div class="card-body"><h2 class="fw-bold mb-4">Human Resource Solutions</h2><p>Content for Human Resource...</p></div>`,
    property: `<div class="card-body"><h2 class="fw-bold mb-4">Property Solutions</h2><p>Content for Property...</p></div>`,
    industry: `<div class="card-body"><h2 class="fw-bold mb-4">Industry Solutions</h2><p>Content for Industry...</p></div>`,
    hotel: `<div class="card-body"><h2 class="fw-bold mb-4">Hotel Solutions</h2><p>Content for Hotel...</p></div>`
};



function toggleCard(element, contentKey) {
    const contentCards = document.getElementById('contentCards');
    const tags = document.getElementsByClassName('tag-item');

    // Remove 'active' class from all tags
    for (let tag of tags) {
        tag.classList.remove('active');
    }

    // Add 'active' class to clicked tag
    element.classList.add('active');

    // Show appropriate content based on clicked tag
    contentCards.innerHTML = `
        <div class="card content-card mt-5">
            ${cardContents[contentKey]}
        </div>
    `;

    // Apply dark mode styles to the new content if dark mode is active
    if (document.body.classList.contains('dark-mode')) {
        applyDarkModeToIndustryContent();
    }
}


// Initialize with the first tab (Hospitality)
document.addEventListener('DOMContentLoaded', (event) => {
    const firstTab = document.querySelector('.tag-item');
    toggleCard(firstTab, 'hospitality');
});



// MARQUEE SECTION
function toggleCard(element, contentKey) {
    const contentCards = document.getElementById('contentCards');
    const tags = document.getElementsByClassName('tag-item');

    // Remove 'active' class from all tags
    for (let tag of tags) {
        tag.classList.remove('active');
    }

    // Add 'active' class to clicked tag
    element.classList.add('active');

    // Show appropriate content based on clicked tag
    contentCards.innerHTML = `
        <div class="card content-card mt-5">
            ${cardContents[contentKey]}
        </div>
    `;
}

// Initialize with the first tab (Hospitality)
document.addEventListener('DOMContentLoaded', (event) => {
    const firstTab = document.querySelector('.tag-item');
    toggleCard(firstTab, 'hospitality');
});



// STATIC LOGO DISPLAY
document.addEventListener('DOMContentLoaded', function() {
    const partners = {
        cloud: [
            'assets/img/logos/azure.png',
            'assets/img/logos/biz.png',
            'assets/img/logos/google.png',
            'assets/img/logos/hp.png',
            

        ],
        tech: [
            'assets/img/logos/aruba.png',
            'assets/img/logos/comms.png',
            'assets/img/logos/enterprise.png',
            'assets/img/logos/micro.png',
            'assets/img/logos/oracle.png'
        ]
    };

    function setupStaticLogos(containerId, logos) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear existing content
        
        logos.forEach(logo => {
            const item = document.createElement('div');
            item.className = 'logo-item';
            const img = document.createElement('img');
            img.src = logo;
            img.alt = 'Partner Logo';
            item.appendChild(img);
            container.appendChild(item);
        });
    }

    setupStaticLogos('cloudPartnersContainer', partners.cloud);
    setupStaticLogos('technologyPartnersContainer', partners.tech);
});

////NAV
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const fullScreenSidebar = document.querySelector('.full-screen-sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleSidebar() {
        navToggle.classList.toggle('open');
        fullScreenSidebar.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    }

    navToggle.addEventListener('click', toggleSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth < 992) {
                toggleSidebar();
            }
            // Add smooth scrolling to target section here
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar shrink on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 1rem';
            navbar.querySelector('.navbar-brand img').style.maxWidth = '50%';
        } else {
            navbar.style.padding = '1rem';
            navbar.querySelector('.navbar-brand img').style.maxWidth = '100%';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.tags-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'none';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        e.preventDefault(); // Prevent default behavior
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault(); // Prevent default behavior
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Existing toggleCard function and other JavaScript...
});



// DARK MODE
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggleNav = document.getElementById('darkModeToggleNav');
    const darkModeToggleSidebar = document.getElementById('darkModeToggleSidebar');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        updateDarkModeIcons(isDarkMode);
    }

    

    // Function to update icons
    function updateDarkModeIcons(isDarkMode) {
        const icons = document.querySelectorAll('#darkModeToggleNav i, #darkModeToggleSidebar i');
        icons.forEach(icon => {
            if (isDarkMode) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });
    }

    // Initialize dark mode
    function initDarkMode() {
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
        }
        updateDarkModeIcons(isDarkMode);
    }
    

    // Add event listeners
    darkModeToggleNav.addEventListener('click', toggleDarkMode);
    darkModeToggleSidebar.addEventListener('click', toggleDarkMode);

    // Initialize
    initDarkMode();

    // Handle mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const fullScreenSidebar = document.querySelector('.full-screen-sidebar');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        fullScreenSidebar.classList.toggle('open');
    });
});



// SIDEBAR
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const fullScreenSidebar = document.querySelector('.full-screen-sidebar');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('open');
        fullScreenSidebar.classList.toggle('open');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });
        
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});

// TESTIMONIAL

// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialCarousel = document.querySelector('.testimonial-carousel');
//     const indicatorsContainer = document.querySelector('.indicators');
//     let currentIndex = 0;
//     let intervalId;
  
//     // Testimonial data
//     const testimonials = [
//         {
//             name: "Raymond Galario",
//             location: "Sydney, Australia",
//             image: "assets/img/team/avatar4.jpg",
//             quote: "Exceptional service! The team went above and beyond to meet our needs. Highly recommended for anyone looking for quality and professionalism.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         },
//         {
//             name: "Jane Doe",
//             location: "New York, USA",
//             image: "assets/img/team/avatar5.jpg",
//             quote: "I'm thoroughly impressed with the level of expertise and dedication. The solutions provided have significantly improved our business operations.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         },
//         {
//             name: "John Smith",
//             location: "London, UK",
//             image: "assets/img/team/avatar2.jpg",
//             quote: "Working with this team has been a game-changer for our company. Their innovative approach and attention to detail are unmatched.",
//             videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         }
//     ];
    
//     // Create testimonial elements
//     // Create testimonial elements
//     testimonials.forEach((testimonial, index) => {
//         const testimonialElement = document.createElement('div');
//         testimonialElement.classList.add('testimonial');
//         if (index === 0) testimonialElement.classList.add('active');
    
//         testimonialElement.innerHTML = `
//             <img src="${testimonial.image}" alt="${testimonial.name}" class="client-image">
//             <h3>${testimonial.name}</h3>
//             <p class="location">${testimonial.location}</p>
//             <blockquote class="testimonial-quote">
//                 <span class="quote-mark">&ldquo;</span>
//                 ${testimonial.quote}
//                 <span class="quote-mark">&rdquo;</span>
//             </blockquote>
//             <p class="video-link">
//                 <a href="#" class="open-video" data-video-url="${testimonial.videoUrl}">
//                     <i class="fas fa-play-circle"></i> Watch Video Testimonial
//                 </a>
//             </p>
//         `;
//         testimonialCarousel.appendChild(testimonialElement);

//         // Create indicator
//         const indicator = document.createElement('div');
//         indicator.classList.add('indicator');
//         if (index === 0) indicator.classList.add('active');
//         indicator.addEventListener('click', () => goToSlide(index));
//         indicatorsContainer.appendChild(indicator);
//     });

//     const testimonialElements = document.querySelectorAll('.testimonial');
//     const indicators = document.querySelectorAll('.indicator');


    
//     function goToSlide(index) {
//         testimonialElements[currentIndex].classList.remove('active');
//         indicators[currentIndex].classList.remove('active');
//         currentIndex = index;
//         testimonialElements[currentIndex].classList.add('active');
//         indicators[currentIndex].classList.add('active');

//         // Animate indicator width
//         indicators.forEach((indicator, idx) => {
//             if (idx === currentIndex) {
//                 indicator.style.width = '50px';
//             } else {
//                 indicator.style.width = '30px';
//             }
//         });
//     }

//     function nextSlide() {
//         let nextIndex = (currentIndex + 1) % testimonialElements.length;
//         goToSlide(nextIndex);
//     }

//     function startAutoSlide() {
//         intervalId = setInterval(nextSlide, 10000); // 10 seconds
//     }

//     function stopAutoSlide() {
//         clearInterval(intervalId);
//     }

//     // Initialize
//     startAutoSlide();

//     // Pause auto-slide on hover
//     testimonialCarousel.addEventListener('mouseenter', stopAutoSlide);
//     testimonialCarousel.addEventListener('mouseleave', startAutoSlide);

 
 

//     // Video popup functionality
//     document.addEventListener('click', function(e) {
//         if (e.target && e.target.closest('.open-video')) {
//             e.preventDefault();
//             const videoUrl = e.target.closest('.open-video').getAttribute('data-video-url');
//             openVideoPopup(videoUrl);
//         }
//     });

//     function openVideoPopup(videoUrl) {
//         const popup = document.createElement('div');
//         popup.className = 'video-popup';
//         popup.innerHTML = `
//             <div class="video-popup-content">
//                 <button class="close-popup">&times;</button>
//                 <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
//             </div>
//         `;
//         document.body.appendChild(popup);

//         popup.querySelector('.close-popup').addEventListener('click', () => {
//             document.body.removeChild(popup);
//         });

//         popup.addEventListener('click', (e) => {
//             if (e.target === popup) {
//                 document.body.removeChild(popup);
//             }
//         });
//     }
// });
  
// FLOATING ORBS
document.addEventListener('DOMContentLoaded', function() {
    const orbsContainer = document.querySelector('.floating-orbs');
    const orbColors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
    const numOrbs = 5;

    for (let i = 0; i < numOrbs; i++) {
        const orb = document.createElement('div');
        orb.classList.add('orb');
        
        // Increased size range from 20-80px to 40-100px
        const size = Math.random() * 60 + 40; // Random size between 40px and 100px
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // ... rest of the code remains the same ...
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        
        orb.style.backgroundColor = orbColors[Math.floor(Math.random() * orbColors.length)];
        
        orb.style.animationDelay = `${Math.random() * 2}s`;
        orb.style.animationDuration = `${15 + Math.random() * 5}s`;

        orbsContainer.appendChild(orb);
    }
});


// TEXT SCRAMBLE
// Number animation function
function scrambleText(element, finalValue) {
    let current = 0;
    const chars = '0123456789';
    const duration = 1000; // Animation duration in milliseconds
    const fps = 60; // Frames per second
    const increment = finalValue / (duration / 1000 * fps);

    const animate = () => {
        current = Math.min(current + increment, finalValue);
        const displayValue = Math.floor(current);

        element.innerText = displayValue.toString().split('').map((char, index) => {
            if (index < displayValue.toString().length - 1) {
                return finalValue.toString()[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

        if (current < finalValue) {
            requestAnimationFrame(animate);
        } else {
            element.innerText = finalValue + '+';
        }
    };

    animate();
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Handle scroll and animate numbers
function handleScroll() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((statNumber) => {
        if (isElementInViewport(statNumber) && !statNumber.classList.contains('animated')) {
            const finalValue = parseInt(statNumber.getAttribute('data-target'));
            scrambleText(statNumber, finalValue);
            statNumber.classList.add('animated');
        }
    });
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);

// Check on scroll
window.addEventListener('scroll', handleScroll);



document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-testimonial-video');
    const videoOverlay = document.getElementById('video-overlay');
    const closeButton = document.getElementById('close-video');
    const video = document.getElementById('popup-video');

    playButton.addEventListener('click', function() {
        videoOverlay.style.display = 'flex';
        video.play();
    });

    closeButton.addEventListener('click', function() {
        videoOverlay.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    videoOverlay.addEventListener('click', function(e) {
        if (e.target === videoOverlay) {
            videoOverlay.style.display = 'none';
            video.pause();
            video.currentTime = 0;
        }
    });
});