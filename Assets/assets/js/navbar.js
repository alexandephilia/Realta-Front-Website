function handleDropdown(dropdownId, contentId) {
    const dropdown = document.getElementById(dropdownId);
    const megaDropdown = document.getElementById(contentId);
    let dropdownTimeout;
    let hoverDelay;
    let isAnimating = false;

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
        return new Promise(resolve => {
            const activeDropdowns = Array.from(document.querySelectorAll('.mega-dropdown.show')).filter(el => el.id !== contentId);
            
            if (activeDropdowns.length === 0) {
                resolve();
                return;
            }

            const animationPromises = activeDropdowns.map(el => {
                return new Promise(resolveDropdown => {
                    el.classList.remove('show');
                    el.classList.add('hide');
                    const otherDropdown = el.previousElementSibling;
                    if (otherDropdown) {
                        const otherArrowSpan = otherDropdown.querySelector('.dropdown-arrow');
                        if (otherArrowSpan) otherArrowSpan.remove();
                    }
                    
                    // Wait for hide animation to complete
                    setTimeout(resolveDropdown, 400);
                });
            });

            Promise.all(animationPromises).then(resolve);
        });
    }

    dropdown.addEventListener('mouseenter', async () => {
        if (isAnimating) return;
        
        clearTimeout(dropdownTimeout);
        clearTimeout(hoverDelay);

        hoverDelay = setTimeout(async () => {
            isAnimating = true;
            await closeOtherDropdowns();
            
            // Small delay before showing new dropdown
            setTimeout(() => {
                megaDropdown.classList.remove('hide');
                megaDropdown.classList.add('show');
                addArrowSpan();
                isAnimating = false;
            }, 50);
        }, 100);
    });

    dropdown.addEventListener('mouseleave', () => {
        clearTimeout(hoverDelay);
        if (isAnimating) return;

        dropdownTimeout = setTimeout(() => {
            isAnimating = true;
            megaDropdown.classList.remove('show');
            megaDropdown.classList.add('hide');
            removeArrowSpan();
            
            // Reset animation flag after hide animation completes
            setTimeout(() => {
                isAnimating = false;
            }, 400);
        }, 150);
    });

    megaDropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        clearTimeout(hoverDelay);
        if (!megaDropdown.classList.contains('show')) {
            megaDropdown.classList.remove('hide');
            megaDropdown.classList.add('show');
        }
    });

    megaDropdown.addEventListener('mouseleave', () => {
        if (isAnimating) return;
        
        dropdownTimeout = setTimeout(() => {
            isAnimating = true;
            megaDropdown.classList.remove('show');
            megaDropdown.classList.add('hide');
            removeArrowSpan();
            
            setTimeout(() => {
                isAnimating = false;
            }, 400);
        }, 150);
    });

    // Handle animation end
    megaDropdown.addEventListener('transitionend', () => {
        if (megaDropdown.classList.contains('hide')) {
            isAnimating = false;
        }
    });
}

// Add this function before handleDropdown
function setModuleColors(moduleType, primaryColor, _) {
    // Handle HR modules specially since they have unique class names
    const selector = moduleType.startsWith('hr-') 
        ? `.${moduleType}` // For HR modules, use the full class name
        : `.${moduleType}-module`; // For other modules, append -module
    
    const modules = document.querySelectorAll(`${selector} .feature-list li i`);
    modules.forEach(icon => {
        // Use solid color instead of gradient
        icon.style.background = 'none';
        icon.style.webkitBackgroundClip = 'initial';
        icon.style.webkitTextFillColor = 'initial';
        icon.style.color = primaryColor;
    });
}

