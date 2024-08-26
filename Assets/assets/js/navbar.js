 // Function to handle dropdown display
function handleDropdown(dropdownId, contentId) {
    const dropdown = document.getElementById(dropdownId);
    const megaDropdown = document.getElementById(contentId);
    let dropdownTimeout;

    function addArrowSpan() {
        if (!dropdown.querySelector('.dropdown-arrow')) {
            const arrowSpan = document.createElement('span');
            arrowSpan.className = 'dropdown-arrow';
            dropdown.appendChild(arrowSpan);
        }
    }

    function removeArrowSpan() {
        const arrowSpan = dropdown.querySelector('.dropdown-arrow');
        if (arrowSpan) {
            arrowSpan.remove();
        }
    }

    function closeOtherDropdowns() {
        document.querySelectorAll('.mega-dropdown').forEach(el => {
            if (el.id !== contentId) {
                el.style.display = 'none';
                const otherDropdown = el.previousElementSibling;
                if (otherDropdown) {
                    const otherArrowSpan = otherDropdown.querySelector('.dropdown-arrow');
                    if (otherArrowSpan) otherArrowSpan.remove();
                }
            }
        });
    }

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        closeOtherDropdowns();
        megaDropdown.style.display = 'block';
        addArrowSpan();
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            megaDropdown.style.display = 'none';
            removeArrowSpan();
        }, 100); // Reduced delay
    });

    megaDropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
    });

    megaDropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            megaDropdown.style.display = 'none';
            removeArrowSpan();
        }, 100); // Reduced delay
    });
}

// ... rest of the code remains the same

// Function to handle category selection
function handleCategories(containerSelector, detailsId, content) {
    const categories = document.querySelectorAll(`${containerSelector} .product-category`);
    const details = document.getElementById(detailsId);

    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            const productType = this.getAttribute('data-product');
            details.innerHTML = content[productType];
        });
    });

    // Initialize with first category content
    if (categories.length > 0) {
        const firstProductType = categories[0].getAttribute('data-product');
        details.innerHTML = content[firstProductType];
    }
}

