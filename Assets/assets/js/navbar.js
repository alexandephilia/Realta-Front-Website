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
        <div class="product-banner" style="background-image: url('assets/img/hotel.jpg');">   
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
                <p class="product-banner-description">Manage your golf course operations efficiently with our specialized system.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Tee Time Management</h4>
                <p>Optimize tee time scheduling and bookings</p>
            </div>
            <div class="module">
                <h4>Pro Shop Operations</h4>
                <p>Manage inventory and sales in your pro shop</p>
            </div>
            <div class="module">
                <h4>Course Analytics</h4>
                <p>Track course usage and optimize operations</p>
            </div>
        </div>
    `,
    hrs: `
        <div class="product-banner" style="background-image: url('assets/img/hr.jpg');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">HR System</h2>
                <p class="product-banner-description">Streamline your human resources processes with our comprehensive HR system.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Employee Management</h4>
                <p>Efficiently manage employee data and records</p>
            </div>
            <div class="module">
                <h4>Payroll Processing</h4>
                <p>Automate payroll calculations and disbursements</p>
            </div>
            <div class="module">
                <h4>Performance Tracking</h4>
                <p>Monitor and evaluate employee performance</p>
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

// Konsultasi dropdown
handleDropdown('konsultasiDropdown', 'konsultasiDropdownContent');
handleCategories('#konsultasiDropdownContent', 'konsultasi-details', {
    business: `
        <div class="product-banner" style="background-image: url('assets/img/consult.png');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Business Consultation</h2>
                <p class="product-banner-description">Expert guidance to help your business thrive in the digital age.</p>
            </div>
        </div>
        <div class="modules-title">OUR SERVICES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Strategy Development</h4>
                <p>Craft winning business strategies</p>
            </div>
            <div class="module">
                <h4>Process Optimization</h4>
                <p>Streamline your operations for maximum efficiency</p>
            </div>
            <div class="module">
                <h4>Digital Transformation</h4>
                <p>Navigate the complexities of digital adoption</p>
            </div>
        </div>
    `,
    technical: `
        <div class="product-banner" style="background-image: url('assets/img/technical-consultation.jpg');">   
            <div class="product-banner" style="background-image: url('assets/img/technical-consultation.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Technical Consultation</h2>
                <p class="product-banner-description">In-depth technical expertise to solve your most complex challenges.</p>
            </div>
        </div>
        <div class="modules-title">OUR SERVICES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>System Architecture</h4>
                <p>Design scalable and robust system architectures</p>
            </div>
            <div class="module">
                <h4>Performance Optimization</h4>
                <p>Enhance system performance and efficiency</p>
            </div>
            <div class="module">
                <h4>Security Assessment</h4>
                <p>Identify and mitigate potential security risks</p>
            </div>
        </div>
    `
});

// Tentang Realta dropdown
handleDropdown('tentangRealtaDropdown', 'tentangRealtaDropdownContent');
handleCategories('#tentangRealtaDropdownContent', 'tentangRealta-details', {
    about: `
    <div class="product-banner" style="background-image: url('assets/img/tentang.jpg');">   
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
    careers: `
        <div class="product-banner" style="background-image: url('assets/img/careers.jpg');">   
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
    blog: `
    <div class="product-banner" style="background-image: url('assets/img/blog.jpeg');" onclick="navigateWithLoading('blog.html');">            
    <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Realta Blog</h2>
                <p class="product-banner-description">Insights, trends, and thought leadership in technology.</p>
            </div>
        </div>
        </div>
        <div class="modules-title">FEATURED CONTENT</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Tech Trends</h4>
                <p>Stay updated with the latest in technology</p>
            </div>
            <div class="module">
                <h4>Case Studies</h4>
                <p>Real-world applications of our solutions</p>
            </div>
            <div class="module">
                <h4>Industry Insights</h4>
                <p>Expert analysis on sector-specific challenges</p>
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