// Function to handle category selection
function handleCategories(containerSelector, detailsId, content) {
    // Add unified styling for feature lists
    const styleBlock = `
        <style>
            .modules-title {
                font-size: 16px;
                font-weight: bold;
                color: rgba(133, 22, 188, 0.8);
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid transparent;
                background-image: linear-gradient(to right, 
                    rgba(255, 255, 255, 1) 0%, 
                    rgba(155, 69, 197, 0.644) 50%, 
                    rgba(255, 255, 255, 1) 100%
                );
                background-clip: padding-box;
                background-position: 0 100%;
                background-size: 100% 2px;
                background-repeat: no-repeat;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }

            .modules-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                width: 95%;
                margin: 0 auto;
            }

            .module {
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: left;
                height: 100%;
                width: 100%;
                position: relative;
            }

            .module h4 {
                font-size: 20px;
                margin: 0 0 12px 0;
                text-align: left !important;
                width: 100%;
                position: relative;
                z-index: 2;
            }

            .module p {
                font-size: 16px !important;
                color: #666;
                margin: 0;
                text-align: left !important;
                width: 100%;
                position: relative;
                z-index: 2;
                margin-bottom: 15px;
            }

            .feature-list {
                list-style: none;
                padding: 0;
                margin-top: 13px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            .feature-list li {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                padding: 5px 12px;
                border-radius: 6px;
                background: rgba(255,255,255,0.05);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                width: 90%;
                max-width: 250px;
                box-shadow: 0 1px 2px rgba(0,0,0,0.02);
            }


            .feature-list li:active {
                transform: translateY(0);
                box-shadow: 0 2px 4px rgba(0,0,0,0.03);
            }

            body.dark-mode .feature-list li {
                background: rgba(255,255,255,0.03);
                box-shadow: 0 1px 2px rgba(0,0,0,0.1);
            }

            body.dark-mode .feature-list li:hover {
                background: rgba(255,255,255,0.05);
                box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }

            body.dark-mode .feature-list li:active {
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .feature-list li i {
                margin-right: 10px;
                min-width: 20px;
                text-align: center;
                font-size: 16px;
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .feature-list li span {
                font-size: 16px;
                text-align: left;
                transition: transform 0.3s ease;
            }

            @media (max-width: 1368px) and (max-height: 768px) {
                .modules-title {
                    font-size: 15px;
                    margin-bottom: 15px;
                }

                .module h4 {
                    font-size: 16px;
                    margin-bottom: 8px;
                }

                .module p {
                    font-size: 13px;
                    margin-bottom: 12px;
                }

                .feature-list li,
                .feature-list li i,
                .feature-list li span {
                    font-size: 13px;
                }

                .feature-list li {
                    padding: 6px 10px;
                    margin-bottom: 6px;
                }

                .feature-list li:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 3px 6px rgba(0,0,0,0.04);
                }

                body.dark-mode .feature-list li:hover {
                    box-shadow: 0 3px 6px rgba(0,0,0,0.12);
                }
            }

            /* Add scrolling to menu container */
            .mega-dropdown .dropdown-content {
                max-height: 75vh; /* Limit height to 75% of viewport height */
                overflow-y: auto; /* Enable vertical scrolling */
                overflow-x: hidden; /* Prevent horizontal scrolling */
                scrollbar-width: thin; /* For Firefox */
                scrollbar-color: rgba(155, 69, 197, 0.6) transparent; /* For Firefox */
            }
            
            /* Scrollbar styling for Webkit browsers */
            .mega-dropdown .dropdown-content::-webkit-scrollbar {
                width: 6px;
            }
            
            .mega-dropdown .dropdown-content::-webkit-scrollbar-track {
                background: transparent;
            }
            
            .mega-dropdown .dropdown-content::-webkit-scrollbar-thumb {
                background-color: rgba(155, 69, 197, 0.6);
                border-radius: 6px;
            }
            
            /* Bottom modules container styling */
            .bottom-modules {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                width: 65%;
                margin: 20px auto 0;
            }
            
            /* Responsive adjustments */
            @media (max-width: 992px) {
                .bottom-modules {
                    width: 95%;
                }
            }
            
            @media (max-width: 768px) {
                .bottom-modules {
                    grid-template-columns: repeat(2, 1fr);
                    width: 95%;
                }
            }
            
            @media (max-width: 576px) {
                .bottom-modules {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;

    // Insert the style block before the content
    if (!document.querySelector('.feature-list-styles')) {
        const styleElement = document.createElement('div');
        styleElement.className = 'feature-list-styles';
        styleElement.innerHTML = styleBlock;
        document.body.appendChild(styleElement);
    }

    const categories = document.querySelectorAll(`${containerSelector} .product-category`);
    const details = document.getElementById(detailsId);

    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            const productType = this.getAttribute('data-product');
            
            // Update content
            details.innerHTML = content[productType];
            
            // Force a reflow before adding animation classes
            const featureItems = details.querySelectorAll('.feature-list li');
            featureItems.forEach((item, index) => {
                item.style.setProperty('--item-index', index);
                // Force reflow
                void item.offsetWidth;
                // Add animation class
                item.classList.add('feature-item-animate');
            });

            // Set colors based on product type
            switch(productType) {
                case 'eam':
                    setModuleColors('module', '#8B0000');
                    break;
                case 'hrs':
                    // Handle each HR module type separately
                    setModuleColors('hr-core-module', '#FF0066');
                    setModuleColors('hr-advance-module', '#FF0066');
                    setModuleColors('hr-mobile-module', '#FF0066');
                    break;
                case 'pts':
                    setModuleColors('sales-marketing', '#0000FF');
                    setModuleColors('tenancy', '#0000FF');
                    setModuleColors('billing', '#0000FF');
                    break;
                case 'gcs':
                    setModuleColors('membership', '#33CC33');
                    setModuleColors('operations', '#33CC33');
                    setModuleColors('tournament', '#33CC33');
                    break;
                case 'hms':
                    setModuleColors('front-office', '#9933FF');
                    setModuleColors('logistic', '#9933FF');
                    setModuleColors('back-office', '#9933FF');
                    break;
            }
        });
    });

    // Initialize with first category content
    if (categories.length > 0) {
        const firstProductType = categories[0].getAttribute('data-product');
        details.innerHTML = content[firstProductType];
        
        // Animate initial items
        requestAnimationFrame(() => {
            const featureItems = details.querySelectorAll('.feature-list li');
            featureItems.forEach((item, index) => {
                item.style.setProperty('--item-index', index);
                // Force reflow
                void item.offsetWidth;
                // Add animation class
                item.classList.add('feature-item-animate');
            });
        });
    }
}

// Solusi dropdown
handleDropdown('solutionsDropdown', 'solutionsDropdownContent');
handleCategories('#solutionsDropdownContent', 'product-details', {
      eam: `
        <div class="product-banner" style="background-image: url('assets/img/eam.jpg');" onclick="navigateWithLoading('erp-micro.html');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">EAM & ERP</h2>
                <p class="product-banner-description">Streamline Your Business Operations.</p>
            </div>
        </div>

        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Enterprise Planning</h4>
                <p>Integrate and optimize core business processes</p>
            </div>
            <div class="module">
                <h4>Asset & Warehouse Management</h4>
                <p>Optimize your resources and inventory</p>
            </div>
            <div class="module">
                <h4>Business Intelligence</h4>
                <p>Make data-driven decisions</p>
            </div>
        </div>
    `,
    hrs: `
    <div class="product-banner" style="background-image: url('assets/img/hr.jpg');" onclick="navigateWithLoading('hr-micro.html')">                
        <div class="glare"></div>
        <div class="product-banner-content">
                <img src="assets/img/probes3.png" class="product-title" style="width: 130px;">
            <p class="product-banner-description"><b>Human Resource Information System</b></p>
            <p class="product-banner-description">To Effectively Manage Human Resource</p>

        </div>
    </div>

    <div class="modules-title">KEY FEATURES</div>
    <div class="modules-grid">
        <div class="module hr-core-module">
            <h4>HR Core</h4>
            <p>HR Operation with our integrated solution and unified platform.</p>
            <ul class="feature-list">
                <li>
                    <i class="fas fa-user"></i>
                    <span>Personnel</span>
                </li>
                <li>
                    <i class="fas fa-clock"></i>
                    <span>Attendance</span>
                </li>

                <li>
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Payroll</span>
                </li>
                <li>
                    <i class="fas fa-heartbeat"></i>
                    <span>Medical</span>
                </li>
                

                <li>
                    <i class="fas fa-hand-holding-usd"></i>
                    <span>Loan</span>
                </li>
            </ul>
        </div>
        <div class="module hr-advance-module">
            <h4>HR Advance</h4>
            <p>Integrate and optimize core business processes</p>
            <ul class="feature-list">
                <li>
                    <i class="fas fa-user-plus"></i>
                    <span>Recruitment</span>
                </li>
                <li>
                    <i class="fas fa-building"></i>
                    <span>Job Competency</span>
                </li>
                <li>
                    <i class="fas fa-graduation-cap"></i>
                    <span>Training</span>
                </li>
                <li>
                    <i class="fas fa-chart-line"></i>
                    <span>Performance Management</span>
                </li>
            </ul>
        </div>
        <div class="module hr-mobile-module">
            <h4>HR Mobile</h4>
            <p>Empower and manage HR with our ESS app with ease.</p>
            <ul class="feature-list">
              
                <li>
                    <i class="fas fa-eye"></i>
                    <span>Employee Self Service App</span>
                </li>
            </ul>
        </div>
    </div>
`,
pts: `
<div class="product-banner" style="background-image: url('assets/img/property.jpg');" onclick="navigateWithLoading('bimasakti-micro.html');">                
    <div class="glare"></div>
    <div class="product-banner-content">
        <img src="assets/img/probes4.png" class="product-title" style="width: 160px;">
        <p class="product-banner-description"><b>Property and Tenancy Management System</b></p>
         <p class="product-banner-description" style="margin-top: -6px;">Design specifically to help today's Building Management work more efficiently and effectively</p>
    </div>
</div>

<style>
    .sales-marketing-module i {
        margin-right: 10px;
        background: linear-gradient(45deg, #0000FF, #87CEEB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .tenancy-module i {
        margin-right: 10px;
        background: linear-gradient(45deg, #0000FF, #87CEEB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .billing-module i {
        margin-right: 10px;
        background: linear-gradient(45deg, #0000FF, #87CEEB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .maintenance-module i {
        margin-right: 10px;
        background: linear-gradient(45deg, #0000FF, #87CEEB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .back-office-module i {
        margin-right: 10px;
        background: linear-gradient(45deg, #0000FF, #87CEEB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .feature-list li {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        padding: 1px;
        border-radius: 6px;
        background: rgba(255,255,255,0.05);
        transition: all 0.3s ease;
    }

    .feature-list li span {
        font-size: 0.9em;
    }
    
    /* Bottom modules container styling */
    .bottom-modules {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 65%;
        margin: 20px auto 0;
    }
    
    /* Responsive adjustments */
    @media (max-width: 992px) {
        .bottom-modules {
            width: 95%;
        }
    }
    
    @media (max-width: 768px) {
        .bottom-modules {
            grid-template-columns: repeat(2, 1fr);
            width: 95%;
        }
    }
    
    @media (max-width: 576px) {
        .bottom-modules {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="modules-title">KEY FEATURES</div>
<div class="modules-grid">
    <div class="module sales-marketing-module">
        <h4>Sales & Marketing</h4>
        <p>Boost Your Sales with our comprehensive, integrated solution.</p>
        <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
            <li>
                <i class="fas fa-video"></i>
                <span>Strata Release</span>
            </li>
            <li>
                <i class="fas fa-key"></i>
                <span>Handover</span>
            </li>
            <li>
                <i class="fas fa-check-circle"></i>
                <span>Fitting Out</span>
            </li>
            <li>
                <i class="fas fa-file-contract"></i>
                <span>Lease Renewal</span>
            </li>
        </ul>
    </div>
    <div class="module tenancy-module">
        <h4>Tenancy Management</h4>
        <p>With our comprehensive, user-friendly platform.</p>
        <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
            <li>
                <i class="fas fa-database"></i>
                <span>Tenant Database</span>
            </li>
            <li>
                <i class="fas fa-dollar-sign"></i>
                <span>Service Charge</span>
            </li>
            <li>
                <i class="fas fa-piggy-bank"></i>
                <span>Sinking Fund</span>
            </li>
            <li>
                <i class="fas fa-bolt"></i>
                <span>Utilities</span>
            </li>
        </ul>
    </div>
    <div class="module billing-module">
        <h4>Billing Management</h4>
        <p>With our efficient handling of billing and payments.</p>
        <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
            <li>
                <i class="fas fa-money-bill-wave"></i>
                <span>Down Payment</span>
            </li>
            <li>
                <i class="fas fa-clock"></i>
                <span>Installment</span>
            </li>
            <li>
                <i class="fas fa-bolt"></i>
                <span>Utilities</span>
            </li>
            <li>
                <i class="fas fa-cogs"></i>
                <span>Others</span>
            </li>
        </ul>
    </div>
</div>

<div class="bottom-modules">
    <div class="module maintenance-module">
        <h4>Maintenance</h4>
        <p>Streamlined management of property upkeep and repairs.</p>
        <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
            <li>
                <i class="fas fa-database"></i>
                <span>Assets Master</span>
            </li>
            <li>
                <i class="fas fa-calendar-alt"></i>
                <span>Maintenance Schedule</span>
            </li>
            <li>
                <i class="fas fa-comment-dots"></i>
                <span>Complaint & Request</span>
            </li>
            <li>
                <i class="fas fa-tasks"></i>
                <span>Work Order</span>
            </li>
        </ul>
    </div>
    <div class="module back-office-module">
        <h4>Back Office</h4>
        <p>Comprehensive administrative and financial management tools.</p>
        <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
            <li>
                <i class="fas fa-shopping-cart"></i>
                <span>Purchasing</span>
            </li>
            <li>
                <i class="fas fa-file-invoice-dollar"></i>
                <span>Account Receivable</span>
            </li>
            <li>
                <i class="fas fa-file-invoice"></i>
                <span>Account Payable</span>
            </li>
            <li>
                <i class="fas fa-university"></i>
                <span>Cash & Bank</span>
            </li>
            <li>
                <i class="fas fa-book"></i>
                <span>General Ledger</span>
            </li>
            <li>
                <i class="fas fa-boxes"></i>
                <span>Inventory</span>
            </li>
            <li>
                <i class="fas fa-building"></i>
                <span>Fixed Asset</span>
            </li>
        </ul>
    </div>
</div>
`,
    gcs: `
        <div class="product-banner" style="background-image: url('assets/img/gold.jpg');" onclick="navigateWithLoading('golf-micro.html');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <img src="assets/img/golf.png" class="product-title" style="width: 120px;">
                <p class="product-banner-description" style="margin-top: -6px;"><b>Golf Course Management System</b></p>
                <p class="product-banner-description" style="margin-top: -6px;">Supporting The Golfer's Journey On and Off The Course</p>
            </div>
        </div>

        <style>
            .membership-module i {
                margin-right: 10px;
                color: rgb(51, 204, 51);
            }

            .operations-module i {
                margin-right: 10px;
                color: rgb(51, 204, 51);
            }

            .tournament-module i {
                margin-right: 10px;
                color: rgb(51, 204, 51);
            }

            .feature-list li {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                padding: 1px;
                border-radius: 6px;
                background: rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }

            .feature-list li span {
                font-size: 0.9em;
            }
        </style>

        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module membership-module">
                <h4>Membership Management</h4>
                <p>Manage and track member information and activities with our integrated solution.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-id-card"></i>
                        <span>Comprehensive Member's Profile</span>
                    </li>
                    <li>
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Member Invoicing</span>
                    </li>
                    <li>
                        <i class="fas fa-chart-line"></i>
                        <span>Member's Playing and Spending Activity</span>
                    </li>
                    <li>
                        <i class="fas fa-tag"></i>
                        <span>Membership Class & Category</span>
                    </li>
                    <li>
                        <i class="fas fa-user-check"></i>
                        <span>Monitoring Member's Payment Status</span>
                    </li>
                    <li>
                        <i class="fas fa-user-tie"></i>
                        <span>Member Manager</span>
                    </li>
                </ul>
            </div>
            <div class="module operations-module">
                <h4>Golf Operation</h4>
                <p>Streamline golf operations with our integrated system and unified platform.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-door-open"></i>
                        <span>Front Office</span>
                    </li>
                    <li>
                        <i class="fas fa-leaf"></i>
                        <span>Lawn Operations</span>
                    </li>
                    <li>
                        <i class="fas fa-chart-bar"></i>
                        <span>Back Office</span>
                    </li>
                </ul>
            </div>
            <div class="module tournament-module">
                <h4>Tournament Management</h4>
                <p>Your all-in-one golf event solution and golf management system.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-trophy"></i>
                        <span>Tournament Leaderboard</span>
                    </li>
                    <li>
                        <i class="fas fa-users"></i>
                        <span>Handicap Pairing</span>
                    </li>
                    <li>
                        <i class="fas fa-golf-ball"></i>
                        <span>Tournament Pairing</span>
                    </li>
                    <li>
                        <i class="fas fa-clipboard"></i>
                        <span>Tournament Scoring Method</span>
                    </li>
                </ul>
            </div>
        </div>
    `,

    hms: `
        <div class="product-banner" style="background-image: url('assets/img/hotel.jpg');" onclick="navigateWithLoading('rhapsody-micro.html');">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <img src="assets/img/probes1.png" class="product-title" style="width: 160px;">
                <p class="product-banner-description"><b>Hotel Management System</b></p>
                   <p class = "product-banner-description"
                   style = "margin-top: -6px;"> To Orchestrate Your Entire Hotel Operation </p>
            </div>
        </div>

        <style>
            .front-office-module i {
                margin-right: 10px;
                background: linear-gradient(45deg, #9933FF, #CC99FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .logistic-module i {
                margin-right: 10px;
                background: linear-gradient(45deg, #9933FF, #CC99FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .back-office-module i {
                margin-right: 10px;
                background: linear-gradient(45deg, #9933FF, #CC99FF);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .feature-list li {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                padding: 1px;
                border-radius: 6px;
                background: rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }

            .feature-list li span {
                font-size: 0.9em;
            }
        </style>

        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module front-office-module">
                <h4>Front Office</h4>
                <p>Simplify guest services and reception tasks with our optimized solution.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-glass-cheers"></i>
                        <span>Sales & Banquet</span>
                    </li>
                    <li>
                        <i class="fas fa-calendar-check"></i>
                        <span>Reservation</span>
                    </li>
                    <li>
                        <i class="fas fa-door-open"></i>
                        <span>Check-in/Out</span>
                    </li>
                    <li>
                        <i class="fas fa-tags"></i>
                        <span>Dynamic Pricing</span>
                    </li>
                    <li>
                        <i class="fas fa-cash-register"></i>
                        <span>Point Of Sales</span>
                    </li>
                    <li>
                        <i class="fas fa-broom"></i>
                        <span>Housekeeping</span>
                    </li>
                </ul>
            </div>
            <div class="module logistic-module">
                <h4>Logistic</h4>
                <p>Optimize inventory and supply chain management.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-shopping-cart"></i>
                        <span>Purchasing</span>
                    </li>
                    <li>
                        <i class="fas fa-box"></i>
                        <span>Receiving</span>
                    </li>
                    <li>
                        <i class="fas fa-warehouse"></i>
                        <span>Inventory</span>
                    </li>
                    <li>
                        <i class="fas fa-chart-line"></i>
                        <span>Cost Control</span>
                    </li>
                    <li>
                        <i class="fas fa-utensils"></i>
                        <span>Recipe</span>
                    </li>
                </ul>
            </div>
            <div class="module back-office-module">
                <h4>Back Office</h4>
                <p>Improve operations and financial management.</p>
                <ul class="feature-list" style="list-style: none; padding: 0; margin-top: 15px;">
                    <li>
                        <i class="fas fa-file-invoice-dollar"></i>
                        <span>Accounts</span>
                    </li>
                    <li>
                        <i class="fas fa-file-alt"></i>
                        <span>Receivable</span>
                    </li>
                    <li>
                        <i class="fas fa-file-invoice"></i>
                        <span>Accounts Payable</span>
                    </li>
                    <li>
                        <i class="fas fa-university"></i>
                        <span>Cash & Bank</span>
                    </li>
                    <li>
                        <i class="fas fa-calculator"></i>
                        <span>Fixed Asset</span>
                    </li>
                    <li>
                        <i class="fas fa-book"></i>
                        <span>General Ledger</span>
                    </li>
                </ul>
            </div>
        </div>
    `,
   
    itm: `
        <div class="product-banner" style="background-image: url('assets/img/it-management.jpg');" onclick="navigateWithLoading('itsm-micro.html')">                
            <div class="glare"></div>
            <div class="product-banner-content">
                <img src="assets/img/probes5.png" class="product-title" style="width: 160px;">
                <p class="product-banner-description"><b>ITSM, ITAM & Unified Endpoint Management</b></p>
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
        <div class="product-banner" style="background-image: url('assets/img/erp.jpg');" onclick="navigateWithLoading('realnet-micro.html')">
            <div class="glare"></div>
            <div class="product-banner-content">
                <img src="assets/img/RealNET.png" class="product-title" style="width: 160px;">
                <p class="product-banner-description"><b>Network & System Integration</b></p>
                <p class="product-banner-description" style="margin-top: -6px;">One Solution concept, a strategic approach that skillfully blends various IT elements into a streamlined and efficient framework that is precisely tailored to each client's specific needs.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Hardware & Software</h4>
                <p>Comprehensive solutions for selecting, deploying, and managing IT hardware and software tailored to your business needs</p>
            </div>
            <div class="module">
                <h4>Network</h4>
                <p>Robust network solutions designed to ensure seamless connectivity, performance, and security across your entire business ecosystem</p>
            </div>
            <div class="module">
                <h4>Cloud Infrastructure</h4>
                <p>Scalable cloud solutions that provide secure and flexible environments for hosting and managing your applications and data</p>
            </div>
        </div>
    `
});
// Industry dropdown
handleDropdown('industriDropdown', 'industriDropdownContent');
handleCategories('#industriDropdownContent', 'industri-details', {
    hospitality: `
        <div class="product-banner" style="background-image: url('assets/img/hospitality.jpg');" onclick="navigateWithLoading('hospitality.html');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Hospitality Solutions</h2>
                <p class="product-banner-description">Elevate guest experiences with our comprehensive hospitality management systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Reservation Management</h4>
                <p>Streamline bookings and optimize occupancy rates</p>
            </div>
            <div class="module">
                <h4>Guest Services</h4>
                <p>Enhance guest satisfaction with personalized services</p>
            </div>
            <div class="module">
                <h4>Revenue Management</h4>
                <p>Maximize revenue with dynamic pricing strategies</p>
            </div>
        </div>
    `,
    property: `
        <div class="product-banner" style="background-image: url('assets/img/property.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <img src="assets/img/probes4.png" class="product-title" style="width: 160px;">
                <p class="product-banner-description"><b>Property Management Solutions</b></p>
               
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Lease Management</h4>
                <p>Efficiently manage contracts and renewals</p>
            </div>
            <div class="module">
                <h4>Maintenance Tracking</h4>
                <p>Streamline property maintenance and repairs</p>
            </div>
            <div class="module">
                <h4>Tenant Portal</h4>
                <p>Enhance communication and service delivery</p>
            </div>
        </div>
    `,
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
    fsi: `
        <div class="product-banner" style="background-image: url('assets/img/fsi.jpg');">   
            <div class="glare"></div>
            <div class="product-banner-content">
                <h2 class="product-title">Financial Services Solutions</h2>
                <p class="product-banner-description">Enhance financial operations and security with our advanced systems.</p>
            </div>
        </div>
        <div class="modules-title">KEY FEATURES</div>
        <div class="modules-grid">
            <div class="module">
                <h4>Risk Management</h4>
                <p>Advanced tools for identifying and mitigating financial risks</p>
            </div>
            <div class="module">
                <h4>Compliance Monitoring</h4>
                <p>Ensure adherence to regulatory requirements</p>
            </div>
            <div class="module">
                <h4>Transaction Processing</h4>
                <p>Efficient and secure handling of financial transactions</p>
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