// Solusi dropdown
handleDropdown('solutionsDropdown', 'solutionsDropdownContent');
handleCategories('#solutionsDropdownContent', 'product-details', {
    hms: `
        <div class="product-banner" style="background-image: url('assets/img/hotel.jpg');" onclick="navigateWithLoading('rhapsody-micro.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Hotel Management System</h2>
                <p class="product-banner-description">Streamline your hotel operations with our comprehensive management system.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Reservation Management</h4>
                <p>Efficiently manage bookings and reservations</p>
            </div>
            <div class="module">
                <h4>Front Desk Operations</h4>
                <p>Streamline check-in and check-out processes</p>
            </div>
            <div class="module">
                <h4>Housekeeping Management</h4>
                <p>Optimize room cleaning and maintenance</p>
            </div>
        </div>
    `,
    gcs: `
        <div class="product-banner" style="background-image: url('assets/img/gold.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Golf Course System</h2>
                <p class="product-banner-description">Supporting The Golfer’s Journey On and Off The Course.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Membership </h4>
                <p>Optimize tee time scheduling and bookings</p>
            </div>
            <div class="module">
                <h4>Golf Operations</h4>
                <p>Manage inventory and sales in your pro shop</p>
            </div>
            <div class="module">
                <h4>Tournament</h4>
                <p>Track course usage and optimize operations</p>
            </div>
        </div>
    `,
    hrs: `
        <div class="product-banner" style="background-image: url('assets/img/hr.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">HR System</h2>
                <p class="product-banner-description">To Effectively Manage Human Resource.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>HR Core</h4>
                <div class="bento-grid">
                    <div class="bento-item large">
                        <p class="feature-description" style="text-align: center; font-size: 1em;">
                            <strong style="display: block; margin-bottom: 2px;">HR operations</strong> <span style="display: block; width: 99%; margin: 0 auto;">with our integrated solution.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-user-tie"></i>
                        <span>Personnel</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-clock"></i>
                        <span>Attendance</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>Payroll</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-medkit"></i>
                        <span>Medical</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Loan</span>
                    </div>
                </div>
                <style>
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(3, 1fr);
                        gap: 8px;
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    /* Initial fade-in transition for bento items */
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    .bento-item {
                        background-color: #fafafa;
                        border: 1px solid #9054d081;
                        padding: 10px;
                        border-radius: 15px;
                        font-size: 0.7em;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        animation: fadeIn 0.5s ease-out forwards;
                        opacity: 0;
                        /* Add a noticeable shadow box */
                        box-shadow: 0 3px 1px rgba(0, 0, 0, 0.2);
                    }
                    .bento-item:hover {
                        transform: translateY(2px);
                        box-shadow: 0 1px 5px rgba(0,0,0,0.2);
                    }
                    .bento-item i {
                        font-size: 1.3em;
                        margin-bottom: 5px;
                        color: rgb(99, 50, 155);
                        animation: fadeIn 0.5s ease-out 0.2s forwards;
                        opacity: 0;
                    }
                    .bento-item span {
                        display: block;
                        line-height: 1.1;
                    }
                    .large {
                        grid-column: span 2;
                        grid-row: span 2;
                        font-size: 0.8em;
                    }
                </style>
            </div>
            <div class="module">
                <h4>HR Advance</h4>
                <div class="bento-grid" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: auto repeat(2, 1fr); max-width: 250px; margin: 0 auto;">
                    <div class="bento-item large" style="grid-column: 1 / -1;">
                        <p style="font-size: 1em;"><span style="font-weight: bold;">HR Advance</span>with our unified platform.</p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-user-plus"></i>
                        <span>Recruitment</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-briefcase"></i>
                        <span>Job Competency</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Training</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Performance</span>
                    </div>
                </div>
            </div>
            <div class="module">
                <h4>HR Mobile</h4>
               <div class="bento-grid">
                
                    <div class="bento-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Locations</span>
                    </div>
                       <div class="bento-item large" style="display: flex; align-items: center; justify-content: center; width: 94%; margin: 0 auto;">
                        <p class="feature-description" style="text-align: center; font-size: 0.9em; margin: 0;">
                            <strong style="display: block; margin-bottom: 2px;">Employee Self <br> Service</strong>
                            <span style="display: block; width: 80%; margin: 0 auto;">Empower HR with our ESS app.</span>
                        </p>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-eye"></i>
                        <span>Monitoring</span>
                    </div>
                    <div class="bento-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Request</span>
                    </div>
                    
                    <div class="bento-item">
                        <i class="fas fa-calendar-check"></i>
                        <span>Reminder</span>
                    </div>
                    
                    <div class="bento-item">
                        <i class="fas fa-bell"></i>
                        <span>Notification</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    pts: `
        <div class="product-banner" style="background-image: url('assets/img/property.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Property & Tenancy System</h2>
                <p class="product-banner-description">Efficiently manage your properties and tenants with our specialized system.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Property Management</h4>
                <p>Oversee multiple properties from a single dashboard</p>
            </div>
            <div class="module">
                <h4>Tenant Management</h4>
                <p>Streamline tenant applications, leases, and communications</p>
            </div>
            <div class="module">
                <h4>Maintenance Tracking</h4>
                <p>Efficiently handle maintenance requests and scheduling</p>
            </div>
        </div>
    `,
    itm: `
        <div class="product-banner" style="background-image: url('assets/img/it-management.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">ITSM, ITAM & Unified Endpoint Management</h2>
                <p class="product-banner-description">Comprehensive IT management solutions for your organization.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Service Management</h4>
                <p>Streamline IT service delivery and support</p>
            </div>
            <div class="module">
                <h4>Asset Management</h4>
                <p>Track and manage IT assets throughout their lifecycle</p>
            </div>
            <div class="module">
                <h4>Endpoint Management</h4>
                <p>Centrally manage and secure all your endpoints</p>
            </div>
        </div>
    `,
    erp: `
        <div class="product-banner" style="background-image: url('assets/img/erp.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">ERP & EAM</h2>
                <p class="product-banner-description">Integrated Enterprise Resource Planning and Asset Management solutions.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Financial Management</h4>
                <p>Comprehensive financial planning and reporting</p>
            </div>
            <div class="module">
                <h4>Supply Chain Management</h4>
                <p>Optimize your entire supply chain process</p>
            </div>
            <div class="module">
                <h4>Asset Lifecycle Management</h4>
                <p>Efficiently manage assets from acquisition to disposal</p>
            </div>
        </div>
    `
});

// Industri dropdown
handleDropdown('industriDropdown', 'industriDropdownContent');
handleCategories('#industriDropdownContent', 'industri-details', {
    manufacturing: `
        <div class="product-banner" style="background-image: url('assets/img/manu.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Manufacturing Solutions</h2>
                <p class="product-banner-description">Optimize your manufacturing processes with our cutting-edge solutions.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Production Planning</h4>
                <p>Streamline production schedules and resource allocation</p>
            </div>
            <div class="module">
                <h4>Quality Control</h4>
                <p>Ensure product quality with advanced monitoring tools</p>
            </div>
            <div class="module">
                <h4>Supply Chain Management</h4>
                <p>Optimize inventory and supplier relationships</p>
            </div>
        </div>
    `,
    healthcare: `
        <div class="product-banner" style="background-image: url('assets/img/health.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Healthcare Solutions</h2>
                <p class="product-banner-description">Enhance patient care and streamline operations with our healthcare systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Electronic Health Records</h4>
                <p>Secure and efficient patient data management</p>
            </div>
            <div class="module">
                <h4>Appointment Scheduling</h4>
                <p>Optimize patient appointments and resource allocation</p>
            </div>
            <div class="module">
                <h4>Billing and Claims Management</h4>
                <p>Streamline healthcare billing processes</p>
            </div>
        </div>
    `,
    retail: `
        <div class="product-banner" style="background-image: url('assets/img/retail.png');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Retail Solutions</h2>
                <p class="product-banner-description">Elevate your retail business with our comprehensive management systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Inventory Management</h4>
                <p>Real-time tracking and optimization of stock levels</p>
            </div>
            <div class="module">
                <h4>Point of Sale (POS)</h4>
                <p>Efficient and user-friendly checkout systems</p>
            </div>
            <div class="module">
                <h4>Customer Relationship Management</h4>
                <p>Enhance customer engagement and loyalty</p>
            </div>
        </div>
    `
});

// Partner dropdown
handleDropdown('partnerDropdown', 'partnerDropdownContent');
handleCategories('#partnerDropdownContent', 'partner-details', {
    reseller: `
        <div class="product-banner" style="background-image: url('assets/img/partnership.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Reseller Program</h2>
                <p class="product-banner-description">Join our network of successful resellers and grow your business.</p>
            </div>
        </div>
        <div class="modules-title">PROGRAM BENEFITS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Competitive Pricing</h4>
                <p>Access to exclusive reseller discounts</p>
            </div>
            <div class="module">
                <h4>Marketing Support</h4>
                <p>Comprehensive marketing materials and training</p>
            </div>
            <div class="module">
                <h4>Technical Assistance</h4>
                <p>Dedicated support for your technical queries</p>
            </div>
        </div>
    `,
    technology: `
        <div class="product-banner" style="background-image: url('assets/img/technology-partners.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Technology Partners</h2>
                <p class="product-banner-description">Collaborate with us to create innovative solutions for the market.</p>
            </div>
        </div>
        <div class="modules-title">PARTNERSHIP BENEFITS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Joint Development</h4>
                <p>Collaborate on cutting-edge technology solutions</p>
            </div>
            <div class="module">
                <h4>Integration Support</h4>
                <p>Seamless integration with our existing platforms</p>
            </div>
            <div class="module">
                <h4>Co-marketing Opportunities</h4>
                <p>Expand your reach through joint marketing efforts</p>
            </div>
        </div>
    `
});

// Contact dropdown
handleDropdown('contactDropdown', 'contactDropdownContent');
handleCategories('#contactDropdownContent', 'contact-details', {
    business: `
        <div class="product-banner" style="background-image: url('assets/img/consult.png');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Business Consultation</h2>
                <p class="product-banner-description">Get in touch with our team for any inquiries or support.</p>
            </div>
        </div>
        <div class="modules-title">CONTACT OPTIONS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>General Inquiries</h4>
                <p>For general questions and information</p>
            </div>
            <div class="module">
                <h4>Technical Support</h4>
                <p>Get help with our products and services</p>
            </div>
            <div class="module">
                <h4>Business Partnerships</h4>
                <p>Explore collaboration opportunities</p>
            </div>
        </div>
    `,
    technical: `
        <div class="product-banner" style="background-image: url('assets/img/technical-support.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Technical Support</h2>
                <p class="product-banner-description">Expert assistance for all your technical inquiries and issues.</p>
            </div>
        </div>
        <div class="modules-title">CONTACT OPTIONS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Live Chat Support</h4>
                <p>Instant help from our technical experts</p>
            </div>
            <div class="module">
                <h4>Email Support</h4>
                <p>Detailed responses to complex technical queries</p>
            </div>
            <div class="module">
                <h4>Phone Support</h4>
                <p>Direct line to our technical support team</p>
            </div>
        </div>
    `
});

// Tentang Realta dropdown
handleDropdown('tentangRealtaDropdown', 'tentangRealtaDropdownContent');
handleCategories('#tentangRealtaDropdownContent', 'tentangRealta-details', {
    about: `
    <div class="product-banner" style="background-image: url('assets/img/tentang.jpg');" onclick="navigateWithLoading('about.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">About Realta</h2>
                <p class="product-banner-description">Discover our journey, values, and commitment to innovation.</p>
            </div>
        </div>
        <div class="modules-title">OUR STORY</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Our Mission</h4>
                <p>Empowering businesses through technology</p>
            </div>
            <div class="module">
                <h4>Our Team</h4>
                <p>Meet the experts behind our solutions</p>
            </div>
            <div class="module">
                <h4>Our Achievements</h4>
                <p>Milestones that define our success</p>
            </div>
        </div>
    `,
    
});

// Career dropdown
handleDropdown('careerDropdown', 'careerDropdownContent');
handleCategories('#careerDropdownContent', 'career-details', {
    openings: `
         <div class="product-banner" style="background-image: url('assets/img/career.png');" onclick="navigateWithLoading('career.html');">       
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Careers at Realta</h2>
                <p class="product-banner-description">Join our team and shape the future of technology.</p>
            </div>
        </div>
        <div class="modules-title">WHY JOIN US</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Innovation-Driven Culture</h4>
                <p>Be part of cutting-edge technology development</p>
            </div>
            <div class="module">
                <h4>Professional Growth</h4>
                <p>Continuous learning and career advancement opportunities</p>
            </div>
            <div class="module">
                <h4>Work-Life Balance</h4>
                <p>Flexible work arrangements and comprehensive benefits</p>
            </div>
        </div>
    `,
    internships: `
        <div class="product-banner" style="background-image: url('assets/img/internships.jpg');" onclick="navigateWithLoading('internships.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Internship Programs</h2>
                <p class="product-banner-description">Kickstart your career with hands-on experience at Realta.</p>
            </div>
        </div>
        <div class="modules-title">PROGRAM HIGHLIGHTS</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Tech Internships</h4>
                <p>Gain practical experience in software development</p>
            </div>
            <div class="module">
                <h4>Business Internships</h4>
                <p>Learn about tech business operations</p>
            </div>
            <div class="module">
                <h4>Design Internships</h4>
                <p>Contribute to user experience and interface design</p>
            </div>
        </div>
    `,
    culture: `
        <div class="product-banner" style="background-image: url('assets/img/company-culture.jpg');" onclick="navigateWithLoading('company-culture.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Company Culture</h2>
                <p class="product-banner-description">Discover what makes Realta a great place to work.</p>
            </div>
        </div>
        <div class="modules-title">OUR VALUES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Innovation</h4>
                <p>We encourage creative thinking and new ideas</p>
            </div>
            <div class="module">
                <h4>Collaboration</h4>
                <p>Teamwork is at the heart of our success</p>
            </div>
            <div class="module">
                <h4>Growth</h4>
                <p>We invest in our employees' personal and professional development</p>
            </div>
        </div>
    `
});



// NAV SHRINK

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var scrollThreshold = 50; // Adjust this value as needed
    var debounceTimer;
    var resizeTimer;

    function debounce(func, delay) {
        return function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(func, delay);
        };
    }

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
                // Force a reflow before adding the 'animating' class
                void navbar.offsetWidth;
                navbar.classList.add('animating');
            }
        } else {
            if (navbar.classList.contains('scrolled')) {
                navbar.classList.remove('scrolled');
                // Force a reflow before adding the 'animating' class
                void navbar.offsetWidth;
                navbar.classList.add('animating');
            }
        }
    }


    function handleResize() {
        navbar.classList.add('resizing');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            navbar.classList.remove('resizing');
        }, 300);
    }

    window.addEventListener('scroll', debounce(handleScroll, 10));
    window.addEventListener('resize', debounce(handleResize, 100));

    // Remove the 'animating' class after the transition is complete
    navbar.addEventListener('transitionend', function() {
        navbar.classList.remove('animating');
    });
});


// LANG
document.getElementById('languageSwitch').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    const dropdownMenu = document.querySelector('.custom-dropdown-menu');
    if (dropdownMenu && dropdownMenu.style.display === 'block' && !e.target.closest('.custom-dropdown')) {
        dropdownMenu.style.display = 'none';
    }
});

document.querySelectorAll('.custom-dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        // Implement your language change logic here
        console.log('Changing language to:', lang);
        document.querySelector('.custom-dropdown-menu').style.display = 'none';
    });
});




